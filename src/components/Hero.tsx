"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import { InteractiveHoverButton } from "./ui/HoverButton";
import {
  Terminal,
  ChevronRight,
  Users,
  Brain
} from 'lucide-react';


import { Session } from '@supabase/supabase-js';
import { createClient } from '../utils/supabase/client';




const AnimatedCodeiyoSnippet: React.FC = () => {
  const languages = ["javascript", "python"];
  const codeiyoText = "@codeiyo/core";
  const typingSpeed = 100; // ms per letter
  const pauseTime = 1000; // wait after full word

  // Language Animation
  const [language, setLanguage] = useState("");
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const [isDeletingLang, setIsDeletingLang] = useState(false);

  // Codeiyo Animation
  const [typedCodeiyo, setTypedCodeiyo] = useState("");
  const [isDeletingCodeiyo, setIsDeletingCodeiyo] = useState(false);

  // Animate language infinitely
  useEffect(() => {
    const fullText = languages[currentLangIndex];
    let index = isDeletingLang ? fullText.length : 0;

    const tick = () => {
      if (!isDeletingLang) {
        setLanguage(fullText.substring(0, index + 1));
        index++;
        if (index === fullText.length) {
          setTimeout(() => setIsDeletingLang(true), pauseTime);
        }
      } else {
        setLanguage(fullText.substring(0, index - 1));
        index--;
        if (index === 0) {
          setIsDeletingLang(false);
          setCurrentLangIndex((prev) => (prev + 1) % languages.length);
        }
      }
    };

    const timer = setInterval(tick, typingSpeed);
    return () => clearInterval(timer);
  }, [currentLangIndex, isDeletingLang]);

  // Animate @codeiyo/core infinitely
  useEffect(() => {
    let index = isDeletingCodeiyo ? codeiyoText.length : 0;

    const tick = () => {
      if (!isDeletingCodeiyo) {
        setTypedCodeiyo(codeiyoText.substring(0, index + 1));
        index++;
        if (index === codeiyoText.length) {
          setTimeout(() => setIsDeletingCodeiyo(true), pauseTime);
        }
      } else {
        setTypedCodeiyo(codeiyoText.substring(0, index - 1));
        index--;
        if (index === 0) {
          setIsDeletingCodeiyo(false);
        }
      }
    };

    const timer = setInterval(tick, typingSpeed);
    return () => clearInterval(timer);
  }, [isDeletingCodeiyo]);

  return (
    <div className="p-8 font-mono text-sm leading-relaxed overflow-hidden relative bg-[#0b0e1a] rounded-xl shadow-lg">
      {/* Import Line */}
      <div className="flex gap-4 mb-2">
        <span className="text-slate-600 select-none">1</span>
        <span className="text-sky-400">import</span>
        <span className="text-white">AIEngine</span>
        <span className="text-sky-400">from</span>
        <span className="text-emerald-300">&quot;{typedCodeiyo}&quot;</span>;
      </div>

      {/* Function */}
      <div className="flex gap-4 mb-2">
        <span className="text-slate-600 select-none">2</span>
        <span className="text-sky-400">async function</span>
        <span className="text-indigo-300">launchCodeiyo</span>() {"{"}
      </div>

      {/* Init */}
      <div className="flex gap-4 mb-2">
        <span className="text-slate-600 select-none">3</span>
        <span className="ml-8 text-sky-400">const</span>
        <span className="text-white">session = </span>
        <span className="text-sky-400">await</span>
        <span className="text-indigo-300">AIEngine.init</span>();
      </div>

      {/* Comment */}
      <div className="flex gap-4 mb-2">
        <span className="text-slate-600 select-none">4</span>
        <span className="ml-8 text-slate-400">{`//`} Generating personalized learning roadmap</span>
      </div>

      {/* Animated language line */}
      <div className="flex gap-4 mb-2">
        <span className="text-slate-600 select-none">5</span>
        <span className="ml-8 text-sky-400">return</span>
        <span className="text-white">session.</span>
        <span className="text-indigo-300">
          recommend(&quot;<span className="text-yellow-300">{language}</span>&quot;)
        </span>;
      </div>

      <div className="flex gap-4">
        <span className="text-slate-600 select-none">6</span>
        <span className="text-white">{"}"}</span>
      </div>

      {/* Terminal */}
      <div className="absolute bottom-6 left-8 right-8 bg-black/50 backdrop-blur-md rounded-xl border border-white/5 p-4 box-glow">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1 h-1 rounded-full bg-brand-accent animate-ping" />
          <span className="text-[10px] font-bold text-brand-accent uppercase">Live Output</span>
        </div>
        <p className="text-[11px] text-slate-300 font-mono">
          <span className="text-emerald-400">$</span> codeiyo run --lang {language}<br />
          <span className="text-slate-500">Loading personalized roadmap... </span><br />
          <span className="text-slate-500">Fetching practice challenges... </span>
        </p>
      </div>
    </div>
  );
};




const lines = [
  "Built for beginners. Designed for schools.",
  "Where students become developers.",
  "For students. For schools.",
  "The coding platform for your classroom.",
  "Learn today. Build tomorrow.",
]

const TYPING_SPEED = 50
const DELETING_SPEED = 30
const PAUSE_TIME = 2000

function EyebrowTypewriter() {
  const [displayed, setDisplayed] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentLine = lines[lineIndex]
    let charIndex = isDeleting ? displayed.length : displayed.length

    const tick = () => {
      if (!isDeleting) {
        setDisplayed(currentLine.substring(0, charIndex + 1))
        charIndex++
        if (charIndex === currentLine.length) {
          setTimeout(() => setIsDeleting(true), PAUSE_TIME)
        }
      } else {
        setDisplayed(currentLine.substring(0, charIndex - 1))
        charIndex--
        if (charIndex === 0) {
          setIsDeleting(false)
          setLineIndex((prev) => (prev + 1) % lines.length)
        }
      }
    }

    const timer = setInterval(tick, isDeleting ? DELETING_SPEED : TYPING_SPEED)
    return () => clearInterval(timer)
  }, [isDeleting, lineIndex])

  return (
    <p className="text-brand-accent font-outfit font-medium text-lg tracking-widest uppercase mb-4">
      {displayed}
      <span className="animate-pulse">|</span>
    </p>
  )
}



const lines_1 = [
  "Your first line of code starts here.",
  "Zero experience. Real projects. Real progress.",
  "Start coding today. No experience required.",
  "Learn by doing. Not by watching.",
  "The platform that makes coding click.",
]
function EyebrowCycle() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % lines_1.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <p
      className="text-xl mb-8 text-slate-400 max-w-xl leading-relaxed    transition-opacity duration-400"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {lines_1[index]}
    </p>
  )
}



export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const fastProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 20,
  });

  const rotate = useTransform(fastProgress, [0, 1], [20, 0]);
  const translate = useTransform(
    fastProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, -200] // disable upward movement on mobile
  );
  const scale = useTransform(fastProgress, [0, 1], isMobile ? [1, 1] : [1.2, 1]); // no scale on mobile

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center relative p-2 md:p-20 ${isMobile ? "min-h-screen" : "h-240 md:h-320"
        }`} // auto height on mobile
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          style={{ translateY: translate }}
          className="max-w-5xl mx-auto text-center mb-12"
        >
          {titleComponent}
        </motion.div>

        <motion.div
          style={{
            rotateX: isMobile ? 0 : rotate,
            scale,
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

// Hero Component
const Hero = () => {

   const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    
    const supabase = createClient();
  
    useEffect(() => {
      const checkAuth = async () => {
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        setSession(currentSession);
        setLoading(false);
      };
  
      checkAuth();
  
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
        setSession(newSession);
      });
  
      return () => subscription.unsubscribe();
    }, []);
  
  return (
    <section className="relative pt-15 lg:pt-0 md:pt-25 pb-15 px-6 overflow-hidden ">
        <span aria-hidden className="pointer-events-none select-none absolute top-15 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/2 leading-none whitespace-nowrap">
          CODEIYO.
        </span>
      {/* Background Radial Glow */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[90%] h-200 bg-brand-accent/10 blur-[140px] rounded-full -z-10" />

      <div className=" mx-auto flex flex-col items-center text-center">
        {/* Scroll Animated IDE */}
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto">
              {/* Pill */}
              <div className="sm:mt-5 mb-5 -mt-10 xl:mt-20">
                <div className=" glass-pill w-fit px-4 py-2 xl:-mt-5 lg:-mt-10  flex items-center gap-2 group cursor-pointer hover:border-brand-accent/40 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  <span className="text-sm font-semibold text-brand-accent uppercase tracking-widest">
                    v0.0.1 is live
                  </span>
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Heading */}
              {/* <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#F8FAFC] mb-6 leading-[1.05]">
                Code<span className="text-brand-accent">.</span> Build<span className="text-brand-accent">.</span> Deploy<span className="text-brand-accent">.</span><br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-accent to-[#34D399] filter drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  No setup required<span className="text-[#ffffff]">.</span>
                </span>
              </h1> */}

                <EyebrowTypewriter />

                  {/* <p className="text-brand-accent font-outfit font-medium text-lg tracking-widest uppercase mb-4">
                  For students. For schools.
                </p> */}

                {/* <p className="text-brand-accent font-outfit font-medium text-lg tracking-widest uppercase mb-4">
                  Learn today. Build tomorrow.
                </p>
                <p className="text-brand-accent font-outfit font-medium text-lg tracking-widest uppercase mb-4">
                  The coding platform for your classroom.
                </p> */}


                {/* Heading */}
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#F8FAFC] mb-6 leading-[1.05]">
                  Code<span className="text-brand-accent">.</span> Learn<span className="text-brand-accent">.</span> Build<span className="text-brand-accent">.</span><br />
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-accent to-[#34D399] filter drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    From day one<span className="text-[#ffffff]">.</span>
                  </span>
                </h1>

                {/* Description */}
                {/* <p className="text-xl mb-8 text-slate-400 max-w-xl leading-relaxed">
                  No setup. No confusion. Just code.
                </p> */}

                {/* <p className="text-xl mb-8 text-slate-400 max-w-xl leading-relaxed">
                  Zero experience. Real projects. Real progress.
                </p> */}

                <EyebrowCycle />

                {/* <p className="text-xl mb-8 text-slate-400 max-w-xl leading-relaxed">
                  Your first line of code starts here.
                </p> */}

                  
                {/* <p className="text-brand-accent font-outfit font-medium text-lg tracking-widest uppercase mb-4">
                  From confused to confident.
                </p> */}

                {/* Main h1 */}
                {/* <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#F8FAFC] mb-6 leading-[1.05]">
                  Code<span className="text-brand-accent">.</span> Build<span className="text-brand-accent">.</span> Deploy<span className="text-brand-accent">.</span><br />
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-accent to-[#34D399] filter drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    No setup required<span className="text-[#ffffff]">.</span>
                  </span>
                </h1> */}
              {/* Description */}
              {/* <p className="text-xl mb-5 text-slate-400 max-w-2xl leading-relaxed">
                Learn programming with no setup, fully aligned with school & curriculum, using a structured roadmap and instant feedback.
              </p> */}

              
              <div className="flex flex-wrap justify-center gap-6  ">
                <div className="rounded-xl transition-all flex items-center gap-4 group box-glow">

                  <Link
                    // If logged in, go to codex. If not, go to login.
                    href={!loading && session ? "/code/sandbox/codex" : "/auth/signin"}
                  >
                    <InteractiveHoverButton text="Start Free Demo" className="w-60" />
                  </Link>
                  
                  {/* <Link href="/codex">
                    <InteractiveHoverButton text="Start Free Demo" className="w-60" />
                  </Link> */}
                </div>
                <button className="px-8 py-3 bg-transparent  border-2 border-border-subtle hover:bg-brand-accent text-white hover:border-brand-accent-hover font-bold rounded-xl transition-all duration-300 flex items-center gap-2 group">
                  <Users className="w-5 h-5 transition-transform group-hover:scale-110" />
                  Become a Partner
                </button>
              </div>
            </div>
          }
        >

          <div className="glass rounded-3xl overflow-hidden sm:mt-10  lg:-mt-15  shadow-[0_0_100px_-20px_rgba(14,165,233,0.15)] relative">
            {/* Top Bar */}
            <div className="bg-white/5  px-6  py-4 border-b border-brand-border flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-3 px-3 py-1 bg-white/5 rounded-md border border-white/5">
                <Brain className="w-3 h-3 text-brand-accent" />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest italic">thinking process...</span>
              </div>
              <div className="w-12" />
            </div>

            {/* Main IDE Content */}
            <div className="grid md:grid-cols-[250px_1fr] h-110">
              {/* Tasks Sidebar */}
              <div className="border-r border-brand-border bg-white/2 p-6 hidden md:block">
                <div className="flex items-center gap-2  mb-3">
                  <Terminal className="w-4 h-4 text-slate-500" />
                  <span className="text-xs font-bold  text-slate-500 uppercase tracking-tighter">Tasks</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Initialize Environment', status: 'done' },
                    { label: 'Analyze Repository', status: 'done' },
                    { label: 'Applying Fixes', status: 'loading' },
                    { label: 'Verify Changes', status: 'wait' }
                  ].map((task, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${task.status === 'done' ? 'bg-emerald-400' :
                        task.status === 'loading' ? 'bg-brand-accent animate-pulse' : 'bg-slate-700'
                        }`} />
                      <span className={`text-[11px] font-medium ${task.status === 'done' ? 'text-slate-400' :
                        task.status === 'loading' ? 'text-white' : 'text-slate-600'
                        }`}>{task.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <AnimatedCodeiyoSnippet />
              
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};

export default Hero;
