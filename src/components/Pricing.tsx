"use client";

import Link from 'next/link';

import { Session } from '@supabase/supabase-js';
import { createClient } from '../utils/supabase/client';

import { useEffect, useState } from "react";

const Pricing = () => {

    
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
        <section id="pricing" className="mt-10 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
            <div className="absolute  -translate-x-1/2 w-full h-200 bg-brand-accent/10 blur-[100px] rounded-full -z-10" />
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em]">Investment in your future</h2>
                <h3 className="text-3xl md:text-5xl font-bold">Choose your path to <br /><span className="text-gradient">tech excellence.</span></h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Student Plan */}
                <div className="glass1 p-10 rounded-3xl border-white/5 hover:border-primary/50 transition-all flex flex-col justify-between  hover:scale-105">
                    <div>
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h4 className="text-2xl font-bold">Self-Learner</h4>
                                <p className="text-gray-400 text-sm mt-1">For individual students</p>
                            </div>
                            <div className="text-right text-brand-accent">
                                <span className="text-4xl font-bold">&#8360; 0</span>
                                <span className="text-gray-500 text-sm">/mo</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-10">
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
                    >
                        <button className="bg-brand-accent  border-2 border-brand-accent hover:bg-transparent  hover:text-white   transition-all duration-300 text-black font-bold rounded-2xl w-full py-2 text-lg">
                            {session ? "Already Joined" : "Join as Self Learner"}</button>
                    </Link>
                    
                    {/* <Link href="/signup">
                    <button className="bg-brand-accent  border-2 border-brand-accent hover:bg-transparent  hover:text-white   transition-all duration-300 text-black font-bold rounded-2xl w-full py-2 text-lg">Join as Self Learner</button></Link> */}
                </div>
                

                {/* Student Plan */}
                <div className="glass1 p-10 rounded-3xl border-white/5 hover:border-primary/50 transition-all flex flex-col justify-between hover:scale-105">
                    <div>
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h4 className="text-2xl font-bold">Pro Coder</h4>
                                <p className="text-gray-400 text-sm mt-1">For individual students</p>
                            </div>
                            <div className="text-right text-brand-accent">
                                <span className="text-4xl font-bold">Beta</span>
                                {/* <span className="text-4xl font-bold">&#8360; 500</span>
                                <span className="text-gray-500 text-sm">/mo</span> */}
                            </div>
                        </div>

                        <ul className="space-y-4 mb-10">
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
                        <button 
                        className="bg-transparent hover:border-brand-accent-hover hover:text-brand-accent border-2 border-white/10 text-white font-semibold  w-full py-2 rounded-2xl transition-all duration-300 text-lg">Coming Soon</button></Link>
                </div>
                {/* School Plan */}
                {/* <div className="glass p-10 rounded-3xl border-primary/30 bg-primary/5 relative flex flex-col justify-between">
                    <div className="absolute -top-4 right-8 bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Best for Schools
                    </div>
                    <div>
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h4 className="text-2xl font-bold">School Partner</h4>
                                <p className="text-gray-400 text-sm mt-1">Education at scale</p>
                            </div>
                            <div className="text-right">
                                <span className="text-4xl font-bold">Custom</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Bulk student licenses",
                                "Parent/Teacher Admin Dashboard",
                                "Custom School Curriculum",
                                "School-wide Competitions",
                                "Priority 24/7 Support",
                                "Revenue Sharing / Commission"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                    <span className="text-brand-accent font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="glass bg-white/10 hover:bg-white/20 w-full py-4 text-lg border-white/20">Contact Partnership Team</button>
                </div> */}

            </div>

        </section>
    );
};

export default Pricing;
