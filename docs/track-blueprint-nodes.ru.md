---
layout: default
title: "Blueprint-ноды гусеницы — Русский"
description: "Справочник Blueprint-нод Track Spline Builder и Track Physics Solver"
lang: ru
page_kind: reference
---

<div class="doc-breadcrumbs">
  <a href="{{ '/ru/' | relative_url }}">← Русская документация</a>
  <a href="{{ '/docs/track-physics-solver.ru.html' | relative_url }}">Параметры</a>
  <a class="is-active" href="{{ '/docs/track-blueprint-nodes.ru.html' | relative_url }}">Blueprint-ноды плагина</a>
  <a href="{{ '/docs/blueprint-authoring.ru.html' | relative_url }}">Blueprint проекта</a>
  <a href="{{ '/docs/track-cpp-api.ru.html' | relative_url }}">C++ API</a>
  <a href="{{ '/docs/track-blueprint-nodes.en.html' | relative_url }}">English</a>
</div>

# Blueprint-ноды гусеницы

Этот справочник описывает публичные Blueprint-ноды компонентов `Track Spline Builder` и `Track Physics Solver`. Служебные функции редактора, старый reference-loop workflow и примерный пресет конкретной машины намеренно скрыты из палитры и здесь не описываются.

> Визуальный блок в каждой строке ниже строится по актуальной публичной `UFUNCTION`-сигнатуре: показаны реальное имя ноды, все exec/data-пины и параметры `AdvancedDisplay` в развёрнутом виде.

<section class="bp-showcase" aria-label="Пример Blueprint-графа гусеницы">
  <div class="bp-showcase__copy">
    <span class="bp-showcase__eyebrow">БЫСТРЫЙ МАРШРУТ</span>
    <strong>Три знакомые ноды вместо стены текста</strong>
    <p>Сначала создайте точки по колёсам, затем перестройте визуальные звенья. Скорость задавайте отдельно, только если движение трака управляется вручную.</p>
    <span class="bp-showcase__note">Пины строятся по актуальным UFUNCTION-сигнатурам; это стилизованная схема, а не снимок редактора.</span>
  </div>
  <div class="bp-graph" role="img" aria-label="Последовательность Generate Control Points From Wheels, Rebuild Track и Set Track Speed">
    <div class="bp-graph__flow">
      <div class="bp-node">
        <span class="bp-node__phase">01 · SETUP</span>
        <div class="bp-node__header">Generate Control Points From Wheels</div>
        <div class="bp-node__ports">
          <div class="bp-node__port-row"><span class="bp-port bp-port--exec"><i class="bp-port__dot"></i>Exec</span><span class="bp-port bp-port--exec bp-port--out"><i class="bp-port__dot"></i>Then</span></div>
          <div class="bp-node__port-row"><span class="bp-port"><i class="bp-port__dot"></i>Target</span></div>
        </div>
      </div>
      <span class="bp-wire" aria-hidden="true"></span>
      <div class="bp-node">
        <span class="bp-node__phase">02 · AFTER CHANGES</span>
        <div class="bp-node__header">Rebuild Track</div>
        <div class="bp-node__ports">
          <div class="bp-node__port-row"><span class="bp-port bp-port--exec"><i class="bp-port__dot"></i>Exec</span><span class="bp-port bp-port--exec bp-port--out"><i class="bp-port__dot"></i>Then</span></div>
          <div class="bp-node__port-row"><span class="bp-port"><i class="bp-port__dot"></i>Target</span><span class="bp-port bp-port--number bp-port--out"><i class="bp-port__dot"></i>Link Count</span></div>
        </div>
      </div>
      <span class="bp-wire" aria-hidden="true"></span>
      <div class="bp-node">
        <span class="bp-node__phase">03 · OPTIONAL RUNTIME</span>
        <div class="bp-node__header">Set Track Speed</div>
        <div class="bp-node__ports">
          <div class="bp-node__port-row"><span class="bp-port bp-port--exec"><i class="bp-port__dot"></i>Exec</span><span class="bp-port bp-port--exec bp-port--out"><i class="bp-port__dot"></i>Then</span></div>
          <div class="bp-node__port-row"><span class="bp-port bp-port--number"><i class="bp-port__dot"></i>New Track Speed</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

## Что обычно нужно в графе

В штатной конфигурации физический solver и builder обновляются автоматически. Обычный Blueprint чаще всего использует только:

1. `Generate Control Points From Wheels` — один раз после настройки костей и радиусов;
2. `Rebuild Track` — после изменения сетки, количества звеньев или топологии;
3. `Set Track Speed` либо `Set Distance Offset` — если движение трака задаётся вручную.

При включённых `Update Every Tick` и связи solver с builder вызывать solve и обновление инстансов каждый кадр из Blueprint не требуется.

## Track Spline Builder — Core

| Нода | Когда использовать | Результат |
|---|---|---|
| `Rebuild Track` | После изменения сплайна, меша, количества звеньев, коннекторов или ориентации. | Полностью пересоздаёт инстансы и возвращает их количество. |
| `Update Track Offset` | Когда топология уже собрана, а нужно только прокрутить существующие звенья. | Обновляет трансформы без полного rebuild. |
| `Set Distance Offset` | Для прямого управления положением звеньев вдоль замкнутого контура. | Записывает offset; при `Update Now` сразу обновляет инстансы. |
| `Set Track Speed` | Для автоматической прокрутки при включённом `Update Every Tick`. | Меняет скорость движения звеньев по сплайну. |

## Track Spline Builder — Diagnostics и Advanced

| Нода | Назначение |
|---|---|
| `Get Expected Link Count` | Считает ожидаемое количество основных звеньев по текущему сплайну и настройкам, не перестраивая гусеницу. |
| `Clear Auto Created Instances` | Удаляет только автоматически созданные solver/builder компоненты инстансов. Используйте перед ручной заменой автоматически созданного слоя. |

## Stateless-ноды Track Spline Builder

Эти функции находятся в Blueprint Function Library. Они нужны, когда вы не хотите добавлять `Track Spline Builder` как компонент и передаёте все зависимости явно.

| Нода | Назначение |
|---|---|
| `Rebuild Track From Spline` | Полностью строит ISM-слой из переданных spline, mesh и build settings. |
| `Update Track Offset From Spline` | Обновляет только положение уже существующих инстансов. Количество звеньев не меняет. |
| `Calculate Track Link Count` | Возвращает расчётное количество звеньев без создания инстансов. |

Для обычной машины предпочтительнее компонентный API: он хранит настройки, кэш ориентации и scratch-массивы между кадрами.

## Track Physics Solver — Core

| Нода | Когда использовать | Результат |
|---|---|---|
| `Generate Control Points From Wheels` | После назначения скелетного меша, стороны, шаблонов костей и радиусов колёс. | Пересобирает контрольные точки по ходовой и обновляет setup-статус. |
| `Update Track Physics Spline` | Только для собственного расписания solve, когда автоматический Tick отключён. | Продвигает физическую модель на `Delta Time`, записывает solved loop в target spline и возвращает число точек. |

Не вызывайте `Update Track Physics Spline` параллельно с включённым `Update Every Tick`: это даст два solve за кадр.

## Track Physics Solver — Setup

| Нода | Назначение |
|---|---|
| `Apply Physics Preset` | Применяет выбранный `Physics Feel Preset` к рабочим параметрам solver. |
| `Auto Assign Components` | Ищет подходящие spline, source mesh и track builder у владельца компонента. После выполнения проверьте найденные ссылки. |
| `Validate Setup` | Проверяет зависимости, колёса, контрольные точки и основные ограничения; возвращает количество обнаруженных проблем. |

## Track Physics Solver — Advanced

| Нода | Назначение |
|---|---|
| `Rebuild Track Physics Spline` | Выполняет немедленный полный solve. `Snap` сбрасывает переход и сразу принимает новое положение. |
| `Reset Track Physics State` | Очищает накопленные позиции, скорости, контактную память и инерцию перед следующим solve. |
| `Append Control Points From Wheels` | Добавляет найденные точки ходовой к существующему массиву вместо его замены. Нужна только для составных нестандартных контуров. |

## Track Physics Solver — Diagnostics

| Нода | Назначение |
|---|---|
| `Get Solved Track Point Count` | Возвращает число точек последнего рассчитанного физического контура. Удобно для проверки успешного старта solver. |

## Типовые ошибки

- Не вызывайте `Rebuild Track` каждый кадр: для движения используйте offset-only update.
- Не смешивайте автоматический Tick и ручной `Update Track Physics Spline`.
- После изменения количества контрольных точек сбросьте физическое состояние либо выполните rebuild со `Snap`.
- Builder должен читать тот же target spline, в который пишет соответствующий solver.



