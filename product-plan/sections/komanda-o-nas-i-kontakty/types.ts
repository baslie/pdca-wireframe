// Команда, О нас и Контакты — TypeScript interfaces

/** Тренер-консультант компании */
export interface Trainer {
  id: string
  name: string
  role: string
  photoUrl: string
  shortBio: string
  fullBio: string
  specializations: string[]
  certifications: string[]
  experienceYears: number
  trainings: TrainerTraining[]
}

/** Тренинг в профиле тренера */
export interface TrainerTraining {
  id: string
  title: string
  count: number
  format: string
}

/** Информация о компании */
export interface CompanyInfo {
  mission: string
  methodology: string
  foundedYear: number
  description: string
}

/** Веха таймлайна компании */
export interface Milestone {
  id: string
  year: number
  title: string
  description: string
}

/** Ключевая метрика компании */
export interface CompanyMetric {
  label: string
  value: string
  suffix?: string
}

/** Сертификат или аккредитация компании */
export interface Certificate {
  id: string
  name: string
  issuer: string
  logoUrl: string
  year?: number
}

/** Реквизиты компании */
export interface ContactInfo {
  address: string
  phone: string
  email: string
  legalName: string
  inn: string
}

/** Ссылка на социальную сеть */
export interface SocialLink {
  platform: string
  url: string
  icon: string
}

/** Данные формы обратной связи */
export interface ContactFormData {
  name: string
  phone: string
  email?: string
  message?: string
}

/** Props страницы «О компании» */
export interface AboutCompanyProps {
  trainers: Trainer[]
  companyInfo: CompanyInfo
  milestones: Milestone[]
  companyMetrics: CompanyMetric[]
  certificates: Certificate[]
  onTrainerClick?: (trainerId: string) => void
  onContactFormSubmit?: (data: ContactFormData) => void
}

/** Props страницы профиля тренера */
export interface TrainerProfileProps {
  trainer: Trainer
  onBack?: () => void
  onTrainingClick?: (trainingId: string) => void
}

/** Props страницы «Контакты» */
export interface ContactsProps {
  contactInfo: ContactInfo
  socialLinks: SocialLink[]
  onSubmit?: (data: ContactFormData) => void
}
