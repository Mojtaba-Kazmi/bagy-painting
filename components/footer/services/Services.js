import Link from "next/link";
import servicesData from "@/content/data/footer/services/services.json";  // Import from JSON file
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.section}>
      <h2>Service Areas in Adelaide</h2>
      <ul>
        {servicesData.map((service, index) => (
          <li key={index}>
            <p>{service.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;