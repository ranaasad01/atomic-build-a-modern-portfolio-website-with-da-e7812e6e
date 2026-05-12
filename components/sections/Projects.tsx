"use client";

import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { featuredProjects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A selection of projects I&apos;m proud of — from SaaS platforms to developer tools. Each one built with care, performance, and real users in mind.
          </p>
        </ScrollReveal>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <ScrollReveal key={project.slug} delay={idx * 100}>
              <ProjectCard project={project} featured />
            </ScrollReveal>
          ))}
        </div>

        {/* View all CTA */}
        <ScrollReveal delay={300} className="text-center mt-14">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card text-slate-700 dark:text-slate-200 font-semibold text-base hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
          >
            View All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
