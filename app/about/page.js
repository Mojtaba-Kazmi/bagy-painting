import About from "@/components/about/About";
import FAQ from "@/components/faq/FAQ";
import PageHeader from "@/components/page-header/PageHeader";
import { welcomeData } from "@/content/data/about/welcome-data";
import { whyChooseData } from "@/content/data/about/why-choose";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Local Painters Adelaide | Top Interior & Exterior Experts - Call Now",
  description:
    "Dulux-accredited local painters in Adelaide offering premium interior and exterior painting. Fully insured team. Get free quote today!",
  openGraph: {
    title: "Local Painters Adelaide | Top Interior & Exterior Experts - Call Now",
    description:
      "Dulux-accredited local painters in Adelaide offering premium interior and exterior painting. Fully insured team. Get free quote today!",
  },
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Expert Local Exterior and Interior Painters in Adelaide"
        description="Reliable and skilled painters for all your exterior and interior projects in Adelaide."
        breadcrumb="About Page"
      />
      <About welcomeData={welcomeData} whyChooseData={whyChooseData} />
      <FAQ />
    </>
  );
}
