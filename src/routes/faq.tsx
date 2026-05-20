import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { faqs } from "@/data/lab";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Live Life Healthcare Lab" },
      { name: "description", content: "Common questions about lab hours, home collection, fasting, results, and accreditation at Live Life Healthcare Lab." },
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
