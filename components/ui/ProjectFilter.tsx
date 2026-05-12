"use client";

import { useState } from "react";
import { Search, X } from 'lucide-react';
import { projects, Project } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "./ScrollReveal";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

export function ProjectFilter() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const years = Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedTags([]);
    setSelectedYear(null);
  };

  const filtered: Project[] = projects.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 || selectedTags.every((tag) => p.tags.includes(tag));

    const matchesYear = selectedYear === null || p.year === selectedYear;

    return matchesSearch && matchesTags && matchesYear;
  });

  const hasFilters = search !== "" || selectedTags.length > 0 || selectedYear !== null;

  return (
    <div>
      {/* Search */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search projects..."
          className="w-full pl-11 pr-4 py-3 rounded-xl glass-card text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Year filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setSelectedYear(null)}
          className={
            "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 " +
            (selectedYear === null
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
              : "glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white")
          }
        >
          All Years
        </button>
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year === selectedYear ? null : year)}
            className={
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 " +
              (selectedYear === year
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                : "glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white")
            }
          >
            {year}
          </button>
        ))}
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={
              "px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 border " +
              (selectedTags.includes(tag)
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20"
                : "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-500/20 hover:border-indigo-300 dark:hover:border-indigo-500/50")
            }
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Showing <span className="font-semibold text-slate-900 dark:text-white">{filtered.length}</span> of{" "}
          <span className="font-semibold text-slate-900 dark:text-white">{projects.length}</span> projects
        </p>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
          >
            <X size={14} />
            Clear filters
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No projects found</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-6">Try adjusting your search or filters</p>
          <button
            onClick={clearFilters}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, idx) => (
            <ScrollReveal key={project.slug} delay={idx * 80}>
              <ProjectCard project={project} featured={project.featured} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}
