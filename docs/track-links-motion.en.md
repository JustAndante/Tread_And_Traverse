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

## Configure motion

- Select the real rotation source and its matching Chaos wheel.
- Select the rotation axis.
- `Reverse Track Direction` is the normal manual direction switch.
- Do not repair an incorrect sign with a negative speed scale.

## Expected result

- link count stays constant while the vehicle rocks;
- visual spacing is even;
- individual links do not flip;
- speed and direction match vehicle movement.

Runtime actions: [Blueprint nodes]({{ '/docs/track-blueprint-nodes.en.html' | relative_url }}).

<div class="page-nav" markdown="1">
[← Ground contact]({{ '/docs/track-ground-contact.en.html' | relative_url }})
[Next: quality and network →]({{ '/docs/track-quality-network.en.html' | relative_url }})
</div>

