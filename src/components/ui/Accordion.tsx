"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string | null;
}

export function Accordion({ items, defaultOpenId = null }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  return (
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
                {item.title}
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
                <div className="px-5 pb-5 text-sm text-black/60 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
