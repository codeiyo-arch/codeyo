// src/services/api.ts
import { 
  BookOpen, Zap, Trophy, ShieldCheck, Code2, Briefcase 
} from "lucide-react";

export const getDashboardData = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    stats: [
      { label: "Lessons Enrolled", value: "2", icon: BookOpen, color: "text-blue-400" },
      { label: "Coding Score", value: "-", icon: Zap, color: "text-emerald-400" },
      { label: "Challenges Won", value: "-", icon: Trophy, color: "text-yellow-400" },
    ],
    milestones: [
      { title: "Basics", status: "Active", icon: ShieldCheck, isDone: false, isActive: true },
      { title: "Logic", status: "Locked", icon: Code2, isDone: false, isActive: false },
      { title: "Projects", status: "Locked", icon: Briefcase, isDone: false, isActive: false },
    ],
    leaderboard: [
      { name: "S. Rahat", xp: 2840, rank: 1, avatar: "SR" },
      { name: "Ahmed K.", xp: 2100, rank: 2, avatar: "AK" },
      { name: "You", xp: 1850, rank: 3, avatar: "ME", isUser: true },
      { name: "Zoya W.", xp: 1420, rank: 4, avatar: "ZW" },
    ],
    syntaxSheets: [
      { name: "HTML5 Layouts", tags: ["Variables", "Loops"], color: "border-blue-500/30" },
      { name: "JS Functions", tags: ["Flexbox", "Grid"], color: "border-orange-500/30" },
    ]
  };
};




export interface BlogPost {
  id: number; // Add this
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  href: string;
  size?: "normal" | "wide";
}

export const getInsightsData = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    featured: {
      id: 1,
      tag: "Platform Update",
      date: "June 12, 2026",
      title: "Codeiyo Is Live: Pakistan's First Pro-Grade Coding Platform for Students",
      excerpt: "After months of building in the open, we're officially launching...",
      readTime: "5 min read",
      href: "#",
    },
    posts: [
      {
        id: 2,
        tag: "Tutorial",
        date: "June 8, 2026",
        title: "Why We Chose Monaco Over CodeMirror",
        excerpt:
          "A deep dive into the editor decision that defines the Codeiyo experience — and why 'real tools' isn't just a tagline.",
        readTime: "4 min read",
        size: "normal",
        href: "#",
      },
      {
        id: 3,
        tag: "Student Story",
        date: "June 5, 2026",
        title: "From Grade 9 to First Deployed Website",
        excerpt:
          "Bilal from Lahore had never opened a code editor before Codeiyo. Three months later, he shipped a live portfolio. This is his story.",
        readTime: "3 min read",
        size: "normal",
        href: "#",
      },
      {
        id: 4,
        tag: "News",
        date: "May 28, 2026",
        title: "Codeiyo Is Now Running in 3 Lahore High Schools",
        excerpt:
          "Our first school partnerships are live. We walked into classrooms, ran seminars, and watched students open the editor for the first time. Here's what happened.",
        readTime: "3 min read",
        size: "wide",
        href: "#",
      },
      {
        id: 5,
        tag: "Coding Tips",
        date: "May 20, 2026",
        title: "5 JavaScript Habits Every Beginner Should Build Early",
        excerpt:
          "Small discipline wins — naming conventions, console.log hygiene, comment style — that separate the students who level up fast from those who plateau.",
        readTime: "6 min read",
        size: "normal",
        href: "#",
      },
      {
        id: 6,
        tag: "Student Story",
        date: "May 14, 2026",
        title: "How Sana Built a Calculator App With Zero Prior Experience",
        excerpt:
          "She started with nothing. Eight Codeiyo lessons later, she had a working calculator and the confidence to keep going.",
        readTime: "3 min read",
        size: "normal",
        href: "#",
      },
      {
        id: 7,
        tag: "Tutorial",
        date: "May 2, 2026",
        title: "HTML in 30 Minutes: The Only Guide You Need",
        excerpt:
          "No fluff. No 10-hour courses. Just the minimum-effective-dose of HTML to get you building real pages today.",
        readTime: "8 min read",
        size: "normal",
        href: "#",
      },
      {
        id: 8,
        tag: "News",
        date: "April 18, 2026",
        title: "We Just Crossed 1,000 Student Sign-Ups",
        excerpt:
          "We didn't run ads. We didn't have a marketing budget. We just built something real and told students about it in person.",
        readTime: "2 min read",
        size: "normal",
        href: "#",
      },
      // ... add other posts here
    ] as BlogPost[]
  };
};








