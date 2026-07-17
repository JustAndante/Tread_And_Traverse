---
layout: default
title: "Tread & Traverse — English Documentation"
description: "Setup guides for tracks, turrets, aiming, and weapons"
lang: en
page_kind: hub
permalink: /en/
---

<section class="hub-hero">
  <div class="hub-hero__copy">
    <p class="eyebrow">TREAD & TRAVERSE · DOCUMENTATION</p>
    <h1>Tracks, turrets, and weapons</h1>
    <p><strong>Track Spline Builder</strong> handles track shape and physics. <strong>Vehicle Weapon System</strong> handles turrets, aiming, and weapons. The two systems are independent, so a project can use either one or both.</p>
  </div>
  <aside class="hub-hero__aside">
    <strong>Предпочитаете русский?</strong>
    <span>The sections follow the same order in both languages, making it easy to switch between them.</span>
    <a href="{{ '/ru/' | relative_url }}">Перейти к русской версии →</a>
  </aside>
</section>

## Choose a guide

<div class="system-grid">
  <article class="system-card">
    <span class="system-number">01 · TRACKS</span>
    <h2>Track Spline Builder</h2>
    <p>Builds a closed track spline from suspension bones, wraps it around the wheels, responds to terrain and suspension movement, and places the visible track links.</p>
    <div class="tag-row">
      <span class="tag">Bone Rig</span>
      <span class="tag">Chaos</span>
      <span class="tag">Ground Contact</span>
      <span class="tag">Spline Output</span>
    </div>
    <div class="card-actions">
      <a class="card-link" href="{{ '/docs/track-physics-solver.en.html' | relative_url }}">Settings and setup</a>
      <a class="card-link card-link--secondary" href="{{ '/docs/track-blueprint-nodes.en.html' | relative_url }}">Blueprint nodes</a>
    </div>
  </article>

  <article class="system-card">
    <span class="system-number">02 · WEAPONS</span>
    <h2>Vehicle Weapon System</h2>
    <p>Controls turret axes, stabilization, aim sources, muzzle rays, and ballistics. It supports multiple weapon installations and optional replication.</p>
    <div class="tag-row">
      <span class="tag">Turret Axes</span>
      <span class="tag">Stabilization</span>
      <span class="tag">Ballistics</span>
      <span class="tag">Replication</span>
    </div>
    <div class="card-actions">
      <a class="card-link" href="{{ '/docs/vehicle-weapon-system.en.html' | relative_url }}">System setup</a>
      <a class="card-link card-link--secondary" href="{{ '/docs/vehicle-weapon-blueprint-nodes.en.html' | relative_url }}">Blueprint nodes</a>
    </div>
  </article>
</div>

## Where to start

<div class="step-grid">
  <div class="step-card">
    <strong>1. Connect the essentials</strong>
    <p>Assign the components, bones, sockets, and stable IDs used by the selected system.</p>
  </div>
  <div class="step-card">
    <strong>2. Validate the setup</strong>
    <p>Resolve validation errors and confirm that the system reaches Ready status.</p>
  </div>
  <div class="step-card">
    <strong>3. Test the vehicle</strong>
    <p>Check the result while driving over uneven ground, rotating the hull, switching cameras, and running a network session.</p>
  </div>
</div>

<div class="notice-panel">
  The guides cover settings intended for normal project use. Experimental and legacy-only controls are not included.
</div>
