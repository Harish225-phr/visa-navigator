import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

const faqs = [
  {
    q: "How long does the visa process take?",
    a: "Processing times vary by country and visa type. Tourist visas typically take 2–4 weeks, study visas 6–10 weeks, and PR applications 6–18 months. We provide a precise timeline during your free consultation.",
  },
  {
    q: "What documents are required?",
    a: "Common documents include passport, photographs, financial statements, educational certificates and purpose-specific documents (admission letter, job offer, invitation letter). We share a complete checklist after your initial assessment.",
  },
  {
    q: "What is your visa success rate?",
    a: "Our overall approval rate is 98% across visa categories — backed by careful eligibility profiling, expert documentation and lawyer-led case strategy.",
  },
  {
    q: "Do you charge for consultation?",
    a: "Your initial consultation is completely free. We assess your profile, recommend the best visa pathway and share a transparent fee structure with no hidden charges.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start" ref={ref}>
        <div className="lg:sticky lg:top-28">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know before starting your visa journey. Still have questions?{" "}
            <a href="#consultation" className="text-gold font-semibold underline-offset-4 hover:underline">
              Talk to us
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={cn(
                  "rounded-2xl border bg-card transition-all overflow-hidden",
                  isOpen ? "border-gold shadow-card" : "border-border",
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className="font-display font-semibold text-base md:text-lg text-primary">
                    {f.q}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
