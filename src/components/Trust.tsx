"use client";
import { FaPython } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss } from 'react-icons/si';

const TrustSection = () => {
  const logos = [
    { name: "Python", icon: FaPython },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss },
  ];

  return (
    <section className="py-20 -mt-20 border-y border-brand-border bg-white/1">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-12">
          Learn With These Languages & Tools
        </p>

        <div className="mask-fade overflow-hidden relative">
          <div className="flex w-max animate-scroll gap-16">
            {/* Repeat logos 3x for seamless scroll */}
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
              >
                <logo.icon className="w-8 h-8 text-white" />
                <span className="text-2xl font-black text-white tracking-tighter uppercase">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Move width of one set of logos */
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        /* Optional mask for smooth edges */
        .mask-fade {
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }
      `}</style>
    </section>
  );
};



export default TrustSection;
