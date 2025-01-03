import ContactForm from "@/components/form/ContactForm";
import PageHeader from "@/components/page-header/PageHeader";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Contact Bagy Painting - Let's Transform Your Space",
  description:
    "Get in touch with Bagy Painting for expert painting services in Adelaide. Call us, email us, or fill out our contact form to request a free quote or consultation!",
  openGraph: {
    title: "Contact Bagy Painting - Let's Transform Your Space",
    description:
      "Reach out to Bagy Painting for premium painting solutions. We specialize in interior, exterior, and custom finishes. Contact us today for personalized support!",
    url: "https://www.bagypainting.com.au/contact-us",
    images: [
      {
        url: "https://cdn-ilabcdh.nitrocdn.com/VMExtHjSOgwlYoVxRcJmxhEOXjOSEEKd/assets/images/optimized/rev-d9d5e4c/bagypainting.com.au/wp-content/uploads/2024/02/Bagy_Logo-1536x238.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Bagy Painting - Contact Us",
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
