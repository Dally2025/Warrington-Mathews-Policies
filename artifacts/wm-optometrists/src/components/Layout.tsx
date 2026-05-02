import { Link, useLocation } from "wouter";
import { ReactNode, useState } from "react";
import logoPath from "../assets/M-W_logo_RGB_1777650696700-C_2fNodA.jpg";
import browserLogo from "../assets/browserlogo2.png";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X, Clock } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/policies", label: "Policies" },
];

const openingHours = [
  { day: "Mon – Fri", hours: "9:00am – 5:30pm" },
  { day: "Saturday",  hours: "Closed" },
  { day: "Sunday",    hours: "Closed" },
];

export function Layout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">

      {/* Top contact bar */}
      <div className="w-full bg-card/80 border-b border-border/30 py-2 hidden md:block">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-6">
            <a href="tel:01646692784" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="h-3 w-3" /> 01646 692784
            </a>
            <a href="mailto:enquiries@warrington-mathews.co.uk" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="h-3 w-3" /> enquiries@warrington-mathews.co.uk
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            <span>Mon–Fri: 9:00am–5:30pm &nbsp;|&nbsp; Sat–Sun: Closed</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90" data-testid="link-home">
            <img src={logoPath} alt="Warrington & Mathews Optometrists" className="h-12 w-auto rounded-sm object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  location === href
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
                data-testid={`nav-${label.toLowerCase()}`}
              >
                {label}
              </Link>
            ))}
            <Link href="/services" className="ml-2" data-testid="nav-book-now">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide">
                Book Now
              </Button>
            </Link>
          </nav>

          {/* Mobile: hamburger + book */}
          <div className="md:hidden flex items-center gap-3">
            <Link href="/services" data-testid="nav-book-now-mobile">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                Book
              </Button>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-muted/40 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/98 backdrop-blur px-4 py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location === href
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="border-t border-border/30 mt-3 pt-3 flex flex-col gap-2 text-xs text-muted-foreground">
              <a href="tel:01646692784" className="flex items-center gap-2 px-3 py-1 hover:text-primary transition-colors">
                <Phone className="h-3 w-3" /> 01646 692784
              </a>
              <a href="mailto:enquiries@warrington-mathews.co.uk" className="flex items-center gap-2 px-3 py-1 hover:text-primary transition-colors">
                <Mail className="h-3 w-3" /> enquiries@warrington-mathews.co.uk
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/60 pt-14 pb-8 mt-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="lg:col-span-1">
              <img
                src={logoPath}
                alt="Warrington & Mathews Optometrists"
                className="h-10 w-auto rounded-sm object-contain mb-5 opacity-90"
              />
              <p className="text-muted-foreground text-sm leading-relaxed">
                An independent NHS-contracted optometry practice serving Milford Haven and Pembrokeshire since decades.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Contact</h3>
              <address className="not-italic text-sm text-muted-foreground space-y-2 leading-relaxed">
                <p>23 Hamilton Terrace</p>
                <p>Milford Haven</p>
                <p>SA73 3JJ</p>
                <p className="pt-2">
                  <a href="tel:01646692784" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                    <Phone className="h-3.5 w-3.5 shrink-0" /> 01646 692784
                  </a>
                </p>
                <p>
                  <a href="mailto:enquiries@warrington-mathews.co.uk" className="flex items-center gap-1.5 hover:text-primary transition-colors break-all">
                    <Mail className="h-3.5 w-3.5 shrink-0" /> enquiries@warrington-mathews.co.uk
                  </a>
                </p>
              </address>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Opening Hours</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                {openingHours.map(({ day, hours }) => (
                  <li key={day} className="flex justify-between gap-4">
                    <span>{day}</span>
                    <span className={hours === "Closed" ? "text-foreground/40" : "text-foreground/70"}>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Services &amp; Book</Link></li>
                <li><Link href="/policies/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link></li>
                <li><Link href="/policies/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/policies/complaints" className="hover:text-primary transition-colors">Complaints Procedure</Link></li>
                <li><Link href="/policies/publication-scheme" className="hover:text-primary transition-colors">Publication Scheme</Link></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-border/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Warrington &amp; Mathews Limited. All rights reserved.</p>
            <p>Registered in England &amp; Wales &nbsp;·&nbsp; 23 Hamilton Terrace, Milford Haven SA73 3JJ</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
