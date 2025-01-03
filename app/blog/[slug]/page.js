import BlogDetail from "@/components/blog/BlogDetail";
import { getBlogData } from "@/utils/blogUtils/getBlogData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { blog } = await getBlogData(slug);

  // Prioritize `excerpt` for meta description and fallback to a default value
  const description = blog.excerpt;
  const imageUrl = blog.thumbnail
  ? `${blog.thumbnail}`
  : "https://cdn-ilabcdh.nitrocdn.com/VMExtHjSOgwlYoVxRcJmxhEOXjOSEEKd/assets/images/optimized/rev-d9d5e4c/bagypainting.com.au/wp-content/uploads/2024/02/Bagy_Logo-1536x238.png";

  // Return metadata structure for SEO & Open Graph
  return {
    title: `${blog.title} | Bagy Painting`,
    description,
    openGraph: {
      title: blog.title,
      description,
      url: `https://www.bagypainting.com.au/blog/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Cover image for the blog: ${blog.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Bagy Painting`,
      description,
      image: imageUrl,
    },
  };
}

export default async function BlogPostDetailPage({ params }) {
  
  const awaitedParams = await params;
  const { slug } = awaitedParams;

  const { blog, relatedBlogs } = await getBlogData(slug);

  return <BlogDetail blog={blog} relatedBlogs={relatedBlogs} />;
}