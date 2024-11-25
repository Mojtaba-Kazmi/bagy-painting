import About from "@/components/about/About";
import FAQ from "@/components/faq/FAQ";
import PageHeader from "@/components/page-header/PageHeader";
import { welcomeData } from "@/content/data/about/welcome-data";
import { whyChooseData } from "@/content/data/about/why-choose";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";
import { getFaqSchema } from "@/metadata/schemas/faqSchema";

export async function generateMetadata() {
  return generatePageMetadata({
    title:
      "Local Painters Adelaide | Top Interior & Exterior Experts - Call Now",
    description:
      "Dulux-accredited local painters in Adelaide offering premium interior and exterior painting. Fully insured team. Get free quote today!",
  });
}

export default function AboutPage() {
  const faqSchema = getFaqSchema();

  return (
    <>
      {/* Inject JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        title="Expert Local Exterior and Interior Painters in Adelaide"
        description="Reliable and skilled painters for all your exterior and interior projects in Adelaide."
        breadcrumb="About Page"
      />
      <About 
        welcomeData={welcomeData} 
        whyChooseData={whyChooseData} 
      />
      <FAQ />
    </>
  );
}
