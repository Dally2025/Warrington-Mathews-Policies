import { Link } from "wouter";
import { ReactNode } from "react";
import logoPath from "@assets/M-W_logo_RGB_1777650696700.jpg";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90" data-testid="link-home">
            <img src={logoPath} alt="Warrington & Mathews Optometrists" className="h-12 w-auto rounded-sm object-contain" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="nav-home">Home</Link>
            <Link href="/services" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="nav-services">Services</Link>
            <Link href="/policies" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="nav-policies">Policies</Link>
            <Link href="/services" className="ml-4" data-testid="nav-book-now">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide">
                Book Now
              </Button>
            </Link>
          </nav>
          
          <div className="md:hidden flex items-center">
            {/* Mobile menu could go here, but for simplicity we'll just show the CTA */}
            <Link href="/services" data-testid="nav-book-now-mobile">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                Book
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border/40 bg-muted/30 py-12 mt-12">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logoPath} alt="Warrington & Mathews Optometrists" className="h-10 w-auto rounded-sm object-contain mb-6 grayscale opacity-80" />
            <p className="text-muted-foreground text-sm max-w-xs">
              Expert eye care in Milford Haven. A trusted independent practice keeping up with modern technology.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>23 Hamilton Terrace</p>
              <p>Milford Haven SA73 3JJ</p>
              <p className="pt-2">
                <a href="tel:01646692784" className="hover:text-primary transition-colors">01646 692784</a>
              </p>
            </address>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal & Policies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/policies/terms" className="hover:text-primary transition-colors">Terms and Conditions</Link></li>
              <li><Link href="/policies/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/policies/complaints" className="hover:text-primary transition-colors">Complaints Procedure</Link></li>
              <li><Link href="/policies/publication-scheme" className="hover:text-primary transition-colors">Publication Scheme</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Warrington & Mathews Optometrists. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}