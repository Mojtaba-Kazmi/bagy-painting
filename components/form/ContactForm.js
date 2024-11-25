"use client";

import SuccessModal from "./components/SuccessModal";
import ContactFormFields from "./components/ContactFormFields";
import useContactForm from "@/hooks/useContactForm";
import ReCAPTCHAComponent from "./components/ReCAPTCHAComponent";
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
    recaptchaToken, // Receive recaptchaToken from the hook
    handleRecaptchaChange,
  } = useContactForm();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
          <header className={styles.heading}>
            <SectionHeader
              title="Get Your Instant Free Quote!"
              description="Fill in your details, and we'll be in touch soon."
            />
          </header>
          <ContactFormFields control={control} errors={errors} />{" "}
          {/* Use the new component */}
          <div className={styles.recaptchaContainer}>
            <ReCAPTCHAComponent handleRecaptchaChange={handleRecaptchaChange} />
            {message?.type === "error" && (
              <span className={styles.errorText}>
                {recaptchaToken
                  ? "Sorry, we couldn't send your email due to a technical issue. Please try again later or contact us directly"
                  : "Please complete CAPTCHA"}
              </span>
            )}
          </div>
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
          <SuccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default ContactForm;
