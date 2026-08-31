---
layout: default
lang: en
page_kind: reference
title: "Vehicle Weapon System — Guide"
description: "Profile-first setup and practical Vehicle Weapon System tasks"
product: weapon
doc_section: guide
---

# Vehicle Weapon System

One component owns turret axes, stabilization, aim sources, muzzle traces,
ballistics, configured weapon triggers, presentation, and optional replication.
The paired vehicle Ammo System owns projectile types, reserves, chamber/feed,
and reload transactions.

<div class="guide-callout" markdown="1">
**Recommended path:** configure a reusable Tank Variant Profile and one
`Weapon ID` first. Add coaxial, commander, fixed, and launcher weapons only
after that setup validates and fires correctly.
</div>

<a id="quick-start"></a>

## Quick start

### 1. Add the component

Add `Vehicle Weapon System` to the vehicle Blueprint. Create real muzzle
sockets on the weapon meshes before authoring bindings.

### 2. Select one configuration source

For the complete vehicle workflow:

1. Assign a `Tank Variant Profile`.
2. Keep `Use Aiming / Turret Setup From Tank Profile` enabled.
3. Leave `Direct Weapon System Profile (Advanced)` and
   `Direct Armament Profile (Fallback)` empty.

The Tank Variant composes an Armament Profile containing:

- `Aiming / Turret Setup` — axes, installations, muzzle sockets, and traces;
- `Weapon Loadouts` — feed, trigger, cadence, reload, heat, recoil, launcher
  banks, case ejection, effects, audio, and selectable channels.

Turn the profile toggle off only when the local axis/installation/muzzle arrays
must be authoritative for a custom rig. Do not maintain the profile and local
arrays as two competing production configurations.

### 3. Keep ownership and IDs unambiguous

Use stable role IDs rather than mesh names:

```text
Axis Group IDs: MainTurretAxes, CommanderTurretAxes, InTowerMGAxes
Weapon IDs:     MainGun, CoaxMG, InTowerMG, Smoke
Ammo Type IDs:  APFSDS, HE, HEAT, Default
```

| Owner | Configuration |
| --- | --- |
| Aiming / Turret Setup | physical axes, installations, muzzle component/socket, traces |
| Weapon Loadout | trigger, feed, timing, heat, recoil, launcher geometry, effects and audio |
| Ammo Type Definition | projectile class, reserve, trajectory settings, icon and input |
| Projectile Blueprint | `Initial Speed`, damage, impact/trail and optional sabot |

Do not duplicate projectile speed, reload duration, effects, or reserve counts
in a second location. Smoke is a normal `Weapon ID`; it does not need a
separate Smoke profile.

### 4. Initialize and connect runtime

Run `Initialize Vehicle Armament Profile`, then
`Validate Vehicle Weapon System Configuration`. Resolve the first blocking
error before changing another group.

The normal frame order is:

1. `Update Weapon Traces And Ballistics`;
2. `Update Vehicle Aim Sources`;
3. `Update Vehicle Weapon System`.

Send input press/release to
`Request Configured Weapon Trigger State(Weapon ID, Trigger Held)`. The
configured runtime owns cadence, held-fire behavior, reload scheduling, heat,
projectile spawning, recoil, and presentation. Do not build a second Timeline
or standard fire path beside it.

### 5. Verify in PIE

A ready setup has:

- matching configured and ready IDs with no blocking validation errors;
- every trace and projectile starting at the intended socket;
- correct yaw/pitch limits and stabilization ownership;
- independent ammo, reload, heat, and replenish state per `Weapon ID`;
- the selected projectile's `Initial Speed` driving both flight and ballistics;
- HUD queries reading the prepared cache instead of running extra traces;
- debug drawing disabled after setup.

Test single-player first, then listen server plus one client before shipping.

<div class="guide-next" markdown="1">
**Working?** Choose the next task below. Exact ownership, profile composition,
input, HUD, and networking contracts are in the
[detailed reference]({{ '/docs/vehicle-weapon-reference.en.html' | relative_url }}).
</div>

## Choose the next task

<div class="task-grid">
  <a class="task-card" href="{{ '/docs/weapon-installations.en.html' | relative_url }}"><strong>1. Installation patterns</strong><span>Main, coaxial, independent, parent-mounted, or fixed weapons.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-aiming.en.html' | relative_url }}"><strong>2. Aiming and stabilization</strong><span>Aim sources, axis modes, and mechanical drive.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-ui.en.html' | relative_url }}"><strong>3. Reticle and UI</strong><span>Cached traces, ballistics, and arbitrary Weapon IDs.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-replication.en.html' | relative_url }}"><strong>4. Replication</strong><span>Owning client, authority, simulated proxy, and firing.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-troubleshooting.en.html' | relative_url }}"><strong>Fix a problem</strong><span>Short checks organized by visible symptom.</span></a>
</div>

## How this section is organized

- **Guide** — the first profile-driven turret and weapon.
- **Build the system** — installations, aiming, and UI on separate pages.
- **Run and ship** — a dedicated replication check.
- **Reference** — detailed integration and the curated Blueprint API.

<div class="guide-next" markdown="1">
**Continue in order:** [choose an installation pattern]({{ '/docs/weapon-installations.en.html' | relative_url }}).
</div>
