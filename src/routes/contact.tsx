import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { lab } from "@/data/lab";
import { Phone, MapPin, Clock, Mail, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Live Life Healthcare Lab" },
      { name: "description", content: "Call 9751504558, 9751744558 or 8190004558. Visit us at 14, Aarthi Complex, Kizhpuram, Udumalaipettai — open 24/7." },
      { property: "og:title", content: "Contact — Live Life Healthcare Lab" },
      { property: "og:description", content: "Three 24/7 contact numbers and our Udumalaipettai address." },
    ],
  }),
  component: () => <Layout><Contact /></Layout>,
});

function Contact() {
  const [done, setDone] = useState(false);
  const mapsQ = encodeURIComponent(`${lab.address.line1}, ${lab.address.city}, ${lab.address.pin}`);
  return (
    <>
      <section className="bg-gradient-hero medical-pattern py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-light-cyan">Contact</span>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Get in touch</h1>
          <p className="tamil mt-2 text-light-cyan text-lg">தொடர்பு கொள்ளவும்</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {lab.phones.map((p, i) => (
            <a key={p} href={`tel:+91${p}`} className="group rounded-2xl bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                {i === 0 ? "Primary" : i === 1 ? "Secondary" : "Tertiary"} Contact
              </div>
              <div className="mt-1 text-2xl font-bold text-navy">{p}</div>
              <div className="mt-2 text-sm text-teal">Tap to call</div>
            </a>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-card">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            {done ? (
              <div className="mt-6 rounded-xl bg-success/10 p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-success" />
                <p className="mt-3 font-semibold text-navy">Message received. We'll reach out shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setDone(true); }}
                className="mt-6 space-y-4"
              >
                <input required placeholder="Your name" className="input" />
                <input required type="tel" placeholder="Phone number" className="input" />
                <textarea required rows={5} placeholder="How can we help?" className="input" />
                <button className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-button hover:brightness-110">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl bg-navy p-6 text-white shadow-card">
              <h3 className="text-lg font-bold text-white">Visit the lab</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-start gap-2 text-white/85">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{lab.address.line1}, {lab.address.line2}, {lab.address.line3}, {lab.address.city} — {lab.address.pin}, {lab.address.state}</span>
                </div>
                <div className="flex items-center gap-2 text-white/85"><Clock className="h-4 w-4 text-gold" /> Open 24 hours · 7 days a week</div>
                <div className="flex items-center gap-2 text-white/85"><Mail className="h-4 w-4 text-gold" /> Email coming soon</div>
              </div>
              <a
                href={lab.mapsUrl}
                target="_blank" rel="noreferrer"
                className="mt-5 inline-block rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy hover:brightness-110"
              >
                Get Directions
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-card">
              <iframe
                title="Lab location"
                src={`https://www.google.com/maps?q=${mapsQ}&output=embed`}
                className="h-72 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-hero py-14 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="tamil text-light-cyan">உடனடி உதவிக்கு அழைக்கவும்</p>
          <h3 className="mt-1 text-3xl font-bold text-white md:text-4xl">Call our 24-hour line</h3>
          <a href={`tel:+91${lab.phones[0]}`} className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 text-lg font-bold text-navy shadow-button">
            <Phone className="h-5 w-5" /> {lab.phones[0]}
          </a>
        </div>
      </section>

      <style>{`
        .input { width:100%; border-radius:8px; border:1px solid var(--color-border); background:white; padding:0.7rem 0.85rem; font-size:0.9rem; outline:none; transition:all .2s; }
        .input:focus { border-color: var(--color-teal); box-shadow: 0 0 0 3px rgb(26 122 138 / 0.15); }
      `}</style>
    </>
  );
}
