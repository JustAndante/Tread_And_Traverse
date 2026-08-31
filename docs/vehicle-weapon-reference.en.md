---
layout: default
lang: en
page_kind: reference
title: "Vehicle Weapon System — Detailed Reference"
description: "Profiles, loadouts, ammo, firing, HUD, and replication"
product: weapon
doc_section: reference
---

# Vehicle Weapon System: detailed reference

`TurretSystemRuntime` is independent from Track Spline Builder. A vehicle uses
one visible `Vehicle Weapon System` component as the reusable facade for axes,
aiming, muzzle traces, ballistics, configured weapons, presentation, and
optional replication.

Use the [short guide]({{ '/docs/vehicle-weapon-system.en.html' | relative_url }})
for the first setup. This page defines the normal ownership and runtime
contracts. The [Blueprint node reference]({{ '/docs/vehicle-weapon-blueprint-nodes.en.html' | relative_url }})
contains the exact searchable Core and Advanced API names.

## Runtime contract

The normal Blueprint frame has three calls in a fixed order:

1. `Update Weapon Traces And Ballistics`;
2. `Update Vehicle Aim Sources`;
3. `Update Vehicle Weapon System`.

The component caches detailed results. Normal graphs do not rebuild registries,
copy large definition arrays, submit legacy trace samples, or apply pending
axis commands every Tick.

`Set Weapon System Active` is the single lifecycle gate for a destroyed,
disabled, or repaired vehicle. When inactive, the component skips aim, trace,
ballistic, UI, stabilization, and native replication work even if the owner
continues to call the compact update nodes.

## One owner for every setting

The recommended full vehicle chain is:

```text
Tank Variant Profile
└─ Armament Profile
   ├─ Aiming / Turret Setup (Vehicle Weapon System Profile)
   └─ Weapon Loadouts (Vehicle Weapon Loadout Setup)

Vehicle Ammo System
└─ Ammo Type Definitions
```

| Location | Owns |
| --- | --- |
| Aiming / Turret Setup | axes, installations, muzzle component/socket bindings, traces |
| Weapon Loadout | trigger, feed, cadence, reload, heat, recoil, launcher banks, ejection, effects and audio |
| Ammo Type Definition | projectile class, reserve, prediction settings except launch speed, icon and input |
| Projectile Blueprint | `Initial Speed`, damage, impact/trail and optional sabot |

Projectile speed has one owner: `Projectile Movement -> Initial Speed` on the
loaded Projectile Class. Ballistic prediction reads that value. There is no
second fallback velocity in the vehicle profile.

Smoke is a normal `Weapon ID`. Its launcher geometry and timing belong to the
loadout; its projectile and reserve belong to an Ammo Type. It does not need a
special Smoke profile or compatibility getter.

## Choose one authoring path

With a `Tank Variant Profile` assigned, keep
`Use Aiming / Turret Setup From Tank Profile` enabled. The component imports
axis, installation, and muzzle/trace definitions from the nested profile and
hides the local override arrays.

Turn the toggle off only for a rig whose local arrays must own those three
definition sets. The Tank Variant may still supply loadouts and the rest of the
vehicle configuration. Do not populate both paths as competing production
sources.

`Direct Weapon System Profile (Advanced)` is for direct profile authoring and
compatibility. `Direct Armament Profile (Fallback)` is used only when no Tank
Variant is assigned. Keep both empty on the normal Tank Variant path.

Run `Initialize Vehicle Armament Profile`, then
`Validate Vehicle Weapon System Configuration`. Profile assets and physical
bindings are resolved and cached during initialization. Firing does not load
assets or rescan actor components.

## Stable IDs

Use role IDs that do not depend on one skeletal mesh:

- Axis Group IDs: `MainTurretAxes`, `CommanderTurretAxes`, `InTowerMGAxes`;
- Weapon IDs: `MainGun`, `CoaxMG`, `InTowerMG`, `Smoke`;
- Ammo Type IDs: `APFSDS`, `HE`, `HEAT`, `Default`.

The same Weapon ID connects its installation, muzzle, loadout, ammo types, HUD
queries, and optional selectable channel. Component, bone, and socket names are
model-specific bindings and may differ between vehicles.

<a id="installations"></a>

## Installation patterns

### Main gun plus coaxial MG

- one shared axis group, normally `MainTurretAxes`;
- separate `MainGun` and `CoaxMG` installations;
- one muzzle entry per weapon, even when both use the same component.

They share the physical pose but retain independent traces, ammo, cadence,
heat, presentation, and HUD state.

### Independent commander turret

Create a separate Axis Group with its own yaw/pitch pivots and commander aim
source. Bind the commander weapon and muzzle to that group.

### Parent-mounted or pitch-only MG

Use `Parent Mounted (Limited Cone)` when both planes are mechanically limited
relative to a parent. Disable the unused drive plane for a pitch-only or
yaw-only mount. Parallax between a separate muzzle and the main gun is normal.

### Fixed weapon

Disable `Uses Axis Group` and keep a valid muzzle definition. A fixed weapon
still uses the same loadout, trigger, ammo, presentation, and HUD APIs.

There is no fixed weapon count. Add one installation, muzzle, and loadout per
new Weapon ID instead of extending the C++ or master Blueprint API.

## Loadout, ammo, and firing

Typical feed and trigger combinations:

| Weapon | Feed | Trigger behavior |
| --- | --- | --- |
| Main gun | `Chamber / Ready Round` | `Single Shot On Press` or `Repeat After Reload While Held` |
| MG/autocannon | `Magazine / Belt` | `Automatic While Held` |
| Smoke launcher | `Round Bank / Launcher Bank` | single or automatic while held |

Set `Initial Ammo Type ID`, ready capacity, `Time Between Shots`, and
`Reload Duration` in the loadout. Enable heat only for weapons that use it.
`Vehicle Body Recoil Strength` is the per-weapon physical kick applied to the
vehicle body; zero disables it.

Send press and release through
`Request Configured Weapon Trigger State(Weapon ID, Trigger Held)`. Standard
configured weapons consume the loaded ammo, spawn the chambered Projectile
Class from the resolved muzzle, play recoil/effects/audio, and complete one
reload transaction for that Weapon ID. Do not add another fire Timeline.

`Blueprint Custom` is the explicit exception for an unusual launch transaction.
The custom Blueprint performs its authoritative shot, then calls the configured
presentation only after that transaction is accepted.

Selectable groups use `Set Active Weapon Channel`,
`Set Weapon Channel Active`, `Set Active Weapon Channels`, or
`Cycle Weapon Channel`. `Request Weapon Channel Trigger State` applies one
press/release to every weapon assigned to the selected channel.

<a id="aiming-stabilization"></a>

## Aiming and stabilization

`Update Vehicle Aim Sources` prepares the configured External, Gunner,
Commander, and auxiliary aim sources. Call
`Configure Weapon Axis Aim And Stabilization` only when the camera/weapon mode
or stabilization setting changes; do not rebuild definitions every Tick.

For manual player drive, call `Submit Manual Weapon Axis Input` from the input
event. Keep yaw-only and pitch-only input on separate lanes. The values arm the
corresponding mechanical plane; they are not added as an angle or as a second
stabilization correction.

An AnimBP or Control Rig may consume `Get Configured Axis Group Rotations`, but
only one system should write a given physical pivot. Do not layer a second hull
rotation compensation over the component's world stabilization.

<a id="ui-frame"></a>

## HUD and reticles

Widgets read the coherent cache and never run their own muzzle trace or
ballistic simulation.

- `Get Weapon HUD Screen Data` — complete screen data for one Weapon ID;
- `Get Weapon Muzzle Trace HUD Data` — that weapon's physical muzzle trace;
- `Get Weapon Ballistic Aim HUD Data` — its ballistic aim solution;
- `Get Aim Source HUD State` — any configured camera, sight, or AI source;
- `Get Active View Aim HUD Screen Data` — the currently selected view source;
- `Get Vehicle Weapon HUD Snapshot` — a scalable snapshot for any weapon count.

Use `Refresh Vehicle Weapon HUD Cache (Advanced)` only for an explicit custom
Player Controller, projection mode, or independent UI schedule.

## Performance rules

- enable continuous traces only for weapons or HUD elements that need them;
- keep debug drawing off outside setup;
- do not scan components or load assets on the fire path;
- do not poll reload/replenishment or inactive heat state in a second Blueprint
  Tick when the configured runtime already owns those states;
- gate vehicle-specific camera/UI preparation with
  `Should Evaluate Local Weapon Runtime` on proxies.

<a id="replication"></a>

## Replication

Native axis replication is opt-in through
`Set Optimized Turret Replication Enabled`. Do not run it beside another
rotation RPC path for the same axes.

Verify in this order:

1. single-player;
2. owning client and authority copy on a listen server;
3. the other player's simulated proxy;
4. dedicated server when the project supports it.

Stable Axis Group and Weapon IDs must match on every copy. Authority reapplies
mechanical limits; proxies receive physical pose without evaluating the local
camera runtime. Authoritative firing uses the server's current physical muzzle
socket rather than a client-provided projectile transform.

## Final preflight

- all referenced profiles validate and every configured binding resolves;
- main gun, every MG, smoke, ammo selection, reload, heat, replenish, recoil,
  ejection, effects, and audio work independently per Weapon ID;
- projectile flight and ballistic marker use the same class speed;
- held-fire behavior survives reload and sequential launcher banks;
- no duplicate FX, RPC spam, Blueprint runtime errors, or debug draw remains;
- listen server plus one client completes the same firing and axis checks.

<div class="page-nav" markdown="1">
[← Guide]({{ '/docs/vehicle-weapon-system.en.html' | relative_url }})
[Blueprint nodes →]({{ '/docs/vehicle-weapon-blueprint-nodes.en.html' | relative_url }})
</div>
