export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 max-w-4xl">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">How Warrington-Mathews Limited uses and protects your personal information</p>
      </div>

      <div className="space-y-8">

        <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 text-sm text-muted-foreground leading-relaxed">
          Warrington-Mathews Limited ("Warrington-Mathews" or "we") respect your rights regarding use of your personal information ("data"). We will inform you here how we use your data and what to do if you have concerns. Your privacy is protected by law and under current legislation in the UK we are designated as the data controller in respect of the data that you provide to us.
        </div>

        <Section title="How to Contact Us">
          <p>You can contact us at <a href="mailto:enquiries@warrington-mathews.co.uk" className="text-primary hover:underline">enquiries@warrington-mathews.co.uk</a> for any requests or queries in relation to your data.</p>
        </Section>

        <Section title="Our Reasons to Collect and Use Your Data">
          <p>The law allows us to use your data because it is in our legitimate interests to do so. Our interests are not overridden by your interests due to the limited data that we collect and the limited use that we make of that data.</p>
          <p>We will use your data in some of the following ways:</p>
          <ul>
            <li>To contact you about our products</li>
            <li>To manage our business relationship</li>
            <li>For marketing activity</li>
          </ul>
          <p>The reason we use your data:</p>
          <ul>
            <li>To keep in touch</li>
            <li>To understand which of our products might best suit you</li>
            <li>We deliver products both digitally and physically</li>
            <li>Our legal requirements require us to hold some data of our customers</li>
            <li>We need to use your details with which to send you invoices and reminders</li>
          </ul>
        </Section>

        <Section title="What Data We Hold">
          <p>We hold data that you have provided to us through our website, over the telephone or that we have collected through reasonable means including social media. The data is limited to your name, email address, phone number, address and other contact information to enable us to fulfil our legitimate interests.</p>
          <p>When you use our website we will also collect data about your usage via cookies (more detail below). Where necessary we hold access details for online accounts that enable us to carry out works on your behalf, all of which are stored in an encrypted format.</p>
        </Section>

        <Section title="Keeping Your Data">
          <p>We keep your data for as long as is required by our work with you. If you would like us to delete such data, please let us know. Please be aware that if you do this it may hamper our capability to transact with you in the future.</p>
        </Section>

        <Section title="Your Rights">
          <p>You have the following rights with regard to our use and storage of your data:</p>
          <ul>
            <li>You can request a copy of what data we hold and for us to delete that data</li>
            <li>You can request that we update or modify data which we hold if it is incorrect</li>
            <li>You can withdraw previously given consent to hold your data</li>
          </ul>
          <p>You may contact us using our contact details above to exercise any of these rights.</p>
        </Section>

        <Section title="If You Choose Not to Give Personal Information">
          <p>We may need to collect personal information by law, or to enable us to transact with you. If you choose to withhold or ask us to remove personal information we have about you, it may prevent us from completing our business with you. Some data from email forms is optional and is designated as such.</p>
        </Section>

        <Section title="Marketing">
          <p>We may use the information that we collect about you for marketing purposes, to attempt to market new or existing services. If you do not wish to receive such contact please let us know and we will remove you from these lists by emailing <a href="mailto:enquiries@warrington-mathews.co.uk" className="text-primary hover:underline">enquiries@warrington-mathews.co.uk</a>.</p>
        </Section>

        <Section title="Cookies">
          <p>A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>
          <p>We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.</p>
          <p>Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.</p>
        </Section>

        <Section title="Security">
          <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
        </Section>

        <Section title="Contact">
          <p>Warrington &amp; Mathews Limited, 23 Hamilton Terrace, Milford Haven SA73 3JJ</p>
          <p>Email: <a href="mailto:enquiries@warrington-mathews.co.uk" className="text-primary hover:underline">enquiries@warrington-mathews.co.uk</a></p>
          <p>Phone: <a href="tel:01646692784" className="text-primary hover:underline">01646 692784</a></p>
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
