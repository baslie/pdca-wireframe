import type { NavItem, FooterLink } from "./types";

export const navigationItems: NavItem[] = [
  { label: "Тренинги", href: "/trainings" },
  { label: "Корп. программы", href: "/corporate" },
  { label: "Команда", href: "/team" },
  { label: "Кейсы", href: "/cases" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export const footerDirections: FooterLink[] = [
  { label: "Кайдзен и Бережливое производство", href: "/trainings?category=lean" },
  { label: "Производственная безопасность", href: "/trainings?category=safety" },
  { label: "Продажи и переговоры", href: "/trainings?category=sales" },
  { label: "Управление и Лидерство", href: "/trainings?category=leadership" },
  { label: "Персональная эффективность", href: "/trainings?category=personal" },
];

export const footerCompanyLinks: FooterLink[] = [
  { label: "О нас", href: "/about" },
  { label: "Команда", href: "/team" },
  { label: "Клиенты и кейсы", href: "/cases" },
  { label: "Контакты", href: "/contacts" },
];

export const contactPhone = "+7 (495) 120-45-67";
export const contactEmail = "info@pdca-consulting.ru";
export const contactAddress = "Москва, Россия";
