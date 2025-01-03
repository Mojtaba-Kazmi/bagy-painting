import Spinner from "@/components/spinner/Spinner";
import { getHomePageData } from "@/utils/getHomePageData";
import dynamic from "next/dynamic";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Bagy Painting Portfolio - Successful Painting Projects in Adelaide",
  description:
    "Explore Bagy Painting's portfolio showcasing successful painting projects in Adelaide. From vibrant interiors to weather-resistant exteriors, witness our craftsmanship and request a free quote today!",
  openGraph: {
    title: "Bagy Painting Portfolio - Successful Painting Projects in Adelaide",
    description:
      "Discover Bagy Painting's gallery of completed painting projects in Adelaide. See our expert finishes, attention to detail, and commitment to quality. View our portfolio and contact us for your next project!",
    images: [
      {
        url: "https://cdn-ilabcdh.nitrocdn.com/VMExtHjSOgwlYoVxRcJmxhEOXjOSEEKd/assets/images/optimized/rev-d9d5e4c/bagypainting.com.au/wp-content/uploads/2024/02/Bagy_Logo-1536x238.png",
        width: 1200,
        height: 630,
        alt: "Portfolio showcasing Bagy Painting's successful projects in Adelaide",
      },
    ],
    url: "https://www.bagypainting.com.au/portfolio",
  },
});

// Dynamically import Portfolio with a loading state (optional)
const Portfolio = dynamic(() => import("@/components/portfolio/Portfolio"), {
  loading: () => <Spinner />
});

const PortfolioPage = async () => {
  const { getPortfolio} = await getHomePageData();

  return <Portfolio portfolio= {getPortfolio} />;
}

export default PortfolioPage;