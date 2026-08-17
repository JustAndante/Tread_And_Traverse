---
layout: default
title: "Track Spline Builder — Быстрая настройка"
description: "Минимальная рабочая настройка Track Spline Builder"
lang: ru
page_kind: guide
---

<div class="doc-breadcrumbs">
  <a href="{{ '/ru/' | relative_url }}">← Документация</a>
  <a class="is-active" href="{{ '/docs/track-physics-solver.ru.html' | relative_url }}">Инструкция по гусеницам</a>
  <a href="{{ '/docs/track-physics-solver.en.html' | relative_url }}">English</a>
</div>

# Track Spline Builder — быстрая настройка

Результат: по одной деформируемой визуальной гусенице на каждую сторону машины.

## 1. Добавьте компоненты

Для каждой стороны добавьте:

- один Spline Component;
- один `Track Spline Builder`;
- один `Track Physics Solver`.

## 2. Настройте Track Spline Builder

Укажите:

1. `Source Spline` — сплайн этой стороны.
2. `Track Link Mesh` — меш звена.
3. `Fixed Link Count` или `Link Spacing`.
4. `Orientation Mode = Planar Track`.
5. При необходимости включите `Build Connector Layer` и задайте `Connector Mesh`.
6. Нажмите `Rebuild Track`.

## 3. Настройте Track Physics Solver

Укажите:

1. `Target Spline` — тот же сплайн, что используется Builder.
2. `Source Mesh Component` — Skeletal Mesh машины.
3. Заполните именование опорных катков: prefix, suffix, первый индекс, количество и радиус.
4. Если есть поддерживающие ролики, включите их генерацию и заполните именование, количество и контактный радиус.
5. Задайте кости переднего и заднего крайних колёс и их радиусы огибания.
6. Оставьте `Surface Query Mode = World Static Only`, если проекту не нужен другой запрос.
7. Нажмите `Generate Bone Rig Now`.

Сгенерированные контролы должны идти в реальном порядке колёс по контуру гусеницы.

## 4. Подключите результат

В Solver:

1. В `Track Builder` укажите соответствующий Builder.
2. Включите `Update Track Builder After Solve`.
3. Включите `Rebuild On Begin Play`, `Regenerate Controls On BeginPlay` и `Solve Every Tick`.

Для постоянного качества используйте `Manual / Fallback Quality`. Другой `Quality Selection Policy` нужен только для локального, дистанционного или внешнего выбора качества.

## 5. Проверьте

Нажмите `Validate Setup`, затем запустите PIE и проверьте:

- статус перешёл в `Ready`;
- контур замкнут, число звеньев не меняется;
- гусеница следует за подвеской и поверхностью, но не реагирует на корпус машины;
- обе стороны движутся в правильную сторону и с ожидаемой скоростью.

## Если не работает

- Не найдены катки: проверьте имена костей, suffix, первый индекс и количество.
- Неверный порядок контура: пересоздайте Bone Rig и проверьте переднее/заднее колесо.
- Гусеница цепляет корпус: верните `World Static Only`.
- Нет визуальных звеньев: проверьте `Source Spline`, `Track Link Mesh` и `Track Builder`.
- Неверная скорость: проверьте выбранное ведущее колесо и источник радиуса Chaos Wheel.

## Дополнительно

[Справочник Blueprint-нод Track Spline Builder]({{ '/docs/track-blueprint-nodes.ru.html' | relative_url }}) нужен только для сценариев, которых нет в обычной настройке через Details.
