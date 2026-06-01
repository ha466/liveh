import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { lab } from "@/data/lab";
import logo from "@/assets/lab/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/tests", label: "Tests & Packages" },
  { to: "/appointments", label: "Appointments" },
  { to: "/ambulance", label: "Ambulance" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);


  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled ? "bg-white/95 backdrop-blur shadow-card" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Live Life Healthcare Lab logo" className="h-11 w-11 rounded-lg object-contain bg-white ring-1 ring-border" />
          <div className="leading-tight">
            <div className="text-[15px] font-bold text-navy">{lab.name}</div>
            <div className="tamil text-[11px] text-tamil-accent">{lab.nameTa}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-soft-blue hover:text-navy"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-teal bg-soft-blue" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:+91${lab.phones[0]}`}
            className="flex items-center gap-1.5 text-sm font-medium text-navy hover:text-teal"
          >
            <Phone className="h-4 w-4" /> {lab.phones[0]}
          </a>
          <Link
            to="/appointments"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-button transition hover:brightness-110"
          >
            Book Appointment
          </Link>
        </div>

        <button
          aria-label="Open menu"
          className="rounded-md p-2 text-navy lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-navy lg:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <div className="text-white font-bold">{lab.name}</div>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-white p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col px-5 pt-6 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-lg font-medium text-white/90 hover:bg-white/10"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/appointments"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-lg bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
            >
              Book Appointment
            </Link>
            <a href={`tel:+91${lab.phones[0]}`} className="mt-2 rounded-lg border border-white/30 px-4 py-3 text-center text-white">
              Call {lab.phones[0]}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
