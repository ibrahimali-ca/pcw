// components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full text-white">
      <div className="container mx-auto flex justify-between items-center pt-6 p-4">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-xl font-bold">SoundWeave</h1>
        </div>

        {/* Navigation Links for larger screens */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-gray-300">Products</a></li>
            <li><a href="#resources" className="hover:text-gray-300">Resources</a></li>
            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
          </ul>
        </nav>

        {/* Menu Link for smaller screens */}
        <a href="#menu" className="md:hidden hover:text-gray-300">Menu</a> 

        {/* Search and Additional Link */}
        <div className="hidden md:flex items-center space-x-4">
          <input type="text" placeholder="Search..." className="px-2 py-1 rounded text-gray-800" />
          <a href="#contact" className="hover:text-gray-300">Contact Us</a>
        </div>

      </div>
    </header>
  );
};

export default Header;
