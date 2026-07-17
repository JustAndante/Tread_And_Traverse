---
layout: default
title: "Tread & Traverse — Русская документация"
description: "Полная русская документация систем гусениц и вооружения"
lang: ru
page_kind: hub
permalink: /ru/
---

<section class="hub-hero">
  <div class="hub-hero__copy">
    <p class="eyebrow">РУССКАЯ ВЕРСИЯ</p>
    <h1>Системы бронетехники без разрозненных инструкций</h1>
    <p>Два самостоятельных Runtime-набора: физически отзывчивая гусеница и универсальная система башен, прицеливания и вооружения. Выберите систему — внутри находится полный справочник и рекомендуемый порядок настройки.</p>
  </div>
  <aside class="hub-hero__aside">
    <strong>Нужна английская версия?</strong>
    <span>Структура разделов совпадает, поэтому между языками легко переключаться.</span>
    <a href="{{ '/en/' | relative_url }}">Open English documentation →</a>
  </aside>
</section>

## Выберите систему

<div class="system-grid">
  <article class="system-card">
    <span class="system-number">01 · TRACK SYSTEM</span>
    <h2>Track Spline Builder</h2>
    <p>Построение замкнутой гусеницы по костям ходовой, огибание катков, контакт с поверхностью, реакция на подвеску, верхняя ветвь и вывод визуальных звеньев.</p>
    <div class="tag-row">
      <span class="tag">Bone Rig</span>
      <span class="tag">Chaos</span>
      <span class="tag">Ground Contact</span>
      <span class="tag">Spline Output</span>
    </div>
    <a class="card-link" href="{{ '/docs/track-physics-solver.ru.html' | relative_url }}">Открыть полный справочник</a>
  </article>

  <article class="system-card">
    <span class="system-number">02 · WEAPON SYSTEM</span>
    <h2>Vehicle Weapon System</h2>
    <p>Независимые оси башен, стабилизация, источники прицеливания, установки вооружения, дульные лучи, баллистика, UI-данные, профили и опциональная репликация.</p>
    <div class="tag-row">
      <span class="tag">Turret Axes</span>
      <span class="tag">Stabilization</span>
      <span class="tag">Ballistics</span>
      <span class="tag">Replication</span>
    </div>
    <a class="card-link" href="{{ '/docs/vehicle-weapon-system.ru.html' | relative_url }}">Открыть полный справочник</a>
  </article>
</div>

## Рекомендуемый маршрут

<div class="step-grid">
  <div class="step-card">
    <strong>1. Соберите базовую конфигурацию</strong>
    <p>Свяжите компоненты, кости, сокеты и стабильные ID до тонкой настройки поведения.</p>
  </div>
  <div class="step-card">
    <strong>2. Добейтесь статуса Ready</strong>
    <p>Используйте встроенную валидацию и устраняйте ошибки до настройки ощущений и производительности.</p>
  </div>
  <div class="step-card">
    <strong>3. Проверяйте в движении</strong>
    <p>Тестируйте подвеску, контакты, стабилизацию, камеры и сетевые роли в реальных игровых сценариях.</p>
  </div>
</div>

<div class="notice-panel">
  Основная документация описывает только поддерживаемые релизные режимы. Экспериментальные и устаревшие элементы намеренно не включены.
</div>
