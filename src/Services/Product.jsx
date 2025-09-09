import React from "react";
import ServiceCard from "./ServiceCard";

const images = [
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
];
const description =
  "Showcase your products in the best light. Our creative product photography is perfect for catalogs, e-commerce, and advertising, tailored to your brand style.";
const features = [
  "Studio & ambient setups",
  "High-res product shots",
  "Styling & props",
  "E-commerce/Marketplace ready",
];

const Product = () => (
  <ServiceCard
    title="Product Photography"
    subtitle="Boost your brand's appeal"
    description={description}
    images={images}
    features={features}
  />
);

export default Product;
