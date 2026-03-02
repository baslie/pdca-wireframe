import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Команда — PDCA Consulting",
  description:
    "Познакомьтесь с командой тренеров и экспертов PDCA Consulting. Сертифицированные специалисты с практическим опытом.",
};

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TeamGrid } from "@/components/sections/about/TeamGrid";
import { getAllTrainers } from "@/data/trainers";

export default function TeamPage() {
  const trainers = getAllTrainers();

  return (
    <>
      <TeamGrid trainers={trainers} />

      {/* CTA Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight mb-4">
              Хотите обсудить программу обучения?
            </h2>
            <p className="text-sm text-black/50 leading-relaxed mb-8">
              Наши эксперты помогут подобрать оптимальный формат и программу под
              задачи вашей компании
            </p>
            <Link
              href="/contacts"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold text-sm rounded-sm hover:bg-primary-hover active:scale-[0.98] transition-all"
            >
              Связаться с нами
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
