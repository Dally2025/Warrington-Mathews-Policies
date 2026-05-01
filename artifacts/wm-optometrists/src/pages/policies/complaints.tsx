import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function ComplaintsPolicy() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-4xl">
      <Link href="/policies" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
        <ChevronLeft className="h-4 w-4 mr-1" /> Back to Policies
      </Link>
      
      <div className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Complaints Procedure</h1>
        
        <p className="text-muted-foreground lead">
          At Warrington & Mathews Optometrists, we aim to provide the highest standard of care and service to all our patients. However, we acknowledge that there may be times when you feel this standard has not been met. We take all feedback and complaints seriously as they help us improve our practice.
        </p>

        <h2>1. How to Make a Complaint</h2>
        <p>
          If you are unhappy with any aspect of your care or service, we encourage you to let us know as soon as possible. Most issues can be resolved quickly and informally at the time they occur.
        </p>
        <p>If you wish to make a formal complaint, you can do so in the following ways:</p>
        <ul>
          <li><strong>In Person:</strong> Ask to speak with the Practice Manager or the senior optometrist on duty.</li>
          <li><strong>By Telephone:</strong> Call us on <strong>01646 692784</strong> and ask to speak with the Practice Manager.</li>
          <li><strong>In Writing:</strong> Address your letter to the Practice Manager at:
            <br /><em>Warrington & Mathews Optometrists, 23 Hamilton Terrace, Milford Haven SA73 3JJ</em>
          </li>
        </ul>

        <h2>2. Information We Need</h2>
        <p>To help us investigate your complaint efficiently, please provide:</p>
        <ul>
          <li>Your full name, address, and date of birth.</li>
          <li>A clear description of what happened, including dates and times if possible.</li>
          <li>The names of any staff members involved (if known).</li>
          <li>What you would like us to do to put things right.</li>
        </ul>

        <h2>3. Our Commitment to You</h2>
        <p>When we receive a formal complaint, we promise to:</p>
        <ul>
          <li>Acknowledge receipt of your complaint within <strong>3 working days</strong>.</li>
          <li>Conduct a thorough and fair investigation into the matters raised.</li>
          <li>Provide a full, written response within <strong>28 working days</strong> of receiving your complaint. If the investigation is complex and requires more time, we will write to you to explain the delay and provide a revised timeframe.</li>
          <li>Ensure that making a complaint will not negatively affect your future care at our practice.</li>
        </ul>

        <h2>4. The Role of the Practice Manager</h2>
        <p>
          The Practice Manager is responsible for ensuring that all complaints are handled properly according to this procedure. They will review clinical records, speak to the staff members involved, and may contact you to clarify details before formulating the final response.
        </p>

        <h2>5. Escalation Routes</h2>
        <p>
          If you are not satisfied with our response to your complaint, you have the right to escalate the matter to external regulatory or ombudsman services.
        </p>
        
        <h3>For NHS Care and Services:</h3>
        <p>
          If your complaint relates to an NHS sight test or NHS-funded service, and you remain dissatisfied after our internal process, you can contact the Public Services Ombudsman for Wales:
        </p>
        <ul>
          <li><strong>Website:</strong> <a href="https://www.ombudsman.wales" target="_blank" rel="noopener noreferrer">www.ombudsman.wales</a></li>
          <li><strong>Phone:</strong> 0300 790 0203</li>
        </ul>

        <h3>For Private Care and Professional Conduct:</h3>
        <p>
          If your complaint relates to private services, spectacles, contact lenses, or if you have concerns about the professional fitness to practice of an optometrist or dispensing optician, you can contact the Optical Consumer Complaints Service (OCCS) or the General Optical Council (GOC):
        </p>
        <ul>
          <li><strong>OCCS:</strong> <a href="https://www.opticalcomplaints.co.uk" target="_blank" rel="noopener noreferrer">www.opticalcomplaints.co.uk</a> | 0344 800 5071</li>
          <li><strong>GOC:</strong> <a href="https://www.optical.org" target="_blank" rel="noopener noreferrer">www.optical.org</a> (for serious professional misconduct issues)</li>
        </ul>

        <h2>6. Patient Feedback</h2>
        <p>
          We do not just want to hear from you when things go wrong. Your general feedback, suggestions, and compliments are invaluable in helping us maintain our high standards.
        </p>

        <hr className="my-12 border-border/40" />
        <p className="text-sm text-muted-foreground">
          Last updated: January 2024
        </p>
      </div>
    </div>
  );
}