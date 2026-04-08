"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCoursesData, Course, Module } from "@/services/courses";
import { HiOutlineArrowLeft, HiOutlinePlayCircle, HiOutlineClock } from "react-icons/hi2";

export default function ModuleOverviewPage() {
  const { courseId, moduleId } = useParams();
  const router = useRouter();
  
  const [moduleData, setModuleData] = useState<Module | null>(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  const fetchData = async () => {
    try {
      const categories = await getCoursesData();
      
      // 1. Flatten all courses from all categories
      const allCourses = categories.flatMap(cat => cat.courses);
      
      // 2. Find the specific course
      const course = allCourses.find(c => c.id === courseId);
      
      if (course) {
        setCourseTitle(course.title);
        
        // 3. Find the module. 
        // We use String() to ensure comparison works even if IDs are numbers in your data
        const mod = course.modules?.find(m => String(m.id) === String(moduleId));
        
        setModuleData(mod || null);
      }
    } catch (error) {
      console.error("Error fetching module data:", error);
    } finally {
      setLoading(false);
    }
  };
  
  fetchData();
}, [courseId, moduleId]); // Dependencies ensure this re-runs when URL changes


    if (loading || !moduleData) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  // if (loading) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white italic">Loading Module...</div>;
  // if (!moduleData) return <div className="min-h-screen bg-[#020617] pt-40 text-center text-white">Module not found.</div>;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300">
      {/* ── Header ── */}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-12">
        <button 
          onClick={() => router.push(`/learn/paths/${courseId}/modules`)}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-accent transition-colors mt-5 mb-5 group"
        >
          <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to All Modules</span>
        </button>

        <div className="space-y-2">
          <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">
            {courseTitle} • Module {moduleId}
          </span>
          <h1 className="text-4xl font-black text-white leading-tight">
            {moduleData.title}
          </h1>
          <p className="text-slate-500 max-w-2xl">
            Complete all lessons in this module to master these specific concepts and unlock the next section.
          </p>
        </div>

        {/* ── Lessons List ── */}
        <div className="mt-10 space-y-4">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Module Curriculum</h2>
          
          {moduleData.lessons.map((lesson, index) => (
            <div 
              key={lesson.id}
              onClick={() => router.push(`/learn/paths/${courseId}/modules/${moduleId}/${lesson.id}`)}
              className="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-accent/30 hover:bg-white/[0.05] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <span className="text-2xl font-mono font-black text-white/10 group-hover:text-brand-accent/20 transition-colors">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                    {lesson.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <HiOutlineClock className="text-brand-accent" />
                      {lesson.duration}
                    </span>
                    {lesson.isFree && (
                      <span className="text-[10px] bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full border border-green-500/20 font-bold uppercase">
                        Preview
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-accent transition-all group-hover:scale-110 shadow-lg">
                <HiOutlinePlayCircle className="text-2xl text-slate-400 group-hover:text-black" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}