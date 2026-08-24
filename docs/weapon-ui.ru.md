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

- `Get Weapon HUD Screen Data(Vehicle, Weapon ID)` — все экранные точки одного
  произвольного оружия, включая максимальную дальность лучей без hit correction;
- `Get Weapon Muzzle Trace HUD Data(Vehicle, Weapon ID)` — только muzzle trace;
- `Get Weapon Ballistic Aim HUD Data(Vehicle, Weapon ID)` — баллистический маркер;
- `Get Aim Source HUD State(Vehicle, Aim Source ID)` — камера, прицел или AI source;
- `Get Vehicle Weapon HUD Snapshot` — динамический список любого числа оружия;
- `Find Vehicle Weapon System` — поиск компонента без жёсткой ссылки.

Для третьего или четвёртого оружия передайте его ID в ту же ноду. Отдельных
Primary/Secondary-слотов в текущем API нет. Advanced-нода
`Refresh Vehicle Weapon HUD Cache (Advanced)` нужна только собственному
scheduler с явным Player Controller.

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

