import { getAllMarkdownContent } from "@/lib/getAllMarkdownContent";
import About from "../components/about/About";
import HeroBanner from "../components/hero-banner/HeroBanner";

export default async function Home() {
  const allMarkdownContent = await getAllMarkdownContent();
  const homeAboutDescription =
    allMarkdownContent["content/about"]?.["home-about"]?.content;

  const homeAboutFetched = {
    description: homeAboutDescription, // Set description from Markdown
    awardText: "",
    awardDescription:
      "",
    buttonText: "Contact Us",
    buttonLink: "/services",
    images: [
      {
        url: "/assets/images/about-home.webp",
        alt: "Men Smiling holding paint roller",
      },
    ],
  };

  return (
    <>
      <HeroBanner />
      <About homeAboutInfo={homeAboutFetched} />
    </>
  );
}
