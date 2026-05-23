import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { categories, packages, tests } from "@/data/lab";
import { Check, Search, MessageCircle } from "lucide-react";
import { waForPackage, waForTest } from "@/lib/whatsapp";

export const Route = createFileRoute("/tests")({
  head: () => ({
    meta: [
      { title: "Tests & Health Packages — Live Life Lab" },
      { name: "description", content: "Full price list of lab tests and curated health packages from ₹550. Haematology, biochemistry, thyroid, microbiology and more." },
      { property: "og:title", content: "Tests & Health Packages — Live Life Lab" },
      { property: "og:description", content: "Transparent pricing for 2026–2027. Packages from ₹550, individual tests from ₹40." },
    ],
  }),
  component: () => <Layout><TestsPage /></Layout>,
});

function TestsPage() {
  const [tab, setTab] = useState<"packages" | "tests">("packages");
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return tests.filter((t) => {
      if (cat !== "All" && t.category !== cat) return false;
      if (q && !t.name.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [cat, q]);

  return (
    <>
      <section className="bg-gradient-hero medical-pattern py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-light-cyan">Pricing</span>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Tests & Health Packages</h1>
          <p className="tamil mt-2 text-light-cyan text-lg">பரிசோதனைகள் & தொகுப்புகள்</p>
          <p className="mt-4 max-w-2xl text-white/80">
            Transparent pricing for 2026–2027. All packages include a 12-hour fasting requirement for accurate results.
          </p>

          <div className="mt-8 inline-flex rounded-full bg-white/10 p-1 ring-1 ring-white/20">
            {(["packages", "tests"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                  tab === t ? "bg-white text-navy" : "text-white/80 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {tab === "packages" ? (
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <h2 className="mb-8 text-2xl font-bold text-navy">Available Health Packages</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => {
              const savings = p.mrp > 0 ? p.mrp - p.price : 0;
              return (
                <div key={p.slug} className={`relative flex flex-col rounded-2xl p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover ${p.featured ? "bg-navy text-white ring-2 ring-gold" : "bg-white"}`}>
                  {p.highlight && (
                    <span className="absolute -top-3 right-5 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy">{p.highlight}</span>
                  )}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className={`text-xl font-bold ${p.featured ? "text-white" : ""}`}>{p.name}</h3>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${p.featured ? "bg-white/10 text-light-cyan" : "bg-soft-blue text-teal"}`}>
                      {p.tests} TESTS
                    </span>
                  </div>
                  <ul className={`mt-4 space-y-1.5 text-sm ${p.featured ? "text-white/80" : "text-muted-foreground"}`}>
                    {p.includes.map((i) => (
                      <li key={i} className="flex gap-2"><Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-gold" : "text-teal"}`} /> {i}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-bold ${p.featured ? "text-gold" : "text-teal"}`}>₹{p.price.toLocaleString()}</span>
                      {p.mrp > 0 && <span className={`text-sm line-through ${p.featured ? "text-white/50" : "text-muted-foreground"}`}>₹{p.mrp.toLocaleString()}</span>}
                    </div>
                    {savings > 0 && (
                      <div className="mt-1 inline-block rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-bold text-gold">Save ₹{savings.toLocaleString()}</div>
                    )}
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <Link to="/appointments" className={`rounded-md px-3 py-2.5 text-center text-sm font-semibold transition ${p.featured ? "bg-gold text-navy hover:brightness-110" : "bg-primary text-primary-foreground hover:brightness-110"}`}>
                        Book Now
                      </Link>
                      <a
                        href={waForPackage(p.name, p.price)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1 rounded-md bg-[#25D366] px-3 py-2.5 text-sm font-semibold text-white hover:brightness-110"
                      >
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search tests..."
                className="w-full rounded-md border border-input bg-white py-2.5 pl-9 pr-4 text-sm shadow-sm outline-none focus:border-teal focus:ring-1 focus:ring-teal"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                    cat === c ? "bg-navy text-white" : "bg-soft-blue text-navy hover:bg-light-cyan"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-xl bg-soft-blue p-10 text-center text-muted-foreground">No tests found.</div>
          ) : (
            <div className="grid gap-3 md:grid-cols-2">
              {filtered.map((t) => (
                <div key={t.name} className="group flex items-center justify-between gap-4 rounded-lg border-l-4 border-transparent bg-white p-4 shadow-card transition hover:border-teal hover:shadow-card-hover">
                  <div className="min-w-0">
                    <div className="font-semibold text-navy">{t.name}</div>
                    <span className="mt-1 inline-block rounded-full bg-soft-blue px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal">{t.category}</span>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <div className="text-xl font-bold text-teal">₹{t.price}</div>
                    <a
                      href={waForTest(t.name, t.price)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Book ${t.name} on WhatsApp`}
                      className="grid h-9 w-9 place-items-center rounded-md bg-[#25D366] text-white hover:brightness-110"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}
