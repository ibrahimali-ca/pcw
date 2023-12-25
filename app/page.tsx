// app/page.tsx
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SolutionsSection from "../components/SolutionsSection";
import ProductsSection from "../components/ProductsSection";

const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SolutionsSection />
      <ProductsSection />

      {/* Rest of the homepage content */}
    </div>
  );
};

export default Page;
