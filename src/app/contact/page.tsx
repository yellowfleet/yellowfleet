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
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <SectionLabel tone="navy">Reach us directly</SectionLabel>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-navy/50">
                  Email
                </dt>
                <dd className="mt-1 text-navy">{companyInfo.email}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-navy/50">
                  Phone
                </dt>
                <dd className="mt-1 text-navy">{companyInfo.phone}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-navy/50">
                  Location
                </dt>
                <dd className="mt-1 text-navy">{companyInfo.address}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
