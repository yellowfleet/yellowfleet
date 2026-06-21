import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { companyInfo } from "@/content/company";
import "./globals.css";

// NOTE: placeholder type pairing for scaffolding. Revisit during the
// dedicated visual design pass (see frontend-design direction).
const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontDisplay = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${companyInfo.name} | ${companyInfo.tagline}`,
  description: companyInfo.shortDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
