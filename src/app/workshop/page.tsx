"use client";

import { useState } from "react";
import Link from "next/link";

export default function Workshop() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = { formType: "workshop" };
    formData.forEach((value, key) => {
      data[key] = value as string;
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email justin@iamjustinholland.com directly.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    border: "1px solid #d4ccc0",
    background: "#ffffff",
    color: "#1A1A1A",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: "1rem",
    borderRadius: "2px",
    outline: "none",
    marginBottom: "1rem",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.8125rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
    color: "#6b6055",
  };

  return (
    <>
      {/* HERO */}
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "6rem 0 5rem", position: "relative" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #C4813A 30%, #C4813A 70%, transparent)",
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span style={{ display: "block", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4813A", marginBottom: "1.5rem" }}>
            Free Workshop &mdash; Holland Solutions LLC
          </span>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.1,
              fontWeight: 400,
              marginBottom: "1.5rem",
            }}
          >
            How to See the Pattern That Is Running Your Results
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: 1.75, color: "#c8bfb0", maxWidth: "32rem", margin: "0 auto 0.75rem" }}>
            For executives, business owners, and high performers who keep hitting the same ceiling &mdash; despite years of effort, coaching, and self-development.
          </p>
          <p style={{ fontSize: "1rem", color: "#C4813A", fontWeight: 500, marginBottom: "0" }}>
            100% Free. 100% Online. Join the waitlist and we will text you when registration opens.
          </p>
        </div>
      </section>

      {/* WHAT YOU'LL GET + FORM */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="workshop-grid">

            {/* LEFT: What You'll Get */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.75rem",
                  fontWeight: 400,
                  marginBottom: "2rem",
                  color: "#1A1A1A",
                }}
              >
                What You Will Get in This Workshop
              </h2>

              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "2.5rem" }}>
                The exact framework Holland Solutions LLC uses to help clients identify the
                subconscious blind spots driving the patterns they cannot seem to break &mdash;
                no matter how hard they try or how much they know.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: "2rem",
                      height: "2rem",
                      background: "#C4813A",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                      fontSize: "1rem",
                    }}
                  >
                    1
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.25rem", fontWeight: 400, marginBottom: "0.5rem", color: "#1A1A1A" }}>
                      See the Blind Spot
                    </h3>
                    <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "#4a4035" }}>
                      Understand exactly what a blind spot is, why effort and willpower cannot
                      touch it, and how to identify the specific one running your current ceiling.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: "2rem",
                      height: "2rem",
                      background: "#C4813A",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                      fontSize: "1rem",
                    }}
                  >
                    2
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.25rem", fontWeight: 400, marginBottom: "0.5rem", color: "#1A1A1A" }}>
                      Break the Pattern
                    </h3>
                    <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "#4a4035" }}>
                      Learn why seeing a blind spot &mdash; not processing or analyzing it &mdash;
                      is the only thing that permanently changes the pattern it produces.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: "2rem",
                      height: "2rem",
                      background: "#C4813A",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                      fontSize: "1rem",
                    }}
                  >
                    3
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.25rem", fontWeight: 400, marginBottom: "0.5rem", color: "#1A1A1A" }}>
                      Change Your Results
                    </h3>
                    <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "#4a4035" }}>
                      Walk away with a clear understanding of what has actually been holding you
                      back &mdash; and why it can shift faster than you expect once it is seen.
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: "2.5rem",
                  padding: "1.25rem 1.5rem",
                  borderLeft: "3px solid #C4813A",
                  background: "#fff",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "#4a4035",
                }}
              >
                This is not a motivation workshop. This is not a goal-setting session. This is
                the conversation that makes the patterns you have been trying to change finally
                visible.
              </div>
            </div>

            {/* RIGHT: Opt-in Form */}
            <div>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #d4ccc0",
                  padding: "2.5rem",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-dm-serif), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    marginBottom: "0.5rem",
                    color: "#1A1A1A",
                  }}
                >
                  Join the Free Workshop Waitlist
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "#6b6055", marginBottom: "1.75rem", lineHeight: 1.6 }}>
                  Spots are limited. We will text you when registration opens so you do not miss it.
                </p>

                {submitted ? (
                  <div style={{ padding: "2rem", border: "1px solid #C4813A", textAlign: "center" }}>
                    <p style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.25rem", marginBottom: "0.5rem", color: "#1A1A1A" }}>
                      You are on the list.
                    </p>
                    <p style={{ fontSize: "0.9375rem", color: "#6b6055" }}>
                      Holland Solutions LLC will reach out when registration opens.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 1rem" }}>
                      <div>
                        <label htmlFor="firstName" style={labelStyle}>
                          First Name <span style={{ color: "#C4813A" }}>*</span>
                        </label>
                        <input id="firstName" name="firstName" type="text" placeholder="First name" required style={inputStyle} />
                      </div>
                      <div>
                        <label htmlFor="lastName" style={labelStyle}>
                          Last Name <span style={{ color: "#C4813A" }}>*</span>
                        </label>
                        <input id="lastName" name="lastName" type="text" placeholder="Last name" required style={inputStyle} />
                      </div>
                    </div>

                    <label htmlFor="phone" style={labelStyle}>
                      Phone <span style={{ color: "#C4813A" }}>*</span>
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="Your phone number" required style={inputStyle} />

                    <label htmlFor="email" style={labelStyle}>
                      Email <span style={{ color: "#C4813A" }}>*</span>
                    </label>
                    <input id="email" name="email" type="email" placeholder="your@email.com" required style={inputStyle} />

                    {/* Non-Marketing Consent */}
                    <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                      <p style={{ fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#6b6055", marginBottom: "0.5rem" }}>
                        Non-Marketing Text Consent
                      </p>
                      <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          name="consent_transactional"
                          value="yes"
                          aria-label="Non-marketing text consent"
                          style={{ marginTop: "0.2rem", flexShrink: 0, accentColor: "#C4813A" }}
                        />
                        <span style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "#6b6055" }}>
                          By checking this box, I agree to receive non-marketing text messages from
                          Holland Solutions LLC, including workshop announcements, waitlist updates,
                          and event reminders. Consent is not required to participate. Message
                          frequency may vary. Message &amp; data rates may apply. Reply HELP for
                          help or STOP to opt-out. See Privacy Policy and Terms of Service below.
                        </span>
                      </label>
                    </div>

                    {/* Marketing Consent */}
                    <div style={{ marginBottom: "1.25rem" }}>
                      <p style={{ fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#6b6055", marginBottom: "0.5rem" }}>
                        Marketing Text Consent
                      </p>
                      <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          name="consent_marketing"
                          value="yes"
                          aria-label="Marketing text consent"
                          style={{ marginTop: "0.2rem", flexShrink: 0, accentColor: "#C4813A" }}
                        />
                        <span style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "#6b6055" }}>
                          By checking this box, I agree to receive marketing and promotional text
                          messages from Holland Solutions LLC, including special offers, educational
                          content, and program updates. Consent is not required to participate.
                          Message frequency may vary. Message &amp; data rates may apply. Reply
                          HELP for help or STOP to opt-out. See Privacy Policy and Terms of
                          Service below.
                        </span>
                      </label>
                    </div>

                    {/* PP + Terms links -- below form per GHL spec */}
                    <p style={{ fontSize: "0.8125rem", color: "#9a9080", marginBottom: "1.25rem", textAlign: "center" }}>
                      <Link href="/privacy-policy" style={{ color: "#C4813A", textDecoration: "none" }}>Privacy Policy</Link>
                      {" "}&amp;{" "}
                      <Link href="/terms" style={{ color: "#C4813A", textDecoration: "none" }}>Terms of Service</Link>
                    </p>

                    {error && (
                      <p style={{ fontSize: "0.875rem", color: "#c0392b", marginBottom: "0.75rem" }}>{error}</p>
                    )}

                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ width: "100%", opacity: loading ? 0.7 : 1 }}
                      disabled={loading}
                    >
                      {loading ? "Signing you up..." : "Sign Me Up For The Workshop"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE TEACH THIS */}
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6">
          <span style={{ display: "block", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4813A", marginBottom: "1.5rem" }}>
            Why We Teach This
          </span>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 400,
              lineHeight: 1.3,
              marginBottom: "1.5rem",
            }}
          >
            Most people are not held back by what they think they are held back by.
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#c8bfb0", marginBottom: "1.25rem" }}>
            The executives, entrepreneurs, and high performers we work with are not lazy or
            unmotivated. They are driven, accomplished, and have done significant work on
            themselves. They have hired coaches, read the books, built the systems.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#c8bfb0", marginBottom: "1.25rem" }}>
            And they still hit the same ceiling. In revenue, in relationships, in leadership,
            in the results they know they are capable of. The issue is not effort. The issue
            is a blind spot that has never been seen &mdash; and cannot be seen from inside
            the pattern it is producing.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "#c8bfb0", marginBottom: "2.5rem" }}>
            Holland Solutions LLC teaches this workshop to give people the framework to finally
            see what has been running underneath. You should not have to spend another decade
            figuring this out alone.
          </p>
          <Link href="#top" className="btn-secondary" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            Join the Waitlist
          </Link>
        </div>
      </section>

      <style>{`
        .workshop-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .workshop-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
