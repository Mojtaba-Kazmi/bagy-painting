import fs from "fs/promises"; // Use fs.promises for async file operations
import path from "path";
import matter from "gray-matter";

// Directory containing blog posts
const postsDirectory = path.join(process.cwd(), "content/markdown/blogposts");

// Utility to fetch all blog data asynchronously
async function fetchAllBlogs() {
  const filenames = await fs.readdir(postsDirectory); // Async readdir

  // Read files asynchronously using map with async/await
  const blogPromises = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = await fs.readFile(filePath, "utf8"); // Async readFile
    const { data, content } = matter(fileContents);
    return {
      slug: filename.replace(".md", ""),
      title: data.title || "Untitled Blog",
      date: data.date || null,
      author: data.author || "Unknown",
      category: data.category || "General",
      thumbnail: data.thumbnail || null,
      description: data.description || null,
      content,
    };
  });

  // Wait for all promises to resolve
  return await Promise.all(blogPromises);
}

// Fetch paths for static generation
export async function generateStaticParams() {
  const blogs = await fetchAllBlogs(); // Await the async function
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Fetch metadata for SEO
export async function generateMetadata({ params }) {
  const blogs = await fetchAllBlogs(); // Await the async function
  const blog = blogs.find((post) => post.slug === params.slug);

  if (!blog) {
    throw new Error(`Blog with slug "${params.slug}" not found.`);
  }

  return {
    title: blog.title,
    description: blog.description || `Learn more about ${blog.title}.`,
    openGraph: {
      title: blog.title,
      description: blog.description || `Learn more about ${blog.title}.`,
    },
  };
}

// Fetch blog data and related articles
export async function getBlogData(slug) {
  const blogs = await fetchAllBlogs(); // Await the async function

  // Find the requested blog
  const blogPost = blogs.find((blog) => blog.slug === slug);

  if (!blogPost) {
    throw new Error(`Blog with slug "${slug}" not found.`);
  }

  // Get related blogs (same category, exclude the current one)
  const relatedBlogs = blogs
    .filter((blog) => blog.category === blogPost.category && blog.slug !== slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, newest first
    .slice(0, 2); // Limit to 4 related blogs

  return { blog: blogPost, relatedBlogs };
}