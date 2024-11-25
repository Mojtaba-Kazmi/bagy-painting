import ContactForm from "@/components/form/ContactForm";
import PageHeader from "@/components/page-header/PageHeader";

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
