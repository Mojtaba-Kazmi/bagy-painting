import ContactForm from "@/components/form/ContactForm";
import PageHeader from "@/components/page-header/PageHeader";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Contact Bagy Painting | Transform Your Space",
  description:
    "Contact Bagy Painting for expert painting services in Adelaide. Call, email, or use the form to request a free quote for interior, exterior, commercial, or restoration work.",
  pathname: "/contact-us",
  // Only keep OG overrides if you want a different share image on this page:
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/djnoxzm2v/image/upload/v1741749368/Bagy_Logo_copy_fxzgx3.png",
        width: 1200,
        height: 630,
        alt: "Bagy Painting — Contact Us",
      },
    ],
  },
});

const ContactPage = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our expert painters in Adelaide for top-quality house and commercial painting services. We're here to help with all your painting needs."
        breadcrumb="Contact Us"
      />
      <ContactForm />
    </>
  );
};

export default ContactPage;
