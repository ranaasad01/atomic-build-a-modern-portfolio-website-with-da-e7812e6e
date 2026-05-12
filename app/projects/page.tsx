export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { ProjectFilter } from "@/components/ui/ProjectFilter";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse all of Alex Rivera's projects — from SaaS platforms to developer tools and open source contributions.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-20">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-6 border border-indigo-500/30">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            All{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            {projects.length} projects spanning SaaS platforms, developer tools, AI applications, and more. Filter by technology or year to find what you&apos;re looking for.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: "Total Projects", value: projects.length },
              { label: "Featured", value: projects.filter((p) => p.featured).length },
              { label: "Technologies", value: new Set(projects.flatMap((p) => p.tags)).size },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProjectFilter />
      </div>
    </div>
  );
}
