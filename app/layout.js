import { defaultMetadata } from "@/metadata";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { headers } from "next/headers";
import Script from "next/script";
import './globals.css';

export const metadata = defaultMetadata;

export async function Nonce() {
  const nonce = (await headers()).get("x-nonce");
  return <Script strategy="afterInteractive" nonce={nonce} />;
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Nonce />
      </body>
    </html>
  );
}
