"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { createClient } from '../../utils/supabase/client';
import {
  FaCode,
  FaGlobe,
  FaServer,
  FaMobileAlt,
  FaBrain,
  FaDatabase,
  FaShieldAlt,
  FaRobot,
  FaLock,
  FaStar,
  FaBookOpen,
  FaCalculator,
  FaFlask,
  FaAtom,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";
import { MdSchool, MdComputer, MdWork } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";

// ─── Types ────────────────────────────────────────────────────────────────────

type Level = "Beginner" | "Intermediate" | "Advanced";
type Tag   = "Free" | "Pro" | "New" | "Popular";

interface Course {
  icon: React.ReactNode;
  title: string;
  desc: string;
  lessons: number;
  hours: number;
  level: Level;
  tag?: Tag;
  path: string;
  locked?: boolean;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  courses: Course[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories: Category[] = [
  {
    id: "school",
    label: "School Curriculum",
    icon: <MdSchool />,
    courses: [
      {
        icon: <FaCalculator />,
        title: "Mathematics – Matric & Intermediate",
        desc: "Algebra, calculus, trigonometry and stats aligned with FBISE & all provincial boards.",
        lessons: 120,
        hours: 48,
        level: "Beginner",
        tag: "Popular",
        path: "/courses/school-math",
      },
      {
        icon: <FaFlask />,
        title: "Computer Science – O/A Level",
        desc: "Cambridge IGCSE & A-Level CS — algorithms, data structures, Python, databases and networks.",
        lessons: 95,
        hours: 40,
        level: "Intermediate",
        tag: "New",
        path: "/courses/school-cs-alevel",
      },
      {
        icon: <FaAtom />,
        title: "Physics – Matric",
        desc: "Motion, force, electricity, waves and modern physics with numerical walkthroughs.",
        lessons: 80,
        hours: 32,
        level: "Beginner",
        path: "/courses/school-physics",
      },
      {
        icon: <MdComputer />,
        title: "ICT – Matric (PTB / KPK / Sindh)",
        desc: "Provincial board ICT syllabus — basics of computing, MS Office, networking fundamentals.",
        lessons: 60,
        hours: 24,
        level: "Beginner",
        tag: "Free",
        path: "/courses/school-ict",
      },
      {
        icon: <FaBookOpen />,
        title: "Principles of Commerce",
        desc: "Bookkeeping, business organisations, banking and economics — Matric Commerce stream.",
        lessons: 55,
        hours: 22,
        level: "Beginner",
        path: "/courses/school-commerce",
      },
      {
        icon: <FaGraduationCap />,
        title: "Entry Test Prep – MDCAT / ECAT",
        desc: "Topic-wise practice and timed mocks for UHS MDCAT and UET ECAT entry tests.",
        lessons: 200,
        hours: 80,
        level: "Advanced",
        tag: "Popular",
        path: "/courses/entry-test-prep",
        locked: true,
      },
    ],
  },
  {
    id: "frontend",
    label: "Frontend Development",
    icon: <FaGlobe />,
    courses: [
      {
        icon: <FaCode />,
        title: "HTML & CSS Foundations",
        desc: "Semantic markup, flexbox, grid and responsive layouts — the bedrock of every web project.",
        lessons: 45,
        hours: 18,
        level: "Beginner",
        tag: "Free",
        path: "/courses/html-css",
      },
      {
        icon: <FaGlobe />,
        title: "JavaScript – Zero to ES2024",
        desc: "From variables to async/await. Real projects, real patterns, no hand-waving.",
        lessons: 88,
        hours: 36,
        level: "Beginner",
        tag: "Popular",
        path: "/courses/javascript",
      },
      {
        icon: <FaBrain />,
        title: "React & Next.js",
        desc: "Components, hooks, routing, server components and full-stack patterns with Next.js App Router.",
        lessons: 72,
        hours: 30,
        level: "Intermediate",
        tag: "Popular",
        path: "/courses/react-nextjs",
        locked: true,
      },
      {
        icon: <FaCode />,
        title: "TypeScript for Developers",
        desc: "Types, generics, utility types and real-world patterns to ship safer code faster.",
        lessons: 40,
        hours: 16,
        level: "Intermediate",
        path: "/courses/typescript",
        locked: true,
      },
    ],
  },
  {
    id: "backend",
    label: "Backend Development",
    icon: <FaServer />,
    courses: [
      {
        icon: <FaServer />,
        title: "Python & Django",
        desc: "Build REST APIs, admin panels and full-stack web apps with the most beginner-friendly stack.",
        lessons: 78,
        hours: 32,
        level: "Intermediate",
        tag: "New",
        path: "/courses/python-django",
        locked: true,
      },
      {
        icon: <FaDatabase />,
        title: "SQL & Database Design",
        desc: "Relational modelling, complex queries, indexing and performance tuning from scratch.",
        lessons: 52,
        hours: 20,
        level: "Beginner",
        path: "/courses/sql",
      },
      {
        icon: <FaServer />,
        title: "Node.js & Express",
        desc: "Event-driven architecture, REST APIs, middleware and real-time apps with Socket.io.",
        lessons: 65,
        hours: 26,
        level: "Intermediate",
        path: "/courses/nodejs",
        locked: true,
      },
      {
        icon: <FaShieldAlt />,
        title: "API Design & Security",
        desc: "Auth flows, JWT, OAuth 2.0, rate limiting and production API best practices.",
        lessons: 38,
        hours: 15,
        level: "Advanced",
        path: "/courses/api-security",
        locked: true,
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Development",
    icon: <FaMobileAlt />,
    courses: [
      {
        icon: <FaMobileAlt />,
        title: "React Native – Cross Platform",
        desc: "One codebase, two platforms. Build and ship real iOS & Android apps with Expo.",
        lessons: 68,
        hours: 28,
        level: "Intermediate",
        path: "/courses/react-native",
        locked: true,
      },
    ],
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    icon: <FaBrain />,
    courses: [
      {
        icon: <FaBrain />,
        title: "Python for Data Science",
        desc: "NumPy, Pandas, Matplotlib and the full data-wrangling toolkit.",
        lessons: 58,
        hours: 24,
        level: "Beginner",
        tag: "New",
        path: "/courses/python-data-science",
        locked: true,
      },
      {
        icon: <FaRobot />,
        title: "Machine Learning Fundamentals",
        desc: "Supervised & unsupervised learning, scikit-learn, model evaluation — theory meets code.",
        lessons: 74,
        hours: 30,
        level: "Intermediate",
        path: "/courses/ml-fundamentals",
        locked: true,
      },
      {
        icon: <FaChartLine />,
        title: "Deep Learning & Neural Nets",
        desc: "CNNs, RNNs, transformers and hands-on projects with PyTorch.",
        lessons: 90,
        hours: 38,
        level: "Advanced",
        path: "/courses/deep-learning",
        locked: true,
      },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const levelColor: Record<Level, string> = {
  Beginner:     "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Intermediate: "text-amber-400  bg-amber-500/10  border-amber-500/20",
  Advanced:     "text-rose-400   bg-rose-500/10   border-rose-500/20",
};

const tagColor: Record<Tag, string> = {
  Free:    "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Pro:     "bg-violet-500/15  text-violet-400  border-violet-500/30",
  New:     "bg-sky-500/15     text-sky-400     border-sky-500/30",
  Popular: "bg-amber-500/15   text-amber-400   border-amber-500/30",
};

const totalStats = {
  courses:  categories.reduce((a, c) => a + c.courses.length, 0),
  lessons:  categories.reduce((a, c) => c.courses.reduce((b, x) => b + x.lessons, a), 0),
  hours:    categories.reduce((a, c) => c.courses.reduce((b, x) => b + x.hours,   a), 0),
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function CoursesPage() {
  const [activeTab, setActiveTab]   = useState("school");
  const [session,   setSession]     = useState<Session | null>(null);
  const [loading,   setLoading]     = useState(true);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, s) => setSession(s));
    return () => subscription.unsubscribe();
  }, []);

  const activeCategory = categories.find(c => c.id === activeTab)!;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 pt-20 overflow-x-hidden">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative text-center px-6 pt-20 pb-16 max-w-4xl mx-auto">
        {/* watermark */}
        <span aria-hidden className="pointer-events-none select-none absolute -top-4 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/[0.02] leading-none whitespace-nowrap">
          LEARN.
        </span>
        {/* glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-emerald-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wider uppercase px-3 py-1.5 rounded-full mb-6">
          <FaBookOpen className="text-[10px]" /> All Courses
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
          From textbooks to<br />
          <span className="text-brand-accent">real skills.</span>
        </h1>

        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Structured paths for school students and self-taught developers alike — every lesson runs live in the browser.
        </p>
      </section>

      {/* ── Stats strip ─────────────────────────────────── */}
      <div className="border-y border-white/5 py-8 mb-12">
        <div className="flex justify-center gap-12 md:gap-20 flex-wrap px-6">
          {[
            { num: `${totalStats.courses}+`, label: "Courses" },
            { num: `${totalStats.lessons}+`, label: "Lessons" },
            { num: `${totalStats.hours}+`,   label: "Hours of Content" },
            { num: "100%",                   label: "Browser-Based" },
          ].map(s => (
            <div key={s.label} className="text-center">
              <span className="block text-3xl font-extrabold text-brand-accent font-mono">{s.num}</span>
              <span className="text-[11px] text-slate-500 tracking-widest uppercase font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Category Tabs ─────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                activeTab === cat.id
                  ? "bg-brand-accent text-black border-brand-accent"
                  : "bg-white/2 text-slate-400 border-white/8 hover:border-brand-accent/40 hover:text-slate-200"
              }`}
            >
              <span className="text-[13px]">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Course Grid ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        {/* section header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-brand-accent text-xl">{activeCategory.icon}</span>
          <h2 className="text-xl font-bold text-slate-100">{activeCategory.label}</h2>
          <span className="text-xs text-slate-600 font-mono ml-1">{activeCategory.courses.length} courses</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeCategory.courses.map((course, i) => (
            <CourseCard key={i} course={course} session={session} loading={loading} />
          ))}
        </div>
      </section>

      {/* ── Path CTA ──────────────────────────────────────── */}
      <section className="relative text-center py-16 px-6">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/8 blur-[100px] rounded-full pointer-events-none -z-10" />
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Not sure where<br />
          <span className="text-brand-accent">to start?</span>
        </h2>
        <p className="text-slate-500 text-base mb-10 font-light">
          Answer 3 quick questions and we'll build your personal learning path.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/onboarding"
            className="bg-brand-accent hover:bg-transparent hover:text-brand-accent border-2 border-brand-accent text-black font-bold px-8 py-3.5 rounded-2xl transition-all duration-300 text-[15px]"
          >
            Find My Path
          </Link>
          <Link
            href={!loading && session ? "/codex" : "/signup"}
            className="bg-transparent hover:border-brand-accent/50 hover:text-brand-accent border-2 border-white/10 text-white font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 text-[15px]"
          >
            {session ? "Open the Editor" : "Get Started Free"}
          </Link>
        </div>
      </section>

    </div>
  );
}

// ─── Course Card ──────────────────────────────────────────────────────────────

function CourseCard({
  course,
  session,
  loading,
}: {
  course: Course;
  session: Session | null;
  loading: boolean;
}) {
  const href = course.locked
    ? (!loading && session ? "/pricing" : "/signup")
    : course.path;

  return (
    <Link
      href={href}
      className="group relative bg-white/2 hover:bg-brand-accent/5 border border-brand-accent/50 hover:border-brand-accent/70 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4 cursor-pointer"
    >
      {/* locked overlay badge */}
      {course.locked && (
        <span className="absolute top-4 right-4 bg-white/5 border border-white/10 rounded-lg p-1.5 text-slate-500 text-xs">
          <FaLock />
        </span>
      )}

      {/* tag */}
      {course.tag && !course.locked && (
        <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full ${tagColor[course.tag]}`}>
          {course.tag}
        </span>
      )}

      {/* icon */}
      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-brand-accent text-lg font-mono group-hover:bg-brand-accent/20 transition-colors flex-shrink-0">
        {course.icon}
      </div>

      {/* title + desc */}
      <div className="flex-1">
        <h3 className="text-[15px] font-bold text-slate-100 mb-2 leading-snug pr-6">{course.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{course.desc}</p>
      </div>

      {/* meta row */}
      <div className="flex items-center justify-between pt-2 border-t border-white/5">
        <div className="flex items-center gap-3 text-[11px] text-slate-600 font-mono">
          <span>{course.lessons} lessons</span>
          <span className="w-px h-3 bg-white/10" />
          <span>{course.hours}h</span>
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full ${levelColor[course.level]}`}>
          {course.level}
        </span>
      </div>

      {/* hover arrow */}
      <div className="absolute bottom-5 right-5 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm">
        <HiOutlineArrowRight />
      </div>
    </Link>
  );
}