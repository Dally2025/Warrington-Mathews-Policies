import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Eye, BadgeCheck, Stethoscope, Microscope, ExternalLink } from "lucide-react";

export default function Services() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-6xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Comprehensive eye care utilizing state-of-the-art diagnostic equipment. We offer tailored services to ensure your vision and eye health are fully protected.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ServiceCard
          icon={<Eye className="h-8 w-8" />}
          title="Eye Examination"
          description="A comprehensive sight test using the latest digital equipment. Our extensive examination doesn't just check your vision, but also thoroughly assesses the health of your eyes. Recommended every 2 years for most patients."
          link="https://calendly.com/denisebyrnes37/eye-test-1"
        />

        <ServiceCard
          icon={<Stethoscope className="h-8 w-8" />}
          title="NHS Eye Examination"
          description="Free NHS-funded sight tests for eligible patients. This includes children under 16, full-time students under 19, those over 60, and individuals receiving certain benefits. We provide the same high standard of care for all our patients."
          link="https://calendly.com/denisebyrnes37/eye-test"
        />

        <ServiceCard
          icon={<BadgeCheck className="h-8 w-8" />}
          title="Contact Lens Consultation"
          description="Professional fitting and aftercare for all contact lens wearers. Whether you're a first-time wearer or looking to upgrade to newer materials, we offer daily, monthly, and specialist lenses tailored to your lifestyle."
          link="https://calendly.com/denisebyrnes37/contact-lens-consultation"
        />

        <ServiceCard
          icon={<Microscope className="h-8 w-8" />}
          title="OCT Scan (Optical Coherence Tomography)"
          description="Our newest cutting-edge service. This non-invasive 3D retinal scan produces a detailed cross-section of the eye, enabling early detection of conditions like glaucoma, macular degeneration, and diabetic retinopathy before they affect your vision."
          link="https://calendly.com/denisebyrnes37/optical-coherence-tomography"
          isNew
        />
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description, link, isNew }: { icon: React.ReactNode, title: string, description: string, link: string, isNew?: boolean }) {
  return (
    <Card className="flex flex-col h-full bg-card/40 border-border/60 hover:bg-card hover:border-primary/40 transition-all duration-300">
      <CardHeader>
        <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-inner">
          {icon}
        </div>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
          {isNew && (
            <span className="bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
              New Service
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-base text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-6">
        <Button asChild size="lg" className="w-full sm:w-auto font-medium" data-testid={`book-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Book Now <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}