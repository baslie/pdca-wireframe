import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import AppShell from "@/components/layout/AppShell";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "PDCA Consulting — Бережливое производство, безопасность, эффективность",
  description:
    "Комплексные программы по бережливому производству, безопасности и эффективности для промышленных компаний. Работаем в РФ, СНГ и ЕС.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${ibmPlexMono.variable} antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
