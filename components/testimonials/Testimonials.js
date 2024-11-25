import styles from "./Testimonials.module.css";
import StarRating from "./StarRating";
import { testimonials } from "@/content/data/testimonials/testimonials";
import SectionHeader from "../section-header/SectionHeader";

const Testimonials = () => {
  const placeholderImage = "https://placehold.co/400";

  return (
    <section className={styles.container} aria-labelledby="testimonials-title">
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <header className={styles.heading}>
            <SectionHeader
              title="Our Customers Love Us"
              description="Hear from our satisfied customers about their experiences."
            />
          </header>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <article key={testimonial.id} className={styles.testimonialCard}>
                <header className={styles.testimonialHeader}>
                  <h3 className={styles.companyName}>{testimonial.company}</h3>
                  <p className={styles.testimonialText}>{testimonial.text}</p>
                </header>
                <div className={styles.clientInfo}>
                  {/* <img
                    src={testimonial.imageUrl || placeholderImage}
                    alt={testimonial.altText || "No image available"}
                    className={styles.clientImage}
                    width={100}
                    height={100}
                  /> */}
                  <div>
                    <p className={styles.clientName}>{testimonial.name}</p>
                    <p className={styles.clientPosition}>
                      {testimonial.position}
                    </p>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
