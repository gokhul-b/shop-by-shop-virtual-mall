import Navbar from "../components/Navbar";
import SearchIcon from "../assets/icons/search-icon.svg";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

const ParticularShop = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center py-16 text-4xl">
        Welcome to <strong>Aasai Cashews!</strong>
      </h1>
      <div className="w-full flex justify-center">
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
      <ProductList />
      <Footer />
    </div>
  );
};

export default ParticularShop;
