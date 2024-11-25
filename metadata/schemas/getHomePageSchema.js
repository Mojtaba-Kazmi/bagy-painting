// Home Page Schema Example
export const getHomePageSchema = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bagy Painting",
    description: "Bagy Painting offers expert interior, exterior, and specialty finishes in Adelaide. We focus on quality results and customer satisfaction.",
    areaServed: "Adelaide, Australia",
    provider: {
      "@type": "LocalBusiness",
      name: "Bagy Painting",
      url: "https://bagypainting.com.au",
    },
    // Include services directly on the home page
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
        category: "Commercial Painting",
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
        category: "Paint Restoration",
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
        category: "Residential Painting",
      },
    ]
  });