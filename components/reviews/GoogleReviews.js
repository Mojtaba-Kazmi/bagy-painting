"use client";

import { useEffect, useState } from "react";
import styles from "./GoogleReviews.module.css"; // Reuse existing styles
import StarRating from "./StarRating"; // Star rating component
import SectionHeader from "../section-header/SectionHeader";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.slice(0, 4))) // Display only 4 reviews
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  const placeholderImage = "https://placehold.co/400"; // Default image if no profile pic

  return (
    <section
      className={styles.container}
      aria-labelledby="google-reviews-title"
    >
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <header className={styles.heading}>
            <SectionHeader
              title="Our Google Reviews"
              description="See what our customers are saying about Bagy Painting on Google."
            />
          </header>
          <div className={styles.testimonialsGrid}>
            {reviews.length === 0 ? (
              <p>No reviews available.</p>
            ) : (
              reviews.map((review, index) => (
                <article key={index} className={styles.testimonialCard}>
                  <header className={styles.testimonialHeader}>
                    <h3 className={styles.companyName}>{review.author_name}</h3>
                    <p className={styles.testimonialText}>{review.text}</p>
                  </header>
                  <div className={styles.clientInfo}>
                    <img
                      src={review.profile_photo_url || placeholderImage}
                      alt={review.author_name}
                      className={styles.clientImage}
                      width={50}
                      height={50}
                    />
                    <div>
                      <p className={styles.clientName}>{review.author_name}</p>
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
          {/* View More Reviews Button */}
          <div className={styles.viewMore}>
            <a
              href={`https://www.google.com/search?q=Bagy+Painting+Adelaide&oq=Bagy+Painting+Adelaide#lrd=0x0:${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID},1,,,`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewMoreButton}
            >
              View More Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
