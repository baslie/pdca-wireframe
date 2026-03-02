// Страница тренинга — TypeScript interfaces

import type { TrainingFormat, TrainingLevel } from "../katalog-treningov/types"

export interface AudienceCard {
  role: string
  painPoint: string
}

export interface ResultMetric {
  value: string
  label: string
  description?: string
}

export interface ProgramModule {
  id: string
  title: string
  topics: string[]
}

export interface TrainerCard {
  id: string
  name: string
  role: string
  photo: string
  credentials: string[]
  profileUrl?: string
}

export interface PricingInfo {
  price?: number
  currency?: string
  label?: string
  note?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface RelatedTraining {
  id: string
  title: string
  slug: string
  categoryId: string
  keyResult: string
  duration: string
  format: TrainingFormat[]
}

export interface StranitsTreningaProps {
  // Training base data
  id: string
  title: string
  slug: string
  categoryId: string
  categoryName: string
  description: string
  duration: string
  format: TrainingFormat[]
  level: TrainingLevel
  keyResult: string

  // Extended data
  audience: AudienceCard[]
  results: ResultMetric[]
  program: ProgramModule[]
  trainer: TrainerCard
  pricing: PricingInfo
  faq: FAQItem[]
  relatedTrainings: RelatedTraining[]

  // Callbacks
  onSubmitLead?: (data: {
    name: string
    position?: string
    company?: string
    phone: string
    email?: string
    comment?: string
  }) => void
  onTrainerClick?: (trainerId: string) => void
  onRelatedTrainingClick?: (trainingId: string) => void
  onScrollToForm?: () => void
}
