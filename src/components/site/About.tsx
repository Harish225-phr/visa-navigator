import aboutImg from "@/assets/about-consultation.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={ref}>
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-gold/30 to-primary/20 blur-2xl opacity-60" />
          <div className="relative overflow-hidden rounded-2xl shadow-elegant">
            <img
              src={aboutImg}
              alt="Immigration consultant reviewing visa documents with client"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 md:-right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-5 shadow-elegant">
            <div className="text-3xl md:text-4xl font-display font-bold text-gold">10+</div>
            <div className="text-xs uppercase tracking-widest mt-1">Years Experience</div>
          </div>
        </div>

        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">About Us</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
            Expert Guidance for Your{" "}
            <span className="text-gradient-gold">Global Journey</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            At <span className="font-semibold text-primary">NINE OVERSEAS DK Immigration</span>, we
            provide expert guidance for visa applications, immigration processes and travel
            documentation with high success rates. Our team of certified consultants and immigration
            lawyers ensures every step of your journey is handled with precision and care.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {[
              "ICCRC certified consultants",
              "End-to-end document handling",
              "Personalised case strategy",
              "Transparent pricing",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {[
              { n: "1000+", l: "Visa Cases" },
              { n: "98%", l: "Success Rate" },
              { n: "25+", l: "Countries" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-display font-bold text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
