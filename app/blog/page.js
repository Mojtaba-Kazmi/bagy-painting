import { getPostsByCategory } from "@/utils/posts";
import { getUniqueCategories } from "@/utils/getUniqueCategories";
import AllBlogPosts from "@/components/blog/AllBlogPosts";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Adelaide Painting Blog | Tips and Guides | Bagy Painting",
  description:
    "Practical painting tips, project ideas, and guides from Bagy Painting in Adelaide — commercial, interior, exterior, and restoration insights.",
  pathname: "/blog",
});

export default async function BlogPage({ searchParams }) {
  // ✅ Must await searchParams in async Server Components (Next.js App Router)
  const sp = await searchParams;
  const rawCategory = sp?.category ?? "All";
  const category = typeof rawCategory === "string" && rawCategory.trim() !== "" ? rawCategory : "All";

  const pageParam = sp?.page;
  const page = Number.isInteger(Number(pageParam)) ? parseInt(pageParam, 10) : 1;

  const POSTS_PER_PAGE = 9;

  // Fetch posts
  const allPosts = await getPostsByCategory(); // unfiltered for categories list
  const categories = getUniqueCategories(allPosts);

  const filteredPosts = await getPostsByCategory(category); // filtered for chosen category

  // Pagination (guard against out-of-range pages)
  const totalPosts = filteredPosts.length;
  const pageCount = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));
  const safePage = Math.min(Math.max(page, 1), pageCount);

  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE
  );

  return (
    <section>
      <AllBlogPosts
        paginatedPosts={paginatedPosts}
        page={safePage}
        pageCount={pageCount}
        allPosts={filteredPosts}
        categories={categories}
        category={category}
      />
    </section>
  );
}