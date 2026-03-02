// Каталог тренингов — TypeScript interfaces

export interface Category {
  id: string
  name: string
  slug: string
}

export type TrainingFormat = "offline" | "online" | "hybrid"

export type TrainingLevel = "managers" | "line-staff" | "office" | "all"

export interface Training {
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

export interface KatalogTreningovProps {
  trainings: Training[]
  categories: Category[]

  /** Callback при клике «Подробнее» на карточке тренинга */
  onTrainingClick?: (trainingId: string) => void
  /** Callback при переключении таба категории */
  onCategoryChange?: (categoryId: string | null) => void
  /** Callback при клике CTA «Индивидуальный запрос» */
  onRequestConsultation?: () => void
}
