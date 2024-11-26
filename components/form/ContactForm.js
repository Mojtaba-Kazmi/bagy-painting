"use client";

import SuccessModal from "./components/SuccessModal";
import ContactFormFields from "./components/ContactFormFields";
import useContactForm from "@/hooks/useContactForm";
import styles from "./ContactForm.module.css";
import SectionHeader from "../section-header/SectionHeader";

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    onSubmit,
    errors,
    loading,
    message,
    modalOpen,
    setModalOpen,
  } = useContactForm();

  const handleFormSubmit = async (data) => {
    await onSubmit(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className={styles.contactForm}
        >
          <header className={styles.heading}>
            <SectionHeader
              title="Get Your Instant Free Quote!"
              description="Fill in your details, and we'll be in touch soon."
            />
          </header>
          <ContactFormFields control={control} errors={errors} />

          {message?.type === "error" && (
            <span className={styles.errorText}>{message.text}</span>
          )}

          <div className={styles.submitContainer}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        {modalOpen && (
          <SuccessModal
            open={modalOpen}
            onClose={() => {
              setModalOpen(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ContactForm;