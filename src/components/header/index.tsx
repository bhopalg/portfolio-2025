import Link from "next/link";
import { Code2 } from "lucide-react";

import DesktopNav from "@/components/header/desktop-nav";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass background with blur and subtle border */}
      <div
        className="absolute inset-0 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50 border-b border-white/10"
        aria-hidden="true"
      />
      {/* Sheen */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"
        aria-hidden="true"
      />
      <div className="relative">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="h-16 md:h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div
                className="h-8 w-8 rounded-md grid place-items-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
                }}
              >
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold tracking-tight">Alex Doe</span>
            </Link>
            <DesktopNav />
          </div>
        </div>
      </div>
    </header>
  );
}
