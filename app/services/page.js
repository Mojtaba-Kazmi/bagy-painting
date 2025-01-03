import AllServices from "@/components/services/AllServices";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Top Paint Company in Adelaide - Expert Painting by Bagy",
  description:
    "Bagy Painting offers expert interior, exterior, and specialty finishes in Adelaide. We focus on quality results and customer satisfaction. Get a free quote!",
  openGraph: {
    title: "Top Paint Company in Adelaide - Expert Painting by Bagy",
    description:
      "Bagy Painting offers expert interior, exterior, and specialty finishes in Adelaide. We focus on quality results and customer satisfaction. Get a free quote!",
  },
});

async function getPaginatedServices(page = 1) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/services/`,
      {
        next: { revalidate: 2592000 }, // Revalidate every 30 days (2592000 seconds)
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }

    const allServices = await res.json();
    const SERVICES_PER_PAGE = 9;
    const totalServices = allServices.length;
    const pageCount = Math.ceil(totalServices / SERVICES_PER_PAGE);

    const sortedServices = allServices.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    const paginatedServices = sortedServices.slice(
      (page - 1) * SERVICES_PER_PAGE,
      page * SERVICES_PER_PAGE
    );

    return { paginatedServices, pageCount };
  } catch (error) {
    console.error(error);
    return { paginatedServices: [], pageCount: 0 };
  }
}

export default async function ServicesPage({ searchParams }) {
  const awaitedSearchParams = await searchParams;
  const page = parseInt(awaitedSearchParams?.page) || 1;
  
  const { paginatedServices, pageCount } = await getPaginatedServices(page);

  return (
    <>
      <AllServices
        paginatedServices={paginatedServices}
        page={page}
        pageCount={pageCount}
      />
    </>
  );
}
