import React from "react";
import ServiceCard from "./ServiceCard";

const images = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
];
const description =
  "From candid moments to grand celebrations, our wedding photography captures the true essence of your special day. We blend creative storytelling with timeless elegance, ensuring each memory is preserved forever.";
const features = [
  "Candid and traditional shots",
  "Full-day coverage",
  "Bride & groom portraits",
  "High-res album delivery",
];

const Wedding = () => (
  <ServiceCard
    title="Wedding Photography"
    subtitle="Celebrate your love story"
    description={description}
    images={images}
    features={features}
  />
);

export default Wedding;
