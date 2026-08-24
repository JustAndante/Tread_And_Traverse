---
layout: default
lang: en
page_kind: reference
title: "Track — Wheel Shape"
description: "Configure wheel bones, radii, and the track shape around the running gear"
product: track
doc_section: wheel-shape
---

<p class="doc-breadcrumb">Build the track · Step 1 of 3</p>

# Shape around wheels

This defines the initial track loop. Make the wheel shape correct before adding
ground contact.

## Prepare the bones

1. Use consistently numbered road-wheel bones.
2. Use separate prefixes for the left and right sides.
3. Bind end wheels and support rollers separately.
4. Run `Generate Bone Rig Now` again after changing bone names, count, or order.

## Verify the radii

- Solver radius describes wheel-to-spline contact geometry.
- Link speed comes from the selected drive source and its Chaos wheel radius,
  not from the Solver geometry radius.
- Add a support roller only where the upper run should actually be supported.

## Expected result

- the loop follows the intended side of every wheel;
- left and right sides are symmetrical;
- end transitions have no sharp kink;
- suspension movement changes shape without changing point count.

All fields: [Geometry Source and Wheels]({{ '/docs/track-settings-reference.en.html#geometry-source' | relative_url }}).

<div class="page-nav" markdown="1">
[← Guide]({{ '/docs/track-physics-solver.en.html' | relative_url }})
[Next: ground contact →]({{ '/docs/track-ground-contact.en.html' | relative_url }})
</div>

