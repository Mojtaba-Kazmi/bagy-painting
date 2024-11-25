"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = ({ privacyPolicyData }) => {
  // Define the order of sections
  const sections = [
    "privacy-intro",
    "privacy-protection",
    "use-of-data",
    "transfer-of-data",
    "disclosure-of-data",
    "security-of-data",
    "links-to-other-sites",
    "children-privacy",
    "changes-to-privacy-policy",
    "contact-us",
  ];

  return (
    <div className={styles.privacyPolicyContainer}>
      <div className={styles.privacyPolicyContent}>
        {sections.map((section) => (
          <ReactMarkdown key={section}>
            {privacyPolicyData[section] || ""}
          </ReactMarkdown>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;