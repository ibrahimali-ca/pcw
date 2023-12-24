// app/page.tsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SolutionsSection from '../components/SolutionsSection';
import DiscoverSolutionsSection from '../components/DiscoverSolutionsSection';

const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* Rest of the homepage content */}
      <SolutionsSection />
      <DiscoverSolutionsSection />
    </div>
  );
};

export default Page;