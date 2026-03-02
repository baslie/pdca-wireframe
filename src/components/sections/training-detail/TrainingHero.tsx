import { Clock } from "lucide-react";
import type { TrainingFormat } from "@/data/types";
import { FormatBadge } from "@/components/ui/FormatBadge";
import { ScrollToFormButton } from "@/components/ui/ScrollToFormButton";

interface TrainingHeroProps {
  title: string;
  categoryName: string;
  description: string;
  duration: string;
  format: TrainingFormat[];
  keyResult: string;
}

export function TrainingHero({
  title,
  categoryName,
  description,
  duration,
  format,
  keyResult,
}: TrainingHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative diagonal lines */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="absolute -right-20 top-0 bottom-0 w-[600px] lg:w-[800px] opacity-[0.06]">
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

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          {/* Category badge */}
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-sm mb-5">
            {categoryName}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-secondary mb-5">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-black/60 leading-relaxed mb-6">
            {description}
          </p>

          {/* Meta: format + duration */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {format.map((f) => (
              <FormatBadge key={f} format={f} />
            ))}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-xs font-medium text-black/70 rounded-sm">
              <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
              {duration}
            </span>
          </div>

          {/* Key result */}
          <p className="text-sm text-black/40 leading-relaxed mb-8 lg:mb-10">
            {keyResult}
          </p>

          {/* CTA */}
          <ScrollToFormButton />
        </div>
      </div>
    </section>
  );
}
