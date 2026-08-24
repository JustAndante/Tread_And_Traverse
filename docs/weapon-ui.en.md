---
layout: default
lang: en
page_kind: reference
title: "Weapon — Reticle and UI"
description: "Connect cached aiming points to the user interface"
product: weapon
doc_section: ui
---

<p class="doc-breadcrumb">Build the system · Step 3 of 3</p>

# Reticle and UI

UI should read the prepared runtime cache. Do not start a second trace or
ballistic calculation from a widget.

## Use prepared data

- `Get Vehicle Weapon Trace UI` — direct trace result;
- `Get Vehicle Weapon Ballistic UI` — ballistic point;
- `Get Vehicle Weapon UI Pair` — a consistent data pair;
- `Find Vehicle Weapon System` — component lookup without a hard reference.

`Refresh Vehicle Weapon UI Cache` is only needed by a project with an explicit
Player Controller or an independent UI schedule.

## Verify

1. Runtime updates before the UI cache is read.
2. Camera switching changes the source instead of creating another trace path.
3. The widget does not break large runtime structs every Tick.
4. A simulated proxy does not use the owner's local camera.

Details: [Modular UI Frame]({{ '/docs/vehicle-weapon-reference.en.html#ui-frame' | relative_url }}).

<div class="page-nav" markdown="1">
[← Aiming]({{ '/docs/weapon-aiming.en.html' | relative_url }})
[Next: replication →]({{ '/docs/weapon-replication.en.html' | relative_url }})
</div>

