import About from "@/components/about/About";
import BlogPosts from "@/components/blog/BlogPosts";
import ContactForm from "@/components/form/ContactForm";
import HeroBanner from "@/components/hero-banner/HeroBanner";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import { getHomePageData } from "@/utils/getHomePageData";

export default async function Home() {
  const { homeAboutData, latestServices, latestBlogPosts } =
    await getHomePageData();

  return (
    <>
      <HeroBanner />
      <About homeAboutInfo={homeAboutData} />
      <Services latestServices={latestServices} />
      <Testimonials />
      <BlogPosts latestPosts={latestBlogPosts} />
      <ContactForm />
    </>
  );
}
