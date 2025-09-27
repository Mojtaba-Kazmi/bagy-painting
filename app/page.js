import About from "@/components/about/About";
import BlogPosts from "@/components/blog/BlogPosts";
import HeroBanner from "@/components/hero-banner/HeroBanner";
import Hero from "@/components/hero/Hero";
import { getHomePageData } from "@/utils/getHomePageData";
import { Suspense } from "react";
import dynamic from "next/dynamic";
const Services = dynamic(() => import("@/components/services/Services"));
const GoogleReviews = dynamic(() =>
  import("@/components/reviews/GoogleReviews")
);
const ContactForm = dynamic(() => import("@/components/form/ContactForm"));
import LocalBusinessJsonLd from "@/components/reviews/LocalBusinessJsonLd";


export default async function Home() {
  const { homeAboutData, latestServices, latestBlogPosts } =
    await getHomePageData();

  return (
    <>
      <Hero />
      <LocalBusinessJsonLd />
      <HeroBanner />
      <About homeAboutInfo={homeAboutData} />
      <Suspense fallback={<div>Loading...</div>}>
        <Services latestServices={latestServices} />
        <GoogleReviews />
        <p style={{ textAlign: "center", marginTop: "0.75rem" }}>
          Ready for a quote? Explore our{" "}
          <a href="/services/commercial-painters-adelaide">commercial painting services</a>.
        </p>
      </Suspense>
      <BlogPosts latestPosts={latestBlogPosts} />
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </>
  );
}
