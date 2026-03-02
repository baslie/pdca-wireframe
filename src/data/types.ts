// ─────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

// ─────────────────────────────────────────────
// Главная страница
// ─────────────────────────────────────────────

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaPrimary: CtaButton;
  ctaSecondary: CtaButton;
}

export interface CtaButton {
  label: string;
  href: string;
}

export interface IndustrySegment {
  id: string;
  title: string;
  pain: string;
  solution: string;
  icon: string;
}

export interface TrainingCategory {
  id: string;
  title: string;
  result: string;
  icon: string;
  href: string;
}

export interface WorkFormat {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface TrustFact {
  id: string;
  value: string;
  unit: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  clientLogo: string;
  segmentId: string;
  task: string;
  result: string;
  program: string;
}

export interface Trainer {
  id: string;
  name: string;
  photo: string;
  role: string;
  specializations: string[];
  highlights: string[];
}

export interface ProcessStep {
  id: string;
  order: number;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  company: string;
  direction: string;
  comment?: string;
}

// ─────────────────────────────────────────────
// Каталог тренингов
// ─────────────────────────────────────────────

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export type TrainingFormat = "offline" | "online" | "hybrid";

export type TrainingLevel = "managers" | "line-staff" | "office" | "all";

export interface Training {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  description: string;
  duration: string;
  format: TrainingFormat[];
  level: TrainingLevel;
  keyResult: string;
}

// ─────────────────────────────────────────────
// Страница тренинга (detail)
// ─────────────────────────────────────────────

export interface AudienceCard {
  role: string;
  painPoint: string;
}

export interface ResultMetric {
  value: string;
  label: string;
  description?: string;
}

export interface ProgramModule {
  id: string;
  title: string;
  topics: string[];
}

export interface TrainerCard {
  id: string;
  name: string;
  role: string;
  photo: string;
  credentials: string[];
  profileUrl?: string;
}

export interface PricingInfo {
  price?: number;
  currency?: string;
  label?: string;
  note?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedTraining {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  keyResult: string;
  duration: string;
  format: TrainingFormat[];
}

export interface TrainingDetail extends Training {
  categoryName: string;
  audience: AudienceCard[];
  results: ResultMetric[];
  program: ProgramModule[];
  trainer: TrainerCard;
  pricing: PricingInfo;
  faq: FAQItem[];
  relatedTrainings: RelatedTraining[];
}

// ─────────────────────────────────────────────
// Корпоративные программы
// ─────────────────────────────────────────────

export interface MethodologyStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProgramStage {
  id: string;
  title: string;
  description: string;
  monthStart: number;
  monthEnd: number;
}

export interface CorporateProgram {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  targetAudience: string;
  stages: ProgramStage[];
  includedTrainingIds?: string[];
}

export interface Advantage {
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export interface CaseStudyBrief {
  id: string;
  clientName: string;
  clientLogo: string;
  industry: string;
  challenge: string;
  result: string;
  metric: string;
  metricLabel: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
}

export interface CustomProgramInfo {
  title: string;
  description: string;
  bulletPoints: string[];
}

export interface CorporateHeroContent {
  title: string;
  subtitle: string;
  description: string;
}

// ─────────────────────────────────────────────
// Клиенты и кейсы
// ─────────────────────────────────────────────

export interface CaseIndustrySegment {
  id: string;
  name: string;
  slug: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
}

export interface Client {
  id: string;
  name: string;
  logoUrl: string;
  industryId: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  suffix?: string | null;
}

export interface ProjectPhase {
  id: string;
  title: string;
  description: string;
}

export interface DetailedCaseStudy {
  id: string;
  title: string;
  slug: string;
  clientId: string;
  industryId: string;
  serviceCategoryId: string;
  challenge: string;
  solution: string;
  metrics: CaseStudyMetric[];
  phases: ProjectPhase[];
  imageUrls: string[];
  testimonialId?: string | null;
}

export interface Testimonial {
  id: string;
  caseStudyId: string;
  authorName: string;
  authorRole: string;
  companyName: string;
  text: string;
}

export interface RelatedCaseBrief {
  id: string;
  title: string;
  clientName: string;
  industryName: string;
  challenge: string;
  keyMetric: CaseStudyMetric;
}

// ─────────────────────────────────────────────
// Команда, О нас и Контакты
// ─────────────────────────────────────────────

export interface TeamTrainer {
  id: string;
  slug: string;
  name: string;
  role: string;
  photoUrl: string;
  shortBio: string;
  fullBio: string;
  specializations: string[];
  certifications: string[];
  experienceYears: number;
  trainings: TrainerTraining[];
}

export interface TrainerTraining {
  id: string;
  title: string;
  count: number;
  format: string;
}

export interface CompanyInfo {
  mission: string;
  methodology: string;
  foundedYear: number;
  description: string;
}

export interface Milestone {
  id: string;
  year: number;
  title: string;
  description: string;
}

export interface CompanyMetric {
  label: string;
  value: string;
  suffix?: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  logoUrl: string;
  year?: number;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  legalName: string;
  inn: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}
