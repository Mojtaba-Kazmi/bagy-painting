"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"; // Import useState for managing dropdown visibility
import styles from "./AllBlogPosts.module.css";
import PageHeader from "../page-header/PageHeader";

export default function AllBlogPosts({
  paginatedPosts,
  page,
  pageCount,
  categories, // Updated to accept unique categories from the parent
  category,
}) {
  const router = useRouter();

  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (newPage) => {
    router.push(`/blog?page=${newPage}&category=${category}`);
  };

  // Handle category change and redirect to the selected category
  const handleCategoryChange = (selectedCategory) => {
    router.push(`/blog?category=${selectedCategory}`);
    setIsDropdownOpen(false);
  };

  // Toggle dropdown visibility when the button is clicked
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* Page Header with Breadcrumb */}
      <PageHeader
        title="Painters in Adelaide South Australia"
        description="At Bagy Painting, we provide expert painting services throughout Adelaide. Specializing in residential, commercial, and unique finishes, our skilled team delivers top-quality results with a focus on precision, care, and customer satisfaction."
        breadcrumb="Blog Page"
      />

      <section aria-labelledby="blog-posts" className={styles.container}>
        <div className={styles.wrapper}>
          {/* Custom Dropdown for Category Filter */}
          <div className={styles.dropdown}>
            <button
              className={styles.dropdownButton}
              onClick={toggleDropdown} // Toggle the dropdown visibility
            >
              {category || "All"}
              <span className={styles.arrow}>⌄</span>
            </button>

            {/* Dropdown menu showing all categories */}
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {categories.map(
                  (
                    cat // Use precomputed unique categories
                  ) => (
                    <button
                      key={cat}
                      className={styles.dropdownItem}
                      onClick={() => handleCategoryChange(cat)}
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Display selected category below dropdown */}
          {category && (
            <div className={styles.selectedCategory}>
              <strong>{category}</strong>
            </div>
          )}

          <div className={styles.postsGrid}>
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post) => (
                <article
                  key={post.filename}
                  className={styles.article}
                  itemScope
                  itemType="http://schema.org/BlogPosting"
                >
                  <header>
                    <Link href={`/blog/${post.filename}`}>
                      <img
                        src={post.thumbnail}
                        alt={`Thumbnail for ${post.title}`}
                        width={800}
                        height={500}
                        className={styles.thumbnail}
                        loading="lazy"
                        itemProp="image"
                      />
                    </Link>
                  </header>
                  <div className={styles.articleContent}>
                    <h2 itemProp="headline">
                      <Link href={`/blog/${post.filename}`}>{post.title}</Link>
                    </h2>
                    <p>
                      Published on{" "}
                      <time
                        dateTime={new Date(post.date).toISOString()}
                        itemProp="datePublished"
                      >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>{" "}
                      by <span itemProp="author">{post.author}</span>
                    </p>
                    <p itemProp="description">{post.description}</p>
                    <Link href={`/blog/${post.filename}`}>
                      Continue Reading
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <p>No blog posts available.</p>
            )}
          </div>

          {/* Pagination Controls */}
          <nav className={styles.pagination} aria-label="Blog pagination">
            {[...Array(pageCount)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleChange(index + 1)}
                disabled={page === index + 1}
                aria-label={`Go to page ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}
