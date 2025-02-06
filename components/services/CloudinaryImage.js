
"use client"

import { CldImage } from "next-cloudinary";

export default function CloudinaryImage({ publicId, alt }) {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <CldImage
        src={publicId}
        alt={alt}
        width={800} // Set a reasonable default width
        height={450} // Aspect ratio control
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
        style={{borderRadius: '20px', width: "100%", height: "auto", objectFit: "cover" }}
      />
    </div>
  );
}