import Link from "next/link";
import BackgroundVisualLayers from "@/components/background-visual-layers";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-dvh text-foreground relative overflow-hidden bg-primary-foreground pt-16 md:pt-20">
      <BackgroundVisualLayers />
      <SkipToContent />
      <Header />
    </main>
  );
}

function SkipToContent() {
  return (
    <Link
      href="#content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-[#0D0F14] focus:text-[#E5E7EB] focus:border focus:border-[#22D3EE] focus:px-3 focus:py-2 focus:rounded"
    >
      Skip to content
    </Link>
  );
}
