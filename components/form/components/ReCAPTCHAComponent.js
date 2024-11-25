import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./ReCAPTCHAComponent.module.css";

const ReCAPTCHAComponent = ({ handleRecaptchaChange, recaptchaToken, recaptchaError }) => (
  <div className={styles.captchaBox}>
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      onChange={handleRecaptchaChange}
    />
    {recaptchaError && (
      <span className={styles.errorText}>
        {recaptchaToken ? "Please verify CAPTCHA" : "Please complete CAPTCHA"}
      </span>
    )}
  </div>
);

export default ReCAPTCHAComponent;
