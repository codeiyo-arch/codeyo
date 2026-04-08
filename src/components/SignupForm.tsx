'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signup } from '../app/auth/signin/actions';

export default function SignupForm({ error, message }: { error?: string, message?: string }) {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  return (
    <form className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400">First Name</label>
                            <input name="firstName" type="text" placeholder="First name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none focus:border-brand-accent/50 transition-all text-white" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400">Last Name</label>
                            <input name="lastName" type="text" placeholder="Last name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none focus:border-brand-accent/50 transition-all text-white" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400">School Name</label>
                        <input name="school" type="text" placeholder="School name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-accent/50 transition-all text-white" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400">Class</label>
                        <input name="class" type="text" placeholder="10" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-accent/50 transition-all text-white" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400">Email Address</label>
                        <input name="email" type="email" placeholder="student@school.com" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-accent/50 transition-all font-mono text-white" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400">Password</label>
                        <input name="password" type="password" placeholder="••••••••" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-accent/50 transition-all font-mono text-white" />
                    </div>
      
      {/* The Terms Checkbox */}
      <div className="flex items-start gap-3 py-2">
        <div className="relative flex items-center mt-1">
          <input
            id="terms"
            type="checkbox"
            required
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white/10 bg-white/5 transition-all checked:border-brand-accent checked:bg-brand-accent/20 focus:outline-none"
          />
          <svg
            className="absolute h-3 w-3 pointer-events-none hidden peer-checked:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-accent"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <label htmlFor="terms" className="text-[11px] text-gray-500 leading-tight cursor-pointer select-none">
          I agree to the{" "}
          <Link href="/more/user-agreement" target="_blank" className="text-gray-300 hover:text-brand-accent underline underline-offset-2">
            User Agreement
          </Link>{" "}
          and acknowledge the System Protocols.
        </label>
      </div>

        <div className="flex items-start gap-3 py-2">
        <div className="relative flex items-center mt-1">
            <input
            id="privacy-policy" // Matches htmlFor below
            type="checkbox"
            required
            checked={acceptedPolicy}
            onChange={(e) => setAcceptedPolicy(e.target.checked)}
            className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white/10 bg-white/5 transition-all checked:border-brand-accent checked:bg-brand-accent/20 focus:outline-none"
            />
            {/* Emerald Checkmark */}
            <svg
            className="absolute h-3 w-3 pointer-events-none hidden peer-checked:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-accent"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
        
        <label 
            htmlFor="privacy-policy" // Matches input ID
            className="text-[11px] text-gray-500 leading-tight cursor-pointer select-none"
        >
            I agree to the{" "}
            <Link 
            href="/more/privacy-policy" 
            target="_blank" 
            className="text-gray-300 hover:text-brand-accent underline underline-offset-2 transition-colors"
            >
            Privacy Policy
            </Link>{" "}
            and acknowledge the data encryption protocols.
        </label>
        </div>

      {/* Error/Message Alerts */}
      {error && (
        <p className="text-xs text-red-400 text-center bg-red-400/10 py-2 rounded-lg">
          {decodeURIComponent(error)}
        </p>
      )}
      
      {message && (
        <p className="text-xs text-emerald-400 text-center bg-emerald-400/10 py-2 rounded-lg">
          {message}
        </p>
      )}

      {/* Submit Button - Disabled until checked */}
      <button 
        formAction={signup}
        disabled={!acceptedTerms || !acceptedPolicy}
        className={`border-2 font-bold rounded-2xl w-full py-2 text-lg transition-all duration-300 ${
          acceptedTerms && acceptedPolicy  
            ? "bg-brand-accent border-brand-accent text-black hover:bg-transparent hover:text-white cursor-pointer" 
            : "bg-white/5 border-white/5 text-gray-600 cursor-not-allowed"
        }`}
      >
        Start Coding
      </button>
    </form>
  );
}


