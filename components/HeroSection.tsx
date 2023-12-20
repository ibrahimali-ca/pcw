// components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-container bg-cover bg-no-repeat bg-center h-screen w-full" style={{ backgroundImage: `url('/hero.jpeg')` }}>
      <div className="text-white text-left p-12 absolute" style={{ top: '50%' }}>
        <h1 className="text-4xl font-bold mb-4">Revolutionizing spaces</h1>
        <h1 className="text-4xl font-bold mb-4">with premium sound solutions</h1>
        <p className="text-xl mb-8">Unveiling seven new distinctive colors</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
