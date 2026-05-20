import { Header } from "./Header";
import { Footer } from "./Footer";
import { Greeting } from "./Greeting";
import { Phone, MessageCircle } from "lucide-react";
import { lab } from "@/data/lab";
import { waGeneric } from "@/lib/whatsapp";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Greeting />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Floating action buttons (visible on every page) */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3">
        <a
          href={waGeneric()}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-button transition hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href={`tel:+91${lab.phones[0]}`}
          aria-label="Call lab now"
          className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-button transition hover:scale-105"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
