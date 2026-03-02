"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/data/types";

export function TestimonialsSlider({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (testimonials.length === 0) return null;

  return (
    <section className="bg-secondary-light py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header + nav buttons */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight">
              Отзывы клиентов
            </h2>
            <p className="text-sm text-black/50 mt-1">
              Что говорят о работе с нами
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-md border border-slate-200 text-black/50 hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-md border border-slate-200 text-black/50 hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-[320px] sm:w-[380px] snap-start border border-slate-200 bg-white rounded-lg p-6"
            >
              <Quote
                className="w-8 h-8 text-primary/30 mb-3"
                strokeWidth={1.5}
              />
              <p className="text-sm text-black/70 leading-relaxed line-clamp-6 mb-5">
                {t.text}
              </p>
              <div>
                <p className="text-sm font-bold text-black">{t.authorName}</p>
                <p className="text-xs text-black/40">
                  {t.authorRole}, {t.companyName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
