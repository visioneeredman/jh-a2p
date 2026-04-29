import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Holland Solutions LLC",
  description: "Terms of service for Holland Solutions LLC, including SMS messaging program terms.",
};

const lastUpdated = "April 29, 2026";

export default function Terms() {
  return (
    <>
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "7rem 0 4rem" }}>
        <div className="max-w-3xl mx-auto px-6">
          <span style={{ display: "block", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4813A", marginBottom: "1.5rem" }}>Legal</span>
          <h1 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15, fontWeight: 400, marginBottom: "1rem" }}>Terms of Service</h1>
          <p style={{ color: "#9a9080", fontSize: "0.9375rem" }}>Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section style={{ backgroundColor: "#F5F0E8", padding: "5rem 0 7rem" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ fontSize: "1rem", lineHeight: 1.75, color: "#2a2018" }}>
            <p style={{ marginBottom: "2rem" }}>
              By using justin.hollandsolutionsllc.com or providing your contact information
              through any form on this site, you agree to these Terms of Service.
            </p>

            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, marginBottom: "0.75rem", marginTop: "2.5rem", color: "#1A1A1A" }}>1. Use of This Site</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              This website is operated by Holland Solutions LLC, a North Carolina limited
              liability company offering professional coaching and speaking services. You agree
              to use this site only for lawful purposes.
            </p>

            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, marginBottom: "0.75rem", marginTop: "2.5rem", color: "#1A1A1A" }}>2. SMS Messaging Program</h2>
            <p style={{ marginBottom: "1rem" }}><strong>Program Name:</strong> Holland Solutions LLC SMS</p>
            <p style={{ marginBottom: "1rem" }}><strong>Program Description:</strong> This program sends two types of messages to contacts who have opted in:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}><strong>Marketing messages</strong> &mdash; updates about coaching programs, speaking events, workshops, and announcements from Holland Solutions LLC.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Transactional messages</strong> &mdash; appointment reminders, booking confirmations, and session notifications.</li>
            </ul>
            <p style={{ marginBottom: "1rem" }}><strong>Opt-Out:</strong> Text &quot;STOP&quot; at any time to unsubscribe. You will receive a confirmation, then no further messages. To rejoin, sign up again at justin.hollandsolutionsllc.com/contact.</p>
            <p style={{ marginBottom: "1rem" }}><strong>Help:</strong> Reply HELP or contact <a href="mailto:justin@iamjustinholland.com" style={{ color: "#C4813A", textDecoration: "none" }}>justin@iamjustinholland.com</a>.</p>
            <p style={{ marginBottom: "1rem" }}><strong>Carriers:</strong> Carriers are not liable for delayed or undelivered messages.</p>
            <p style={{ marginBottom: "1rem" }}><strong>Rates:</strong> Message and data rates may apply. Message frequency varies.</p>
            <p style={{ marginBottom: "1.5rem" }}><strong>Privacy:</strong> See our <Link href="/privacy-policy" style={{ color: "#C4813A", textDecoration: "none" }}>Privacy Policy</Link>.</p>

            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, marginBottom: "0.75rem", marginTop: "2.5rem", color: "#1A1A1A" }}>3. Intellectual Property</h2>
            <p style={{ marginBottom: "1.5rem" }}>All content on this site is the property of Holland Solutions LLC. You may not reproduce or distribute it without written permission.</p>

            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, marginBottom: "0.75rem", marginTop: "2.5rem", color: "#1A1A1A" }}>4. Disclaimer</h2>
            <p style={{ marginBottom: "1.5rem" }}>Content on this site is for informational purposes. It does not constitute professional psychological, medical, legal, or financial advice. Coaching and speaking results vary and are not guaranteed.</p>

            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, marginBottom: "0.75rem", marginTop: "2.5rem", color: "#1A1A1A" }}>5. Compliance</h2>
            <p style={{ marginBottom: "1.5rem" }}>This SMS program complies with CTIA Messaging Principles and Best Practices and applicable federal and state laws governing text message communications.</p>

            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, marginBottom: "0.75rem", marginTop: "2.5rem", color: "#1A1A1A" }}>6. Contact</h2>
            <p style={{ marginBottom: "0.5rem" }}><strong>Holland Solutions LLC</strong></p>
            <p style={{ marginBottom: "0.5rem" }}>Email: <a href="mailto:justin@iamjustinholland.com" style={{ color: "#C4813A", textDecoration: "none" }}>justin@iamjustinholland.com</a></p>
            <p style={{ marginBottom: "2.5rem" }}>Website: justin.hollandsolutionsllc.com</p>

            <div style={{ borderTop: "1px solid #d4ccc0", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", fontSize: "0.875rem" }}>
              <Link href="/privacy-policy" style={{ color: "#C4813A", textDecoration: "none" }}>Privacy Policy</Link>
              <Link href="/contact" style={{ color: "#C4813A", textDecoration: "none" }}>Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
