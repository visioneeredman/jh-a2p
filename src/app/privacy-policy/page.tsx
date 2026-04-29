import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Holland Solutions LLC",
  description: "Privacy policy for Holland Solutions LLC and justin.hollandsolutionsllc.com.",
};

const lastUpdated = "April 29, 2026";

export default function PrivacyPolicy() {
  return (
    <>
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "7rem 0 4rem" }}>
        <div className="max-w-3xl mx-auto px-6">
          <span style={{ display: "block", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4813A", marginBottom: "1.5rem" }}>Legal</span>
          <h1 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15, fontWeight: 400, marginBottom: "1rem" }}>Privacy Policy</h1>
          <p style={{ color: "#9a9080", fontSize: "0.9375rem" }}>Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section style={{ backgroundColor: "#F5F0E8", padding: "5rem 0 7rem" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ fontSize: "1rem", lineHeight: 1.75, color: "#2a2018" }}>
            <p style={{ marginBottom: "2rem" }}>
              Holland Solutions LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
              justin.hollandsolutionsllc.com. This Privacy Policy describes how we collect, use,
              and protect information you provide when visiting our site or contacting us through
              any form on it.
            </p>

            {[
              { title: "1. Information We Collect", content: null },
            ].map(() => null)}

            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, marginBottom: "0.75rem", marginTop: "2.5rem", color: "#1A1A1A" }}>1. Information We Collect</h2>
            <p style={{ marginBottom: "1rem" }}>When you fill out a contact or inquiry form, we may collect:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>First and last name</li>
              <li style={{ marginBottom: "0.5rem" }}>Email address</li>
              <li style={{ marginBottom: "0.5rem" }}>Phone number (if provided)</li>
              <li style={{ marginBottom: "0.5rem" }}>Your message or inquiry content</li>
              <li style={{ marginBottom: "0.5rem" }}>SMS consent preferences (if selected)</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, marginBottom: "0.75rem", marginTop: "2.5rem", color: "#1A1A1A" }}>2. How We Use Your Information</h2>
            <p style={{ marginBottom: "1rem" }}>We use the information you provide to:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Respond to your inquiries</li>
              <li style={{ marginBottom: "0.5rem" }}>Send email or SMS communications you have consented to receive</li>
              <li style={{ marginBottom: "0.5rem" }}>Schedule and confirm coaching, speaking, or workshop engagements</li>
              <li style={{ marginBottom: "0.5rem" }}>Improve the content and functionality of our website</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, marginBottom: "0.75rem", marginTop: "2.5rem", color: "#1A1A1A" }}>3. SMS and Text Messaging</h2>
            <p style={{ marginBottom: "1rem" }}>If you provide your phone number and opt in to receive SMS messages, the following applies:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>No mobile information will be shared with third parties or affiliates for
                marketing or promotional purposes.</strong> Information sharing to subcontractors
                in support services, such as customer service, is permitted. All other use case
                categories exclude text messaging originator opt-in data and consent; this
                information will not be shared with any third parties.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Text messaging originator opt-in data and consent will not be shared with any
                third parties, except for aggregators and providers of the text message services
                used to deliver messages.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>You may opt out at any time by replying STOP. Reply HELP for assistance.</li>
              <li style={{ marginBottom: "0.75rem" }}>Message and data rates may apply.</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, marginBottom: "0.75rem", marginTop: "2.5rem", color: "#1A1A1A" }}>4. How We Share Your Information</h2>
            <p style={{ marginBottom: "1rem" }}>Holland Solutions LLC does not sell, rent, or trade your personal information. We may share information only with service providers who help us operate this website and deliver communications, and when required by law.</p>
            <p style={{ marginBottom: "1.5rem", padding: "1rem 1.25rem", borderLeft: "3px solid #C4813A", background: "#fff", fontSize: "0.9375rem" }}>
              All of the above categories exclude text messaging originator opt-in data and
              consent; this information will not be shared with any third parties, excluding
              aggregators and providers of the text message services.
            </p>

            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, marginBottom: "0.75rem", marginTop: "2.5rem", color: "#1A1A1A" }}>5. Data Security</h2>
            <p style={{ marginBottom: "1.5rem" }}>We use reasonable technical and organizational measures to protect your information. No method of transmission over the internet is 100% secure.</p>

            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, marginBottom: "0.75rem", marginTop: "2.5rem", color: "#1A1A1A" }}>6. Your Rights</h2>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Request access to or deletion of your personal information</li>
              <li style={{ marginBottom: "0.5rem" }}>Withdraw SMS consent at any time by replying STOP</li>
              <li style={{ marginBottom: "0.5rem" }}>Opt out of email communications by replying &quot;unsubscribe&quot;</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, marginBottom: "0.75rem", marginTop: "2.5rem", color: "#1A1A1A" }}>7. Contact</h2>
            <p style={{ marginBottom: "0.5rem" }}><strong>Holland Solutions LLC</strong></p>
            <p style={{ marginBottom: "0.5rem" }}>Email: <a href="mailto:justin@iamjustinholland.com" style={{ color: "#C4813A", textDecoration: "none" }}>justin@iamjustinholland.com</a></p>
            <p style={{ marginBottom: "2.5rem" }}>Website: justin.hollandsolutionsllc.com</p>

            <div style={{ borderTop: "1px solid #d4ccc0", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", fontSize: "0.875rem" }}>
              <Link href="/terms" style={{ color: "#C4813A", textDecoration: "none" }}>Terms of Service</Link>
              <Link href="/contact" style={{ color: "#C4813A", textDecoration: "none" }}>Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
