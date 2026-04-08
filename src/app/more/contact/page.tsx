"use client";

import Link from "next/link";
import { useState } from "react";

// ── Inquiry types ─────────────────────────────────────────────────────────────
const inquiryTypes = [
  {
    id: "general",
    label: "General Question",
    desc: "Anything about the platform",
  },
  {
    id: "partnership",
    label: "School Partnership",
    desc: "Bring Codeiyo into your institution",
  },
  {
    id: "feedback",
    label: "Bug / Feedback",
    desc: "Something broken or a suggestion",
  },
  {
    id: "press",
    label: "Press & Media",
    desc: "Coverage, interviews, or features",
  },
];

// ── Social links ──────────────────────────────────────────────────────────────
const socials = [
  {
    label: "LinkedIn",
    handle: "@codeiyo",
    href: "http://linkedin.com/company/codeiyo",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    handle: "@codeiyo",
    href: "https://www.facebook.com/people/Codeiyo/61576794842418/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    handle: "@codeiyo",
    href: "https://www.instagram.com/codeiyo/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.353-2.612-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    handle: "@codeiyo",
    href: "https://discord.gg/TQD8uMa4Eq",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    handle: "@codeiyo",
    href: "https://tiktok.com/@codeiyo",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12.525.02c1.31 0 2.591.214 3.794.613V7.12a6.377 6.377 0 0 1-3.794-1.238v10.375a6.25 6.25 0 1 1-6.25-6.25c.345 0 .68.028 1.006.082v4.208a2.042 2.042 0 1 0 1.036 3.421V0l4.208.02z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    handle: "Contact Us",
    href: "https://chat.whatsapp.com/HHytpSmQWJJCrELWj3PwIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  // {
  //   label: "GitHub",
  //   handle: "codeiyo",
  //   href: "https://github.com/codeiyo",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
  //       <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  //     </svg>
  //   ),
  // },
  // {
  //   label: "Twitter / X",
  //   handle: "@codeiyo",
  //   href: "https://x.com/codeiyo",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
  //       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  //     </svg>
  //   ),
  // },
];

// ── Form component ────────────────────────────────────────────────────────────
function ContactForm() {
  const [selected, setSelected] = useState("general");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });


  
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

//   async function handleSubmit(e: React.FormEvent) {
//   e.preventDefault();

//   // This is the missing piece: Sending the data away!
//   const response = await fetch("/api/contact", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       ...form,
//       inquiryType: selected // Including the type they picked
//     }),
//   });

//   if (response.ok) {
//     setSubmitted(true);
//   } else {
//     alert("System error. Please try emailing hello@codeiyo.com directly.");
//   }
// }

  if (submitted) {
    return (
      <div className="flex flex-col items-start justify-center min-h-[420px] py-10">
        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-brand-accent text-lg mb-6">
          ✦
        </div>
        <h3 className="text-xl font-extrabold text-slate-100 mb-3">
          Message received.
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
          Thanks for reaching out. We'll get back to you at{" "}
          <span className="text-slate-300">{form.email}</span> as soon as
          possible, usually within 1–2 business days.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", message: "" });
            setSelected("general");
          }}
          className="mt-8 text-sm text-brand-accent hover:underline underline-offset-4 font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Inquiry type selector */}
      <div>
        <label className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500 font-mono block mb-3">
          Inquiry Type
        </label>
        <div className="grid grid-cols-2 gap-2">
          {inquiryTypes.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setSelected(t.id)}
              className={`text-left px-4 py-3 rounded-xl border transition-all duration-200 ${
                selected === t.id
                  ? "border-brand-accent bg-emerald-500/5 text-slate-100"
                  : "border-white/8 bg-white/[0.02] text-slate-500 hover:border-white/15 hover:text-slate-400"
              }`}
            >
              <span className="block text-[13px] font-semibold leading-tight">
                {t.label}
              </span>
              <span
                className={`block text-[11px] mt-0.5 transition-colors ${
                  selected === t.id ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {t.desc}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500 font-mono block mb-2">
            Name
          </label>
          <input
            required
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-white/[0.03] border border-white/8 hover:border-white/15 focus:border-brand-accent/60 focus:outline-none rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 transition-colors duration-200"
          />
        </div>
        <div>
          <label className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500 font-mono block mb-2">
            Email
          </label>
          <input
            required
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white/[0.03] border border-white/8 hover:border-white/15 focus:border-brand-accent/60 focus:outline-none rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 transition-colors duration-200"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500 font-mono block mb-2">
          Message
        </label>
        <textarea
          required
          rows={5}
          placeholder="Tell us what's on your mind..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-white/[0.03] border border-white/8 hover:border-white/15 focus:border-brand-accent/60 focus:outline-none rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 transition-colors duration-200 resize-none"
        />
      </div>

      {/* Submit */}
      <div className="flex items-center justify-center">
        <button
        type="submit"
        className="w-50   bg-brand-accent hover:bg-transparent hover:text-brand-accent border-2 border-brand-accent text-black font-bold py-3.5 rounded-xl transition-all duration-300 text-[15px]"
      >
        Send Message
      </button>
      </div>

    </form>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 pt-20 overflow-x-hidden">

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-6 pt-15 pb-0">

        {/* Screened wordmark */}
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -top-4 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/[0.025] leading-none whitespace-nowrap"
        >
          CONTACT.
        </span>

        {/* Top rule */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-accent font-mono">
            Contact
          </span>
          <div className="flex-1 h-px bg-white/8" />
          <span className="text-[11px] text-brand-accent font-mono tracking-widest">
            codeiyo.com
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(36px,6vw,72px)] font-extrabold leading-[1.04] tracking-tight max-w-3xl mb-5">
          Let's {" "}
            <span className="text-brand-accent">talk.</span>
        </h1>
        <p className="text-slate-400 text-lg font-light max-w-xl leading-relaxed pb-16 border-b border-white/5">
          Whether you're a school looking to partner, a student with a question, or just curious, we're here and we read every message.
        </p>
      </section>

      {/* ── Main content ─────────────────────────────────────────────────── */}


      <section className="max-w-6xl mx-auto px-6 py-20 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

          {/* ── Left: Info Column ──────────────────────────────────────── */}
          <div className="space-y-16 lg:sticky lg:top-28">

            {/* Email Section */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent font-mono mb-4">
                Connect
              </p>
              <div className="w-8 h-px bg-brand-accent/40 mb-6" />
              <a
                href="mailto:hello@codeiyo.com"
                className="group inline-flex items-center gap-4 text-2xl font-bold tracking-tight text-white hover:text-brand-accent transition-all duration-300"
              >
                hello@codeiyo.com
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                  →
                </span>
              </a>
              <p className="text-slate-500 text-sm mt-3 font-light">
                Typically seen and replied to within 24 hours.
              </p>
            </div>

            {/* Inquiry Guide - More Structured */}
            {/* <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent font-mono mb-6">
                How can we help?
              </p>
                <div className="w-6 h-px bg-brand-accent mb-5" />
              <div className="grid grid-cols-1 gap-y-2">
                {[
                  { type: "School Partnerships", note: "Integration & curriculum licensing." },
                  { type: "Student Support", note: "Account issues or platform feedback." },
                  { type: "Press & Media", note: "Story inquiries & brand assets." },
                ].map((item, i) => (
                  <div key={i} className="py-4 border-b border-white/5 last:border-0 group cursor-default">
                    <p className="text-sm font-semibold text-slate-200 group-hover:text-[#10B981] transition-colors">
                      {item.type}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1 font-light">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Social Links */}
            {/* <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 font-mono mb-6">
                Global Presence
              </p>
              <div className="flex flex-wrap gap-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-slate-400 hover:text-[#10B981] transition-colors flex items-center gap-2"
                  >
                    <span className="scale-110">{s.icon}</span>
                    <span className="text-xs font-mono tracking-wider">{s.label}</span>
                  </a>
                ))}
              </div>
            </div> */}

              <div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-accent font-mono mb-4">
                      Follow Along
                    </p>
                    <div className="w-6 h-px bg-brand-accent mb-5" />
                    <div className="space-y-3">
                      {socials.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between py-2.5 border-b border-white/5 hover:border-brand-accent/20 transition-colors duration-200"
                        >
                          <div className="flex items-center gap-3 text-slate-400 group-hover:text-slate-200 transition-colors">
                            <span className="text-slate-600 group-hover:text-brand-accent transition-colors">
                              {s.icon}
                            </span>
                            <span className="text-sm font-medium">{s.label}</span>
                          </div>
                          <span className="text-xs text-slate-600 group-hover:text-brand-accent transition-colors font-mono">
                            {s.handle} →
                          </span>
                        </a>
                      ))}
                    </div>
                </div>
          </div>

          {/* ── Right: Form Container ───────────────────────────────────── */}
          <div className="relative group">
            {/* Decorative background glow */}
            <div className="absolute -inset-px bg-gradient-to-br from-[#10B981]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-[#020617] backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-2">Send a message</h2>
                <p className="text-slate-500 text-sm font-light">
                  Tell us about your project or inquiry. Our team will get back to you shortly.
                </p>
                <div className="w-12 h-1 bg-[#10B981] mt-6 rounded-full" />
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA strip ─────────────────────────────────────────────── */}

    </div>
  );
}