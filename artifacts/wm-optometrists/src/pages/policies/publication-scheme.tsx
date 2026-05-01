import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function PublicationSchemePolicy() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-4xl">
      <Link href="/policies" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
        <ChevronLeft className="h-4 w-4 mr-1" /> Back to Policies
      </Link>
      
      <div className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Publication Scheme</h1>
        
        <p className="text-muted-foreground lead">
          Welcome to the Publication Scheme for Warrington & Mathews Optometrists. This scheme is required by the Freedom of Information Act 2000 for all practices providing National Health Service (NHS) General Ophthalmic Services.
        </p>

        <h2>1. Introduction</h2>
        <p>
          This Publication Scheme is a complete guide to the information routinely published by Warrington & Mathews Optometrists. It describes the information about our practice and NHS services that we make publicly available. We aim to ensure our patients and the public understand how we operate and how NHS funds are used in our practice.
        </p>

        <h2>2. Information Available</h2>
        <p>The information we hold is categorized into the following classes:</p>

        <h3>Class 1: Who we are and what we do</h3>
        <ul>
          <li><strong>Practice Details:</strong> Warrington & Mathews Optometrists, 23 Hamilton Terrace, Milford Haven SA73 3JJ.</li>
          <li><strong>Optometrists:</strong> Details of our registered dispensing opticians and optometrists are available upon request and on display within the practice.</li>
          <li><strong>Opening Hours:</strong> Available on our website and practice door.</li>
        </ul>

        <h3>Class 2: What we spend and how we spend it</h3>
        <p>
          As an independent business, our detailed financial information is private. However, we do hold information regarding the NHS funding we receive for providing General Ophthalmic Services (e.g., sight test fees paid by the NHS). Statutory remuneration fees for NHS sight tests are set nationally and are publicly available via the Department of Health and Social Care.
        </p>

        <h3>Class 3: What our priorities are and how we are doing</h3>
        <p>
          Our priority is to provide comprehensive, high-quality eye care to the local community. We adhere to the clinical guidelines set by the College of Optometrists and the regulatory standards of the General Optical Council (GOC). We undergo periodic audits by the local Health Board to ensure compliance with NHS contracts.
        </p>

        <h3>Class 4: How we make decisions</h3>
        <p>
          Clinical decisions are made by our registered professionals based on individual patient needs, clinical evidence, and professional guidelines. Business decisions are made by the practice directors/partners.
        </p>

        <h3>Class 5: Our policies and procedures</h3>
        <p>The following policies are publicly available on this website or upon request:</p>
        <ul>
          <li><Link href="/policies/complaints">Complaints Procedure</Link></li>
          <li><Link href="/policies/privacy">Data Protection and Privacy Policy</Link></li>
          <li>Health and Safety Policy (available upon request)</li>
          <li>Infection Control Policy (available upon request)</li>
        </ul>

        <h3>Class 6: Lists and Registers</h3>
        <p>
          We do not maintain publicly available registers other than our listing on the General Optical Council (GOC) register. You can verify the registration of our optical professionals at <a href="https://www.optical.org" target="_blank" rel="noopener noreferrer">www.optical.org</a>.
        </p>

        <h3>Class 7: The services we offer</h3>
        <p>We provide a range of NHS and private services, including:</p>
        <ul>
          <li>NHS and Private Eye Examinations</li>
          <li>Contact Lens Consultations and Aftercare</li>
          <li>Dispensing of Spectacles and NHS Vouchers</li>
          <li>Optical Coherence Tomography (OCT) Scans</li>
        </ul>

        <h2>3. How to Request Information</h2>
        <p>
          Most of the information covered by this scheme is available on our website. If you require a printed copy of any document or wish to request information not explicitly listed here (but covered by the Freedom of Information Act regarding our NHS functions), please submit a written request:
        </p>
        <address className="not-italic bg-card/50 p-6 rounded-lg border border-border/60 my-6">
          <strong>Information Request</strong><br />
          Practice Manager<br />
          Warrington & Mathews Optometrists<br />
          23 Hamilton Terrace<br />
          Milford Haven, SA73 3JJ
        </address>

        <h2>4. Charges</h2>
        <p>
          Information downloaded from our website is free. For printed copies, we may charge a small fee to cover the costs of photocopying and postage. You will be informed of any charges before the information is provided.
        </p>

        <hr className="my-12 border-border/40" />
        <p className="text-sm text-muted-foreground">
          Last updated: January 2024
        </p>
      </div>
    </div>
  );
}