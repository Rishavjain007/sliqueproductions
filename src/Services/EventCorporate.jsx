import React from "react";
import ServiceCard from "./ServiceCard";

const images = [
  "https://images.unsplash.com/photo-1515168833906-1e1e2fdb184b?auto=format&fit=crop&w=800&q=80"
];
const description =
  "We capture the energy of your events—be it corporate meetings, parties, or launches. Our team ensures all key moments and candid interactions are beautifully documented.";
const features = [
  "On-site event coverage",
  "Corporate headshots",
  "Editing & fast delivery",
  "All event scales"
];

const EventCorporate = () => (
  <ServiceCard
    title="Event & Corporate Photography"
    subtitle="Document your milestones"
    description={description}
    images={images}
    features={features}
  />
);

export default EventCorporate;