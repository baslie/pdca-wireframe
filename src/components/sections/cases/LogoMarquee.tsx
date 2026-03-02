"use client";

import { useMemo } from "react";
import type { Client } from "@/data/types";

export function LogoMarquee({ clients }: { clients: Client[] }) {
  const doubled = useMemo(() => [...clients, ...clients], [clients]);

  return (
    <section className="bg-white py-10 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-black/40">
          Нам доверяют
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee gap-8 w-max">
          {doubled.map((c, i) => (
            <div
              key={`${c.id}-${i}`}
              className="flex-shrink-0 flex items-center justify-center w-36 h-14 rounded-md bg-slate-100 px-4"
            >
              <span className="text-xs font-bold text-black/40 truncate">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
