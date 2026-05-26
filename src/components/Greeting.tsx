import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

function greetingFor(hour: number) {
  if (hour >= 5 && hour < 12) return { en: "Good Morning!", ta: "காலை வணக்கம்!" };
  if (hour >= 12 && hour < 17) return { en: "Good Afternoon!", ta: "மதிய வணக்கம்!" };
  if (hour >= 17 && hour < 21) return { en: "Good Evening!", ta: "மாலை வணக்கம்!" };
  return { en: "Good Night!", ta: "இரவு வணக்கம்!" };
}

export function Greeting() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [greet, setGreet] = useState({ en: "", ta: "" });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("llh_greeted")) return;
    setGreet(greetingFor(new Date().getHours()));
    setVisible(true);
    const t1 = setTimeout(() => setLeaving(true), 2200);
    const t2 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("llh_greeted", "1");
    }, 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;
  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-gradient-hero medical-pattern transition-all duration-500 ${
        leaving ? "opacity-0 -translate-y-6" : "opacity-100"
      }`}
    >
      <div className="text-center px-6">
        <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-2xl bg-white/15 backdrop-blur">
          <Activity className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-white text-4xl md:text-6xl font-bold">{greet.en}</h1>
        <p className="tamil mt-2 text-light-cyan text-2xl md:text-3xl">{greet.ta}</p>
        <p className="mt-6 max-w-xl text-white/95">
          Welcome to Live Life Healthcare Lab — Quality Diagnostics, Trusted Results.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["24-Hour Lab", "Free Home Collection", "CMC Certified"].map((b) => (
            <span key={b} className="rounded-full bg-white/10 px-3 py-1 text-xs text-light-cyan">{b}</span>
          ))}
        </div>
      </div>
      <button
        onClick={() => { setLeaving(true); setTimeout(() => setVisible(false), 400); sessionStorage.setItem("llh_greeted","1"); }}
        className="absolute bottom-6 right-6 text-white/90 text-sm hover:text-white"
      >
        Skip →
      </button>
    </div>
  );
}
