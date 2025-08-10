import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#7C3AED33] py-10">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#E5E7EB]/70">
          © {new Date().getFullYear()} Alex Doe. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="secondary"
            className="bg-transparent border border-[#7C3AED66] text-[#E5E7EB] hover:bg-[#7C3AED1a]"
          >
            <Link href="mailto:hello@example.com">hello@example.com</Link>
          </Button>
          <Link
            href="#projects"
            className="inline-flex items-center gap-1 text-sm hover:text-[#22D3EE] transition-colors"
          >
            View projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
