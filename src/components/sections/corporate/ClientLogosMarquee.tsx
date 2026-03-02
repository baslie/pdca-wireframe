"use client";

import { useMemo } from "react";
import { Building2 } from "lucide-react";
import type { ClientLogo } from "@/data/types";

export function ClientLogosMarquee({ logos }: { logos: ClientLogo[] }) {
  const allLogos = useMemo(() => [...logos, ...logos], [logos]);

  return (
    <section className="bg-slate-50 py-12 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm font-semibold text-black/30 uppercase tracking-wider mb-8">
          Нам доверяют
        </h3>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div className="flex animate-marquee">
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.id}-${i}`}
              className="flex items-center justify-center h-12 px-8 shrink-0 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all cursor-default"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-black/40" />
                <span className="text-sm font-semibold text-black/60 whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
