import { defaultMetadata } from "@/metadata/metadata";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ScrollToTop from "@/components/scroll-to/ScrollTo";
import CTAButton from "@/components/cta-button/CTAButton";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata = defaultMetadata;

export default async function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CTAButton />
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
