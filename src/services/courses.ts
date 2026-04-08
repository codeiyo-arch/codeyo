// Types to ensure data consistency
export type Level = "Beginner" | "Intermediate" | "Advanced";
export type Tag = "Free" | "Pro" | "New" | "Popular";

export interface Course {
  id: string;
  iconType: string; // Used to look up the React Icon
  title: string;
  desc: string;
  lessons: number;
  hours: number;
  level: Level;
  tag?: Tag;
  path: string;
  locked?: boolean;
  modules?: Module[];
}

export interface Category {
  id: string;
  label: string;
  iconType: string;
  courses: Course[];
}

// export interface Lesson {
//   id: string;
//   title: string;
//   duration: string;
//   isFree: boolean;
//   videoUrl?: string; // Optional for later
//   content?: string;  // Markdown or HTML content
// }

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isFree: boolean;
  videoUrl?: string; 
  
  // High-level "Hook" to engage the student immediately
  description: string; 

  // Instead of one long 'content' string, we split it into logical parts
  sections: {
    id: string;
    type: "text" | "concept" | "example" | "warning"; 
    heading: string;
    body: string; // This is where your Markdown lives
  }[];

  // Dedicated field for the "Definition" cards in your current UI
  vocabulary: {
    term: string;
    definition: string;
  }[];

  // A single takeaway or "Key Insight"
  proTip?: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export const getCoursesData = async (): Promise<Category[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return [
    {
    id: "school",
    label: "School Curriculum",
    iconType: "school",
    courses: [
      {
          id: "school-html-css",
          iconType: "html",
          title: "HTML & CSS Foundations",
          desc: "The bedrock of web development from scr`atch.",
          lessons: 45,
          hours: 18,
          level: "Beginner",
          tag: "Popular",
          path: "/courses/html-css",
          modules: [
          {
            id: "theory",
            title: "Theoretical Concepts",
            lessons: [
              {
                "id": "l1",
                "title": "Introduction to Sets",
                "duration": "10m",
                "isFree": true,
                "description": "Before we code, we must understand how logic groups data. Sets are the foundation of everything from databases to user permissions.",
                "sections": [
                  {
                    "id": "s1",
                    "type": "text",
                    "heading": "The Core Concept",
                    "body": "A **Set** is a collection of distinct objects. In the world of programming, we use sets when we want to ensure that every item in a list is unique—like a list of registered email addresses."
                  },
                  {
                    "id": "s2",
                    "type": "concept",
                    "heading": "The Venn Diagram Logic",
                    "body": "When comparing two groups of data, we look for the **Union** (everything in both) or the **Intersection** (only what they share)."
                  }
                ],
                "vocabulary": [
                  {
                    "term": "Element",
                    "definition": "An individual member or object belonging to a set."
                  },
                  {
                    "term": "Null Set",
                    "definition": "A set that contains no elements, often represented as { }."
                  }
                ],
                "proTip": "In most programming languages, adding a duplicate item to a Set will simply do nothing. Use this to your advantage to clean up messy data!"
              }
              // { id: "l1", title: "Introduction to Sets", duration: "10m", isFree: true },
              // { id: "l2", title: "Quadratic Equations", duration: "15m", isFree: false },
            ]
          },
          {
            id: "m2",
            title: "Trigonometry",
            lessons: [
              // { id: "l3", title: "Ratios and Identities", duration: "20m", isFree: false },
            ]
          }
        ]
      },
      {
        id: "school-javascript",
        iconType: "js",
        // icon: <FaGlobe />,
        title: "JavaScript – Zero to ES2024",
        desc: "From variables to async/await. Real projects, real patterns, no hand-waving.",
        lessons: 88,
        hours: 36,
        level: "Beginner",
        tag: "Popular",
        path: "/courses/javascript",
      },
      {
        id: "s13",
        iconType: "code",
        title: "Mathematics – Matric & Intermediate",
        desc: "Algebra, calculus, trigonometry and stats aligned with FBISE & all provincial boards.",
        lessons: 120,
        hours: 48,
        level: "Beginner",
        tag: "Popular",
        path: "/courses/school-math",
        
        modules: [
        {
          id: "m1",
          title: "Algebra Fundamentals",
          lessons: [
          //   // { id: "l1", title: "Introduction to Sets", duration: "10m", isFree: true },
            //  { id: "l2", title: "Quadratic Equations", duration: "15m", isFree: false },
          ]
        },
        {
          id: "m2",
          title: "Trigonometry",
          lessons: [
            // { id: "l3", title: "Ratios and Identities", duration: "20m", isFree: false },
          ]
        }
      ]
      },
      {
        id: "s2",
        iconType: "flask",
        title: "Computer Science – O/A Level",
        desc: "Cambridge IGCSE & A-Level CS — algorithms, data structures, Python, databases and networks.",
        lessons: 95,
        hours: 40,
        level: "Intermediate",
        tag: "New",
        path: "/courses/school-cs-alevel",
      },
      {
        id: "s3",
        iconType: "atom",
        // icon: <FaAtom />,
        title: "Physics – Matric",
        desc: "Motion, force, electricity, waves and modern physics with numerical walkthroughs.",
        lessons: 80,
        hours: 32,
        level: "Beginner",
        path: "/courses/school-physics",
      },
      {
        id: "s4",
        iconType: "MdComputer",
        title: "ICT – Matric (PTB / KPK / Sindh)",
        desc: "Provincial board ICT syllabus — basics of computing, MS Office, networking fundamentals.",
        lessons: 60,
        hours: 24,
        level: "Beginner",
        tag: "Free",
        path: "/courses/school-ict",
        locked: false,
      },
      {
        id: "s5",
        iconType: "bookopen",
        title: "Principles of Commerce",
        desc: "Bookkeeping, business organisations, banking and economics — Matric Commerce stream.",
        lessons: 55,
        hours: 22,
        level: "Beginner",
        tag: "Free",
        path: "/courses/school-commerce",
        locked: false,
      },
      {
        id: "s6",
        iconType: "graduationcap",
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
      iconType: "globe",
      courses: [
        {
          id: "f1",
          iconType: "code",
          title: "HTML & CSS Foundations",
          desc: "The bedrock of web development from scratch.",
          lessons: 45,
          hours: 18,
          level: "Beginner",
          tag: "Free",
          path: "/courses/html-css",
        },
        {
          id: "f2",
          iconType: "globe",
        // icon: <FaGlobe />,
        title: "JavaScript – Zero to ES2024",
        desc: "From variables to async/await. Real projects, real patterns, no hand-waving.",
        lessons: 88,
        hours: 36,
        level: "Beginner",
        tag: "Popular",
        path: "/courses/javascript",
      },
      {
                  id: "f3",
          iconType: "brain",
        // icon: <FaBrain />,
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
        id: "f4",
        iconType: "code",
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
    
  ];
};