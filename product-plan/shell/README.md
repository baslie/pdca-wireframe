# Application Shell

## Overview

The application shell provides a persistent navigation header and mega footer that wraps all page content. The header is sticky with scroll-dependent backdrop blur. The footer uses a dark `#003154` background with a four-column layout and giant "PDCA CONSULTING" watermark.

Typography: Manrope (sans-serif). Brand color: `#e84249` (red accent). Dark primary: `#003154`.

## Components

### AppShell

Root layout wrapper. Renders `MainNav` at the top, a `<main>` content slot in the middle, and `SiteFooter` at the bottom.

**Props:**
- `children` — page content
- `navigationItems` — array of `{ label, href, isActive? }`
- `phone`, `email`, `address` — contact strings
- `footerDirections` — array of `{ label, href }` for training directions column
- `footerCompanyLinks` — array of `{ label, href }` for company links column
- `onNavigate(href)` — navigation callback
- `onRequestCall()` — "Заказать звонок" button callback

### MainNav

Sticky header fixed at the top of the viewport. Height: 64px mobile, 72px desktop.

**Navigation items (default):**
- Тренинги
- Корпоративные программы
- Команда
- Клиенты и кейсы
- О нас
- Контакты

**Contact block (desktop):** phone number with Phone icon + "Заказать звонок" outlined button (red border, red text, fills red on hover).

**Logo:** PDCA Consulting logo mark — red square with diagonal white lines, "PDCA" bold text + "consulting" uppercase subtext.

**Scroll behavior:** on scroll > 10px, header gains `backdrop-blur-xl` and a subtle bottom shadow.

**Responsive:**
- Desktop (`lg:` and up): horizontal nav links + contact block
- Mobile (below `lg:`): hamburger icon (Menu), opens fullscreen overlay
  - Fullscreen overlay: white/dark background, large nav links stacked vertically
  - Close button (X icon) in top-right
  - Phone number + "Заказать звонок" full-width red button at the bottom
  - Body scroll is locked when overlay is open

### SiteFooter

Mega footer on `#003154` dark background. Minimum height: 80vh.

**Layout:**
1. Top section: PDCA logo + company description
2. Four-column grid:
   - Контакты: phone, email, address, messenger links (Telegram, WhatsApp)
   - Направления: Кайдзен и Бережливое производство, Производственная безопасность, Продажи и переговоры, Управление и Лидерство, Персональная эффективность
   - Компания: О нас, Команда, Клиенты и кейсы, Контакты
   - Мы в сети: Telegram, WhatsApp, YouTube, LinkedIn
3. Bottom bar: copyright + "Политика конфиденциальности" link
4. Giant watermark text "PDCA CONSULTING" at 4% opacity

**Props:**
- `directions`, `companyLinks` — footer link arrays
- `socialLinks` — array of `{ label, href, icon? }`
- `phone`, `email`, `address` — contact strings
- `messengers` — array of `{ label, href }`
- `onNavigate(href)` — navigation callback

## Dependencies

- `lucide-react`: Menu, X, Phone, Mail, MapPin, Send icons
- Tailwind CSS v4
- Google Fonts: Manrope
