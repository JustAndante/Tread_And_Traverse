---
layout: default
lang: en
page_kind: reference
title: "Track Spline Builder — Diagnostics"
description: "Editor-only Track Physics Diagnostics component"
product: track
doc_section: diagnostics
---

# Track Physics Diagnostics

This is a separate editor-only component for focused Solver troubleshooting.
Do not add it to a production vehicle class: it is excluded from cooked builds.

## Quick use

1. Temporarily add `Track Physics Diagnostics` to the vehicle Actor.
2. Select the relevant `Solver Component`.
3. Enable `Draw Debug`.
4. For a rare wave or snap, enable `Record Detailed Diagnostics`.
5. Reproduce the problem and copy `Copy-Ready Diagnostic Log`.
6. Remove the component after troubleshooting.

Use `Apply Track Diagnostic Settings` after changing settings during PIE when
they must be pushed to the selected Solver immediately.

## Setup and recording

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Solver Component` | None | Solver on the same Actor. Leave empty only when exactly one Solver exists. |
| `Record Detailed Diagnostics` | Off | Records expensive point history and causal data for a short focused session. |
| `Draw Point Causal Map` | On | Draws the captured cause chain after a trigger. Requires recording and `Draw Debug`. |
| `Point Map Trigger Distance` | 8 cm | Point displacement that captures a diagnostic event. |
| `Frames Before Trigger` | 6 | Captured frames before the event. |
| `Frames After Trigger` | 4 | Captured frames after the event. |

## Drawing

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Draw Debug` | Off | Master editor/PIE drawing switch. |
| `Draw Debug Traces` | On | Surface traces and accepted/rejected hits. |
| `Draw Debug Points` | On | Source, target, contact, and solved points. |
| `Draw Debug Solved Spline` | On | Final solved loop. |
| `Draw Debug Wheel Guides` | On | Wheel circles and guide-point limits. |
| `Draw Interval` (Advanced) | 0.1 s | Drawing update rate; it does not change Solver frequency. |
| `Point Size` (Advanced) | 8 cm | Debug point marker size. |
| `Line Thickness` (Advanced) | 1.5 | Debug line thickness. |

The `Anchor`, `Solved`, `Trace Hit`, `Trace Miss`, `Wheel Guide`, and
`Wheel Limit` colors only affect drawing readability.

## Which log to attach

For a normal issue, copy one `Copy-Ready Diagnostic Log` line immediately after
reproduction. For a brief wave, enable recording before the test and copy the
log after the trigger. The buffer already contains frames before and after the
event, so you do not have to catch the exact frame manually.

Do not profile performance with `Draw Debug` or `Record Detailed Diagnostics`
enabled.

<div class="page-nav" markdown="1">
[← Troubleshooting]({{ '/docs/track-troubleshooting.en.html' | relative_url }})
[Blueprint nodes →]({{ '/docs/track-blueprint-nodes.en.html' | relative_url }})
</div>
