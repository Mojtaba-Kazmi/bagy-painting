"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./PrivacyPolicy.module.css";
import PageHeader from "../page-header/PageHeader";

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
    <>
      <PageHeader
        title="Privacy Policy & Terms"
        description="Review Bagy Painting's Privacy Policy and Terms & Conditions to understand how we handle your data and the terms for using our services."
        breadcrumb="Privacy Policy & Terms"
      />
      <div className={styles.privacyPolicyContainer}>
        <div className={styles.privacyPolicyContent}>
          {sections.map((section) => (
            <ReactMarkdown key={section}>
              {privacyPolicyData[section] || ""}
            </ReactMarkdown>
          ))}
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
