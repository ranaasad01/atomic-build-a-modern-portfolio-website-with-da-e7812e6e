export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Code2 as Github, Eye, Calendar, Tag } from 'lucide-react';
import { projects } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title + " | Alex Rivera",
      description: project.description,
      images: [{ url: project.image, alt: project.title }],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.tags.some((t) => project.tags.includes(t)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-16">
      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

        {/* Back button */}
        <div className="absolute top-8 left-0 right-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white text-sm font-medium transition-all duration-200 hover:-translate-x-1"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex items-center gap-3 mb-4">
            {project.featured && (
              <span className="px-3 py-1 rounded-full bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-medium">
                Featured Project
              </span>
            )}
            <span className="flex items-center gap-1.5 text-slate-300 text-sm">
              <Calendar size={14} />
              {project.year}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-slate-300 text-lg max-w-2xl">{project.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">About This Project</h2>
              {project.longDescription.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-base">
                  {para}
                </p>
              ))}
            </div>

            {/* Related projects */}
            {relatedProjects.length > 0 && (
              <div className="mt-16">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Related Projects</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {relatedProjects.map((related) => (
                    <Link
                      key={related.slug}
                      href={"/projects/" + related.slug}
                      className="glass-card rounded-xl overflow-hidden hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1">
                          {related.title}
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                          {related.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Links */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20"
                >
                  <Eye size={18} />
                  Live Demo
                </a>
              </div>
            </div>

            {/* Tech stack */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Tag size={16} className="text-indigo-500" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium border border-indigo-100 dark:border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Year */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Calendar size={16} className="text-indigo-500" />
                Year
              </h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium">{project.year}</p>
            </div>

            {/* Back link */}
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            >
              <ArrowLeft size={16} />
              All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
