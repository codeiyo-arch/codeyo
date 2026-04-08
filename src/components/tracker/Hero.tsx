"use client"

import Link from "next/link";

import { Session } from '@supabase/supabase-js';
import { createClient } from '../../utils/supabase/client';
import { useEffect, useState } from "react";

export default function Hero() {
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
      
      <section className="relative text-center px-6 pt-20 pb-16 max-w-4xl mx-auto">
        <span aria-hidden className="pointer-events-none select-none absolute -top-4 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/2 leading-none whitespace-nowrap">
          TRACKER.
        </span>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-brand-accent-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

        {/* <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-accent border border-brand-accent/20 bg-brand-accent-500/5 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          Progress Hub
        </span> */}

        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
          Learn at your pace.<br />
          <span className="text-brand-accent">Track every step.</span>
        </h1>

        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
          A clear roadmap, hands-on practice, and a personal dashboard to help you go from beginner to pro.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href={!loading && session ? "/learn/paths" : "/auth/signin"}
            className="bg-brand-accent hover:bg-transparent hover:text-brand-accent border-2 border-brand-accent text-black font-bold px-8 py-3.5 rounded-2xl transition-all duration-300 text-[15px]"
          >
            Start a Path
          </Link>
          <Link
            // href="/signup"
            href={!loading && session ? "/dashboard" : "/auth/signup"}
            className="bg-transparent hover:border-brand-accent-hover/50 hover:text-brand-accent border-2 border-white/10 text-white font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 text-[15px]"
          >
            Get Started Free
          </Link>
        </div>
      </section>

    )
}