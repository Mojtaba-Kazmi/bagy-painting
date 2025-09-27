import { getHomePageData } from "@/utils/getHomePageData";
import dynamic from "next/dynamic";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";
import Loading from "@/components/loader/loading/loading";
import PageHeader from "@/components/page-header/PageHeader";

export const metadata = generatePageMetadata({
  title: "Painting Portfolio in Adelaide | Bagy Painting",
  description:
    "Explore our Adelaide painting portfolio: commercial, interior, exterior and restoration projects. 12 years of experience. View examples and request a free quote.",
  pathname: "/projects",
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/djnoxzm2v/image/upload/v1741749368/Bagy_Logo_copy_fxzgx3.png",
        width: 1200,
        height: 630,
        alt: "Bagy Painting portfolio in Adelaide",
      },
    ],
  },
});

// Dynamically import Portfolio with a loading state
const Portfolio = dynamic(() => import("@/components/portfolio/Portfolio"), {
  loading: () => <Loading />,
});

const PortfolioPage = async () => {
  const { getPortfolio } = await getHomePageData();

  return (
    <>
      <PageHeader
        title="Painting Portfolio in Adelaide"
        description="See recent commercial, interior, exterior and restoration projects completed across Adelaide."
        breadcrumb="Projects Page"
      />
      <Portfolio portfolio={getPortfolio} />
    </>
  );
};

export default PortfolioPage;
