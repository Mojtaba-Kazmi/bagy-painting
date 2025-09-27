import ContactForm from "@/components/form/ContactForm";
import PageHeader from "@/components/page-header/PageHeader";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Get a Free Quote | Painting Services in Adelaide | Bagy Painting",
  description:
    "Request a free quote for residential or commercial painting in Adelaide. Fast estimates tailored to your project. Interior, exterior, and restoration.",
  pathname: "/get-quote",
  // Only override OG if you want a page-specific image; the helper mirrors title/description.
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/djnoxzm2v/image/upload/v1741749368/Bagy_Logo_copy_fxzgx3.png",
        width: 1200,
        height: 630,
        alt: "Bagy Painting — Get a Free Quote",
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
