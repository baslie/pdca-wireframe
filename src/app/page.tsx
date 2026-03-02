import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDCA Consulting — программы по бережливому производству",
  description:
    "Тренинги, корпоративные программы и консалтинг в области бережливого производства. Практический опыт, сертифицированные тренеры, измеримые результаты.",
};

import {
  heroContent,
  industrySegments,
  trainingCategories,
  workFormats,
  trustFacts,
  caseStudies,
  trainers,
  processSteps,
  faqItems,
} from "@/data/home";

import { HeroBlock } from "@/components/sections/home/HeroBlock";
import { SegmentsBlock } from "@/components/sections/home/SegmentsBlock";
import { CategoriesBlock } from "@/components/sections/home/CategoriesBlock";
import { FormatsBlock } from "@/components/sections/home/FormatsBlock";
import { TrustBlock } from "@/components/sections/home/TrustBlock";
import { CasesSlider } from "@/components/sections/home/CasesSlider";
import { TrainersBlock } from "@/components/sections/home/TrainersBlock";
import { ProcessBlock } from "@/components/sections/home/ProcessBlock";
import { FaqBlock } from "@/components/sections/home/FaqBlock";
import { CtaFormBlock } from "@/components/sections/home/CtaFormBlock";

export default function HomePage() {
  return (
    <div>
      <HeroBlock hero={heroContent} />
      <SegmentsBlock segments={industrySegments} />
      <CategoriesBlock categories={trainingCategories} />
      <FormatsBlock formats={workFormats} />
      <TrustBlock facts={trustFacts} />
      <CasesSlider cases={caseStudies} />
      <TrainersBlock trainers={trainers} />
      <ProcessBlock steps={processSteps} />
      <FaqBlock items={faqItems} />
      <CtaFormBlock />
    </div>
  );
}
