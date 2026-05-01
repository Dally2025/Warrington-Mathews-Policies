import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function TermsPolicy() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-4xl">
      <Link href="/policies" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
        <ChevronLeft className="h-4 w-4 mr-1" /> Back to Policies
      </Link>
      
      <div className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Terms and Conditions</h1>
        
        <p className="text-muted-foreground lead">
          These terms and conditions govern the relationship between Warrington & Mathews Optometrists ("the Practice", "we", "us") and our patients ("you"). By booking an appointment or purchasing products from us, you agree to these terms.
        </p>

        <h2>1. Appointment Booking and Cancellation</h2>
        <p>
          We strive to see all patients on time. Please arrive 5-10 minutes prior to your scheduled appointment. If you arrive late, we may need to shorten or reschedule your appointment to avoid delaying other patients.
        </p>
        <p>
          <strong>Cancellation Policy:</strong> We require a minimum of 24 hours' notice for appointment cancellations or rescheduling. This allows us to offer the time slot to another patient. Failure to attend or providing less than 24 hours' notice may result in a missed appointment fee for private patients, or a restriction on future advance bookings for NHS patients.
        </p>

        <h2>2. Fees and Payment</h2>
        <p>
          All private eye examinations and specialist consultations must be paid for on the day of the appointment. 
        </p>
        <p>
          For spectacles and contact lenses, a minimum deposit of 50% is required at the time of ordering. The remaining balance must be paid in full upon collection. All goods remain the property of Warrington & Mathews Optometrists until paid for in full.
        </p>

        <h2>3. Prescriptions</h2>
        <p>
          Following an eye examination, you are entitled to a copy of your spectacle prescription, provided it is clinically safe to issue one. 
        </p>
        <p>
          Spectacle prescriptions are typically valid for 2 years from the date of the examination, though this may be shorter (e.g., 1 year) if the optometrist determines it is clinically necessary. We cannot dispense spectacles using an expired prescription.
        </p>

        <h2>4. Spectacle and Contact Lens Dispensing</h2>
        <p>
          If you choose to have spectacles dispensed by another provider using a prescription issued by us, we cannot accept responsibility for the dispensing accuracy, frame fit, or any difficulties adapting to the new spectacles. 
        </p>
        <p>
          Similarly, if you bring an external prescription to us for dispensing, our responsibility covers only the dispensing process (measuring, fitting, and manufacturing the spectacles to the provided specification). If the external prescription is incorrect, any remake charges will be your responsibility.
        </p>

        <h2>5. Refunds and Returns</h2>
        <p>
          Spectacles are custom-made medical devices tailored to your specific prescription and facial measurements. As such, they are exempt from standard retail return policies. If you experience difficulties with your new spectacles, please contact us within 30 days of collection. We will investigate the issue and make necessary adjustments or modifications at no extra charge if the error was ours.
        </p>

        <h2>6. Liability</h2>
        <p>
          While we take every precaution to ensure the highest standard of clinical care, we shall not be liable for any indirect or consequential loss arising from our services or products, except where such liability cannot be excluded by law.
        </p>

        <h2>7. Patient Responsibilities</h2>
        <p>
          To provide the best possible care, we rely on you to:
        </p>
        <ul>
          <li>Provide accurate and complete medical history, including current medications.</li>
          <li>Follow the advice and recommendations given by our clinicians, particularly regarding contact lens hygiene and wearing times.</li>
          <li>Treat our staff with respect. We operate a zero-tolerance policy towards abuse or aggressive behavior.</li>
        </ul>

        <h2>8. Updates to Terms</h2>
        <p>
          We reserve the right to update these terms and conditions at any time. The current version will always be available on our website and in the practice.
        </p>

        <hr className="my-12 border-border/40" />
        <p className="text-sm text-muted-foreground">
          Last updated: January 2024<br />
          Warrington & Mathews Optometrists, 23 Hamilton Terrace, Milford Haven SA73 3JJ
        </p>
      </div>
    </div>
  );
}