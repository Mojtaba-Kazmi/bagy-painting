import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define initial directories and add more as needed
const directories = ["content/about", "content/services", "content/gallery"];

let cachedContent = null; // To cache the content

/**
 * Fetches all markdown content asynchronously and caches it for efficiency
 */
export const getAllMarkdownContent = async () => {
  if (cachedContent) return cachedContent; // Return cached content if available

  const allContent = {};

  // Iterate through directories asynchronously
  for (const directory of directories) {
    const dirPath = path.join(process.cwd(), directory);

    // Ensure directory exists
    if (!fs.existsSync(dirPath)) {
      console.warn(`Directory does not exist: ${dirPath}`);
      continue;
    }

    const files = await fs.promises.readdir(dirPath);
    const markdownFiles = files.filter((file) => file.endsWith(".md"));

    if (markdownFiles.length === 0) {
      console.warn(`No markdown files found in directory: ${dirPath}`);
      continue;
    }

    allContent[directory] = {};

    // Process each markdown file asynchronously
    for (const fileName of markdownFiles) {
      const filePath = path.join(dirPath, fileName);
      const fileContent = await fs.promises.readFile(filePath, "utf8");
      const { content, data } = matter(fileContent);

      const fileKey = fileName.replace(".md", "");

      allContent[directory][fileKey] = {
        content,
        frontmatter: data,
      };
    }
  }

  cachedContent = allContent; // Cache the content

  return allContent;
};
