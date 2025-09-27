"use client";
import { useEffect, useState } from "react";

export default function LocalBusinessJsonLd() {
  const [agg, setAgg] = useState({ rating: null, count: null });

  useEffect(() => {
    fetch("/api/reviews/summary")
      .then(r => r.json())
      .then(setAgg)
      .catch(() => {});
  }, []);

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bagy Painting",
    url: "https://www.bagypainting.com.au",
    telephone: "+61 422 00 876",
    image: "https://www.bagypainting.com.au/icon.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Adelaide",
      addressRegion: "SA",
      addressCountry: "AU"
    },
    ...(agg.rating && agg.count && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(agg.rating),
        ratingCount: agg.count
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}