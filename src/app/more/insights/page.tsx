"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getInsightsData, BlogPost } from "@/services/api";

// ── Shared Constants ─────────────────────────────────────────────────────────

const tagMeta: Record<string, { color: string; dot: string }> = {
  "Platform Update": { color: "text-brand-accent border-brand-accent/30 bg-brand-accent/10", dot: "bg-emerald-400" },
  Tutorial: { color: "text-sky-400 border-sky-400/30 bg-sky-400/10", dot: "bg-sky-400" },
  "Student Story": { color: "text-violet-400 border-violet-400/30 bg-violet-400/10", dot: "bg-violet-400" },
  "Coding Tips": { color: "text-amber-400 border-amber-400/30 bg-amber-400/10", dot: "bg-amber-400" },
  News: { color: "text-rose-400 border-rose-400/30 bg-rose-400/10", dot: "bg-rose-400" },
};

const categories = ["All", "Tutorial", "Student Story", "Coding Tips", "News", "Platform Update"];

// ── Components ───────────────────────────────────────────────────────────────

function TagBadge({ tag }: { tag: string }) {
  const meta = tagMeta[tag] ?? { color: "text-slate-400 border-slate-400/30 bg-slate-400/10", dot: "bg-slate-400" };
  return (
    <span className={`inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase border px-3 py-1 rounded-md font-mono ${meta.color}`}>
      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${meta.dot}`} />
      {tag}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<{ featured: BlogPost; posts: BlogPost[] } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getInsightsData();
      setContent(res);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filteredPosts = !content ? [] :
    activeCategory === "All"
      ? content.posts
      : content.posts.filter((p) => p.tag === activeCategory);

  if (loading || !content) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-0">
        <span aria-hidden className="pointer-events-none select-none absolute -top-4 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/[0.02] leading-none whitespace-nowrap">
          INSIGHTS.
        </span>
        <div className="flex items-center gap-4 mb-16 relative z-10">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-accent font-mono">Stories & Resources</span>
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-[11px] text-brand-accent font-mono tracking-widest uppercase">Codeiyo Blog</span>
        </div>
        <h1 className="text-[clamp(36px,6vw,76px)] font-extrabold leading-[1.04] tracking-tight max-w-4xl mb-0 text-white relative z-10">
          Ideas, tutorials & <em className="not-italic text-brand-accent">real stories</em> from the build.
        </h1>
      </section>

      {/* Featured Post */}
      <section className="max-w-6xl mx-auto px-6 py-10 border-b border-white/5">
        <Link href={content.featured.href} className="group grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 items-end -mx-6 px-6 py-8 rounded-2xl hover:bg-white/2.5 transition-all duration-300">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-accent/60 font-mono">★ Featured</span>
              <TagBadge tag={content.featured.tag} />
              <span className="text-[11px] text-slate-600 font-mono">{content.featured.date}</span>
            </div>
            <h2 className="text-[clamp(24px,3.8vw,44px)] font-extrabold text-white leading-[1.08] tracking-tight max-w-3xl mb-5 group-hover:text-brand-accent transition-colors">
              {content.featured.title}
            </h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl font-light">{content.featured.excerpt}</p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <div className="border border-white/[0.08] rounded-2xl px-6 py-4 bg-white/[0.02] w-full">
              <p className="text-[10px] text-slate-600 font-mono uppercase mb-1">Read time</p>
              <p className="text-2xl font-extrabold text-white font-mono">{content.featured.readTime}</p>
            </div>
            <div className="flex items-center gap-2 text-brand-accent font-mono text-sm font-bold group-hover:translate-x-1 transition-all">
              Read post <ArrowIcon />
            </div>
          </div>
        </Link>
      </section>

      {/* Editorial Grid */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/5 pb-10">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#10B981] font-mono mb-3">Knowledge Base</p>
            <h2 className="text-3xl font-extrabold text-white">Insights & Stories</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-bold tracking-[0.15em] uppercase font-mono px-4 py-2 rounded-lg border transition-all 
                ${activeCategory === cat ? "bg-[#10B981] text-[#020617] border-[#10B981]" : "text-slate-500 border-white/10 hover:border-white/20 bg-white/[0.02]"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 lg:gap-16 items-start">
          <aside className="md:sticky md:top-32">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent font-mono mb-3">Latest Posts</p>
            <div className="w-8 h-px bg-brand-accent/40 mb-6" />
            <div className="space-y-3">
              {Object.entries(tagMeta).map(([tag, meta]) => (
                <div key={tag} className="flex items-center gap-2.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
                  <span className="text-[10px] text-slate-600 font-mono uppercase">{tag}</span>
                </div>
              ))}
            </div>
          </aside>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={post.href}
                className={`group border border-white/[0.07] hover:border-brand-accent/25 bg-white/[0.02] rounded-2xl p-6 transition-all ${post.size === "wide" ? "sm:col-span-2" : ""}`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <TagBadge tag={post.tag} />
                  <span className="text-[10px] text-slate-600 font-mono">{post.date}</span>
                </div>
                <h3 className="font-bold text-slate-300 group-hover:text-white mb-3 transition-colors">{post.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                  <span className="text-[10px] text-slate-600 font-mono tracking-widest">{post.readTime}</span>
                  <span className="text-brand-accent group-hover:translate-x-1 transition-all"><ArrowIcon /></span>
                </div>
              </Link>
            ))
            ) : (
            // --- EMPTY STATE START ---
            <div className="sm:col-span-2 flex flex-col items-center justify-center py-20 px-6 border border-dashed border-white/10 rounded-3xl bg-white/[0.01]">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-white/[0.03] flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No posts found</h3>
              <p className="text-slate-500 text-sm text-center max-w-xs mb-8">
                We haven't published anything in <span className="text-brand-accent font-mono">"{activeCategory}"</span> yet. Check back soon!
              </p>

            </div>
            // --- EMPTY STATE END ---
          )}

          </div>
        </div>
      </section>
    </div>
  );
}