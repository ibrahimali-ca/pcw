import React from 'react';
import Link from 'next/link';

// This is the SolutionsSection component
const SolutionsSection = () => {
  return (
    // The section takes up the full viewport height and has a beige background
    <section style={{ height: '100vh', backgroundColor: 'beige', position: 'relative' }}>
      {/* This div takes up 40% of the viewport height and centers its content */}
      <div className="h-[40vh] flex justify-center items-center">
        {/* This is the main heading of the section */}
        <h1 className="text-[32px] pl-[5%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
      </div>
      {/* This div is a grid with 4 columns and a gap of 4 */}
      <div className="grid grid-cols-4 gap-4">
        {/* This div spans 1 column and contains a paragraph of text */}
        <div className="text-[16px] pl-[20%] col-span-1">
          <p> * Lorem ipsum </p>
        </div>
        {/* This div spans 3 columns and contains a grid with 3 columns and a gap of 4 */}
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {/* Each of these divs takes up 80% of the height of their parent, has a gray background, and contains an image and a link */}
          <div style={{ height: '80%', padding: '10% 0', width: '100%', backgroundColor: 'gray' }}>
            <img src="placeholder1.png" alt="Solution 1" style={{ width: '100%' }} />
            <Link href="/product1">Ceilings</Link>
          </div>
          <div style={{ height: '80%', padding: '10% 0', width: '100%', backgroundColor: 'gray' }}>
            <img src="placeholder2.png" alt="Solution 2" style={{ width: '100%' }} />
            <Link href="/product2">Walls</Link>
          </div>
          <div style={{ height: '80%', padding: '10% 0', width: '100%', backgroundColor: 'gray' }}>
            <img src="placeholder3.png" alt="Solution 3" style={{ width: '100%' }} />
            <Link href="/product3">Screens</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;