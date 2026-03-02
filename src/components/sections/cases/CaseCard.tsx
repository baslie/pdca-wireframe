import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { DetailedCaseStudy, CaseStudyMetric } from "@/data/types";

interface CaseCardProps {
  caseStudy: DetailedCaseStudy;
  clientName: string;
  industryName: string;
}

export function CaseCard({ caseStudy, clientName, industryName }: CaseCardProps) {
  const keyMetric: CaseStudyMetric | undefined = caseStudy.metrics[0];

  return (
    <Link
      href={`/cases/${caseStudy.slug}`}
      className="group relative block w-full border border-slate-200 bg-white rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
    >
      {/* Animated red top bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="p-5 sm:p-6">
        {/* Client logo placeholder + industry badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded bg-slate-100">
            <span className="text-[10px] font-bold text-black/40 leading-tight text-center">
              {clientName.slice(0, 3)}
            </span>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-secondary bg-slate-100 px-2 py-1 rounded">
            {industryName}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-black mb-2 line-clamp-2">
          {caseStudy.title}
        </h3>

        {/* Challenge excerpt */}
        <p className="text-sm text-black/50 line-clamp-3 mb-4">
          {caseStudy.challenge}
        </p>

        {/* Key metric */}
        {keyMetric && (
          <div className="mb-4">
            <p className="text-2xl font-extrabold text-primary">
              {keyMetric.value}
              {keyMetric.suffix && (
                <span className="text-sm font-medium text-black/40 ml-1">
                  {keyMetric.suffix}
                </span>
              )}
            </p>
            <p className="text-xs text-black/40">{keyMetric.label}</p>
          </div>
        )}

        {/* CTA */}
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
          Подробнее
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </span>
      </div>
    </Link>
  );
}
