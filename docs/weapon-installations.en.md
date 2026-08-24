---
layout: default
lang: en
page_kind: reference
title: "Weapon — Installation Patterns"
description: "Configure main, coaxial, independent, and fixed weapons"
product: weapon
doc_section: installations
---

<p class="doc-breadcrumb">Build the system · Step 1 of 3</p>

# Installation patterns

Choose the mechanical pattern first. It determines whether the weapon needs its
own axis group and which muzzle binding it uses.

| Pattern | Configuration |
| --- | --- |
| Main + coaxial | One Axis Group, separate Weapon IDs and muzzle points. |
| Independent turret | A separate Axis Group and its bound installations. |
| Parent-mounted weapon | `Parent Mounted (Limited Cone)` and a mechanical cone. |
| Fixed weapon | Disable `Uses Axis Group`; keep the muzzle definition. |
| Multiple barrels | Separate installation and muzzle definition for each Weapon ID. |

## Verify

- every `Weapon ID` is unique and stable;
- the installation references the intended Axis Group;
- the muzzle point starts from the correct component and socket;
- a coaxial weapon does not duplicate the same physical axes.

Detailed patterns: [Installation Patterns]({{ '/docs/vehicle-weapon-reference.en.html#installations' | relative_url }}).

<div class="page-nav" markdown="1">
[← Guide]({{ '/docs/vehicle-weapon-system.en.html' | relative_url }})
[Next: aiming →]({{ '/docs/weapon-aiming.en.html' | relative_url }})
</div>

