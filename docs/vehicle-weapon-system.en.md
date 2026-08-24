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

One component owns turret-axis configuration, stabilization, aim sources, muzzle
points, weapon installations, and optional replication.

<div class="guide-callout" markdown="1">
**Recommended path:** configure one turret and one weapon first. Add coaxial,
commander, and independent installations only after that setup validates.
</div>

<a id="quick-start"></a>

## Quick start

### 1. Add the component

Add `Vehicle Weapon System` to the vehicle Blueprint and select
`Definition Source = Embedded Definitions`.

### 2. Define physical axes

Create one `Embedded Axis Definition` for every independently aimed yaw/pitch
mechanism. Use a stable `Axis Group ID`, such as `MainTurretAxes`.

### 3. Add a muzzle and weapon

1. Create an `Embedded Muzzle Definition` for the logical barrel.
2. Create an `Embedded Weapon Installation`.
3. Assign a stable `Weapon ID`, such as `MainGun`.
4. Bind the installation to the required axis group and muzzle definition.

### 4. Build and validate

In the component Details panel, run:

1. `Rebuild Embedded Weapon Runtime`;
2. `Validate Vehicle Weapon System Configuration`.

Configured and ready counts should match, and the error list should be empty.

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

## What do you want to configure?

<div class="task-grid">
  <a class="task-card" href="#installations"><strong>Installation pattern</strong><span>Main, coaxial, independent, or fixed weapon.</span></a>
  <a class="task-card" href="#aiming"><strong>Aiming and stabilization</strong><span>Target sources, axis modes, and mechanical drive.</span></a>
  <a class="task-card" href="#ui"><strong>Reticle and UI</strong><span>Cached points, screen coordinates, and widgets.</span></a>
  <a class="task-card" href="#replication"><strong>Replication</strong><span>What the component synchronizes and what stays project-owned.</span></a>
  <a class="task-card" href="#troubleshooting"><strong>Fix a problem</strong><span>A short checklist for common failures.</span></a>
</div>

<a id="installations"></a>

## Installation patterns

- **Main + coaxial:** two installations share one axis group but use separate
  Weapon IDs and muzzle points.
- **Independent turret:** create a separate axis group and bind its weapons.
- **Limited parent-mounted weapon:** use `Parent Mounted (Limited Cone)` and
  configure the mechanical cone.
- **Fixed weapon:** disable `Uses Axis Group`; keep a muzzle definition for
  tracing or ballistics.
- **Multiple barrels:** add one installation and muzzle definition for every
  stable Weapon ID.

Detailed patterns: [installation patterns]({{ '/docs/vehicle-weapon-reference.en.html#installations' | relative_url }}).

<a id="aiming"></a>

## Aiming and stabilization

- `Update Vehicle Aim Sources` produces the standard External, Gunner,
  Commander, and held/sub-gunner sources.
- Change axis mode through `Set Weapon Axis Control State` when the mode
  changes; do not rebuild an array of structs every Tick.
- For intentional mechanical movement, call `Arm Weapon Axis Mechanical Drive`
  from the input event before the normal yaw/pitch call.
- Pass yaw and pitch independently: `(YawDelta, 0)` and `(0, PitchDelta)`.
- Camera switching, input, firing effects, and damage policy stay vehicle-owned.

Details: [aiming and stabilization]({{ '/docs/vehicle-weapon-reference.en.html#aiming-stabilization' | relative_url }}).

<a id="ui"></a>

## Reticle and UI

UI should read the cache instead of tracing again:

- `Get Vehicle Weapon Trace UI`;
- `Get Vehicle Weapon Ballistic UI`;
- `Get Vehicle Weapon UI Pair`;
- `Find Vehicle Weapon System`.

`Refresh Vehicle Weapon UI Cache` is only needed by a custom project with an
explicit Player Controller or independently scheduled UI.

Details: [modular UI frame]({{ '/docs/vehicle-weapon-reference.en.html#ui-frame' | relative_url }}).

<a id="replication"></a>

## Replication

- Enable supported replication only when component-owned axes must synchronize.
- Cameras, local HUD, and cosmetic quality remain local.
- Stable Axis Group IDs and Weapon IDs must match on server and clients.
- Verify single-player first, then listen server, and finally dedicated server.

Details: [replication]({{ '/docs/vehicle-weapon-reference.en.html#replication' | relative_url }}).

<a id="troubleshooting"></a>

## Quick troubleshooting

| Symptom | Check first |
| --- | --- |
| Runtime is not ready | Both editor commands, duplicate IDs, and missing bindings. |
| Turret does not move | Axis Group ID, yaw/pitch pivots, axis mode, and the three-call order. |
| Reticle drifts after camera switch | Active aim source and selected `Aim Target Policy`. |
| Coaxial weapon aims independently | Both installations must reference the same Axis Group. |
| UI shows an old point | Runtime update order and cache reads after the update. |
| Client sees a different pose | Axis replication, stable IDs, and matching configuration. |

Use the plugin-wide search on the left for an exact node name, or open the
[Blueprint node reference]({{ '/docs/vehicle-weapon-blueprint-nodes.en.html' | relative_url }}).

## Next step

- [Detailed integration and supported scenarios]({{ '/docs/vehicle-weapon-reference.en.html' | relative_url }})
- [Blueprint node reference]({{ '/docs/vehicle-weapon-blueprint-nodes.en.html' | relative_url }})
