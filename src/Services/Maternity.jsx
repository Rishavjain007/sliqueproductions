import React from "react";
import ServiceCard from "./ServiceCard";

const images = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
];
const description =
  "Celebrate motherhood and the beauty of new beginnings. Our maternity shoots are graceful, relaxed, and tailored to your comfort.";
const features = [
  "Elegant poses & gowns",
  "Outdoor & indoor options",
  "Partner & family shots",
  "Memorable keepsakes"
];

const Maternity = () => (
  <ServiceCard
    title="Maternity Photography"
    subtitle="Cherish the anticipation"
    description={description}
    images={images}
    features={features}
  />
);

export default Maternity;