// components/SuccessModal.js

import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material"; // Import icon for tick animation
import styles from "./SuccessModal.module.css"; // Create a CSS module for styles

const SuccessModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} className={styles.modal}>
      <Box className={styles.modalContent}>
        <CheckCircle className={styles.tickIcon} />
        <Typography variant="h6" gutterBottom>
          Thank you for submitting!
        </Typography>
        <Typography variant="body2">
          Your message has been sent successfully!
        </Typography>
      </Box>
    </Modal>
  );
};

export default SuccessModal;