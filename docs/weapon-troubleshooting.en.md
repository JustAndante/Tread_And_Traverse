---
layout: default
lang: en
page_kind: reference
title: "Weapon — Troubleshooting"
description: "Troubleshoot Vehicle Weapon System by visible symptom"
product: weapon
doc_section: troubleshooting
---

<p class="doc-breadcrumb">Help</p>

# Quick troubleshooting

| Symptom | Check first |
| --- | --- |
| Runtime is not ready | Tank Variant/Armament links, duplicate IDs, missing bindings, and profile initialization. |
| Turret does not move | Axis Group ID, yaw/pitch pivots, axis mode, and runtime call order. |
| Reticle drifts after camera switch | Active aim source and `Aim Target Policy`. |
| Coaxial weapon aims independently | Both installations must reference one Axis Group. |
| UI shows an old point | Runtime update order and cache reads after it. |
| Client sees a different pose | Axis replication, stable IDs, and matching configuration. |

## When the first check is not enough

1. Run `Validate Vehicle Weapon System Configuration`.
2. Fix the first error instead of changing the entire list at once.
3. Find the exact node with plugin-wide search.
4. Compare configured and ready counts after profile initialization.

[Open the Blueprint node reference]({{ '/docs/vehicle-weapon-blueprint-nodes.en.html' | relative_url }}).

If the checks above do not explain a reproducible problem,
[open a structured bug report](https://github.com/JustAndante/Tread_And_Traverse/issues/new?template=bug_report.yml).

<div class="page-nav" markdown="1">
[← Replication]({{ '/docs/weapon-replication.en.html' | relative_url }})
[Detailed integration →]({{ '/docs/vehicle-weapon-reference.en.html' | relative_url }})
</div>

