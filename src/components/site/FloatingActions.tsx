import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919723955604"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
        <MessageCircle className="h-6 w-6 relative" />
      </a>
      <a
        href="tel:+919723955604"
        aria-label="Call us"
        className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
