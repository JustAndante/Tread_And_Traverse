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
| Link speed does not match the vehicle | Rotation source, matching Chaos wheel, and its actual radius. |
| Steering is too weak or too sharp | `Maximum Drive Torque` and a positive `Turn Gear Ratio`. Do not change Chaos transmission ratios to tune steering. |
| A turn immediately drops the gearbox to first | The Actor must have one `Tracked Vehicle Engine RPM`; verify two contiguous driven-wheel side groups and enabled automatic shifting. |
| Real slowdown does not downshift | `Change Down RPM`, automatic transmission, and correct driven-wheel side grouping. |
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

If the checks above do not explain a reproducible problem,
[open a structured bug report](https://github.com/JustAndante/Tread_And_Traverse/issues/new?template=bug_report.yml).

<div class="page-nav" markdown="1">
[← Quality and network]({{ '/docs/track-quality-network.en.html' | relative_url }})
[All settings →]({{ '/docs/track-settings-reference.en.html' | relative_url }})
</div>
