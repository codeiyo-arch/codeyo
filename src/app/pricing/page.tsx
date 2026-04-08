"use client";

import Link from 'next/link';

import { Session } from '@supabase/supabase-js';
import { createClient } from '../../utils/supabase/client';

import { useEffect, useState } from "react";

const PricingPage = () => {

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
        <div className="pt-20">
            <section id="pricing" className="mt-10 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
                <span
                aria-hidden
                className="pointer-events-none select-none absolute top-15 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/2 leading-none whitespace-nowrap"
                >
                    PRICING.
                </span>
                {/* <div className="absolute  -translate-x-1/2 w-full h-200 bg-brand-accent/10 blur-[100px] rounded-full -z-10" /> */}
                <div className="text-center mb-16 space-y-4 mt-15">
                    <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em]">Investment in your future</h2>
                    <h3 className="text-3xl md:text-5xl font-bold">Choose your path to <br /><span className="text-gradient">tech excellence.</span></h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-7xl -mt-5 mx-auto px-4">

                    {/* Student Plan */}
                    <div className="glass1 relative p-6 rounded-3xl border border-white/5 hover:border-primary/50 transition-all flex flex-col justify-between hover:scale-105 min-h-105">
                        {/* 
                        <div className="absolute -top-3 right-6 bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                            Best for Schools
                        </div> */}

                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="text-xl font-bold ">Self Learner</h4>
                                    <p className="text-gray-400 text-xs mt-1">For individual students</p>
                                </div>

                                <div className="text-right text-brand-accent">
                                    <span className="text-xl font-bold">&#8360; 0</span>
                                    <span className="text-gray-500 text-sm">/mo</span>
                                    {/* <span className="text-xl font-bold">Custom</span> */}
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "Browser Editor access",
                                    "Limited Language Access (JS only)",
                                    "Practice Challenges",
                                    "Student Dashboard",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                        <span className="text-brand-accent font-bold">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <Link
                            href={!loading && session ? "#" : "/auth/signin"}
                            className="w-full flex items-center justify-center py-2 text-md bg-brand-accent hover:bg-transparent hover:text-white border-2 border-brand-accent text-black font-bold px-8  rounded-2xl transition-all duration-300 text-[15px]"
                            >
                            {session ? "Already Joined" : "Join as Self Learner"}
                        </Link>

                        {/* <Link href="/signup">
                        <button className="bg-brand-accent  border-2 border-brand-accent hover:bg-transparent  hover:text-white   transition-all duration-300   text-black font-bold rounded-2xl w-full py-2 text-md">Join as Self Learner</button></Link> */}
                    </div>
                    

                    <div className="glass1 relative p-6 rounded-3xl border border-white/5 hover:border-primary/50 transition-all flex flex-col justify-between hover:scale-105 min-h-105">
                        {/* <div className="absolute -top-3 right-6 bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                            Best for Schools
                        </div> */}
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="text-xl font-bold">Pro Coder</h4>
                                    <p className="text-gray-400 text-xs mt-1">For individual students</p>
                                </div>

                                <div className="text-right text-brand-accent">
                                    {/* <span className="text-xl font-bold">Rs 0</span>
                                    <span className="text-gray-500 text-sm">/mo</span> */}
                                    <span className="text-xl font-bold ">Beta</span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "Everything in Self Learner",
                                    "Unlimited Browser Editor access",
                                    "Multiple Language Access",
                                    "Full Learning Roadmap",
                                    "Real Project Assignments",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                        <span className="text-brand-accent font-bold">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link href="">
                        <button className="bg-transparent  border-2 border-white/20 hover:bg-brand-soft hover:border-brand-accent-hover hover:text-white transition-all duration-300   text-white font-bold rounded-2xl w-full py-2 text-md">Coming Soon</button></Link>
                    </div>

                    


                    {/* Student Plan */}
                    <div className="glass1 relative p-6 rounded-3xl border border-white/5 hover:border-primary/50 transition-all flex flex-col justify-between hover:scale-105 min-h-105">
                        {/* <div className="absolute -top-3 right-6 bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                            Best for Schools
                        </div> */}
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="text-xl font-bold">Elite Coder</h4>
                                    <p className="text-gray-400 text-xs mt-1">For individual students</p>
                                </div>

                                <div className="text-right text-brand-accent">
                                    <span className="text-xl font-bold">Soon</span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "Everything in Pro Coder",
                                    "1:1 Mentorship / Coaching",
                                    "Capstone Projects",
                                    "Advanced Language & Framework Access",
                                    "Career Guidance & Resume Review",
                                    "Mentorship Chat",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                        <span className="text-brand-accent font-bold">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <Link href="">
                        <button className="bg-transparent  border-2 border-white/20 hover:bg-brand-soft hover:border-brand-accent-hover hover:text-white transition-all duration-300   text-white font-bold rounded-2xl w-full py-2 text-md">Coming Soon</button></Link>
                        {/* <Link href="">
                        <button className="bg-brand-accent  border-2 border-brand-accent hover:bg-transparent  hover:text-white transition-all duration-300   text-black font-bold rounded-2xl w-full py-2 text-md">Coming Soon</button></Link> */}
                    </div>

                    
                    {/* School Plan */}
                    <div className="glass1 relative p-6 rounded-3xl border border-white/5 hover:border-primary/50 transition-all flex flex-col justify-between hover:scale-105 min-h-105">

                        <div className="absolute -top-3 right-6 bg-yellow-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                            Best for Schools
                        </div>

                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="text-xl font-bold">School Partner</h4>
                                    <p className="text-gray-400 text-xs mt-1">Education at scale</p>
                                </div>

                                <div className="text-right text-brand-accent">
                                    {/* <span className="text-xl font-bold">Coming soon</span> */}
                                    <span className="text-xl font-bold">Custom</span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "Discounts for Students",
                                    "Teacher Admin Dashboard",
                                    "Assignments & Curriculum Management",
                                    "Classroom & Collaboration Tools",
                                    "Custom School Curriculum",
                                    // "School-wide Competitions",
                                    "Priority 24/7 Support",
                                    
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                        <span className="text-brand-accent font-bold">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link href="/more/contact">
                        <button className="bg-brand-accent  border-2 border-brand-accent hover:bg-transparent  hover:text-white transition-all duration-300   text-black font-bold rounded-2xl w-full py-2 text-md">Contact Team</button></Link>

                    </div>
                    

                    

                </div>

            </section>
            

            <section className="py-10 px-6 md:px-10 max-w-4xl mx-auto -mt-10">
                <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        { q: "Can I cancel anytime?", a: "Yes, our student subscription is month-to-month. No long-term contracts." },
                        { q: "Is there a group discount for schools?", a: "Absolutely. Our school partnership model is designed for volume. Contact us for a custom quote." },
                        { q: "What hardware do students need?", a: "Just a browser! We recommend Chrome or Edge on any laptop/PC. No powerful hardware required." },
                        {q: "What is the Self-Learner plan?",a: "It’s free! You get our browser editor, JS support, challenges, and a dashboard to track your progress."},
                        {q: "What’s in the Pro Coder plan?",a: "You get unlimited editor access, more languages, full roadmap, real projects, and extra help."},
                                {q: "Can I switch plans later?",a: "Yes! You can upgrade from Self-Learner to Pro Coder anytime."},

                    ].map((item, idx) => (
                        <div key={idx} className="glass1  transition-all cursor-pointer hover:scale-105  p-6 rounded-2xl">
                            <h3 className="font-bold mb-2 text-brand-accent">{item.q}</h3>
                            <p className="text-gray-400 text-sm">{item.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PricingPage;




