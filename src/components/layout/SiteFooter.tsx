import Link from "next/link";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import {
  footerDirections,
  footerCompanyLinks,
  contactPhone,
  contactEmail,
  contactAddress,
} from "@/data/navigation";

const socialLinks = [
  { label: "Telegram", href: "https://t.me/pdca_consulting" },
  { label: "VK", href: "https://vk.com/pdca_consulting" },
  { label: "YouTube", href: "https://youtube.com/@pdca_consulting" },
];

const messengers = [
  { label: "Telegram", href: "https://t.me/pdca_consulting" },
  { label: "WhatsApp", href: "#" },
];

export default function SiteFooter() {
  return (
    <footer className="relative bg-secondary text-white overflow-hidden" style={{ minHeight: "80vh" }}>
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8">
        {/* Top Section - Logo & Description */}
        <div className="mb-16 lg:mb-20 max-w-md">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center overflow-hidden">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <line x1="4" y1="20" x2="20" y2="4" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="4" y1="12" x2="12" y2="4" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
                <line x1="12" y1="20" x2="20" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[17px] font-bold tracking-tight text-white">PDCA</span>
              <span className="text-[11px] font-medium tracking-[0.15em] text-white/60 uppercase">consulting</span>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Комплексные программы по бережливому производству, безопасности и эффективности
            для промышленных компаний. Работаем в России, СНГ и Европе.
          </p>
        </div>

        {/* Middle Section - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16 lg:mb-24">
          {/* Column 1 - Contacts */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-5">
              Контакты
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={`tel:${contactPhone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-white/80 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-white/40 shrink-0" strokeWidth={1.5} />
                  {contactPhone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-2.5 text-sm text-white/80 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-white/40 shrink-0" strokeWidth={1.5} />
                  {contactEmail}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-sm text-white/80">
                  <MapPin className="w-4 h-4 text-white/40 shrink-0" strokeWidth={1.5} />
                  {contactAddress}
                </span>
              </li>
              {messengers.map((m) => (
                <li key={m.label}>
                  <a
                    href={m.href}
                    className="flex items-center gap-2.5 text-sm text-white/80 hover:text-primary transition-colors"
                  >
                    <Send className="w-4 h-4 text-white/40 shrink-0" strokeWidth={1.5} />
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Directions */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-5">
              Направления
            </h3>
            <ul className="space-y-3">
              {footerDirections.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-5">
              Компания
            </h3>
            <ul className="space-y-3">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Social */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-5">
              Мы в сети
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} PDCA Consulting. Все права защищены.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>

      {/* Giant Watermark Text */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-0 right-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <p
          className="text-center font-extrabold uppercase text-white/[0.04] leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(60px, 13vw, 220px)", letterSpacing: "0.05em" }}
        >
          PDCA CONSULTING
        </p>
      </div>
    </footer>
  );
}
