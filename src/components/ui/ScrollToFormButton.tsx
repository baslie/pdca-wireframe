"use client";

import { ArrowRight } from "lucide-react";

export function ScrollToFormButton() {
  return (
    <button
      onClick={() =>
        document
          .getElementById("training-lead-form")
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold text-sm rounded-sm hover:bg-primary-hover active:scale-[0.98] transition-all"
    >
      Оставить заявку
      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
    </button>
  );
}
