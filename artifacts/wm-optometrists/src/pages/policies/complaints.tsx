export default function ComplaintsPolicy() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-4xl">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Complaints Procedure</h1>
        <p className="mt-4 text-muted-foreground">Warrington-Mathews Limited — how to raise a concern or make a complaint</p>
      </div>

      <div className="space-y-8">

        <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 text-sm text-muted-foreground leading-relaxed">
          We take all complaints seriously and aim to resolve concerns quickly and fairly. This procedure explains how to raise a concern, what you can expect from us, and how to escalate a complaint if you remain dissatisfied.
        </div>

        <Section title="How to Raise a Concern or Make a Complaint">
          <p>A concern or complaint may be made in person, in writing or by telephone. Complaints may also be made by a third party acting on behalf of the complainant, as long as they have the appropriate consent to do so.</p>
          <p>Concerns should be raised with the branch manager. If the issue remains unresolved, the next step is to make a formal complaint. For ease of use, a template complaint form is included at the end of this procedure. You can also ask third party organisations like Citizens Advice to help you.</p>
        </Section>

        <Section title="Time Scales">
          <p>You must raise the complaint within three months of the incident or, where a series of incidents have occurred, within three months of the last incident. We will consider complaints made outside of this time frame if exceptional circumstances apply.</p>
        </Section>

        <Section title="Resolving Complaints">
          <p>At each stage in the procedure, Warrington-Mathews Limited wants to resolve the complaint. If appropriate, we will acknowledge that the complaint is upheld in whole or in part. In addition, we may offer one or more of the following:</p>
          <ul>
            <li>An explanation</li>
            <li>An admission that the situation could have been handled differently or better</li>
            <li>An assurance that we will try to ensure the event complained of will not recur</li>
            <li>An explanation of the steps that have been or will be taken to help ensure it will not happen again, and an indication of the timescales within which any changes are made</li>
            <li>An apology</li>
          </ul>
        </Section>

        <Section title="Withdrawal of Complaint">
          <p>If a complainant wants to withdraw their complaint, we will ask them to confirm this in writing.</p>
        </Section>

        <Section title="Stage 1 — Formal Complaint">
          <p>Formal complaints must be made to the manager (unless they are about the manager), via the Company Director. This may be done in person, in writing (preferably on the Complaint Form), or by telephone.</p>
          <p>The manager will record the date the complaint is received and will acknowledge receipt of the complaint in writing (either by letter or email) within 30 days.</p>
          <p>Within the response, the manager will seek to clarify the nature of the complaint, ask what remains unresolved and what outcome the complainant would like to see. The manager can consider whether a face-to-face meeting is the most appropriate way of doing this.</p>
          <p>During the investigation, the Manager (or investigator) will:</p>
          <ul>
            <li>If necessary, interview those involved in the matter and/or those complained of, allowing them to be accompanied if they wish</li>
            <li>Keep a written record of any meetings/interviews in relation to the investigation</li>
          </ul>
          <p>At the conclusion of the investigation, the manager will provide a formal written response within 90 days of the date of receipt of the complaint. If the manager is unable to meet this deadline, they will provide the complainant with an updated and revised response date.</p>
          <p>The response will detail any actions taken to investigate the complaint and provide a full explanation of the decision made and the reason(s) for it. Where appropriate, it will include details of actions Warrington-Mathews Limited will take to resolve the complaint.</p>
        </Section>

        <Section title="Stage 2 — Escalation">
          <p>If the complainant is dissatisfied with the outcome of Stage 1 and wishes to take the matter further, they can escalate the complaint to:</p>
          <div className="p-4 rounded-lg bg-card border border-border/50 space-y-1">
            <p className="font-semibold text-foreground">Optical Consumer Complaints Service</p>
            <p>Phone: <a href="tel:03448005071" className="text-primary hover:underline">0344 800 5071</a></p>
          </div>
        </Section>

        <Section title="Complaint Form">
          <p>To make a formal complaint, please complete the details below and submit in writing to:</p>
          <div className="p-4 rounded-lg bg-card border border-border/50 space-y-1">
            <p className="font-semibold text-foreground">Warrington-Mathews Limited</p>
            <p>23 Hamilton Terrace, Milford Haven SA73 3JJ</p>
            <p>Email: <a href="mailto:enquiries@warrington-mathews.co.uk" className="text-primary hover:underline">enquiries@warrington-mathews.co.uk</a></p>
          </div>
          <p className="text-sm mt-2">Your complaint form should include: your full name, address, contact phone number, email address; whether you are making the complaint on behalf of another person (if so, their name and your authority to act); date(s) of incident(s); a description of the complaint including dates, times, and names of any staff involved if known; what aspects of your concern remain unresolved; and what outcome you would like to see. Please attach any supporting evidence. Formal complaints must be made within three months of the incident or the last in a series of incidents.</p>
        </Section>

        <Section title="Contact">
          <p>Warrington &amp; Mathews Limited, 23 Hamilton Terrace, Milford Haven SA73 3JJ</p>
          <p>Phone: <a href="tel:01646692784" className="text-primary hover:underline">01646 692784</a></p>
          <p>Email: <a href="mailto:enquiries@warrington-mathews.co.uk" className="text-primary hover:underline">enquiries@warrington-mathews.co.uk</a></p>
        </Section>

      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border/40 pt-6">
      <h2 className="text-xl font-semibold text-foreground mb-3">{title}</h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed text-[15px] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">{children}</div>
    </div>
  );
}
