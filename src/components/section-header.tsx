import { cn } from "@/lib/utils";

export default function SectionHeader({
  eyebrow = "Section",
  title = "Section title",
  subtitle = "Section subtitle",
  align = "center",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        align === "center" ? "text-center" : "text-left",
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-secondary-foreground/75",
          align === "center" ? "mx-auto" : "",
        )}
        style={{ borderColor: "#7C3AED66" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </div>
      <h2
        className={cn(
          "mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight",
          align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-3 text-sm sm:text-base text-[#E5E7EB]/75",
          align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}
