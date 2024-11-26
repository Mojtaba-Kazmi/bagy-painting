import About from "@/components/about/About";
import BlogPosts from "@/components/blog/BlogPosts";
import ContactForms from "@/components/Forms/ContactForm";
import HeroBanner from "@/components/hero-banner/HeroBanner";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import { getHomePageSchema } from "@/metadata/schemas/getHomePageSchema";
import { getHomePageData } from "@/utils/getHomePageData";

export default async function Home() {
  const { homeAboutData, latestServices, latestBlogPosts } =
    await getHomePageData();

  const servicesSchema = getHomePageSchema();

  return (
    <>
      {/* Inject JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <HeroBanner />
      <About homeAboutInfo={homeAboutData} />
      <Services latestServices={latestServices} />
      <Testimonials />
      <BlogPosts latestPosts={latestBlogPosts} />
      <ContactForms />
    </>
  );
}
