const SolutionsSection = () => {
  return (
    <div className="flex justify-between items-center bg-white px-4 py-2 w-full pt-24 pb-40 pl-12 pr-12 box-border text-base leading-7 font-medium text-gray-900">
      <div className="flex-1"></div>
      <div className="flex-1 flex flex-col items-center">
        <h2 className="text-6xl font-bold">Products</h2>
        <button className="text-lg font-semibold py-2 px-4 rounded-md border border-gray-300 shadow-sm">
          Discover our products
        </button>
      </div>
      <div className="flex-1 flex justify-end">
        <button className="bg-black text-white p-4 rounded-full">
          <span className="text-xl font-bold">+</span>
        </button>
      </div>
    </div>
  );
};

export default SolutionsSection;