# Milestone 7: Команда, О нас и Контакты

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

Implement three interconnected views: About Company, Trainer Profile, and Contacts — forming the corporate positioning section of the website.

## Overview

This section combines three pages. **About Company** builds B2B trust through company mission, team grid, history timeline, key metrics, and certifications. **Trainer Profile** provides a detailed view of each trainer with bio, specializations, certificates, and conducted trainings. **Contacts** provides a feedback form, company details, social links, and a map placeholder.

**Key Functionality:**
- About page: mission/methodology block, team member cards (click to profile), company timeline, key metrics, certificates
- Trainer profile: full bio, specialization tags, certification list, training list with navigation
- Contacts: feedback form with validation and success state, structured company details, social link icons, map placeholder

## Components Provided

Copy from `product-plan/sections/komanda-o-nas-i-kontakty/components/`:

- `AboutCompany` — About page with 5 blocks (mission, team, timeline, metrics, certificates)
- `TrainerProfile` — Trainer detail page with 5 blocks (header, bio, specializations, certifications, trainings)
- `Contacts` — Contact page with form, details, social links, map

## Props Reference

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

## Expected User Flows

### Flow 1: Browse Team and View Trainer

1. User navigates to "О нас" / "Команда" page
2. User sees company mission and methodology description
3. User scrolls to team grid and sees trainer cards with avatars and experience badges
4. User clicks a trainer card
5. App navigates to Trainer Profile page
6. User sees full bio, specializations, certifications, and conducted trainings
7. **Outcome:** User understands the trainer's expertise

### Flow 2: Navigate from Trainer to Training

1. User is on Trainer Profile page
2. User scrolls to "Проводимые тренинги" section
3. User clicks "Подробнее" on a training
4. **Outcome:** `onTrainingClick` fires, app navigates to training detail page

### Flow 3: Return to Team from Trainer Profile

1. User is on Trainer Profile page
2. User clicks "← Назад к команде" at the top
3. **Outcome:** `onBack` fires, app navigates back to About page

### Flow 4: Submit Contact Form

1. User navigates to Contacts page
2. User sees form on the left and company details on the right
3. User fills in name*, phone*, and optional email/message
4. User clicks "Отправить"
5. **Outcome:** Form shows success state "Спасибо за обращение!"

## Empty States

Not applicable — static content pages with pre-populated data.

## Testing

See `product-plan/sections/komanda-o-nas-i-kontakty/tests.md` for UI behavior test specs.

## Files to Reference

- `product-plan/sections/komanda-o-nas-i-kontakty/README.md` — Feature overview
- `product-plan/sections/komanda-o-nas-i-kontakty/tests.md` — UI behavior test specs
- `product-plan/sections/komanda-o-nas-i-kontakty/components/` — React components
- `product-plan/sections/komanda-o-nas-i-kontakty/types.ts` — TypeScript interfaces
- `product-plan/sections/komanda-o-nas-i-kontakty/sample-data.json` — Test data
- `product-plan/sections/komanda-o-nas-i-kontakty/screenshot.png` — About page visual reference
- `product-plan/sections/komanda-o-nas-i-kontakty/contacts-screenshot.png` — Contacts page visual reference

## Done When

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
