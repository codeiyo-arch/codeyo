"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCoursesData, Course } from "@/services/courses";
import { 
  HiOutlineArrowLeft, 
  HiOutlineChevronRight, 
  HiOutlineBookOpen,
  HiOutlineLockClosed
} from "react-icons/hi2";

export default function ModulesListPage() {
  const { courseId } = useParams();
  const router = useRouter();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      const categories = await getCoursesData();
      const found = categories.flatMap(cat => cat.courses).find(c => c.id === courseId);
      setCourse(found || null);
      setLoading(false);
    };
    fetchCourse();
  }, [courseId]);

    if (loading || !course) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // if (loading) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white italic">Loading Syllabus...</div>;
  // if (!course) return <div className="min-h-screen bg-[#020617] pt-40 text-center text-white">Course not found.</div>;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 pb-20">
      {/* ── Page Header ── */}
      <div className="bg-[#0b1120]/50 border-b border-white/5 pt-32 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={() => router.push(`/learn/paths`)}
            className="flex items-center gap-2 text-slate-500 hover:text-brand-accent transition-colors mb-6 group"
          >
            <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to All Paths</span>
          </button>
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {course.title}
          </h1>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
            Your structured path to mastering these skills. Complete each module to unlock the full certification.
          </p>
        </div>
      </div>

      {/* ── Modules Grid/List ── */}
      <div className="max-w-5xl mx-auto px-6 mt-12">
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">Learning Path</h2>
           <span className="text-xs text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20 font-bold">
             {course.modules?.length} Modules Total
           </span>
        </div>

        <div className="grid gap-4">
          {course.modules?.map((module, index) => (
            <div 
              key={module.id}
              onClick={() => router.push(`/learn/paths/${courseId}/modules/${module.id}`)}
              className="group relative flex items-center justify-between p-1 px-1 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-accent/40 hover:bg-white/[0.04] transition-all cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-6 p-5">
                {/* Module Numbering */}
                <div className="flex flex-col items-center justify-center w-12 h-12 rounded-2xl bg-[#020617] border border-white/10 group-hover:border-brand-accent/50 transition-colors">
                   <span className="text-[10px] text-slate-500 font-bold uppercase leading-none mb-1">MOD</span>
                   <span className="text-lg font-black text-white leading-none">{index + 1}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors mb-1">
                    {module.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <HiOutlineBookOpen className="text-brand-accent" />
                      {module.lessons?.length || 0} Lessons
                    </span>
                    <span>•</span>
                    <span className="font-medium">Estimated 2-3 hours</span>
                  </div>
                </div>
              </div>

              {/* Action Area */}
              <div className="pr-8 flex items-center gap-4">
                <div className="hidden md:flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold text-brand-accent uppercase tracking-tighter">View Curriculum</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-black transition-all">
                  <HiOutlineChevronRight className="text-xl" />
                </div>
              </div>

              {/* Decorative background glow for hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-accent/5 blur-3xl rounded-full group-hover:bg-brand-accent/10 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}