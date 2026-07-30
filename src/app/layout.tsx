import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { getCompanyInfo } from "@/lib/queries/company";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontDisplay = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const company = await getCompanyInfo();
  return {
    title: `${company.name} | ${company.tagline}`,
    description: company.shortDescription,
  };
}

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