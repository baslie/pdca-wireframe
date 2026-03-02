export interface MethodologyStep {
  id: string
  title: string
  description: string
  icon: string
}

export interface ProgramStage {
  id: string
  title: string
  description: string
  monthStart: number
  monthEnd: number
}

export interface CorporateProgram {
  id: string
  title: string
  slug: string
  description: string
  duration: string
  targetAudience: string
  stages: ProgramStage[]
  includedTrainingIds?: string[]
}

export interface Advantage {
  title: string
  description: string
  stat?: string
  statLabel?: string
}

export interface CaseStudyBrief {
  id: string
  clientName: string
  clientLogo: string
  industry: string
  challenge: string
  result: string
  metric: string
  metricLabel: string
}

export interface ClientLogo {
  id: string
  name: string
  logo: string
}

export interface CustomProgramInfo {
  title: string
  description: string
  bulletPoints: string[]
}

export interface HeroContent {
  title: string
  subtitle: string
  description: string
}

export interface KorporativnyeProgrammyProps {
  hero: HeroContent
  methodology: MethodologyStep[]
  programs: CorporateProgram[]
  customProgram: CustomProgramInfo
  advantages: Advantage[]
  cases: CaseStudyBrief[]
  clientLogos: ClientLogo[]

  onSubmitConsultation?: (data: {
    name: string
    company?: string
    phone: string
    email?: string
    comment?: string
  }) => void
  onProgramClick?: (programId: string) => void
  onCaseClick?: (caseId: string) => void
  onScrollToForm?: () => void
}
