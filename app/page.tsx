export const dynamic = "force-dynamic";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Footer />
      <Navbar />
      <ThemeProvider />
      <ThemeToggle />
    </main>
  );
}
