# Milestone 4: Страница тренинга

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Shell), Milestone 3 (Каталог тренингов) complete

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

Implement the Training Detail Page — a template landing page for each training with 9 content blocks that convert visitors into leads.

## Overview

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

## Components Provided

Copy from `product-plan/sections/stranitsa-treninga/components/`:

- `StranitsTreninga` — Full training page with 9 blocks

## Props Reference

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

## Expected User Flows

### Flow 1: View Training and Submit Lead

1. User arrives from catalog, sees hero with training name and category badge
2. User scrolls through audience, results, program modules
3. User clicks "Оставить заявку" CTA button in hero or pricing block
4. Page scrolls to lead form at the bottom
5. User fills in name*, phone*, and optional fields
6. User clicks "Отправить заявку"
7. **Outcome:** `onSubmitLead` fires with form data

### Flow 2: Explore Program Modules

1. User scrolls to "Программа тренинга" section
2. First module is expanded by default showing topics
3. User clicks another module header to expand it
4. Previous module collapses (only one open at a time)
5. **Outcome:** User reads detailed module content

### Flow 3: Navigate to Trainer Profile

1. User scrolls to "Тренер" section
2. User sees trainer card with name, role, and credentials
3. User clicks "Подробнее о тренере"
4. **Outcome:** `onTrainerClick` fires, app navigates to trainer profile

### Flow 4: Browse Related Trainings

1. User scrolls to "Похожие тренинги" section
2. User sees 2-3 training cards from the same category
3. User clicks "Подробнее" on a related training
4. **Outcome:** `onRelatedTrainingClick` fires, app navigates to that training

## Empty States

- **No related trainings:** Section is hidden entirely (component handles this)
- **Price not set:** Shows "Стоимость по запросу" with explanation text

## Testing

See `product-plan/sections/stranitsa-treninga/tests.md` for UI behavior test specs.

## Files to Reference

- `product-plan/sections/stranitsa-treninga/README.md` — Feature overview
- `product-plan/sections/stranitsa-treninga/tests.md` — UI behavior test specs
- `product-plan/sections/stranitsa-treninga/components/` — React components
- `product-plan/sections/stranitsa-treninga/types.ts` — TypeScript interfaces
- `product-plan/sections/stranitsa-treninga/sample-data.json` — Test data
- `product-plan/sections/stranitsa-treninga/screenshot.png` — Visual reference

## Done When

- [ ] Components render with real training data
- [ ] CTA buttons scroll to the lead form
- [ ] Program accordion works (one open at a time, first open by default)
- [ ] Pricing shows amount or "по запросу" correctly
- [ ] FAQ accordion opens/closes
- [ ] Lead form validates (name and phone required)
- [ ] Related trainings link to other training pages
- [ ] Matches the visual design (see screenshot)
- [ ] Responsive on mobile
