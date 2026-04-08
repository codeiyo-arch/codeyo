// "use client";

// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { getCoursesData, Course, Lesson } from "@/services/courses";
// import { 
//   HiOutlineArrowLeft, 
//   HiOutlineArrowRight, 
//   HiOutlineBookOpen, 
//   HiOutlineAcademicCap 
// } from "react-icons/hi2";

// export default function LessonPage() {
//   const { courseId, moduleId, lessonId } = useParams();
//   const router = useRouter();
  
//   const [course, setCourse] = useState<Course | null>(null);
//   const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
//   const [loading, setLoading] = useState(true);



//   // Inside your LessonPage component
//   const [nav, setNav] = useState<{ prev: string | null; next: string | null }>({ prev: null, next: null });

//   useEffect(() => {
//     const fetchLessonData = async () => {
//       const categories = await getCoursesData();
//       const foundCourse = categories.flatMap(cat => cat.courses).find(c => c.id === courseId);

//       if (foundCourse) {
//         setCourse(foundCourse);
        
//         // 1. Get all lessons in the current module in order
//         const module = foundCourse.modules?.find(m => m.id === moduleId);
//         const lessons = module?.lessons || [];
        
//         // 2. Find the index of the current lesson
//         const currentIndex = lessons.findIndex(l => l.id === lessonId);
//         setCurrentLesson(lessons[currentIndex] || null);

//         // 3. Set the IDs for the adjacent lessons
//         setNav({
//           prev: currentIndex > 0 ? lessons[currentIndex - 1].id : null,
//           next: currentIndex < lessons.length - 1 ? lessons[currentIndex + 1].id : null
//         });
//       }
//       setLoading(false);
//     };
//     fetchLessonData();
//   }, [courseId, moduleId, lessonId]);

//     if (loading || !currentLesson) {
//       return (
//         <div className="min-h-screen bg-[#020617] flex items-center justify-center">
//           <div className="w-10 h-10 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
//         </div>
//       );
//     }

//   // if (loading) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">Loading Lesson...</div>;
//   // if (!currentLesson) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">Lesson not found.</div>;

//   return (
//     /* 1. Main container is now a flex row */
//     <div className="flex min-h-screen bg-[#020617] text-slate-300 mt-10 ">
      
//       {/* ── Left Sidebar Navigation ─────────────────────────── */}
//       <aside className="hidden md:flex w-64 lg:w-72 flex-col mt-15 rounded-3xl  border-r border-white/5 bg-[#0b1120]/50 backdrop-blur-md sticky top-16 h-[calc(100vh-64px)] z-40">
//         <div className="flex flex-col h-full p-6 ">
          
//           {/* Back Button */}
//           <button 
//             onClick={() => router.push(`/learn/paths/${courseId}/modules/${moduleId}`)}
//             className="flex items-center gap-2 text-sm hover:text-brand-accent transition-colors mb-10 text-slate-400 group"
//           >
//             <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" />
//             <span>Back to Module</span>
//           </button>

//           {/* Context Info */}
//           <div className="space-y-6">
//             <div>
//               <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">Currently Learning</span>
//               <span className="text-sm font-bold text-white block leading-tight">{course?.title}</span>
//             </div>

//             <div>
//               <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">Progress</span>
//               <div className="inline-block text-xs bg-brand-accent/10 text-brand-accent px-3 py-1.5 rounded border border-brand-accent/20 font-bold">
//                 Module {moduleId}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar Footer / Support */}
//           <div className="mt-auto pt-6 border-t border-white/5">
//             <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase font-bold tracking-tighter">
//               <HiOutlineAcademicCap className="text-brand-accent text-sm" />
//               Grades 9-12 Optimized
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* ── Main Content Area ───────────────────────────────── */}
//       <main className="flex-1">
//         <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
//           {/* ── Lesson Header ──────────────────────────────────── */}
//           <header className="mb-12">
//             <div className="flex items-center gap-2 text-brand-accent mb-4">
//               <HiOutlineBookOpen className="text-xl" />
//               <span className="text-xs font-bold uppercase tracking-[0.2em]">Theoretical Unit</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
//               {currentLesson.title}
//             </h1>
//             <div className="flex items-center gap-6 text-sm text-slate-500 border-b border-white/5 pb-8">
//               <span>{currentLesson.duration || "15 min"} reading time</span>
//             </div>
//           </header>

//           {/* ── Main content ─────────────────────────────────── */}
//           <article className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-p:text-slate-400 prose-p:leading-relaxed prose-strong:text-brand-accent">
//             <p className="text-xl italic border-l-2 border-brand-accent pl-6 mb-10">
//               In this lesson, we break down the core theoretical foundations. Take your time to understand the "Why" before we move into the "How."
//             </p>

//             <div className="space-y-8">
//               <section>
//                 <h2 className="text-2xl font-bold mb-4">Concept Overview</h2>
//                 <p>
//                   {currentLesson.content || "As this is a theoretical platform, the content here focuses on high-level logic."}
//                 </p>
//               </section>

//               <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-10">
//                 <h3 className="text-white font-bold mb-4 flex items-center gap-2">
//                   <span className="w-2 h-2 rounded-full bg-brand-accent" /> 
//                   Key Definitions
//                 </h3>
//                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//                   <li className="bg-[#020617] p-4 rounded-xl border border-white/5">
//                      <strong className="block mb-1 text-brand-accent">Logic Flow</strong>
//                      The sequential order in which instructions are processed.
//                   </li>
//                   <li className="bg-[#020617] p-4 rounded-xl border border-white/5">
//                      <strong className="block mb-1 text-brand-accent">Syntax</strong>
//                      The set of rules that defines symbols.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </article>

//           {/* ── Footer Navigation ─────────────────────────────── */}
//           <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            
//             {/* PREVIOUS BUTTON */}
//             <button 
//               disabled={!nav.prev}
//               onClick={() => router.push(`/learn/paths/${courseId}/modules/${moduleId}/${nav.prev}`)}
//               className={`flex items-center gap-2 transition-colors group ${
//                 !nav.prev ? "opacity-0 pointer-events-none" : "text-slate-500 hover:text-white"
//               }`}
//             >
//               <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" />
//               <div className="flex flex-col items-start text-left">
//                 <span className="text-[10px] uppercase font-bold tracking-tighter">Previous</span>
//                 <span className="text-sm">Earlier Topic</span>
//               </div>
//             </button>

//             {/* NEXT BUTTON */}
//             <button 
//               onClick={() => {
//                 if (nav.next) {
//                   router.push(`/learn/paths/${courseId}/modules/${moduleId}/${nav.next}`);
//                 } else {
//                   // Logic for when they finish the module (e.g., back to dashboard or next module)
//                   router.push(`/learn/paths/${courseId}/modules/`);
//                 }
//               }}
//               className="w-full sm:w-auto px-10 py-4 bg-brand-accent hover:bg-brand-accent/90 text-black font-bold rounded-2xl shadow-xl shadow-brand-accent/20 transition-all flex items-center justify-center gap-3 group"
//             >
//               <div className="flex flex-col items-end text-right">
//                 <span className="text-[10px] uppercase font-bold tracking-tighter">
//                   {nav.next ? "Up Next" : "Finish"}
//                 </span>
//                 <span className="text-sm">
//                   {nav.next ? "Next Topic" : "Module Complete"}
//                 </span>
//               </div>
//               <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
//             </button>
//           </footer>
//         </div>
//       </main>
//     </div>
//   );
// }







"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCoursesData, Course, Lesson } from "@/services/courses";
import { 
  HiOutlineArrowLeft, 
  HiOutlineArrowRight, 
  HiOutlineBookOpen, 
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
  HiOutlineInformationCircle
} from "react-icons/hi2";
import ReactMarkdown from "react-markdown"; // Recommended for rendering the **bold** text in your body

export default function LessonPage() {
  const { courseId, moduleId, lessonId } = useParams();
  const router = useRouter();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [nav, setNav] = useState<{ prev: string | null; next: string | null }>({ prev: null, next: null });

  useEffect(() => {
    const fetchLessonData = async () => {
      const categories = await getCoursesData();
      const foundCourse = categories.flatMap(cat => cat.courses).find(c => c.id === courseId);

      if (foundCourse) {
        setCourse(foundCourse);
        const module = foundCourse.modules?.find(m => m.id === moduleId);
        const lessons = module?.lessons || [];
        const currentIndex = lessons.findIndex(l => l.id === lessonId);
        
        setCurrentLesson(lessons[currentIndex] || null);
        setNav({
          prev: currentIndex > 0 ? lessons[currentIndex - 1].id : null,
          next: currentIndex < lessons.length - 1 ? lessons[currentIndex + 1].id : null
        });
      }
      setLoading(false);
    };
    fetchLessonData();
  }, [courseId, moduleId, lessonId]);

  if (loading || !currentLesson) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-300 mt-10">
      
      {/* ── Left Sidebar ───────────────────────────────────── */}
      <aside className="hidden md:flex w-64 lg:w-72 flex-col mt-15 rounded-3xl border-r border-white/5 bg-[#0b1120]/50 backdrop-blur-md sticky top-16 h-[calc(100vh-64px)] z-40">
        <div className="flex flex-col h-full p-6">
          <button 
            onClick={() => router.push(`/learn/paths/${courseId}/modules/${moduleId}`)}
            className="flex items-center gap-2 text-sm hover:text-brand-accent transition-colors mb-10 text-slate-400 group"
          >
            <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Module</span>
          </button>

          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">Course</span>
              <span className="text-sm font-bold text-white block leading-tight">{course?.title}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">Lesson Type</span>
              <div className="inline-block text-xs bg-brand-accent/10 text-brand-accent px-3 py-1.5 rounded border border-brand-accent/20 font-bold">
                {currentLesson.isFree ? "Free" : "Premium"}
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-white/5">
            <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase font-bold tracking-tighter">
              <HiOutlineAcademicCap className="text-brand-accent text-sm" />
              Grades 9-12 Optimized
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main Content Area ───────────────────────────────── */}
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
          
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-brand-accent mb-4">
              <HiOutlineBookOpen className="text-xl" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Theoretical Unit</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              {currentLesson.title}
            </h1>
            <p className="text-lg text-slate-400 mb-6 italic leading-relaxed">
              {currentLesson.description}
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500 border-b border-white/5 pb-8">
              <span>{currentLesson.duration} reading time</span>
            </div>
          </header>

          {/* Dynamic Sections */}
          <div className="space-y-12">
            {currentLesson.sections?.map((section) => (
              <section key={section.id} className={`group ${section.type === 'concept' ? 'bg-brand-accent/5 p-8 rounded-3xl border border-brand-accent/10' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  {section.type === 'concept' && <HiOutlineInformationCircle className="text-brand-accent text-xl" />}
                  <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
                </div>
                <div className="prose prose-invert prose-slate max-w-none prose-p:text-slate-400 prose-p:leading-relaxed prose-strong:text-brand-accent">
                  <ReactMarkdown>{section.body}</ReactMarkdown>
                </div>
              </section>
            ))}
          </div>

          {/* Vocabulary / Key Definitions Grid */}
          {currentLesson.vocabulary && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-16">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-accent" /> 
                Lesson Vocabulary
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {currentLesson.vocabulary.map((vocab, index) => (
                  <li key={index} className="bg-[#020617] p-4 rounded-xl border border-white/5">
                    <strong className="block mb-1 text-brand-accent">{vocab.term}</strong>
                    <span className="text-slate-400">{vocab.definition}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Pro Tip Section */}
          {currentLesson.proTip && (
            <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-2xl p-6 flex gap-4 items-start">
              <div className="bg-brand-accent p-2 rounded-lg">
                <HiOutlineLightBulb className="text-[#020617] text-xl" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Pro Tip</span>
                <p className="text-slate-300 mt-1 text-sm leading-relaxed">{currentLesson.proTip}</p>
              </div>
            </div>
          )}

          {/* Navigation Footer */}
          <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button 
              disabled={!nav.prev}
              onClick={() => router.push(`/learn/paths/${courseId}/modules/${moduleId}/${nav.prev}`)}
              className={`flex items-center gap-2 transition-colors group ${
                !nav.prev ? "opacity-0 pointer-events-none" : "text-slate-500 hover:text-white"
              }`}
            >
              <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] uppercase font-bold tracking-tighter">Previous</span>
                <span className="text-sm">Earlier Topic</span>
              </div>
            </button>

            <button 
              onClick={() => {
                if (nav.next) {
                  router.push(`/learn/paths/${courseId}/modules/${moduleId}/${nav.next}`);
                } else {
                  router.push(`/learn/dashboard`);
                }
              }}
              className="w-full sm:w-auto px-10 py-4 bg-brand-accent hover:bg-brand-accent/90 text-black font-bold rounded-2xl shadow-xl shadow-brand-accent/20 transition-all flex items-center justify-center gap-3 group"
            >
              <div className="flex flex-col items-end text-right">
                <span className="text-[10px] uppercase font-bold tracking-tighter">
                  {nav.next ? "Up Next" : "Complete"}
                </span>
                <span className="text-sm">
                  {nav.next ? "Next Topic" : "Finish Module"}
                </span>
              </div>
              <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </footer>
        </div>
      </main>
    </div>
  );
}