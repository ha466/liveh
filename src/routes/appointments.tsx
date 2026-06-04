import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { lab, packages } from "@/data/lab";
import { Phone, MapPin, Clock, Info, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/appointments")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Best Lab in Udumalai | Live Life" },
      { name: "description", content: "Book an appointment at the best lab in Udumalai. Walk-in 24/7 or request free home blood collection in Udumalaipettai. Call 9751504558 or schedule online." },
      { name: "keywords", content: "best lab in udumalai, udumalai lab, book blood test udumalai, lab appointment udumalaipettai, home collection udumalai" },
      { property: "og:title", content: "Book Appointment — Best Lab in Udumalai | Live Life" },
      { property: "og:description", content: "Walk-in 24/7 or request free home collection at the best lab in Udumalai." },
    ],
  }),
  component: () => <Layout><Appointments /></Layout>,
});

function Appointments() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", age: "", gender: "", type: "Walk-in",
    test: "", date: "", time: "", address: "", message: "",
  });

  const handle = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="bg-gradient-hero medical-pattern py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-light-cyan">Book Now</span>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Book an Appointment</h1>
          <p className="tamil mt-2 text-light-cyan text-lg">சந்திப்பு முன்பதிவு</p>
          <p className="mt-4 max-w-xl text-white/95">
            Walk-in any hour, or request a free home collection — we'll confirm by phone shortly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl bg-white p-8 shadow-card">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-success/15 text-success">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="mt-4 text-2xl font-bold">Request received</h2>
                <p className="mt-2 text-muted-foreground">
                  Thank you, {form.name || "patient"}. Our team will call <span className="font-semibold text-navy">{form.phone}</span> shortly to confirm your appointment.
                </p>
                <a href={`tel:+91${lab.phones[0]}`} className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-button">
                  <Phone className="h-4 w-4" /> Or call now: {lab.phones[0]}
                </a>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5">
                <h2 className="text-2xl font-bold">Appointment details</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" required>
                    <input required value={form.name} onChange={(e) => handle("name", e.target.value)} className="input" />
                  </Field>
                  <Field label="Phone Number" required>
                    <input required type="tel" pattern="[0-9]{10}" value={form.phone} onChange={(e) => handle("phone", e.target.value)} className="input" />
                  </Field>
                  <Field label="Age">
                    <input type="number" value={form.age} onChange={(e) => handle("age", e.target.value)} className="input" />
                  </Field>
                  <Field label="Gender">
                    <select value={form.gender} onChange={(e) => handle("gender", e.target.value)} className="input">
                      <option value="">Select</option><option>Male</option><option>Female</option><option>Other</option>
                    </select>
                  </Field>
                  <Field label="Appointment Type" required>
                    <select required value={form.type} onChange={(e) => handle("type", e.target.value)} className="input">
                      <option>Walk-in</option><option>Home Collection</option>
                    </select>
                  </Field>
                  <Field label="Test or Package">
                    <select value={form.test} onChange={(e) => handle("test", e.target.value)} className="input">
                      <option value="">Select a package…</option>
                      {packages.map((p) => <option key={p.slug} value={p.name}>{p.name} — ₹{p.price}</option>)}
                      <option value="Custom">Custom / individual tests</option>
                    </select>
                  </Field>
                  <Field label="Preferred Date">
                    <input type="date" value={form.date} onChange={(e) => handle("date", e.target.value)} className="input" />
                  </Field>
                  <Field label="Preferred Time">
                    <input type="time" value={form.time} onChange={(e) => handle("time", e.target.value)} className="input" />
                  </Field>
                </div>
                {form.type === "Home Collection" && (
                  <Field label="Collection Address" required>
                    <textarea required rows={2} value={form.address} onChange={(e) => handle("address", e.target.value)} className="input" placeholder="House no, street, landmark, area" />
                  </Field>
                )}
                <Field label="Additional Notes">
                  <textarea rows={3} value={form.message} onChange={(e) => handle("message", e.target.value)} className="input" placeholder="Anything we should know?" />
                </Field>
                <button type="submit" className="rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-button hover:brightness-110">
                  Confirm Appointment
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl bg-navy p-6 text-white shadow-card">
              <h3 className="text-lg font-bold text-white">Reach the lab</h3>
              <div className="mt-4 space-y-3 text-sm">
                {lab.phones.map((p, i) => (
                  <a key={p} href={`tel:+91${p}`} className="flex items-center gap-2 hover:text-light-cyan">
                    <Phone className="h-4 w-4 text-gold" /> <span className="font-semibold">{p}</span>
                    <span className="text-xs text-white/95">· {i === 0 ? "Primary" : i === 1 ? "Secondary" : "Tertiary"}</span>
                  </a>
                ))}
                <a href={lab.mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-2 text-white/95 hover:text-light-cyan">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{lab.address.line1}, {lab.address.line2}, {lab.address.line3}, {lab.address.city} — {lab.address.pin}</span>
                </a>
                <div className="flex items-center gap-2 text-white/95">
                  <Clock className="h-4 w-4 text-gold" /> Open 24 hours · 7 days
                </div>
              </div>
              <a
                href={lab.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block rounded-md bg-gold px-4 py-2 text-xs font-semibold text-navy hover:brightness-110"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="rounded-2xl bg-soft-blue p-6 shadow-card">
              <div className="flex items-start gap-2">
                <Info className="mt-0.5 h-5 w-5 text-teal" />
                <div className="text-sm">
                  <div className="font-bold text-navy">Before your test</div>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>• 12 hours fasting for most blood tests</li>
                    <li>• Plain water is allowed during fasting</li>
                    <li>• Inform staff of any medications</li>
                    <li>• Morning collection preferred (6–10 AM)</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border-radius: 8px;
          border: 1px solid var(--color-border);
          background: white;
          padding: 0.625rem 0.75rem;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.2s;
        }
        .input:focus { border-color: var(--color-teal); box-shadow: 0 0 0 3px rgb(26 122 138 / 0.15); }
      `}</style>
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-tamil-accent">*</span>}
      </span>
      {children}
    </label>
  );
}
