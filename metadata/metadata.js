export const defaultMetadata = {
  // Use the public site URL, not your API URL
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.bagypainting.com.au"),

  title: "Commercial & Residential Painters in Adelaide | Bagy Painting",
  description:
    "Trusted Adelaide painters with 12 years of experience. Commercial, interior, exterior & restoration. Serving Glenelg, Unley, Salisbury & Norwood.",

  alternates: {
    canonical: "https://www.bagypainting.com.au",
  },

  openGraph: {
    title: "Commercial & Residential Painters in Adelaide | Bagy Painting",
    description:
      "Bagy Painting: trusted Adelaide painters for commercial, interior, exterior and restoration projects. Premium Dulux, Wattyl and specialist coatings.",
    url: "https://www.bagypainting.com.au",
    siteName: "Bagy Painting",
    images: [
      {
        url: "https://res.cloudinary.com/djnoxzm2v/image/upload/v1741749368/Bagy_Logo_copy_fxzgx3.png",
        width: 1200,
        height: 630,
        alt: "Bagy Painting — Adelaide painters",
      },
    ],
    type: "website",
    locale: "en_AU",
  },

  twitter: {
    card: "summary_large_image",
    title: "Commercial & Residential Painters in Adelaide | Bagy Painting",
    description:
      "Adelaide painters with 12 years of experience. Commercial, interior, exterior & restoration. Free quotes.",
    images: [
      "https://res.cloudinary.com/djnoxzm2v/image/upload/v1741749368/Bagy_Logo_copy_fxzgx3.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
    // You can add per-bot rules if needed:
    // googleBot: { index: true, follow: true }
  },

  // Optional: icons & verification
  // icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  // verification: { google: "YOUR_SEARCH_CONSOLE_CODE" },

  additionalMeta: {
    cityFocus: "Adelaide, Australia",
    areasServed: ["Eastern Suburbs", "Northern Suburbs", "Southern Suburbs", "Western Suburbs"],
  },
};