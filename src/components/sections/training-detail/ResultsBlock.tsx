import type { ResultMetric } from "@/data/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ResultsBlockProps {
  results: ResultMetric[];
}

export function ResultsBlock({ results }: ResultsBlockProps) {
  if (results.length === 0) return null;

  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Результаты тренинга" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {results.map((metric, i) => (
            <div key={i}>
              <div className="text-5xl lg:text-6xl font-extrabold text-primary tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="font-semibold text-black text-sm mb-1">
                {metric.label}
              </div>
              {metric.description && (
                <p className="text-xs text-black/50 leading-relaxed">
                  {metric.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
