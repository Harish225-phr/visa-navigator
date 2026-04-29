import { MessageSquare, FileSearch, Send, BadgeCheck } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "Free initial assessment of your eligibility and goals." },
  { icon: FileSearch, title: "Document Review", desc: "Detailed verification & preparation of your documents." },
  { icon: Send, title: "Application Submission", desc: "Accurate filing with the relevant immigration authority." },
  { icon: BadgeCheck, title: "Visa Approval", desc: "Receive your visa and start your global journey." },
];

export function Process() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="process" className="py-20 md:py-28 bg-background">
      <div className="container-x" ref={ref}>
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Our Process</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
            Simple Steps to Your Visa
          </h2>
          <p className="mt-4 text-muted-foreground">
            A proven 4-step process designed to maximise approvals and minimise stress.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center">
                <div className="relative mx-auto h-24 w-24">
                  <div className="absolute inset-0 rounded-full bg-gold/15 animate-pulse-gold" />
                  <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center shadow-elegant border-4 border-background">
                    <s.icon className="h-9 w-9" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-9 w-9 rounded-full bg-gold text-gold-foreground font-display font-bold text-sm flex items-center justify-center shadow-md">
                    {i + 1}
                  </div>
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
