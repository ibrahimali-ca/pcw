// app/page.tsx
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SolutionsSection from "../components/SolutionsSection";

const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SolutionsSection />
      {/* Rest of the homepage content */}
    </div>
  );
};

export default Page;
