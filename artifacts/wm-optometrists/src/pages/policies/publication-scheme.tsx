export default function PublicationSchemePolicy() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-4xl">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Publication Scheme</h1>
        <p className="mt-4 text-muted-foreground">Information published by Warrington-Mathews Limited in accordance with NHS contractual obligations</p>
      </div>

      <div className="space-y-8">

        <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 text-sm text-muted-foreground leading-relaxed">
          This Publication Scheme sets out the information that Warrington &amp; Mathews makes routinely available to the public. As an NHS-contracted optometry practice, we are committed to openness and transparency about our services, how we operate, and how patients can access care.
        </div>

        <Section title="About This Scheme">
          <p>Warrington &amp; Mathews Optometrists operates under an NHS General Ophthalmic Services (GOS) contract. This publication scheme describes the classes of information we routinely make available, how you can access that information, and who to contact if you need further details.</p>
        </Section>

        <Section title="Classes of Information We Publish">
          <p><strong className="text-foreground">1. Who we are and what we do</strong></p>
          <ul>
            <li>Practice name: Warrington &amp; Mathews Optometrists (trading as Warrington-Mathews Limited)</li>
            <li>Address: 23 Hamilton Terrace, Milford Haven SA73 3JJ</li>
            <li>Telephone: 01646 692784</li>
            <li>Email: enquiries@warrington-mathews.co.uk</li>
            <li>We are an independent NHS-contracted optometry practice providing primary eye care services in Pembrokeshire, Wales</li>
          </ul>

          <p><strong className="text-foreground">2. Our services</strong></p>
          <ul>
            <li>NHS General Ophthalmic Services (GOS) — sight tests for eligible patients</li>
            <li>Private eye examinations</li>
            <li>Contact lens consultations and fitting</li>
            <li>OCT (Optical Coherence Tomography) retinal scanning</li>
            <li>Dispensing of spectacles and contact lenses</li>
            <li>Glaucoma screening and retinal photography</li>
            <li>Eyewear repairs and adjustments</li>
            <li>A full range of frames, lenses, and sunglasses</li>
          </ul>

          <p><strong className="text-foreground">3. How to access our services</strong></p>
          <ul>
            <li>Appointments can be booked online via the Services page on this website</li>
            <li>Appointments can also be made by telephone: 01646 692784</li>
            <li>Walk-in enquiries are welcome during practice hours</li>
            <li>NHS eligibility criteria apply to NHS-funded sight tests — please ask at reception</li>
          </ul>

          <p><strong className="text-foreground">4. NHS contract information</strong></p>
          <ul>
            <li>We hold a General Ophthalmic Services contract with NHS Wales</li>
            <li>NHS sight tests are provided free of charge to eligible patients, including children under 16, students under 19 in full-time education, those aged 60 and over, and individuals receiving certain benefits</li>
            <li>NHS optical vouchers are available to eligible patients towards the cost of spectacles or contact lenses</li>
          </ul>

          <p><strong className="text-foreground">5. Patient rights and how to raise concerns</strong></p>
          <ul>
            <li>You have the right to choose your optometrist and to change practice</li>
            <li>You have the right to request a copy of your records</li>
            <li>Our complaints procedure is published on this website</li>
            <li>If you are not satisfied with our response to a complaint, you may contact the Optical Consumer Complaints Service on 0344 800 5071</li>
          </ul>

          <p><strong className="text-foreground">6. Our policies</strong></p>
          <ul>
            <li>Privacy Policy — published on this website</li>
            <li>Terms and Conditions — published on this website</li>
            <li>Complaints Procedure — published on this website</li>
          </ul>
        </Section>

        <Section title="How to Request Information">
          <p>If you require information that is not listed in this scheme, or if you would like to request information in a different format, please contact us:</p>
          <div className="p-4 rounded-lg bg-card border border-border/50 space-y-1">
            <p className="font-semibold text-foreground">Warrington &amp; Mathews Limited</p>
            <p>23 Hamilton Terrace, Milford Haven SA73 3JJ</p>
            <p>Phone: <a href="tel:01646692784" className="text-primary hover:underline">01646 692784</a></p>
            <p>Email: <a href="mailto:enquiries@warrington-mathews.co.uk" className="text-primary hover:underline">enquiries@warrington-mathews.co.uk</a></p>
          </div>
          <p>We will respond to requests for information within 20 working days wherever possible.</p>
        </Section>

        <Section title="Information Not Available Under This Scheme">
          <p>Some information is exempt from publication, including information that is commercially confidential, that relates to identifiable individuals, or that is subject to other legal restrictions. We will inform you if we are unable to provide information that you have requested and explain the reason where possible.</p>
        </Section>

        <Section title="Review of This Scheme">
          <p>This publication scheme is reviewed annually. The current version was last reviewed in 2025. If you have suggestions for information that should be included in this scheme, please contact us using the details above.</p>
        </Section>

      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border/40 pt-6">
      <h2 className="text-xl font-semibold text-foreground mb-3">{title}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">{children}</div>
    </div>
  );
}
