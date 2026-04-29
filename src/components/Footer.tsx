"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0E0E0E", color: "#9a9080" }}>
      <div style={{ padding: "4rem 0 2rem" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            <div>
              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  color: "#F5F0E8",
                  fontSize: "1.125rem",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                Holland Solutions LLC
              </Link>
              <p style={{ fontSize: "0.875rem", maxWidth: "22rem", lineHeight: 1.6 }}>
                Professional coaching and speaking services helping individuals and organizations identify and overcome the blind spots driving unwanted patterns.
              </p>
            </div>

            <nav aria-label="Footer navigation" style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link href="/about" style={{ color: "#9a9080", textDecoration: "none", fontSize: "0.875rem" }}>About</Link>
                <Link href="/services" style={{ color: "#9a9080", textDecoration: "none", fontSize: "0.875rem" }}>Services</Link>
                <Link href="/contact" style={{ color: "#9a9080", textDecoration: "none", fontSize: "0.875rem" }}>Contact</Link>
              </div>
            </nav>
          </div>

          <div
            style={{
              borderTop: "1px solid #1e1e1e",
              paddingTop: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            <p style={{ fontSize: "0.8125rem" }}>
              &copy; {new Date().getFullYear()} Holland Solutions LLC. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/privacy-policy" style={{ color: "#6b6055", textDecoration: "none", fontSize: "0.8125rem" }}>Privacy Policy</Link>
              <Link href="/terms" style={{ color: "#6b6055", textDecoration: "none", fontSize: "0.8125rem" }}>Terms of Service</Link>
              <Link href="/contact" style={{ color: "#6b6055", textDecoration: "none", fontSize: "0.8125rem" }}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
