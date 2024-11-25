import React from "react";
import { Controller } from "react-hook-form";
import styles from "./FormField.module.css";

const autocompleteValues = {
  fullName: "name",
  suburb: "address-level2",
  email: "email",
  contactNumber: "tel",
  message: "off",
};

const FormField = ({
  name,
  label,
  type = "text",
  control,
  errors,
  placeholder = "",
  validation = {},
}) => {
  // Set autocomplete value based on the field name
  const autocompleteValue = autocompleteValues[name] || "off";

  return (
    <div className={styles.formField}>
      <Controller
        name={name}
        control={control}
        rules={{ required: `${label} is required`,
        ...validation,
       }}
        render={({ field }) => (
          <>
            {type === "textarea" ? (
              <textarea
                {...field}
                className={`${styles.input} ${styles.textareaField}`}
                placeholder={placeholder}
                id={name}
                name={name}
                autoComplete={autocompleteValue}
              />
            ) : (
              <input
                {...field}
                type={type}
                className={styles.input}
                placeholder={placeholder}
                id={name}
                name={name}
                autoComplete={autocompleteValue}
              />
            )}
            <label htmlFor={name} className={styles.label}>
              {label} *
            </label>
          </>
        )}
      />
      {errors[name] && (
        <span className={styles.errorText}>{errors[name].message}</span>
      )}
    </div>
  );
};

export default FormField;
