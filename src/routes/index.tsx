import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Countries } from "@/components/site/Countries";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NINE OVERSEAS DK Immigration — Trusted Visa & Immigration Services" },
      {
        name: "description",
        content:
          "Expert visa & immigration consultancy. Student, work, tourist visas, PR & passport services with 98% success rate. Free consultation today.",
      },
      { property: "og:title", content: "NINE OVERSEAS DK Immigration — Trusted Visa Experts" },
      {
        property: "og:description",
        content:
          "Student, work, tourist visas, PR & passport services with 1000+ successful cases. Get a free consultation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Countries />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" richColors />
    </div>
  );
}
