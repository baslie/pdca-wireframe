import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  caseStudies,
  clients,
  industrySegments,
  serviceCategories,
  getCaseBySlug,
  getClientById,
  getTestimonialByCaseId,
} from "@/data/cases";
import { CaseHero } from "@/components/sections/case-detail/CaseHero";
import { ChallengeBlock } from "@/components/sections/case-detail/ChallengeBlock";
import { SolutionBlock } from "@/components/sections/case-detail/SolutionBlock";
import { PhasesTimeline } from "@/components/sections/case-detail/PhasesTimeline";
import { MetricsGrid } from "@/components/sections/case-detail/MetricsGrid";
import { ImageGallery } from "@/components/sections/case-detail/ImageGallery";
import { TestimonialBlock } from "@/components/sections/case-detail/TestimonialBlock";
import { RelatedCases } from "@/components/sections/case-detail/RelatedCases";
import { CaseCtaForm } from "@/components/sections/case-detail/CaseCtaForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);
  if (!caseStudy) {
    return { title: "Кейс не найден | PDCA Consulting" };
  }
  const client = getClientById(caseStudy.clientId);
  return {
    title: `${caseStudy.title} | ${client?.name ?? ""} | PDCA Consulting`,
    description: caseStudy.challenge.slice(0, 160),
  };
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);
  if (!caseStudy) notFound();

  const client = getClientById(caseStudy.clientId);
  if (!client) notFound();

  const industry = industrySegments.find((s) => s.id === caseStudy.industryId);
  if (!industry) notFound();

  const serviceCategory = serviceCategories.find(
    (c) => c.id === caseStudy.serviceCategoryId
  );
  if (!serviceCategory) notFound();

  const testimonial = caseStudy.testimonialId
    ? getTestimonialByCaseId(caseStudy.id)
    : undefined;

  // Related cases: same industry or service category, exclude current, max 3
  const relatedCases = caseStudies
    .filter(
      (cs) =>
        cs.id !== caseStudy.id &&
        (cs.industryId === caseStudy.industryId ||
          cs.serviceCategoryId === caseStudy.serviceCategoryId)
    )
    .slice(0, 3);

  return (
    <>
      <CaseHero
        caseStudy={caseStudy}
        client={client}
        industry={industry}
        serviceCategory={serviceCategory}
      />
      <ChallengeBlock text={caseStudy.challenge} />
      <SolutionBlock text={caseStudy.solution} />
      <PhasesTimeline phases={caseStudy.phases} />
      <MetricsGrid metrics={caseStudy.metrics} />
      <ImageGallery images={caseStudy.imageUrls} />
      {testimonial && <TestimonialBlock testimonial={testimonial} />}
      <RelatedCases
        cases={relatedCases}
        clients={clients}
        industries={industrySegments}
      />
      <CaseCtaForm />
    </>
  );
}
