# Milestone 3: Каталог тренингов

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Shell) complete

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

## Goal

Implement the Training Catalog — a centralized catalog of 20+ educational programs with category filtering and training cards.

## Overview

Visitors can browse all available training programs, filter them by category using tabs, view key details on each card, and navigate to a detailed training page. A CTA block at the bottom catches visitors who didn't find what they need.

**Key Functionality:**
- View all trainings as a card grid (1/2/3 columns responsive)
- Filter by category using tab buttons (6 categories + "Все")
- View training card details: title, key result, duration, format badges (офлайн/онлайн), audience level
- Click "Подробнее" to navigate to the training detail page
- CTA "Не нашли нужный тренинг?" for custom consultation requests

## Components Provided

Copy the section components from `product-plan/sections/katalog-treningov/components/`:

- `KatalogTreningov` — Main catalog component with header, tabs, grid, and CTA

## Props Reference

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

## Expected User Flows

### Flow 1: Browse and Filter Trainings

1. User opens the catalog page
2. User sees all trainings displayed as cards with count indicator
3. User clicks a category tab (e.g., "Безопасность")
4. **Outcome:** Only trainings in that category are shown, count updates

### Flow 2: Navigate to Training Detail

1. User sees a training card with title, key result, duration, format badges
2. User clicks "Подробнее" button on the card
3. **Outcome:** `onTrainingClick` fires with `trainingId`, app navigates to training page

### Flow 3: Request Custom Training

1. User scrolls to the bottom of the catalog
2. User sees "Не нашли нужный тренинг?" block
3. User clicks "Оставить заявку" button
4. **Outcome:** `onRequestConsultation` fires, app shows consultation form

## Empty States

- **No trainings in category:** Shows a centered empty state with Search icon and text "В этой категории пока нет программ"
- **First-time:** Not applicable — catalog always has seed data

## Testing

See `product-plan/sections/katalog-treningov/tests.md` for UI behavior test specs.

## Files to Reference

- `product-plan/sections/katalog-treningov/README.md` — Feature overview
- `product-plan/sections/katalog-treningov/tests.md` — UI behavior test specs
- `product-plan/sections/katalog-treningov/components/` — React components
- `product-plan/sections/katalog-treningov/types.ts` — TypeScript interfaces
- `product-plan/sections/katalog-treningov/sample-data.json` — Test data
- `product-plan/sections/katalog-treningov/screenshot.png` — Visual reference

## Done When

- [ ] Components render with real data
- [ ] Category tabs filter trainings correctly
- [ ] Empty state displays when no trainings match
- [ ] "Подробнее" navigates to training detail page
- [ ] CTA "Оставить заявку" triggers consultation flow
- [ ] Matches the visual design (see screenshot)
- [ ] Responsive on mobile
