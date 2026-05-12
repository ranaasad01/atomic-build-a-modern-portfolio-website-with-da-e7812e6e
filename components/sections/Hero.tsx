"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Sparkles } from 'lucide-react';
import { personalInfo, socialLinks } from "@/lib/data";

const roles = [
  "Full-Stack Developer",
  "React Specialist",
  "Next.js Expert",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = texts[currentIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === target) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        return;
      }
      setCurrentText(
        isDeleting ? target.slice(0, currentText.length - 1) : target.slice(0, currentText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <span className="gradient-text">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 from-slate-50 via-white to-indigo-50" />

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-8"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease 0.1s" }}
        >
          <Sparkles size={14} className="text-indigo-500" />
          {personalInfo.availableForWork ? "Available for new opportunities" : "Currently unavailable"}
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease 0.2s" }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        {/* Typewriter */}
        <div
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-200 mb-6 h-12"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease 0.3s" }}
        >
          {mounted && <TypewriterText texts={roles} />}
        </div>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease 0.4s" }}
        >
          {personalInfo.tagline} I craft scalable, accessible, and delightful digital experiences using modern web technologies.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease 0.5s" }}
        >
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            View My Work
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card text-slate-700 dark:text-slate-200 font-semibold text-base hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-4"
          style={{ opacity: mounted ? 1 : 0, transition: "all 0.6s ease 0.6s" }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-200 hover:-translate-y-0.5"
            >
              {link.icon === "github" && <Github size={18} />}
              {link.icon === "linkedin" && <Linkedin size={18} />}
              {link.icon === "twitter" && <Twitter size={18} />}
            </a>
          ))}
          <div className="w-px h-6 bg-slate-300 dark:bg-slate-600" />
          <span className="text-sm text-slate-500 dark:text-slate-400">{personalInfo.location}</span>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
