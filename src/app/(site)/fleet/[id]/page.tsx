import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFleet, getVesselById } from "@/lib/queries/fleet";
import { PageHeader } from "@/components/sections/PageHeader";
import { VesselImageGallery } from "@/components/sections/VesselImageGallery";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  const fleet = await getFleet();
  return fleet.map((v) => ({ id: v.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const vessel = await getVesselById(id);
  if (!vessel) return {};
  return {
    title: `${vessel.name} | YellowFleet Fleet`,
    description: vessel.description,
  };
}

export default async function VesselPage({ params }: Props) {
  const { id } = await params;
  const vessel = await getVesselById(id);
  if (!vessel) notFound();

  const images = vessel.images?.length ? vessel.images : [vessel.image_url];

  const specs = [
    { label: "Capacity", value: `${vessel.capacity} pax` },
    { label: "Hull material", value: vessel.hull_material ?? "—" },
    { label: "Speed", value: vessel.speed_knots ? `${vessel.speed_knots} kn` : "—" },
    { label: "Hull type", value: vessel.hull_type ?? "—" },
    { label: "Class", value: vessel.class ?? "—" },
    { label: "Length", value: vessel.length_m ? `${vessel.length_m} M` : "—" },
    { label: "Breadth", value: vessel.breadth_m ? `${vessel.breadth_m} M` : "—" },
    { label: "Draft", value: vessel.draft_m ? `${vessel.draft_m} M` : "—" },
    { label: "Air draft", value: vessel.air_draft_m ? `${vessel.air_draft_m} M` : "—" },
    { label: "Freeboard", value: vessel.freeboard_m ? `${vessel.freeboard_m} M` : "—" },
    { label: "DWT", value: vessel.dwt_t ? `${vessel.dwt_t} T` : "—" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Fleet"
        title={vessel.name}
        description={vessel.description}
      />

      {/* Gallery */}
      <section className="bg-navy px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <VesselImageGallery images={images} name={vessel.name} />
        </div>
      </section>

      {/* Description + Specs */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">

          {/* Description */}
          <Reveal>
            <SectionLabel tone="navy">Overview</SectionLabel>
            <p className="mt-6 text-lg leading-relaxed text-navy/80">
              {vessel.fullDescription ?? vessel.description}
            </p>
          </Reveal>

          {/* Specs */}
          <Reveal delay={0.1}>
            <SectionLabel tone="navy">Specifications</SectionLabel>
            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-navy/10">
              {specs.map((spec) => (
                <div key={spec.label} className="bg-white p-5">
                  <dt className="text-xs font-medium uppercase tracking-wide text-navy/50">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-navy">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-offwhite px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-navy sm:text-3xl">
              Interested in the {vessel.name}?
            </h2>
            <p className="mt-3 text-navy/70">
              Get in touch to discuss routes, capacity requirements, or deployment partnerships.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact">Get in touch</Button>
              <Button href="/fleet" variant="outline-dark">Back to fleet</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}