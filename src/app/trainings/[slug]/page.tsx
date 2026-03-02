import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { trainings, getTrainingBySlug } from "@/data/trainings";
import { TrainingHero } from "@/components/sections/training-detail/TrainingHero";
import { AudienceBlock } from "@/components/sections/training-detail/AudienceBlock";
import { ResultsBlock } from "@/components/sections/training-detail/ResultsBlock";
import { ProgramAccordion } from "@/components/sections/training-detail/ProgramAccordion";
import { TrainerCard } from "@/components/sections/training-detail/TrainerCard";
import { PricingBlock } from "@/components/sections/training-detail/PricingBlock";
import { TrainingFaq } from "@/components/sections/training-detail/TrainingFaq";
import { RelatedTrainings } from "@/components/sections/training-detail/RelatedTrainings";
import { TrainingLeadForm } from "@/components/sections/training-detail/TrainingLeadForm";

// ─────────────────────────────────────────────
// Static generation
// ─────────────────────────────────────────────

export function generateStaticParams() {
  return trainings.map((t) => ({ slug: t.slug }));
}

// ─────────────────────────────────────────────
// SEO metadata
// ─────────────────────────────────────────────

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const training = getTrainingBySlug(slug);

  if (!training) {
    return { title: "Тренинг не найден — PDCA Consulting" };
  }

  return {
    title: `${training.title} — PDCA Consulting`,
    description: training.keyResult,
  };
}

// ─────────────────────────────────────────────
// Page component
// ─────────────────────────────────────────────

export default async function TrainingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const training = getTrainingBySlug(slug);

  if (!training) {
    notFound();
  }

  return (
    <div className="bg-white">
      <TrainingHero
        title={training.title}
        categoryName={training.categoryName}
        description={training.description}
        duration={training.duration}
        format={training.format}
        keyResult={training.keyResult}
      />
      <AudienceBlock audience={training.audience} />
      <ResultsBlock results={training.results} />
      <ProgramAccordion program={training.program} />
      <TrainerCard trainer={training.trainer} />
      <PricingBlock pricing={training.pricing} />
      <TrainingFaq faq={training.faq} />
      <RelatedTrainings trainings={training.relatedTrainings} />
      <TrainingLeadForm />
    </div>
  );
}
