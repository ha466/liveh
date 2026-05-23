import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { lab, packages } from "@/data/lab";
import {
  ShieldCheck, Clock, Home as HomeIcon, Cpu, Phone, MapPin, ArrowRight,
  Droplet, FlaskConical, Activity, HeartPulse, Microscope, Beaker, Check,
  MessageCircle,
} from "lucide-react";
import heroBg from "@/assets/lab/background.png";
import cbcImg from "@/assets/lab/cbc.webp";
import biochemImg from "@/assets/lab/biochem.webp";
import proteinImg from "@/assets/lab/protein.webp";
import { waForPackage } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "24/7 Diagnostic Lab in Udumalaipettai — Live Life" },
      { name: "description", content: "Fully automated diagnostic lab in Udumalaipettai. Free home collection, 24-hour service, health packages from ₹550." },
      { property: "og:title", content: "24/7 Diagnostic Lab in Udumalaipettai — Live Life" },
      { property: "og:description", content: "Free home blood collection. 96+ tests, packages from ₹550. CMC Quality Centre certified." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Droplet, name: "Haematology", desc: "Complete blood counts on automated cell counters." },
  { icon: FlaskConical, name: "Biochemistry", desc: "Organ function & metabolic markers, full panel." },
  { icon: Activity, name: "Thyroid & Hormones", desc: "T3, T4, TSH and advanced hormone testing." },
  { icon: HeartPulse, name: "Diabetes Monitoring", desc: "Targeted panels every 3 months — HbA1C, FBS, PPBS." },
  { icon: Beaker, name: "Liver & Kidney", desc: "Hepatic and renal function profiles." },
  { icon: Microscope, name: "Health Packages", desc: "Mini to Premium — 61 to 96 tests in one visit." },
];

const featured = packages.filter((p) => ["basic", "regular", "executive", "premium"].includes(p.slug));

function HomePage() {
  return (
    <>
      {/* HERO — real lab photo background with navy/teal overlay */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, color-mix(in oklab, var(--navy) 65%, transparent), color-mix(in oklab, var(--teal) 55%, transparent)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "var(--navy)",
        }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-16 pb-24 md:grid-cols-2 md:px-8 md:pt-24 md:pb-32">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold ring-1 ring-gold/40">
              <ShieldCheck className="h-3.5 w-3.5" /> CMC Quality Centre Certified
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-white md:text-6xl">
              Trusted Diagnostic <br /> Laboratory Services
            </h1>
            <p className="tamil mt-3 text-xl text-light-cyan md:text-2xl">
              நம்பகமான நோயறிதல் ஆய்வக சேவைகள்
            </p>
            <p className="mt-6 max-w-lg text-base text-white/85 md:text-lg">
              Accurate, affordable, and accessible. Fully automated testing, 24-hour service,
              and free home sample collection across Udumalaipettai.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/appointments" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy shadow-button transition hover:scale-[1.02]">
                Book Appointment
              </Link>
              <a
                href={`tel:+91${lab.phones[0]}`}
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-button transition hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4" /> Call {lab.phones[0]}
              </a>
              <Link to="/tests" className="rounded-md border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                View Tests
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-light-cyan">
              {["24/7 Open", "Free Home Collection", "Fully Automated", "CMC Certified"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-gold" /> {b}</span>
              ))}
            </div>
          </div>

          {/* Right stat card */}
          <div className="relative hidden md:block">
            <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-teal/40 blur-3xl" />
            <div className="absolute -bottom-8 -right-4 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative rounded-2xl bg-white/10 backdrop-blur p-8 ring-1 ring-white/20 shadow-card-hover">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "24", l: "Hours Open" },
                  { v: "96+", l: "Tests in Premium" },
                  { v: "₹550", l: "Starting Package" },
                  { v: "100%", l: "Automated" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-white/10 p-5 text-center ring-1 ring-white/10">
                    <div className="text-3xl font-bold text-white">{s.v}</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-light-cyan">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-navy/40 p-4 text-sm text-white/80">
                <div className="font-semibold text-white">Need urgent testing?</div>
                <div className="mt-1">Call our 24-hour line — sample collected in minutes.</div>
                <a href={`tel:+91${lab.phones[0]}`} className="mt-2 inline-flex items-center gap-1.5 font-semibold text-gold">
                  <Phone className="h-4 w-4" /> {lab.phones[0]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <section className="bg-teal text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 md:px-8">
          {[
            { v: "24 Hrs", l: "Lab Open" },
            { v: "3", l: "Contact Numbers" },
            { v: "96+", l: "Tests in Top Package" },
            { v: "100%", l: "Automated Testing" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl font-bold md:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-light-cyan">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT with real equipment images */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-2xl bg-soft-blue shadow-card">
              <img src={cbcImg} alt="Biobase CBC Auto Hematology Analyzer" className="h-56 w-full object-contain p-4" />
            </div>
            <div className="overflow-hidden rounded-2xl bg-soft-blue shadow-card">
              <img src={biochemImg} alt="Mispa FAB 120 Auto Biochemistry Analyzer" className="h-40 w-full object-contain p-3" />
            </div>
            <div className="overflow-hidden rounded-2xl bg-soft-blue shadow-card">
              <img src={proteinImg} alt="Mispa i3 Protein Analyzer" className="h-40 w-full object-contain p-3" />
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-teal">About the Lab</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">A diagnostic centre Udumalaipettai trusts.</h2>
            <p className="mt-5 text-muted-foreground">
              Live Life Healthcare Lab combines advanced automated technology with a patient-first approach.
              Every biochemical test is processed on our Mispa FAB 120 Auto Analyser, Mispa i3 Protein Analyser,
              and Biobase 5-part CBC counter — delivering accurate, fast, and reliable results.
            </p>
            <p className="mt-3 text-muted-foreground">
              A 24-hour facility plus free home sample collection makes diagnostic care accessible to elderly,
              bedridden, and busy patients across the region.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-soft-blue py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-teal">Services</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">What we test</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              From routine bloodwork to advanced hormonal and cardiac panels — all processed on automated equipment.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="group rounded-xl bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-teal">Health Packages</div>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Comprehensive, affordable, designed for you</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <div
              key={p.slug}
              className={`relative flex flex-col rounded-2xl p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover ${
                p.featured ? "bg-navy text-white ring-2 ring-gold" : "bg-white"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 right-5 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy">
                  {p.highlight}
                </span>
              )}
              <div className="flex items-start justify-between gap-2">
                <h3 className={`text-lg font-bold ${p.featured ? "text-white" : ""}`}>{p.name}</h3>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${p.featured ? "bg-white/10 text-light-cyan" : "bg-soft-blue text-teal"}`}>
                  {p.tests} TESTS
                </span>
              </div>
              <ul className={`mt-4 space-y-1.5 text-sm ${p.featured ? "text-white/80" : "text-muted-foreground"}`}>
                {p.includes.slice(0, 5).map((i) => (
                  <li key={i} className="flex gap-2"><Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-gold" : "text-teal"}`} /> {i}</li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <div className="flex items-baseline gap-2">
                  <span className={`text-3xl font-bold ${p.featured ? "text-gold" : "text-teal"}`}>₹{p.price.toLocaleString()}</span>
                  {p.mrp > 0 && <span className={`text-sm line-through ${p.featured ? "text-white/50" : "text-muted-foreground"}`}>₹{p.mrp.toLocaleString()}</span>}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link
                    to="/appointments"
                    className={`rounded-md px-3 py-2.5 text-center text-xs font-semibold transition ${
                      p.featured ? "bg-gold text-navy hover:brightness-110" : "bg-primary text-primary-foreground hover:brightness-110"
                    }`}
                  >
                    Book
                  </Link>
                  <a
                    href={waForPackage(p.name, p.price)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1 rounded-md bg-[#25D366] px-3 py-2.5 text-center text-xs font-semibold text-white hover:brightness-110"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/tests" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline">
            See all packages & tests <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-soft-blue py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4 md:px-8">
          {[
            { icon: Clock, t: "24-Hour Laboratory", d: "Walk-in any time, day or night." },
            { icon: HomeIcon, t: "Free Home Collection", d: "Trained phlebotomist at your door." },
            { icon: Cpu, t: "Fully Automated", d: "Cell counter & auto analyser." },
            { icon: ShieldCheck, t: "CMC Certified", d: "National-grade quality." },
          ].map((x) => (
            <div key={x.t} className="rounded-xl bg-white p-6 shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-hero text-white">
                <x.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold">{x.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIABETES */}
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-light-cyan">Special Panels</div>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Diabetes Monitoring Made Simple</h2>
            <p className="mt-3 text-white/80">Advised every 3 months for diabetes patients.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-2">
            {packages.filter((p) => p.slug.startsWith("diabetes")).map((p) => (
              <div key={p.slug} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
                <h3 className="text-xl font-bold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-light-cyan">{p.tests} tests included</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gold">₹{p.price}</span>
                  <span className="text-sm text-white/60 line-through">₹{p.mrp}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link to="/appointments" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-navy">
                    Book Now
                  </Link>
                  <a
                    href={waForPackage(p.name, p.price)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-[#25D366] px-4 py-2 text-sm font-semibold text-white"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="bg-soft-blue py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {lab.phones.map((p, i) => (
              <a key={p} href={`tel:+91${p}`} className="group rounded-xl bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {i === 0 ? "Primary" : i === 1 ? "Secondary" : "Tertiary"}
                    </div>
                    <div className="text-xl font-bold text-navy">{p}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl bg-white p-6 shadow-card md:flex-row md:items-center">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-teal" />
              <div className="text-sm">
                <div className="font-semibold text-navy">{lab.address.line1}, {lab.address.line2}</div>
                <div className="text-muted-foreground">{lab.address.line3}, {lab.address.city} — {lab.address.pin}</div>
              </div>
            </div>
            <a
              href={lab.mapsUrl}
              target="_blank" rel="noreferrer"
              className="rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Home() {
  return <Layout><HomePage /></Layout>;
}
