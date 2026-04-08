import Link from "next/link";

import Hero from "@/components/tracker/Hero"
import Path from "@/components/tracker/Path"
import Work from "@/components/tracker/Work"

// ── Stats ───────────────────────────────────────────────────────────────────
const stats = [
  { num: "50+",  label: "Tutorials"      },
  { num: "200+", label: "Challenges"     },
  { num: "24/7", label: "Progress Tracking" },
  { num: "100%", label: "Self-Paced"     },
  
];


// ── Page ────────────────────────────────────────────────────────────────────
export default function ProgressHubPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 pt-20 overflow-x-hidden">
      
      <Hero />
      
      {/* ── Stats strip ───────────────────────────────────── */}
      <div className="border-y border-white/5 -mt-5 py-8">
        <div className="flex justify-center gap-12 md:gap-20 flex-wrap px-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="block text-3xl font-extrabold text-brand-accent font-mono">{s.num}</span>
              <span className="text-[11px] text-slate-500 tracking-widest uppercase font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Work />
      <Path />
      
      {/* ── Final CTA ─────────────────────────────────────── */}
      {/* <section className="relative text-center py-10 px-6">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-accent-500/8 blur-[100px] rounded-full pointer-events-none -z-10" />
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Ready to start<br />
          <span className="text-brand-accent">your first path?</span>
        </h2>
        <p className="text-slate-500 text-base mb-10 font-light">
          Pick a topic. Follow the path. Track every step.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="#"
            className="bg-brand-accent hover:bg-transparent hover:text-brand-accent border-2 border-brand-accent-500 text-black font-bold px-10 py-4 rounded-2xl transition-all duration-300 text-base"
          >
            Browse Learning Paths
          </Link>
          <Link
            href="/pricing"
            className="bg-transparent hover:border-brand-accent-hover hover:text-brand-accent border-2 border-white/10 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 text-base"
          >
            View Plans
          </Link>
        </div>
      </section> */}

    </div>
  );
}