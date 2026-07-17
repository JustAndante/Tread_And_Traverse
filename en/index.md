---
layout: default
title: "Tread & Traverse — English Documentation"
description: "Complete English documentation for track and weapon systems"
lang: en
page_kind: hub
permalink: /en/
---

<section class="hub-hero">
  <div class="hub-hero__copy">
    <p class="eyebrow">ENGLISH EDITION</p>
    <h1>Armored vehicle systems without fragmented setup notes</h1>
    <p>Two independent Runtime toolsets: a physically responsive track solution and a universal turret, aiming, and weapon framework. Choose a system below for its complete reference and recommended setup path.</p>
  </div>
  <aside class="hub-hero__aside">
    <strong>Предпочитаете русский?</strong>
    <span>Both editions use the same structure, so switching languages stays predictable.</span>
    <a href="{{ '/ru/' | relative_url }}">Открыть русскую документацию →</a>
  </aside>
</section>

## Choose a system

<div class="system-grid">
  <article class="system-card">
    <span class="system-number">01 · TRACK SYSTEM</span>
    <h2>Track Spline Builder</h2>
    <p>Closed-loop generation from wheel bones, wheel wrapping, terrain contact, suspension response, upper-run dynamics, and instanced visual track links.</p>
    <div class="tag-row">
      <span class="tag">Bone Rig</span>
      <span class="tag">Chaos</span>
      <span class="tag">Ground Contact</span>
      <span class="tag">Spline Output</span>
    </div>
    <a class="card-link" href="{{ '/docs/track-physics-solver.en.html' | relative_url }}">Open the complete reference</a>
  </article>

  <article class="system-card">
    <span class="system-number">02 · WEAPON SYSTEM</span>
    <h2>Vehicle Weapon System</h2>
    <p>Independent turret axes, stabilization, aim sources, weapon installations, muzzle rays, ballistics, UI data, reusable profiles, and optional replication.</p>
    <div class="tag-row">
      <span class="tag">Turret Axes</span>
      <span class="tag">Stabilization</span>
      <span class="tag">Ballistics</span>
      <span class="tag">Replication</span>
    </div>
    <a class="card-link" href="{{ '/docs/vehicle-weapon-system.en.html' | relative_url }}">Open the complete reference</a>
  </article>
</div>

## Recommended path

<div class="step-grid">
  <div class="step-card">
    <strong>1. Build the base configuration</strong>
    <p>Bind components, bones, sockets, and stable IDs before tuning behavior.</p>
  </div>
  <div class="step-card">
    <strong>2. Reach Ready status</strong>
    <p>Use the built-in validation path and resolve errors before feel or performance tuning.</p>
  </div>
  <div class="step-card">
    <strong>3. Test under motion</strong>
    <p>Exercise suspension, contacts, stabilization, cameras, and network roles in representative gameplay.</p>
  </div>
</div>

<div class="notice-panel">
  The main documentation covers supported release modes only. Experimental and legacy-only controls are intentionally excluded.
</div>
