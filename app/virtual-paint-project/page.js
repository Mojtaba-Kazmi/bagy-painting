import VisualizeColorIframe from "@/components/iframe/VisualizeColorIframe";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Virtual Paint Project | Visualise Your Colours | Bagy Painting",
  description:
    "Upload a photo and test paint colours online. Preview interior and exterior schemes before you paint. Free tool from Bagy Painting in Adelaide.",
  pathname: "/virtual-paint-project",
  // Optional: override OG image (helper mirrors title/description already)
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/djnoxzm2v/image/upload/v1741749368/Bagy_Logo_copy_fxzgx3.png",
        width: 1200,
        height: 630,
        alt: "Bagy Painting — Virtual Paint Project",
      },
    ],
  },
});

const VirtualPaintProjectPage = () => {
  return <VisualizeColorIframe />;
};

export default VirtualPaintProjectPage;
