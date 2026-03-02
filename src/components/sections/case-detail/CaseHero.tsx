import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type {
  DetailedCaseStudy,
  Client,
  CaseIndustrySegment,
  ServiceCategory,
} from "@/data/types";

interface CaseHeroProps {
  caseStudy: DetailedCaseStudy;
  client: Client;
  industry: CaseIndustrySegment;
  serviceCategory: ServiceCategory;
}

export function CaseHero({
  caseStudy,
  client,
  industry,
  serviceCategory,
}: CaseHeroProps) {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Decorative diagonal lines */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="absolute -right-20 top-0 bottom-0 w-[600px] lg:w-[800px] opacity-[0.08]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-primary"
              style={{
                width: "3px",
                height: "200%",
                transform: "rotate(-35deg)",
                left: `${i * 80 + 40}px`,
                top: "-50%",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Back button */}
        <Link
          href="/cases"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          Все кейсы
        </Link>

        {/* Client name */}
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
          {client.name}
        </p>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white mb-4 max-w-3xl">
          {caseStudy.title}
        </h1>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/80 px-3 py-1.5 rounded">
            {industry.name}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider bg-primary/20 text-primary px-3 py-1.5 rounded">
            {serviceCategory.name}
          </span>
        </div>

        <a
          href="#case-cta-form"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold text-sm rounded-md hover:bg-primary-hover transition-colors"
        >
          Обсудить похожий проект
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
