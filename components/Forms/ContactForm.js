"use client";

import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  FormGroup,
  Typography,
  Switch,
  Box,
  CircularProgress,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info"; // Import the Info icon

import styles from "./ContactForm.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import SuccessModal from "./SuccessModal"; // Import the modal
import SectionHeader from "../section-header/SectionHeader";

const servicesList = [
  { label: "Shirts", value: "Shirts" },
  { label: "Pants", value: "Pants" },
  { label: "Overalls", value: "Overalls" },
  { label: "Dust Coats", value: "Dust Coats" },
  { label: "Polos", value: "Polos" },
  { label: "Mats", value: "Mats" },
  { label: "Towels", value: "Towels" },
  { label: "Tea Towels & Wipes", value: "Tea Towels & Wipes" },
  {
    label: "Continuous Cloth Roll Towels",
    value: "Continuous Cloth Roll Towels",
  },
];


const ContactForms = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      contactNumber: "",
      companyName: "",
      businessPostcode: "",
      operatingMultipleStates: false,
      services: [],
      message: "",
      newsletter: false,
    },
  });

  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); // State for the modal

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setRecaptchaError(false);
    if (
      message &&
      message.type === "error" &&
      message.text === "Please complete the CAPTCHA."
    ) {
      setMessage(null);
    }
  };

  const onSubmit = async (data) => {
    if (!recaptchaToken) {
      setRecaptchaError(true);
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await axios.post("/api/sendEmail", {
        ...data,
        recaptchaToken,
      });

      if (res.status === 200) {
        setMessage({
          type: "success",
          text: "Your message has been sent successfully!",
        });
        reset();
        setRecaptchaToken("");
        setModalOpen(true); // Open the modal on success
      } else {
        setMessage({
          type: "error",
          text: "Failed to send your message. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage({
        type: "error",
        text: "There was an error submitting the form.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.contactForm}
          autoComplete="off"
        >
          <div className={styles.heading}>
            <SectionHeader
              title="Get Your Free Quote Fast!"
              description="Fill out the details below, and we'll connect you with the right person promptly."
            />
          </div>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            <Box sx={{ flex: "1 1 48%" }}>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: "First Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="First Name *" // Added asterisk
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                  />
                )}
              />
            </Box>
            <Box sx={{ flex: "1 1 48%" }}>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: "Last Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Last Name *" // Added asterisk
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                  />
                )}
              />
            </Box>
            <Box sx={{ flex: "1 1 48%" }}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "E-mail is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address.",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="E-mail Address *" // Added asterisk
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Box>
            <Box sx={{ flex: "1 1 48%" }}>
              <Controller
                name="contactNumber"
                control={control}
                rules={{
                  required: "Contact Number is required",
                  pattern: {
                    value: /^(04\d{8}|[1-9]\d{8})$/,
                    message: "Invalid Australian contact number.",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Contact Number *" // Added asterisk
                    error={!!errors.contactNumber}
                    helperText={errors.contactNumber?.message}
                  />
                )}
              />
            </Box>
            <Box sx={{ flex: "1 1 48%" }}>
              <Controller
                name="companyName"
                control={control}
                rules={{ required: "Company Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Company Name *" // Added asterisk
                    error={!!errors.companyName}
                    helperText={errors.companyName?.message}
                  />
                )}
              />
            </Box>
            <Box sx={{ flex: "1 1 48%" }}>
              <Controller
                name="businessPostcode"
                control={control}
                rules={{
                  required: "Business Postcode is required",
                  pattern: {
                    value: /^[0-9]{4}$/,
                    message: "Invalid Australian postcode.",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Business Postcode *" // Added asterisk
                    error={!!errors.businessPostcode}
                    helperText={errors.businessPostcode?.message}
                  />
                )}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Controller
                name="operatingSouthAustralia"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} />}
                    label="Is your company operating in South Australia?"
                  />
                )}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography variant="h6">
                Which service are you interested in?
              </Typography>
              <FormGroup row>
                {servicesList.map(({ label, value }) => (
                  <FormControlLabel
                    key={value}
                    control={
                      <Controller
                        name="services"
                        control={control}
                        render={({ field }) => (
                          <Checkbox
                            checked={field.value.includes(value)}
                            onChange={() => {
                              const newServices = field.value.includes(value)
                                ? field.value.filter((s) => s !== value)
                                : [...field.value, value];
                              field.onChange(newServices);
                            }}
                          />
                        )}
                      />
                    }
                    label={label}
                  />
                ))}
              </FormGroup>
            </Box>

            <Box sx={{ width: "100%" }}>
              <InfoIcon sx={{ color: "#1976d2", marginRight: 1 }} />
              <Typography variant="body1" sx={{ color: "#1976d2", marginBottom: 2}}>
                Please share details about your uniform needs, including the
                number of wearers, delivery frequency, and any specific
                preferences.
              </Typography>

              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    rows={6}
                    label="Message"
                  />
                )}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Controller
                name="newsletter"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox {...field} />}
                    label="Keep me up to date with Angelica Uniforms news"
                  />
                )}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Box className={styles.captchaBox}>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                />
                {recaptchaError && (
                  <Typography color="error" variant="body2">
                    Please complete the CAPTCHA.
                  </Typography>
                )}
              </Box>
            </Box>

            <Box sx={{ width: "100%" }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Submit"}
              </Button>
            </Box>
          </Box>

          {/* Render the SuccessModal */}
          <SuccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </form>
      </div>
    </div>
  );
};

export default ContactForms;
