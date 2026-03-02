import { CheckCircle2 } from "lucide-react";
import type { TrainerCard as TrainerCardType } from "@/data/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface TrainerCardProps {
  trainer: TrainerCardType;
}

export function TrainerCard({ trainer }: TrainerCardProps) {
  const initials = trainer.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Тренер" />
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start bg-white border border-slate-200 rounded-sm p-6 lg:p-8 max-w-[800px]">
          {/* Photo placeholder — circle with initials */}
          <div className="w-20 h-20 shrink-0 rounded-full bg-slate-200 flex items-center justify-center">
            <span className="text-2xl font-extrabold text-black/20">
              {initials}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-black text-base mb-1">
              {trainer.name}
            </h3>
            <p className="text-sm text-primary font-medium mb-4">
              {trainer.role}
            </p>

            <ul className="space-y-2">
              {trainer.credentials.map((cred, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm text-black/60 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" />
                  {cred}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
