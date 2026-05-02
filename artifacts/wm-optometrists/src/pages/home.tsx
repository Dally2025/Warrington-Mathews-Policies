import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Eye, BadgeCheck, Stethoscope, Microscope } from "lucide-react";
import receptionImg from "@assets/467500249_122115435992418783_2053523533203437921_n_1777651245440.jpg";
import directorsImg from "@assets/671121160_122150246420418783_5445328637121532383_n_1777651245451.jpg";
import seikoImg from "@assets/467781250_122115434960418783_776563271077161462_n_1777651245443.jpg";
import stepperLogo from "@assets/Untitled_design_(9)_1777669015538.jpg";
import mintLogo from "@assets/Mint_Eyewear_(2)_1777669015539.jpg";
import pepeLogo from "@assets/Untitled_design_(8)_1777669015544.jpg";
import vogueLogo from "@assets/Untitled_design_(7)_1777669015551.jpg";
import jensenLogo from "@assets/Untitled_design_(6)_1777669015559.jpg";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 border-b border-border/40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${receptionImg})`, opacity: 0.08 }}
        />
        <div className="container px-4 md:px-8 mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center p-3 mb-8 rounded-full bg-primary/10 border border-primary/20">
            <Eye className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mb-6">
            Warrington <span className="text-primary">+</span> Mathews
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground mt-4 tracking-widest uppercase">
              Optometrists
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light">
            Expert Eye Care in Milford Haven
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link href="/services" data-testid="hero-book-btn">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                Book an Appointment
              </Button>
            </Link>
            <a href="#about" data-testid="hero-about-link">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-medium border-border/60 hover:bg-muted/50">
                Our Practice
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Clinical Excellence</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive care tailored to your vision needs, utilising the latest in diagnostic technology.
              </p>
            </div>
            <Link
              href="/services"
              className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 group transition-colors"
              data-testid="link-all-services"
            >
              View all services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Eye className="h-6 w-6" />}
              title="Eye Examination"
              description="Comprehensive sight testing using digital equipment for your complete peace of mind."
              href="/services"
            />
            <ServiceCard
              icon={<Stethoscope className="h-6 w-6" />}
              title="NHS Eye Test"
              description="Free NHS-funded sight tests for eligible patients including children and over 60s."
              href="/services"
            />
            <ServiceCard
              icon={<BadgeCheck className="h-6 w-6" />}
              title="Contact Lenses"
              description="Professional fitting and aftercare for all types of daily and specialist lenses."
              href="/services"
            />
            <ServiceCard
              icon={<Microscope className="h-6 w-6" />}
              title="OCT Scan"
              description="Cutting-edge 3D retinal scanning for early detection of eye conditions."
              href="/services"
              isNew
            />
          </div>
        </div>
      </section>

      {/* About Us & Location */}
      <section id="about" className="py-24 bg-muted/20 border-t border-border/40">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">A Trusted Independent Practice</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  For decades, Warrington &amp; Mathews has been serving the Milford Haven community with precise,
                  professional, and uncompromising eye care.
                </p>
                <p>
                  As an independent practice, we take pride in offering a clinical yet welcoming environment. We combine
                  traditional values of patient care with the very latest in optical technology.
                </p>
                <div className="pt-6 border-t border-border/40">
                  <h3 className="font-semibold text-foreground mb-4 text-xl">Visit Us</h3>
                  <address className="not-italic flex flex-col gap-2">
                    <span className="font-medium text-foreground">Warrington &amp; Mathews Optometrists</span>
                    <span>23 Hamilton Terrace</span>
                    <span>Milford Haven SA73 3JJ</span>
                    <a
                      href="tel:01646692784"
                      className="text-primary hover:underline mt-2 inline-block w-fit text-xl font-medium"
                      data-testid="link-phone"
                    >
                      01646 692784
                    </a>
                  </address>
                </div>
              </div>

              {/* Directors photo */}
              <div className="mt-10 rounded-xl overflow-hidden border border-border/40 shadow-lg">
                <img
                  src={directorsImg}
                  alt="Warrington and Mathews team at a community outreach event"
                  className="w-full h-64 object-cover object-top"
                  data-testid="img-directors"
                />
                <p className="text-sm text-muted-foreground px-4 py-3 bg-card/50 border-t border-border/30">
                  Our team at a community outreach event — bringing expert eye care to more people across Pembrokeshire.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {/* Reception photo */}
              <div className="rounded-xl overflow-hidden border border-border/40 shadow-xl">
                <img
                  src={receptionImg}
                  alt="Warrington and Mathews reception"
                  className="w-full h-64 md:h-80 object-cover"
                  data-testid="img-reception"
                />
                <p className="text-sm text-muted-foreground px-4 py-3 bg-card/50 border-t border-border/30">
                  Our welcoming reception — the first step to better vision.
                </p>
              </div>

              {/* Map */}
              <div className="h-64 w-full rounded-xl overflow-hidden border border-border/40 shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.1!2d-5.047!3d51.713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e8d189654567609!2sWarrington+%26+Mathews!5e0!3m2!1sen!2suk!4v1!5m2!1sen!2suk"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Practice Location Map"
                  data-testid="map-iframe"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-background border-t border-border/40">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our People</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet the Team</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Experienced, qualified, and committed to providing the highest standard of eye care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TeamCard
              initials="CM"
              name="Catherine Morgan-Thomas"
              title="Practice Manager & Operational Director"
              quals={[]}
            />
            <TeamCard
              initials="IS"
              name="Imran Shah"
              title="Optometrist"
              quals={["BSc(Hons)", "MCOptom"]}
            />
            <TeamCard
              initials="UR"
              name="Ubaidullah Razzaq"
              title="Optometrist"
              quals={["BSc(Hons)", "MCOptom", "ProfCert LV", "ProfCert Glauc"]}
            />
          </div>
        </div>
      </section>

      {/* Brands We Stock */}
      <section className="py-16 border-t border-border/40 bg-card/20">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Our Frame Collections</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Brands We Stock</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center max-w-4xl mx-auto">
            {[
              { src: stepperLogo, alt: "Stepper Eyewear" },
              { src: mintLogo,    alt: "Mint Eyewear Limited" },
              { src: pepeLogo,    alt: "Pepe Jeans London" },
              { src: vogueLogo,   alt: "Vogue Eyewear" },
              { src: jensenLogo,  alt: "Jensen Eyewear" },
            ].map(({ src, alt }) => (
              <div
                key={alt}
                className="rounded-xl overflow-hidden border border-border/30 shadow-md hover:border-primary/40 hover:shadow-primary/10 hover:shadow-lg transition-all"
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full aspect-square object-cover"
                  title={alt}
                />
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Visit us in store to browse our full collection of frames, sunglasses and specialist lenses.
          </p>
        </div>
      </section>

      {/* Seiko Vision Specialist Banner */}
      <section className="py-16 bg-background border-t border-border/40">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Proud Seiko Vision Specialists</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Seiko Protect — Peace of Mind with Every Pair</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As accredited Seiko Vision Specialists, we offer Seiko Protect — an exclusive 12-month accidental damage
                assistance scheme available with Seiko lenses. Superior optics, backed by real-world protection.*
              </p>
              <p className="text-sm text-muted-foreground mt-4">*Terms and conditions apply.</p>
              <Link href="/services" className="inline-block mt-6">
                <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10" data-testid="btn-seiko-services">
                  View our lens options <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl max-w-xs w-full border border-border/20">
                <img
                  src={seikoImg}
                  alt="Seiko Protect — exclusive to Seiko Vision Specialists"
                  className="w-full object-contain"
                  data-testid="img-seiko"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamCard({
  initials,
  name,
  title,
  quals,
}: {
  initials: string;
  name: string;
  title: string;
  quals: string[];
}) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-card/50 border border-border/40 hover:border-primary/40 transition-colors">
      <div className="h-20 w-20 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center mb-5">
        <span className="text-2xl font-bold text-primary">{initials}</span>
      </div>
      <h3 className="text-lg font-bold text-foreground leading-snug">{name}</h3>
      <p className="text-sm text-muted-foreground mt-1 mb-4">{title}</p>
      {quals.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2">
          {quals.map((q) => (
            <span
              key={q}
              className="text-xs font-medium bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full"
            >
              {q}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  href,
  isNew,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  isNew?: boolean;
}) {
  return (
    <Card className="relative h-full flex flex-col group hover:border-primary/50 transition-colors bg-card/50 hover:bg-card">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
          {icon}
        </div>
        <CardTitle className="text-xl flex items-center gap-2">
          {title}
          {isNew && (
            <span className="text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-sm">
              New
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="text-base mb-6 flex-1 text-muted-foreground/90 leading-relaxed">
          {description}
        </CardDescription>
        <Link
          href={href}
          className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all w-fit mt-auto"
          data-testid={`service-link-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
