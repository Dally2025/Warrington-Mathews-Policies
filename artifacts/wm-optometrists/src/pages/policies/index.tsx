import { Link } from "wouter";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ChevronRight, FileText, Shield, AlertCircle, FileBarChart } from "lucide-react";

export default function PoliciesIndex() {
  const policies = [
    {
      title: "Terms and Conditions",
      description: "Information regarding appointment bookings, cancellations, fees, and patient responsibilities.",
      icon: <FileText className="h-6 w-6 text-primary" />,
      href: "/policies/terms"
    },
    {
      title: "Privacy Policy",
      description: "How we collect, process, and protect your personal and clinical data in compliance with GDPR.",
      icon: <Shield className="h-6 w-6 text-primary" />,
      href: "/policies/privacy"
    },
    {
      title: "Complaints Procedure",
      description: "Our formal process for handling feedback and resolving any issues regarding our services.",
      icon: <AlertCircle className="h-6 w-6 text-primary" />,
      href: "/policies/complaints"
    },
    {
      title: "Publication Scheme",
      description: "Publicly available information required for NHS-contracted practices under the Freedom of Information Act.",
      icon: <FileBarChart className="h-6 w-6 text-primary" />,
      href: "/policies/publication-scheme"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-5xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Policies & Legal</h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          At Warrington & Mathews Optometrists, we are committed to transparency and maintaining the highest standards of professional conduct. Please review our policies below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {policies.map((policy, idx) => (
          <Link key={idx} href={policy.href} data-testid={`policy-link-${policy.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <Card className="h-full bg-card/40 border-border/60 hover:bg-card hover:border-primary/40 transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {policy.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{policy.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col h-[calc(100%-5rem)]">
                <CardDescription className="text-base text-muted-foreground mb-6 flex-1">
                  {policy.description}
                </CardDescription>
                <div className="flex items-center text-sm font-medium text-primary mt-auto">
                  Read document <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}