const ProductsSection = () => {
  return (
    // The section takes up the full viewport height and has a beige background
    <section
      style={{
        height: "100vh",
        backgroundColor: "beige",
        position: "relative",
      }}
    >
      {/* This div takes up 40% of the viewport height and centers its content */}
      <div className="h-[40vh] flex justify-center items-center">
        {/* This is the main heading of the section */}
        <h1 className="text-[32px] pl-[5%]">
          Products
        </h1>
      </div>
      {/* This div is a grid with 3 columns and a gap of 3 */}
      <div className="grid grid-cols-3 gap-3">
        {/* This div spans 1 column */}
        <div className="pl-[20%] col-span-1">
        </div>
        {/* This div spans 3 columns and contains a grid with 3 columns and a gap of 3 */}
      </div>
    </section>
  );
};

export default ProductsSection;
