import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Holland Solutions LLC",
  description:
    "Holland Solutions LLC offers one-on-one coaching, keynote speaking, and organizational workshops. Professional services for individuals and organizations ready to break through performance ceilings.",
};

export default function Services() {
  return (
    <>
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "7rem 0 5rem" }}>
        <div className="max-w-3xl mx-auto px-6">
          <span style={{ display: "block", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4813A", marginBottom: "1.5rem" }}>
            What We Offer
          </span>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
              fontWeight: 400,
              marginBottom: "1.25rem",
            }}
          >
            Our Services
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: 1.75, color: "#c8bfb0", maxWidth: "30rem" }}>
            Three ways Holland Solutions LLC works with individuals and organizations.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6">

          <div id="coaching" style={{ marginBottom: "5rem", paddingTop: "1rem" }}>
            <span className="line-accent" />
            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "2rem", fontWeight: 400, marginBottom: "1.25rem", color: "#1A1A1A" }}>
              One-on-One Coaching
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#4a4035", marginBottom: "1rem" }}>
              Private coaching engagements for individuals who are ready to identify the
              subconscious patterns limiting their results. This is not a program with
              assignments and accountability calls. It is a series of conversations designed
              to surface what you cannot currently see about what you are creating.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#4a4035", marginBottom: "1rem" }}>
              Our coaching clients are typically high performers &mdash; executives, business
              owners, and driven individuals who have already done significant self-development
              work and are still running into the same ceiling. The issue is rarely a lack of
              effort or knowledge. It is a blind spot that has not been seen.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#4a4035", marginBottom: "2rem" }}>
              Coaching engagements are offered on a session basis and as ongoing packages.
              To inquire, use the contact form and indicate your interest in one-on-one coaching.
            </p>
            <Link href="/contact" className="btn-secondary-dark">Inquire About Coaching</Link>
          </div>

          <div id="speaking" style={{ marginBottom: "5rem", paddingTop: "1rem" }}>
            <span className="line-accent" />
            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "2rem", fontWeight: 400, marginBottom: "1.25rem", color: "#1A1A1A" }}>
              Keynote Speaking
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#4a4035", marginBottom: "1rem" }}>
              Keynote presentations for conferences, corporate events, leadership summits, and
              personal development gatherings. Holland Solutions LLC keynotes are built around
              a single aim: to give audiences a shift in awareness they cannot reverse.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#4a4035", marginBottom: "1rem" }}>
              Topics include blind spot awareness, breaking through performance ceilings,
              leadership and self-deception, and the psychology of sustainable change. Each
              keynote is tailored to the audience and event context.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#4a4035", marginBottom: "2rem" }}>
              To inquire about speaking availability and fees, please use the contact form and
              include your event date, expected audience size, and event type.
            </p>
            <Link href="/contact" className="btn-secondary-dark">Inquire About Speaking</Link>
          </div>

          <div id="workshops" style={{ paddingTop: "1rem" }}>
            <span className="line-accent" />
            <h2 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "2rem", fontWeight: 400, marginBottom: "1.25rem", color: "#1A1A1A" }}>
              Organizational Workshops
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#4a4035", marginBottom: "1rem" }}>
              Half-day and full-day workshop experiences for teams and organizations. Workshops
              are designed to help groups identify the collective blind spots limiting
              performance, communication, and organizational culture.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#4a4035", marginBottom: "1rem" }}>
              Common applications include leadership development, team communication, sales
              performance, and culture change initiatives. All workshops are designed
              collaboratively with the organization based on its specific context and goals.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#4a4035", marginBottom: "2rem" }}>
              To discuss a workshop for your organization, use the contact form and describe
              what you are working on.
            </p>
            <Link href="/contact" className="btn-secondary-dark">Inquire About Workshops</Link>
          </div>
        </div>
      </section>
    </>
  );
}
