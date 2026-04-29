import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holland Solutions LLC | Coaching & Speaking Services",
  description:
    "Holland Solutions LLC provides professional coaching and speaking services helping individuals and organizations break through the patterns holding them back.",
  openGraph: {
    title: "Holland Solutions LLC | Coaching & Speaking Services",
    description:
      "Professional coaching and speaking services. Holland Solutions LLC helps people identify and overcome the blind spots driving unwanted patterns in life and business.",
    url: "https://justin.hollandsolutionsllc.com",
    siteName: "Holland Solutions LLC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holland Solutions LLC | Coaching & Speaking Services",
    description:
      "Professional coaching and speaking services. Holland Solutions LLC helps people identify and overcome the blind spots driving unwanted patterns.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerif.variable} ${inter.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
