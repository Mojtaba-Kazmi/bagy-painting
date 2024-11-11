import Link from "next/link";
import servicesData from "../../../content/footer/services/services.json";  // Import from JSON file
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.section}>
      <h2>Services</h2>
      <ul>
        {servicesData.map((service, index) => (
          <li key={index}>
            <Link href={service.link}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;