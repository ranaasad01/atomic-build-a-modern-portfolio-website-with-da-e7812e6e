export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  year: number;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Design";
  level: number; // 1-5
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: "Alex Rivera",
  title: "Full-Stack Developer",
  tagline: "I build beautiful, performant web experiences.",
  bio: `I'm a passionate full-stack developer with 5+ years of experience crafting modern web applications. I specialize in React, Next.js, and Node.js, with a deep love for clean code, thoughtful UX, and pixel-perfect design.

When I'm not coding, you'll find me hiking mountain trails, experimenting with generative art, or contributing to open-source projects. I believe great software is built at the intersection of technical excellence and human empathy.`,
  location: "San Francisco, CA",
  email: "alex@alexrivera.dev",
  availableForWork: true,
  profileImage: "/images/alex-rivera-profile-developer.jpg",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/alexrivera", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/alexrivera", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/alexrivera", icon: "twitter" },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: 5 },
  { name: "Next.js", category: "Frontend", level: 5 },
  { name: "TypeScript", category: "Frontend", level: 5 },
  { name: "Tailwind CSS", category: "Frontend", level: 5 },
  { name: "Framer Motion", category: "Frontend", level: 4 },
  { name: "Vue.js", category: "Frontend", level: 3 },
  { name: "GraphQL", category: "Frontend", level: 4 },
  { name: "Redux", category: "Frontend", level: 4 },
  // Backend
  { name: "Node.js", category: "Backend", level: 5 },
  { name: "Express", category: "Backend", level: 5 },
  { name: "PostgreSQL", category: "Backend", level: 4 },
  { name: "MongoDB", category: "Backend", level: 4 },
  { name: "Prisma", category: "Backend", level: 4 },
  { name: "Redis", category: "Backend", level: 3 },
  { name: "REST APIs", category: "Backend", level: 5 },
  { name: "tRPC", category: "Backend", level: 3 },
  // Tools
  { name: "Git", category: "Tools", level: 5 },
  { name: "Docker", category: "Tools", level: 4 },
  { name: "AWS", category: "Tools", level: 3 },
  { name: "Vercel", category: "Tools", level: 5 },
  { name: "CI/CD", category: "Tools", level: 4 },
  { name: "Jest", category: "Tools", level: 4 },
  // Design
  { name: "Figma", category: "Design", level: 4 },
  { name: "UI/UX Design", category: "Design", level: 3 },
];

export const projects: Project[] = [
  {
    slug: "nexus-dashboard",
    title: "Nexus Dashboard",
    description:
      "A real-time analytics dashboard for SaaS businesses with live charts, user segmentation, and revenue tracking.",
    longDescription: `Nexus Dashboard is a comprehensive analytics platform built for modern SaaS companies. It provides real-time insights into user behavior, revenue metrics, and product performance through an intuitive, data-rich interface.

The platform features live WebSocket connections for real-time data updates, interactive D3.js charts, and a powerful filtering system that lets teams slice data by date range, user segment, geography, and custom attributes.

Key challenges included optimizing WebSocket performance for thousands of concurrent connections, building a flexible charting system that handles sparse data gracefully, and designing a permission system that scales from solo founders to enterprise teams.

The result is a dashboard that loads in under 2 seconds, handles millions of events per day, and has become the primary analytics tool for 50+ SaaS companies.`,
    image: "https://www.cisco.com/content/dam/cisco-cdc/site/images/heroes/solutions/networking/artificial-intelligence/Nexus-one-spotlight.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets", "D3.js", "Prisma"],
    githubUrl: "https://github.com/alexrivera/nexus-dashboard",
    liveUrl: "https://nexus-dashboard.demo.com",
    featured: true,
    year: 2024,
  },
  {
    slug: "artflow-ai",
    title: "ArtFlow AI",
    description:
      "An AI-powered creative platform that generates, edits, and organizes artwork using Stable Diffusion and GPT-4.",
    longDescription: `ArtFlow AI is a creative platform that democratizes AI art generation. Users can generate images from text prompts, apply style transfers, edit existing images with inpainting, and organize their creations in beautiful galleries.

Built on top of Stable Diffusion XL and GPT-4 for prompt enhancement, the platform processes thousands of image generation requests daily. The backend uses a queue-based architecture with Redis and BullMQ to handle spikes in demand gracefully.

The frontend features a canvas-based editor built with Fabric.js, real-time generation progress via Server-Sent Events, and a Pinterest-style masonry gallery with infinite scroll.

ArtFlow has been used by over 10,000 artists and designers to create more than 500,000 unique artworks.`,
    image: "https://assets.aitoolsdirectory.com/file/aitools/Artflow-AI-creative-platform-for-content-creators.jpg",
    tags: ["React", "Python", "FastAPI", "Redis", "Stable Diffusion", "AWS S3"],
    githubUrl: "https://github.com/alexrivera/artflow-ai",
    liveUrl: "https://artflow.ai",
    featured: true,
    year: 2024,
  },
  {
    slug: "codeforge",
    title: "CodeForge",
    description:
      "A collaborative code editor with real-time multiplayer editing, syntax highlighting, and integrated AI code review.",
    longDescription: `CodeForge is a browser-based collaborative coding environment inspired by the best parts of VS Code and Google Docs. Multiple developers can edit the same file simultaneously with conflict-free real-time sync powered by CRDTs (Conflict-free Replicated Data Types).

The editor supports 50+ programming languages with full syntax highlighting via CodeMirror 6, intelligent autocomplete, and an integrated AI assistant powered by GPT-4 that can review code, suggest improvements, and explain complex logic.

The real-time collaboration layer uses Yjs for CRDT-based sync and WebRTC for peer-to-peer connections with a WebSocket fallback. This architecture keeps latency under 50ms for users in the same region.

CodeForge is used by coding bootcamps, interview platforms, and remote development teams worldwide.`,
    image: "https://liveblocks.io/_next/image?url=%2Fimages%2Fexamples%2Fthumbnails%2Fcode-editor.jpg&w=1200&q=90",
    tags: ["React", "Node.js", "WebRTC", "CRDTs", "CodeMirror", "OpenAI"],
    githubUrl: "https://github.com/alexrivera/codeforge",
    liveUrl: "https://codeforge.dev",
    featured: true,
    year: 2023,
  },
  {
    slug: "shipfast-ecommerce",
    title: "ShipFast E-Commerce",
    description:
      "A high-performance e-commerce platform with server-side rendering, Stripe payments, and inventory management.",
    longDescription: `ShipFast is a production-ready e-commerce solution built for speed and conversion. It achieves perfect Lighthouse scores through aggressive optimization: image lazy loading, font subsetting, route prefetching, and edge-cached product pages.

The platform integrates with Stripe for payments (including subscriptions and one-click checkout), Algolia for lightning-fast product search, and Cloudinary for responsive image delivery.

The admin dashboard provides real-time inventory tracking, order management, customer analytics, and automated low-stock alerts. The checkout flow is optimized for conversion with address autocomplete, saved payment methods, and one-page checkout.

ShipFast powers 20+ online stores with a combined GMV of $2M+ per month.`,
    image: "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3556873542542798991",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Algolia", "Cloudinary", "Prisma"],
    githubUrl: "https://github.com/alexrivera/shipfast",
    liveUrl: "https://shipfast-demo.vercel.app",
    featured: false,
    year: 2023,
  },
  {
    slug: "devlog",
    title: "DevLog",
    description:
      "A developer-focused blogging platform with MDX support, syntax highlighting, and newsletter integration.",
    longDescription: `DevLog is a modern blogging platform built specifically for developers who want to share their knowledge. It supports MDX for rich content with embedded React components, Shiki for beautiful syntax highlighting in 100+ languages, and automatic table of contents generation.

The platform includes a built-in newsletter system powered by Resend, allowing authors to grow their audience directly. Readers can subscribe to specific authors or topics, and authors get detailed analytics on post performance.

SEO is a first-class concern: every post gets automatic Open Graph images, structured data markup, and a sitemap. The reading experience is optimized with estimated read time, progress indicators, and a distraction-free mode.

DevLog hosts 500+ developer blogs with a combined readership of 100,000+ monthly readers.`,
    image: "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3702592652205656170",
    tags: ["Next.js", "MDX", "Resend", "PostgreSQL", "Shiki", "TypeScript"],
    githubUrl: "https://github.com/alexrivera/devlog",
    liveUrl: "https://devlog.io",
    featured: false,
    year: 2023,
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    description:
      "A Kanban-style project management tool with drag-and-drop, team collaboration, and time tracking.",
    longDescription: `TaskFlow is a project management application that combines the simplicity of Kanban boards with powerful collaboration features. Teams can organize work into boards, lists, and cards with rich text descriptions, file attachments, and threaded comments.

The drag-and-drop interface is built with dnd-kit for smooth, accessible interactions. Real-time updates ensure all team members see changes instantly without page refreshes. The time tracking feature integrates with popular billing tools like Harvest and Toggl.

TaskFlow includes a powerful automation engine that can trigger actions based on card movements, due dates, or custom conditions — similar to Zapier but built specifically for project workflows.

Used by 200+ teams ranging from indie developers to mid-sized agencies.`,
    image: "https://www.6sigma.us/wp-content/uploads/2024/06/kanban-project-management.webp",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "dnd-kit", "Redis"],
    githubUrl: "https://github.com/alexrivera/taskflow",
    liveUrl: "https://taskflow-app.com",
    featured: false,
    year: 2022,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "40+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Open Source Stars", value: "2K+" },
];
