import React from "react";
import ServiceCard from "./ServiceCard";

const images = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
];
const description =
  "We work with models and designers to create stunning fashion photography. From lookbooks to editorial, we bring a creative vision to every shoot.";
const features = [
  "Lookbooks & campaigns",
  "Editorial shoots",
  "On-location or studio",
  "Model direction",
];

const Fashion = () => (
  <ServiceCard
    title="Fashion Photography"
    subtitle="Make a bold statement"
    description={description}
    images={images}
    features={features}
  />
);

export default Fashion;
