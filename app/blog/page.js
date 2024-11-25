import { getPostsByCategory} from "@/utils/posts";
import { getUniqueCategories } from "@/utils/getUniqueCategories";
import AllBlogPosts from "@/components/blog/AllBlogPosts";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export async function generateMetadata() {
  return generatePageMetadata({
    title: "Painters in Adelaide South Australia - House & Commercial",
    description: "Bagy Painting provides house, commercial, and specialty finishes across Adelaide. Our skilled team delivers top-quality results. Get your free quote today!",
  });
}

export default async function BlogPage({ searchParams }) {
  const category = searchParams.category || "All"; // Default category is "All"
  const page = parseInt(searchParams.page) || 1; // Default page is 1
  const POSTS_PER_PAGE = 8;

  // Fetch all posts for category filtering
  const allPosts = await getPostsByCategory(); // Get all posts first
  const categories = getUniqueCategories(allPosts); // Extract unique categories
  const posts = await getPostsByCategory(category); // Get filtered posts for the selected category

  // Pagination logic
  const totalPosts = posts.length;
  const pageCount = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <section>
      {/* Pass data to AllBlogPosts */}
      <AllBlogPosts
        paginatedPosts={paginatedPosts}
        page={page}
        pageCount={pageCount}
        allPosts={posts} // Filtered posts
        categories={categories} // Unique categories
        category={category}
      />
    </section>
  );
}