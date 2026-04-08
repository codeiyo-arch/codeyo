"use client"

import { SiHtml5,SiJavascript, SiPython, SiDjango, } from 'react-icons/si';

import { TbBinaryTree } from "react-icons/tb";

import { Session } from '@supabase/supabase-js';
import { createClient } from '../../utils/supabase/client';
import { useEffect, useState } from "react";

import Link from "next/link";
const paths = [
  {
    icon: <SiHtml5 />,
    tag: "Beginner",
    tagColor: "text-brand-accent bg-brand-accent-500/10 border-emerald-500/20",
    title: "Web Foundations: HTML & CSS",
    desc: "HTML, CSS, and the basics of how the web works. Your first step into real development.",
    lessons: 14,
    challenges: 20,
  },
  {
    icon: <SiJavascript />,
    tag: "Beginner",
    tagColor: "text-brand-accent bg-brand-accent-500/10 border-emerald-500/20",
    title: "JavaScript Essentials",
    desc: "Variables, functions, and DOM manipulation. The language of the web, properly.",
    lessons: 18,
    challenges: 30,
  },
  {
    icon: <SiPython />,
    tag: "Coming Soon",
    tagColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    title: "Python for Problem Solving",
    desc: "Logic, data structures, and algorithmic thinking with Python. Used in every domain.",
    lessons: 16,
    challenges: 35,
  },
  {
    icon: <TbBinaryTree />,
    tag: "Coming Soon",
    // tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    tagColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    title: "Algorithms & DSA",
    desc: "Sorting, searching, graphs, and dynamic programming. Think like a software engineer.",
    lessons: 22,
    challenges: 60,
  },
  // {
  //   icon: "⌘",
  //   // tag: "Intermediate",
  //   tag: "Coming Soon",
  //   // tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  //   tagColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  //   title: "Intro to Programming",
  //   desc: "Zero to writing real code. Perfect for complete beginners with no prior experience.",
  //   lessons: 10,
  //   challenges: 15,
  // },
  {
    icon: <SiDjango />,
    // tag: "Advanced",
    tag: "Coming Soon",
    // tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    tagColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    title: "Full-Stack Projects",
    desc: "Build and ship real apps end-to-end. Front to back, design to deployment.",
    lessons: 20,
    challenges: 40,
  },
];

export default function Path() {
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
         <section className="max-w-6xl mx-auto px-6 pb-20">
            {/* Header */}
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Pick a path.{" "}
                <span className="text-brand-accent">Start learning.</span>
              </h2>
              <p className="text-slate-500 text-base max-w-lg mx-auto font-light">
                Every path is structured from first concept to final challenge. No
                filler, no distractions.
              </p>
            </div>
      
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {paths.map((p, i) => {
                const isComingSoon = p.tag === "Coming Soon";
      
                return (
                  <div
                    key={i}
                    className={`group flex flex-col gap-2.5 hover:border hover:border-brand-accent rounded-2xl p-5 transition-all  duration-200 ${
                      isComingSoon
                        ? "bg-brand-accent/1 border-white/4 hover:border-transparent opacity-60 cursor-default"
                        : "bg-brand-accent/2 hover:bg-white/4 border-white/6 hover:scale-105 hover:border-brand-accent-500/30 cursor-default"
                    }`}
                  >
                    {/* Top row */}
                    <div className="flex items-center justify-between ">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center text-brand-accent text-lg font-mono transition-colors  ${
                          isComingSoon
                            ? "bg-white/3 border border-white/6"
                            : "bg-brand-accent-500/10 hover:border group-hover:border-brand-accent-500/15 group-hover:bg-brand-accent-500/15"
                        }`}
                      >
                        {p.icon}
                      </div>
                      <span
                        className={`text-[11px] font-semibold border rounded-full px-3 py-1 ${p.tagColor}`}
                      >
                        {p.tag}
                      </span>
                    </div>
      
                    {/* Title & desc */}
                    <div className="flex-1">
                      <h3 className="text-[14px] font-bold text-slate-100 mb-1">
                        {p.title}
                      </h3>
                      <p className="text-slate-500 text-[13px] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
      
                    {/* Progress bar — only on available paths */}
                    {/* {!isComingSoon && (
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-[11px] text-slate-600">
                          <span>Progress</span>
                          <span>0%</span>
                        </div>
                        <div className="h-[3px] rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full w-0 bg-brand-accent rounded-full" />
                        </div>
                      </div>
                    )} */}
      
                    {/* Meta */}
                    <div className="flex gap-3 text-[11px] text-slate-600 border-t border-white/5 pt-2.5">
                      <span>{p.lessons} lessons</span>
                      <span>{p.challenges} challenges</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
            <Link
              href={!loading && session ? "/learn/paths" : "/auth/signin"}
              className="bg-brand-accent hover:bg-transparent hover:text-brand-accent border-2 border-brand-accent-500 text-black font-bold px-10 py-4 rounded-2xl transition-all duration-300 text-base"
            >
              View all learning paths
            </Link>
            </div>

          </section>

  )
}