import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Корпоративные программы — PDCA Consulting",
  description:
    "Корпоративные тренинги и программы обучения бережливому производству. Индивидуальный подход, адаптация под задачи компании.",
};

import { CorporateHero } from "@/components/sections/corporate/CorporateHero";
import { MethodologySteps } from "@/components/sections/corporate/MethodologySteps";
import { ProgramCards } from "@/components/sections/corporate/ProgramCards";
import { CustomProgramBlock } from "@/components/sections/corporate/CustomProgramBlock";
import { AdvantagesGrid } from "@/components/sections/corporate/AdvantagesGrid";
import { CorporateCases } from "@/components/sections/corporate/CorporateCases";
import { ClientLogosMarquee } from "@/components/sections/corporate/ClientLogosMarquee";
import { ConsultationForm } from "@/components/sections/corporate/ConsultationForm";
import {
  corporateHero,
  methodologySteps,
  corporatePrograms,
  customProgram,
  advantages,
  caseStudies,
  clientLogos,
} from "@/data/corporate-programs";

export default function CorporatePage() {
  return (
    <>
      <CorporateHero hero={corporateHero} />
      <MethodologySteps steps={methodologySteps} />
      <ProgramCards programs={corporatePrograms} />
      <CustomProgramBlock info={customProgram} />
      <AdvantagesGrid advantages={advantages} />
      <CorporateCases cases={caseStudies} />
      <ClientLogosMarquee logos={clientLogos} />
      <ConsultationForm />
    </>
  );
}
