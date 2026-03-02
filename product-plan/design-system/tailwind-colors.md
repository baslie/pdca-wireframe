# PDCA Consulting — Tailwind CSS Color Configuration

## Обзор

Проект использует **Tailwind CSS v4**. Конфигурация цветов выполняется через CSS, без `tailwind.config.js`.

---

## Фирменные цвета

| Роль | HEX | Tailwind-класс | Применение |
|------|-----|----------------|------------|
| Primary (coral-red) | `#e84249` | `text-[#e84249]`, `bg-[#e84249]` | CTA-кнопки, акценты, активные состояния, иконки |
| Secondary (dark-blue) | `#003154` | `text-[#003154]`, `bg-[#003154]` | Тёмные секции, футер, контрастные блоки |
| Black | `#000000` | `text-black`, `bg-black` | Основной текст, заголовки |
| White | `#ffffff` | `text-white`, `bg-white` | Фоны страниц, текст на тёмных блоках |
| Neutral | Slate | `text-slate-*`, `bg-slate-*` | Вспомогательный текст, фоны, разделители |

---

## Конфигурация через CSS (Tailwind v4)

Добавьте в главный CSS-файл вашего проекта (например, `app.css` или `globals.css`):

```css
@import "tailwindcss";

@theme {
  /* Brand colors */
  --color-primary: #e84249;
  --color-primary-hover: #d63a40;
  --color-primary-light: #fce8e9;
  --color-primary-dark: #b8343a;

  --color-secondary: #003154;
  --color-secondary-hover: #002844;
  --color-secondary-light: #e6edf2;
  --color-secondary-dark: #001f35;
}
```

После этого в разметке можно использовать:

```html
<button class="bg-primary text-white hover:bg-primary-hover">
  Подобрать программу
</button>

<footer class="bg-secondary text-white">
  ...
</footer>

<span class="text-primary-dark">Акцентный текст</span>
```

---

## Нейтральная палитра (Slate)

Используйте встроенные классы Tailwind для нейтральных цветов:

| Tailwind-класс | HEX | Применение |
|----------------|-----|------------|
| `slate-50` | `#f8fafc` | Светлые фоны секций |
| `slate-100` | `#f1f5f9` | Фон карточек |
| `slate-200` | `#e2e8f0` | Разделители, бордеры |
| `slate-300` | `#cbd5e1` | Неактивные элементы |
| `slate-400` | `#94a3b8` | Плейсхолдеры |
| `slate-500` | `#64748b` | Вспомогательный текст |
| `slate-600` | `#475569` | Подзаголовки |
| `slate-700` | `#334155` | Вторичный текст |
| `slate-800` | `#1e293b` | Тёмный текст |
| `slate-900` | `#0f172a` | Почти чёрный |
| `slate-950` | `#020617` | Максимальный контраст |

---

## Примеры использования

### Hero-экран
```html
<section class="bg-white">
  <h1 class="text-black font-extrabold">Заголовок</h1>
  <p class="text-slate-600">Подзаголовок</p>
  <button class="bg-primary text-white rounded-lg px-8 py-3 hover:bg-primary-hover">
    Подобрать программу
  </button>
  <button class="border-2 border-secondary text-secondary rounded-lg px-8 py-3 hover:bg-secondary hover:text-white">
    Скачать каталог
  </button>
</section>
```

### Карточка тренинга
```html
<div class="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
  <span class="text-primary text-sm font-semibold uppercase">Категория</span>
  <h3 class="text-black font-bold text-xl mt-2">Название тренинга</h3>
  <p class="text-slate-600 mt-3">Краткое описание программы...</p>
  <div class="flex items-center gap-2 mt-4 text-slate-500 text-sm">
    <span>16 часов</span>
    <span>·</span>
    <span>Офлайн</span>
  </div>
</div>
```

### Блок доверия (тёмный фон)
```html
<section class="bg-secondary text-white py-20">
  <div class="text-6xl font-extrabold text-primary">500+</div>
  <p class="text-slate-300 mt-2">реализованных проектов</p>
</section>
```

### Активный пункт навигации
```html
<a class="text-primary border-b-2 border-primary font-medium">Тренинги</a>
<a class="text-slate-700 hover:text-primary transition-colors">О нас</a>
```

---

## Важно

- **Не создавайте `tailwind.config.js`** — Tailwind CSS v4 не использует конфигурационный файл JavaScript.
- **Используйте `@theme` директиву** для кастомных цветов вместо конфигурации.
- **Используйте встроенные цвета Tailwind** (slate) для нейтральной палитры — не определяйте их заново.
- **Arbitrary values** (`text-[#e84249]`) работают, но предпочтительнее использовать семантические имена через `@theme`.
