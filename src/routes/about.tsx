import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { lab } from "@/data/lab";
import { Award, ShieldCheck, Home, Clock, Target, Eye, MapPin } from "lucide-react";
import owner from "@/assets/lab/owner.png";
import cbc from "@/assets/lab/cbc.webp";
import biochem from "@/assets/lab/biochem.webp";
import protein from "@/assets/lab/protein.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Live Life Healthcare Lab" },
      { name: "description", content: "CMC-certified diagnostic centre in Udumalaipettai founded by S. SatheeshKumar (DMLT., DXT.). 24/7 service, fully automated testing." },
      { property: "og:title", content: "About — Live Life Healthcare Lab" },
      { property: "og:description", content: "CMC-certified diagnostic centre in Udumalaipettai. 24/7 service, fully automated testing." },
    ],
  }),
  component: () => <Layout><About /></Layout>,
});

const equipment = [
  {
    img: cbc,
    name: "5-Part CBC Auto Hematology Analyzer",
    desc: "Biobase fully automated cell counter for precise CBC, ESR and platelet studies.",
  },
  {
    img: biochem,
    name: "Mispa FAB 120 Auto Biochemistry Analyzer",
    desc: "Fully automatic biochemistry analyzer for lipid, liver, kidney and diabetic panels.",
  },
  {
    img: protein,
    name: "Mispa i3 Protein Analyzer",
    desc: "Immunoturbidimetric protein analyzer for HbA1C, CRP, microalbumin and specific proteins.",
  },
];

function About() {
  return (
    <>
      <section className="bg-gradient-hero medical-pattern py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-light-cyan">About</span>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">About Live Life Healthcare Lab</h1>
          <p className="tamil mt-3 text-light-cyan text-xl">எங்களைப் பற்றி</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Our story</h2>
            <p className="mt-5 text-muted-foreground">
              Live Life Healthcare Lab is a trusted diagnostic and pathology laboratory located in the heart of
              Udumalaipettai, Tamil Nadu. Founded and operated by S. SatheeshKumar (DMLT., DXT.), the lab is a
              proud participant in the prestigious CMC Quality Centre Programme — ensuring every test we run meets
              national quality standards.
            </p>
            <p className="mt-4 text-muted-foreground">
              We combine advanced automated technology with a patient-first approach. A 24-hour facility plus free
              home sample collection makes diagnostic care accessible to elderly, bedridden, and busy patients —
              any hour, any day.
            </p>
            <a
              href={lab.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-button hover:brightness-110"
            >
              <MapPin className="h-4 w-4" /> View on Google Maps
            </a>
          </div>

          <div className="rounded-2xl bg-soft-blue p-6 shadow-card">
            <div className="overflow-hidden rounded-xl bg-white">
              <img
                src={owner}
                alt={`${lab.owner.name}, Laboratory Director`}
                className="h-72 w-full object-cover object-top"
              />
            </div>
            <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-teal">Laboratory Director</div>
            <div className="mt-1 text-2xl font-bold text-navy">{lab.owner.name}</div>
            <div className="text-sm text-muted-foreground">{lab.owner.qual}</div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-teal shadow-sm">
              <Award className="h-4 w-4" /> Head of Laboratory Operations & Quality
            </div>
            <p className="mt-4 text-sm italic text-muted-foreground">
              "Our mission is simple — every patient deserves accurate results, delivered on time, at a price they
              can afford."
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft-blue py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-teal">Our Equipment</div>
            <h2 className="mt-2 text-3xl font-bold">Fully Automated Diagnostic Technology</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Every test is processed on calibrated, fully automated analysers — no manual readings, no human error.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {equipment.map((e) => (
              <div key={e.name} className="overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
                <div className="aspect-[4/3] overflow-hidden bg-soft-blue">
                  <img src={e.img} alt={e.name} className="h-full w-full object-contain p-4" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-navy">{e.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-navy p-8 text-white shadow-card-hover">
            <Target className="h-8 w-8 text-gold" />
            <h3 className="mt-4 text-2xl font-bold text-white">Our Mission</h3>
            <p className="mt-3 text-white/90">
              To provide affordable, accurate, and accessible diagnostic laboratory services to every individual
              in Udumalaipettai and surrounding areas — using advanced technology and compassionate care.
            </p>
          </div>
          <div className="rounded-2xl bg-teal p-8 text-white shadow-card-hover">
            <Eye className="h-8 w-8 text-gold" />
            <h3 className="mt-4 text-2xl font-bold text-white">Our Vision</h3>
            <p className="mt-3 text-white/95">
              To be the most trusted quality diagnostic centre in the region — delivering fast, reliable results
              that help doctors and patients make informed health decisions.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-soft-blue px-4 py-2 text-teal font-semibold"><Clock className="h-4 w-4" /> 24-Hour Facility</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-soft-blue px-4 py-2 text-teal font-semibold"><Home className="h-4 w-4" /> Free Home Collection</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-soft-blue px-4 py-2 text-teal font-semibold"><ShieldCheck className="h-4 w-4" /> CMC Certified</span>
        </div>
      </section>
    </>
  );
}
