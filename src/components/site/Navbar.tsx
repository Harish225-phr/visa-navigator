import { useEffect, useState } from "react";
import { Menu, X, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#countries", label: "Countries" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md">
            <Plane className="h-5 w-5 -rotate-45" />
          </div>
          <div className="leading-tight">
            <div className={cn("font-display font-bold text-base md:text-lg", scrolled ? "text-primary" : "text-white")}>
              NINE OVERSEAS DK
            </div>
            <div className={cn("text-[10px] tracking-[0.2em] uppercase", scrolled ? "text-gold" : "text-gold")}>
              Immigration
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold relative",
                scrolled ? "text-foreground" : "text-white/90",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#consultation"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold hover:brightness-105 transition"
        >
          Free Consultation
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className={cn("lg:hidden p-2 rounded-md", scrolled ? "text-foreground" : "text-white")}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border shadow-lg">
          <nav className="container-x flex flex-col py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-foreground hover:bg-secondary rounded-md text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#consultation"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
            >
              Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
