import type { PricingInfo } from "@/data/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollToFormButton } from "@/components/ui/ScrollToFormButton";

interface PricingBlockProps {
  pricing: PricingInfo;
}

export function PricingBlock({ pricing }: PricingBlockProps) {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Стоимость" />
        <div className="bg-white border border-slate-200 rounded-sm p-6 lg:p-8 max-w-[600px]">
          {pricing.price ? (
            <>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight">
                  {new Intl.NumberFormat("ru-RU").format(pricing.price)}
                </span>
                {pricing.currency && (
                  <span className="text-2xl font-bold text-secondary">
                    {pricing.currency}
                  </span>
                )}
              </div>
              {pricing.label && (
                <p className="text-sm font-medium text-black/60 mb-2">
                  {pricing.label}
                </p>
              )}
              {pricing.note && (
                <p className="text-xs text-black/40 leading-relaxed mb-6">
                  {pricing.note}
                </p>
              )}
            </>
          ) : (
            <div className="mb-6">
              <p className="text-2xl font-extrabold text-secondary mb-2">
                Стоимость по запросу
              </p>
              {pricing.note && (
                <p className="text-sm text-black/50 leading-relaxed">
                  {pricing.note}
                </p>
              )}
            </div>
          )}

          <ScrollToFormButton />
        </div>
      </div>
    </section>
  );
}
