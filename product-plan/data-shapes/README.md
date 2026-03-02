# UI Data Shapes

These types define the shape of data that the UI components expect to receive as props. They represent the **frontend contract** — what the components need to render correctly.

How you model, store, and fetch this data on the backend is an implementation decision. You may combine, split, or extend these types to fit your architecture.

## Entities

- **HeroContent** — Content for hero section (used in: glavnaya-stranitsa)
- **IndustrySegment** — Отраслевой сегмент for audience segmentation (used in: glavnaya-stranitsa, klienty-i-keysy)
- **TrainingCategory** — Training direction with icon and link (used in: glavnaya-stranitsa)
- **WorkFormat** — Format of work (corporate, open, consulting) (used in: glavnaya-stranitsa)
- **TrustFact** — Trust metric with value and description (used in: glavnaya-stranitsa)
- **CaseStudy** — Реализованный проект with metrics (used in: glavnaya-stranitsa, klienty-i-keysy)
- **Trainer** — Тренер-консультант with credentials (used in: glavnaya-stranitsa, komanda-o-nas-i-kontakty)
- **ProcessStep** — Step in methodology process (used in: glavnaya-stranitsa)
- **FaqItem** — FAQ question and answer (used in: glavnaya-stranitsa)
- **LeadFormData** — Lead capture form data (used in: glavnaya-stranitsa)
- **Category** — Training category for filtering (used in: katalog-treningov)
- **Training** — Training program in catalog (used in: katalog-treningov)
- **AudienceCard** — Target audience card (used in: stranitsa-treninga)
- **ResultMetric** — Training result metric (used in: stranitsa-treninga)
- **ProgramModule** — Training program module (used in: stranitsa-treninga)
- **TrainerCard** — Compact trainer card (used in: stranitsa-treninga)
- **PricingInfo** — Pricing information (used in: stranitsa-treninga)
- **RelatedTraining** — Related training card (used in: stranitsa-treninga)
- **CorporateProgram** — Corporate program with timeline (used in: korporativnye-programmy-i-konsalting)
- **ProgramStage** — Stage in corporate program timeline (used in: korporativnye-programmy-i-konsalting)
- **MethodologyStep** — Methodology process step (used in: korporativnye-programmy-i-konsalting)
- **Advantage** — Company advantage (used in: korporativnye-programmy-i-konsalting)
- **CaseStudyBrief** — Brief case study card (used in: korporativnye-programmy-i-konsalting)
- **ClientLogo** — Client logo for trust strip (used in: korporativnye-programmy-i-konsalting)
- **Client** — Client company (used in: klienty-i-keysy)
- **ServiceCategory** — Service category for filtering (used in: klienty-i-keysy)
- **CaseStudyMetric** — Case study result metric (used in: klienty-i-keysy)
- **ProjectPhase** — Project phase in case study (used in: klienty-i-keysy)
- **Testimonial** — Client testimonial (used in: klienty-i-keysy)
- **RelatedCaseBrief** — Brief related case card (used in: klienty-i-keysy)
- **CompanyInfo** — Company information (used in: komanda-o-nas-i-kontakty)
- **Milestone** — Company history milestone (used in: komanda-o-nas-i-kontakty)
- **CompanyMetric** — Company metric (used in: komanda-o-nas-i-kontakty)
- **Certificate** — Company certificate (used in: komanda-o-nas-i-kontakty)
- **ContactInfo** — Contact details (used in: komanda-o-nas-i-kontakty)
- **SocialLink** — Social media link (used in: komanda-o-nas-i-kontakty)
- **ContactFormData** — Contact form data (used in: komanda-o-nas-i-kontakty)

## Per-Section Types

Each section includes its own `types.ts` with the full interface definitions:

- `sections/glavnaya-stranitsa/types.ts`
- `sections/katalog-treningov/types.ts`
- `sections/stranitsa-treninga/types.ts`
- `sections/korporativnye-programmy-i-konsalting/types.ts`
- `sections/klienty-i-keysy/types.ts`
- `sections/komanda-o-nas-i-kontakty/types.ts`

## Combined Reference

See `overview.ts` for all entity types aggregated in one file.
