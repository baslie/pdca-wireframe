# Milestone 5: Корпоративные программы и консалтинг

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

Implement the Corporate Programs page — a landing page presenting comprehensive corporate programs with implementation timelines, methodology, case studies, and a consultation form.

## Overview

This page targets B2B decision-makers evaluating long-term corporate training programs. It showcases pre-built programs with horizontal timelines showing implementation stages (3-12 months), describes the methodology, offers custom program options, highlights advantages, and presents brief case studies with client logos.

**Key Functionality:**
- Hero block with CTA scrolling to consultation form
- 4-step methodology process visualization (Аудит → Разработка → Обучение → Сопровождение)
- Program cards with horizontal timeline showing stages with month ranges
- Custom program block for individual requests
- Advantages grid with statistics
- Brief case study cards with metrics
- Client logos trust strip
- Consultation form with validation

## Components Provided

Copy from `product-plan/sections/korporativnye-programmy-i-konsalting/components/`:

- `KorporativnyeProgrammy` — Full page with 8 blocks

## Props Reference

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

## Expected User Flows

### Flow 1: Explore Programs and Request Consultation

1. User sees hero block with value proposition
2. User clicks "Получить консультацию" CTA
3. Page scrolls to consultation form
4. User fills in name*, phone*, and optional fields
5. User clicks "Отправить заявку"
6. **Outcome:** `onSubmitConsultation` fires with form data

### Flow 2: Browse Corporate Programs

1. User scrolls to "Готовые программы" section
2. User sees program cards with duration badge and timeline
3. User reads stages with month ranges on the vertical timeline
4. User clicks "Узнать подробности" on a program
5. **Outcome:** Page scrolls to consultation form

### Flow 3: View Case Studies

1. User scrolls to "Кейсы и результаты" section
2. User sees case cards with industry badge, metric, challenge, and result
3. User clicks a case card
4. **Outcome:** `onCaseClick` fires, app navigates to case detail

## Empty States

Not applicable — static content page.

## Testing

See `product-plan/sections/korporativnye-programmy-i-konsalting/tests.md` for UI behavior test specs.

## Files to Reference

- `product-plan/sections/korporativnye-programmy-i-konsalting/README.md` — Feature overview
- `product-plan/sections/korporativnye-programmy-i-konsalting/tests.md` — UI behavior test specs
- `product-plan/sections/korporativnye-programmy-i-konsalting/components/` — React components
- `product-plan/sections/korporativnye-programmy-i-konsalting/types.ts` — TypeScript interfaces
- `product-plan/sections/korporativnye-programmy-i-konsalting/sample-data.json` — Test data
- `product-plan/sections/korporativnye-programmy-i-konsalting/screenshot.png` — Visual reference

## Done When

- [ ] Components render with real data
- [ ] CTA buttons scroll to consultation form
- [ ] Program timeline displays stages with month ranges
- [ ] Methodology steps display with icons and connectors
- [ ] Case cards show metrics and descriptions
- [ ] Client logos strip renders
- [ ] Consultation form validates and submits
- [ ] Matches the visual design (see screenshot)
- [ ] Responsive on mobile
