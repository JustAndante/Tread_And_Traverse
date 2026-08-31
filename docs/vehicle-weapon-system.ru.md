---
layout: default
lang: ru
page_kind: reference
title: "Vehicle Weapon System — Руководство"
description: "Профильная настройка и практические задачи Vehicle Weapon System"
product: weapon
doc_section: guide
---

# Vehicle Weapon System

Один компонент управляет осями башен, стабилизацией, источниками прицеливания,
дульными трассами, баллистикой, настроенными trigger-маршрутами, эффектами и
опциональной репликацией. Связанный Ammo System машины хранит типы снарядов,
запас, chamber/feed и транзакции перезарядки.

<div class="guide-callout" markdown="1">
**Рекомендуемый путь:** сначала настройте один Tank Variant Profile и один
`Weapon ID`. Спаренные, командирские, неподвижные и launcher-установки
добавляйте только после успешной проверки первого оружия.
</div>

<a id="quick-start"></a>

## Быстрый старт

### 1. Добавьте компонент

Добавьте `Vehicle Weapon System` в Blueprint машины. До настройки bindings
создайте реальные muzzle sockets на мешах оружия.

### 2. Выберите один источник конфигурации

Для полного vehicle workflow:

1. Назначьте `Tank Variant Profile`.
2. Оставьте `Use Aiming / Turret Setup From Tank Profile` включённым.
3. Оставьте `Direct Weapon System Profile (Advanced)` и
   `Direct Armament Profile (Fallback)` пустыми.

Tank Variant содержит Armament Profile с двумя частями:

- `Aiming / Turret Setup` — оси, установки, muzzle sockets и traces;
- `Weapon Loadouts` — feed, trigger, cadence, reload, heat, recoil, launcher
  banks, гильзы, эффекты, звук и selectable channels.

Выключайте профильный тумблер только тогда, когда локальные массивы осей,
установок и muzzle должны быть авторитетными для нестандартного рига. Не
поддерживайте профиль и локальные массивы как две конкурирующие production-
конфигурации.

### 3. Не дублируйте владельцев данных и ID

Используйте стабильные ролевые ID, а не имена мешей:

```text
Axis Group IDs: MainTurretAxes, CommanderTurretAxes, InTowerMGAxes
Weapon IDs:     MainGun, CoaxMG, InTowerMG, Smoke
Ammo Type IDs:  APFSDS, HE, HEAT, Default
```

| Владелец | Настройка |
| --- | --- |
| Aiming / Turret Setup | физические оси, установки, component/socket muzzle и traces |
| Weapon Loadout | trigger, feed, timing, heat, recoil, launcher geometry, эффекты и звук |
| Ammo Type Definition | projectile class, запас, trajectory settings, иконка и input |
| Projectile Blueprint | `Initial Speed`, damage, impact/trail и optional sabot |

Не дублируйте скорость projectile, reload duration, эффекты или запас во второй
точке. Smoke является обычным `Weapon ID` и не требует отдельного Smoke-
профиля.

### 4. Инициализируйте и подключите runtime

Выполните `Initialize Vehicle Armament Profile`, затем
`Validate Vehicle Weapon System Configuration`. Сначала исправляйте первую
blocking error, а уже потом следующую группу.

Обычный порядок кадра:

1. `Update Weapon Traces And Ballistics`;
2. `Update Vehicle Aim Sources`;
3. `Update Vehicle Weapon System`.

Передавайте press/release в
`Request Configured Weapon Trigger State(Weapon ID, Trigger Held)`. Настроенный
runtime владеет cadence, held-fire, reload scheduling, heat, созданием
projectile, recoil и presentation. Не стройте рядом второй Timeline или второй
стандартный путь выстрела.

### 5. Проверьте в PIE

У готовой конфигурации:

- configured и ready ID совпадают, blocking validation errors отсутствуют;
- каждый trace и projectile начинаются из нужного socket;
- yaw/pitch limits и владелец стабилизации определены однозначно;
- ammo, reload, heat и replenish независимы для каждого `Weapon ID`;
- `Initial Speed` выбранного projectile управляет и полётом, и баллистикой;
- HUD читает готовый кэш, а не запускает дополнительные traces;
- debug drawing выключен после настройки.

Сначала проверьте single-player, затем listen server с одним клиентом.

<div class="guide-next" markdown="1">
**Работает?** Выберите следующую задачу. Точный контракт владельцев данных,
профилей, input, HUD и сети находится в
[подробном справочнике]({{ '/docs/vehicle-weapon-reference.ru.html' | relative_url }}).
</div>

## Выберите следующую задачу

<div class="task-grid">
  <a class="task-card" href="{{ '/docs/weapon-installations.ru.html' | relative_url }}"><strong>1. Схемы установки</strong><span>Основное, спаренное, независимое, parent-mounted или неподвижное оружие.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-aiming.ru.html' | relative_url }}"><strong>2. Наведение и стабилизация</strong><span>Источники цели, режимы осей и механический привод.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-ui.ru.html' | relative_url }}"><strong>3. Прицел и UI</strong><span>Кэшированные traces, баллистика и любое число Weapon ID.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-replication.ru.html' | relative_url }}"><strong>4. Репликация</strong><span>Owning client, authority, simulated proxy и стрельба.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-troubleshooting.ru.html' | relative_url }}"><strong>Исправить проблему</strong><span>Короткие проверки по видимому симптому.</span></a>
</div>

## Как устроен раздел

- **Руководство** — первая профильная башня и одно оружие.
- **Сборка системы** — установки, наведение и UI на отдельных страницах.
- **Запуск и поставка** — отдельная проверка репликации.
- **Справочник** — подробная интеграция и curated Blueprint API.

<div class="guide-next" markdown="1">
**Продолжить по порядку:** [выберите схему установки]({{ '/docs/weapon-installations.ru.html' | relative_url }}).
</div>
