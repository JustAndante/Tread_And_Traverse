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

## Что вы хотите настроить?

<div class="task-grid">
  <a class="task-card" href="#installations"><strong>Схема установки</strong><span>Основное, спаренное, независимое или неподвижное оружие.</span></a>
  <a class="task-card" href="#aiming"><strong>Наведение и стабилизация</strong><span>Источники цели, режимы осей и механический привод.</span></a>
  <a class="task-card" href="#ui"><strong>Прицел и UI</strong><span>Кэшированные точки, экранные координаты и виджеты.</span></a>
  <a class="task-card" href="#replication"><strong>Репликация</strong><span>Что реплицирует компонент и что остаётся логикой проекта.</span></a>
  <a class="task-card" href="#troubleshooting"><strong>Исправить проблему</strong><span>Короткая проверка наиболее частых ошибок.</span></a>
</div>

<a id="installations"></a>

## Схемы установки

- **Основное + спаренное:** две установки используют одну группу осей, но разные
  Weapon ID и дульные точки.
- **Независимая башня:** создайте отдельную группу осей и привяжите к ней нужное
  оружие.
- **Ограниченная установка на родителе:** используйте
  `Parent Mounted (Limited Cone)` и настройте механический конус.
- **Неподвижное оружие:** выключите `Uses Axis Group`, сохранив дульную точку
  для трассировки или баллистики.
- **Несколько стволов:** добавляйте отдельную установку и muzzle definition для
  каждого стабильного Weapon ID.

Подробные схемы: [типовые установки]({{ '/docs/vehicle-weapon-reference.ru.html#installations' | relative_url }}).

<a id="aiming"></a>

## Наведение и стабилизация

- `Update Vehicle Aim Sources` формирует стандартные источники External,
  Gunner, Commander и held/sub-gunner.
- Меняйте режим оси через `Set Weapon Axis Control State` при смене режима, а
  не пересобирайте массив структур каждый Tick.
- Для намеренного механического движения вызовите
  `Arm Weapon Axis Mechanical Drive` из события ввода перед штатным
  yaw/pitch-вызовом.
- Передавайте yaw и pitch раздельно: `(YawDelta, 0)` и `(0, PitchDelta)`.
- Переключение камер, ввод, эффекты выстрела и политика урона остаются логикой
  конкретной машины.

Подробности: [прицеливание и стабилизация]({{ '/docs/vehicle-weapon-reference.ru.html#aiming-stabilization' | relative_url }}).

<a id="ui"></a>

## Прицел и UI

UI должен читать кэш, а не запускать собственные трассировки:

- `Get Vehicle Weapon Trace UI`;
- `Get Vehicle Weapon Ballistic UI`;
- `Get Vehicle Weapon UI Pair`;
- `Find Vehicle Weapon System`.

`Refresh Vehicle Weapon UI Cache` нужен только нестандартному проекту с явным
Player Controller или отдельным расписанием UI.

Подробности: [модульный UI-кадр]({{ '/docs/vehicle-weapon-reference.ru.html#ui-frame' | relative_url }}).

<a id="replication"></a>

## Репликация

- Включайте поддерживаемую репликацию только если оси должны синхронизироваться
  через компонент.
- Камеры, локальный HUD и косметическое качество остаются локальными.
- Стабильные Axis Group ID и Weapon ID должны совпадать на сервере и клиентах.
- Сначала проверьте single-player, затем listen server и только потом dedicated
  server.

Подробности: [репликация]({{ '/docs/vehicle-weapon-reference.ru.html#replication' | relative_url }}).

<a id="troubleshooting"></a>

## Быстрая диагностика

| Симптом | Сначала проверьте |
| --- | --- |
| Runtime не готов | Результат обеих editor-команд, дубли ID и отсутствующие bindings. |
| Башня не движется | Axis Group ID, yaw/pitch pivots, режим оси и порядок трёх runtime-вызовов. |
| Прицел уходит после смены камеры | Активный aim source и выбранную `Aim Target Policy`. |
| Спаренное оружие смотрит отдельно | Обе установки должны ссылаться на одну Axis Group. |
| UI показывает старую точку | Порядок обновления runtime и чтение кэша после него. |
| Клиент видит другое положение | Репликацию оси, стабильные ID и одинаковую конфигурацию. |

Для точного имени ноды используйте поиск слева или
[справочник Blueprint-нод]({{ '/docs/vehicle-weapon-blueprint-nodes.ru.html' | relative_url }}).

## Следующий шаг

- [Подробная интеграция и поддерживаемые сценарии]({{ '/docs/vehicle-weapon-reference.ru.html' | relative_url }})
- [Справочник Blueprint-нод]({{ '/docs/vehicle-weapon-blueprint-nodes.ru.html' | relative_url }})
