import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-emerald-500/30 selection:text-emerald-200">
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}
