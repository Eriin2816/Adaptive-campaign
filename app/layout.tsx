import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Free Live Training + 60-Day GHL Trial | Adaptive AI Business Automations",
  description:
    "Join our live training on April 17, 2026 and claim a 60-day free GoHighLevel sub-account trial. Learn how to capture leads, automate follow-up, and book more appointments — built for local service businesses.",
  metadataBase: new URL("https://adaptiveautomate.com"),
  openGraph: {
    title: "Free Live Training + 60-Day GHL Trial | Adaptive AI",
    description:
      "Local service businesses: see how automation captures leads, responds instantly, and books appointments on autopilot. Register for our April 17 live training.",
    type: "website",
    locale: "en_US",
    siteName: "Adaptive AI Business Automations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Live Training + 60-Day GHL Trial | Adaptive AI",
    description:
      "April 17, 2026 live training — capture leads, automate follow-up, book more appointments. Claim a 60-day free GHL sub-account.",
  },
  robots: { index: true, follow: true },
  keywords: [
    "GHL trial",
    "GoHighLevel free trial",
    "local business automation",
    "lead automation",
    "CRM for contractors",
    "appointment booking automation",
    "live training",
    "Adaptive AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-brand-navy">
        {children}
      </body>
    </html>
  );
}
