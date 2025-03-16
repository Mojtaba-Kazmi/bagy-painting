import About from "@/components/about/About";
import BlogPosts from "@/components/blog/BlogPosts";
import HeroBanner from "@/components/hero-banner/HeroBanner";
import Hero from "@/components/hero/Hero";
import { getHomePageData } from "@/utils/getHomePageData";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import styles from "./Page.module.css";
const Services = dynamic(() => import("@/components/services/Services"));
const GoogleReviews = dynamic(() =>
  import("@/components/reviews/GoogleReviews")
);
const ContactForm = dynamic(() => import("@/components/form/ContactForm"));

export default async function Home() {
  const { homeAboutData, latestServices, latestBlogPosts } =
    await getHomePageData();

  return (
    <>
      <h1 className={styles.srOnly}>Professional Painters in Adelaide</h1>
      <Hero />
      <HeroBanner />
      <About homeAboutInfo={homeAboutData} />
      <Suspense fallback={<div>Loading...</div>}>
        <Services latestServices={latestServices} />
        <GoogleReviews />
      </Suspense>
      <BlogPosts latestPosts={latestBlogPosts} />
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </>
  );
}
