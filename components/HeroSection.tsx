// components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-container bg-cover bg-no-repeat bg-center h-screen w-full" style={{ backgroundImage: `url('/hero.jpeg')` }}>
        {/* Container for h1 and h2 */}
        <div className="absolute top-1/3 w-full text-left pl-12 md:pl-24 lg:pl-36">
            <h1 className="text-white text-5xl lg:text-6xl font-bold">Revolutionizing Spaces</h1>
            <h2 className="text-white text-4xl lg:text-5xl font-semibold mt-4">with Premium Sound Solutions</h2>
        </div>
        {/* Container for h3 and buttons */}
        <div className="absolute bottom-0 w-full flex justify-center py-8">
            <div className="text-center">
                <h3 className="text-white text-xl mb-4">Unveiling seven new distinctive colors</h3>
                <button className="bg-black text-white font-semibold py-2 px-4 border border-black rounded">
                    see the color revolution
                </button>
            </div>
        </div>
        
        {/* Navigation buttons */}
        <div className="absolute bottom-0 pb-12 right-5 flex">
            <button className="text-white bg-black bg-opacity-50 px-4 py-2 rounded-full mr-2">
                Back
            </button>
            <button className="text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
                Next
            </button>
        </div>
    </div>
  );
};

export default HeroSection;
