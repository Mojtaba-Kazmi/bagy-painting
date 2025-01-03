import ContactForm from "@/components/form/ContactForm";
import PageHeader from "@/components/page-header/PageHeader";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Get a Free Quote - Expert Painting Services in Adelaide | Bagy Painting",
  description:
    "Request a free quote for house or commercial painting services in Adelaide. Bagy Painting offers customized estimates to fit your specific needs. Contact us today!",
  openGraph: {
    title: "Get a Free Quote - Expert Painting Services in Adelaide | Bagy Painting",
    description:
      "Explore professional painting services tailored to your requirements. Get a free, no-obligation quote from Bagy Painting and start transforming your space today!",
    url: "https://www.bagypainting.com.au/get-quote",
    images: [
      {
        url: "https://cdn-ilabcdh.nitrocdn.com/VMExtHjSOgwlYoVxRcJmxhEOXjOSEEKd/assets/images/optimized/rev-d9d5e4c/bagypainting.com.au/wp-content/uploads/2024/02/Bagy_Logo-1536x238.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Bagy Painting - Get a Free Quote",
      },
    ],
  },
});

const GetFreeQuotePage = () => {
  return (
    <>
      <PageHeader
        title="Get Free Quote"
        description="Request a free quote for expert house and commercial painting services in Adelaide. Our team is ready to provide you with a customized estimate."
        breadcrumb="Get Free Quote"
      />
      <ContactForm />
    </>
  );
};

export default GetFreeQuotePage;
