---
layout: default
lang: en
page_kind: guide
title: "Vehicle Weapon System — Integration Quick Start"
description: "Connect a new tank to the profile-driven weapon system"
product: weapon
doc_section: guide
---

# Vehicle Weapon System: integration quick start

This guide connects a new vehicle without copying `BP_Tank_Master` or rewriting
the shared fire graph. `Vehicle Weapon System` owns turrets, guns, MGs, smoke
launchers, stabilization, traces, ballistics, presentation, and network state.
The paired `AmmoSystem` owns ammo types, reserves, chamber/feed, and reload.

For the exact public nodes, use the
[Blueprint API reference]({{ '/docs/vehicle-weapon-blueprint-nodes.en.html' | relative_url }}).

## First working result

For a normal `hull -> turret -> gun` vehicle:

1. Create a child of `BP_Tank_Master`.
2. Assign your meshes to `VehicleMesh`, `SK_Tower`, `SK_MainGun`, and optional
   `SK_ComTower` components.
3. Create real muzzle sockets on the weapon meshes.
4. Duplicate four profiles from the closest example vehicle:
   `DA_VWS_*`, `DA_WeaponLoadout_*`, `DA_ArmamentProfile_*`, and
   `DA_TankVariant_*`.
5. Replace component/socket bindings and weapon assets in those copies.
6. Assign the top-level `DA_TankVariant_*` to `WeaponAimSystem`.
7. Run `Validate Vehicle Weapon System Configuration`, then test in a dedicated
   PIE map.

Duplicating a close working variant is safer than authoring every profile from
an empty asset: it exposes every required link without adding vehicle-specific
logic to the master.

## One owner for every value

| Location | Owns |
|---|---|
| `DA_VWS_MyTank` | turret axes, weapon installations, muzzle sockets, traces |
| `DA_WeaponLoadout_MyTank` | trigger, feed, cadence, reload, heat, recoil, ejection, smoke banks, FX, audio |
| `AmmoSystem -> Ammo Type Definitions` | projectile, reserve, trajectory prediction, icon, selection input |
| Projectile Blueprint | `Initial Speed`, damage, impact/trail, optional sabot |
| `DA_ArmamentProfile_MyTank` | links to VWS and Weapon Loadout profiles |
| `DA_TankVariant_MyTank` | the single top-level vehicle selection |

Do not duplicate projectile speed, reload duration, or fire presentation in a
second location.

## 1. Select the configuration source

Enable `Use Tank Profile Weapon System Settings` on `WeaponAimSystem`.

- **On — recommended:** mechanics are imported from `Tank Variant Profile`,
  while vehicle-specific component/socket bindings remain on the child.
- **Off — Local Configuration:** the component's built-in arrays are
  authoritative; use this only for a prototype or a self-contained Blueprint.

Do not populate both workflows for one production vehicle.

## 2. Keep stable IDs consistent

IDs describe roles, not mesh names:

```text
Axis Group IDs: MainTurretAxes, CommanderTurretAxes, InTowerMGAxes
Weapon IDs:     MainGun, CoaxMG, InTowerMG, Smoke
Ammo Type IDs:  APFSDS, HE, HEAT, Default
```

The same `Weapon ID` must be used by its installation, muzzle, loadout, ammo
type, and optional weapon channel. Adding another gun means adding another ID;
it does not require another C++ signature or an edit to `BP_Tank_Master`.

## 3. Configure axes, installations, and muzzles

Open `DA_VWS_MyTank`. One Axis Group describes one independent yaw/pitch
mechanism.

| Installation | Typical setup |
|---|---|
| Main turret | yaw pivot `SK_Tower`, pitch pivot `SK_MainGun` |
| Coaxial MG | shared `MainTurretAxes`, separate muzzle |
| Commander turret | its own Axis Group and commander aim source |
| Pitch-only MG | yaw drive disabled; pitch goes to the component or AnimBP |
| Fixed weapon | `Uses Axis Group` disabled |

If an AnimBP or Control Rig already rotates a bone, read the resolved axis
rotations there. Do not let two systems write the same pivot.

For every `Weapon ID`, add one installation and one muzzle/trace entry. Bind
the real component and socket, keep `Ignore Owning Vehicle` enabled, and enable
continuous trace only when firing or HUD actually needs it. Muzzle data never
owns ammo, cadence, or projectile speed.

## 4. Configure the Weapon Loadout

Each `DA_WeaponLoadout_MyTank` row completely describes one weapon.

| Weapon | Ammo Feed Mode | Trigger Behavior |
|---|---|---|
| Main gun | `Chamber / Ready Round` | single press or repeat after reload while held |
| MG | `Magazine / Belt` | automatic while held |
| Smoke | `Round Bank / Launcher Bank` | single press or automatic while held |

Set `Initial Ammo Type ID`, ready capacity, `Time Between Shots`, and
`Reload Duration`. Enable heat/overheat only for weapons that use it.
`Vehicle Body Recoil Strength` is the per-weapon physical torque applied to the
vehicle body; zero disables it.

`Effects & Audio` owns muzzle flash, ground blast, fire/reload/overheat audio,
Camera Shake, and crew callouts. Concurrency and attenuation remain on the
Sound asset or Audio Component. Projectile impact, trail, and damage stay in
the Projectile Blueprint.

Smoke is a normal `Weapon ID`; no separate Smoke Data Asset is required. Its
loadout contains launcher component, socket banks, ready capacity, and reload.
Its projectile, reserve, icon, and key are an Ammo Type entry for `WeaponId=Smoke`.

## 5. Add ammo types

In the vehicle child, open `AmmoSystem -> Ammo Type Definitions`. One row is
the pair `Weapon ID + Ammo Type ID`.

Set projectile class, starting/maximum reserve, trajectory prediction settings,
icon, and optional `Selection Input Action`. Muzzle velocity has one owner:
`Projectile Movement -> Initial Speed` in the selected Projectile Blueprint.
The ballistic predictor reads it from that class.

`Initial Ammo Type ID` in the Weapon Loadout explicitly chooses the initially
chambered type. `Set Selected Ammo Type` queues a type for the next load; it
does not replace an already chambered projectile.

To add a fourth ammo type, add another row with a new ID. A dynamic HUD can
enumerate it from the runtime snapshot; a fixed visual layout needs one more
visual card.

## 6. Compose and assign profiles

In `DA_ArmamentProfile_MyTank` assign:

```text
Aiming / Turret Setup -> DA_VWS_MyTank
Weapon Loadouts       -> DA_WeaponLoadout_MyTank
```

Assign that Armament Profile in `DA_TankVariant_MyTank`, then set on the child:

```text
Tank Variant Profile                    -> DA_TankVariant_MyTank
Use Tank Profile Weapon System Settings -> On
```

Leave `Direct Weapon System Profile (Advanced)` and `Direct Armament Profile
(Fallback)` empty. A vehicle should have one obvious configuration source.

## 7. Connect input and HUD

Send press/release to
`Request Configured Weapon Trigger State(Weapon ID, Trigger Held)`. The runtime
and `AmmoSystem` own cadence, reload, and heat; do not add a parallel Timeline.

Optional selectable groups use `Selectable Weapon Channels`:

- `Set Active Weapon Channel` selects one exclusive channel;
- `Set Weapon Channel Active` adds/removes a channel for combined fire;
- `Cycle Weapon Channel` selects the next or previous profile entry.

HUD should consume cached data instead of repeating traces or ballistics:

- `Get Weapon HUD Screen Data` — all screen data for one Weapon ID;
- `Get Weapon Muzzle Trace HUD Data` — one muzzle trace;
- `Get Weapon Ballistic Aim HUD Data` — one ballistic marker;
- `Get Aim Source HUD State` — a camera, sight, or AI source;
- `Get Vehicle Weapon HUD Snapshot` — a dynamic snapshot for any weapon count.

Vehicle-specific artwork and reticles remain ordinary Blueprint/UMG so buyers
can replace one visual child or the complete HUD.

## Verification

1. Validation reports no blocking errors.
2. Every trace begins at the intended socket and debug draw is off afterward.
3. Yaw/pitch limits work and AnimBP receives the intended axes.
4. MainGun, every MG, and Smoke spawn the correct projectile, FX, and audio.
5. Ammo, reload, heat, and replenish are independent per `Weapon ID`.
6. Selected ammo changes the next projectile and ballistic marker.
7. Replenish neither auto-fires nor restarts an active reload.
8. Stabilization holds a world direction while the hull moves.
9. Replicated axes and firing are tested with at least two clients.

## First troubleshooting checks

| Symptom | Check first |
|---|---|
| Axis does not move | Axis Group ID, pivots, drive mode, AnimBP/Control Rig ownership |
| Weapon aims incorrectly | aim source, basis, installation, pivot hierarchy |
| Trace/fire starts in the wrong place | component and socket for that Weapon ID |
| No shot | matching ID, enabled loadout, ammo type, trigger route |
| Wrong projectile | chambered Ammo Type and its `Projectile Class` |
| Marker misses the flight path | projectile `Initial Speed` and Ammo Type prediction settings |
| Missing FX/audio | loadout `Effects & Audio`, binding, sound concurrency |
| MG never cools | heat settings and absence of a second Blueprint heat Timeline |
| Smoke does not fire | launcher component, banks, sockets, Round Bank state |
| Profile does not apply | top-level Tank Variant assigned; direct profile fields empty |

Continue with [installation patterns]({{ '/docs/weapon-installations.en.html' | relative_url }})
or the [complete Blueprint node reference]({{ '/docs/vehicle-weapon-blueprint-nodes.en.html' | relative_url }}).
