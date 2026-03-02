import {
  Search,
  FileText,
  GraduationCap,
  Headphones,
  ChevronRight,
} from "lucide-react";
import type { MethodologyStep } from "@/data/types";

const ICON_MAP: Record<string, React.ElementType> = {
  search: Search,
  "file-text": FileText,
  "graduation-cap": GraduationCap,
  headphones: Headphones,
};

export function MethodologySteps({ steps }: { steps: MethodologyStep[] }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
            Процесс работы
          </h2>
          <p className="mt-3 text-sm sm:text-base text-black/50 max-w-2xl">
            Четыре этапа от диагностики до устойчивых результатов
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[42px] left-[60px] right-[60px] h-0.5 bg-primary/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || Search;
              return (
                <div key={step.id} className="relative text-center lg:text-left">
                  {/* Icon circle */}
                  <div className="relative z-10 mx-auto lg:mx-0 w-[84px] h-[84px] border-2 border-primary rounded-full flex items-center justify-center bg-white mb-5">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Mobile connecting line */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden absolute top-[84px] left-1/2 w-0.5 h-8 bg-primary/20 -translate-x-1/2 sm:hidden" />
                  )}

                  {/* Desktop arrow connector */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[34px] -right-2 z-20">
                      <ChevronRight className="w-5 h-5 text-primary/40" />
                    </div>
                  )}

                  <h4 className="font-bold text-black text-sm mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-black/50 leading-relaxed max-w-[240px] mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
