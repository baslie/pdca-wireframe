import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { TeamTrainer } from "@/data/types";

export function ProfileHeader({ trainer }: { trainer: TeamTrainer }) {
  const initials = trainer.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/team"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Назад к команде
        </Link>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
          {/* Avatar */}
          <div className="w-[200px] h-[200px] shrink-0 rounded-full bg-slate-200 flex items-center justify-center">
            <span className="text-5xl font-extrabold text-black/20">
              {initials}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight mb-2">
              {trainer.name}
            </h1>
            <p className="text-base text-black/60 leading-relaxed mb-4">
              {trainer.role}
            </p>
            <span className="inline-block px-3 py-1.5 bg-primary-light text-primary text-sm font-semibold rounded-sm">
              {trainer.experienceYears} лет опыта
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
