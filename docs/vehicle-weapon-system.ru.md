---
layout: default
lang: ru
page_kind: reference
title: "Vehicle Weapon System — Руководство"
description: "Короткая настройка и практические задачи Vehicle Weapon System"
product: weapon
doc_section: guide
---

# Vehicle Weapon System

`Vehicle Weapon System` управляет осями башен, стабилизацией, источниками
прицеливания, дульными точками, установками, эффектами и опциональной
репликацией. Связанный `AmmoSystem` хранит типы боеприпасов, запас и состояние
перезарядки.

<div class="guide-callout" markdown="1">
**Рекомендуемый путь:** сначала настройте одну башню и одно оружие. После
успешной проверки добавляйте спаренные, командирские и независимые установки.
</div>

<a id="quick-start"></a>

## Быстрый старт

### 1. Начните с готового варианта

Создайте child от общего Blueprint машины и продублируйте четыре профиля
ближайшего демонстрационного танка:

1. `DA_VWS_*` — оси, установки и muzzle sockets;
2. `DA_WeaponLoadout_*` — trigger, reload, heat, recoil, FX и audio;
3. `DA_ArmamentProfile_*` — ссылки на первые два профиля;
4. `DA_TankVariant_*` — одна верхняя точка подключения варианта.

### 2. Сохраните единые ID

Один `Weapon ID` должен совпадать в installation, muzzle, loadout и записи
`Ammo Type Definitions`, например `MainGun`, `CoaxMG` или `Smoke`. Для каждой
независимой yaw/pitch-механики используйте стабильный `Axis Group ID`.

### 3. Замените привязки и ассеты

В `DA_VWS_*` назначьте компоненты осей и реальные muzzle sockets нового меша.
В `DA_WeaponLoadout_*` настройте способ подачи, trigger, reload, heat, recoil,
эффекты и звук. Projectile, запас, trajectory prediction, иконка и клавиша
каждого типа находятся в `AmmoSystem -> Ammo Type Definitions`.

### 4. Назначьте профиль и проверьте

В `WeaponAimSystem` назначьте `Tank Variant Profile`, включите
`Use Tank Profile Weapon System Settings` и выполните
`Validate Vehicle Weapon System Configuration`. Direct profile-поля оставьте
пустыми, если верхний Tank Variant Profile уже назначен.

### 5. Подключите обычный runtime-граф

Вызывайте в таком порядке:

1. `Update Weapon Traces And Ballistics`;
2. `Update Vehicle Aim Sources`;
3. `Update Vehicle Weapon System`.

Компонент хранит подробные результаты в кэше. Обычному графу не нужно каждый Tick
разбирать большие структуры или повторять трассировки для UI.

<div class="guide-next" markdown="1">
**Готово?** Выберите следующую задачу. Низкоуровневые детали сохранены в
[подробном справочнике]({{ '/docs/vehicle-weapon-reference.ru.html' | relative_url }}).
</div>

Полная последовательность с примерами MainGun, нескольких MG, Smoke и HUD:
[быстрый старт интеграции]({{ '/docs/vehicle-weapon-quick-start.ru.html' | relative_url }}).

## Выберите следующую задачу

<div class="task-grid">
  <a class="task-card" href="{{ '/docs/weapon-installations.ru.html' | relative_url }}"><strong>1. Схемы установки</strong><span>Основное, спаренное, независимое или неподвижное оружие.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-aiming.ru.html' | relative_url }}"><strong>2. Наведение и стабилизация</strong><span>Источники цели, режимы осей и механический привод.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-ui.ru.html' | relative_url }}"><strong>3. Прицел и UI</strong><span>Кэшированные точки, экранные координаты и виджеты.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-replication.ru.html' | relative_url }}"><strong>4. Репликация</strong><span>Что синхронизирует компонент и что остаётся логикой проекта.</span></a>
  <a class="task-card" href="{{ '/docs/weapon-troubleshooting.ru.html' | relative_url }}"><strong>Исправить проблему</strong><span>Короткие проверки по видимому симптому.</span></a>
</div>

## Как устроен раздел

- **Руководство** — первый компонент, одна башня и одно оружие.
- **Сборка системы** — установки, наведение и UI на отдельных страницах.
- **Запуск и поставка** — отдельная проверка репликации.
- **Справочник** — подробная интеграция и все Blueprint-ноды.

<div class="guide-next" markdown="1">
**Продолжить по порядку:** [выберите схему установки]({{ '/docs/weapon-installations.ru.html' | relative_url }}).
</div>

