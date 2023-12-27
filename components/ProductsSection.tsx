import Image from 'next/image'

const ProductsSection = () => {
  return (
    <section className="ProductSectionWrapper my-16">
      <h1 className="ProductsSectionTitle text-5xl lg:text-6xl font-bold  sm:px-16 md:px-24 lg:px-36">
        Enhancing environments for life, work, and play.
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="text-[16px] px-[20%] sm:px-0 sm:w-1/3">
          <p>Lorem ipsum</p>
        </div>
        {/* This div will stack the images on top of each other on mobile, and will be next to each other on screens sm or larger */}
        <div className="flex flex-col sm:flex-row w-full justify-center gap-4">
          <div className="flex flex-col items-center">
            <Image
              src="https://source.unsplash.com/random/300x300"
              alt="Solution 1"
              height={300}
              width={300}
              layout="fixed"
            />
            <a href="/product1">Ceilings</a>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://source.unsplash.com/random/300x300"
              alt="Solution 2"
              width={300}
              height={300}
              layout="fixed" // Added layout="fixed" to maintain consistency
            />
            <a href="/product2">Walls</a>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://source.unsplash.com/random/300x300"
              alt="Solution 3"
              width={300}
              height={300}
              layout="fixed" // Added layout="fixed" to maintain consistency
            />
            <a href="/product3">Screens</a>
          </div>
        </div>
        <button className="ProductSectionButton sm:hidden bg-black text-white font-semibold py-2 px-4 border border-black rounded-full">
        see all our products
      </button>
      </div>
    </section>
  );
};

export default ProductsSection;