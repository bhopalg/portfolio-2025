import Link from "next/link";
import Script from "next/script";

import Hero from "@/components/hero";
import AIShowcase from "@/components/ai-showcase";
import Projects from "@/components/projects";
import Socials from "@/components/socials";
import AboutExperience from "@/components/about-experience";
import BackgroundVisualLayers from "@/components/background-visual-layers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { DETAILS } from "@/constants";

export default function Home() {
  return (
    <main className="min-h-dvh text-foreground relative overflow-hidden bg-primary-foreground pt-16 md:pt-20">
      <HomepageJSONLD />
      <BackgroundVisualLayers />
      <SkipToContent />
      <Header />
      <Hero />
      <AIShowcase />
      <Projects />
      <AboutExperience />
      <Socials />
      <Footer />
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

function HomepageJSONLD() {
  return (
    <Script
      id="homepage-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://www.gbhopal.com#website",
              url: "https://www.gbhopal.com",
              name: "Gurpreet Bhopal — Portfolio",
              inLanguage: "en-GB",
              description:
                "Portfolio of Gurpreet Bhopal, Senior Software Developer specialising in Next.js, TypeScript, Python, and AI automations.",
              publisher: { "@id": "https://www.gbhopal.com#about" },
            },
            {
              "@type": "Person",
              "@id": "https://www.gbhopal.com#person",
              name: "Gurpreet Bhopal",
              alternateName: "Gurps",
              url: "https://www.gbhopal.com",
              image: "https://www.gbhopal.com/og.jpg",
              jobTitle: "Senior Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "Independent",
              },
              knowsAbout: [
                "Next.js",
                "TypeScript",
                "React",
                "Node.js",
                "Python",
                "AI automations",
                "n8n",
                "Supabase",
                "Stripe",
                "AWS S3",
                "SaaS development",
              ],
              sameAs: [
                DETAILS.socials.linkedIn.href,
                DETAILS.socials.github.href,
              ],
              email: `mailto:${DETAILS.contactEmail}`,
            },
            {
              "@type": "ItemList",
              "@id": "https://www.gbhopal.com#projects",
              name: "Featured Projects",
              itemListOrder: "https://schema.org/ItemListOrderAscending",
              numberOfItems: 2,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: { "@id": "https://www.cultur3.co.uk#site" },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: { "@id": "https://dashboard.cultur3.co.uk#site" },
                },
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://www.cultur3.co.uk#site",
              url: "https://www.cultur3.co.uk",
              name: "Cultur3 Website",
              description:
                "Members-only music & cultural experiences site with Stripe, Supabase, and S3 integration.",
              creator: { "@id": "https://www.gbhopal.com#person" },
            },
            {
              "@type": "SoftwareApplication",
              "@id": "https://www.gbhopal.com#cultur3-dashboard",
              name: "Cultur3 Admin Dashboard",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: "https://www.gbhopal.com/#projects/cultur3-dashboard",
              description:
                "Admin dashboard for members, tickets, and event data with real-time features.",
              author: { "@id": "https://www.gbhopal.com#person" },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://www.gbhopal.com#breadcrumbs",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@id": "https://www.gbhopal.com#website",
                    name: "Home",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@id": "https://www.gbhopal.com#projects",
                    name: "Projects",
                  },
                },
              ],
            },
          ],
        }),
      }}
    />
  );
}
