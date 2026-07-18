---
layout: default
title: "Tread & Traverse — Русская документация"
description: "Руководства по настройке гусениц, башен и вооружения"
lang: ru
page_kind: hub
permalink: /ru/
---

<section class="hub-hero">
  <div class="hub-hero__copy">
    <p class="eyebrow">TREAD & TRAVERSE · ДОКУМЕНТАЦИЯ</p>
    <h1>Гусеницы, башни и вооружение</h1>
    <p><strong>Track Spline Builder</strong> отвечает за форму и физику гусеницы. <strong>Vehicle Weapon System</strong> — за башни, прицеливание и оружие. Это независимые системы: можно использовать обе или только ту, которая нужна проекту.</p>
  </div>
  <aside class="hub-hero__aside">
    <strong>Нужна английская версия?</strong>
    <span>Разделы расположены в том же порядке, поэтому между версиями легко переключаться.</span>
    <a href="{{ '/en/' | relative_url }}">Перейти к English →</a>
  </aside>
</section>

## Выберите руководство

<div class="system-grid">
  <article class="system-card">
    <span class="system-number">01 · ГУСЕНИЦЫ</span>
    <h2>Track Spline Builder</h2>
    <p>Создаёт замкнутый сплайн гусеницы по костям ходовой, огибает катки, учитывает поверхность и движение подвески, затем расставляет визуальные звенья.</p>
    <div class="tag-row">
      <span class="tag">Bone Rig</span>
      <span class="tag">Chaos</span>
      <span class="tag">Ground Contact</span>
      <span class="tag">Spline Output</span>
    </div>
    <div class="card-actions">
      <a class="card-link" href="{{ '/docs/track-physics-solver.ru.html' | relative_url }}">Параметры и настройка</a>
      <a class="card-link card-link--secondary" href="{{ '/docs/track-blueprint-nodes.ru.html' | relative_url }}">Blueprint-ноды плагина</a>
      <a class="card-link card-link--secondary" href="{{ '/docs/blueprint-authoring.ru.html' | relative_url }}">Blueprint проекта</a>
      <a class="card-link card-link--secondary" href="{{ '/docs/track-cpp-api.ru.html' | relative_url }}">C++ API</a>
    </div>
  </article>

  <article class="system-card">
    <span class="system-number">02 · ВООРУЖЕНИЕ</span>
    <h2>Vehicle Weapon System</h2>
    <p>Управляет осями башен, стабилизацией, источниками прицеливания, дульными лучами и баллистикой. Поддерживает несколько установок и при необходимости репликацию.</p>
    <div class="tag-row">
      <span class="tag">Turret Axes</span>
      <span class="tag">Stabilization</span>
      <span class="tag">Ballistics</span>
      <span class="tag">Replication</span>
    </div>
    <div class="card-actions">
      <a class="card-link" href="{{ '/docs/vehicle-weapon-system.ru.html' | relative_url }}">Настройка системы</a>
      <a class="card-link card-link--secondary" href="{{ '/docs/vehicle-weapon-blueprint-nodes.ru.html' | relative_url }}">Blueprint-ноды плагина</a>
      <a class="card-link card-link--secondary" href="{{ '/docs/blueprint-authoring.ru.html' | relative_url }}">Blueprint проекта</a>
      <a class="card-link card-link--secondary" href="{{ '/docs/vehicle-weapon-cpp-api.ru.html' | relative_url }}">C++ API</a>
    </div>
  </article>
</div>

## С чего начать

<div class="step-grid">
  <div class="step-card">
    <strong>1. Соберите основу</strong>
    <p>Укажите компоненты, кости, сокеты и стабильные ID, которые использует выбранная система.</p>
  </div>
  <div class="step-card">
    <strong>2. Проверьте конфигурацию</strong>
    <p>Исправьте ошибки встроенной проверки и убедитесь, что система перешла в состояние Ready.</p>
  </div>
  <div class="step-card">
    <strong>3. Испытайте машину</strong>
    <p>Проверьте работу в движении: на неровностях, при повороте корпуса, смене камер и в сетевой игре.</p>
  </div>
</div>

<div class="notice-panel">
  В руководствах описаны настройки, предназначенные для обычного использования в проекте. Экспериментальные и устаревшие параметры сюда не включены.
</div>

