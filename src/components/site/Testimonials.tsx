import { Star, Quote } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Student Visa — Canada",
    text: "The team made my Canada study visa journey effortless. Every step was guided, every doubt cleared. I got my visa in just 8 weeks!",
    initials: "PS",
  },
  {
    name: "Rahul Mehta",
    role: "Work Visa — Australia",
    text: "Highly professional and trustworthy. NINE OVERSEAS DK handled my entire skilled migration process flawlessly. Fully recommended.",
    initials: "RM",
  },
  {
    name: "Anita Patel",
    role: "Tourist Visa — UK",
    text: "From documentation to interview prep, the experience was outstanding. Got my UK visit visa on the first attempt. Thank you team!",
    initials: "AP",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-x" ref={ref}>
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
            Stories from Happy Clients
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl bg-card border border-border p-7 shadow-card hover:shadow-elegant transition-shadow"
            >
              <Quote className="absolute top-5 right-5 h-10 w-10 text-gold/20" />
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm md:text-base text-foreground leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <div className="h-11 w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-semibold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
