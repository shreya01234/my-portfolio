import React, { useState } from "react";
import { 
  Mail, Phone, MapPin, Code2, Sparkles, 
  Terminal, Award, GraduationCap, ChevronRight, Copy, Check, ExternalLink, X, ArrowUpRight, Palette, Layout 
} from "lucide-react";

export default function App() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const [activeProject, setActiveProject] = useState(null);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+919726811201");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shreya.punam.sharma@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const projects = [
    {
      id: "stayrooted",
      title: "StayRooted – Gamified Productivity Platform",
      tagline: "Engaging productivity application with interactive tree growth mechanics.",
      tags: ["React.js", "Figma", "Node.js", "Express.js", "MongoDB", "REST API"],
      accent: "from-cyan-500/20 to-teal-500/10",
      border: "hover:border-cyan-500/50",
      textColor: "text-cyan-400",
      figmaUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com",
      highlights: [
        "Converted Figma UI/UX design concepts into clean, scalable React components, boosting user engagement by 25%.",
        "Engineered smooth mobile responsiveness and cross-browser compatibility across all breakpoints.",
        "Integrated secure backend REST APIs and optimized asset delivery to cut page load times by 20%."
      ],
      liveUrl: "https://linkedin.com/in/shreya-sharma-37b170420"
    },
    {
      id: "ecommerce",
      title: "E-Commerce Web Application",
      tagline: "High-performance modular store with live search and seamless checkout.",
      tags: ["HTML5", "CSS3", "JavaScript (ES6)", "Figma UI", "REST APIs"],
      accent: "from-indigo-500/20 to-purple-500/10",
      border: "hover:border-indigo-500/50",
      textColor: "text-indigo-400",
      figmaUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com",
      highlights: [
        "Designed and prototyped responsive layout frames in Figma before converting into high-efficiency CSS/JS modules.",
        "Optimized UI rendering routines to reduce interaction latency by 15%, increasing checkout completion by 30%.",
        "Ensured consistent styling and code maintainability by writing clean, well-documented JavaScript modules."
      ],
      liveUrl: "https://linkedin.com/in/shreya-sharma-37b170420"
    }
  ];

  return (
    <div className="min-h-screen bg-[#08080c] text-zinc-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Background Decorative Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <header className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-zinc-400 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for Opportunities
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 text-white">
          Shreya Sharma
        </h1>
        
        <p className="text-xl sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 mb-6">
          Front-End Developer & UI Specialist
        </p>

        <p className="max-w-2xl mx-auto text-zinc-400 text-base sm:text-lg leading-relaxed mb-10">
          Crafting high-performance, visually stunning, and responsive web applications with modern frontend engineering standards.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          
          {/* Contact / Phone Button */}
          <div className="relative">
            <button
              onClick={() => {
                setShowPhone(!showPhone);
                setShowEmail(false);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-cyan-500/20"
            >
              <Phone size={18} />
              {showPhone ? "+91 9726811201" : "Contact Me"}
            </button>

            {showPhone && (
              <div className="absolute top-14 left-1/2 -translate-x-1/2 w-64 p-3 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl z-20 flex items-center justify-between text-xs backdrop-blur-xl">
                <span className="text-zinc-200 font-mono">+91 9726811201</span>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-cyan-400 px-2.5 py-1 rounded-lg border border-zinc-700 transition"
                >
                  {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedPhone ? "Copied" : "Copy"}</span>
                </button>
              </div>
            )}
          </div>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/shreya-sharma-37b170420"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-cyan-400 font-semibold text-sm hover:border-cyan-500/50 hover:text-white transition-all duration-300 backdrop-blur-md"
          >
            LinkedIn
          </a>

          {/* Email Button */}
          <div className="relative">
            <button
              onClick={() => {
                setShowEmail(!showEmail);
                setShowPhone(false);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 font-semibold text-sm hover:border-zinc-700 hover:text-white transition-all duration-300 backdrop-blur-md"
            >
              <Mail size={18} className="text-indigo-400" />
              {showEmail ? "shreya.punam.sharma@gmail.com" : "Email"}
            </button>

            {showEmail && (
              <div className="absolute top-14 left-1/2 -translate-x-1/2 w-72 p-3 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl z-20 flex items-center justify-between text-xs backdrop-blur-xl">
                <span className="text-zinc-200 font-mono truncate">shreya.punam.sharma@gmail.com</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-indigo-400 px-2.5 py-1 rounded-lg border border-zinc-700 transition shrink-0 ml-2"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>
            )}
          </div>

        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-20">
        
        {/* About Section */}
        <section className="relative">
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl relative overflow-hidden group hover:border-zinc-700/80 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-indigo-500" />
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Sparkles size={20} className="text-cyan-400" /> About Me
            </h2>
            <p className="text-zinc-300 leading-relaxed text-base">
              Performance-driven Front-End Developer with expertise in converting Figma UI/UX designs into clean, responsive, and reusable code. Skilled in building dynamic single-page web applications using <span className="text-cyan-400 font-medium">React.js, JavaScript (ES6+), Figma, HTML5, CSS3, and Tailwind CSS</span>. Proficient in integrating RESTful APIs, optimizing load speeds, and ensuring cross-browser compatibility, backed by strong fundamentals in DSA, OOPs, and full-stack familiarity (Node.js, Express.js, MongoDB).
            </p>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-white tracking-tight">Technical Arsenal</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800 flex justify-between items-center">
                Front-End & UI <Code2 size={18} className="text-cyan-400" />
              </h3>
              <ul className="space-y-2.5 text-zinc-400 text-sm">
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-cyan-400" /> React.js</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-cyan-400" /> JavaScript (ES6+)</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-cyan-400" /> Figma (UI/UX Design & Wireframing)</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-cyan-400" /> HTML5 & CSS3 / Tailwind</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-cyan-400" /> Responsive Web Design</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800 flex justify-between items-center">
                Optimization & Tools <Palette size={18} className="text-indigo-400" />
              </h3>
              <ul className="space-y-2.5 text-zinc-400 text-sm">
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-indigo-400" /> Figma Design-to-Code Conversion</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-indigo-400" /> UI Performance Tuning</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-indigo-400" /> Web Speed & SEO</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-indigo-400" /> REST API Integration</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800 flex justify-between items-center">
                Back-End & Core <Terminal size={18} className="text-teal-400" />
              </h3>
              <ul className="space-y-2.5 text-zinc-400 text-sm">
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-teal-400" /> Node.js & Express.js</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-teal-400" /> MongoDB & MySQL</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-teal-400" /> Java & Python</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-teal-400" /> DSA & OOPs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Modern Interactive Projects Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Code2 className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h2>
            </div>
            <span className="text-xs text-zinc-500 font-mono">Click card to view Figma & Details</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.id}
                onClick={() => setActiveProject(p)}
                className={`group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 cursor-pointer transition-all duration-300 ${p.border} hover:scale-[1.01] hover:bg-zinc-900/60 backdrop-blur-md flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-800/80 ${p.textColor}`}>
                      Interactive Showcase
                    </span>
                    <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {p.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-zinc-800/50 text-zinc-400 text-[11px] font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-cyan-400" size={22} />
              <h2 className="text-xl font-bold text-white">Education</h2>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                B.Tech in Computer Science & Engineering
              </h3>
              <p className="text-zinc-400 text-sm mb-4">Poornima University, Jaipur, Rajasthan</p>
              <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-medium">
                GPA: 8.09 / 10
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-indigo-400" size={22} />
              <h2 className="text-xl font-bold text-white">Certifications</h2>
            </div>
            <ul className="space-y-2.5 text-zinc-300 text-sm">
              <li className="flex items-center justify-between border-b border-zinc-800/60 pb-2">
                <span>Java Certification</span> <span className="text-zinc-500 text-xs">Infosys</span>
              </li>
              <li className="flex items-center justify-between border-b border-zinc-800/60 pb-2">
                <span>Micro-Certification</span> <span className="text-zinc-500 text-xs">ServiceNow</span>
              </li>
              <li className="flex items-center justify-between border-b border-zinc-800/60 pb-2">
                <span>SQL (Basic) Certification</span> <span className="text-zinc-500 text-xs">HackerRank</span>
              </li>
              <li className="flex items-center justify-between border-b border-zinc-800/60 pb-2">
                <span>Privacy & Security Online</span> <span className="text-zinc-500 text-xs">Academic</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Virtual Labs Workshop</span> <span className="text-zinc-500 text-xs">IIT Delhi</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Footer Card */}
        <section className="relative p-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-black border border-zinc-800 text-center overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-3">Let’s Build Something Amazing</h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-300 pt-4">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-cyan-400" />
              <span>shreya.punam.sharma@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-cyan-400" />
              <span>+91 9726811201</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-400" />
              <span>Ahmedabad, India</span>
            </div>
          </div>
        </section>
      </main>

      {/* Project Detail Modal with Live Figma Preview */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{activeProject.title}</h3>
                <p className="text-zinc-400 text-sm">{activeProject.tagline}</p>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {activeProject.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-zinc-800 text-cyan-300 text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>

            {/* Interactive Figma Design Preview Box */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Layout size={14} className="text-cyan-400" />
                <span>Live Figma Prototype / Design View</span>
              </div>
              <div className="w-full h-52 rounded-xl overflow-hidden border border-zinc-800 bg-black/50">
                <iframe
                  title="Figma Preview"
                  className="w-full h-full"
                  src={activeProject.figmaUrl}
                  allowFullScreen
                />
              </div>
            </div>

            {/* Key Contributions */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-zinc-300">Key Highlights & Impact:</h4>
              <ul className="space-y-2 text-sm text-zinc-300">
                {activeProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Action Buttons */}
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold text-xs hover:bg-cyan-400 transition"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>

          </div>
        </div>
      )}

      <footer className="text-center py-6 border-t border-zinc-900 text-xs text-zinc-600">
        © {new Date().getFullYear()} Shreya Sharma. All rights reserved.
      </footer>
    </div>
  );
}