import Link from "next/link";
import type { TeamTrainer } from "@/data/types";

export function TeamGrid({ trainers }: { trainers: TeamTrainer[] }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
            Наша команда
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {trainers.map((trainer) => {
            const initials = trainer.name
              .split(" ")
              .map((n) => n[0])
              .join("");

            return (
              <Link
                key={trainer.id}
                href={`/team/${trainer.slug}`}
                className="group relative flex flex-col items-center text-center p-6 bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                {/* Red accent bar on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                {/* Avatar */}
                <div className="w-[120px] h-[120px] shrink-0 rounded-full bg-slate-200 flex items-center justify-center mb-4">
                  <span className="text-3xl font-extrabold text-black/20">
                    {initials}
                  </span>
                </div>

                <h3 className="font-bold text-black text-sm mb-1">
                  {trainer.name}
                </h3>
                <p className="text-xs text-black/50 leading-relaxed mb-3">
                  {trainer.role}
                </p>

                {/* Experience badge */}
                <span className="inline-block px-2.5 py-1 bg-primary-light text-primary text-xs font-semibold rounded-sm">
                  {trainer.experienceYears} лет опыта
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
