import { GraduationCap, Briefcase, Plane, Home, BookUser, Luggage } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  { icon: GraduationCap, title: "Student Visa", desc: "Study abroad with end-to-end university admission and visa support." },
  { icon: Briefcase, title: "Work Visa", desc: "Skilled worker, employer-sponsored and professional work visa solutions." },
  { icon: Plane, title: "Tourist Visa", desc: "Hassle-free leisure and family visit visas with high approval rates." },
  { icon: Home, title: "PR / Immigration", desc: "Permanent residency pathways for Canada, Australia, UK and more." },
  { icon: BookUser, title: "Passport Services", desc: "New passport, renewal, re-issue and document attestation." },
  { icon: Luggage, title: "Travel Assistance", desc: "Flight booking, accommodation and complete travel planning." },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/40">
      <div className="container-x" ref={ref}>
        <div className="max-w-2xl">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Our Services</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
            Complete Visa & Immigration Solutions
          </h2>
          <p className="mt-4 text-muted-foreground">
            From student admissions to permanent residency — we handle every visa category with expert care.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground group-hover:bg-gold group-hover:text-gold-foreground transition-colors shadow-md">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-display font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a
                  href="#consultation"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-gold transition-colors"
                >
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
