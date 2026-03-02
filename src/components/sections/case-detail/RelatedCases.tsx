import Link from "next/link";
import type { DetailedCaseStudy, CaseStudyMetric } from "@/data/types";

interface RelatedCasesProps {
  cases: DetailedCaseStudy[];
  clients: { id: string; name: string }[];
  industries: { id: string; name: string }[];
}

export function RelatedCases({
  cases,
  clients,
  industries,
}: RelatedCasesProps) {
  if (cases.length === 0) return null;

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-extrabold text-secondary mb-8">
          Похожие кейсы
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((cs) => {
            const clientName =
              clients.find((c) => c.id === cs.clientId)?.name ?? "";
            const industryName =
              industries.find((s) => s.id === cs.industryId)?.name ?? "";
            const keyMetric: CaseStudyMetric | undefined = cs.metrics[0];

            return (
              <Link
                key={cs.id}
                href={`/cases/${cs.slug}`}
                className="group relative block w-full border border-slate-200 bg-white rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                {/* Animated red top bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-primary">
                      {clientName}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-black/40 bg-slate-100 px-2 py-1 rounded">
                      {industryName}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-black mb-2 line-clamp-2">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-black/50 line-clamp-2 mb-3">
                    {cs.challenge}
                  </p>

                  {keyMetric && (
                    <p className="text-xl font-extrabold text-primary">
                      {keyMetric.value}
                      {keyMetric.suffix && (
                        <span className="text-xs font-medium text-black/40 ml-1">
                          {keyMetric.suffix}
                        </span>
                      )}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
