export interface IndustrySegment {
  id: string
  name: string
  slug: string
}

export interface ServiceCategory {
  id: string
  name: string
  slug: string
}

export interface Client {
  id: string
  name: string
  logoUrl: string
  industryId: string
}

export interface CaseStudyMetric {
  label: string
  value: string
  suffix?: string | null
}

export interface ProjectPhase {
  id: string
  title: string
  description: string
}

export interface CaseStudy {
  id: string
  title: string
  clientId: string
  industryId: string
  serviceCategoryId: string
  challenge: string
  solution: string
  metrics: CaseStudyMetric[]
  phases: ProjectPhase[]
  imageUrls: string[]
  testimonialId?: string | null
}

export interface Testimonial {
  id: string
  caseStudyId: string
  authorName: string
  authorRole: string
  companyName: string
  text: string
}

export interface KlientyIKejsyProps {
  industrySegments: IndustrySegment[]
  serviceCategories: ServiceCategory[]
  clients: Client[]
  caseStudies: CaseStudy[]
  testimonials: Testimonial[]

  onCaseClick?: (caseId: string) => void
  onFilterChange?: (filters: {
    industryId?: string | null
    serviceCategoryId?: string | null
  }) => void
  onCtaSubmit?: (data: {
    name: string
    company?: string
    phone: string
    email?: string
    comment?: string
  }) => void
}

export interface RelatedCaseBrief {
  id: string
  title: string
  clientName: string
  industryName: string
  challenge: string
  keyMetric: CaseStudyMetric
}

export interface CaseDetailProps {
  caseStudy: CaseStudy
  client: Client
  industry: IndustrySegment
  serviceCategory: ServiceCategory
  testimonial?: Testimonial | null
  relatedCases: RelatedCaseBrief[]

  onBack?: () => void
  onRelatedCaseClick?: (caseId: string) => void
  onCtaSubmit?: (data: {
    name: string
    company?: string
    phone: string
    email?: string
    comment?: string
  }) => void
}
