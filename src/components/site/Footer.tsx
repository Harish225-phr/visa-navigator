import { Plane, Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-6">
      <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-gold-foreground">
              <Plane className="h-5 w-5 -rotate-45" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold">NINE OVERSEAS DK</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-gold">Immigration</div>
            </div>
          </a>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Trusted immigration & visa consultancy helping clients achieve their global dreams since 2014.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full border border-white/15 hover:bg-gold hover:border-gold hover:text-gold-foreground flex items-center justify-center transition"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-gold uppercase text-xs tracking-widest">Quick Links</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Process", "#process"],
              ["Countries", "#countries"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="text-white/75 hover:text-gold transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-gold uppercase text-xs tracking-widest">Services</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {["Student Visa", "Work Visa", "Tourist Visa", "PR / Immigration", "Passport Services", "Travel Assistance"].map((s) => (
              <li key={s}>
                <a href="#services" className="text-white/75 hover:text-gold transition">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-gold uppercase text-xs tracking-widest">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-2.5 text-white/75">
              <Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              <a href="tel:+919723955604" className="hover:text-gold">+91 97239 55604</a>
            </li>
            <li className="flex items-start gap-2.5 text-white/75">
              <Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              info@nineoverseasdk.com
            </li>
            <li className="flex items-start gap-2.5 text-white/75">
              <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              Ahmedabad, Gujarat, India
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
        <div>© {new Date().getFullYear()} NINE OVERSEAS DK Immigration. All rights reserved.</div>
        <div>
          Powered by <span className="text-gold font-semibold">TechHim Solutions</span>
        </div>
      </div>
    </footer>
  );
}
