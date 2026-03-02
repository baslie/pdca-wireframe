"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { CaseStudy } from "@/data/types";

export function CasesSlider({ cases }: { cases: CaseStudy[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.7;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <SectionHeader title="Кейсы и результаты" noMargin />
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-slate-200 rounded-sm flex items-center justify-center text-black/60 hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-slate-200 rounded-sm flex items-center justify-center text-black/60 hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {cases.map((cs) => (
            <div
              key={cs.id}
              className="group snap-start shrink-0 w-[300px] sm:w-[340px] text-left border border-slate-200 rounded-sm bg-white p-6 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="w-full h-10 bg-slate-100 rounded-sm mb-4 flex items-center justify-center">
                <span className="text-xs font-semibold text-black/30 tracking-wide uppercase">
                  {cs.clientName}
                </span>
              </div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                {cs.program}
              </p>
              <h4 className="font-bold text-black text-sm mb-2 leading-snug">
                {cs.task}
              </h4>
              <p className="text-sm text-black/70 leading-relaxed">
                {cs.result}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            Все кейсы <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
