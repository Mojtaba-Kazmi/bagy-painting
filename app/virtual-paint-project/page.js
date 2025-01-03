import VisualizeColorIframe from "@/components/iframe/VisualizeColorIframe";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title:
    "Virtual Paint Project - Visualize Your Painting Ideas | Bagy Painting",
  description:
    "Upload your home photo or explore paintable images with Bagy Painting's Virtual Paint Project tool. Visualize your painting ideas and bring them to life with ease!",
  openGraph: {
    title:
      "Virtual Paint Project - Visualize Your Painting Ideas | Bagy Painting",
    description:
      "Transform your ideas into reality with Bagy Painting's Virtual Paint Project. Upload your home photo or browse paintable images to see your vision come to life. Try it today!",
    images: [
      {
        url: "https://cdn-ilabcdh.nitrocdn.com/VMExtHjSOgwlYoVxRcJmxhEOXjOSEEKd/assets/images/optimized/rev-d9d5e4c/bagypainting.com.au/wp-content/uploads/2024/02/Bagy_Logo-1536x238.png",
        width: 1200,
        height: 630,
        alt: "Bagy Painting's Virtual Paint Project tool in action",
      },
    ],
    url: "https://www.bagypainting.com.au/virtual-paint-project",
  },
});

const VirtualPaintProjectPage = () => {
  return <VisualizeColorIframe />;
};

export default VirtualPaintProjectPage;
