import { useReveal } from "@/hooks/use-reveal";

const countries = [
  { name: "Canada", flag: "🇨🇦", tag: "PR & Study" },
  { name: "Australia", flag: "🇦🇺", tag: "Skilled Migration" },
  { name: "United Kingdom", flag: "🇬🇧", tag: "Work & Study" },
  { name: "United States", flag: "🇺🇸", tag: "Tourist & Work" },
  { name: "Europe", flag: "🇪🇺", tag: "Schengen Visa" },
];

export function Countries() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="countries" className="py-20 md:py-28 bg-secondary/40">
      <div className="container-x" ref={ref}>
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Destinations</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
            Countries We Serve
          </h2>
          <p className="mt-4 text-muted-foreground">
            We offer immigration and visa services for the world's top destinations.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {countries.map((c) => (
            <div
              key={c.name}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 text-center hover:border-gold hover:-translate-y-1 hover:shadow-elegant transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl group-hover:scale-110 transition-transform">
                {c.flag}
              </div>
              <h3 className="mt-3 font-display font-semibold text-primary">{c.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-gold font-medium">{c.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
