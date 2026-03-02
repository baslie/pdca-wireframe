import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/types";

export function TestimonialBlock({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <section className="bg-secondary-light py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Quote
            className="w-10 h-10 text-primary/30 mb-4"
            strokeWidth={1.5}
          />
          <blockquote className="text-lg sm:text-xl text-black/70 leading-relaxed mb-6 italic">
            &laquo;{testimonial.text}&raquo;
          </blockquote>
          <div>
            <p className="text-base font-bold text-black">
              {testimonial.authorName}
            </p>
            <p className="text-sm text-black/50">
              {testimonial.authorRole}, {testimonial.companyName}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
