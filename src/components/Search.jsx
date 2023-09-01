import SearchIcon from "../assets/icons/search-icon.svg";
const Search = () => {
  return (
    <div className="mx-auto bg-indigo-500 px-10 py-14">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-white font-sans font-bold text-2xl mb-4">
            All the shops at one place
          </h1>
          <h1 className="text-white font-normal font-sans text-lg mb-6">
            Discover and acquire top-notch products from premier shops!
          </h1>
        </div>
        <form action="">
          <div className="w-[600px] bg-white relative h-10 text-gray-600 border rounded-md">
            <input
              type="search"
              name="search"
              placeholder="Search shop, product, etc.,"
              className="w-full h-9 px-5 pr-10 text-sm rounded-md focus:outline-none"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <img src={SearchIcon} className="w-4 h-4" alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
