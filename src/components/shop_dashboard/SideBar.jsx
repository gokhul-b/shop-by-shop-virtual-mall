const SideBar = () => {
  return (
    <div className="w-full">
      <h1 className="text-white mb-4 bg-blue-900 pl-4 py-3 font-bold">Menu</h1>
      <ul className="space-y-3 pb-4">
        <li className="text-gray-600 font-medium hover:bg-blue-900 hover:text-white px-4 py-1">
          Add Product
        </li>
        <li className="text-gray-600 font-medium hover:bg-blue-900 hover:text-white px-4 py-1">
          My Products
        </li>
        <li className="text-gray-600 font-medium hover:bg-blue-900 hover:text-white px-4 py-1">
          Bank Details
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
