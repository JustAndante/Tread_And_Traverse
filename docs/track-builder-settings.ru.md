---
layout: default
lang: ru
page_kind: reference
title: "Track Spline Builder — Настройки Builder"
description: "Поля визуальных звеньев, коннекторов и движения гусеницы"
product: track
doc_section: settings
---

# Настройки Track Spline Builder

Builder не рассчитывает физическую форму. Он читает готовый сплайн, размещает
по нему постоянное число звеньев и коннекторов и сдвигает их по контуру.

<figure class="doc-figure">
  <img src="{{ '/assets/images/track/links-motion.svg' | relative_url }}" alt="Постоянное число звеньев и движение по рассчитанному сплайну">
  <figcaption>Форма принадлежит Solver, а размещение и движение мешей — Builder.</figcaption>
</figure>

## Обязательная настройка

| Параметр | Назначение |
| --- | --- |
| `Source Spline` | Сплайн рассчитанного контура этой стороны. |
| `Track Output` | ISM/HISM-компонент, в который записываются основные звенья. |
| `Track Link Mesh` | Меш одного башмака или звена. |
| `Build Links On BeginPlay` | Строит визуальные звенья при запуске. При связке с Solver оставьте включённым `Solve Track On BeginPlay` у Solver; повторное обновление выполняется через `Update Track Builder After Solve`. |
| `Auto Create Instanced Mesh` | Создаёт выходной ISM автоматически, если `Track Output` не выбран. |

`Source Spline`, `Track Output` и источник вращения выбираются одним обычным
селектором. Runtime override задаётся Blueprint-нодами и не хранится как ещё
одно конкурирующее поле в Details.

## Количество и шаг звеньев

Эти поля находятся внутри `Settings`.

| Параметр | По умолчанию | Назначение |
| --- | ---: | --- |
| `Use Fixed Link Count` | Off | Сохраняет заданное число звеньев при изменении длины сплайна. Включите для танковой гусеницы. |
| `Link Count` | 96 | Число основных звеньев в замкнутом контуре. |
| `Target Link Spacing` | 28 cm | Используется вместо фиксированного количества, когда `Use Fixed Link Count` выключен. |
| `Distribute Evenly Around Spline` | On | Равномерно распределяет накопленную ошибку шага по всему замкнутому контуру. |
| `Track Travel Offset` | 0 cm | Начальная фаза звеньев вдоль сплайна. |
| `Open Spline Start Padding` (Advanced) | 0 cm | Отступ только для начала открытого сплайна. Для замкнутой гусеницы не применяется. |
| `Open Spline End Padding` (Advanced) | 0 cm | Отступ только для конца открытого сплайна. Для замкнутой гусеницы не применяется. |
| `Max Instances` (Advanced) | 512 | Предохранитель от случайного создания чрезмерного числа экземпляров. UI допускает обычную тонкую настройку, а runtime дополнительно ограничивает только аварийно большие значения. |
| `Skip Links At Closed-Loop Seam` (Advanced) | Off | Не создаёт звенья рядом со швом замкнутого контура. |
| `Closed-Loop Seam Padding` (Advanced) | 1 cm | Размер пропуска у шва, если предыдущий параметр включён. |

Число звеньев не меняется динамически при включённом `Use Fixed Link Count`.
Меняется только фактический шаг, потому что та же цепь распределяется по новой
длине рассчитанного контура.

## Ориентация и трансформ

| Параметр | Назначение |
| --- | --- |
| `Local Offset`, `Rotation Offset`, `Instance Scale` | Общая поправка позиции, вращения и масштаба меша. |
| `Inherit Spline Scale` (Advanced) | Передаёт масштаб сплайна экземплярам. Обычно выключен для жёстких звеньев. |
| `Orientation Mode` | `Planar Track` удерживает звенья в плоскости гусеницы; `Spline Rotation` использует полное вращение сплайна. |
| `Mesh Forward Axis`, `Mesh Normal Axis` | Оси исходного меша. Исправляйте их вместо случайных поворотов отдельных звеньев. |
| `Face Spline Center` | Выбирает сторону нормали относительно центра замкнутого контура. |
| `Flip Normal` | Единственный явный разворот нормали. |
| `Fallback Normal`, `Planar Tangent Sample Distance`, `Planar Normal Smoothing` (Advanced) | Стабилизация ориентации на коротких сегментах и резких переходах. |

## Коннекторы

| Параметр | Назначение |
| --- | --- |
| `Build Connector Layer` | Включает второй равномерно сопряжённый слой экземпляров. |
| `Connector Output`, `Connector Mesh` | Выходной компонент и меш коннектора. |
| `Connector Distance Offset` | Фаза коннектора относительно основного звена. Обычно это половина фактического шага. |
| `Connector Local Offset`, `Connector Rotation Offset`, `Connector Scale` | Поправки трансформа коннектора. |
| `Connector Mesh Forward Axis`, `Connector Mesh Normal Axis`, `Connector Flip Normal` (Advanced) | Ориентация отдельного меша коннектора. |
| `Skip Connector At Spline Seam`, `Connector Seam Padding` (Advanced) | Управление коннектором около шва замкнутого контура. |

Builder создаёт одинаковое количество основных и парных элементов. Коннектор
должен использовать тот же решённый шаг, а не отдельную динамическую сетку.

## Движение

| Параметр | Назначение |
| --- | --- |
| `Animate From Track Speed` | Сдвигает фазу по явной линейной скорости `Track Speed`. |
| `Track Speed` | Линейная скорость в cm/s для ручного или Blueprint-управления. |
| `Drive Offset From Wheel Rotation` | Получает пройденное расстояние из вращения колеса. Не включайте одновременно с ручной анимацией скорости. |
| `Rotation Source` | `Skeletal Bone` читает угол кости; `Chaos Wheel` читает угол колеса Chaos. |
| `Drive Source Component` | Единственный компонент-источник вращения. |
| `Drive Wheel Name`, `Drive Rotation Axis` | Кость и её ось для `Skeletal Bone`. |
| `Chaos Wheel Index` | Индекс колеса для `Chaos Wheel`. Runtime-радиус берётся из этого Chaos wheel независимо от источника угла. |
| `Use Skeletal Direction For Chaos` (Advanced) | Совместимость знака Chaos с направлением одноимённой кости. |
| `Reverse Track Direction` | Единственный обычный ручной разворот направления движения. |
| `Wrap Distance Offset` (Advanced) | Нормализует накопленную фазу внутри длины контура; не меняет скорость. |

Для проверки скорости проедьте по прямой без пробуксовки: пройденная фаза
должна соответствовать углу колеса, умноженному на runtime-радиус Chaos wheel.

## Автоматически создаваемые компоненты

`Auto-Created Track ISM Name`, `Auto-Created Connector ISM Name` и
`Auto Create ISM In Blueprint Template` нужны только при автоматическом
создании выходных компонентов. Если ISM/HISM назначены явно, оставьте эти
Advanced-поля без изменений.

<div class="page-nav" markdown="1">
[← Быстрый старт]({{ '/docs/track-physics-solver.ru.html' | relative_url }})
[Настройки Solver →]({{ '/docs/track-settings-reference.ru.html' | relative_url }})
</div>
