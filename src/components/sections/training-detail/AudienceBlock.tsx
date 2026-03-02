import { Users } from "lucide-react";
import type { AudienceCard } from "@/data/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface AudienceBlockProps {
  audience: AudienceCard[];
}

export function AudienceBlock({ audience }: AudienceBlockProps) {
  if (audience.length === 0) return null;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Для кого этот тренинг" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {audience.map((card, i) => (
            <div
              key={i}
              className="group relative p-6 bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-md transition-all"
            >
              {/* Red accent bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="w-11 h-11 bg-primary/10 flex items-center justify-center rounded-sm mb-4">
                <Users className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-black text-sm mb-2 leading-snug">
                {card.role}
              </h3>
              <p className="text-xs text-black/50 leading-relaxed">
                {card.painPoint}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
