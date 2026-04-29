import type { Metadata } from "next";
import PlaceholderForm from "@/components/PlaceholderForm";

export const metadata: Metadata = {
  title: "Contact | Holland Solutions LLC",
  description:
    "Contact Holland Solutions LLC to inquire about coaching, speaking, or workshops. We respond to every inquiry personally.",
};

const contactFormFields = [
  { name: "firstName", label: "First Name", type: "text" as const, placeholder: "First name", required: true },
  { name: "lastName", label: "Last Name", type: "text" as const, placeholder: "Last name", required: true },
  { name: "email", label: "Email", type: "email" as const, placeholder: "your@email.com", required: true },
  { name: "phone", label: "Phone (optional)", type: "tel" as const, placeholder: "Phone number" },
  {
    name: "subject",
    label: "I am interested in",
    type: "select" as const,
    options: ["One-on-One Coaching", "Keynote Speaking", "Organizational Workshop", "General Inquiry"],
    required: true,
  },
  { name: "message", label: "Tell us more", type: "textarea" as const, placeholder: "Share what you are working on and what you are looking for.", required: true },
];

export default function Contact() {
  return (
    <>
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "7rem 0 5rem" }}>
        <div className="max-w-3xl mx-auto px-6">
          <span style={{ display: "block", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4813A", marginBottom: "1.5rem" }}>
            Get in Touch
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
            Contact Holland Solutions LLC
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: 1.75, color: "#c8bfb0", maxWidth: "32rem" }}>
            Use the form below to inquire about coaching, speaking, or workshops. We respond
            to every inquiry personally.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6">
          <PlaceholderForm
            fields={contactFormFields}
            submitLabel="Send Inquiry"
            successMessage="Your inquiry has been received. Holland Solutions LLC will be in touch shortly."
            formType="contact"
            showConsentCheckboxes={true}
          />
        </div>
      </section>
    </>
  );
}
