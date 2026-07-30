import { Metadata } from "next";
import { companyInfo } from "@/content/company";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: `Contact | ${companyInfo.name}`,
  description: "Get in touch with the YellowFleet team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a conversation"
        description="Pilot routes, partnerships, or government infrastructure initiatives — we'd like to hear from you."
      />

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-2xl ">
          

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
