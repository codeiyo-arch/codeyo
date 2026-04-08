"use client";
// import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ChevronDown, LightbulbIcon, LogOut, LayoutDashboard, UserCircle, Settings } from "lucide-react";
import { GraduationCap, Award, ChartBarIcon, Code2, HomeIcon, ClipboardCheckIcon, Users, EyeIcon, Mail, Info, BookOpen, ShieldCheck, Briefcase } from "lucide-react";
import type { User } from "@supabase/supabase-js";

// --- server action for sign out ---
import { createClient } from "@/utils/supabase/client"; // client-side client for sign out


import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from "react";

interface NavbarProps {
  user: User | null;
}

const Navbar = ({ user }: NavbarProps) => {

  
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
  const [isOpen, setIsOpen] = useState(false);
  const [schoolsOpen, setSchoolsOpen] = useState(false);
  const [CodeOpen, setCodeOpen] = useState(false);
  const [LearnOpen, setLearnOpen] = useState(false);
  const [MoreOpen, setMoreOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);




// Inside your component:
const router = useRouter();

const handleSignOut = async () => {
  const supabase = createClient();
  
  // 1. Sign out from Supabase
  const { error } = await supabase.auth.signOut();
  
  if (!error) {
    // 2. Clear the local cache and redirect
    router.push('/');
    router.refresh(); // This forces the Middleware/Proxy to re-check the session
  }
};

  // const handleSignOut = async () => {
  //   const supabase = createClient();
  //   await supabase.auth.signOut();
  //   window.location.href = "/";
  // };

  // Get display name or email prefix
  const displayName = user?.user_metadata?.full_name
    || user?.user_metadata?.first_name
    || user?.email?.split("@")[0]
    || "Account";

  const avatarInitial = displayName.charAt(0).toUpperCase();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass mt-4 mx-4 md:mx-10 rounded-2xl md:rounded-full px-6 py-2 flex items-center justify-between">

      {/* Logo */}
      <Link href="/" className="flex items-center gap-0" onClick={() => setIsOpen(false)}>
        <div className="w-20 h-15 flex items-center justify-center transition-transform hover:scale-110">
          <img src="/assets/logo.svg" alt="Codeiyo-logo" />
        </div>
        <div className="wordmark transition-transform hover:scale-105 tracking-tight leading-none flex items-baseline">
          <span className="text-white text-5xl">Code</span>
          <span className="text-outlined text-5xl">iyo</span>
          <span className="text-brand-accent text-5xl">.</span>
        </div>
      </Link>

      {/* ================= DESKTOP NAV ================= */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">

        <Link href="/pricing" className="hover:text-brand-accent-hover transition-transform hover:scale-110">
          Pricing
        </Link>

        {/* Code Dropdown */}
        <div className="relative" onMouseEnter={() => setCodeOpen(true)} onMouseLeave={() => setCodeOpen(false)}>
          <button className="flex items-center gap-1 hover:text-brand-accent-hover transition-transform hover:scale-110">
            Code <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${CodeOpen ? "rotate-180" : "rotate-0"}`} />
          </button>
          {CodeOpen && (
            <div className="absolute top-full left-0 pt-3 ">
              <div className="bg-[#111827] w-64  rounded-lg shadow-lg border border-white/10 overflow-hidden">
                <Link href="/code/sandbox" className="px-4 py-3 flex gap-3 hover:bg-white/5 hover:text-brand-accent-hover rounded-md">
                  <Code2 className="h-5 w-5 shrink-0 text-brand-accent" />
                  <div>
                    <p className="font-medium">Codeiyo Sandbox</p>
                    <p className="text-xs text-gray-400 mt-1">Your zero-setup cloud IDE. Build, test, and execute code instantly in your browser.</p>
                  </div>
                </Link>
                <Link href="/code/tracker" className="px-4 py-3 flex gap-3 hover:bg-white/5 hover:text-brand-accent-hover rounded-md">
                  <ChartBarIcon className="h-5 w-5 shrink-0 text-brand-accent" />
                  <div>
                    <p className="font-medium">Skill Tracker</p>
                    <p className="text-xs text-gray-400 mt-1">Analyze your performance, unlock new coding challenges, level up your skills in real-time.</p>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Learn (disabled) */}
        <div
        className="relative"
        onMouseEnter={() => setLearnOpen(true)}
        onMouseLeave={() => setLearnOpen(false)}
        >
        <button  className="flex items-center gap-1 hover:text-brand-accent-hover transition-transform hover:scale-110">
            Learn <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
                LearnOpen ? "rotate-180" : "rotate-0"
            }`}
            />
        </button>

        { LearnOpen && (
            <div className="absolute top-full left-0 pt-3">
            <div className="bg-[#111827] w-64  rounded-lg shadow-lg border border-white/10 overflow-hidden">
                <Link
                // href={!loading && session ? "/learn/paths" : "/auth/login"}
                href="/learn/paths"
                className="px-4 py-3 flex gap-3 hover:bg-white/5 hover:text-brand-accent-hover rounded-md"
                >
                <GraduationCap className="h-5 w-5  shrink-0 text-brand-accent" />

                <div>
                    <p className="font-medium ">Learning Paths</p>
                    <p className="text-xs text-gray-400 mt-1">
                    Learn new skills through interactive lessons.
                    </p>
                </div>
                </Link>

                {/* <Link
                href="/challenges"
                className="px-4 py-2 flex gap-3 hover:bg-white/5 hover:text-brand-accent-hover rounded-md"
                >
                <Award className="h-5 w-5  shrink-0 text-brand-accent" />

                <div>
                    <p className="font-medium">Challenges</p>
                    <p className="text-xs text-gray-400 mt-1">
                    Test your skills with real coding challenges.
                    </p>
                </div>
                </Link> */}
            </div>
            </div>
        )}
        </div>

        {/* Schools (disabled) */}
        <div
        className="relative"
        onMouseEnter={() => setSchoolsOpen(true)}
        onMouseLeave={() => setSchoolsOpen(false)}
        >
        <button className="flex items-center gap-1 hover:text-brand-accent-hover transition-transform hover:scale-110">
            Schools <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
                schoolsOpen ? "rotate-180" : "rotate-0"
            }`}
            />
        </button>

        { schoolsOpen && (
            
            <div className="absolute top-full left-0 pt-3">
            <div className="bg-[#111827] w-72  rounded-lg shadow-lg border border-white/10 overflow-hidden">
            <Link
                href="/schools/overview"
                className="px-4 py-3 flex gap-3 hover:bg-white/5 hover:text-brand-accent-hover rounded-md"
                >
                <HomeIcon className="h-5 w-5  shrink-0 text-brand-accent" />

                <div>
                    <p className="font-medium">Overview</p>
                    <p className="text-xs text-gray-400 mt-1">
                    Get a complete look at our school solutions, features, and benefits for educational institutions.
                    </p>
                </div>
            </Link>

            <Link
                href="/schools/overview"
                className="px-4 py-3 flex gap-3 hover:bg-white/5 hover:text-brand-accent-hover rounded-md"
                >
                <Users className="h-5 w-5  shrink-0 text-brand-accent" />

                <div>
                    <p className="font-medium">Partner Program</p>
                    <p className="text-xs text-gray-400 mt-1">
                    Learn how school can collaborate with us to enhance learning experiences and access exclusive benefits.
                    </p>
                </div>
            </Link>
            
            <Link
                href="/schools/overview"
                className="px-4 py-3 flex gap-3 hover:bg-white/5 hover:text-brand-accent-hover rounded-md"
                >
                <ClipboardCheckIcon className="h-5 w-5  shrink-0 text-brand-accent" />

                <div>
                    <p className="font-medium">Success Stories</p>
                    <p className="text-xs text-gray-400 mt-1">
                    See real-world results from schools using our platform to improve student outcomes.
                    </p>
                </div>
            </Link>

            <Link
                href="/schools/overview"
                className="px-4 py-3 flex gap-3 hover:bg-white/5 hover:text-brand-accent-hover rounded-md"
                >
                <EyeIcon className="h-5 w-5  shrink-0 text-brand-accent" />

                <div>
                    <p className="font-medium">Request Demo</p>
                    <p className="text-xs text-gray-400 mt-1">
                    Book a personalized demo to explore our platform’s features and see how it can work for your school.
                    </p>
                </div>
            </Link>


            </div>
            </div>
        )}
        </div>

        {/* More Dropdown */}
        <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
          <button className="flex items-center gap-1 hover:text-brand-accent-hover transition-transform hover:scale-110">
            More <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${MoreOpen ? "rotate-180" : "rotate-0"}`} />
          </button>
          {MoreOpen && (
            <div className="absolute top-full left-0 pt-3">
              <div className="bg-[#111827] w-64  rounded-lg shadow-lg border border-white/10 overflow-hidden">
                <Link href="/more/about" className="px-4 py-3 flex gap-3 hover:bg-white/5 hover:text-brand-accent-hover rounded-md">
                  <Info className="h-5 w-5 shrink-0 text-brand-accent" />
                  <div><p className="font-medium">About Us</p><p className="text-xs text-gray-400 mt-1">Learn more about Codeiyo.</p></div>
                </Link>
                <Link href="/more/insights" className="px-4 py-3 flex gap-3 hover:bg-white/5 hover:text-brand-accent-hover rounded-md">
                  <BookOpen className="h-5 w-5 shrink-0 text-brand-accent" />
                  <div><p className="font-medium">Insights</p><p className="text-xs text-gray-400 mt-1">Explore tutorials, articles, and learning resources.</p></div>
                </Link>
                <Link href="/more/privacy-policy" className="px-4 py-3 flex gap-3 hover:bg-white/5 hover:text-brand-accent-hover rounded-md">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-brand-accent" />
                  <div><p className="font-medium">Privacy Protocol</p><p className="text-xs text-gray-400 mt-1">Our commitment to keeping your information safe and private.</p></div>
                </Link>
                <Link href="/more/user-agreement" className="px-4 py-3 flex gap-3 hover:bg-white/5 hover:text-brand-accent-hover rounded-md">
                  <Briefcase className="h-5 w-5 shrink-0 text-brand-accent" />
                  <div><p className="font-medium">User Agreement</p><p className="text-xs text-gray-400 mt-1">Rules for a safe and high-performing coding community.</p></div>
                </Link>
                <Link href="/more/contact" className="px-4 py-3 flex gap-3 hover:bg-white/5 hover:text-brand-accent-hover rounded-md">
                  <Mail className="h-5 w-5 shrink-0 text-brand-accent" />
                  <div><p className="font-medium">Contact</p><p className="text-xs text-gray-400 mt-1">Get in touch with our team.</p></div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================= CTA / USER AVATAR ================= */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          // ── LOGGED IN: avatar dropdown ──
          <div
            className="relative"
            onMouseEnter={() => setUserMenuOpen(true)}
            onMouseLeave={() => setUserMenuOpen(false)}
          >
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-black font-bold text-sm select-none">
                {avatarInitial}
              </div>
              <span className="text-sm font-medium text-gray-300 max-w-[100px] truncate">{displayName}</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${userMenuOpen ? "rotate-180" : "rotate-0"}`} />
            </button>

            {userMenuOpen && (
              <div className="absolute top-full right-0 pt-3">
                <div className="bg-[#111827] w-52 rounded-lg shadow-lg border border-white/10 overflow-hidden">
                  {/* User info header */}
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-xs text-gray-500">Signed in as</p>
                    <p className="text-sm text-white font-medium truncate mt-0.5">{user.email}</p>
                  </div>

                  <Link href="/dashboard" className="px-4 py-2.5 flex gap-3 items-center hover:bg-white/5 hover:text-brand-accent-hover text-gray-300 text-sm">
                    <LayoutDashboard className="h-4 w-4 shrink-0" />
                    Dashboard
                  </Link>

                  {/* <Link href="/profile" className="px-4 py-2.5 flex gap-3 items-center hover:bg-white/5 hover:text-brand-accent-hover text-gray-300 text-sm">
                    <UserCircle className="h-4 w-4 shrink-0" />
                    Profile
                  </Link> */}

                  <Link href="/settings" className="px-4 py-2.5 flex gap-3 items-center hover:bg-white/5 hover:text-brand-accent-hover text-gray-300 text-sm">
                    <Settings className="h-4 w-4 shrink-0" />
                    Settings
                  </Link>

                  <div className="border-t border-white/10">
                    <button
                      onClick={handleSignOut}
                      className="w-full px-4 py-2.5 flex gap-3 items-center hover:bg-red-500/10 hover:text-red-400 text-gray-400 text-sm transition-colors"
                    >
                      <LogOut className="h-4 w-4 shrink-0" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          // ── LOGGED OUT: original CTAs ──
          <>
            <Link href="/auth/signin" className="text-md font-semibold text-gray-400 hover:text-brand-accent-hover transition-transform hover:scale-110">
              Sign In
            </Link>
            <Link href="/auth/signup" className="bg-brand-accent border-2 border-brand-accent hover:bg-transparent text-black hover:text-white font-semibold rounded-4xl transition-all duration-300 py-2 px-5 text-sm hover:scale-110">
              Get Started
            </Link>
          </>
        )}
      </div>

      {/* ================= MOBILE BUTTON ================= */}
      <button className="md:hidden text-gray-400 hover:text-brand-accent-hover" onClick={() => setIsOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
        </svg>
      </button>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="absolute top-[calc(100%+1rem)] left-0 right-0 glass2 rounded-2xl p-6 flex flex-col gap-5 md:hidden animate-in fade-in slide-in-from-top-4 duration-200 text-gray-400">

          <Link href="/pricing" className="flex justify-between w-full hover:text-brand-accent-hover font-medium">Pricing</Link>

          {/* Learn */}
          <div>
            <button onClick={() => setLearnOpen(!LearnOpen)} className="flex justify-between w-full hover:text-brand-accent-hover font-medium">
              Learn <ChevronDown className={`w-4 h-4 transition-transform ${LearnOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {LearnOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-2">
                <Link href="/schools/overview" className="flex items-start gap-2 hover:text-brand-accent-hover">
                  <GraduationCap className="h-5 w-5 shrink-0" />
                  <div><p className="font-medium text-sm">Courses</p><p className="text-xs text-gray-400 mt-1">Learn new skills through interactive lessons.</p></div>
                </Link>
                <Link href="/schools/overview" className="flex items-start gap-2 hover:text-brand-accent-hover">
                  <Award className="h-5 w-5 shrink-0" />
                  <div><p className="font-medium text-sm">Challenges</p><p className="text-xs text-gray-400 mt-1">Test your skills with real coding challenges.</p></div>
                </Link>
              </div>
            )}
          </div>

          {/* Code */}
          <div>
            <button onClick={() => setCodeOpen(!CodeOpen)} className="flex justify-between w-full hover:text-brand-accent-hover font-medium">
              Code <ChevronDown className={`w-4 h-4 transition-transform ${CodeOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {CodeOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-2">
                <Link href="/codex" className="flex items-start gap-2 hover:text-brand-accent-hover">
                  <Code2 className="h-5 w-5 shrink-0" />
                  <div><p className="font-medium text-sm">Codeiyo Lab</p><p className="text-xs text-gray-400 mt-1">Simple, fast & reliable online IDE.</p></div>
                </Link>
                <Link href="/tracker" className="flex items-start gap-2 hover:text-brand-accent-hover">
                  <ChartBarIcon className="h-5 w-5 shrink-0" />
                  <div><p className="font-medium text-sm">Skill Tracker</p><p className="text-xs text-gray-400 mt-1">Track your progress and level up your skills.</p></div>
                </Link>
              </div>
            )}
          </div>

          {/* Schools */}
          <div>
            <button onClick={() => setSchoolsOpen(!schoolsOpen)} className="flex justify-between w-full hover:text-brand-accent-hover font-medium">
              Schools <ChevronDown className={`w-4 h-4 transition-transform ${schoolsOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {schoolsOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-2">
                <Link href="/schools/overview" className="flex items-start gap-2 hover:text-brand-accent-hover">
                  <HomeIcon className="h-5 w-5 shrink-0" /><div><p className="font-medium text-sm">Overview</p></div>
                </Link>
                <Link href="/schools/partners" className="flex items-start gap-2 hover:text-brand-accent-hover">
                  <Users className="h-5 w-5 shrink-0" /><div><p className="font-medium text-sm">Partner Program</p></div>
                </Link>
                <Link href="/schools/request-demo" className="flex items-start gap-2 hover:text-brand-accent-hover">
                  <EyeIcon className="h-5 w-5 shrink-0" /><div><p className="font-medium text-sm">Request Demo</p></div>
                </Link>
              </div>
            )}
          </div>

          {/* More */}
          <div>
            <button onClick={() => setMoreOpen(!MoreOpen)} className="flex justify-between w-full hover:text-brand-accent-hover font-medium">
              More <ChevronDown className={`w-4 h-4 transition-transform ${MoreOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {MoreOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-2">
                <Link href="/about" className="flex items-start gap-2 hover:text-brand-accent-hover">
                  <Info className="h-5 w-5 shrink-0" /><div><p className="font-medium text-sm">About Us</p></div>
                </Link>
                <Link href="/insights" className="flex items-start gap-2 hover:text-brand-accent-hover">
                  <LightbulbIcon className="h-5 w-5 shrink-0" /><div><p className="font-medium text-sm">Insights</p></div>
                </Link>
                <Link href="/contact" className="flex items-start gap-2 hover:text-brand-accent-hover">
                  <Mail className="h-5 w-5 shrink-0" /><div><p className="font-medium text-sm">Contact</p></div>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile: auth section */}
          {user ? (
            <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-accent flex items-center justify-center text-black font-bold text-sm">
                  {avatarInitial}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{displayName}</p>
                  <p className="text-gray-500 text-xs">{user.email}</p>
                </div>
              </div>
              <Link href="/dashboard" className="flex items-center gap-2 hover:text-brand-accent-hover text-sm"><LayoutDashboard className="h-4 w-4" /> Dashboard</Link>
              {/* <Link href="/profile" className="flex items-center gap-2 hover:text-brand-accent-hover text-sm"><UserCircle className="h-4 w-4" /> Profile</Link> */}
              <Link href="/settings" className="flex items-center gap-2 hover:text-brand-accent-hover text-sm"><Settings className="h-4 w-4" /> Settings</Link>
              <button onClick={handleSignOut} className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm mt-1">
                <LogOut className="h-4 w-4" /> Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="hover:text-brand-accent-hover font-medium">Login</Link>
              <Link href="/signup" className="btn-primary py-3 text-center font-semibold">Get Started</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;