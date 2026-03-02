import {
  Factory,
  Truck,
  Store,
  ChevronRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { IndustrySegment } from "@/data/types";

const ICON_MAP: Record<string, React.ElementType> = {
  factory: Factory,
  truck: Truck,
  store: Store,
};

export function SegmentsBlock({ segments }: { segments: IndustrySegment[] }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Кому помогаем" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
          {segments.map((seg) => {
            const Icon = ICON_MAP[seg.icon] || Factory;
            return (
              <div
                key={seg.id}
                className="group relative text-left p-6 lg:p-8 bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="w-11 h-11 bg-primary/10 flex items-center justify-center rounded-sm mb-5">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  {seg.title}
                </h3>
                <p className="text-sm text-black/50 mb-3 leading-relaxed">
                  {seg.pain}
                </p>
                <p className="text-sm text-black/80 leading-relaxed">
                  {seg.solution}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее{" "}
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
