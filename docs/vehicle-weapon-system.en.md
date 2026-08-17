---
layout: default
title: "Vehicle Weapon System — Quick Start"
description: "Minimal working setup for Vehicle Weapon System"
lang: en
page_kind: guide
---

<div class="doc-breadcrumbs">
  <a href="{{ '/en/' | relative_url }}">← Documentation</a>
  <a class="is-active" href="{{ '/docs/vehicle-weapon-system.en.html' | relative_url }}">Weapon guide</a>
  <a href="{{ '/docs/vehicle-weapon-system.ru.html' | relative_url }}">Русский</a>
</div>

# Vehicle Weapon System — Quick Start

Result: configured turret axes and weapon installations managed by one component.

## 1. Add the component

Add one `Vehicle Weapon System` component to the vehicle Blueprint.

Set `Definition Source = Embedded Definitions`.

## 2. Add definitions

1. Add one `Embedded Axis Definition` for every independently aimed yaw/pitch mechanism.
2. Add one `Embedded Muzzle Definition` for every logical weapon or barrel.
3. Add one `Embedded Weapon Installation` for every Weapon ID.
4. Click `Rebuild Embedded Weapon Runtime`.
5. Click `Validate Vehicle Weapon System Configuration`.

Use stable IDs such as `MainTurretAxes`, `MainGun`, `CoaxMG`, or `RoofMG`. Bindings must use the same IDs.

## 3. Update the system

Call these nodes from the vehicle update graph in this order:

1. `Update Weapon Traces And Ballistics`
2. `Update Vehicle Aim Sources`
3. `Update Vehicle Weapon System`

Keep camera switching, UI, firing input, ammunition, and damage logic in the project Blueprint.

## 4. Validate

Check:

- readiness reports `Ready` with no errors;
- every axis moves the intended bones;
- every Weapon ID resolves to the correct muzzle;
- stabilization behaves correctly while the hull moves;
- server and owning client agree in a network PIE test;
- debug drawing is disabled for the final build.

## Optional reference

Use the [Vehicle Weapon System Blueprint node reference]({{ '/docs/vehicle-weapon-blueprint-nodes.en.html' | relative_url }}) for additional control and query nodes.
