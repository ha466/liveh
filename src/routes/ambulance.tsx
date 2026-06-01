import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Phone, MessageCircle, Check, Clock, Shield, Heart, Instagram } from "lucide-react";
import ambulanceAsset from "@/assets/ambulance.jpg.asset.json";

const AMB_PHONES = ["9443472989", "9150113000"];
const OWNER = "T. Murugan";
const QUAL = "DMLT., DXT.";

export const Route = createFileRoute("/ambulance")({
  head: () => ({
    meta: [
      { title: "MK Best Ambulance Udumalpet — 24 Hour Advanced Life Support ICU" },
      {
        name: "description",
        content:
          "MK Best Ambulance, Udumalpet. 24-hour advanced life support mobile ICU with O2, Ventilator, A/C First Aid and VIP Freezer Box. Call 94434 72989.",
      },
      { property: "og:title", content: "MK Best Ambulance Udumalpet — 24 Hour ICU Service" },
      {
        property: "og:description",
        content: "24-hour advanced life support ambulance with ventilator and O2 facility in Udumalpet.",
      },
      { property: "og:image", content: ambulanceAsset.url },
    ],
  }),
  component: AmbulancePage,
});

const features = [
  { icon: Heart, label: "O2 Facility" },
  { icon: Shield, label: "Ventilator" },
  { icon: Check, label: "A/C First Aid" },
  { icon: Clock, label: "VIP Freezer Box" },
];

function AmbulancePage() {
  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, color-mix(in oklab, var(--navy) 78%, transparent), color-mix(in oklab, #c2185b 55%, transparent)), url(${ambulanceAsset.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "var(--navy)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold ring-1 ring-gold/40">
            <Clock className="h-3.5 w-3.5" /> 24 Hours Service
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] md:text-6xl">
            MK Best Ambulance <br /> <span className="text-gold">Udumalpet</span>
          </h1>
          <p className="mt-4 text-lg text-white/95 md:text-2xl">
            24 Hours Advanced Life Support Mobile ICU
          </p>
          <p className="mt-2 text-base text-white/90">
            {OWNER} <span className="text-white/70">— {QUAL}</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {AMB_PHONES.map((p) => (
              <a
                key={p}
                href={`tel:+91${p}`}
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-button transition hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4" /> {p.slice(0, 5)} {p.slice(5)}
              </a>
            ))}
            <a
              href={`https://wa.me/91${AMB_PHONES[0]}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-button transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-soft-blue py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-teal">Onboard Facilities</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Fully equipped mobile ICU</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.label} className="rounded-xl bg-white p-6 text-center shadow-card">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                  <f.icon className="h-7 w-7" />
                </div>
                <div className="mt-4 text-lg font-bold text-navy">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO + CONTACT */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-card-hover">
            <img
              src={ambulanceAsset.url}
              alt="MK Best Ambulance Udumalpet — 24 hour advanced life support mobile ICU"
              width="1080"
              height="1920"
              className="h-auto w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-teal">Contact</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Call us anytime — day or night.</h2>
            <p className="mt-4 text-muted-foreground">
              We respond 24×7 across Udumalpet and surrounding towns. Whether it's an emergency transfer,
              critical care relocation, or a freezer-box service, our team is ready.
            </p>

            <div className="mt-6 space-y-3">
              {AMB_PHONES.map((p) => (
                <a
                  key={p}
                  href={`tel:+91${p}`}
                  className="flex items-center gap-3 rounded-lg bg-navy px-5 py-4 text-white shadow-card transition hover:bg-teal"
                >
                  <Phone className="h-5 w-5 text-gold" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-light-cyan">Emergency</div>
                    <div className="text-xl font-bold">{p.slice(0, 5)} {p.slice(5)}</div>
                  </div>
                </a>
              ))}
              <a
                href="https://instagram.com/best_ambulance"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg bg-white px-5 py-4 text-navy ring-1 ring-border transition hover:bg-soft-blue"
              >
                <Instagram className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Instagram</div>
                  <div className="text-base font-semibold">@best_ambulance</div>
                </div>
              </a>
            </div>

            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline"
            >
              ← Back to Lab
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
