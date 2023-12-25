// app/page.tsx
import React from "react";
import Link from 'next/link';
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SolutionsSection from "../components/SolutionsSection";
import ProductsSection from "../components/ProductsSection";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductsSection />
      <SolutionsSection />
      <Footer />

      {/* Rest of the homepage content */}
    </div>
  );
};

export default Page;
