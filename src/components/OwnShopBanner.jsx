import StoreImg from "../assets/img/banner-build-shop/build-shop.png";
const OwnShopBanner = () => {
  return (
    <div className="relative my-48">
      <div className="bg-[#d9eefd] text-white text-center mx-24 my-10 rounded-2xl py-10 px-28 ">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">
            Build Your Own Shop
          </h2>
          <p className="text-md mb-4 text-gray-700">
            Showcase your unique products and connect with customers.
          </p>
          <a
            href="/buildyourshop"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="absolute top-[-150px] left-[960px]">
        <img src={StoreImg} alt="" />
      </div>
    </div>
  );
};

export default OwnShopBanner;
