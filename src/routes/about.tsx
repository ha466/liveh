import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { lab } from "@/data/lab";
import { Award, Cpu, Microscope, Home, Clock, ShieldCheck, Target, Eye } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Live Life Healthcare Lab, Udumalaipettai" },
      { name: "description", content: "Founded by S. SatheeshKumar (DMLT., DXT.), Live Life Healthcare Lab is a CMC-certified diagnostic centre in Udumalaipettai with fully automated testing and 24/7 service." },
    ],
  }),
  component: () => <Layout><About /></Layout>,
});

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
          </div>
          <div className="rounded-2xl bg-soft-blue p-8 shadow-card">
            <div className="text-xs font-semibold uppercase tracking-widest text-teal">Laboratory Director</div>
            <div className="mt-3 text-2xl font-bold text-navy">{lab.owner.name}</div>
            <div className="text-sm text-muted-foreground">{lab.owner.qual}</div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-teal shadow-sm">
              <Award className="h-4 w-4" /> Head of Laboratory Operations & Quality
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              "Our mission is simple — every patient deserves accurate results, delivered on time, at a price they
              can afford."
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft-blue py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-center text-3xl font-bold">Technology & Certifications</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { i: Microscope, t: "Fully Automated Cell Counter", d: "Precise haematology results, every time." },
              { i: Cpu, t: "Computerised Auto Analyser", d: "Reliable biochemistry across all panels." },
              { i: ShieldCheck, t: "CMC Quality Programme", d: "National-grade quality assurance." },
              { i: Home, t: "Free Home Collection", d: "We come to your doorstep." },
            ].map((x) => (
              <div key={x.t} className="rounded-xl bg-white p-6 shadow-card">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-hero text-white">
                  <x.i className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold">{x.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
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
            <p className="mt-3 text-white/80">
              To provide affordable, accurate, and accessible diagnostic laboratory services to every individual
              in Udumalaipettai and surrounding areas — using advanced technology and compassionate care.
            </p>
          </div>
          <div className="rounded-2xl bg-teal p-8 text-white shadow-card-hover">
            <Eye className="h-8 w-8 text-gold" />
            <h3 className="mt-4 text-2xl font-bold text-white">Our Vision</h3>
            <p className="mt-3 text-white/85">
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
