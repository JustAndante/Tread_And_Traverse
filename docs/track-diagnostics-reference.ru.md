---
layout: default
lang: ru
page_kind: reference
title: "Track Spline Builder — Диагностика"
description: "Editor-only компонент Track Physics Diagnostics"
product: track
doc_section: diagnostics
---

# Track Physics Diagnostics

Это отдельный editor-only компонент для направленного поиска проблем Solver.
Не добавляйте его в production-класс машины: в cooked build компонент не входит.

## Быстрое использование

1. Временно добавьте `Track Physics Diagnostics` на Actor машины.
2. Выберите нужный `Solver Component`.
3. Включите `Draw Debug`.
4. Для редкой волны или скачка включите `Record Detailed Diagnostics`.
5. Воспроизведите проблему и скопируйте `Copy-Ready Diagnostic Log`.
6. После проверки удалите компонент.

`Apply Track Diagnostic Settings` нужен, когда настройки менялись во время PIE
и их требуется немедленно передать выбранному Solver.

## Setup и запись

| Параметр | По умолчанию | Назначение |
| --- | ---: | --- |
| `Solver Component` | None | Solver на том же Actor. Можно оставить пустым, только если Solver ровно один. |
| `Record Detailed Diagnostics` | Off | Записывает дорогую историю точек и причинные данные для краткой диагностической сессии. |
| `Draw Point Causal Map` | On | Рисует сохранённую цепочку причин после срабатывания триггера. Требует записи и `Draw Debug`. |
| `Point Map Trigger Distance` | 8 cm | Смещение точки, после которого фиксируется диагностическое событие. |
| `Frames Before Trigger` | 6 | Число сохранённых кадров до события. |
| `Frames After Trigger` | 4 | Число сохранённых кадров после события. |

## Отрисовка

| Параметр | По умолчанию | Назначение |
| --- | ---: | --- |
| `Draw Debug` | Off | Главный переключатель editor/PIE-отрисовки. |
| `Draw Debug Traces` | On | Traces и принятые/отклонённые попадания поверхности. |
| `Draw Debug Points` | On | Исходные, целевые, контактные и рассчитанные точки. |
| `Draw Debug Solved Spline` | On | Финальный рассчитанный контур. |
| `Draw Debug Wheel Guides` | On | Окружности колёс и ограничения guide-точек. |
| `Draw Interval` (Advanced) | 0.1 s | Частота обновления рисунка; не меняет частоту Solver. |
| `Point Size` (Advanced) | 8 cm | Размер маркеров точек. |
| `Line Thickness` (Advanced) | 1.5 | Толщина линий. |

Цвета `Anchor`, `Solved`, `Trace Hit`, `Trace Miss`, `Wheel Guide` и
`Wheel Limit` меняют только читаемость рисунка и не влияют на расчёт.

## Какой лог прикладывать

Для обычной ошибки достаточно одной строки `Copy-Ready Diagnostic Log` сразу
после воспроизведения. Для кратковременной волны включите запись заранее и
копируйте лог после фиксации trigger: буфер уже содержит кадры до и после
события, поэтому ловить точный кадр вручную не нужно.

Не измеряйте производительность с включёнными `Draw Debug` или
`Record Detailed Diagnostics`.

<div class="page-nav" markdown="1">
[← Исправление проблем]({{ '/docs/track-troubleshooting.ru.html' | relative_url }})
[Blueprint-ноды →]({{ '/docs/track-blueprint-nodes.ru.html' | relative_url }})
</div>
