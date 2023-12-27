// components/HeroSection.tsx
import React from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link  from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
    return (
      <div className="hero-container bg-cover bg-no-repeat bg-center h-screen w-full flex items-center justify-center" style={{ backgroundImage: `url('/hero.jpeg')` }}>
            {/* Flex container for content distribution */}
            <div className="flex flex-col justify-end h-full w-full mb-24 md:px-24 lg:px-36">
            {/* Container for h1 and h2 */}
                <h1 className="heroSectionTitle sm:pt-16 text-white text-5xl lg:text-6xl font-bold">Revolutionizing Spaces</h1>
                <h2 className="heroSectionSubTitle text-white text-4xl lg:text-5xl font-semibold mt-4">with Premium Sound Solutions</h2>
                <h3 className="HeroCTAbutton text-white text-xl mb-4">Unveiling seven new distinctive colors</h3>
                <div className="heroSectionButtons flex flex-row justify-between">
                    <button className="bg-black text-white font-semibold py-2 px-4 border border-black rounded-full">
                    see the color revolution</button>
                    <div className="carouselButtons flex flex-row">
                        <button className="text-white bg-black bg-opacity-50 w-16 h-16 flex items-center justify-center rounded-full mr-2">
                                <FontAwesomeIcon icon={faArrowLeft} size="sm" /> </button>
                        <button className="text-white bg-black bg-opacity-50 w-16 h-16 flex items-center justify-center rounded-full">
                            <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
        </div>  
    </div>
  );
};

export default HeroSection;
