// components/StarRating.js
import styles from "./Testimonials.module.css";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className={styles.starRating}>
      {Array.from({ length: totalStars }, (_, index) => (
        <span key={index}>{index < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

export default StarRating;
