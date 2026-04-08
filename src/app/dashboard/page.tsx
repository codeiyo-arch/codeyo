"use client";
import React, { useEffect, useState } from 'react';
import { createClient } from "@/utils/supabase/client";
import { getDashboardData } from "@/services/api"; // Import your mock service
import { getCoursesData, Course, Module } from "@/services/courses";
import { 
  Code2, BookOpen, Trophy, ArrowUpRight, Clock, 
  ChevronRight, Award, Library, Map, Sparkles, Users, LightbulbIcon, Zap
} from "lucide-react";
import Link from "next/link";

import { useParams, useRouter } from "next/navigation";
import { HiOutlineArrowUpRight,  HiOutlineChevronRight, HiOutlinePlayCircle, HiOutlineClock } from "react-icons/hi2";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const router = useRouter();


  useEffect(() => {
    const initDashboard = async () => {
      try {
        // 1. Get Auth User
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);

        // 2. Fetch both APIs concurrently for better performance
        const [dashboardData, categories] = await Promise.all([
          getDashboardData(),
          getCoursesData()
        ]);

        // 3. Flatten the courses from all categories into a single array
        const allCourses = categories.flatMap(category => category.courses);

        // 4. Update state
        // We merge them so 'data' contains both the dashboard stats and the real courses
        setData({
          ...dashboardData,
          courses: allCourses // This replaces the mock courses with real data from getCoursesData
        });

      } catch (error) {
        console.error("Failed to load dashboard:", error);
      } finally {
        setLoading(false);
      }
    };
    
    initDashboard();
  }, [supabase]);

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-brand-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-12 px-6 md:px-10 bg-[#020617] text-white">
      {/* Background Logo Decoration */}
      <span aria-hidden className="pointer-events-none select-none absolute top-15 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/2 leading-none whitespace-nowrap">
        CODEIYO.
      </span>

      <div className="pt-10 max-w-7xl mx-auto space-y-10 relative z-10">
        {/* 1. Header */}
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Welcome back, <span className="text-brand-accent">{user?.user_metadata?.first_name || "Student"}</span>.
            </h1>
            <p className="text-gray-400 mt-2">Pick up exactly where you left off.</p>
          </div>
          <div className='flex flex-col gap-y-2 items-center justify-center'>
            <Link href="/code/sandbox/codex" className="flex items-center justify-center gap-2 bg-brand-accent text-black font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all w-fit  border-2 border-brand-accent hover:bg-transparent hover:text-white duration-300 text-sm ">
            <Code2 className="w-5 h-5" /> Open Sandbox
          </Link>
          <Link href="/code/sandbox/codex-v2" className="flex items-center justify-center gap-2 bg-brand-accent text-black font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all w-fit  border-2 border-brand-accent hover:bg-transparent hover:text-white duration-300 text-sm ">
            <Code2 className="w-5 h-5" /> Open Sandbox V2
          </Link>
          </div>
          {/* <Link href="/code/sandbox/codex" className="flex items-center justify-center gap-2 bg-brand-accent text-black font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all w-fit  border-2 border-brand-accent hover:bg-transparent hover:text-white duration-300 text-sm ">
            <Code2 className="w-5 h-5" /> Open Sandbox
          </Link>
          <Link href="/code/sandbox/codex" className="flex items-center justify-center gap-2 bg-brand-accent text-black font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all w-fit  border-2 border-brand-accent hover:bg-transparent hover:text-white duration-300 text-sm ">
            <Code2 className="w-5 h-5" /> Open Sandbox
          </Link> */}
        </section>

        {/* 2. Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {data.stats.map((stat: any, i: number) => (
            <div key={i} className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-5">
              <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-10">
            {/* Courses */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                <Map className="w-5 h-5 text-brand-accent" /> Your Learning Path
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Map over the real course data gathered from getCoursesData() */}
                {data.courses.map((course: Course, i: number) => (
                  <div 
                    key={course.id || i} 
                    onClick={() => router.push(`/courses/${course.id}/modules`)}
                    className="glass1 p-6 rounded-3xl border border-white/5 bg-brand-accent/10 hover:border-brand-accent/30 hover:scale-105 transition-all group cursor-pointer relative overflow-hidden"
                  >
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div>
                        <h3 className="font-bold text-lg text-slate-200 group-hover:text-white transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-mono">
                          {course.modules?.length || 0} Modules • Grades 9-12
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-black transition-all">
                        <HiOutlineArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    {/* <div className="space-y-3 relative z-10">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter text-slate-500">
                        <span>Course Progress</span> 
                        
                        <span className="text-white">{(course as any).progress || 0}%</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <div 
                          className="h-full bg-brand-accent transition-all duration-1000 ease-out" 
                          style={{ width: `${(course as any).progress || 0}%` }} 
                        />
                      </div>
                    </div> */}

                    {/* Decorative background glow */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-accent/5 blur-2xl rounded-full group-hover:bg-brand-accent/10 transition-all" />
                  </div>
                ))}
              </div>

              {/* Empty State if no courses are found */}
              {data.courses.length === 0 && (
                <div className="p-12 text-center border border-dashed border-white/10 rounded-3xl">
                  <p className="text-slate-500 text-sm">No courses enrolled yet. Head to the catalog to start.</p>
                </div>
              )}
            </section>

            

            {/* Roadmap */}
            <section className="space-y-6">
             <div className="flex items-center justify-between">
               <h2 className="text-xl font-bold flex items-center gap-2">
                 <Map className="w-5 h-5 text-brand-accent" />
                 Learning Roadmap
               </h2>
             </div>

             <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-3xl -mr-10 -mt-10 rounded-full" />
              
               <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
               {data.milestones.map((milestone: any, index: number) => (
                  <React.Fragment key={index}>

                    <div className={`flex flex-col items-center text-center gap-2 ${!milestone.isDone && !milestone.isActive ? 'opacity-40' : ''}`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all
                        ${milestone.isDone ? 'bg-brand-accent text-black' : 
                          milestone.isActive ? 'bg-brand-accent/20 border-2 border-brand-accent border-dashed animate-pulse text-brand-accent' : 
                          'bg-white/5 border border-white/10 text-gray-500'}`}
                      >
                        <milestone.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{milestone.title}</p>
                        <p className={`text-[10px] font-bold uppercase tracking-widest ${milestone.isDone ? 'text-brand-accent' : 'text-gray-400'}`}>
                          {milestone.status}
                        </p>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          


            <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Library className="w-5 h-5 text-brand-accent" />
                Student's Toolkit
              </h2>
              <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md">
                Free Resources
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.syntaxSheets.map((sheet: any, i: number) => (
                <div 
                  key={i} 
                  className={`glass p-5 rounded-3xl border-l-4 ${sheet.color} hover:bg-white/5 transition-all group cursor-pointer`}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-sm text-white group-hover:text-brand-accent transition-colors">
                          {sheet.name}
                        </h4>
                        <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-white" />
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {sheet.tags.map((tag:string, idx:number) => (
                          <span key={idx} className="text-[8px] px-2 py-0.5 rounded-md bg-white/5 text-gray-400 font-bold uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-gray-500 group-hover:text-gray-300">
                      <BookOpen className="w-3 h-3" />
                      Read Reference
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA for Pro: Exclusive Mentorship & Certification */}
              <div className="md:col-span-3 mt-3 glass p-6 rounded-3xl border border-yellow-500/20 bg-linear-to-br from-yellow-500/10 via-transparent to-transparent flex flex-col md:flex-row items-center justify-between group cursor-pointer hover:border-yellow-500/40 transition-all relative overflow-hidden">
                
                {/* Premium Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-3xl -mr-16 -mt-16 rounded-full group-hover:bg-yellow-500/10 transition-all" />

                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.1)] group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold text-white leading-tight">Unlock Codeiyo Pro</h4>
                      <span className="text-[8px] font-black px-1.5 py-0.5 rounded-md bg-yellow-500 text-black uppercase tracking-tighter">
                        Exclusive
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 max-w-md">
                      Get Pro benifits, 1-on-1 expert code reviews, and unlock advanced learning insights.
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 relative z-10">
                  <Link 
                    href="/pricing" 
                    className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-black py-3 px-8 rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95"
                  >
                    Upgrade Now
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          </div>

          {/* RIGHT COLUMN */}
          <aside className="space-y-6">
          {/* School Leaderboard Section */}
          <div className="glass p-6 rounded-3xl border border-white/5 relative overflow-hidden">
            {/* Decoration background glow */}
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-yellow-500/5 blur-2xl rounded-full" />
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-500" />
                School Leaderboard
              </h3>
              <span className="text-[10px] text-brand-accent font-bold uppercase tracking-tighter">Grade 10-A</span>
            </div>

            <div className="space-y-3">
                  {data.leaderboard.map((student: any, i: number) => (
                  <div key={i} className={`flex items-center justify-between p-3 rounded-2xl ${student.isUser ? 'bg-brand-accent/10 border border-brand-accent/20' : ''}`}>
                    <div className="flex items-center gap-3">
                      
                    <div className="relative">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border ${
                        student.rank === 1 ? 'border-yellow-500 text-yellow-500' : 
                        student.rank === 2 ? 'border-gray-400 text-gray-400' : 
                        'border-white/10 text-white'
                      }`}>
                        {student.avatar}
                      </div>
                      {student.rank === 1 && (
                        <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full p-0.5">
                          <Award className="w-2 h-2 text-black" />
                        </div>
                      )}
                    </div>
                      <div>
                        <p className="text-sm font-bold">{student.name}</p>
                        <p className="text-[10px] text-gray-500">Rank #{student.rank}</p>
                      </div>

                    </div>
                    <div className="text-right">
                      <p className="text-xs font-mono font-bold">{student.xp.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
            </div>

            <button 
              disabled
              className="w-full mt-6 py-2 rounded-xl bg-white/5 text-xs font-bold text-gray-500 cursor-not-allowed flex items-center justify-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              View Full Leaderboard
            </button>

            {/* <button className="w-full mt-6 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-gray-400 transition-all">
              View Full School Board
            </button> */}
          </div>
          
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Zap className="w-5 h-5 text-brand-accent" />
            Quick Actions
          </h2>
          
          <div className="flex flex-col gap-4">
            {/* Daily Challenge */}
            {/* Daily Goal Card - Version: Sandbox Warmup */}
            {/* Daily Goal Card - Version: Community */}
            <div className="glass p-6  rounded-3xl border border-white/5 bg-linear-to-br from-brand-accent/10 to-transparent">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-brand-accent/20 rounded-lg">
                  <Users className="w-5 h-5 text-brand-accent" />
                </div>
                <span className="text-sm font-bold text-brand-accent uppercase tracking-wider">Community</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">Join the Tribe</h3>
              <p className="text-sm text-gray-400 mb-4">
                Connect with other Grade 9-12 coders and share your projects.
              </p>
              <Link 
                href="https://discord.gg/yourlink" 
                className="w-full  mt-10 py-2.5 bg-brand-accent/20 hover:bg-brand-accent/30 border border-brand-accent/30 rounded-xl text-sm font-bold text-brand-accent transition-all flex items-center justify-center gap-2"
              >
                Join Discord <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </aside>
        </div>
      </div>
    </main>
  );
}



