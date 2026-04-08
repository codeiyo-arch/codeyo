// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Editor from "@monaco-editor/react";
// import { Play, RotateCcw, Copy, Check, Code2, Monitor } from 'lucide-react';

// const DEFAULT_CODE = `<!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8" />
// <meta name="viewport" content="width=device-width, initial-scale=1.0" />

// <style>
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: system-ui, -apple-system, sans-serif;
//   }

//   body {
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: radial-gradient(circle at top,
//         #020617,
//         #020617 40%,
//         #020617);
//     color: #e2e8f0;
//   }

//   .container {
//     text-align: center;
//     padding: 3rem;
//     border-radius: 18px;
//     background: rgba(255,255,255,0.04);
//     backdrop-filter: blur(14px);
//     border: 1px solid rgba(34,197,94,0.25);
//     box-shadow:
//       0 0 40px rgba(34,197,94,0.15),
//       inset 0 0 20px rgba(255,255,255,0.03);
//     max-width: 500px;
//   }

//   .logo {
//     font-size: 2.6rem;
//     font-weight: 700;
//     background: linear-gradient(90deg,#22c55e,#38bdf8);
//     -webkit-background-clip: text;
//     color: transparent;
//     margin-bottom: 1rem;
//   }

//   .tagline {
//     color: #94a3b8;
//     margin-bottom: 2rem;
//   }

//   .button {
//     display: inline-block;
//     padding: 12px 22px;
//     border-radius: 999px;
//     background: linear-gradient(90deg,#22c55e,#38bdf8);
//     color: #020617;
//     font-weight: 600;
//     cursor: pointer;
//     border: none;
//     transition: 0.3s ease;
//   }

//   .button:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 0 20px rgba(56,189,248,0.5);
//   }

//   .hint {
//     margin-top: 1.5rem;
//     font-size: 0.9rem;
//     color: #64748b;
//   }
// </style>
// </head>

// <body>

//   <div class="container">
//     <div class="logo">Codeiyo</div>

//     <p class="tagline">
//       Learn • Build • Become a Developer
//     </p>

//     <button class="button" onclick="runMessage()">Run Your First Code 🚀</button>

//     <p class="hint">
//       👨‍💻 Try editing this text and press <b>Run</b>
//     </p>
//   </div>

//   <script>
//     function runMessage() {
//       const messages = [
//         "🎉 Congrats! You just ran your first code!",
//         "🚀 Keep going, the next challenge is waiting!",
//         "💡 Every programmer started just like this!",
//         "🔥 Tip: Practice a little every day to become great!",
//         "✨ Fun Fact: Codeiyo believes in learning by doing!"
//       ];

//       const msg = messages[Math.floor(Math.random() * messages.length)];

//       alert(msg);
//     }
//   </script>

// </body>
// </html>`;

// const Codex: React.FC = () => {
//     const [code, setCode] = useState<string>(DEFAULT_CODE);
//     const [copied, setCopied] = useState(false);
//     const iframeRef = useRef<HTMLIFrameElement>(null);

//     useEffect(() => {
//         handleRun();
//     }, []);

//     const handleRun = () => {
//         setTimeout(() => {
//             if (iframeRef.current) {
//                 const doc = iframeRef.current.contentDocument;
//                 if (doc) {
//                     doc.open();
//                     doc.write(code);
//                     doc.close();
//                 }
//             }
//         }, 50);
//     };

//     const handleCopy = () => {
//         navigator.clipboard.writeText(code);
//         setCopied(true);
//         setTimeout(() => setCopied(false), 2000);
//     };

//     const handleReset = () => {
//         setCode(DEFAULT_CODE);
//         setTimeout(() => {
//             if (iframeRef.current) {
//                 const doc = iframeRef.current.contentDocument;
//                 if (doc) {
//                     doc.open();
//                     doc.write(DEFAULT_CODE);
//                     doc.close();
//                 }
//             }
//         }, 50);
//     };

//     return (
//         <div className="min-h-screen bg-[#020617] text-slate-300 mt-10 pt-20 pb-12 px-6">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header Section */}
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
//                     <div>
//                         <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
//                             Codeiyo <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-accent to-[#34D399]">Lab.</span>
//                         </h1>
//                         <p className="text-slate-400">Write, test, and preview your code in real-time.</p>
//                     </div>

//                     <div className="flex items-center gap-3">
//                         <button
//                             onClick={handleReset}
//                             className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all flex items-center gap-2 text-sm font-medium"
//                         >
//                             <RotateCcw className="w-4 h-4" />
//                             Reset
//                         </button>
//                         <button
//                             onClick={handleCopy}
//                             className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all flex items-center gap-2 text-sm font-medium"
//                         >
//                             {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
//                             {copied ? 'Copied!' : 'Copy'}
//                         </button>
//                         <button
//                             onClick={handleRun}
//                             className="px-6 py-2 bg-brand-accent hover:bg-brand-accent/90 text-white rounded-lg transition-all flex items-center gap-2 font-bold shadow-[0_0_20px_rgba(14,165,233,0.3)]"
//                         >
//                             <Play className="w-4 h-4 fill-current" />
//                             Run Code
//                         </button>
//                     </div>
//                 </div>

//                 {/* Editor Grid */}
//                 <div className="grid grid-cols-2 gap-6 h-[70vh]">
//                     {/* Editor Pane */}
//                     <div className="glass rounded-2xl overflow-hidden flex flex-col border border-white/10">
//                         <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex items-center justify-between">
//                             <div className="flex items-center gap-2">
//                                 <Code2 className="w-4 h-4 text-brand-accent" />
//                                 <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Editor</span>
//                             </div>
//                             <div className="flex gap-1.5">
//                                 <div className="w-3 h-3 rounded-full bg-red-500" />
//                                 <div className="w-3 h-3 rounded-full bg-amber-500" />
//                                 <div className="w-3 h-3 rounded-full bg-emerald-500" />
//                             </div>
//                         </div>

//                         <div className="flex-1 relative font-mono text-sm">
//                             <Editor
//                                 height="100%"
//                                 defaultLanguage="html"
//                                 theme="vs-dark"
//                                 value={code}
//                                 onChange={(value) => setCode(value || "")}
//                                 options={{
//                                     fontSize: 14,
//                                     fontFamily: "Fira Code, monospace",
//                                     minimap: { enabled: false },
//                                     wordWrap: "on",
//                                     automaticLayout: true,
//                                 }}
//                             />
//                         </div>
//                     </div>

//                     {/* Preview Pane */}
//                     <div className="glass rounded-2xl overflow-hidden flex flex-col border border-white/10">
//                         <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex items-center justify-between">
//                             <div className="flex items-center gap-2">
//                                 <Monitor className="w-4 h-4 text-emerald-400" />
//                                 <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Preview</span>
//                             </div>
//                         </div>

//                         <div className="flex-1 bg-white">
//                             <iframe
//                                 ref={iframeRef}
//                                 title="output"
//                                 className="w-full h-full border-none"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Codex;




"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Editor from "@monaco-editor/react";
import { 
  Play, RotateCcw, Copy, Check, Code2, 
  Monitor, Maximize2, Minimize2, GripVertical 
} from 'lucide-react';

const DEFAULT_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, sans-serif;
  }

  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle at top,
        #020617,
        #020617 40%,
        #020617);
    color: #e2e8f0;
  }

  .container {
    text-align: center;
    padding: 3rem;
    border-radius: 18px;
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(34,197,94,0.25);
    box-shadow:
      0 0 40px rgba(34,197,94,0.15),
      inset 0 0 20px rgba(255,255,255,0.03);
    max-width: 500px;
  }

  .logo {
    font-size: 2.6rem;
    font-weight: 700;
    background: linear-gradient(90deg,#22c55e,#38bdf8);
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 1rem;
  }

  .tagline {
    color: #94a3b8;
    margin-bottom: 2rem;
  }

  .button {
    display: inline-block;
    padding: 12px 22px;
    border-radius: 999px;
    background: linear-gradient(90deg,#22c55e,#38bdf8);
    color: #020617;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: 0.3s ease;
  }

  .button:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(56,189,248,0.5);
  }

  .hint {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: #64748b;
  }
</style>
</head>

<body>

  <div class="container">
    <div class="logo">Codeiyo</div>

    <p class="tagline">
      Learn • Build • Become a Developer
    </p>

    <button class="button" onclick="runMessage()">Run Your First Code 🚀</button>

    <p class="hint">
      👨‍💻 Try editing this text and press <b>Run</b>
    </p>
  </div>

  <script>
    function runMessage() {
      const messages = [
        "🎉 Congrats! You just ran your first code!",
        "🚀 Keep going, the next challenge is waiting!",
        "💡 Every programmer started just like this!",
        "🔥 Tip: Practice a little every day to become great!",
        "✨ Fun Fact: Codeiyo believes in learning by doing!"
      ];

      const msg = messages[Math.floor(Math.random() * messages.length)];

      alert(msg);
    }
  </script>

</body>
</html>`;

const Codex: React.FC = () => {
  const [code, setCode] = useState<string>(DEFAULT_CODE);
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Resizing Logic State
  const [leftWidth, setLeftWidth] = useState(50); // Percentage
  const [isResizing, setIsResizing] = useState(false);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Resize Handlers
  const startResizing = useCallback(() => setIsResizing(true), []);
  const stopResizing = useCallback(() => setIsResizing(false), []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    
    // Constraints: Don't let either side disappear
    if (newWidth > 20 && newWidth < 80) {
      setLeftWidth(newWidth);
    }
  }, [isResizing]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', stopResizing);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing, onMouseMove, stopResizing]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleRun = () => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(code);
        doc.close();
      }
    }
  };

  useEffect(() => {
    handleRun();
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`flex flex-col transition-all bg-[#020617] ${
        isFullscreen ? 'h-screen p-4' : 'h-[85vh] mt-24 px-6 mb-12'
      } ${isResizing ? 'cursor-col-resize select-none' : ''}`}
    >
      <div className="max-w-[1600px] w-full mx-auto flex flex-col h-full">
        
        {/* ── Toolbar ────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between mt-4 mb-4 bg-white/3 border border-white/10 p-2 rounded-2xl backdrop-blur-xl">
          <div className="flex items-center gap-4 pl-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Codeiyo <span className="text-brand-accent">Codex</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggleFullscreen} className="p-2 hover:bg-white/5 rounded-lg text-slate-400">
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>



            <button
              onClick={handleRun}
              className="flex items-center gap-2 px-6 py-2 bg-brand-accent border-2 border-brand-accent hover:bg-transparent text-black hover:text-white font-semibold rounded-xl transition-all duration-300  text-sm hover:scale-110font-black  shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              <Play size={14} className="fill-current" />
              RUN
            </button>
          </div>
        </div>

        {/* ── Resizable Workspace (Manual Implementation) ─────────────── */}
        <div className="flex-1 flex min-h-0 overflow-hidden border border-white/10 rounded-2xl bg-black/20 shadow-2xl relative">
          
          {/* Editor Side */}
          <div style={{ width: `${leftWidth}%` }} className="h-full glass  flex flex-col justify-between border-r border-white/5">
            <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center  gap-2">
                <Code2 size={14} className="text-brand-accent" />
              <span className="text-[10px] font-bold  text-slate-400 uppercase tracking-widest">Editor</span>
            </div>
            <div className="flex-1 relative">
            <Editor
            height="100%"
            defaultLanguage="html"
            theme="vs-dark"
            value={code}
            onChange={(v) => setCode(v || "")}
            options={{ 
                fontSize: 14, 
                minimap: { enabled: false }, 
                automaticLayout: true,
                // ── Add these lines ──────────────────────────
                wordWrap: "on",
                wrappingIndent: "indent", 
                scrollBeyondLastLine: false,
                // ──────────────────────────────────────────────
            }}
            />
            </div>
          </div>

          {/* Draggable Divider (The Handle) */}
          <div 
            onMouseDown={startResizing}
            className="absolute top-0 bottom-0 z-50 w-1.5 cursor-col-resize group flex items-center justify-center transition-all hover:bg-[#10B981]/30"
            style={{ left: `calc(${leftWidth}% - 3px)` }}
          >
            <div className="h-12 w-[2px] bg-white/10 group-hover:bg-[#10B981] rounded-full transition-all" />
          </div>

          {/* Preview Side */}
          <div style={{ width: `${100 - leftWidth}%` }} className="h-full glass flex flex-col bg-slate-500">
            <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center gap-2">
              <Monitor size={14} className="text-brand-accent" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Preview</span>
            </div>
            <iframe
              ref={iframeRef}
              title="output"
              className={`flex-1 w-full border-none bg-white ${isResizing ? 'pointer-events-none' : ''}`}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Codex;



