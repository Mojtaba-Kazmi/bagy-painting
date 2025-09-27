import About from "@/components/about/About";
import FAQ from "@/components/faq/FAQ";
import PageHeader from "@/components/page-header/PageHeader";
import { welcomeData } from "@/content/data/about/welcome-data";
import { whyChooseData } from "@/content/data/about/why-choose";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "About Bagy Painting | Adelaide Painters with 12 years of experience",
  description:
    "Learn about Bagy Painting, Adelaide painters with 12 years of experience. Commercial, interior, exterior and restoration. Fully insured. Serving Adelaide metro.",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Bagy Painting"
        description="Local Adelaide painters with 12 years of experience in commercial, interior, exterior and restoration. Fully insured and serving Adelaide metro."
        breadcrumb="About Us"
      />
      <About welcomeData={welcomeData} whyChooseData={whyChooseData} />
      <FAQ />
    </>
  );
}