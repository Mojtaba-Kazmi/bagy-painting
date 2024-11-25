import BlogDetail from "@/components/blog/BlogDetail";
import { getBlogData } from "@/utils/blogUtils/getBlogData";

export default async function BlogPostDetailPage({ params }) {
  const { blog, relatedBlogs } = await getBlogData(params.slug);

  return <BlogDetail blog={blog} relatedBlogs={relatedBlogs} />;
}