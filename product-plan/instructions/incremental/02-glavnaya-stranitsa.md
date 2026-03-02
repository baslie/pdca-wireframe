# Milestone 2: Главная страница

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

## Overview

B2B landing page serving as the main entry point and conversion funnel. A single-component page (`GlavnayaStranitsa`) composed of 10 sequential blocks: Hero, audience segments, training categories, work formats, trust metrics, case studies slider, trainers, work process, FAQ accordion, and lead capture form.

## Prerequisites

- Milestone 1 (Shell) must be completed. This page renders inside `AppShell`.

## Component

### `GlavnayaStranitsa.tsx`

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

## Data Types

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

## Block-by-Block Implementation

### Block 1: Hero

- **Layout:** Two-column grid on desktop (`lg:grid-cols-2`), single column on mobile
- **Left side:** Headline in `text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] text-black dark:text-white`, subheadline in `text-base sm:text-lg text-black/60`, two CTA buttons
- **Primary CTA:** `bg-[#e84249] text-white hover:bg-[#d63a41]` with ArrowRight icon, label from `heroContent.ctaPrimary.label` (e.g. "Подобрать программу")
- **Secondary CTA:** `border-2 border-[#003154] text-[#003154] hover:bg-[#003154] hover:text-white`, label from `heroContent.ctaSecondary.label` (e.g. "Скачать каталог")
- **Right side (desktop only):** Geometric visual placeholder with `aspect-[4/3] bg-slate-100`, red diagonal SVG stripes overlay, "PDCA" watermark text, small red accent square
- **Decorative:** 6 red diagonal lines in background (`opacity-[0.06]`, 3px wide, `rotate(-35deg)`)
- **Callback:** `onHeroCtaClick('primary')` or `onHeroCtaClick('secondary')`

### Block 2: Segments ("Кому помогаем")

- **Background:** `bg-slate-50 dark:bg-slate-900`
- **Grid:** `grid-cols-1 sm:grid-cols-3`
- **Cards:** 3 cards (Промышленность, Логистика, Ритейл/Сервис). Each card: icon in red-tinted square (`bg-[#e84249]/10`), title (Bold), pain text (50% opacity), solution text (80% opacity)
- **Hover:** Red accent bar at top (`h-1 bg-[#e84249] scale-x-0 group-hover:scale-x-100`), shadow increase, "Подробнее" text with ChevronRight appears
- **Icon mapping:** `factory` -> Factory, `truck` -> Truck, `store` -> Store (from lucide-react)
- **Callback:** `onSegmentClick(segmentId)`

### Block 3: Categories ("Ключевые направления")

- **Background:** `bg-white dark:bg-slate-950`
- **Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- **Cards:** 4 direction cards. Each: icon in red-tinted square, title (Bold, sm), result text (xs, 50% opacity), "Программы" link with ChevronRight
- **Hover:** shadow increase, border becomes `hover:border-[#e84249]/40`
- **Callback:** `onCategoryClick(categoryId)`

### Block 4: Formats ("Форматы работы")

- **Background:** `bg-slate-50 dark:bg-slate-900`
- **Grid:** `grid-cols-1 md:grid-cols-3`
- **Cards:** 3 format cards. Each has a large semi-transparent number in top-right corner (`text-5xl font-extrabold text-[#e84249]/10`), title (lg, Bold), description, "Узнать больше" link with ArrowRight
- **Callback:** `onFormatClick(formatId)`

### Block 5: Trust ("Почему выбирают нас")

- **Background:** `bg-[#003154]` (dark blue) with subtle white diagonal lines (`opacity-[0.04]`)
- **Grid:** `grid-cols-2 lg:grid-cols-4`
- **Metrics:** Large value in `text-4xl lg:text-5xl font-extrabold text-[#e84249]`, unit beside it, description in `text-sm text-white/60`
- **No callbacks** — display only

### Block 6: Cases slider ("Кейсы и результаты")

- **Background:** `bg-white dark:bg-slate-950`
- **Layout:** Horizontal scrollable row (`overflow-x-auto snap-x snap-mandatory`), with chevron navigation buttons (hidden on mobile)
- **Cards:** Fixed width `w-[300px] sm:w-[340px]`, each contains: client name placeholder, program badge (red, uppercase), task title (Bold), result text
- **Scroll buttons:** `ChevronLeft` / `ChevronRight` in bordered squares, hover turns `border-[#e84249] text-[#e84249]`
- **Footer:** "Все кейсы" link with ArrowRight, centered
- **Callbacks:** `onCaseClick(caseId)` on card click, `onAllCasesClick()` on "Все кейсы"

### Block 7: Trainers ("Наши эксперты")

- **Background:** `bg-slate-50 dark:bg-slate-900`
- **Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- **Cards:** Photo placeholder with gradient overlay and initials, small red triangle accent in top-right corner. Below: name (Bold), role (`text-[#e84249] font-medium`), 2 highlight credentials with CheckCircle2 icons
- **Footer:** "Смотреть всех тренеров" link with ArrowRight, centered
- **Callbacks:** `onTrainerClick(trainerId)` on card click, `onAllTrainersClick()` on "Смотреть всех тренеров"

### Block 8: Process ("Как мы работаем")

- **Background:** `bg-white dark:bg-slate-950`
- **Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- **Steps:** 4 steps. Each: numbered circle (`w-[84px] h-[84px] border-2 border-[#e84249] rounded-full`, number inside in `text-2xl font-extrabold text-[#e84249]`), title (Bold, sm), description (xs, 50% opacity)
- **Desktop:** Red connecting line between circles (`h-0.5 bg-[#e84249]/20`)
- **No callbacks** — display only

### Block 9: FAQ ("Частые вопросы")

- **Background:** `bg-slate-50 dark:bg-slate-900`
- **Max width:** `max-w-[800px]` centered
- **Accordion:** Each item: bordered card, clickable header with question text (Semibold) and ChevronDown icon (rotates 180deg when open), answer reveals with grid animation (`gridTemplateRows: '1fr'` / `'0fr'`, `transition-all duration-200`)
- **State:** Only one item open at a time (or none). All closed by default
- **No callbacks** — local state only

### Block 10: CTA form ("Получите консультацию эксперта")

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

## User Flows

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

## Dependencies

- `lucide-react` — icons: `Factory`, `Truck`, `Store`, `TrendingUp`, `ShieldCheck`, `Handshake`, `Users`, `ChevronRight`, `ChevronLeft`, `ChevronDown`, `ArrowRight`, `CheckCircle2`
- React hooks: `useState`, `useRef`

## Reference Files

- `sections/glavnaya-stranitsa/components/GlavnayaStranitsa.tsx` — Complete component source
- `data-shapes/overview.ts` — TypeScript interfaces (HeroContent through LeadFormData)
