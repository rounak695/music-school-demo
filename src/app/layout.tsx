import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Abstract Guitar School | Master the Fretboard",
  description:
    "Premium guitar education in India. Learn acoustic, electric, and classical guitar from industry professionals. Join Abstract Guitar School today.",
  keywords: [
    "guitar school",
    "guitar classes India",
    "learn guitar",
    "acoustic guitar",
    "electric guitar",
    "music school India",
    "abstract guitar",
  ],
  openGraph: {
    title: "Abstract Guitar School | Master the Fretboard",
    description:
      "Premium guitar education in India. Learn from industry professionals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable} antialiased`}>
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
