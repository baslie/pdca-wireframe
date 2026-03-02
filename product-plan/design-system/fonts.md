# PDCA Consulting — Typography Configuration

## Шрифты

| Роль | Шрифт | Начертания | Применение |
|------|-------|------------|------------|
| Heading | Manrope | ExtraBold (800), Bold (700), SemiBold (600) | Заголовки всех уровней |
| Body | Manrope | Regular (400), Medium (500), Light (300) | Основной текст, описания |
| Mono | IBM Plex Mono | Regular (400), Medium (500) | Код, технические данные |

---

## Подключение Google Fonts

### HTML (добавить в `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@300;400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
```

### CSS (@import)

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@300;400;500;600;700;800&display=swap');
```

### Next.js (next/font)

```tsx
import { Manrope, IBM_Plex_Mono } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

// В layout.tsx
export default function RootLayout({ children }) {
  return (
    <html className={`${manrope.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

---

## Конфигурация Tailwind CSS v4

Добавьте в главный CSS-файл:

```css
@import "tailwindcss";

@theme {
  --font-sans: 'Manrope', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}
```

После этого в разметке:

```html
<!-- Manrope по умолчанию через font-sans -->
<body class="font-sans">

<!-- Явно моноширинный -->
<code class="font-mono">IBM Plex Mono</code>
```

---

## Рекомендации по использованию

### Заголовки

```html
<!-- H1: Manrope ExtraBold, 48-60px -->
<h1 class="font-extrabold text-5xl md:text-6xl leading-tight">
  Повышаем эффективность бизнеса
</h1>

<!-- H2: Manrope Bold, 30-36px -->
<h2 class="font-bold text-3xl md:text-4xl">
  Ключевые направления
</h2>

<!-- H3: Manrope SemiBold, 20-24px -->
<h3 class="font-semibold text-xl md:text-2xl">
  Название тренинга
</h3>
```

### Основной текст

```html
<!-- Параграф: Manrope Regular, 16px -->
<p class="text-base font-normal text-slate-600 leading-relaxed">
  Описание программы обучения...
</p>

<!-- Мелкий текст: Manrope Regular, 14px -->
<span class="text-sm text-slate-500">
  16 часов · Офлайн
</span>

<!-- Подзаголовок: Manrope Medium, 18px -->
<p class="text-lg font-medium text-slate-700">
  Мы помогаем компаниям трансформировать процессы
</p>
```

### Акцентные элементы

```html
<!-- Крупные цифры (блок «Почему мы»): Manrope ExtraBold -->
<span class="font-extrabold text-5xl text-primary">500+</span>
<span class="text-sm font-medium text-slate-500 uppercase tracking-wider">проектов</span>

<!-- Кнопки CTA: Manrope SemiBold -->
<button class="font-semibold text-base">Подобрать программу</button>

<!-- Теги/бейджи: Manrope SemiBold, uppercase -->
<span class="font-semibold text-xs uppercase tracking-wider text-primary">
  Бережливое производство
</span>
```

### Футер (гигантский текст-вотермарк)

```html
<!-- Manrope ExtraBold, 10-15vw, opacity 8% -->
<div class="font-extrabold text-[10vw] lg:text-[12vw] opacity-[0.08] text-white select-none">
  PDCA CONSULTING
</div>
```

---

## Важно

- **Кириллическая поддержка:** Manrope и IBM Plex Mono поддерживают кириллицу. Убедитесь, что при подключении через Google Fonts указан subset `cyrillic`.
- **`display: swap`:** Используйте `font-display: swap` для предотвращения FOIT (flash of invisible text).
- **Единый шрифт:** Manrope используется и для заголовков, и для основного текста. Различие создаётся через вес (light/regular для текста, bold/extrabold для заголовков).
