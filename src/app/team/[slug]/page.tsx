import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProfileHeader } from "@/components/sections/trainer-profile/ProfileHeader";
import { BioBlock } from "@/components/sections/trainer-profile/BioBlock";
import { SpecializationsBlock } from "@/components/sections/trainer-profile/SpecializationsBlock";
import { CertificationsBlock } from "@/components/sections/trainer-profile/CertificationsBlock";
import { TrainerTrainings } from "@/components/sections/trainer-profile/TrainerTrainings";
import { getTrainerBySlug, getAllTrainers } from "@/data/trainers";

interface TrainerProfilePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const trainers = getAllTrainers();
  return trainers.map((trainer) => ({
    slug: trainer.slug,
  }));
}

export async function generateMetadata({
  params,
}: TrainerProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const trainer = getTrainerBySlug(slug);

  if (!trainer) {
    return { title: "Тренер не найден" };
  }

  return {
    title: `${trainer.name} — ${trainer.role} | PDCA Consulting`,
    description: trainer.shortBio,
  };
}

export default async function TrainerProfilePage({
  params,
}: TrainerProfilePageProps) {
  const { slug } = await params;
  const trainer = getTrainerBySlug(slug);

  if (!trainer) {
    notFound();
  }

  return (
    <>
      <ProfileHeader trainer={trainer} />
      <BioBlock fullBio={trainer.fullBio} />
      <SpecializationsBlock specializations={trainer.specializations} />
      <CertificationsBlock certifications={trainer.certifications} />
      <TrainerTrainings trainings={trainer.trainings} />
    </>
  );
}
