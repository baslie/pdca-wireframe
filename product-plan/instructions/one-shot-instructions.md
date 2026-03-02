# PDCA Consulting — Complete Implementation Instructions

---

## About This Handoff

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Product requirements and user flow specifications
- Design system tokens (colors, typography)
- Sample data showing the shape of data components expect
- Test specs focused on user-facing behavior

**Your job:**
- Integrate these components into your application
- Wire up callback props to your routing and business logic
- Replace sample data with real data from your backend
- Implement loading, error, and empty states

The components are props-based — they accept data and fire callbacks. How you architect the backend, data layer, and business logic is up to you.

---

## Testing

Each section includes a `tests.md` file with UI behavior test specs. You can find these at:

- `product-plan/sections/katalog-treningov/tests.md`
- `product-plan/sections/stranitsa-treninga/tests.md`
- `product-plan/sections/korporativnye-programmy-i-konsalting/tests.md`
- `product-plan/sections/klienty-i-keysy/tests.md`
- `product-plan/sections/komanda-o-nas-i-kontakty/tests.md`

These specs describe expected user-facing behavior and can be used to write integration or end-to-end tests.

---

## Product Overview

### Описание продукта

Корпоративный сайт консалтинговой компании PDCA Consulting, специализирующейся на бережливом производстве, производственной безопасности и повышении эффективности бизнеса. Сайт выполняет роль B2B-воронки: от позиционирования и каталога программ до захвата заявок и демонстрации экспертизы.

Ключевые задачи сайта:
- Чёткое позиционирование компании с первого экрана (кто, для кого, чем отличается)
- Сегментация аудитории по отраслям (промышленность, логистика, ритейл/сервис)
- Удобный каталог тренингов с фильтрацией по направлениям
- Системная подача доверия: кейсы с цифрами, профили экспертов, логотипы клиентов
- Эффективная воронка конверсии: боль → решение → формат → кейсы → заявка

### Планируемые секции

1. **Главная страница** — Лендинг с Hero-экраном, сегментацией аудитории, ключевыми направлениями, блоком доверия, слайдером кейсов, процессом работы и CTA-формой захвата заявок.

2. **Каталог тренингов** — Централизованный каталог образовательных программ с фильтрацией по направлениям (бережливое производство, безопасность, soft skills, продажи) и карточками с ключевой информацией.

3. **Страница тренинга** — Шаблонный landing page для отдельного тренинга: обложка с оффером, блоки «для кого», результаты, программа по модулям, тренер, стоимость и форма заявки.

4. **Корпоративные программы и консалтинг** — Страница комплексных программ с дорожными картами внедрения (3–12 месяцев), описанием методологии, кейсами масштабных проектов и CTA на консультацию.

5. **Клиенты и кейсы** — Портфолио реализованных проектов с фильтрацией по отраслям, детальными карточками кейсов (задача → решение → результат в цифрах), отзывами и логотипами клиентов.

6. **Команда, О нас и Контакты** — Профили тренеров-консультантов с регалиями и специализациями, страница доверия с историей компании и сертификатами, контактная страница с формой обратной связи и реквизитами.

### Сущности продукта (Entities)

| Сущность | Описание |
|----------|----------|
| **Training** | Образовательная программа (тренинг) — основная единица каталога. Содержит название, описание, целевую аудиторию, результаты, программу по модулям, формат проведения и стоимость. |
| **Category** | Направление тренингов (бережливое производство, безопасность, soft skills, продажи и переговоры, управление и лидерство). Используется для фильтрации каталога. |
| **Trainer** | Тренер-консультант компании. Имеет специализацию, регалии, опыт, список проведённых проектов и привязку к тренингам. |
| **Client** | Компания-клиент. Представлена логотипом, названием и отраслью. Используется в блоке клиентов и привязывается к кейсам. |
| **CaseStudy** | Кейс реализованного проекта. Описывает исходную задачу, применённое решение, измеримый результат. Связан с конкретным клиентом и направлением. |
| **Testimonial** | Отзыв от клиента — текст или скан на официальном бланке. Привязан к конкретному кейсу или тренингу. |
| **CorporateProgram** | Комплексная корпоративная программа длительностью 3–12 месяцев с дорожной картой, контрольными точками и описанием этапов внедрения. |
| **LeadRequest** | Заявка от посетителя сайта. Содержит контактные данные, интересующее направление и источник (с какой страницы/формы пришла). |
| **IndustrySegment** | Отраслевой сегмент (промышленность, логистика, ритейл, сервис, фарма, металлургия). Используется для сегментации аудитории и фильтрации кейсов. |

#### Связи между сущностями

- Training belongs to Category
- Training has many Trainer (тренинг могут вести несколько тренеров)
- Trainer has many Training
- CaseStudy belongs to Client
- CaseStudy belongs to IndustrySegment
- CaseStudy has many Testimonial
- Client belongs to IndustrySegment
- CorporateProgram has many Training (включает несколько тренингов)
- CorporateProgram belongs to Client
- LeadRequest belongs to Training (опционально — если заявка с конкретного тренинга)

### Дизайн-система

#### Цвета

| Роль | Цвет | HEX | Применение |
|------|-------|-----|------------|
| Primary | Coral-red | `#e84249` | Акценты, CTA-кнопки, активные элементы, иконки |
| Secondary | Dark-blue | `#003154` | Тёмные фоновые блоки, футер, контрастные секции |
| Neutral | Slate | Tailwind slate palette | Текст, фоны, разделители |
| Black | Black | `#000000` | Основной текст |
| White | White | `#ffffff` | Фоны, текст на тёмных блоках |

#### Типографика

| Роль | Шрифт | Применение |
|------|-------|------------|
| Heading | Manrope | Заголовки всех уровней (ExtraBold, Bold) |
| Body | Manrope | Основной текст (Regular, Medium, Light) |
| Mono | IBM Plex Mono | Код, технические данные |

#### Визуальный стиль

- Строгий геометрический стиль: минимальные скругления, чёткие линии
- Фирменная графика: переплетённые прямоугольники, диагональные красные линии
- Ч/б фото с фирменными красными акцентами
- Белый фон основных секций, тёмно-синий (#003154) для контрастных блоков

### Последовательность реализации (Milestones)

| # | Milestone | Описание | Зависимости |
|---|-----------|----------|-------------|
| 1 | **Shell** | Sticky-хедер с навигацией, mega-footer на тёмно-синем фоне, мобильное меню | — |
| 2 | **Главная страница** | Hero, сегментация, направления, доверие, кейсы, тренеры, процесс, FAQ, CTA | Shell |
| 3 | **Каталог тренингов** | Каталог с табами категорий, карточки тренингов, CTA | Shell |
| 4 | **Страница тренинга** | Landing page тренинга: аудитория, результаты, программа, тренер, цена, форма | Shell, Каталог |
| 5 | **Корпоративные программы** | Методология, программы с дорожными картами, кейсы, преимущества, CTA | Shell |
| 6 | **Клиенты и кейсы** | Портфолио с фильтрацией, карточки кейсов, детальная страница кейса, отзывы | Shell |
| 7 | **Команда, О нас и Контакты** | Профили тренеров, история компании, таймлайн, сертификаты, контактная форма | Shell |

---

## Milestone 1: Application Shell

### Overview

Set up the design system tokens and implement the application shell: a sticky header with horizontal navigation and a mega footer on a dark blue background. The shell wraps all page content and provides persistent navigation across the site.

### Design System

#### Colors

| Role | HEX | Usage |
|------|-----|-------|
| Primary (coral-red) | `#e84249` | CTA buttons, accents, active states, icons, hover effects |
| Primary hover | `#d63a41` | Button hover state |
| Secondary (dark-blue) | `#003154` | Footer background, dark contrast blocks, secondary headings |
| Black | `#000000` | Primary text |
| White | `#ffffff` | Page backgrounds, text on dark blocks |
| Neutral | Tailwind `slate` palette | Borders, dividers, secondary text, subtle backgrounds |

#### Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Heading | Manrope | ExtraBold (800), Bold (700) | All headings, hero titles, section headers |
| Body | Manrope | Regular (400), Medium (500), Semibold (600) | Body text, labels, navigation items |
| Mono | IBM Plex Mono | Regular (400) | Code snippets, technical data |

Load fonts from Google Fonts:
```
Manrope:wght@300;400;500;600;700;800
IBM+Plex+Mono:wght@400;500
```

#### Tailwind CSS v4 Configuration

Add to your main CSS file (e.g. `globals.css`):

```css
@import "tailwindcss";

@theme {
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

**Important:** Tailwind CSS v4 does not use `tailwind.config.js`. Do not create one.

#### CSS Custom Properties

Reference `design-system/tokens.css` for the full set of design tokens including spacing, shadows, transitions, and border radius values.

### Components

#### `AppShell.tsx`

The root layout wrapper. Renders the sticky header, main content area, and mega footer.

**Props:**

```typescript
interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

interface FooterLink {
  label: string
  href: string
}

interface AppShellProps {
  children: React.ReactNode
  navigationItems: NavItem[]
  phone?: string
  email?: string
  address?: string
  footerDirections?: FooterLink[]
  footerCompanyLinks?: FooterLink[]
  onNavigate?: (href: string) => void
  onRequestCall?: () => void
}
```

**Navigation items to configure:**

| Label | Target Route |
|-------|-------------|
| Тренинги | `/trainings` (Каталог тренингов) |
| Корпоративные программы | `/corporate` (Корпоративные программы и консалтинг) |
| Команда | `/team` (Команда) |
| Клиенты и кейсы | `/cases` (Клиенты и кейсы) |
| О нас | `/about` (О нас) |
| Контакты | `/contacts` (Контакты) |

**Layout structure:**
- `min-h-screen flex flex-col`
- Background: `bg-white dark:bg-[#003154]`
- Font: `fontFamily: "'Manrope', sans-serif"`
- Main content area has top padding for the sticky header: `pt-16 lg:pt-[72px]`

#### `MainNav.tsx`

Sticky header with logo, horizontal navigation, and contact block.

**Props:**

```typescript
interface MainNavProps {
  navigationItems: NavItem[]
  phone?: string
  onNavigate?: (href: string) => void
  onRequestCall?: () => void
}
```

**Key implementation details:**

- **Sticky positioning:** `fixed top-0 left-0 right-0 z-50`
- **Height:** 64px mobile (`h-16`), 72px desktop (`lg:h-[72px]`)
- **Max width:** `max-w-[1400px]` centered
- **Scroll effect:** On scroll (> 10px), apply `bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]`; before scroll, solid `bg-white`
- **Logo:** Red square (`w-9 h-9 bg-[#e84249] rounded-sm`) with diagonal SVG lines + "PDCA" text (15px, bold) and "CONSULTING" subtitle (10px, medium, uppercase, tracking-widened)
- **Desktop nav:** `hidden lg:flex`, items with `text-[13px] font-medium`, active item is `text-[#e84249]` with a 2px red underline bar at bottom
- **Hover:** `hover:text-[#e84249]`
- **Contact block (desktop):** Phone number with Phone icon + "Заказать звонок" button (`border border-[#e84249] text-[#e84249] hover:bg-[#e84249] hover:text-white`)
- **Mobile:** Hamburger icon (`Menu` from lucide-react), opens fullscreen overlay menu
- **Mobile overlay:** `fixed inset-0 z-[100]`, full white background, large nav items (`text-2xl sm:text-3xl`), phone + "Заказать звонок" button at bottom
- **Body scroll lock:** When mobile menu is open, set `document.body.style.overflow = 'hidden'`

#### `SiteFooter.tsx`

Mega footer on dark blue background, minimum 80vh height.

**Props:**

```typescript
interface SiteFooterProps {
  directions?: FooterLink[]
  companyLinks?: FooterLink[]
  socialLinks?: Array<{ label: string; href: string; icon?: React.ReactNode }>
  phone?: string
  email?: string
  address?: string
  messengers?: Array<{ label: string; href: string }>
  onNavigate?: (href: string) => void
}
```

**Key implementation details:**

- **Background:** `bg-[#003154]`, text white, `min-height: 80vh`
- **Max width:** `max-w-[1400px]` centered
- **Top section:** Inverted logo (white text, red square mark) + company description (`text-white/60 text-sm`)
- **Middle section:** 4-column grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`):
  - Column 1 "Контакты": phone (clickable `tel:`), email (clickable `mailto:`), address, messengers. Icons from lucide-react: `Phone`, `Mail`, `MapPin`, `Send`
  - Column 2 "Направления": links to training categories
  - Column 3 "Компания": links to О нас, Команда, Кейсы, Контакты
  - Column 4 "Мы в сети": social media links (Telegram, WhatsApp, YouTube, LinkedIn)
- **Column headings:** `text-xs font-bold tracking-[0.2em] uppercase text-white/40`
- **Link styling:** `text-sm text-white/80 hover:text-[#e84249]`
- **Bottom bar:** Copyright + "Политика конфиденциальности" link, separated by `border-t border-white/10`
- **Giant watermark:** "PDCA CONSULTING" text across full width, `font-extrabold uppercase text-white/[0.04]`, font-size `clamp(60px, 13vw, 220px)`, `pointer-events-none select-none`

#### `index.ts`

```typescript
export { default as AppShell } from './AppShell'
export { default as MainNav } from './MainNav'
export { default as SiteFooter } from './SiteFooter'
```

### Responsive Behavior

| Breakpoint | Header | Footer |
|------------|--------|--------|
| Desktop (1024px+) | Full horizontal nav, contact block | 4-column grid, giant watermark text |
| Tablet (768-1023px) | Hamburger menu | 2-column grid |
| Mobile (<768px) | Fullscreen overlay menu | 1-column grid, smaller watermark |

### Dark Mode

- Header: `dark:bg-[#003154]` background, `dark:text-white` text, scroll state `dark:bg-[#003154]/90`
- Footer: Already dark by default (uses `bg-[#003154]`)
- Logo text: `dark:text-white` for name, `dark:text-white/60` for subtitle

### Dependencies

- `lucide-react` — icons: `Menu`, `X`, `Phone`, `Mail`, `MapPin`, `Send`
- React hooks: `useState`, `useEffect`

### Reference Files

- `design-system/tokens.css` — Full CSS custom properties
- `design-system/tailwind-colors.md` — Tailwind v4 color configuration guide
- `shell/components/AppShell.tsx` — Complete component source
- `shell/components/MainNav.tsx` — Complete component source
- `shell/components/SiteFooter.tsx` — Complete component source

---

## Milestone 2: Главная страница

### Overview

B2B landing page serving as the main entry point and conversion funnel. A single-component page (`GlavnayaStranitsa`) composed of 10 sequential blocks: Hero, audience segments, training categories, work formats, trust metrics, case studies slider, trainers, work process, FAQ accordion, and lead capture form.

### Prerequisites

- Milestone 1 (Shell) must be completed. This page renders inside `AppShell`.

### Component

#### `GlavnayaStranitsa.tsx`

Single component with 10 internal blocks. Wrapped in `bg-white dark:bg-slate-950` with `fontFamily: "'Manrope', sans-serif"`.

**Props:**

```typescript
interface GlavnayaStranitsaProps {
  heroContent: HeroContent
  industrySegments: IndustrySegment[]
  trainingCategories: TrainingCategory[]
  workFormats: WorkFormat[]
  trustFacts: TrustFact[]
  caseStudies: CaseStudy[]
  trainers: Trainer[]
  processSteps: ProcessStep[]
  faqItems: FaqItem[]

  onSegmentClick?: (segmentId: string) => void
  onCategoryClick?: (categoryId: string) => void
  onFormatClick?: (formatId: string) => void
  onCaseClick?: (caseId: string) => void
  onAllCasesClick?: () => void
  onTrainerClick?: (trainerId: string) => void
  onAllTrainersClick?: () => void
  onLeadSubmit?: (data: LeadFormData) => void
  onHeroCtaClick?: (type: 'primary' | 'secondary') => void
}
```

### Data Types

```typescript
interface HeroContent {
  headline: string          // e.g. "Повышаем эффективность бизнеса через развитие людей и процессов"
  subheadline: string       // Supporting text
  ctaPrimary: CtaButton     // { label: "Подобрать программу", href: "/..." }
  ctaSecondary: CtaButton   // { label: "Скачать каталог", href: "/..." }
}

interface CtaButton {
  label: string
  href: string
}

interface IndustrySegment {
  id: string
  title: string      // "Промышленность", "Логистика", "Ритейл и Сервис"
  pain: string        // Typical pain point for this segment
  solution: string    // How PDCA solves it
  icon: string        // Icon key: "factory", "truck", "store"
}

interface TrainingCategory {
  id: string
  title: string       // "Кайдзен и Бережливое производство", "Безопасность", etc.
  result: string      // Short result description
  icon: string        // Icon key: "chart-line", "shield-check", "handshake", "users"
  href: string        // Link to catalog with pre-set filter
}

interface WorkFormat {
  id: string
  title: string       // "Корпоративные тренинги", "Открытые программы", "Консалтинг"
  description: string // When to choose this format
  href: string
}

interface TrustFact {
  id: string
  value: string       // "12", "500", "3"
  unit: string        // "лет", "+", "страны"
  description: string // "на рынке бизнес-образования"
}

interface CaseStudy {
  id: string
  clientName: string
  clientLogo: string
  segmentId: string
  task: string
  result: string
  program: string     // e.g. "Бережливое производство"
}

interface Trainer {
  id: string
  name: string
  photo: string
  role: string              // e.g. "Старший тренер-консультант"
  specializations: string[]
  highlights: string[]      // 2-3 key credentials shown on card
}

interface ProcessStep {
  id: string
  order: number       // 1, 2, 3, 4
  title: string       // "Аудит", "Разработка программы", "Обучение", "Сопровождение внедрения"
  description: string
}

interface FaqItem {
  id: string
  question: string
  answer: string
}

interface LeadFormData {
  name: string
  phone: string
  company: string
  direction: string   // Selected from dropdown
  comment?: string
}
```

### Block-by-Block Implementation

#### Block 1: Hero

- **Layout:** Two-column grid on desktop (`lg:grid-cols-2`), single column on mobile
- **Left side:** Headline in `text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] text-black dark:text-white`, subheadline in `text-base sm:text-lg text-black/60`, two CTA buttons
- **Primary CTA:** `bg-[#e84249] text-white hover:bg-[#d63a41]` with ArrowRight icon, label from `heroContent.ctaPrimary.label` (e.g. "Подобрать программу")
- **Secondary CTA:** `border-2 border-[#003154] text-[#003154] hover:bg-[#003154] hover:text-white`, label from `heroContent.ctaSecondary.label` (e.g. "Скачать каталог")
- **Right side (desktop only):** Geometric visual placeholder with `aspect-[4/3] bg-slate-100`, red diagonal SVG stripes overlay, "PDCA" watermark text, small red accent square
- **Decorative:** 6 red diagonal lines in background (`opacity-[0.06]`, 3px wide, `rotate(-35deg)`)
- **Callback:** `onHeroCtaClick('primary')` or `onHeroCtaClick('secondary')`

#### Block 2: Segments ("Кому помогаем")

- **Background:** `bg-slate-50 dark:bg-slate-900`
- **Grid:** `grid-cols-1 sm:grid-cols-3`
- **Cards:** 3 cards (Промышленность, Логистика, Ритейл/Сервис). Each card: icon in red-tinted square (`bg-[#e84249]/10`), title (Bold), pain text (50% opacity), solution text (80% opacity)
- **Hover:** Red accent bar at top (`h-1 bg-[#e84249] scale-x-0 group-hover:scale-x-100`), shadow increase, "Подробнее" text with ChevronRight appears
- **Icon mapping:** `factory` -> Factory, `truck` -> Truck, `store` -> Store (from lucide-react)
- **Callback:** `onSegmentClick(segmentId)`

#### Block 3: Categories ("Ключевые направления")

- **Background:** `bg-white dark:bg-slate-950`
- **Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- **Cards:** 4 direction cards. Each: icon in red-tinted square, title (Bold, sm), result text (xs, 50% opacity), "Программы" link with ChevronRight
- **Hover:** shadow increase, border becomes `hover:border-[#e84249]/40`
- **Callback:** `onCategoryClick(categoryId)`

#### Block 4: Formats ("Форматы работы")

- **Background:** `bg-slate-50 dark:bg-slate-900`
- **Grid:** `grid-cols-1 md:grid-cols-3`
- **Cards:** 3 format cards. Each has a large semi-transparent number in top-right corner (`text-5xl font-extrabold text-[#e84249]/10`), title (lg, Bold), description, "Узнать больше" link with ArrowRight
- **Callback:** `onFormatClick(formatId)`

#### Block 5: Trust ("Почему выбирают нас")

- **Background:** `bg-[#003154]` (dark blue) with subtle white diagonal lines (`opacity-[0.04]`)
- **Grid:** `grid-cols-2 lg:grid-cols-4`
- **Metrics:** Large value in `text-4xl lg:text-5xl font-extrabold text-[#e84249]`, unit beside it, description in `text-sm text-white/60`
- **No callbacks** — display only

#### Block 6: Cases slider ("Кейсы и результаты")

- **Background:** `bg-white dark:bg-slate-950`
- **Layout:** Horizontal scrollable row (`overflow-x-auto snap-x snap-mandatory`), with chevron navigation buttons (hidden on mobile)
- **Cards:** Fixed width `w-[300px] sm:w-[340px]`, each contains: client name placeholder, program badge (red, uppercase), task title (Bold), result text
- **Scroll buttons:** `ChevronLeft` / `ChevronRight` in bordered squares, hover turns `border-[#e84249] text-[#e84249]`
- **Footer:** "Все кейсы" link with ArrowRight, centered
- **Callbacks:** `onCaseClick(caseId)` on card click, `onAllCasesClick()` on "Все кейсы"

#### Block 7: Trainers ("Наши эксперты")

- **Background:** `bg-slate-50 dark:bg-slate-900`
- **Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- **Cards:** Photo placeholder with gradient overlay and initials, small red triangle accent in top-right corner. Below: name (Bold), role (`text-[#e84249] font-medium`), 2 highlight credentials with CheckCircle2 icons
- **Footer:** "Смотреть всех тренеров" link with ArrowRight, centered
- **Callbacks:** `onTrainerClick(trainerId)` on card click, `onAllTrainersClick()` on "Смотреть всех тренеров"

#### Block 8: Process ("Как мы работаем")

- **Background:** `bg-white dark:bg-slate-950`
- **Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- **Steps:** 4 steps. Each: numbered circle (`w-[84px] h-[84px] border-2 border-[#e84249] rounded-full`, number inside in `text-2xl font-extrabold text-[#e84249]`), title (Bold, sm), description (xs, 50% opacity)
- **Desktop:** Red connecting line between circles (`h-0.5 bg-[#e84249]/20`)
- **No callbacks** — display only

#### Block 9: FAQ ("Частые вопросы")

- **Background:** `bg-slate-50 dark:bg-slate-900`
- **Max width:** `max-w-[800px]` centered
- **Accordion:** Each item: bordered card, clickable header with question text (Semibold) and ChevronDown icon (rotates 180deg when open), answer reveals with grid animation (`gridTemplateRows: '1fr'` / `'0fr'`, `transition-all duration-200`)
- **State:** Only one item open at a time (or none). All closed by default
- **No callbacks** — local state only

#### Block 10: CTA form ("Получите консультацию эксперта")

- **Background:** `bg-white dark:bg-slate-950` with red accent stripe at top (`h-1 bg-[#e84249]`)
- **Max width:** `max-w-[700px]` centered
- **Heading:** "Получите консультацию эксперта" centered, subtext "Подберём программу и вышлем предложение в течение рабочего дня"
- **Form fields:**
  - Row 1: Имя (text, required) + Телефон (tel, required) — 2-column grid
  - Row 2: Компания (text, optional) — full width
  - Row 3: Направление (select dropdown with options: Кайдзен и Бережливое производство, Производственная безопасность, Продажи и переговоры, Управление и Лидерство, Другое)
  - Submit: "Отправить заявку" (`w-full bg-[#e84249] text-white`)
  - Privacy text: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности" (xs, centered, 30% opacity)
- **Input styling:** `border border-slate-200 rounded-sm focus:border-[#e84249] focus:ring-1 focus:ring-[#e84249]/30`
- **Callback:** `onLeadSubmit(data)` with `LeadFormData` shape

### User Flows

1. **Hero CTA:** Visitor lands, reads headline, clicks "Подобрать программу" -> `onHeroCtaClick('primary')` -> navigate to catalog or scroll to form
2. **Segment selection:** Visitor identifies their industry segment card -> `onSegmentClick(id)` -> navigate to relevant programs
3. **Category navigation:** Visitor clicks a training direction card -> `onCategoryClick(id)` -> navigate to catalog with pre-set filter
4. **Format selection:** Visitor clicks a work format card -> `onFormatClick(id)` -> navigate to corresponding page
5. **Case viewing:** Visitor scrolls case slider, clicks a case card -> `onCaseClick(id)` -> navigate to case detail page
6. **All cases:** Visitor clicks "Все кейсы" -> `onAllCasesClick()` -> navigate to cases page
7. **Trainer profile:** Visitor clicks a trainer card -> `onTrainerClick(id)` -> navigate to trainer profile
8. **All trainers:** Visitor clicks "Смотреть всех тренеров" -> `onAllTrainersClick()` -> navigate to team page
9. **FAQ:** Visitor clicks a question to expand/collapse the answer (local state)
10. **Lead form:** Visitor fills form and submits -> `onLeadSubmit(data)` -> send to backend

### Dependencies

- `lucide-react` — icons: `Factory`, `Truck`, `Store`, `TrendingUp`, `ShieldCheck`, `Handshake`, `Users`, `ChevronRight`, `ChevronLeft`, `ChevronDown`, `ArrowRight`, `CheckCircle2`
- React hooks: `useState`, `useRef`

### Reference Files

- `sections/glavnaya-stranitsa/components/GlavnayaStranitsa.tsx` — Complete component source
- `data-shapes/overview.ts` — TypeScript interfaces (HeroContent through LeadFormData)

---

## Milestone 3: Каталог тренингов

> **Prerequisites:** Milestone 1 (Shell) complete

### Goal

Implement the Training Catalog — a centralized catalog of 20+ educational programs with category filtering and training cards.

### Overview

Visitors can browse all available training programs, filter them by category using tabs, view key details on each card, and navigate to a detailed training page. A CTA block at the bottom catches visitors who didn't find what they need.

**Key Functionality:**
- View all trainings as a card grid (1/2/3 columns responsive)
- Filter by category using tab buttons (6 categories + "Все")
- View training card details: title, key result, duration, format badges (офлайн/онлайн), audience level
- Click "Подробнее" to navigate to the training detail page
- CTA "Не нашли нужный тренинг?" for custom consultation requests

### Components Provided

Copy the section components from `product-plan/sections/katalog-treningov/components/`:

- `KatalogTreningov` — Main catalog component with header, tabs, grid, and CTA

### Props Reference

**Data props:**

```typescript
interface Category {
  id: string
  name: string
  slug: string
}

type TrainingFormat = "offline" | "online" | "hybrid"
type TrainingLevel = "managers" | "line-staff" | "office" | "all"

interface Training {
  id: string
  title: string
  slug: string
  categoryId: string
  description: string
  duration: string
  format: TrainingFormat[]
  level: TrainingLevel
  keyResult: string
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onTrainingClick` | User clicks "Подробнее" on a training card |
| `onCategoryChange` | User switches category tab (null = "Все") |
| `onRequestConsultation` | User clicks CTA "Оставить заявку" |

### Expected User Flows

#### Flow 1: Browse and Filter Trainings

1. User opens the catalog page
2. User sees all trainings displayed as cards with count indicator
3. User clicks a category tab (e.g., "Безопасность")
4. **Outcome:** Only trainings in that category are shown, count updates

#### Flow 2: Navigate to Training Detail

1. User sees a training card with title, key result, duration, format badges
2. User clicks "Подробнее" button on the card
3. **Outcome:** `onTrainingClick` fires with `trainingId`, app navigates to training page

#### Flow 3: Request Custom Training

1. User scrolls to the bottom of the catalog
2. User sees "Не нашли нужный тренинг?" block
3. User clicks "Оставить заявку" button
4. **Outcome:** `onRequestConsultation` fires, app shows consultation form

### Empty States

- **No trainings in category:** Shows a centered empty state with Search icon and text "В этой категории пока нет программ"
- **First-time:** Not applicable — catalog always has seed data

### Testing

See `product-plan/sections/katalog-treningov/tests.md` for UI behavior test specs.

### Files to Reference

- `product-plan/sections/katalog-treningov/README.md` — Feature overview
- `product-plan/sections/katalog-treningov/tests.md` — UI behavior test specs
- `product-plan/sections/katalog-treningov/components/` — React components
- `product-plan/sections/katalog-treningov/types.ts` — TypeScript interfaces
- `product-plan/sections/katalog-treningov/sample-data.json` — Test data
- `product-plan/sections/katalog-treningov/screenshot.png` — Visual reference

### Done When

- [ ] Components render with real data
- [ ] Category tabs filter trainings correctly
- [ ] Empty state displays when no trainings match
- [ ] "Подробнее" navigates to training detail page
- [ ] CTA "Оставить заявку" triggers consultation flow
- [ ] Matches the visual design (see screenshot)
- [ ] Responsive on mobile

---

## Milestone 4: Страница тренинга

> **Prerequisites:** Milestone 1 (Shell), Milestone 3 (Каталог тренингов) complete

### Goal

Implement the Training Detail Page — a template landing page for each training with 9 content blocks that convert visitors into leads.

### Overview

This page receives traffic from the training catalog. It shows comprehensive training information: hero with key details, target audience cards, result metrics, program modules accordion, trainer profile, pricing, FAQ, related trainings, and a lead capture form. Multiple CTA buttons scroll to the form at the bottom.

**Key Functionality:**
- Display training hero with category badge, format tags, duration, and key result
- Show target audience cards (who the training is for)
- Display result metrics with large numbers
- Accordion for program modules (first module open by default)
- Trainer card with credentials and link to full profile
- Pricing block (price or "Стоимость по запросу")
- FAQ accordion
- Related trainings from the same category
- Lead capture form with validation

### Components Provided

Copy from `product-plan/sections/stranitsa-treninga/components/`:

- `StranitsTreninga` — Full training page with 9 blocks

### Props Reference

**Data props:**

```typescript
interface StranitsTreningaProps {
  id: string; title: string; slug: string
  categoryId: string; categoryName: string
  description: string; duration: string
  format: TrainingFormat[]; level: TrainingLevel
  keyResult: string
  audience: AudienceCard[]
  results: ResultMetric[]
  program: ProgramModule[]
  trainer: TrainerCard
  pricing: PricingInfo
  faq: FAQItem[]
  relatedTrainings: RelatedTraining[]
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onSubmitLead` | User submits the lead form (name, position, company, phone, email, comment) |
| `onTrainerClick` | User clicks "Подробнее о тренере" |
| `onRelatedTrainingClick` | User clicks "Подробнее" on a related training |
| `onScrollToForm` | Internal — CTA buttons scroll to form |

### Expected User Flows

#### Flow 1: View Training and Submit Lead

1. User arrives from catalog, sees hero with training name and category badge
2. User scrolls through audience, results, program modules
3. User clicks "Оставить заявку" CTA button in hero or pricing block
4. Page scrolls to lead form at the bottom
5. User fills in name*, phone*, and optional fields
6. User clicks "Отправить заявку"
7. **Outcome:** `onSubmitLead` fires with form data

#### Flow 2: Explore Program Modules

1. User scrolls to "Программа тренинга" section
2. First module is expanded by default showing topics
3. User clicks another module header to expand it
4. Previous module collapses (only one open at a time)
5. **Outcome:** User reads detailed module content

#### Flow 3: Navigate to Trainer Profile

1. User scrolls to "Тренер" section
2. User sees trainer card with name, role, and credentials
3. User clicks "Подробнее о тренере"
4. **Outcome:** `onTrainerClick` fires, app navigates to trainer profile

#### Flow 4: Browse Related Trainings

1. User scrolls to "Похожие тренинги" section
2. User sees 2-3 training cards from the same category
3. User clicks "Подробнее" on a related training
4. **Outcome:** `onRelatedTrainingClick` fires, app navigates to that training

### Empty States

- **No related trainings:** Section is hidden entirely (component handles this)
- **Price not set:** Shows "Стоимость по запросу" with explanation text

### Testing

See `product-plan/sections/stranitsa-treninga/tests.md` for UI behavior test specs.

### Files to Reference

- `product-plan/sections/stranitsa-treninga/README.md` — Feature overview
- `product-plan/sections/stranitsa-treninga/tests.md` — UI behavior test specs
- `product-plan/sections/stranitsa-treninga/components/` — React components
- `product-plan/sections/stranitsa-treninga/types.ts` — TypeScript interfaces
- `product-plan/sections/stranitsa-treninga/sample-data.json` — Test data
- `product-plan/sections/stranitsa-treninga/screenshot.png` — Visual reference

### Done When

- [ ] Components render with real training data
- [ ] CTA buttons scroll to the lead form
- [ ] Program accordion works (one open at a time, first open by default)
- [ ] Pricing shows amount or "по запросу" correctly
- [ ] FAQ accordion opens/closes
- [ ] Lead form validates (name and phone required)
- [ ] Related trainings link to other training pages
- [ ] Matches the visual design (see screenshot)
- [ ] Responsive on mobile

---

## Milestone 5: Корпоративные программы и консалтинг

> **Prerequisites:** Milestone 1 (Shell) complete

### Goal

Implement the Corporate Programs page — a landing page presenting comprehensive corporate programs with implementation timelines, methodology, case studies, and a consultation form.

### Overview

This page targets B2B decision-makers evaluating long-term corporate training programs. It showcases pre-built programs with horizontal timelines showing implementation stages (3-12 months), describes the methodology, offers custom program options, highlights advantages, and presents brief case studies with client logos.

**Key Functionality:**
- Hero block with CTA scrolling to consultation form
- 4-step methodology process visualization (Аудит -> Разработка -> Обучение -> Сопровождение)
- Program cards with horizontal timeline showing stages with month ranges
- Custom program block for individual requests
- Advantages grid with statistics
- Brief case study cards with metrics
- Client logos trust strip
- Consultation form with validation

### Components Provided

Copy from `product-plan/sections/korporativnye-programmy-i-konsalting/components/`:

- `KorporativnyeProgrammy` — Full page with 8 blocks

### Props Reference

**Data props:**

```typescript
interface KorporativnyeProgrammyProps {
  hero: HeroContent
  methodology: MethodologyStep[]
  programs: CorporateProgram[]
  customProgram: CustomProgramInfo
  advantages: Advantage[]
  cases: CaseStudyBrief[]
  clientLogos: ClientLogo[]
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onSubmitConsultation` | User submits consultation form (name, company, phone, email, comment) |
| `onProgramClick` | User clicks a program title |
| `onCaseClick` | User clicks a case study card |
| `onScrollToForm` | Internal — CTA buttons scroll to form |

### Expected User Flows

#### Flow 1: Explore Programs and Request Consultation

1. User sees hero block with value proposition
2. User clicks "Получить консультацию" CTA
3. Page scrolls to consultation form
4. User fills in name*, phone*, and optional fields
5. User clicks "Отправить заявку"
6. **Outcome:** `onSubmitConsultation` fires with form data

#### Flow 2: Browse Corporate Programs

1. User scrolls to "Готовые программы" section
2. User sees program cards with duration badge and timeline
3. User reads stages with month ranges on the vertical timeline
4. User clicks "Узнать подробности" on a program
5. **Outcome:** Page scrolls to consultation form

#### Flow 3: View Case Studies

1. User scrolls to "Кейсы и результаты" section
2. User sees case cards with industry badge, metric, challenge, and result
3. User clicks a case card
4. **Outcome:** `onCaseClick` fires, app navigates to case detail

### Empty States

Not applicable — static content page.

### Testing

See `product-plan/sections/korporativnye-programmy-i-konsalting/tests.md` for UI behavior test specs.

### Files to Reference

- `product-plan/sections/korporativnye-programmy-i-konsalting/README.md` — Feature overview
- `product-plan/sections/korporativnye-programmy-i-konsalting/tests.md` — UI behavior test specs
- `product-plan/sections/korporativnye-programmy-i-konsalting/components/` — React components
- `product-plan/sections/korporativnye-programmy-i-konsalting/types.ts` — TypeScript interfaces
- `product-plan/sections/korporativnye-programmy-i-konsalting/sample-data.json` — Test data
- `product-plan/sections/korporativnye-programmy-i-konsalting/screenshot.png` — Visual reference

### Done When

- [ ] Components render with real data
- [ ] CTA buttons scroll to consultation form
- [ ] Program timeline displays stages with month ranges
- [ ] Methodology steps display with icons and connectors
- [ ] Case cards show metrics and descriptions
- [ ] Client logos strip renders
- [ ] Consultation form validates and submits
- [ ] Matches the visual design (see screenshot)
- [ ] Responsive on mobile

---

## Milestone 6: Клиенты и кейсы

> **Prerequisites:** Milestone 1 (Shell) complete

### Goal

Implement the Clients & Case Studies section — a portfolio page with filterable case studies, client logos, testimonials, and detail pages for each case.

### Overview

This section has TWO views: a list page (KlientyIKeysy) and a detail page (CaseDetail). The list page shows client logos as a marquee strip, filter panels for industry and service category, a grid of case study cards, a testimonials slider, and a CTA form. The detail page shows the full case: challenge, solution, project phases timeline, result metrics, image gallery, client testimonial, related cases, and a CTA form.

**Key Functionality:**
- Client logos auto-scrolling marquee
- Dual filtering: by industry segment + by service category
- Case study cards with logo, title, challenge excerpt, key metric
- Testimonials horizontal slider with navigation arrows
- Detail page with vertical phases timeline and metrics grid
- CTA forms on both pages with success state
- Empty state when no cases match filters

### Components Provided

Copy from `product-plan/sections/klienty-i-keysy/components/`:

- `KlientyIKeysy` — List page with filters, case grid, testimonials, CTA form
- `CaseDetail` — Detail page with challenge, solution, timeline, metrics, gallery, testimonial

### Props Reference

**List page (KlientyIKeysy):**

```typescript
interface KlientyIKejsyProps {
  industrySegments: IndustrySegment[]
  serviceCategories: ServiceCategory[]
  clients: Client[]
  caseStudies: CaseStudy[]
  testimonials: Testimonial[]
  onCaseClick?: (caseId: string) => void
  onFilterChange?: (filters: { industryId?: string | null; serviceCategoryId?: string | null }) => void
  onCtaSubmit?: (data: { name: string; company?: string; phone: string; email?: string; comment?: string }) => void
}
```

**Detail page (CaseDetail):**

```typescript
interface CaseDetailProps {
  caseStudy: CaseStudy
  client: Client
  industry: IndustrySegment
  serviceCategory: ServiceCategory
  testimonial?: Testimonial | null
  relatedCases: RelatedCaseBrief[]
  onBack?: () => void
  onRelatedCaseClick?: (caseId: string) => void
  onCtaSubmit?: (data: { name: string; company?: string; phone: string; email?: string; comment?: string }) => void
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onCaseClick` | User clicks a case card on the list page |
| `onFilterChange` | User changes industry or service category filter |
| `onCtaSubmit` | User submits CTA form (both list and detail pages) |
| `onBack` | User clicks "Все кейсы" back button on detail page |
| `onRelatedCaseClick` | User clicks a related case card |

### Expected User Flows

#### Flow 1: Filter and Browse Cases

1. User opens the cases page, sees client logos marquee and all cases
2. User clicks an industry tab (e.g., "Промышленность")
3. Cases filter to show only that industry
4. User additionally clicks a service category (e.g., "Безопасность")
5. Cases filter to show intersection of both filters
6. **Outcome:** User sees filtered case cards

#### Flow 2: View Case Detail

1. User clicks "Подробнее" on a case card
2. App navigates to case detail page
3. User reads challenge, solution, views project phases timeline
4. User sees result metrics in a grid
5. User reads client testimonial
6. **Outcome:** User understands the full project story

#### Flow 3: Submit Inquiry from Case Detail

1. User is on case detail page
2. User clicks "Обсудить похожий проект" CTA
3. Page scrolls to form
4. User fills in name*, phone* and submits
5. **Outcome:** Form shows success state "Заявка отправлена"

#### Flow 4: Navigate Between Cases

1. User is on case detail page
2. User scrolls to "Похожие кейсы" section
3. User clicks a related case card
4. **Outcome:** `onRelatedCaseClick` fires, app navigates to that case

### Empty States

- **No cases match filters:** Shows centered empty state with Search icon and "Кейсов по выбранным фильтрам не найдено" + "Попробуйте изменить параметры фильтрации"
- **No testimonial for case:** Testimonial block is hidden on detail page
- **No phases:** Phases timeline is hidden
- **No images:** Image gallery is hidden

### Testing

See `product-plan/sections/klienty-i-keysy/tests.md` for UI behavior test specs.

### Files to Reference

- `product-plan/sections/klienty-i-keysy/README.md` — Feature overview
- `product-plan/sections/klienty-i-keysy/tests.md` — UI behavior test specs
- `product-plan/sections/klienty-i-keysy/components/` — React components
- `product-plan/sections/klienty-i-keysy/types.ts` — TypeScript interfaces
- `product-plan/sections/klienty-i-keysy/sample-data.json` — Test data
- `product-plan/sections/klienty-i-keysy/screenshot.png` — List page visual reference
- `product-plan/sections/klienty-i-keysy/case-detail-screenshot.png` — Detail page visual reference

### Done When

- [ ] Client logos marquee renders and auto-scrolls
- [ ] Industry and service category filters work independently and combined
- [ ] Empty state shows when no cases match
- [ ] Case cards display correct data and navigate to detail
- [ ] Detail page shows all blocks (challenge, solution, phases, metrics, gallery, testimonial)
- [ ] Back button navigates to list page
- [ ] Related cases navigate to other case details
- [ ] CTA forms validate and show success state
- [ ] Testimonials slider scrolls
- [ ] Matches the visual design (see screenshots)
- [ ] Responsive on mobile

---

## Milestone 7: Команда, О нас и Контакты

> **Prerequisites:** Milestone 1 (Shell) complete

### Goal

Implement three interconnected views: About Company, Trainer Profile, and Contacts — forming the corporate positioning section of the website.

### Overview

This section combines three pages. **About Company** builds B2B trust through company mission, team grid, history timeline, key metrics, and certifications. **Trainer Profile** provides a detailed view of each trainer with bio, specializations, certificates, and conducted trainings. **Contacts** provides a feedback form, company details, social links, and a map placeholder.

**Key Functionality:**
- About page: mission/methodology block, team member cards (click to profile), company timeline, key metrics, certificates
- Trainer profile: full bio, specialization tags, certification list, training list with navigation
- Contacts: feedback form with validation and success state, structured company details, social link icons, map placeholder

### Components Provided

Copy from `product-plan/sections/komanda-o-nas-i-kontakty/components/`:

- `AboutCompany` — About page with 5 blocks (mission, team, timeline, metrics, certificates)
- `TrainerProfile` — Trainer detail page with 5 blocks (header, bio, specializations, certifications, trainings)
- `Contacts` — Contact page with form, details, social links, map

### Props Reference

**AboutCompany:**

```typescript
interface AboutCompanyProps {
  trainers: Trainer[]
  companyInfo: CompanyInfo
  milestones: Milestone[]
  companyMetrics: CompanyMetric[]
  certificates: Certificate[]
  onTrainerClick?: (trainerId: string) => void
}
```

**TrainerProfile:**

```typescript
interface TrainerProfileProps {
  trainer: Trainer
  onBack?: () => void
  onTrainingClick?: (trainingId: string) => void
}
```

**Contacts:**

```typescript
interface ContactsProps {
  contactInfo: ContactInfo
  socialLinks: SocialLink[]
  onSubmit?: (data: ContactFormData) => void
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onTrainerClick` | User clicks a trainer card on About page |
| `onBack` | User clicks "← Назад к команде" on Trainer Profile |
| `onTrainingClick` | User clicks "Подробнее" on a training in Trainer Profile |
| `onSubmit` | User submits contact form |

### Expected User Flows

#### Flow 1: Browse Team and View Trainer

1. User navigates to "О нас" / "Команда" page
2. User sees company mission and methodology description
3. User scrolls to team grid and sees trainer cards with avatars and experience badges
4. User clicks a trainer card
5. App navigates to Trainer Profile page
6. User sees full bio, specializations, certifications, and conducted trainings
7. **Outcome:** User understands the trainer's expertise

#### Flow 2: Navigate from Trainer to Training

1. User is on Trainer Profile page
2. User scrolls to "Проводимые тренинги" section
3. User clicks "Подробнее" on a training
4. **Outcome:** `onTrainingClick` fires, app navigates to training detail page

#### Flow 3: Return to Team from Trainer Profile

1. User is on Trainer Profile page
2. User clicks "← Назад к команде" at the top
3. **Outcome:** `onBack` fires, app navigates back to About page

#### Flow 4: Submit Contact Form

1. User navigates to Contacts page
2. User sees form on the left and company details on the right
3. User fills in name*, phone*, and optional email/message
4. User clicks "Отправить"
5. **Outcome:** Form shows success state "Спасибо за обращение!"

### Empty States

Not applicable — static content pages with pre-populated data.

### Testing

See `product-plan/sections/komanda-o-nas-i-kontakty/tests.md` for UI behavior test specs.

### Files to Reference

- `product-plan/sections/komanda-o-nas-i-kontakty/README.md` — Feature overview
- `product-plan/sections/komanda-o-nas-i-kontakty/tests.md` — UI behavior test specs
- `product-plan/sections/komanda-o-nas-i-kontakty/components/` — React components
- `product-plan/sections/komanda-o-nas-i-kontakty/types.ts` — TypeScript interfaces
- `product-plan/sections/komanda-o-nas-i-kontakty/sample-data.json` — Test data
- `product-plan/sections/komanda-o-nas-i-kontakty/screenshot.png` — About page visual reference
- `product-plan/sections/komanda-o-nas-i-kontakty/contacts-screenshot.png` — Contacts page visual reference

### Done When

- [ ] About page renders mission, team, timeline, metrics, certificates
- [ ] Trainer cards navigate to Trainer Profile
- [ ] Trainer Profile shows full bio, specializations, certifications, trainings
- [ ] "Назад к команде" navigates back to About page
- [ ] Training links navigate to training detail pages
- [ ] Contact form validates (name and phone required)
- [ ] Contact form shows success state after submission
- [ ] Company details display with clickable phone/email
- [ ] Social links render with hover effects
- [ ] Map placeholder shows address
- [ ] Matches the visual design (see screenshots)
- [ ] Responsive on mobile
