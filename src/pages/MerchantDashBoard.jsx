import DashboardNavbar from "../components/shop_dashboard/DashboardNavbar";
import SideBar from "../components/shop_dashboard/SideBar";
import SearchIcon from "../assets/icons/search-icon.svg";
import ManageProducts from "../components/shop_dashboard/ManageProducts";
const MerchantDashboard = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="w-full my-24">
        <div className="w-3/4 mx-auto border shadow-sm">
          <div className="flex">
            <div className="w-1/4">
              <SideBar />
            </div>
            <div className="w-3/4 px-8">
              <h1 className="text-center font-bold text-lg py-4 text-gray-600">
                Manage Your Products
              </h1>
              <div className="w-full">
                <form action="">
                  <div className="w-[600px] bg-white relative h-10 text-gray-600 border rounded-md">
                    <input
                      type="search"
                      name="search"
                      placeholder="Search shop, product, etc.,"
                      className="w-full h-9 px-5 pr-10 text-sm rounded-md focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 top-0 mt-3 mr-4"
                    >
                      <img src={SearchIcon} className="w-4 h-4" alt="" />
                    </button>
                  </div>
                </form>
              </div>
              <hr className="my-8" />
              <ManageProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;
