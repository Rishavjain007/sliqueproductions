import React from "react";
import ServiceCard from "./ServiceCard";
import { useTheme } from "../hooks/useTheme";

const description =
  "We create adorable, heartfelt baby photos that families cherish forever. Our friendly team ensures a safe and comfortable atmosphere for your little one.";

const features = [
  "Creative baby props",
  "Family & sibling portraits",
  "Home & studio sessions",
  "Safe & gentle process",
];

// Example images for Baby Shoot
const babyShootImages = [
  "https://meghnarathorephotography.com/wp-content/uploads/2023/03/meghna-rathore-photography-gurgaon-best-baby-photographer-3-month-4-month-baby-photoshoot.jpg",
  "https://editaphotography.in/wp-content/uploads/2024/03/Baby_photo_shoot_Pune_03-1.jpg",
  "https://editaphotography.in/wp-content/uploads/2024/03/Baby_photo_shoot_Pune_11-thegem-gallery-masonry.jpg",
];

const BabyShoot = () => {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme.bg }}>
      <ServiceCard
        title="Baby Shoot"
        subtitle="Capture the littlest smiles"
        description={description}
        images={babyShootImages}
        features={features}
      />
    </div>
  );
};

export default BabyShoot;
