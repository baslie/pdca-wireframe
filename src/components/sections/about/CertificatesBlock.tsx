import type { Certificate } from "@/data/types";

export function CertificatesBlock({
  certificates,
}: {
  certificates: Certificate[];
}) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
            Аккредитации и сертификаты
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col items-center text-center p-6 bg-white border border-slate-200 rounded-sm hover:shadow-md transition-all"
            >
              {/* Logo placeholder */}
              <div className="w-16 h-16 bg-slate-100 rounded-sm flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all">
                <span className="text-xs font-bold text-black/30 uppercase">
                  {cert.issuer
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 3)}
                </span>
              </div>

              <h3 className="font-bold text-black text-sm mb-1 leading-snug">
                {cert.name}
              </h3>
              <p className="text-xs text-black/50">{cert.issuer}</p>
              {cert.year && (
                <span className="mt-2 text-xs text-primary font-medium">
                  {cert.year}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
