import Link from "next/link";
import { Mail } from "lucide-react";

import { DETAILS, NAV } from "@/constants";

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {NAV.map((item) => (
        <NavLink key={item.name} href={item.href} label={item.name} />
      ))}
      <Link
        href={`mailto:${DETAILS.contactEmail}`}
        className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium shadow transition-transform hover:-translate-y-0.5"
        style={{
          background:
            "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
          color: "#0D0F14",
        }}
      >
        <Mail className="h-4 w-4" />
        Contact
      </Link>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="hover:text-accent transition-colors">
      {label}
    </Link>
  );
}
