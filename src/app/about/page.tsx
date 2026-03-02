import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании — PDCA Consulting",
  description:
    "PDCA Consulting — команда экспертов в области бережливого производства. Наша миссия, история и ключевые достижения.",
};

import { MissionBlock } from "@/components/sections/about/MissionBlock";
import { TeamGrid } from "@/components/sections/about/TeamGrid";
import { HistoryTimeline } from "@/components/sections/about/HistoryTimeline";
import { CompanyMetrics } from "@/components/sections/about/CompanyMetrics";
import { CertificatesBlock } from "@/components/sections/about/CertificatesBlock";
import { companyInfo, milestones, companyMetrics, certificates } from "@/data/company";
import { getAllTrainers } from "@/data/trainers";

export default function AboutPage() {
  const trainers = getAllTrainers();

  return (
    <>
      <MissionBlock companyInfo={companyInfo} />
      <TeamGrid trainers={trainers} />
      <HistoryTimeline milestones={milestones} />
      <CompanyMetrics metrics={companyMetrics} />
      <CertificatesBlock certificates={certificates} />
    </>
  );
}
