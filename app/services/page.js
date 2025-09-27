import AllServices from "@/components/services/AllServices";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Painting Services in Adelaide | Commercial and Residential | Bagy Painting",
  description:
    "Professional painting services in Adelaide with 12 years of experience. Commercial, interior, exterior and restoration. Fully insured. Free quotes.",
  pathname: "/services",
  // Optional: add a custom share image if you have one
  // openGraph: {
  //   images: [
  //     {
  //       url: "https://res.cloudinary.com/djnoxzm2v/image/upload/v1741749368/Bagy_Logo_copy_fxzgx3.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Bagy Painting services in Adelaide",
  //     },
  //   ],
  // },
});

async function getPaginatedServices(page = 1) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/services/`,
      {
        next: { revalidate: 86400 }, // Revalidate every 1 day
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
