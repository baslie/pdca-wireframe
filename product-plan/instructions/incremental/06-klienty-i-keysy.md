# Milestone 6: Клиенты и кейсы

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

Implement the Clients & Case Studies section — a portfolio page with filterable case studies, client logos, testimonials, and detail pages for each case.

## Overview

This section has TWO views: a list page (KlientyIKeysy) and a detail page (CaseDetail). The list page shows client logos as a marquee strip, filter panels for industry and service category, a grid of case study cards, a testimonials slider, and a CTA form. The detail page shows the full case: challenge, solution, project phases timeline, result metrics, image gallery, client testimonial, related cases, and a CTA form.

**Key Functionality:**
- Client logos auto-scrolling marquee
- Dual filtering: by industry segment + by service category
- Case study cards with logo, title, challenge excerpt, key metric
- Testimonials horizontal slider with navigation arrows
- Detail page with vertical phases timeline and metrics grid
- CTA forms on both pages with success state
- Empty state when no cases match filters

## Components Provided

Copy from `product-plan/sections/klienty-i-keysy/components/`:

- `KlientyIKeysy` — List page with filters, case grid, testimonials, CTA form
- `CaseDetail` — Detail page with challenge, solution, timeline, metrics, gallery, testimonial

## Props Reference

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

## Expected User Flows

### Flow 1: Filter and Browse Cases

1. User opens the cases page, sees client logos marquee and all cases
2. User clicks an industry tab (e.g., "Промышленность")
3. Cases filter to show only that industry
4. User additionally clicks a service category (e.g., "Безопасность")
5. Cases filter to show intersection of both filters
6. **Outcome:** User sees filtered case cards

### Flow 2: View Case Detail

1. User clicks "Подробнее" on a case card
2. App navigates to case detail page
3. User reads challenge, solution, views project phases timeline
4. User sees result metrics in a grid
5. User reads client testimonial
6. **Outcome:** User understands the full project story

### Flow 3: Submit Inquiry from Case Detail

1. User is on case detail page
2. User clicks "Обсудить похожий проект" CTA
3. Page scrolls to form
4. User fills in name*, phone* and submits
5. **Outcome:** Form shows success state "Заявка отправлена"

### Flow 4: Navigate Between Cases

1. User is on case detail page
2. User scrolls to "Похожие кейсы" section
3. User clicks a related case card
4. **Outcome:** `onRelatedCaseClick` fires, app navigates to that case

## Empty States

- **No cases match filters:** Shows centered empty state with Search icon and "Кейсов по выбранным фильтрам не найдено" + "Попробуйте изменить параметры фильтрации"
- **No testimonial for case:** Testimonial block is hidden on detail page
- **No phases:** Phases timeline is hidden
- **No images:** Image gallery is hidden

## Testing

See `product-plan/sections/klienty-i-keysy/tests.md` for UI behavior test specs.

## Files to Reference

- `product-plan/sections/klienty-i-keysy/README.md` — Feature overview
- `product-plan/sections/klienty-i-keysy/tests.md` — UI behavior test specs
- `product-plan/sections/klienty-i-keysy/components/` — React components
- `product-plan/sections/klienty-i-keysy/types.ts` — TypeScript interfaces
- `product-plan/sections/klienty-i-keysy/sample-data.json` — Test data
- `product-plan/sections/klienty-i-keysy/screenshot.png` — List page visual reference
- `product-plan/sections/klienty-i-keysy/case-detail-screenshot.png` — Detail page visual reference

## Done When

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
