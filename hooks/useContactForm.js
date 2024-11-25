import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const useContactForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      contactNumber: "",
      suburb: "", // Add suburb field
      services: [], // Ensure it's an array
      message: "",
    },
  });

  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    if (token) {
      setMessage(null);  // Clear any previous errors
    }
  };

  const onSubmit = async (data) => {
    if (!recaptchaToken) {
      setMessage({ type: "error", text: "Please verify CAPTCHA." });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      // Make sure to send fullName and services
      const res = await axios.post("/api/send-email", {
        fullName: data.fullName,  // Ensure fullName is sent
        email: data.email,
        contactNumber: data.contactNumber,
        suburb: data.suburb,  // Send suburb
        services: data.services,  // Send services as an array
        message: data.message,
        recaptchaToken,
      });

      if (res.status === 200) {
        setMessage({ type: "success", text: "Message sent successfully!" });
        reset();
        setRecaptchaToken("");
        setModalOpen(true);
      } else {
        setMessage({ type: "error", text: "Failed to send message. Please try again later." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage({ type: "error", text: "Error submitting form." });
    } finally {
      setLoading(false);
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    loading,
    message,
    modalOpen,
    setModalOpen,
    handleRecaptchaChange,
    recaptchaToken, // Return recaptchaToken here
    resetForm: reset, // Expose reset() function
  };
};

export default useContactForm;