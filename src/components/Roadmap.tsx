"use client";
import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "1. Route",
    date: "Jan 2024",
    content: "Start with beginner-friendly lessons and follow a clear step-by-step roadmap designed for students.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [5,2],
    status: "pending" as const,
    energy: 10,
  },
  {
    id: 2,
    title: "2. Practice",
    date: "Feb 2024",
    content: "Write and run code instantly in the built-in editor without installing any software.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 30,
  },
  {
    id: 3,
    title: "3. Skills",
    date: "Mar 2024",
    content: "Solve coding challenges and build small projects to strengthen your programming skills.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "4. Tracking",
    date: "Apr 2024",
    content: "Visualize your learning journey, see completed lessons, and focus on areas that need improvement.",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 80,
  },
  {
    id: 5,
    title: "5. Builds",
    date: "May 2024",
    content: "Apply what you’ve learned by creating real portfolio projects that showcase your skills.",
    category: "Release",
    icon: Clock,
    relatedIds: [4, 1],
    status: "pending" as const,
    energy: 100,
  },
];

export function Roadmap() {
return (
  <section className="border-y border-brand-border pb-10">
    <div className="absolute -translate-x-1/2 w-full h-120 bg-brand-accent/10 blur-[100px] rounded-full -z-10" />

    {/* CENTER HEADING (UNCHANGED) */}
    <div className="text-center space-y-4">
      <h2 className="text-md font-bold mt-10 text-brand-accent uppercase tracking-[0.2em]">
        Roadmap
      </h2>

      <h3 className="text-3xl md:text-5xl font-bold sm:mb-5">
        Master Coding <br />
        <span className="text-gradient">
          Step by Step
        </span>
      </h3>
    </div>

    {/* NEW TWO COLUMN SECTION */}
    <div className="flex flex-col lg:flex-row items-center justify-center md:gap-60 gap-40 lg:gap-60">
      {/* LEFT SIDE TEXT */}
      <div className="w-full max-w-lg text-center lg:text-left space-y-4">
        <h4 className="md:text-4xl lg:text-5xl font-semibold text-gradient whitespace-nowrap">
          Learn. Build. Evolve.
        </h4>

        <ul className="list-disc pl-5 space-y-3 max-w-lg mx-auto lg:mx-0 text-slate-400 marker:text-green-500">
          <li>
            Follow a <span className="text-slate-200 font-semibold">clear learning path</span> step by step.
          </li>

          <li>
            Learn the <span className="text-slate-200 font-semibold">basic coding concepts</span> in a simple way.
          </li>

          <li>
            <span className="text-slate-200 font-semibold">Practice coding</span> by writing real code yourself.
          </li>

          <li>
            Solve <span className="text-slate-200 font-semibold">fun challenges</span> to improve your thinking skills.
          </li>

          <li>
            Build <span className="text-slate-200 font-semibold">real projects</span> and become a confident developer.
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE TIMELINE */}
      <div className="w-full max-w-md flex justify-center lg:-mt-18">
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </div>

  </section>
);
}

export default Roadmap;

