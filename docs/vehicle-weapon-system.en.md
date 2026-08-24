---
layout: default
lang: en
page_kind: reference
title: "Vehicle Weapon System — Guide"
description: "Short setup and practical Vehicle Weapon System tasks"
product: weapon
doc_section: guide
---

# Vehicle Weapon System

`Vehicle Weapon System` owns turret axes, stabilization, aim sources, muzzles,
installations, presentation, and optional replication. Its paired `AmmoSystem`
owns ammo types, reserve counts, and reload state.

<div class="guide-callout" markdown="1">
**Recommended path:** configure one turret and one weapon first. Add coaxial,
commander, and independent installations only after that setup validates.
</div>

<a id="quick-start"></a>

## Quick start

### 1. Start from a working variant

Create a child of the shared vehicle Blueprint and duplicate the four profiles
from the closest example tank:

1. `DA_VWS_*` — axes, installations, and muzzle sockets;
2. `DA_WeaponLoadout_*` — trigger, reload, heat, recoil, FX, and audio;
3. `DA_ArmamentProfile_*` — references to the first two profiles;
4. `DA_TankVariant_*` — the single top-level variant entry point.

### 2. Keep stable IDs consistent

The same `Weapon ID` must be used by the installation, muzzle, loadout, and
`Ammo Type Definitions` entry, for example `MainGun`, `CoaxMG`, or `Smoke`.
Use one stable `Axis Group ID` for each independent yaw/pitch mechanism.

### 3. Replace bindings and assets

In `DA_VWS_*`, bind the new mesh components and real muzzle sockets. In
`DA_WeaponLoadout_*`, configure feed, trigger, reload, heat, recoil, effects,
and audio. Projectile class, reserve count, trajectory prediction, icon, and
selection input belong to `AmmoSystem -> Ammo Type Definitions`.

### 4. Assign and validate the profile

Assign `Tank Variant Profile` on `WeaponAimSystem`, enable
`Use Tank Profile Weapon System Settings`, and run
`Validate Vehicle Weapon System Configuration`. Leave direct profile fields
empty when a top-level Tank Variant Profile is assigned.

### 5. Connect the normal runtime graph

Call in this order:

1. `Update Weapon Traces And Ballistics`;
2. `Update Vehicle Aim Sources`;
3. `Update Vehicle Weapon System`.

The component caches detailed results. A normal graph does not need to break
large structs or repeat traces for UI every Tick.

<div class="guide-next" markdown="1">
**Working?** Choose the next task below. Low-level detail remains in the
[detailed reference]({{ '/docs/vehicle-weapon-reference.en.html' | relative_url }}).
</div>

For the complete sequence with MainGun, multiple MGs, Smoke, and HUD examples,
read the [integration quick start]({{ '/docs/vehicle-weapon-quick-start.en.html' | relative_url }}).

## Choose the next task

<div class="task-grid">
  <a class="task-card" href="{{ '/docs/weapon-installations.en.html' | relative_url }}"><strong>1. Installation patterns</strong><span>Main, coaxial, independent, or fixed weapon.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-aiming.en.html' | relative_url }}"><strong>2. Aiming and stabilization</strong><span>Target sources, axis modes, and mechanical drive.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-ui.en.html' | relative_url }}"><strong>3. Reticle and UI</strong><span>Cached points, screen coordinates, and widgets.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-replication.en.html' | relative_url }}"><strong>4. Replication</strong><span>What the component synchronizes and what stays project-owned.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-troubleshooting.en.html' | relative_url }}"><strong>Fix a problem</strong><span>Short checks organized by visible symptom.</span></a>
</div>

## How this section is organized

- **Guide** — the first component, one turret, and one weapon.
- **Build the system** — installations, aiming, and UI on separate pages.
- **Run and ship** — a dedicated replication check.
- **Reference** — detailed integration and every Blueprint node.

<div class="guide-next" markdown="1">
**Continue in order:** [choose an installation pattern]({{ '/docs/weapon-installations.en.html' | relative_url }}).
</div>

