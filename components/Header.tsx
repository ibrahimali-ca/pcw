// components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="logo">
          <h1 className="text-xl font-bold">SoundWeave</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-4">
            <li><a href="#home" className="hover:text-gray-300">Products</a></li>
            <li><a href="#resources" className="hover:text-gray-300">Resources</a></li>
            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
          </ul>
        </nav>

        {/* Search and Additional Link */}
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search..." className="px-2 py-1 rounded text-gray-800" />
          <a href="#contact" className="hover:text-gray-300">Contact Us</a>
        </div>

      </div>
    </header>
  );
};

export default Header;