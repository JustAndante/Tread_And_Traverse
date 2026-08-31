---
layout: default
lang: en
page_kind: reference
title: "Weapon — Aiming and Stabilization"
description: "Configure target sources, axis modes, and mechanical drive"
product: weapon
doc_section: aiming
---

<p class="doc-breadcrumb">Build the system · Step 2 of 3</p>

# Aiming and stabilization

The component should receive one selected target source and apply it to the
physical axes already described by configuration.

## Normal order

1. `Update Vehicle Aim Sources` produces External, Gunner, Commander, and
   held/sub-gunner sources.
2. Call `Configure Weapon Axis Aim And Stabilization` when the control mode
   changes.
3. For manual mechanical movement, call `Submit Manual Weapon Axis Input`
   from the input event.
4. Pass yaw and pitch independently: `(YawDelta, 0)` and `(0, PitchDelta)`.

Do not rebuild definition arrays every Tick. Cameras and project-specific
damage policy remain vehicle-owned; standard trigger state and presentation
come from the per-Weapon-ID loadout.

## Verify

- each physical axis moves only in its allowed direction;
- mechanical limits survive camera changes;
- stabilization is not applied a second time in Blueprint;
- coaxial installations share one physical pose.

Details: [Aiming and Stabilization]({{ '/docs/vehicle-weapon-reference.en.html#aiming-stabilization' | relative_url }}).

<div class="page-nav" markdown="1">
[← Installation patterns]({{ '/docs/weapon-installations.en.html' | relative_url }})
[Next: reticle and UI →]({{ '/docs/weapon-ui.en.html' | relative_url }})
</div>

