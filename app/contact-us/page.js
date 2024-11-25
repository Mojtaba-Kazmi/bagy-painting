import ContactForm from "@/components/form/ContactForm";
import PageHeader from "@/components/page-header/PageHeader";

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
