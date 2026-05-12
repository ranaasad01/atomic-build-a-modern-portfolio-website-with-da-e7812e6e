"use client";

import { useState } from "react";
import { skills } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Category = "All" | "Frontend" | "Backend" | "Tools" | "Design";

const categories: Category[] = ["All", "Frontend", "Backend", "Tools", "Design"];

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500 to-indigo-500",
  Backend: "from-emerald-500 to-teal-500",
  Tools: "from-orange-500 to-amber-500",
  Design: "from-pink-500 to-rose-500",
};

const categoryBg: Record<string, string> = {
  Frontend: "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/30",
  Backend: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30",
  Tools: "bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-500/30",
  Design: "bg-pink-50 dark:bg-pink-500/10 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-500/30",
};

function SkillBar({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={
            "h-1.5 w-4 rounded-full transition-all duration-300 " +
            (i <= level ? "bg-indigo-500" : "bg-slate-200 dark:bg-slate-700")
          }
        />
      ))}
    </div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const grouped = categories.slice(1).reduce<Record<string, typeof skills>>((acc, cat) => {
    const items = filtered.filter((s) => s.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {});

  return (
    <section id="skills" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A curated set of tools and technologies I use to bring ideas to life — from pixel-perfect UIs to scalable backend systems.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={100} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 " +
                (activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white")
              }
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Skills grid */}
        <div className="space-y-10">
          {Object.entries(grouped).map(([category, items], groupIdx) => (
            <ScrollReveal key={category} delay={groupIdx * 100}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={"w-3 h-3 rounded-full bg-gradient-to-r " + categoryColors[category]} />
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{category}</h3>
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
                  <span className="text-sm text-slate-400">{items.length} skills</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {items.map((skill, idx) => (
                    <ScrollReveal key={skill.name} delay={idx * 50}>
                      <div className="glass-card rounded-xl p-4 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1 group">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className={"text-xs px-2 py-0.5 rounded-full border font-medium " + categoryBg[skill.category]}>
                            {skill.category}
                          </span>
                        </div>
                        <SkillBar level={skill.level} />
                        <div className="mt-2 text-xs text-slate-400 dark:text-slate-500">
                          {skill.level === 5 ? "Expert" : skill.level === 4 ? "Advanced" : skill.level === 3 ? "Proficient" : "Learning"}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={200} className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Always learning, always growing
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
              Currently exploring Rust, WebAssembly, and AI/ML integration patterns. The tech landscape never stops evolving, and neither do I.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Rust", "WebAssembly", "LangChain", "Bun", "Astro"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium border border-indigo-200 dark:border-indigo-500/30"
                >
                  {tech} ✦ Learning
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
