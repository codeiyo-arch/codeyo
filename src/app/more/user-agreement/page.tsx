import React from "react";
import Link from "next/link";
import { Info, ShieldAlert, Code2, Scale, Terminal, FileText,Ban } from "lucide-react";

export default function TermsOfService() {
  const lastUpdated = "March 25, 2026";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-[#10B981]/30 font-sans">
        <span aria-hidden className="pointer-events-none select-none absolute top-20 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/2 leading-none whitespace-nowrap"
        >
          Agreement.
        </span>
      {/* ── Breadcrumb Navigation ────────────────────────────────── */}
      <div className="pt-28 px-8 max-w-7xl mx-auto">
        <nav className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-slate-500 mb-10">
          <Link href="/" className="hover:text-[#10B981] transition-colors">Home</Link>
          <span className="text-white/10">/</span>
          <span className="text-slate-200 border-b border-brand-accent pb-0.5">User_Agreement.md</span>
        </nav>
      </div>
      

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-[240px_1fr_200px] gap-16 pb-32">
        
        {/* ── Left Sidebar: Doc Tree ──────────────────────────────── */}

        <aside className="hidden lg:block lg:sticky lg:top-32 h-fit space-y-12">
            {/* ── Technical Index ────────────────────────────────────────── */}
            <nav className="space-y-2">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 font-mono">
                Protocol Index
                </p>
                
                {[
                { id: "intro", title: "01. Introduction" },
                { id: "accounts", title: "02. Account Protocol" },
                { id: "studio", title: "03. Studio Usage" },
                { id: "ip", title: "04. IP & Ownership" },
                { id: "termination", title: "05. Termination" },
                ].map((section) => (
                <a 
                    key={section.id} 
                    href={`#${section.id}`} 
                    className="flex items-center gap-3 text-[13px] text-slate-500 hover:text-[#10B981] transition-all group py-1.5 font-mono tracking-tighter"
                >
                    <span className="h-px w-4 bg-white/10 group-hover:w-8 group-hover:bg-[#10B981] transition-all duration-300" />
                    {section.title}
                </a>
                ))}
            </nav>

            {/* ── Engineering Commit Note ────────────────────────────────── */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#10B981]/10 to-transparent border border-[#10B981]/15 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                <p className="text-[11px] text-[#10B981] font-bold uppercase tracking-wider">
                    System Note
                </p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed italic mb-4">
                Last Updated: March 25, 2026. These terms ensure a high-performance environment for all developers.
                </p>
                <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Inquiries</p>
                <a href="mailto:support@codeiyo.com" className="text-xs text-slate-300 hover:text-[#10B981] transition-colors font-mono">
                    support@codeiyo.com
                </a>
                </div>
            </div>
        </aside>




        {/* ── Center: Main Content ────────────────────────────────── */}
        <main className="min-w-0">
          <header className="mb-10 border-b border-white/5 pb-10">
                
            <h1 className="text-5xl font-extrabold text-brand-accent tracking-tighter mb-6">
              User <span className="text-white">Agreement .</span> 
            </h1>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 bg-white/[0.02] w-fit px-4 py-2 rounded-full border border-white/5">
              <Terminal size={12} className="text-[#10B981]" />
              <span>Last Commit: {lastUpdated}</span>
              <span className="text-white/10">|</span>
              <span>v0.0.1-stable</span>
            </div>
            
          </header>

          <div className="space-y-20">
            {/* Section 00 */}
            <section id="intro" className="scroll-mt-32 -mt-5">
                <div className="flex items-center  gap-3 mb-6" >
                <span className="text-[#10B981] font-mono font-bold text-sm">01.</span>
                <h2 className="text-2xl font-bold text-white tracking-tight hover:text-[#10B981] transition-colors">Introduction</h2>
                </div>
              <p className="text-slate-400 leading-relaxed text-lg font-light mb-8">
                Welcome to Codeiyo. By accessing our platform, you are entering into a binding agreement. 
                We provide a professional-grade workspace for students in Pakistan to learn and master 
                programming. Use it wisely.
              </p>
            </section>

            {/* Section 01 */}
            <section id="accounts" className="scroll-mt-32 group -mt-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#10B981] font-mono font-bold text-sm">02.</span>
                <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#10B981] transition-colors">Account Protocol</h2>
              </div>
              <p className="text-slate-400 leading-relaxed font-light mb-8">
                To use the Codeiyo Studio, you must register an account. You agree to provide accurate 
                information and maintain the security of your credentials. You are responsible for all 
                activities conducted through your workspace.
              </p>
              
              <div className="p-5 bg-blue-500/5 border border-blue-500/20 rounded-2xl flex gap-4">
                <Info size={20} className="text-blue-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-blue-200 font-bold text-sm mb-1">Security Note</h4>
                  <p className="text-[13px] text-blue-200/60 leading-relaxed italic font-light">
                    For students in Grades 9-12, we recommend using a school-issued email where available.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 02 */}
            <section id="studio" className="scroll-mt-32 -mt-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#10B981] font-mono font-bold text-sm">03.</span>
                <h2 className="text-2xl font-bold text-white tracking-tight">Studio Usage & Limits</h2>
              </div>
              <p className="text-slate-400 leading-relaxed font-light mb-6">
                Codeiyo Studio utilizes the Monaco engine for real-time compilation. Usage is subject to the following technical constraints:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "No automated bot execution",
                  "No cryptocurrency mining",
                  "No malicious script injection",
                  "Limited concurrent executions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl text-sm text-slate-400 group hover:border-[#10B981]/30 transition-all">
                    <Code2 size={14} className="text-[#10B981]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 03 */}
            <section id="ip" className="scroll-mt-32 group -mt-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#10B981] font-mono font-bold text-sm">04.</span>
                <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#10B981] transition-colors">IP & Ownership</h2>
              </div>
              <p className="text-slate-400 leading-relaxed font-light mb-6">
                We believe in the creator economy. <span className="text-white font-medium">You own 100% of the code</span> you write on Codeiyo. 
                However, by building on our platform, you grant us a license to host your work on our 
                infrastructure to facilitate your learning.
              </p>
              <div className="p-6 bg-rose-500/5 border border-rose-500/20 rounded-2xl flex gap-5">
                <ShieldAlert size={24} className="text-rose-500 shrink-0" />
                <p className="text-[13px] text-rose-200/70 leading-relaxed font-light">
                  Violation of intellectual property rights (e.g., plagiarizing other students' work) 
                  is grounds for immediate workspace suspension.
                </p>
              </div>
            </section>

            {/* Section 04 */}
            <section id="termination" className="scroll-mt-32 group -mt-5">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-[#10B981] font-mono font-bold text-sm">05.</span>
                <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#10B981] transition-colors">
                Termination Protocol
                </h2>
            </div>
            <p className="text-slate-400 leading-relaxed font-light mb-8">
                We reserve the right to suspend or terminate your access to the Codeiyo Studio at any time, 
                without prior notice, if we determine that your activity poses a security risk or violates 
                our core engineering values.
            </p>

            <div className="grid grid-cols-1 gap-4">
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-rose-500/30 transition-all">
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <Ban size={16} className="text-rose-500" />
                    Immediate Suspension Triggers
                </h4>
                <ul className="space-y-2">
                    {[
                    "Attempts to breach Codeiyo infrastructure security.",
                    "Automated scraping of copyrighted curriculum content.",
                    "Persistent harassment of other users in collaborative sessions.",
                    "Hosting or executing malicious code via the Monaco engine."
                    ].map((item, i) => (
                    <li key={i} className="text-[13px] text-slate-500 flex items-start gap-2 leading-relaxed">
                        <span className="text-rose-500/50 mt-1.5">•</span>
                        {item}
                    </li>
                    ))}
                </ul>
                </div>

                <div className="p-5 bg-amber-500/5 border border-amber-500/20 rounded-2xl flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <ShieldAlert size={20} className="text-amber-500" />
                </div>
                <div>
                    <h4 className="text-amber-200 font-bold text-sm mb-1">Data Retrieval Grace Period</h4>
                    <p className="text-[13px] text-amber-200/60 leading-relaxed font-light">
                    In cases of non-security related termination, we may provide a 7-day window to export 
                    your source code before your workspace is permanently purged from our servers.
                    </p>
                </div>
                </div>
            </div>
            </section>
          </div>

          <footer className="mt-10 pt-10 border-t -mb-20 border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-600 font-mono tracking-widest uppercase">
              End of Document // Codeiyo Legal
            </p>
            <div className="flex gap-8">
              <Link href="/more/privacy-policy" className="text-xs text-slate-400 hover:text-brand-accent transition-colors underline decoration-white/10">Privacy Policy</Link>
              <Link href="/more/contact" className="text-xs text-slate-400 hover:text-brand-accent transition-colors underline decoration-white/10">Contact Support</Link>
            </div>
          </footer>
        </main>

        {/* ── Right Sidebar: Table of Contents ────────────────────── */}
        {/* <aside className="hidden xl:block sticky top-32 h-fit">
          <div className="border-l-2 border-[#10B981]/10 pl-6 py-2">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">On this page</p>
            <ul className="space-y-4 text-[11px] font-mono text-slate-500">
              <li className="hover:text-[#10B981] transition-colors"><a href="#intro"># Introduction</a></li>
              <li className="hover:text-[#10B981] transition-colors"><a href="#accounts"># Accounts</a></li>
              <li className="hover:text-[#10B981] transition-colors"><a href="#studio"># Studio_Usage</a></li>
              <li className="hover:text-[#10B981] transition-colors"><a href="#ip"># Ownership</a></li>
            </ul>
          </div>
        </aside> */}

      </div>
    </div>
  );
}