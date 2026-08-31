---
layout: default
lang: ru
page_kind: reference
title: "Weapon — Прицел и UI"
description: "Подключение кэшированных точек прицеливания к пользовательскому интерфейсу"
product: weapon
doc_section: ui
---

<p class="doc-breadcrumb">Сборка системы · Шаг 3 из 3</p>

# Прицел и UI

UI должен читать готовый runtime-кэш. Не запускайте из виджета вторую
трассировку или баллистический расчёт.

## Используйте готовые данные

- `Get Weapon HUD Screen Data` — полный экранный набор одного Weapon ID;
- `Get Weapon Muzzle Trace HUD Data` — физический muzzle trace оружия;
- `Get Weapon Ballistic Aim HUD Data` — его баллистическая точка;
- `Get Vehicle Weapon HUD Snapshot` — масштабируемый снимок всего оружия;
- `Find Vehicle Weapon System` — поиск компонента без жёсткой ссылки.

`Refresh Vehicle Weapon HUD Cache (Advanced)` нужен только проекту с явным
Player Controller или отдельным расписанием UI.

## Проверка

1. Runtime обновляется раньше чтения UI-кэша.
2. Переключение камеры меняет source, а не создаёт новый trace path.
3. Виджет не разбирает большие runtime-структуры каждый Tick.
4. Simulated proxy не использует локальную камеру владельца.

Подробности: [Modular UI Frame]({{ '/docs/vehicle-weapon-reference.ru.html#ui-frame' | relative_url }}).

<div class="page-nav" markdown="1">
[← Наведение]({{ '/docs/weapon-aiming.ru.html' | relative_url }})
[Далее: репликация →]({{ '/docs/weapon-replication.ru.html' | relative_url }})
</div>

