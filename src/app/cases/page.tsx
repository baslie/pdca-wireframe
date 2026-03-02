import type { Metadata } from "next";
import {
  caseStudies,
  clients,
  industrySegments,
  serviceCategories,
  testimonials,
} from "@/data/cases";
import { CasesHero } from "@/components/sections/cases/CasesHero";
import { LogoMarquee } from "@/components/sections/cases/LogoMarquee";
import { CasesFilteredGrid } from "@/components/sections/cases/CasesFilteredGrid";
import { TestimonialsSlider } from "@/components/sections/cases/TestimonialsSlider";
import { CasesCta } from "@/components/sections/cases/CasesCta";

export const metadata: Metadata = {
  title: "Клиенты и кейсы | PDCA Consulting",
  description:
    "Реальные результаты для реальных компаний. Кейсы по бережливому производству, безопасности, продажам и управлению.",
};

export default function CasesPage() {
  return (
    <>
      <CasesHero />
      <LogoMarquee clients={clients} />
      <CasesFilteredGrid
        caseStudies={caseStudies}
        clients={clients}
        industrySegments={industrySegments}
        serviceCategories={serviceCategories}
      />
      <TestimonialsSlider testimonials={testimonials} />
      <CasesCta />
    </>
  );
}
