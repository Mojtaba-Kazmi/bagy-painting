import { defaultMetadata } from "@/metadata/metadata";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";
import ScrollToTop from "@/components/scroll-to/ScrollTo";
import CTAButton from "@/components/cta-button/CTAButton";
import { Suspense } from "react";
import Spinner from "@/components/spinner/Spinner";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata = defaultMetadata;

export async function Nonce() {
  const nonce = (await headers()).get("x-nonce");
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js"
        strategy="afterInteractive"
        nonce={nonce}
      />

      <Script id="google-analytics" strategy="afterInteractive" nonce={nonce}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');
        `}
      </Script>
    </>
  );
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Suspense fallback={<Spinner />}>
          <main>
            {children}
          </main>
        </Suspense>
        <Footer />
        <CTAButton />
        <ScrollToTop />
        <Nonce />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
