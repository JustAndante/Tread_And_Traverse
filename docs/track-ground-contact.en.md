---
layout: default
lang: en
page_kind: reference
title: "Track — Ground Contact"
description: "Configure track surface queries and filtering"
product: track
doc_section: ground-contact
---

<p class="doc-breadcrumb">Build the track · Step 2 of 3</p>

# Ground contact

<figure class="doc-figure">
  <img src="{{ '/assets/images/track/ground-contact.svg' | relative_url }}" alt="Center and side probes under the lower run query World Static">
  <figcaption>One contact width controls the probe envelope; the surface filter controls what may be accepted.</figcaption>
</figure>

The surface should push the track outward without turning the hull or unrelated
components into track support.

## Safe baseline

1. Keep `Surface Query Mode = World Static Only`.
2. Confirm that terrain responds to the selected object types.
3. Start on a flat surface.
4. Test small bumps next and sharp transitions last.

## Width and offset

- `Track Contact Width` is the single working query width.
- Increase it only when a narrow query misses a road edge.
- Contact offset compensates for link thickness; do not use it to repair an
  incorrect wheel shape.

## Expected result

- the track reacts to terrain but not to the vehicle hull or weapons;
- a flat surface does not alternate between competing hits;
- small bumps deform the loop smoothly;
- an old hit does not hold the track after a wheel lifts away.

All fields: [Surface Tracing]({{ '/docs/track-settings-reference.en.html#surface-tracing' | relative_url }}).

<div class="page-nav" markdown="1">
[← Wheel shape]({{ '/docs/track-wheel-shape.en.html' | relative_url }})
[Next: links and motion →]({{ '/docs/track-links-motion.en.html' | relative_url }})
</div>

