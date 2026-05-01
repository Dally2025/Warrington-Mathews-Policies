import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Eye, BadgeCheck, Stethoscope, Microscope } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-muted/20 border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
        <div className="container px-4 md:px-8 mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center p-3 mb-8 rounded-full bg-primary/10 border border-primary/20">
            <Eye className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mb-6">
            Warrington <span className="text-primary">+</span> Mathews
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground mt-4 tracking-widest uppercase">Optometrists</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light">
            Expert Eye Care in Milford Haven
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link href="/services" data-testid="hero-book-btn">
              <Button size="xl" className="h-14 px-8 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                Book an Appointment
              </Button>
            </Link>
            <Link href="#about" data-testid="hero-about-link">
              <Button size="xl" variant="outline" className="h-14 px-8 text-lg font-medium border-border/60 hover:bg-muted/50">
                Our Practice
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Clinical Excellence</h2>
              <p className="text-lg text-muted-foreground">Comprehensive care tailored to your vision needs, utilizing the latest in diagnostic technology.</p>
            </div>
            <Link href="/services" className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 group transition-colors" data-testid="link-all-services">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">A Trusted Independent Practice</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  For decades, Warrington & Mathews has been serving the Milford Haven community with precise, professional, and uncompromising eye care.
                </p>
                <p>
                  As an independent practice, we take pride in offering a clinical yet welcoming environment. We combine traditional values of patient care with the very latest in optical technology, ensuring you receive the best possible assessment of your vision and eye health.
                </p>
                <div className="pt-6 border-t border-border/40">
                  <h3 className="font-semibold text-foreground mb-4 text-xl">Visit Us</h3>
                  <address className="not-italic flex flex-col gap-2">
                    <span className="font-medium text-foreground">Warrington & Mathews Optometrists</span>
                    <span>23 Hamilton Terrace</span>
                    <span>Milford Haven SA73 3JJ</span>
                    <a href="tel:01646692784" className="text-primary hover:underline mt-2 inline-block w-fit text-xl font-medium">01646 692784</a>
                  </address>
                </div>
              </div>
            </div>
            <div className="h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden border border-border/40 shadow-xl relative bg-card">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.1!2d-5.047!3d51.713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e8d189654567609!2sWarrington+%26+Mathews!5e0!3m2!1sen!2suk!4v1!5m2!1sen!2suk" 
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Practice Location Map"
                data-testid="map-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, href, isNew }: { icon: React.ReactNode, title: string, description: string, href: string, isNew?: boolean }) {
  return (
    <Card className="relative h-full flex flex-col group hover:border-primary/50 transition-colors bg-card/50 hover:bg-card">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
          {icon}
        </div>
        <CardTitle className="text-xl flex items-center gap-2">
          {title}
          {isNew && <span className="text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-sm">New</span>}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="text-base mb-6 flex-1 text-muted-foreground/90 leading-relaxed">
          {description}
        </CardDescription>
        <Link href={href} className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all w-fit mt-auto" data-testid={`service-link-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}