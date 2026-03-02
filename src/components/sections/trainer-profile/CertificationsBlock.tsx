import { CheckCircle2 } from "lucide-react";

export function CertificationsBlock({
  certifications,
}: {
  certifications: string[];
}) {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
            Сертификаты и квалификации
          </h2>
        </div>

        <div className="max-w-[800px] space-y-3">
          {certifications.map((cert, i) => (
            <div key={i} className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-black/70 leading-relaxed">
                {cert}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
