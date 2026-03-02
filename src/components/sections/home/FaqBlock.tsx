"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/types";

export function FaqBlock({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-black mb-10 tracking-tight text-center">
          Частые вопросы
        </h2>
        <div className="space-y-2">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-slate-200 rounded-sm bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-sm text-black leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-black/40 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-200"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-black/60 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
