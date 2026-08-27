---
layout: default
lang: en
page_kind: reference
title: "Track — Links and Motion"
description: "Configure link count, orientation, direction, and speed"
product: track
doc_section: links-motion
---

<p class="doc-breadcrumb">Build the track · Step 3 of 3</p>

# Links and motion

<figure class="doc-figure">
  <img src="{{ '/assets/images/track/links-motion.svg' | relative_url }}" alt="A fixed number of links and connectors moves around the closed spline">
  <figcaption>Count stays fixed while actual pitch follows the current solved-loop length evenly.</figcaption>
</figure>

Builder places a constant number of visual links along the solved spline.
Deformation should change shape, not track composition.

## Place the links

1. Use a fixed link count for a tank track.
2. Keep the spline closed and topology stable.
3. Verify the mesh local axis and pivot.
4. The connector must use the same material phase as its paired links.

## Configure link motion

- Select the real rotation source and its matching Chaos wheel.
- Select the rotation axis.
- `Reverse Track Direction` is the normal manual direction switch.
- Do not repair an incorrect sign with a negative speed scale.

Builder motion and physical vehicle steering are separate systems. Builder only
converts wheel rotation into link travel distance.

## Configure physical vehicle steering

The current integration uses **clutch-braking**: the outer track receives
additional drive torque while the inner track receives braking torque.
Longitudinal drive, automatic shifting, transmission ratios, RPM, and speed
limits remain owned by Chaos.

Steering torque is calculated as:

`Maximum Drive Torque × Turn Gear Ratio × |Turn Input|`

- `Maximum Drive Torque` is the base torque for independent side control.
- `Turn Gear Ratio` is a positive steering-response multiplier. It is **not** a
  Chaos transmission gear ratio.
- `Turn Input` controls steering direction and intensity.
- Increase `Turn Gear Ratio` in small steps: it strengthens both outer-track
  drive and inner-track braking.

Do not compensate for weak steering by changing Chaos gear ratios. That changes
the whole transmission rather than side steering only.

## RPM and automatic downshifting

The `Tracked Vehicle Engine RPM` component samples both track sides so a
braked inner track cannot make the gearbox falsely drop straight to first gear.
The guard is automatic and adds no user-facing tuning fields:

- a normal turn keeps the current appropriate gear;
- real vehicle slowdown still downshifts sequentially using the authored
  `Change Down RPM`;
- after steering input is released, control returns fully to the native Chaos
  automatic selector.

Use one such component on the Actor. Driven Chaos wheels must be arranged as two
contiguous side groups in the wheel array.

## Expected result

- link count stays constant while the vehicle rocks;
- visual spacing is even;
- individual links do not flip;
- speed and direction match vehicle movement;
- left and right steering are mirrored;
- steering does not trigger a false immediate downshift to first gear.

Runtime actions: [Blueprint nodes]({{ '/docs/track-blueprint-nodes.en.html' | relative_url }}).

<div class="page-nav" markdown="1">
[← Ground contact]({{ '/docs/track-ground-contact.en.html' | relative_url }})
[Next: quality and network →]({{ '/docs/track-quality-network.en.html' | relative_url }})
</div>
