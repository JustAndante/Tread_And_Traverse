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

Один компонент управляет конфигурацией осей башни, стабилизацией, источниками
прицеливания, дульными точками, оружейными установками и опциональной
репликацией.

<div class="guide-callout" markdown="1">
**Рекомендуемый путь:** сначала настройте одну башню и одно оружие. После
успешной проверки добавляйте спаренные, командирские и независимые установки.
</div>

<a id="quick-start"></a>

## Быстрый старт

### 1. Добавьте компонент

Добавьте `Vehicle Weapon System` в Blueprint машины и выберите
`Definition Source = Embedded Definitions`.

### 2. Опишите физические оси

Создайте один `Embedded Axis Definition` для каждой независимо наводимой
yaw/pitch-механики. Используйте стабильный `Axis Group ID`, например
`MainTurretAxes`.

### 3. Добавьте дульную точку и оружие

1. Создайте `Embedded Muzzle Definition` для логического ствола.
2. Создайте `Embedded Weapon Installation`.
3. Назначьте стабильный `Weapon ID`, например `MainGun`.
4. Свяжите установку с нужной группой осей и дульной точкой.

### 4. Соберите и проверьте

В Details компонента выполните:

1. `Rebuild Embedded Weapon Runtime`;
2. `Validate Vehicle Weapon System Configuration`.

Количество настроенных и готовых элементов должно совпадать, а список ошибок
должен быть пустым.

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

