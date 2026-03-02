import { MapPin, Phone, Mail, Building2, FileText } from "lucide-react";
import type { ContactInfo } from "@/data/types";

export function ContactDetails({
  contactInfo,
}: {
  contactInfo: ContactInfo;
}) {
  const details = [
    {
      icon: MapPin,
      label: "Адрес",
      value: contactInfo.address,
    },
    {
      icon: Phone,
      label: "Телефон",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: Building2,
      label: "Юридическое лицо",
      value: contactInfo.legalName,
    },
    {
      icon: FileText,
      label: "ИНН",
      value: contactInfo.inn,
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-extrabold text-black tracking-tight mb-6">
        Реквизиты
      </h3>
      <div className="space-y-5">
        {details.map((detail, i) => {
          const Icon = detail.icon;
          return (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 bg-primary-light rounded-sm flex items-center justify-center">
                <Icon
                  className="w-5 h-5 text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <span className="text-xs text-black/40 font-medium block mb-0.5">
                  {detail.label}
                </span>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-sm text-black/70 hover:text-primary transition-colors font-medium"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="text-sm text-black/70 font-medium">
                    {detail.value}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
