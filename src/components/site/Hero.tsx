import heroImg from "@/assets/hero-travel.jpg";
import { ArrowRight, ShieldCheck, Award, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Airplane wing flying above clouds at sunset"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60" />

      <div className="container-x relative z-10 pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-medium tracking-wide animate-[fade-in_0.6s_ease-out]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Trusted Immigration Experts • Since 2014
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] animate-[fade-up_0.8s_ease-out]">
            Your Trusted Partner for{" "}
            <span className="text-gradient-gold">Visa & Immigration</span> Services
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/85 max-w-2xl animate-[fade-up_0.9s_ease-out]">
            Student Visa <span className="text-gold">•</span> Work Visa{" "}
            <span className="text-gold">•</span> Tourist Visa{" "}
            <span className="text-gold">•</span> Passport Services
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-[fade-up_1s_ease-out]">
            <a
              href="#consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm md:text-base font-semibold text-gold-foreground shadow-gold hover:brightness-105 hover:-translate-y-0.5 transition"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-7 py-3.5 text-sm md:text-base font-semibold text-white hover:bg-white hover:text-primary transition"
            >
              Get Free Consultation
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl animate-[fade-up_1.1s_ease-out]">
            {[
              { icon: Award, label: "1000+ Successful Visa Cases" },
              { icon: ShieldCheck, label: "Expert Legal Guidance" },
              { icon: Zap, label: "Fast Processing" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md px-4 py-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/90 text-gold-foreground">
                  <b.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-white">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/70">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
