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

## What do you want to configure?

<div class="task-grid">
  <a class="task-card" href="#wheels"><strong>Shape around wheels</strong><span>Bones, radii, end wheels, and top rollers.</span></a>
  <a class="task-card" href="#ground"><strong>Ground contact</strong><span>Traces, filtering, and rough terrain behavior.</span></a>
  <a class="task-card" href="#links"><strong>Links and motion</strong><span>Count, pitch, orientation, direction, and speed.</span></a>
  <a class="task-card" href="#quality"><strong>Quality and network</strong><span>Full Physical, Cheap Remote, and local policy.</span></a>
  <a class="task-card" href="#troubleshooting"><strong>Fix a problem</strong><span>A short checklist for common symptoms.</span></a>
</div>

<a id="wheels"></a>

## Shape around wheels

- Use a stable bone naming scheme and separate prefixes for left and right.
- Solver radii describe contact geometry. Link speed comes from the selected
  drive source and its Chaos wheel radius.
- Run `Generate Bone Rig Now` again after changing bone count, names, or order.
- Add support rollers only where the upper run should actually be supported.

All fields: [geometry source and wheels]({{ '/docs/track-settings-reference.en.html#geometry-source' | relative_url }}).

<a id="ground"></a>

## Ground contact

- Start with `World Static Only`: the hull, weapons, and other vehicle
  components must not become track terrain.
- `Track Contact Width` defines the working query width. Increase it only when
  a narrow query misses a road edge.
- Test a flat surface first, then small bumps, and only then sharp transitions.
- For idle jitter, verify stable floor collision and ensure the Solver is not
  alternating between competing surfaces.

All fields: [surface tracing]({{ '/docs/track-settings-reference.en.html#surface-tracing' | relative_url }}).

<a id="links"></a>

## Links and motion

- Use a fixed link count for a tank track. Spline deformation must not add or
  remove instances.
- `Reverse Track Direction` is the manual direction switch.
- Configure the rotation source, axis, and sign compatibility in the drive group.
  Do not repair direction with a negative speed scale.
- Link meshes need consistent local axes and pivots. If individual links flip,
  verify the mesh first and then the orientation mode.
- A connector must use the same material phase as its paired links.

Callable actions and runtime switches: [Blueprint node reference]({{ '/docs/track-blueprint-nodes.en.html' | relative_url }}).

<a id="quality"></a>

## Quality and network

- Use `Full Physical` for the local or nearby vehicle.
- `Cheap Remote` keeps the visual loop without the expensive physical chain.
- `Local Ownership + Distance` lets every client choose its own visual cost;
  that cosmetic state is not replicated.
- Use `External` when the project owns quality selection in Blueprint.
- Visual tracks are normally disabled on a dedicated server.

All fields: [Simulation and Runtime]({{ '/docs/track-settings-reference.en.html#simulation-runtime' | relative_url }}).

<a id="troubleshooting"></a>

## Quick troubleshooting

| Symptom | Check first |
| --- | --- |
| No loop appears | `Target Spline`, `Source Mesh Component`, bone names, and `Validate Setup`. |
| Left and right move in opposite directions | `Reverse Track Direction`, rotation axis, and compatibility sign matching. |
| Speed does not match the vehicle | Rotation source, matching Chaos wheel, and its actual radius. |
| Track reacts to the hull | `Surface Query Mode = World Static Only` and the surface collision profile. |
| Links flip | Mesh local axes/pivot and `Orientation Mode`. |
| Spacing changes | Fixed link count, closed spline, and stable topology. |
| Idle jitter | Ground-hit stability, competing surfaces, and solve frequency. |

Use the plugin-wide search on the left when you need an exact field, or open the
[complete settings reference]({{ '/docs/track-settings-reference.en.html' | relative_url }}).

## Next step

- [Solver and Builder settings reference]({{ '/docs/track-settings-reference.en.html' | relative_url }})
- [Blueprint node reference]({{ '/docs/track-blueprint-nodes.en.html' | relative_url }})
