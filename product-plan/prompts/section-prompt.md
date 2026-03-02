# Section Implementation Prompt (Template)

Используйте этот шаблон для посекционной реализации. Подставьте переменные и передайте промпт coding-агенту вместе с файлами указанной секции.

## Переменные

| Переменная | Описание | Пример |
|------------|----------|--------|
| `SECTION_NAME` | Название секции на русском | Главная страница |
| `SECTION_ID` | Slug секции (латиница) | glavnaya-stranitsa |
| `NN` | Номер этапа (2 цифры) | 02 |

## Файлы для передачи агенту

При каждом запуске передавайте:

1. Этот промпт (с подставленными переменными)
2. `product-plan/product-overview.md` — всегда, для контекста
3. `product-plan/design-system/tokens.css` — дизайн-токены
4. `product-plan/design-system/tailwind-colors.md` — цвета Tailwind
5. `product-plan/design-system/fonts.md` — типографика
6. `product-plan/instructions/incremental/NN-SECTION_ID.md` — инструкция этапа
7. `product-plan/data-shapes/SECTION_ID.ts` — TypeScript-интерфейсы секции
8. `product-plan/sections/SECTION_ID/` — компоненты секции (если есть)

---

## Промпт

Ты — опытный фронтенд-разработчик. Реализуй секцию **«SECTION_NAME»** корпоративного сайта PDCA Consulting.

### Контекст продукта

Это корпоративный сайт консалтинговой компании PDCA Consulting, специализирующейся на бережливом производстве, производственной безопасности и повышении эффективности бизнеса. Полное описание продукта — в файле `product-overview.md`.

### Этап реализации

Текущий этап: **NN — SECTION_NAME** (`SECTION_ID`)

Детальные инструкции для этого этапа: `instructions/incremental/NN-SECTION_ID.md`

### Входные данные

- **TypeScript-интерфейсы**: `data-shapes/SECTION_ID.ts` — контракт данных, которые ожидает UI
- **Компоненты-референс**: `sections/SECTION_ID/` — готовые React-компоненты с вёрсткой (используй как образец стиля и структуры)
- **Дизайн-токены**: `design-system/tokens.css`, `design-system/tailwind-colors.md`, `design-system/fonts.md`

### Технические требования

- **Tailwind CSS v4** — не создавай `tailwind.config.js`
- **Шрифт Manrope** — heading и body, подключение через Google Fonts (subset `cyrillic`)
- **IBM Plex Mono** — для моноширинного текста
- **Фирменные цвета**: primary `#e84249`, secondary `#003154`, neutral slate
- **Адаптивность**: mobile (< 768px), tablet (768–1023px), desktop (1024px+)
- **Props-based**: все данные через props, callbacks для действий
- **TypeScript**: строгая типизация по интерфейсам из `data-shapes/`

### Задача

1. Прочитай инструкцию этапа `NN-SECTION_ID.md`
2. Изучи TypeScript-интерфейсы из `data-shapes/SECTION_ID.ts`
3. Используй компоненты из `sections/SECTION_ID/` как референс стиля
4. Реализуй секцию в проекте, интегрируя с существующим shell и роутингом
5. Создай sample-данные для тестирования (на основе интерфейсов)

### Проверка результата

- [ ] Компонент рендерится без ошибок в консоли
- [ ] Адаптивная вёрстка: mobile / tablet / desktop
- [ ] Интерактивные элементы работают (если есть: фильтры, аккордеоны, слайдеры, формы)
- [ ] Props-based: нет hardcoded данных в компоненте
- [ ] TypeScript: нет ошибок типизации

---

## Порядок секций

| NN | SECTION_ID | SECTION_NAME |
|----|------------|--------------|
| 01 | shell | Shell (хедер, футер, навигация) |
| 02 | glavnaya-stranitsa | Главная страница |
| 03 | katalog-treningov | Каталог тренингов |
| 04 | stranitsa-treninga | Страница тренинга |
| 05 | korporativnye-programmy | Корпоративные программы и консалтинг |
| 06 | klienty-i-keysy | Клиенты и кейсы |
| 07 | komanda-o-nas-kontakty | Команда, О нас и Контакты |
