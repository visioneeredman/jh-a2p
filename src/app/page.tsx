import Link from "next/link";

export const metadata = {
  title: "Holland Solutions LLC | Coaching & Speaking Services",
  description:
    "Holland Solutions LLC provides professional coaching and speaking services. We help individuals and organizations identify and overcome the blind spots driving unwanted patterns.",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          backgroundColor: "#0E0E0E",
          color: "#F5F0E8",
          padding: "8rem 0 6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #C4813A 30%, #C4813A 70%, transparent)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6">
          <span
            style={{
              display: "block",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C4813A",
              marginBottom: "1.5rem",
            }}
          >
            Holland Solutions LLC
          </span>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              marginBottom: "1.75rem",
            }}
          >
            Professional Coaching
            <br />
            &amp; Speaking Services
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
              lineHeight: 1.75,
              color: "#c8bfb0",
              maxWidth: "36rem",
              marginBottom: "2.5rem",
            }}
          >
            Holland Solutions LLC works with individuals and organizations to identify the blind
            spots driving unwanted patterns &mdash; in performance, leadership, and life. When
            the pattern is seen, it can finally change.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Request a Consultation</Link>
            <Link href="/services" className="btn-secondary">Our Services</Link>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="two-col">
            <div>
              <span className="line-accent" />
              <h2
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  lineHeight: 1.2,
                  fontWeight: 400,
                  marginBottom: "1.25rem",
                }}
              >
                The pattern keeps running until you can see it.
              </h2>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "1rem" }}>
                Most people have done the work. The coaching, the courses, the therapy, the
                self-development. And the same pattern still shows up &mdash; in relationships,
                in business, in leadership, in results.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "1rem" }}>
                That is not a failure of effort. Every approach that has not held was working
                above the blind spot. The subconscious programming underneath kept running.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#4a4035" }}>
                Holland Solutions LLC specializes in the conversation that reveals what you
                cannot currently see &mdash; so the pattern finally has somewhere to change.
              </p>
            </div>
            <div style={{ background: "#0E0E0E", padding: "3rem 2.5rem", position: "relative" }}>
              <div
                aria-hidden="true"
                style={{ position: "absolute", top: "2rem", left: 0, bottom: "2rem", width: "3px", background: "#C4813A" }}
              />
              <blockquote
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  lineHeight: 1.45,
                  fontStyle: "italic",
                  color: "#F5F0E8",
                  margin: 0,
                }}
              >
                &ldquo;Once you see it, you cannot unsee it. That is not a metaphor. That is
                how awareness actually works.&rdquo;
              </blockquote>
              <cite
                style={{
                  display: "block",
                  marginTop: "1.5rem",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#C4813A",
                  fontStyle: "normal",
                }}
              >
                Holland Solutions LLC
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ display: "block", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4813A", marginBottom: "1rem" }}>
              What We Offer
            </span>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Our Services
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px", background: "#1e1e1e" }} className="three-col">
            <div style={{ background: "#0E0E0E", padding: "2.5rem" }}>
              <div style={{ width: "2.5rem", height: "2.5rem", border: "1px solid #C4813A", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4813A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, color: "#F5F0E8", marginBottom: "0.875rem" }}>
                One-on-One Coaching
              </h3>
              <p style={{ color: "#9a9080", lineHeight: 1.7, fontSize: "0.9375rem", marginBottom: "1.5rem" }}>
                Private coaching sessions for individuals ready to identify the blind spots
                driving unwanted patterns in their personal and professional lives.
              </p>
              <Link href="/services#coaching" style={{ color: "#C4813A", textDecoration: "none", fontSize: "0.8125rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Learn More &rarr;
              </Link>
            </div>

            <div style={{ background: "#0E0E0E", padding: "2.5rem" }}>
              <div style={{ width: "2.5rem", height: "2.5rem", border: "1px solid #C4813A", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4813A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, color: "#F5F0E8", marginBottom: "0.875rem" }}>
                Keynote Speaking
              </h3>
              <p style={{ color: "#9a9080", lineHeight: 1.7, fontSize: "0.9375rem", marginBottom: "1.5rem" }}>
                Keynote presentations for conferences, corporate events, and leadership
                gatherings. Audiences leave with a shift in awareness they cannot undo.
              </p>
              <Link href="/services#speaking" style={{ color: "#C4813A", textDecoration: "none", fontSize: "0.8125rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Learn More &rarr;
              </Link>
            </div>

            <div style={{ background: "#0E0E0E", padding: "2.5rem" }}>
              <div style={{ width: "2.5rem", height: "2.5rem", border: "1px solid #C4813A", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4813A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="9" />
                  <line x1="9" y1="12" x2="15" y2="12" />
                  <line x1="9" y1="15" x2="12" y2="15" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.375rem", fontWeight: 400, color: "#F5F0E8", marginBottom: "0.875rem" }}>
                Workshops
              </h3>
              <p style={{ color: "#9a9080", lineHeight: 1.7, fontSize: "0.9375rem", marginBottom: "1.5rem" }}>
                Half-day and full-day workshop experiences for teams and organizations focused
                on awareness, communication, and breaking through performance ceilings.
              </p>
              <Link href="/services#workshops" style={{ color: "#C4813A", textDecoration: "none", fontSize: "0.8125rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Learn More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span style={{ display: "block", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4813A", marginBottom: "1.5rem" }}>
            Get Started
          </span>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.2,
              fontWeight: 400,
              marginBottom: "1.25rem",
              color: "#0E0E0E",
            }}
          >
            Ready to work with Holland Solutions LLC?
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "2.5rem" }}>
            Whether you are looking for one-on-one coaching, a keynote speaker for your event,
            or a workshop for your team &mdash; reach out and let us know what you are working
            on. We respond to every inquiry personally.
          </p>
          <Link href="/contact" className="btn-primary">Request a Consultation</Link>
        </div>
      </section>

      <style>{`
        .two-col { grid-template-columns: 1fr 1fr; }
        .three-col { grid-template-columns: 1fr 1fr 1fr; }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
