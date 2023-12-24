// components/DiscoverSolutionsSection.tsx
import React from 'react';

const DiscoverSolutionsSection = () => {
  return (
    <section style={{ height: '33vh', backgroundColor: 'beige', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '33%', textAlign: 'left' }}>
        <h1>Solutions</h1>
        <button style={{ backgroundColor: '#0070f3', color: '#fff', border: 'none', padding: '10px 24px', cursor: 'pointer', borderRadius: '5px' }}>Discover all solutions</button>
      </div>
    </section>
  );
};

export default DiscoverSolutionsSection;