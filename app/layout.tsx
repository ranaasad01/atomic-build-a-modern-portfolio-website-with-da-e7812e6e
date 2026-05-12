import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alex Rivera — Full-Stack Developer",
    template: "%s | Alex Rivera",
  },
  description:
    "Full-stack developer specializing in React, Next.js, and Node.js. Building beautiful, performant web experiences.",
  keywords: [
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "web developer",
    "portfolio",
  ],
  authors: [{ name: "Alex Rivera", url: "https://alexrivera.dev" }],
  creator: "Alex Rivera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexrivera.dev",
    title: "Alex Rivera — Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and Node.js. Building beautiful, performant web experiences.",
    siteName: "Alex Rivera Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alex Rivera — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rivera — Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and Node.js.",
    creator: "@alexrivera",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
