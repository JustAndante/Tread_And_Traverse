---
layout: default
lang: ru
page_kind: reference
title: "Track — Диагностика"
description: "Быстрая диагностика Track Spline Builder по видимому симптому"
product: track
doc_section: troubleshooting
---

<p class="doc-breadcrumb">Помощь</p>

# Быстрая диагностика

Начинайте с видимого симптома. Не меняйте несколько групп настроек одновременно.

| Симптом | Сначала проверьте |
| --- | --- |
| Контур не появился | `Target Spline`, `Source Mesh Component`, имена костей и `Validate Setup`. |
| Стороны идут в разные направления | `Reverse Track Direction`, ось вращения и compatibility sign matching. |
| Скорость не совпадает с машиной | Источник вращения, соответствующее Chaos wheel и его реальный radius. |
| Гусеница реагирует на корпус | `World Static Only` и collision profile поверхности. |
| Звенья переворачиваются | Локальные оси/pivot меша и `Orientation Mode`. |
| Расстояние между звеньями гуляет | Фиксированное число, замкнутый сплайн и стабильную topology. |
| Дрожание в покое | Стабильность ground hit и конкурирующие поверхности. |

## Если первой проверки недостаточно

1. Верните последнюю рабочую группу настроек.
2. Воспроизведите проблему на одной стороне машины.
3. Проверьте точное поле через поиск по плагину.
4. Только затем включайте editor-only диагностику.

[Открыть полный справочник настроек]({{ '/docs/track-settings-reference.ru.html' | relative_url }}).

<div class="page-nav" markdown="1">
[← Качество и сеть]({{ '/docs/track-quality-network.ru.html' | relative_url }})
[Все настройки →]({{ '/docs/track-settings-reference.ru.html' | relative_url }})
</div>

