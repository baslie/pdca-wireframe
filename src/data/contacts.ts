import type { ContactInfo, SocialLink } from "./types";

export const contactInfo: ContactInfo = {
  address: "г. Москва, ул. Большая Ордынка, д. 40, стр. 4, офис 312",
  phone: "+7 (495) 120-45-67",
  email: "info@pdca-consulting.ru",
  legalName: "ООО «ПДКА Консалтинг»",
  inn: "7725123456",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "Telegram",
    url: "https://t.me/pdca_consulting",
    icon: "telegram",
  },
  {
    platform: "VK",
    url: "https://vk.com/pdca_consulting",
    icon: "vk",
  },
  {
    platform: "YouTube",
    url: "https://youtube.com/@pdca_consulting",
    icon: "youtube",
  },
];
