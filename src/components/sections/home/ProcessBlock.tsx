import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ProcessStep } from "@/data/types";

export function ProcessBlock({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Как мы работаем" />
        <div className="relative">
          {/* Connecting red line (desktop) */}
          <div className="hidden lg:block absolute top-[42px] left-[60px] right-[60px] h-0.5 bg-primary/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div key={step.id} className="relative text-center lg:text-left">
                <div className="relative z-10 mx-auto lg:mx-0 w-[84px] h-[84px] border-2 border-primary rounded-full flex items-center justify-center bg-white mb-5">
                  <span className="text-2xl font-extrabold text-primary">
                    {step.order}
                  </span>
                </div>

                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute top-[84px] left-1/2 w-0.5 h-6 bg-primary/20 -translate-x-1/2 sm:hidden" />
                )}

                <h4 className="font-bold text-black text-sm mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-black/50 leading-relaxed max-w-[240px] mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
