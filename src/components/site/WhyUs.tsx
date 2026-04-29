import { Users, TrendingUp, Scale, Zap, Eye, Headphones } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import passportImg from "@/assets/passport-visa.jpg";

const items = [
  { icon: Users, title: "Experienced Consultants", desc: "10+ years guiding clients across 25+ countries." },
  { icon: TrendingUp, title: "High Visa Success Rate", desc: "Consistent 98% approval across visa categories." },
  { icon: Scale, title: "Legal Expertise", desc: "In-house immigration lawyers for complex cases." },
  { icon: Zap, title: "Fast Processing", desc: "Streamlined workflow that saves you weeks." },
  { icon: Eye, title: "Transparent Process", desc: "Clear pricing and real-time application tracking." },
  { icon: Headphones, title: "24/7 Support", desc: "Personal advisor available whenever you need." },
];

export function WhyUs() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-primary text-primary-foreground">
      <img
        src={passportImg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary" />

      <div className="container-x relative" ref={ref}>
        <div className="max-w-2xl">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Why Choose Us</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold leading-tight">
            Built on Trust, Delivered with{" "}
            <span className="text-gradient-gold">Excellence</span>
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-gold/40 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-white/75">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
