---
layout: default
lang: en
page_kind: reference
title: "Track — Troubleshooting"
description: "Troubleshoot Track Spline Builder by visible symptom"
product: track
doc_section: troubleshooting
---

<p class="doc-breadcrumb">Help</p>

# Quick troubleshooting

Start from the visible symptom. Do not change several setting groups at once.

| Symptom | Check first |
| --- | --- |
| No loop appears | `Target Spline`, `Source Mesh Component`, bone names, and `Validate Setup`. |
| Sides move in different directions | `Reverse Track Direction`, rotation axis, and compatibility sign matching. |
| Speed does not match the vehicle | Rotation source, matching Chaos wheel, and its actual radius. |
| Track reacts to the hull | `World Static Only` and the surface collision profile. |
| Links flip | Mesh local axes/pivot and `Orientation Mode`. |
| Spacing changes | Fixed link count, closed spline, and stable topology. |
| Idle jitter | Ground-hit stability and competing surfaces. |

## When the first check is not enough

1. Restore the last working setting group.
2. Reproduce the issue on one side of the vehicle.
3. Find the exact field with plugin-wide search.
4. Only then enable editor-only diagnostics.

[Open the complete settings reference]({{ '/docs/track-settings-reference.en.html' | relative_url }}).

<div class="page-nav" markdown="1">
[← Quality and network]({{ '/docs/track-quality-network.en.html' | relative_url }})
[All settings →]({{ '/docs/track-settings-reference.en.html' | relative_url }})
</div>

