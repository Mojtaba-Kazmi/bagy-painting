// components/reviews/GoogleReviews.js
"use client";

import { useEffect, useState } from "react";
import styles from "./GoogleReviews.module.css";
import StarRating from "./StarRating";
import SectionHeader from "../section-header/SectionHeader";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "";
  const reviewsUrl = placeId
    ? `https://search.google.com/local/reviews?placeid=${encodeURIComponent(
        placeId
      )}`
    : `https://www.google.com/maps/search/?api=1&query=Bagy+Painting+Adelaide`;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/reviews");
        const list = await res.json();
        if (!cancelled && Array.isArray(list)) {
          setReviews(list); // show all returned (Google returns up to 5)
        }
      } catch {
        if (!cancelled) setReviews([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const placeholderImage = "https://placehold.co/80x80?text=%20";

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
              description="See what our customers say about Bagy Painting."
            />
          </header>

          {loading ? (
            <p>Loading reviews…</p>
          ) : (
            <div className={styles.testimonialsGrid}>
              {reviews.length === 0 ? (
                <p>No reviews available right now.</p>
              ) : (
                reviews.map((review) => (
                  <article
                    key={
                      review?.time || review?.author_url || review?.author_name
                    }
                    className={styles.testimonialCard}
                  >
                    <header className={styles.testimonialHeader}>
                      <h3 className={styles.companyName}>
                        {review?.author_name || "Google user"}
                      </h3>
                      {review?.text && (
                        <p className={styles.testimonialText}>{review.text}</p>
                      )}
                    </header>

                    <div className={styles.clientInfo}>
                      <img
                        src={review?.profile_photo_url || placeholderImage}
                        alt={
                          (review?.author_name || "Customer") + " profile photo"
                        }
                        className={styles.clientImage}
                        width={50}
                        height={50}
                        loading="lazy"
                      />
                      <div>
                        <p className={styles.clientName}>
                          {review?.author_name || "Customer"}
                        </p>
                        <StarRating rating={Number(review?.rating) || 0} />
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          )}

          <div className={styles.viewMore}>
            <a
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewMoreButton}
              aria-label="View more Google reviews for Bagy Painting"
            >
              View more reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
