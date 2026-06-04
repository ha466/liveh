import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { faqs } from "@/data/lab";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Best Lab in Udumalai | Live Life Healthcare" },
      { name: "description", content: "Frequently asked questions about the best lab in Udumalai. Answers about hours, home collection, fasting, results, and CMC accreditation at Live Life Healthcare Lab, Udumalaipettai." },
      { name: "keywords", content: "best lab in udumalai, udumalai lab, lab faq udumalai, blood test questions udumalaipettai, home collection udumalai" },
      { property: "og:title", content: "FAQ — Best Lab in Udumalai | Live Life Healthcare" },
      { property: "og:description", content: "Common questions about the best lab in Udumalai. Hours, home collection, fasting and results." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: () => <Layout><FAQ /></Layout>,
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="bg-gradient-hero medical-pattern py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-light-cyan">Help</span>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Frequently Asked Questions</h1>
          <p className="tamil mt-2 text-light-cyan text-lg">அடிக்கடி கேட்கப்படும் கேள்விகள்</p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-16 md:px-8">
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="overflow-hidden rounded-xl bg-white shadow-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-navy">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-teal transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
