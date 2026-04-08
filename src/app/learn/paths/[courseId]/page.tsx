"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCoursesData, Course } from "@/services/courses";
import { IconMap } from "@/components/IconMap"; 
import { HiOutlineClock, HiOutlineBookOpen, HiOutlineSignal, HiChevronLeft } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";

export default function CourseDetailPage() {
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

  // --- NEW NAVIGATION LOGIC ---
const handleViewDetails = () => {
    // Check if at least one module exists
    if (course?.modules?.[0]) {
      const firstModuleId = course.modules[0].id;
      
      // Navigate to the MODULE page: app/courses/[courseId]/[moduleId]/page.tsx
      // We do NOT include the lessonId here anymore
      router.push(`/learn/paths/${courseId}/modules`);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center">
      <div className="animate-spin h-8 w-8 border-2 border-brand-accent border-t-transparent rounded-full" />
    </div>
  );

  if (!course) return (
    <div className="min-h-screen bg-[#020617] pt-40 text-center text-white">Course not found.</div>
  );

  const IconComponent = IconMap[course.iconType] || IconMap.code;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-brand-accent/30">
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <button 
          onClick={() => router.push(`/learn/paths`)}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-accent transition-colors mb-8 group"
        >
          <HiChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to All Paths</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-8">
            <header className="mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-2xl text-brand-accent shadow-lg">
                  {IconMap[course.iconType]}
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em]">
                    {course.level}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    {course.title}
                  </h1>
                </div>
              </div>
              <p className="text-xl text-slate-400 font-light leading-relaxed max-w-3xl">
                {course.desc}
              </p>
            </header>

            {/* Curriculum Mapping */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">Course Curriculum</h2>
              <div className="space-y-4">
                {course.modules?.map((module) => (
                  <div key={module.id} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <h3 className="text-brand-accent font-bold mb-3">{module.title}</h3>
                    <div className="space-y-2">
                      {module.lessons.map((lesson) => (
                        <div 
                          key={lesson.id} 
                          // onClick={() => router.push(`/courses/${courseId}/${module.id}/${lesson.id}`)}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5  transition-all group"
                        >
                          <span className="text-slate-400 group-hover:text-white text-sm">{lesson.title}</span>
                          <span className="text-xs text-slate-600 font-mono">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 p-1 rounded-3xl bg-gradient-to-b from-brand-accent/20 to-transparent">
              <div className="bg-[#0b1120] rounded-[22px] p-8 border border-white/5 shadow-2xl">
                <div className="mb-6 text-center lg:text-left">
                  <div className="flex items-baseline gap-2 mb-2 justify-center lg:justify-start">
                    <span className="text-3xl font-bold text-white">Free</span>
                    {/* <span className="text-slate-500 line-through text-lg">$49.99</span> */}
                  </div>
                  <p className="text-sm text-slate-400 italic">Limited time academic offer</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {["Self-paced learning", "Practice challenges", "Certificate of completion"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <FaCheckCircle className="text-brand-accent text-xs" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* THE UPDATED BUTTON */}
                <button 
                  onClick={handleViewDetails}
                  className="w-full py-4 bg-brand-accent   font-bold rounded-xl shadow-lg shadow-brand-accent/20 transition-all   border-2 border-brand-accent hover:bg-transparent text-black hover:text-white hover:scale-105  duration-300  "
                >
                  Start Learning Now
                </button>
                
                <p className="text-center text-[11px] text-slate-500 mt-4 uppercase tracking-tighter">
                  Join {course.lessons}+ students today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}