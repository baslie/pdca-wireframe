"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ProgramModule } from "@/data/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ProgramAccordionProps {
  program: ProgramModule[];
}

export function ProgramAccordion({ program }: ProgramAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(
    program[0]?.id ?? null
  );

  if (program.length === 0) return null;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Программа тренинга" />
        <div className="max-w-[800px] space-y-2">
          {program.map((mod, i) => {
            const isOpen = openId === mod.id;
            return (
              <div
                key={mod.id}
                className="border border-slate-200 rounded-sm bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : mod.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-sm text-black leading-snug">
                    Модуль {i + 1}. {mod.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-black/40 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-200"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <ul className="px-5 pb-5 space-y-2">
                      {mod.topics.map((topic, j) => (
                        <li
                          key={j}
                          className="flex gap-2.5 text-sm text-black/60 leading-relaxed"
                        >
                          <span className="text-primary shrink-0">—</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
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
