// Services Page (All Services) Schema Example
export const getAllServicesSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Painting Services Adelaide",
  description: "Bagy Painting offers expert painting services in Adelaide including commercial, residential, and restoration painting services.",
  areaServed: "Adelaide, Australia",
  provider: {
    "@type": "LocalBusiness",
    name: "Bagy Painting",
    url: "https://bagypainting.com.au/services",
  },
  mainEntityOfPage: [
    {
      "@type": "Service",
      name: "Commercial Painters Adelaide",
      description: "Expert commercial painting services in Adelaide. Offering high-quality painting solutions for offices, buildings, and other commercial properties.",
      areaServed: "Adelaide, Australia",
      provider: {
        "@type": "LocalBusiness",
        name: "Bagy Painting",
        url: "https://bagypainting.com.au/services/commercial-painters-adelaide",
      },
    },
    {
      "@type": "Service",
      name: "Residential Painters Adelaide",
      description: "High-quality residential painting services in Adelaide, specializing in interior and exterior painting for homes.",
      areaServed: "Adelaide, Australia",
      provider: {
        "@type": "LocalBusiness",
        name: "Bagy Painting",
        url: "https://bagypainting.com.au/services/residential-painters-adelaide",
      },
    },
    {
      "@type": "Service",
      name: "Paint Restoration Adelaide",
      description: "Professional paint restoration services in Adelaide, bringing old paint back to life with expert restoration techniques.",
      areaServed: "Adelaide, Australia",
      provider: {
        "@type": "LocalBusiness",
        name: "Bagy Painting",
        url: "https://bagypainting.com.au/services/paint-restoration-adelaide",
      },
    },
  ],
});