import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-4xl">
      <Link href="/policies" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
        <ChevronLeft className="h-4 w-4 mr-1" /> Back to Policies
      </Link>
      
      <div className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Privacy Policy</h1>
        
        <p className="text-muted-foreground lead">
          Warrington & Mathews Optometrists respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, process, and protect your information in compliance with the General Data Protection Regulation (GDPR) and the Data Protection Act 2018.
        </p>

        <h2>1. Data Controller</h2>
        <p>
          Warrington & Mathews Optometrists is the Data Controller responsible for your personal data. Our contact details are:
        </p>
        <address className="not-italic bg-card/50 p-6 rounded-lg border border-border/60 my-6">
          <strong>Warrington & Mathews Optometrists</strong><br />
          23 Hamilton Terrace<br />
          Milford Haven, Pembrokeshire<br />
          SA73 3JJ<br />
          Telephone: 01646 692784
        </address>

        <h2>2. What Data We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
        <ul>
          <li><strong>Identity Data:</strong> Name, date of birth, gender.</li>
          <li><strong>Contact Data:</strong> Address, email address, telephone numbers.</li>
          <li><strong>Health/Clinical Data:</strong> Eye health history, general medical history, current medications, family medical history, prescription details, retinal scans (OCT), visual field results, and GP details.</li>
          <li><strong>NHS Data:</strong> NHS number, National Insurance number (if applicable), and eligibility status for NHS services.</li>
        </ul>

        <h2>3. Why We Process Your Data (Legal Basis)</h2>
        <p>We only use your personal data when the law allows us to. Most commonly, we process your data under the following legal bases:</p>
        <ul>
          <li><strong>Provision of Healthcare:</strong> Processing clinical data is necessary for the purposes of preventative or occupational medicine, and the provision of health or social care.</li>
          <li><strong>Legal Obligation:</strong> We must process and share certain data to comply with our NHS General Ophthalmic Services contract.</li>
          <li><strong>Legitimate Interest:</strong> For private appointments, maintaining records of your visits and purchases to ensure continuity of care and to manage our business efficiently.</li>
        </ul>

        <h2>4. How We Share Your Data</h2>
        <p>We may have to share your personal data with third parties for the purposes outlined above. These include:</p>
        <ul>
          <li><strong>NHS Bodies:</strong> For the administration and payment of NHS sight tests and vouchers, and for clinical referrals (e.g., to the hospital eye service).</li>
          <li><strong>Medical Professionals:</strong> Your GP or ophthalmologists, when referring you for further medical investigation or treatment.</li>
          <li><strong>Suppliers:</strong> Third-party optical laboratories and frame manufacturers who create your bespoke spectacles or contact lenses (only necessary prescription and identification data is shared).</li>
        </ul>
        <p>We require all third parties to respect the security of your personal data and to treat it in accordance with the law.</p>

        <h2>5. Data Retention</h2>
        <p>
          We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including satisfying any legal, accounting, or reporting requirements.
        </p>
        <p>
          By law and professional guidelines (College of Optometrists), we must keep basic patient records for a minimum of <strong>8 years</strong> after your last visit. For children, records are kept until they reach the age of 25.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. Access to your clinical data is limited to those employees, agents, and contractors who have a strict medical or business need to know.
        </p>

        <h2>7. Your Legal Rights</h2>
        <p>Under data protection laws, you have rights including:</p>
        <ul>
          <li><strong>Request access:</strong> You can request a copy of the personal data we hold about you (a "Data Subject Access Request").</li>
          <li><strong>Request correction:</strong> You can ask us to correct any incomplete or inaccurate data we hold about you.</li>
          <li><strong>Request erasure:</strong> You can ask us to delete personal data where there is no good reason for us continuing to process it (note: clinical and legal retention periods may override this right).</li>
        </ul>
        <p>If you wish to exercise any of the rights set out above, please contact us in writing at the address provided in Section 1.</p>

        <h2>8. Complaints</h2>
        <p>
          If you have any concerns about our use of your personal information, you can make a complaint to us directly. You can also complain to the Information Commissioner's Office (ICO) if you are unhappy with how we have used your data: <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer">www.ico.org.uk</a>.
        </p>

        <hr className="my-12 border-border/40" />
        <p className="text-sm text-muted-foreground">
          Last updated: January 2024
        </p>
      </div>
    </div>
  );
}