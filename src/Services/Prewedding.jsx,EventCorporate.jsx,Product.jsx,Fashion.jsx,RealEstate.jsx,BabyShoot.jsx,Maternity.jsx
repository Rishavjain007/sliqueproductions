import React from "react";
import ServiceCard from "./ServiceCard";

const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
];
const description =
  "Our prewedding shoots are about fun, romance, and capturing your chemistry in beautiful locations. We help you create memories before the big day with creative concepts and natural poses.";
const features = [
  "Unique concepts & themes",
  "Outdoor and indoor locations",
  "Cinematic short films",
  "Styling & guidance",
];

const Prewedding = () => (
  <ServiceCard
    title="Prewedding Photography"
    subtitle="Cherish your journey together"
    description={description}
    images={images}
    features={features}
  />
);

export default Prewedding;
