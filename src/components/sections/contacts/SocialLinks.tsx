import type { SocialLink } from "@/data/types";

const SOCIAL_ABBR: Record<string, string> = {
  telegram: "TG",
  vk: "VK",
  youtube: "YT",
};

export function SocialLinks({
  socialLinks,
}: {
  socialLinks: SocialLink[];
}) {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
            Мы в социальных сетях
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link, i) => {
            const abbr =
              SOCIAL_ABBR[link.icon] ??
              link.platform.slice(0, 2).toUpperCase();
            return (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center w-[100px] h-[100px] border-2 border-slate-200 rounded-sm hover:border-primary transition-colors"
              >
                <span className="text-lg font-extrabold text-black/60 group-hover:text-primary transition-colors">
                  {abbr}
                </span>
                <span className="text-xs text-black/40 mt-1">
                  {link.platform}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
