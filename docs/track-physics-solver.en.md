---
layout: default
lang: en
page_kind: reference
title: "Track Spline Builder — Guide"
description: "Short setup and practical Track Spline Builder tasks"
product: track
doc_section: guide
---

# Track Spline Builder

Builds a closed visual track from running-gear bones, deforms it against the
suspension and terrain, and places a constant number of links.

<div class="guide-callout" markdown="1">
**Recommended path:** build one side with the quick start below. Once it works in
PIE, copy the components to the other side and change only bone names, direction,
and visual meshes.
</div>

<a id="quick-start"></a>

## Quick start

### 1. Prepare the vehicle Actor

For each side, add:

- one `Spline Component`;
- one `Track Spline Builder`;
- one `Track Physics Solver`.

The Skeletal Mesh must contain consistently numbered road-wheel bones. End wheels
and support rollers can be bound separately.

### 2. Configure visual links

In `Track Spline Builder`:

1. Select the new spline in `Source Spline`.
2. Assign `Track Link Mesh` and the connector mesh when used.
3. Set a fixed link count or spacing.
4. Keep `Orientation Mode = Planar Track` for a conventional tank track.

### 3. Generate the wheel loop

In `Track Physics Solver`:

1. Select the same spline in `Target Spline`.
2. Set `Source Mesh Component`.
3. Enter the road-wheel bone prefix and end-wheel bones.
4. Verify the wheel contact radii.
5. Run `Generate Bone Rig Now`.

### 4. Connect Solver and Builder

1. Select the matching `Track Builder`.
2. Enable `Update Track Builder After Solve`.
3. Run `Validate Setup`.
4. Resolve errors until the configuration is ready.

### 5. Verify in PIE

A working result has:

- a closed loop;
- a constant link count;
- even link distribution;
- direction and speed matching the vehicle;
- terrain response without reacting to the vehicle body;
- no expensive visual solve on a dedicated server unless explicitly required.

Keep `Surface Query Mode = World Static Only` for a conventional vehicle.

<div class="guide-next" markdown="1">
**Working?** Continue with the task you need below. Every supported field is
listed in the [settings reference]({{ '/docs/track-settings-reference.en.html' | relative_url }}).
</div>

## Choose the next task

<div class="task-grid">
  <a class="task-card" href="{{ '/docs/track-wheel-shape.en.html' | relative_url }}"><strong>1. Shape around wheels</strong><span>Bones, radii, end wheels, and top rollers.</span></a>
  <a class="task-card" href="{{ '/docs/track-ground-contact.en.html' | relative_url }}"><strong>2. Ground contact</strong><span>Traces, filtering, and rough-terrain behavior.</span></a>
  <a class="task-card" href="{{ '/docs/track-links-motion.en.html' | relative_url }}"><strong>3. Links and motion</strong><span>Count, orientation, direction, and speed.</span></a>
  <a class="task-card" href="{{ '/docs/track-quality-network.en.html' | relative_url }}"><strong>4. Quality and network</strong><span>Local quality, remote vehicles, and dedicated server.</span></a>
  <a class="task-card" href="{{ '/docs/track-troubleshooting.en.html' | relative_url }}"><strong>Fix a problem</strong><span>Short checks organized by visible symptom.</span></a>
</div>

## How this section is organized

- **Guide** — only the first working result.
- **Build the track** — short pages for shape, terrain, and links.
- **Run and ship** — quality for local, remote, and server copies.
- **Reference** — every field and Blueprint node without abbreviation.

<div class="guide-next" markdown="1">
**Continue in order:** [configure the wheel shape]({{ '/docs/track-wheel-shape.en.html' | relative_url }}).
</div>

