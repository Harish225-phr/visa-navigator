import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { useReveal } from "@/hooks/use-reveal";

const PHONE = "+919723955604";
const PHONE_DISPLAY = "+91 97239 55604";
const WHATSAPP = "https://wa.me/919723955604";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  visaType: z.string().min(1, "Please select a visa type"),
  message: z.string().trim().max(1000).optional(),
});

const visaTypes = ["Student Visa", "Work Visa", "Tourist Visa", "PR / Immigration", "Passport Services", "Other"];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      visaType: fd.get("visaType"),
      message: fd.get("message") || "",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! Our team will contact you within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container-x" ref={ref}>
        <div className="max-w-2xl">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Contact</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
            Let's Plan Your Journey Together
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach out today for a free, no-obligation visa consultation.
          </p>
        </div>

        <div id="consultation" className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            <a
              href={`tel:${PHONE}`}
              className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 hover:border-gold hover:shadow-card transition"
            >
              <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call us</div>
                <div className="mt-1 font-semibold text-primary">{PHONE_DISPLAY}</div>
                <div className="text-xs text-muted-foreground mt-0.5">Mon–Sat, 9am–7pm IST</div>
              </div>
            </a>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 hover:border-gold hover:shadow-card transition"
            >
              <div className="h-12 w-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <div className="mt-1 font-semibold text-primary">Chat with us instantly</div>
                <div className="text-xs text-muted-foreground mt-0.5">Quick replies, 7 days a week</div>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5">
              <div className="h-12 w-12 rounded-xl bg-gold text-gold-foreground flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Visit office</div>
                <div className="mt-1 font-semibold text-primary">NINE OVERSEAS DK Immigration</div>
                <div className="text-xs text-muted-foreground mt-0.5">Ahmedabad, Gujarat, India</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border h-56">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Ahmedabad,Gujarat,India&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-gradient-to-br from-primary to-primary/95 text-primary-foreground p-7 md:p-9 shadow-elegant relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gold/15 blur-2xl" />
            <div className="relative">
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                Get a <span className="text-gradient-gold">Free Consultation</span>
              </h3>
              <p className="mt-2 text-sm text-white/75">Fill the form — we'll call you back within 24 hours.</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" placeholder="John Doe" required />
                <Field label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" required />
              </div>

              <div className="mt-4">
                <label className="text-xs uppercase tracking-widest text-white/70">Visa Type</label>
                <select
                  name="visaType"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold focus:bg-white/15"
                >
                  <option value="" disabled className="text-foreground">
                    Select a service
                  </option>
                  {visaTypes.map((v) => (
                    <option key={v} value={v} className="text-foreground">
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <label className="text-xs uppercase tracking-widest text-white/70">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your goals..."
                  maxLength={1000}
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold focus:bg-white/15 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm md:text-base font-semibold text-gold-foreground shadow-gold hover:brightness-105 disabled:opacity-70 transition"
              >
                <Send className="h-4 w-4" />
                {submitting ? "Sending..." : "Get Free Consultation"}
              </button>

              <p className="mt-4 text-[11px] text-white/60 flex items-center gap-1.5">
                <Mail className="h-3 w-3" /> Your info stays private. No spam, ever.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-white/70">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={100}
        className="mt-2 w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold focus:bg-white/15"
      />
    </div>
  );
}
