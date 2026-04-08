

const steps = [
  {
    num: "01",
    title: "Pick a Learning Path",
    desc: "Choose from beginner to advanced tracks across web, Python, JavaScript, and more.",
  },
  {
    num: "02",
    title: "Follow Guided Tutorials",
    desc: "Each lesson opens inside the editor. Read the concept, then write the code immediately.",
  },
  {
    num: "03",
    title: "Solve Challenges",
    desc: "Apply what you learned to real problems. Get instant automated feedback on every submission.",
  },
  {
    num: "04",
    title: "Track Your Progress",
    desc: "Your dashboard shows completed lessons, and what to tackle next.",
  },
  {
    num: "05",
    title: "Build Real Projects",
    desc: "Apply your skills on practical projects to gain hands-on experience and confidence.",
  },
  {
  num: "06",
  title: "Boost Your Portfolio",
  desc: "Showcase your completed projects and skills to impress recruiters and teachers.",
  },
];




export default function Work() {
  return (
      <section className="max-w-5xl mx-auto -mt-5 px-6 py-20 relative">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            How Skill Tracker{" "}
            <span className="text-brand-accent">works.</span>
          </h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto font-light">
            Four simple steps from picking a path to building real skills.
          </p>
        </div>
        {/* Background Decorative Line */}
        <div className="absolute left-1/2 top-38 bottom-0 w-px bg-linear-to-b from-transparent via-brand-accent/30 to-transparent hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 -mt-5 relative">
          {steps.map((s, i) => (
            <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:mt-12' : ''}`}>
              <div className="bg-slate-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:border-brand-accent/50 hover:-translate-y-5 hover:scale-105 transition-all group">
                <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-slate-900 font-bold mb-6 shadow-[0_0_15px_rgba(var(--brand-accent-rgb),0.4)]">
                  {s.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}