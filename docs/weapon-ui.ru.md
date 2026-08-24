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

- `Get Vehicle Weapon Trace UI` — результат прямой трассировки;
- `Get Vehicle Weapon Ballistic UI` — баллистическая точка;
- `Get Vehicle Weapon UI Pair` — согласованная пара данных;
- `Find Vehicle Weapon System` — поиск компонента без жёсткой ссылки.

`Refresh Vehicle Weapon UI Cache` нужен только проекту с явным Player
Controller или отдельным расписанием UI.

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

