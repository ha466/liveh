import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, ShieldCheck } from "lucide-react";
import { lab } from "@/data/lab";
import logo from "@/assets/lab/logo.png";

export function Footer() {
  return (
    <footer className="bg-navy text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Live Life Healthcare Lab" className="h-11 w-11 rounded-lg bg-white object-contain p-1" />
            <div className="leading-tight">
              <div className="font-bold text-white">{lab.name}</div>
              <div className="tamil text-xs text-light-cyan">{lab.nameTa}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Quality diagnostic services with free home sample collection — open 24 hours, every day.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" /> CMC Quality Centre Certified
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-light-cyan">Home</Link></li>
            <li><Link to="/about" className="hover:text-light-cyan">About</Link></li>
            <li><Link to="/tests" className="hover:text-light-cyan">Tests & Packages</Link></li>
            <li><Link to="/appointments" className="hover:text-light-cyan">Book Appointment</Link></li>
            <li><Link to="/faq" className="hover:text-light-cyan">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-light-cyan">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            {lab.phones.map((p) => (
              <li key={p}>
                <a href={`tel:+91${p}`} className="inline-flex items-center gap-2 hover:text-light-cyan">
                  <Phone className="h-4 w-4 text-teal" /> {p}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-teal" /> Open 24 hours, 7 days</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Address</h4>
          <p className="flex gap-2 text-sm leading-relaxed">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
            <span>
              {lab.address.line1},<br />
              {lab.address.line2},<br />
              {lab.address.line3},<br />
              {lab.address.city} — {lab.address.pin}
            </span>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-white/60 md:px-8">
          © {new Date().getFullYear()} {lab.name}. All rights reserved. · Operated by {lab.owner.name} ({lab.owner.qual})
        </div>
      </div>
    </footer>
  );
}
