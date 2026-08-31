---
layout: default
lang: en
page_kind: hub
doc_section: roadmap
title: "Tread & Traverse — Roadmap"
description: "Public release roadmap for Track Spline Builder and Vehicle Weapon System"
---

<section class="hub-hero">
  <div class="hub-hero__copy">
    <p class="eyebrow">TREAD & TRAVERSE · PUBLIC ROADMAP</p>
    <h1>Roadmap</h1>
    <p>A concise view of what is available, what blocks the first customer-ready release, and what is planned next.</p>
  </div>
  <aside class="hub-hero__aside">
    <strong>Русская версия</strong>
    <a href="{{ '/docs/roadmap.ru.html' | relative_url }}">Открыть →</a>
  </aside>
</section>

<div class="guide-callout" markdown="1">
The roadmap communicates direction, not fixed dates. Priorities may change
after compatibility testing, performance measurements, and user reports.
Updated: **31 August 2026**.
</div>

## Available now

- bilingual public documentation for both runtime modules;
- Track Builder, physical Solver, quality modes, and editor-only diagnostics;
- profile-driven multi-turret Vehicle Weapon System with stabilization,
  traces, ballistics, configurable weapons, HUD data, and opt-in replication;
- curated buyer-facing Blueprint API and validation tools;
- current pre-release target: Unreal Engine 5.4, plugin version `0.2.0-pre`.

## Now — first customer-ready release

- finish the manual Leopard/T-80/T-90 weapon, UI, effects, reload, and smoke
  acceptance pass after the latest profile migration;
- finish the T-80 Track visual/physics acceptance pass after Solver
  decomposition;
- complete listen-server plus client checks for axis state, firing, held
  triggers, reload, heat, smoke banks, and duplicate presentation;
- produce a clean BuildPlugin archive and verify it in a newly created project;
- finalize publisher metadata, support links, licensing review, screenshots,
  and the Fab listing package.

The release is ready only when these gates pass together. A green build alone
does not replace visual and multiplayer acceptance.

## Next — performance and usability

- reduce the cost of remote or offscreen track simulation without changing the
  accepted local vehicle physics;
- move inactive/replenishment weapon work from per-frame polling to
  state-driven updates;
- repeat the same one-versus-four vehicle benchmark after each isolated change;
- improve example profiles, validation messages, and onboarding from real bug
  reports.

## Later — under evaluation

- additional Unreal Engine versions after separate build and acceptance runs;
- moving-vehicle and networked fleet performance captures;
- more example installation patterns and vehicle rigs;
- an explicit asset preload phase only if measured mass-spawn cost requires it.

Items in this section are not release promises. They move into **Now** only
after scope and verification are clear.

## Help shape the roadmap

- [Report a reproducible bug](https://github.com/JustAndante/Tread_And_Traverse/issues/new?template=bug_report.yml)
- [Suggest an improvement](https://github.com/JustAndante/Tread_And_Traverse/issues/new?template=feature_request.yml)
- [Read the English documentation]({{ '/en/' | relative_url }})

Please use one issue per problem or proposal. Do not post private project files,
credentials, license keys, or personal information in a public issue.
