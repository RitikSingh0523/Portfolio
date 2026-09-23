import Reveal from "@/components/Reveal";

export default function SectionHeading({
  index,
  title,
  align = "left",
}: {
  index: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`mb-14 ${align === "center" ? "text-center" : "flex items-center gap-4"}`}
    >
      {align === "left" && (
        <span className="h-10 w-1 flex-none rounded-full bg-gradient-to-b from-accent to-accent-secondary" />
      )}
      <div>
        <p className="font-mono text-sm text-foreground/40">
          <span className="text-accent-secondary">{index}</span>
          <span className="text-foreground/30">{" // "}</span>
          {title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
        </p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
