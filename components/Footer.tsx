import Link from "next/link";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Heart } from 'lucide-react';
import { personalInfo, socialLinks } from "@/lib/data";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "About", href: "/#about" },
      { label: "Skills", href: "/#skills" },
      { label: "Projects", href: "/#projects" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "All Projects", href: "/projects" },
      { label: "Nexus Dashboard", href: "/projects/nexus-dashboard" },
      { label: "ArtFlow AI", href: "/projects/artflow-ai" },
      { label: "CodeForge", href: "/projects/codeforge" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 text-slate-400">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                AR
              </div>
              <span className="font-bold text-white text-lg">{personalInfo.name}</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Full-stack developer crafting beautiful, performant web experiences. Available for freelance and full-time opportunities.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  {link.icon === "github" && <Github size={16} />}
                  {link.icon === "linkedin" && <Linkedin size={16} />}
                  {link.icon === "twitter" && <Twitter size={16} />}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-indigo-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center sm:text-left">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm flex items-center gap-1.5">
            Built with{" "}
            <Heart size={14} className="text-red-400 fill-red-400" />
            {" "}using Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
