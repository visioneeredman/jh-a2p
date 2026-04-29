import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Holland Solutions LLC",
  description:
    "Holland Solutions LLC is a professional coaching and speaking company helping individuals and organizations identify and overcome the blind spots driving unwanted patterns.",
};

export default function About() {
  return (
    <>
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "7rem 0 5rem" }}>
        <div className="max-w-3xl mx-auto px-6">
          <span style={{ display: "block", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4813A", marginBottom: "1.5rem" }}>
            About the Company
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
            Holland Solutions LLC
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: 1.75, color: "#c8bfb0" }}>
            A professional coaching and speaking company based in North Carolina.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#2a2018" }}>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.75rem",
                fontWeight: 400,
                marginBottom: "1.25rem",
                color: "#1A1A1A",
              }}
            >
              What We Do
            </h2>
            <p style={{ marginBottom: "1.25rem" }}>
              Holland Solutions LLC provides professional coaching and speaking services to
              individuals, executives, and organizations. Our work centers on a single insight:
              most people are not held back by a lack of effort, knowledge, or willpower. They
              are held back by blind spots &mdash; subconscious patterns running underneath
              everything they try.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              When a blind spot is genuinely seen &mdash; not intellectually discussed, but
              actually seen &mdash; its hold on behavior changes. That is the shift our work
              is designed to produce.
            </p>
            <p style={{ marginBottom: "3rem" }}>
              We offer one-on-one coaching engagements, keynote presentations, and organizational
              workshops. Our clients include business owners, executives, and high-performing
              individuals who have done the work and are still hitting the same ceiling.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.75rem",
                fontWeight: 400,
                marginBottom: "1.25rem",
                color: "#1A1A1A",
              }}
            >
              Our Approach
            </h2>
            <p style={{ marginBottom: "1.25rem" }}>
              Holland Solutions LLC does not offer a curriculum, a program, or a framework to
              follow. Our coaching is a conversation specifically designed to point at what
              you cannot currently see about what you are creating.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              Our speaking engagements are built around the same principle. Audiences do not
              leave with a list of things to do. They leave with something they cannot unsee.
              That kind of shift in awareness produces lasting change where motivation and
              strategy alone have not.
            </p>
            <p style={{ marginBottom: "3rem" }}>
              Our workshops bring this work into organizations &mdash; helping teams and
              leadership groups identify the collective blind spots limiting performance,
              communication, and culture.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.75rem",
                fontWeight: 400,
                marginBottom: "1.25rem",
                color: "#1A1A1A",
              }}
            >
              Business Information
            </h2>
            <p style={{ marginBottom: "0.75rem" }}>
              <strong>Entity:</strong> Holland Solutions LLC
            </p>
            <p style={{ marginBottom: "0.75rem" }}>
              <strong>Location:</strong> North Carolina, United States
            </p>
            <p style={{ marginBottom: "0.75rem" }}>
              <strong>Services:</strong> One-on-One Coaching, Keynote Speaking, Organizational Workshops
            </p>
            <p style={{ marginBottom: "2.5rem" }}>
              <strong>Contact:</strong>{" "}
              <a href="mailto:justin@iamjustinholland.com" style={{ color: "#C4813A", textDecoration: "none" }}>
                justin@iamjustinholland.com
              </a>
            </p>

            <Link href="/contact" className="btn-primary">Request a Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
