import React from "react";
import ServiceCard from "./ServiceCard";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
];
const description =
  "Professional real estate photography to help your properties stand out. We highlight your space’s best features with bright, inviting images.";
const features = [
  "Wide-angle property shots",
  "Aerial (drone) views",
  "High dynamic range",
  "Fast turnaround",
];

const RealEstate = () => (
  <ServiceCard
    title="Real Estate Photography"
    subtitle="Showcase your property"
    description={description}
    images={images}
    features={features}
  />
);

export default RealEstate;
