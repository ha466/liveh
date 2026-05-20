import { Header } from "./Header";
import { Footer } from "./Footer";
import { Greeting } from "./Greeting";
import { Phone } from "lucide-react";
import { lab } from "@/data/lab";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Greeting />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <a
        href={`tel:+91${lab.phones[0]}`}
        aria-label="Call lab"
        className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-button transition hover:scale-105 lg:hidden"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
