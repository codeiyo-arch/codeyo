import Link from "next/link";
import { ShieldCheck, Eye, Lock, Database, Terminal, Fingerprint, Activity } from "lucide-react";

const privacySections = [
  {
    id: "data-collection",
    icon: <Database className="text-[#10B981]" size={22} />,
    title: "Data Collection",
    label: "INPUT_STREAM",
    desc: "We collect minimal telemetry required to provide a professional coding experience. This includes your username, email, and coding progress (Points, challenges completed, and code snippets) to ensure persistent sessions across any hardware."
  },
  {
    id: "usage",
    icon: <Fingerprint className="text-[#10B981]" size={22} />,
    title: "How We Use Data",
    label: "PROCESSING_LOGIC",
    desc: "Your data is used solely to track your learning journey and generate your performance dashboard. We operate on a 'Zero-Sale' policy: your personal information is never shared with third-party advertisers."
  },
  {
    id: "security",
    icon: <Lock className="text-[#10B981]" size={22} />,
    title: "Code Security",
    label: "ENCRYPTION_LAYER",
    desc: "The code you write in Codeiyo Studio is private by default. We utilize AES-256 encryption at rest and TLS 1.3 in transit to protect your intellectual property from unauthorized access."
  },
  {
    id: "compliance",
    icon: <ShieldCheck className="text-[#10B981]" size={22} />,
    title: "Student Safety",
    label: "COMPLIANCE_v1",
    desc: "Designed for Grades 9-12, we prioritize a safe environment. We follow global best practices for educational data privacy, ensuring school-integrated accounts are managed with strict institutional oversight."
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 pt-24 selection:bg-[#10B981]/30">
      
      {/* ── Background Decorative Grid ───────────────────────────────── */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#10B981 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="relative z-10">
        {/* ── Header / Hero ────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
                  <span
          aria-hidden
          className="pointer-events-none select-none absolute -top-4 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/2 leading-none whitespace-nowrap"
        >
          PRIVACY.
        </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-500">
                  Secure Protocol Active
                </span>
              </div>
              <h1 className="text-[clamp(40px,7vw,80px)] font-black tracking-tighter text-white leading-[0.9] mb-8">
                Privacy <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-400">
                  Protocol.
                </span>
              </h1>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                At Codeiyo, we treat your data like our own source code: <span className="text-brand-accent">Protected, encrypted, and private.</span> This protocol outlines how we safeguard your digital workspace.
              </p>
            </div>
            
            {/* System Info Block */}
            <div className="hidden lg:block p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm min-w-[280px]">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                <span className="text-[10px] font-mono text-slate-500">SYSTEM_STATUS</span>
                <Activity size={12} className="text-[#10B981]" />
              </div>
              <div className="space-y-3 font-mono text-[11px]">
                <div className="flex justify-between"><span className="text-slate-500 italic">Encryption</span> <span className="text-slate-300">AES-256</span></div>
                <div className="flex justify-between"><span className="text-slate-500 italic">Version</span> <span className="text-slate-300">0.0.1-Stable</span></div>
                <div className="flex justify-between"><span className="text-slate-500 italic">Region</span> <span className="text-slate-300">PK</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Main Content Grid ─────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-20">
            
            {/* Sidebar Sticky Nav */}

            
            <aside className="lg:sticky lg:top-32 h-fit space-y-12">
              <nav className="space-y-2">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6 font-mono">Index</p>
                {privacySections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="flex items-center gap-3 text-sm text-slate-500 hover:text-[#10B981] transition-all group py-1">
                    <span className="h-px w-4 bg-white/10 group-hover:w-6 group-hover:bg-[#10B981] transition-all" />
                    {s.title}
                  </a>
                ))}
              </nav>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#10B981]/10 to-transparent border border-[#10B981]/10">
                <p className="text-[11px] text-[#10B981] font-bold uppercase mb-2">Commit Note</p>
                <p className="text-xs text-slate-400 leading-relaxed italic">
                  Last Updated: March 25, 2026. This protocol evolves with our features.
                </p>
              </div>
            </aside>

            {/* Content Blocks */}
            <div className="space-y-32">
              {privacySections.map((section) => (
                <div key={section.id} id={section.id} className="group scroll-mt-32">
                  <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-500 mb-6 tracking-tighter">
                    {section.label}
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#10B981]/50 group-hover:bg-[#10B981]/5 transition-all duration-500">
                      {section.icon}
                    </div>
                    
                    <div>
                      <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
                        {section.title}
                      </h2>
                      <p className="text-slate-400 text-lg leading-relaxed font-light max-w-2xl">
                        {section.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Enhanced Footer Contact */}
              <div className="mt-20 p-10 rounded-3xl bg-white/[0.02] border border-white/5 text-center">
                <Terminal size={32} className="mx-auto mb-6 text-brand-accent" />
                <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
                <p className="text-slate-400 mb-8 max-w-sm mx-auto">Our team is ready to clarify any technical concerns regarding your data.</p>
                <Link href="mailto:team@codeiyo.com" className="inline-block bg-[#10B981] hover:bg-emerald-400 text-black font-bold px-8 py-3 rounded-xl transition-all">
                  Contact Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}