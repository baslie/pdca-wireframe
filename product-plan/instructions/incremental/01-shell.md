# Milestone 1: Application Shell

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

Set up the design system tokens and implement the application shell: a sticky header with horizontal navigation and a mega footer on a dark blue background. The shell wraps all page content and provides persistent navigation across the site.

## Design System

### Colors

| Role | HEX | Usage |
|------|-----|-------|
| Primary (coral-red) | `#e84249` | CTA buttons, accents, active states, icons, hover effects |
| Primary hover | `#d63a41` | Button hover state |
| Secondary (dark-blue) | `#003154` | Footer background, dark contrast blocks, secondary headings |
| Black | `#000000` | Primary text |
| White | `#ffffff` | Page backgrounds, text on dark blocks |
| Neutral | Tailwind `slate` palette | Borders, dividers, secondary text, subtle backgrounds |

### Typography

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

### Tailwind CSS v4 Configuration

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

### CSS Custom Properties

Reference `design-system/tokens.css` for the full set of design tokens including spacing, shadows, transitions, and border radius values.

## Components

### `AppShell.tsx`

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

### `MainNav.tsx`

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

### `SiteFooter.tsx`

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

### `index.ts`

```typescript
export { default as AppShell } from './AppShell'
export { default as MainNav } from './MainNav'
export { default as SiteFooter } from './SiteFooter'
```

## Responsive Behavior

| Breakpoint | Header | Footer |
|------------|--------|--------|
| Desktop (1024px+) | Full horizontal nav, contact block | 4-column grid, giant watermark text |
| Tablet (768-1023px) | Hamburger menu | 2-column grid |
| Mobile (<768px) | Fullscreen overlay menu | 1-column grid, smaller watermark |

## Dark Mode

- Header: `dark:bg-[#003154]` background, `dark:text-white` text, scroll state `dark:bg-[#003154]/90`
- Footer: Already dark by default (uses `bg-[#003154]`)
- Logo text: `dark:text-white` for name, `dark:text-white/60` for subtitle

## Dependencies

- `lucide-react` — icons: `Menu`, `X`, `Phone`, `Mail`, `MapPin`, `Send`
- React hooks: `useState`, `useEffect`

## Reference Files

- `design-system/tokens.css` — Full CSS custom properties
- `design-system/tailwind-colors.md` — Tailwind v4 color configuration guide
- `shell/components/AppShell.tsx` — Complete component source
- `shell/components/MainNav.tsx` — Complete component source
- `shell/components/SiteFooter.tsx` — Complete component source
