import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — PDCA Consulting",
  description:
    "Свяжитесь с PDCA Consulting: телефон, email, адрес офиса. Оставьте заявку на консультацию.",
};

import { ContactForm } from "@/components/sections/contacts/ContactForm";
import { ContactDetails } from "@/components/sections/contacts/ContactDetails";
import { SocialLinks } from "@/components/sections/contacts/SocialLinks";
import { MapPlaceholder } from "@/components/sections/contacts/MapPlaceholder";
import { contactInfo, socialLinks } from "@/data/contacts";

export default function ContactsPage() {
  return (
    <>
      {/* Form + Details grid */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ContactForm />
            <ContactDetails contactInfo={contactInfo} />
          </div>
        </div>
      </section>

      <SocialLinks socialLinks={socialLinks} />
      <MapPlaceholder address={contactInfo.address} />
    </>
  );
}
