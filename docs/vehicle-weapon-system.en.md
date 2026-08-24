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

