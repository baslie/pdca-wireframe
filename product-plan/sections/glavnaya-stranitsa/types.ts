// Главная страница — TypeScript interfaces

export interface HeroContent {
  headline: string
  subheadline: string
  ctaPrimary: CtaButton
  ctaSecondary: CtaButton
}

export interface CtaButton {
  label: string
  href: string
}

export interface IndustrySegment {
  id: string
  title: string
  pain: string
  solution: string
  icon: string
}

export interface TrainingCategory {
  id: string
  title: string
  result: string
  icon: string
  href: string
}

export interface WorkFormat {
  id: string
  title: string
  description: string
  href: string
}

export interface TrustFact {
  id: string
  value: string
  unit: string
  description: string
}

export interface CaseStudy {
  id: string
  clientName: string
  clientLogo: string
  segmentId: string
  task: string
  result: string
  program: string
}

export interface Trainer {
  id: string
  name: string
  photo: string
  role: string
  specializations: string[]
  highlights: string[]
}

export interface ProcessStep {
  id: string
  order: number
  title: string
  description: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface LeadFormData {
  name: string
  phone: string
  company: string
  direction: string
  comment?: string
}

export interface GlavnayaStranitsaProps {
  heroContent: HeroContent
  industrySegments: IndustrySegment[]
  trainingCategories: TrainingCategory[]
  workFormats: WorkFormat[]
  trustFacts: TrustFact[]
  caseStudies: CaseStudy[]
  trainers: Trainer[]
  processSteps: ProcessStep[]
  faqItems: FaqItem[]

  /** Callback при клике на сегмент аудитории */
  onSegmentClick?: (segmentId: string) => void
  /** Callback при клике на карточку направления */
  onCategoryClick?: (categoryId: string) => void
  /** Callback при клике на формат работы */
  onFormatClick?: (formatId: string) => void
  /** Callback при клике на кейс */
  onCaseClick?: (caseId: string) => void
  /** Callback при клике «Все кейсы» */
  onAllCasesClick?: () => void
  /** Callback при клике на тренера */
  onTrainerClick?: (trainerId: string) => void
  /** Callback при клике «Смотреть всех тренеров» */
  onAllTrainersClick?: () => void
  /** Callback при отправке формы заявки */
  onLeadSubmit?: (data: LeadFormData) => void
  /** Callback при клике на CTA-кнопку Hero */
  onHeroCtaClick?: (type: 'primary' | 'secondary') => void
}
