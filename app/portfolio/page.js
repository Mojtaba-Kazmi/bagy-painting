import Spinner from "@/components/spinner/Spinner";
import { getHomePageData } from "@/utils/getHomePageData";
import dynamic from "next/dynamic";

// Dynamically import Portfolio with a loading state (optional)
const Portfolio = dynamic(() => import("@/components/portfolio/Portfolio"), {
  loading: () => <Spinner />
});

const PortfolioPage = async () => {
  const { getPortfolio} = await getHomePageData();

  return <Portfolio portfolio= {getPortfolio} />;
}

export default PortfolioPage;