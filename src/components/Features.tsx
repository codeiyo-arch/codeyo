"use client";
import DisplayCards from "@/components/ui/display-cards";
import { Monitor, Map, Zap, FileText } from "lucide-react";

const Features = () => {
  const featureCards = [
    {
      // icon: <span className="text-3xl">🗺️</span>,
      icon: <Map className="w-8 h-8" />,
      title: "Step-by-Step Roadmap",
      description:
        "Follow a structured learning path designed for students.",

      date: "",
      className:
        "[grid-area:stack] hover:-translate-y-30 ",
    },
    {
            // icon: <span className="text-3xl">⚡</span>,
      icon: <Zap className="w-8 h-8" />,
      title: "Practical-Based Learning",
      description:
      "Learn by doing. Write real code, solve challenges, and build practical skills.",
        // "Learn by doing! Write code, solve real problems to improve your skills.",
      date: "",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-20 ",
    },
    {
      // icon: <span className="text-3xl">📝</span>,
      icon: <FileText className="w-8 h-8" />,
      title: "Student-Friendly Lessons",
      description:
        "Beginner-friendly lessons designed for students with no coding experience.",
        // "Designed for students to start coding easily, no prior experience required.",
      date: "",
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:-translate-y-10 ",
    },
    {
            // icon: <span className="text-3xl">💻</span>,
      icon: <Monitor className="w-8 h-8" />, 
      title: "Built-in Editor",
      description:
        "Code in Python, JavaScript, HTML, and more without installing anything.",
      date: "",
      className:
        "[grid-area:stack] translate-x-48 translate-y-30 hover:translate-y-10",
    },
  ];

  return (
    <section className="pb-25 pt-10 mb-25 flex flex-col items-center justify-center">
            <div className="absolute left-1/2 -translate-x-1/2 w-full h-130 bg-brand-accent/10 blur-[100px] rounded-full -z-10" />
      {/* Heading */}
      <div className="text-center mb-10 space-y-4">
        <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em]">
          Core Features
        </h2>

        <h3 className="text-3xl md:text-5xl font-bold">
          Everything you need to <br />
          <span className="text-gradient">
            start learning coding.
          </span>
        </h3>

      </div>

      <div className="-translate-x-16 md:-translate-x-24">
        <DisplayCards cards={featureCards} />
      </div>


    </section>
  );
};

export default Features;

