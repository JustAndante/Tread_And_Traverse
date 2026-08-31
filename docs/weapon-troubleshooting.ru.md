---
layout: default
lang: ru
page_kind: reference
title: "Weapon — Диагностика"
description: "Быстрая диагностика Vehicle Weapon System по видимому симптому"
product: weapon
doc_section: troubleshooting
---

<p class="doc-breadcrumb">Помощь</p>

# Быстрая диагностика

| Симптом | Сначала проверьте |
| --- | --- |
| Runtime не готов | Связи Tank Variant/Armament, дубли ID, отсутствующие bindings и инициализацию профиля. |
| Башня не движется | Axis Group ID, yaw/pitch pivots, режим оси и порядок runtime-вызовов. |
| Прицел уходит после смены камеры | Активный aim source и `Aim Target Policy`. |
| Спаренное оружие смотрит отдельно | Обе установки должны ссылаться на одну Axis Group. |
| UI показывает старую точку | Порядок runtime update и чтение кэша после него. |
| Клиент видит другую позу | Репликацию оси, стабильные ID и одинаковую конфигурацию. |

## Если первой проверки недостаточно

1. Выполните `Validate Vehicle Weapon System Configuration`.
2. Исправьте первую ошибку, а не весь список одновременно.
3. Найдите точную ноду через поиск по плагину.
4. Сравните configured и ready counts после инициализации профиля.

[Открыть справочник Blueprint-нод]({{ '/docs/vehicle-weapon-blueprint-nodes.ru.html' | relative_url }}).

Если проверки выше не объясняют воспроизводимую проблему,
[создайте структурированный bug report](https://github.com/JustAndante/Tread_And_Traverse/issues/new?template=bug_report.yml).

<div class="page-nav" markdown="1">
[← Репликация]({{ '/docs/weapon-replication.ru.html' | relative_url }})
[Подробная интеграция →]({{ '/docs/vehicle-weapon-reference.ru.html' | relative_url }})
</div>

