// app/page.tsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* Rest of the homepage content */}
    </div>
  );
};

export default Page;