"use client";

import Image from "next/image";
import { MapPin, Mail, Download, CheckCircle } from 'lucide-react';
import { personalInfo, stats } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const highlights = [
  "5+ years building production web applications",
  "Contributed to 20+ open source projects",
  "Led engineering teams of up to 8 developers",
  "Passionate about performance & accessibility",
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Crafting digital experiences
            <br />
            <span className="gradient-text">with purpose</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-sm" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20" />

                {/* Profile image */}
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl shadow-indigo-500/10 gradient-border">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 glass-card rounded-xl px-4 py-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-400 pulse-ring" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Open to Work
                    </span>
                  </div>
                </div>

                {/* Experience badge */}
                <div className="absolute -top-6 -left-6 glass-card rounded-xl px-4 py-3 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">5+</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Years Exp.</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content side */}
          <ScrollReveal direction="right" delay={100}>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-indigo-500" />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail size={14} className="text-indigo-500" />
                  {personalInfo.email}
                </span>
              </div>

              <div className="space-y-4">
                {personalInfo.bio.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5"
                >
                  <Download size={16} />
                  Download Resume
                </a>
                <a
                  href={"mailto:" + personalInfo.email}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-slate-700 dark:text-slate-200 font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  Say Hello
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <ScrollReveal delay={200} className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
