"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getCoursesData, Category, Course, Tag, Level } from '@/services/courses';
import { IconMap } from "@/components/IconMap"; 
import { HiOutlineArrowRight } from "react-icons/hi";

const tagColor: Record<Tag, string> = {
  Free:    "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Pro:     "bg-violet-500/15  text-violet-400  border-violet-500/30",
  New:     "bg-sky-500/15     text-sky-400     border-sky-500/30",
  Popular: "bg-amber-500/15   text-amber-400   border-amber-500/30",
};

const levelColor: Record<Level, string> = {
  Beginner:     "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Intermediate: "text-amber-400  bg-amber-500/10  border-amber-500/20",
  Advanced:     "text-rose-400   bg-rose-500/10   border-rose-500/20",
};

export default function CoursesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState("school");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getCoursesData();
        setCategories(data);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const activeCategory = categories.find((c) => c.id === activeTab);

  if (loading) return <div className="flex justify-center pt-40"><div className="animate-spin h-8 w-8 border-2 border-brand-accent border-t-transparent rounded-full" /></div>;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 pt-32 pb-20 px-6">
        <span
          aria-hidden
          className="pointer-events-none select-none absolute top-15 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/2 leading-none whitespace-nowrap"
        >
          COURSES.
        </span>

      {/* ── Header ────────────────────────────────────────── */}
      <header className="max-w-6xl mx-auto text-center mb-10">

        <h1 className="text-4xl md:text-5xl mt-7 font-extrabold tracking-tight mb-4 text-white">
          Choose Your <span className="text-brand-accent">Learning Path</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
          From school curriculum alignment to professional career tracks. 
          Everything you need to master coding in one place.
        </p>
      </header>
      {/* Tab Switcher */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                activeTab === cat.id
                  ? "bg-brand-accent text-black border-brand-accent"
                  : "bg-white/2 text-slate-400 border-white/8 hover:border-brand-accent/40 hover:text-slate-200"
            }`}
          >
            {IconMap[cat.iconType]} {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeCategory?.courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}




function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/learn/paths/${course.id}`}>
    <div className="group relative bg-white/2 border border-brand-accent/30 p-6 rounded-2xl hover:border-brand-accent/70 transition-all">
      {/* Render the Tag if it exists */}
      {course.tag && (
        <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full ${tagColor[course.tag]}`}>
          {course.tag}
        </span>
      )}

      <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-4">
        {IconMap[course.iconType]}
      </div>

      <h3 className="text-[15px] font-bold text-white mb-2">{course.title}</h3>
      <p className="text-slate-500 text-sm mb-6">{course.desc}</p>

      <div className="flex items-center justify-between pt-2 border-t border-white/5">
        <div className="flex items-center gap-3 text-[11px] text-slate-600 font-mono">
          <span>{course.lessons} lessons</span>
          <span className="w-px h-3 bg-white/10" />
          <span>{course.hours}h</span>
        </div>
        {/* level badge — hidden on hover, arrow replaces it */}
        <div className="relative h-5 flex items-center">
          <span className={`text-[10px] font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full transition-opacity duration-200 group-hover:opacity-0 ${levelColor[course.level]}`}>
            {course.level}
          </span>
          <span className="absolute right-0 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm">
            <HiOutlineArrowRight />
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
}