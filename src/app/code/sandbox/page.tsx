"use client"

import Link from 'next/link';


import {
  FaCode,
  FaGlobe,
  FaPlay,
  FaTerminal,
  FaPuzzlePiece,
  FaRocket,
} from "react-icons/fa";

import { MdPreview } from "react-icons/md";
// import { useSessionContext } from '@supabase/auth-helpers-react';


// ── Replace this with your actual image import ──
// import editorScreenshot from "@/assets/editor-screenshot.png";
import editorFrame from "@/assets/frame.svg";

import { useEffect, useState } from 'react';

import { Session } from '@supabase/supabase-js';
import { createClient } from '../../../utils/supabase/client';

const features = [
  {
    icon: <FaCode />,
    title: "Monaco-Powered Editor",
    desc: "The same engine behind VS Code full syntax highlighting, and error detection, right in your browser.",
  },
  {
    icon: <FaGlobe />,
    title: "Multi-Language Support",
    desc: "JavaScript, Python, HTML/CSS and more. Switch instantly your environment is always ready.",
  },
  {
    icon: <MdPreview />,
    title: "Live Preview Pane",
    desc: "See your HTML/CSS/JS render in real time alongside your code. No refresh, no extra tabs.",
  },
  {
    icon: <FaTerminal />,
    title: "Built-in Console",
    desc: "Errors, logs, and output surface directly no browser DevTools required.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Coding Challenges",
    desc: "Hundreds of problems from beginner to advanced. Each one opens in the editor, ready to solve.",
  },
  {
    icon: <FaRocket />,
    title: "Zero Setup",
    desc: "Open a tab. Start coding. No installs, no config, no excuses just you and the problem.",
  },
];

const stats = [
  { num: "5+",   label: "Languages"     },
  { num: "99.9%", label: "Runtime Uptime"    },
  { num: "0ms",  label: "Latency"    },
  { num: "100%", label: "Browser-Based" },
];

export default function EditorShowcasePage() {
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
      
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative text-center px-6 pt-20 pb-16 max-w-4xl mx-auto">
        <span aria-hidden className="pointer-events-none select-none absolute -top-4 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/2 leading-none whitespace-nowrap">
          SANDBOX.
        </span>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-emerald-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />


        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
          Your browser is now<br />
          <span className="text-brand-accent">a real IDE.</span>
        </h1>

        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
          No installs, no setup, no excuses. Write and run code in seconds with the tools professionals actually use.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          {/* <Link
            href="/login"
            className="bg-brand-accent hover:bg-transparent hover:text-brand-accent border-2 border-brand-accent text-black font-bold px-8 py-3.5 rounded-2xl transition-all duration-300 text-[15px]"
          >
            Try the Editor
          </Link> */}

          <Link
          href={!loading && session ? "/code/sandbox/codex" : "/auth/signin"}
          className="bg-brand-accent hover:bg-transparent hover:text-brand-accent border-2 border-brand-accent text-black font-bold px-8 py-3.5 rounded-2xl transition-all duration-300 text-[15px]"
        >
          {session ? "Open Codex" : "Try Codex"}
        </Link>


          <Link
            href={!loading && session ? "/dashboard" : "/auth/signup"}
            className="bg-transparent hover:border-brand-accent-hover/50 hover:text-brand-accent border-2 border-white/10 text-white font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 text-[15px]"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────── */}
      <div className="border-y border-white/5 py-8">
        <div className="flex justify-center gap-12 md:gap-20 flex-wrap px-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="block text-3xl font-extrabold text-brand-accent font-mono">{s.num}</span>
              <span className="text-[11px] text-slate-500 tracking-widest uppercase font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Editor Screenshot ─────────────────────────────── */}
        <section className="max-w-6xl mx-auto sm:mt-0 px-6 -mt-20 -mb-10 flex justify-center items-center">
        <div className="relative w-full flex items-center justify-center">

            <div className="absolute -inset-6 bg-brand-accent/2 rounded-[40px] blur-3xl pointer-events-none" />
            
            <img 
            src={editorFrame.src} 
            alt="Codeiyo Editor" 
            className="w-full md:w-3/4 h-auto animate-[float_3s_ease-in-out_infinite] drop-shadow-[0_40px_80px_rgba(16,185,129,0.15)]" 
            />
        </div>
        </section>



      {/* ── Features Grid ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Everything you need to{" "}
            <span className="text-brand-accent">actually learn.</span>
          </h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto font-light">
            Built for students who want a real coding environment not a toy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-white/2 hover:bg-brand-accent-hover/20 border border-brand-accent/50  hover:border-brand-accent-500 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-brand-accent text-lg font-mono mb-4 group-hover:bg-brand-accent-hover/30 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-slate-100 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="relative text-center py-10 px-6">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/8 blur-[100px] rounded-full pointer-events-none -z-10" />
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Ready to write your<br />
          <span className="text-brand-accent">first line?</span>
        </h2>
        <p className="text-slate-500 text-base mb-10 font-light">
          No Setup. No install. Just open and code.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">


        <Link
          // If logged in, go to codex. If not, go to login.
          href={!loading && session ? "/code/sandbox/codex" : "/auth/signin"}
          className="bg-brand-accent hover:bg-transparent hover:text-brand-accent border-2 border-brand-accent text-black font-bold px-8 py-3.5 rounded-2xl transition-all duration-300 text-[15px]"
        >
          {session ? "Open Codex" : "Try Codex"}
        </Link>
          
          <Link
            href="/pricing"
            className="bg-transparent hover:border-brand-accent-hover hover:text-brand-accent border-2 border-white/10 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 text-base"
          >
            View Plans
          </Link>
        </div>
      </section>

    </div>
  );
}
