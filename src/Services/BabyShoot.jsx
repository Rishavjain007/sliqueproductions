import React from "react";
import ServiceCard from "./ServiceCard";
import Slider from "../Home Components/Slider";
import AboutCTA from "../About Components/AboutCTA";
import { useTheme } from "../hooks/useTheme";

const images = [
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
];
const description =
  "We create adorable, heartfelt baby photos that families cherish forever. Our friendly team ensures a safe and comfortable atmosphere for your little one.";
const features = [
  "Creative baby props",
  "Family & sibling portraits",
  "Home & studio sessions",
  "Safe & gentle process",
];

const BabyShoot = () => {
  const { theme } = useTheme();
  return (
    <div style={{ background: theme.bg }}>
      <ServiceCard
        title="Baby Shoot"
        subtitle="Capture the littlest smiles"
        description={description}
        images={images}
        features={features}
      />
      <Slider />
      <AboutCTA />
    </div>
  );
};

export default BabyShoot;
