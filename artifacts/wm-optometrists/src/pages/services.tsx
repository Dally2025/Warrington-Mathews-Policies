import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
  Eye, BadgeCheck, Stethoscope, Microscope, ExternalLink,
  GlassesIcon, ScanEye, Star, Zap, Shield, Sun, Palette, Baby, Layers, Wrench, HeartHandshake, CheckCircle2
} from "lucide-react";

const BOOKABLE_SERVICES = [
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Eye Examination",
    description:
      "A comprehensive sight test using the latest digital equipment. Our extensive examination doesn't just check your vision, but also thoroughly assesses the health of your eyes. Recommended every 2 years for most patients.",
    link: "https://calendly.com/denisebyrnes37/eye-test-1",
    isNew: false,
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "NHS Eye Examination",
    description:
      "Free NHS-funded sight tests for eligible patients. This includes children under 16, full-time students under 19, those over 60, and individuals receiving certain benefits. We provide the same high standard of care for all our patients.",
    link: "https://calendly.com/denisebyrnes37/eye-test",
    isNew: false,
  },
  {
    icon: <BadgeCheck className="h-8 w-8" />,
    title: "Contact Lens Consultation",
    description:
      "Professional fitting and aftercare for all contact lens wearers. Whether you're a first-time wearer or looking to upgrade to newer materials, we offer daily, monthly, and specialist lenses tailored to your lifestyle.",
    link: "https://calendly.com/denisebyrnes37/contact-lens-consultation",
    isNew: false,
  },
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "OCT Scan (Optical Coherence Tomography)",
    description:
      "Our newest cutting-edge service. This non-invasive 3D retinal scan produces a detailed cross-section of the eye, enabling early detection of conditions such as glaucoma, macular degeneration, and diabetic retinopathy — before symptoms begin.",
    link: "https://calendly.com/denisebyrnes37/optical-coherence-tomography",
    isNew: true,
  },
];

const ALL_SERVICES = [
  { icon: <Baby className="h-5 w-5" />, name: "Children's Eye Tests" },
  { icon: <Layers className="h-5 w-5" />, name: "Bifocal Lenses" },
  { icon: <Palette className="h-5 w-5" />, name: "Coloured Lenses" },
  { icon: <CheckCircle2 className="h-5 w-5" />, name: "Contact Lenses" },
  { icon: <Star className="h-5 w-5" />, name: "Designer Frames" },
  { icon: <HeartHandshake className="h-5 w-5" />, name: "Dispensing Opticians" },
  { icon: <Shield className="h-5 w-5" />, name: "Eye Care Vouchers" },
  { icon: <Eye className="h-5 w-5" />, name: "Eye Tests" },
  { icon: <GlassesIcon className="h-5 w-5" />, name: "Eyewear" },
  { icon: <Wrench className="h-5 w-5" />, name: "Eyewear Repairs" },
  { icon: <ScanEye className="h-5 w-5" />, name: "Glaucoma Screening" },
  { icon: <Zap className="h-5 w-5" />, name: "Photosensitive Lenses" },
  { icon: <Microscope className="h-5 w-5" />, name: "Retinal Photography" },
  { icon: <Sun className="h-5 w-5" />, name: "Sunglasses" },
  { icon: <Palette className="h-5 w-5" />, name: "Tinted Lenses" },
  { icon: <Layers className="h-5 w-5" />, name: "Varifocal Lenses" },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-6xl">

      {/* Bookable Appointments */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Book an Appointment</h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Comprehensive eye care using state-of-the-art diagnostic equipment. Select a service below to book directly through our online system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {BOOKABLE_SERVICES.map((service) => (
          <BookableCard key={service.title} {...service} />
        ))}
      </div>

      {/* Full Products & Services */}
      <div className="border-t border-border/40 pt-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">All Products &amp; Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Warrington &amp; Mathews offers a comprehensive range of optical products and clinical services to meet every patient's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ALL_SERVICES.map((service) => (
            <div
              key={service.name}
              className="flex items-center gap-4 p-5 rounded-xl bg-card/40 border border-border/50 hover:bg-card hover:border-primary/30 transition-all duration-200 group"
              data-testid={`service-item-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <span className="font-medium text-foreground text-sm leading-snug">{service.name}</span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-muted-foreground text-base">
          To enquire about any of our products or services, please call us on{" "}
          <a href="tel:01646692784" className="text-primary font-semibold hover:underline">01646 692784</a>{" "}
          or visit us at 23 Hamilton Terrace, Milford Haven SA73 3JJ.
        </p>
      </div>
    </div>
  );
}

function BookableCard({
  icon,
  title,
  description,
  link,
  isNew,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  isNew?: boolean;
}) {
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
        <Button
          asChild
          size="lg"
          className="w-full sm:w-auto font-medium"
          data-testid={`book-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Book Now <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
