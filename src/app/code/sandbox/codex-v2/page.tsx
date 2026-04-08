"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Editor from "@monaco-editor/react";
import {
    Monitor,
    Play,
    RotateCcw,
    Copy,
    Check,
    FileCode,
    FileText,
    FileType,
    FileJson,
    Terminal
} from 'lucide-react';

const CodexV2: React.FC = () => {
    const initialHtml = `<div class="container">
    <div class="logo">Codeiyo</div>

    <p class="tagline">
      Learn • Build • Become a Developer
    </p>

    <button class="button" onclick="runMessage()">Run Your First Code 🚀</button>

    <p class="hint">
      👨‍💻 Try editing this text and press <b>Run</b>
    </p>
  </div>`;

    const initialCss = `* {
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
    text-decoration: none;
    cursor: pointer;
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
  }`;

    const initialJs = `function runMessage() {
      const messages = [
        "🎉 Congrats! You just ran your first code!",
        "🚀 Keep going, the next challenge is waiting!",
        "💡 Every programmer started just like this!",
        "🔥 Tip: Practice a little every day to become great!",
        "✨ Fun Fact: Codeiyo believes in learning by doing!"
      ];

      const msg = messages[Math.floor(Math.random() * messages.length)];

      alert(msg);
    }`;

    const [html, setHtml] = useState(initialHtml);
    const [css, setCss] = useState(initialCss);
    const [js, setJs] = useState(initialJs);
    const [srcDoc, setSrcDoc] = useState(''); // iframe content
    const [copied, setCopied] = useState<string | null>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Combine HTML, CSS, JS into iframe content
    const handleRun = () => {
        const combined = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>
            try { ${js} } catch(err) { console.error(err); }
          </script>
        </body>
      </html>`;
        // Small timeout ensures iframe reloads correctly
        setTimeout(() => setSrcDoc(combined), 50);
    };

    // Run code on first render
    useEffect(() => {
        handleRun();
    }, []);

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    const resetCode = () => {
        setHtml(initialHtml);
        setCss(initialCss);
        setJs(initialJs);
        // setSrcDoc(''); // optional clear iframe before reset
        setTimeout(() => handleRun(), 50); // reload iframe after reset
    };

    return (
        <div className="min-h-screen bg-[#020617] text-slate-300 mt-10 pt-20 pb-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 ">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                            <Terminal className="text-brand-accent" />
                            Multi-Pane <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-accent to-[#34D399]">Codex.</span>
                        </h1>
                        <p className="text-slate-400 text-sm mt-2">Separated HTML, CSS, and JS for cleaner development.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={resetCode}
                            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all flex items-center gap-2 text-xs font-medium"
                        >
                            <RotateCcw className="w-3.5 h-3.5" />
                            Reset
                        </button>
                        <button
                            onClick={handleRun}
                            className="flex items-center gap-2 px-6 py-2 bg-brand-accent border-2 border-brand-accent hover:bg-transparent text-black hover:text-white font-semibold rounded-xl transition-all duration-300  text-sm hover:scale-110font-black  shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                        >
                            <Play className="w-4 h-4 fill-current" />
                            RUN
                        </button>
                    </div>
                </div>

                {/* Editors */}
                <div className="grid md:grid-cols-3 gap-4 flex-1 min-h-[450px]">

                    {/* HTML */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="glass rounded-xl overflow-hidden flex flex-col border border-white/10 group"
                    >
                        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FileCode className="w-3.5 h-3.5 text-orange-400" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">HTML</span>
                            </div>
                            <button onClick={() => copyToClipboard(html, "html")} className="text-slate-500 hover:text-white transition-colors">
                                {copied === "html" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            </button>
                        </div>
                        <div className="flex-1">
                            <Editor
                                height="100%"
                                defaultLanguage="html"
                                theme="vs-dark"
                                value={html}
                                onChange={(value) => setHtml(value || "")}
                                options={{ fontSize: 14, fontFamily: "Fira Code, monospace", minimap: { enabled: false }, wordWrap: "on", automaticLayout: true, scrollBeyondLastLine: false }}
                            />
                        </div>
                    </motion.div>

                    {/* CSS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass rounded-xl overflow-hidden flex flex-col border border-white/10 group"
                    >
                        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FileType className="w-3.5 h-3.5 text-sky-400" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">CSS</span>
                            </div>
                            <button onClick={() => copyToClipboard(css, "css")} className="text-slate-500 hover:text-white transition-colors">
                                {copied === "css" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            </button>
                        </div>
                        <div className="flex-1">
                            <Editor
                                height="100%"
                                defaultLanguage="css"
                                theme="vs-dark"
                                value={css}
                                onChange={(value) => setCss(value || "")}
                                options={{ fontSize: 14, fontFamily: "Fira Code, monospace", minimap: { enabled: false }, wordWrap: "on", automaticLayout: true, scrollBeyondLastLine: false }}
                            />
                        </div>
                    </motion.div>

                    {/* JS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass rounded-xl overflow-hidden flex flex-col border border-white/10 group"
                    >
                        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FileJson className="w-3.5 h-3.5 text-yellow-400" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">JS</span>
                            </div>
                            <button onClick={() => copyToClipboard(js, "js")} className="text-slate-500 hover:text-white transition-colors">
                                {copied === "js" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            </button>
                        </div>
                        <div className="flex-1">
                            <Editor
                                height="100%"
                                defaultLanguage="javascript"
                                theme="vs-dark"
                                value={js}
                                onChange={(value) => setJs(value || "")}
                                options={{ fontSize: 14, fontFamily: "Fira Code, monospace", minimap: { enabled: false }, wordWrap: "on", automaticLayout: true, scrollBeyondLastLine: false }}
                            />
                        </div>
                    </motion.div>

                </div>

                {/* Live Preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="glass rounded-xl overflow-hidden flex flex-col border border-white/10 flex-1 shadow-2xl"
                    style={{ minHeight: "55vh" }}
                >
                    <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Monitor className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Live Preview</span>
                        </div>
                    </div>
                    <div className="flex-1 bg-white relative" style={{ minHeight: "60vh" }}>
                        <iframe
                            ref={iframeRef}
                            srcDoc={srcDoc}
                            title="output"
                            sandbox="allow-scripts allow-modals"
                            className="w-full h-full border-none"
                            style={{ minHeight: "60vh" }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CodexV2;
