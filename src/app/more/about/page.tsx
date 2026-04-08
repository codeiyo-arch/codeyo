"use client"

import Link from "next/link";
import { Session } from '@supabase/supabase-js';
import { createClient } from '@/utils/supabase/client';

import { useEffect, useState } from "react";
// ── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { num: "200+", label: "Coding Challenges" },
  { num: "50+",  label: "Guided Tutorials"  },
  { num: "5+",   label: "Learning Paths"    },
  { num: "9–12", label: "Grade Levels"      },
];

// const values = [
//   {
//     num: "01",
//     title: "Hands-on from day one",
//     desc: "Reading about code is not learning to code. Every concept on Codeiyo is immediately followed by something to build, solve, or break. The editor is the classroom.",
//   },
//   {
//     num: "02",
//     title: "Real tools, not toys",
//     desc: "Students deserve the same environment professionals use. Codeiyo runs Monaco — the engine behind VS Code — right in the browser. No simplified sandbox, no fake editor.",
//   },
//   {
//     num: "03",
//     title: "Zero friction to start",
//     desc: "No install. No setup. No account required to try. We removed every barrier between a student and their first line of code because the first barrier is already the hardest one.",
//   },
//   {
//     num: "04",
//     title: "Progress you can see",
//     desc: "Visible progress builds real confidence. Every lesson completed, every challenge solved, and every XP earned is tracked so students always know exactly how far they've come.",
//   },
// ];


const values = [
  {
    num: "01",
    title: "Pro Tools Only",
    desc: "We don't use 'fake' simplified editors. You'll learn on the same Monaco engine that powers VS Code, building real skills from your very first line."
  },
  {
    num: "02",
    title: "Instant Feedback",
    desc: "No more waiting for a grade. Our system checks your code in real-time, telling you exactly what’s right and how to fix what’s wrong."
  },
  {
    num: "03",
    title: "Zero Barriers",
    desc: "High-quality coding education shouldn't require a 100K laptop. If you have a browser, you have a professional development environment."
  },
  {
    num: "04",
    title: "Global Standards",
    desc: "We teach you the habits used by engineers at top tech companies, ensuring Pakistani students are ready to compete on a global stage."
  }
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
          
  const supabase = createClient();
        
          useEffect(() => {
            const checkAuth = async () => {
              const { data: { session: currentSession } } = await supabase.auth.getSession();
              setSession(currentSession);
              setLoading(false);
            };
        
            checkAuth();
        
            const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
              setSession(newSession);
            });
        
            return () => subscription.unsubscribe();
          }, []);
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 pt-20 overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-0">
        {/* Screened background wordmark */}
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -top-4 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/2 leading-none whitespace-nowrap"
        >
          CODEIYO.
        </span>

        {/* Top rule + label */}
        <div className="flex items-center gap-4 mb-16 relative z-10">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-accent font-mono">
            Pakistan's First
          </span>
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-[11px] text-brand-accent font-mono tracking-widest uppercase">
            Est. 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(36px,6vw,76px)] font-extrabold leading-[1.04] tracking-tight max-w-4xl mb-0 text-white relative z-10">
          Built for students who deserve{" "}
          <em className="not-italic text-brand-accent drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">real</em>{" "}
          coding{" "}
          <em className="not-italic text-brand-accent drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]"> tools</em>.
        </h1>

        {/* Bottom of hero: sub + stat row */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 items-end mt-12 pb-16 border-b border-white/5 relative z-10">
          <p className="text-slate-400 text-lg leading-relaxed font-light max-w-xl">
            Codeiyo is <span className="text-brand-accent font-medium">Pakistan’s first</span> pro-grade coding platform for students. 
            We’ve built a streamlined workspace where you can learn, practice, and level up 
            with the same tools used by top engineers, directly in your browser.
          </p>

          {/* Inline stats - Re-aligned for the Dashboard/Skill Tracker feel */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-brand-accent/50 pl-5 group hover:border-brand-accent transition-colors">
                <span className="block text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-brand-accent transition-colors">
                  {s.num}
                </span>
                <span className="text-[10px] text-slate-500 tracking-[0.15em] uppercase font-bold leading-tight block mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-10 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 lg:gap-16 items-start">

          {/* Section label — sticky */}
          <div className="md:sticky md:top-32 pt-1">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent font-mono mb-3">Our Mission</p>
            <div className="w-8 h-px bg-brand-accent/40" />
          </div>

          {/* Body copy */}
          <div className="space-y-8">
            {/* The Hook */}
            <p className="text-[1.25rem] text-slate-200 leading-relaxed font-light">
              Coding education in Pakistan was stuck. Most students were forced to choose between 
              <span className="text-white font-normal"> expensive courses </span> 
              or "fake" editors that didn't teach how real software is built.
            </p>

            {/* The Problem */}
            <p className="text-[1.1rem] text-slate-400 leading-relaxed font-light">
              We noticed a massive gap: students would finish tutorials but couldn't write a single line of real code. The reason? 
              <span className="text-slate-300"> Simplified sandboxes and zero feedback.</span> You can't learn to build the future using tools that hold you back.
            </p>

            {/* The Solution */}
            <p className="text-[1.1rem] text-slate-400 leading-relaxed font-light">
              So we built Codeiyo. We integrated <span className="text-white font-medium">Monaco</span> the same engine that powers <span className="text-brand-accent font-medium">VS Code</span> directly into your browser. 
              Every lesson is a hands-on challenge with instant feedback. No switching tabs, no complex installs. Just you and the code.
            </p>

            {/* Highlighted pull line */}
            <div className="bg-emerald-500/5 border-l-2 border-brand-accent pl-8 py-6 rounded-r-xl transition-all hover:bg-emerald-500/10">
              <p className="text-slate-200 text-xl font-normal leading-relaxed">
                We aren't just another tutorial site. We are a 
                <span className="text-brand-accent font-semibold"> pro-level workspace </span> 
                designed to give every student in Pakistan the tools to compete globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-16 items-start">

          {/* Section label — sticky */}
          <div className="md:sticky md:top-32 pt-1">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent font-mono mb-3">
              Core Values
            </p>
            <div className="w-10 h-px bg-brand-accent/50 mb-6" />
            <p className="text-slate-500 text-sm leading-relaxed font-light pr-4">
              The engineering principles that drive every feature we build for you.
            </p>
          </div>

          {/* Values as clean rows */}
          <div className="divide-y divide-white/10">
            {values.map((v) => (
              <div
                key={v.num}
                className="group grid grid-cols-[56px_1fr] gap-8 py-10 hover:bg-brand-accent/2 -mx-6 px-6 rounded-2xl transition-all duration-300"
              >
                {/* Number with a glowing effect on hover */}
                <span className="text-xs font-bold text-white font-mono tracking-wider pt-1 group-hover:text-brand-accent group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] transition-all">
                  {v.num}
                </span>
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-slate-400 text-[0.95rem] leading-relaxed font-light max-w-2xl group-hover:text-slate-300 transition-colors">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── Mission / CTA ────────────────────────────────────────────────── */}


      <section className="max-w-6xl mx-auto px-6 py-10 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-16 items-start">

          {/* Section label — keep it consistent with the previous sections */}
          <div className="pt-2">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#10B981] font-mono mb-3">The Vision</p>
            <div className="w-10 h-px bg-[#10B981]/40" />
          </div>

          <div>
            {/* The Big Quote - Adjusted clamp and leading for better impact */}
            <blockquote className="text-[clamp(24px,4.5vw,46px)] font-extrabold text-white leading-[1.1] tracking-tighter mb-12">
               
              "Every student in Pakistan should have a{" "}
              <span className="text-[#10B981] italic">real place to code</span> , not just a simplified tool."
            </blockquote>

            {/* Action Buttons with high-tier SaaS styling */}
            <div className="flex flex-col sm:flex-row gap-5">
                                      {/* <Link
                            href={!loading && session ? "#" : "/auth/login"}
                            className="w-full flex items-center justify-center py-2 text-md bg-brand-accent hover:bg-transparent hover:text-white border-2 border-brand-accent text-black font-bold px-8  rounded-2xl transition-all duration-300 text-[15px]"
                            >
                            {session ? "Already Joined" : "Join as Self Learner"}
                        </Link> */}
              <Link
              href={!loading && session ? "/code/sandbox/codex" : "/auth/signin"}
                // href="/codex"
                className="bg-brand-accent hover:bg-transparent hover:text-brand-accent border-2 border-brand-accent text-black font-bold px-8 py-3.5 rounded-2xl transition-all duration-300 text-[15px] text-center shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5"
              >
                Open Codex
              </Link>
              
              <Link
                href={!loading && session ? "/learn/paths" : "/auth/signin"}
                className="bg-transparent hover:border-brand-accent-hover/50 hover:text-brand-accent border-2 border-white/10 text-white font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 text-[15px] text-center"
              >
                Explore Learning Paths
              </Link>
            </div>
            
            {/* Small reassurance text for 9th graders */}
            <p className="mt-8 text-slate-500 text-sm font-light">
              Free to start. No software installation required.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}