import FashionIcon from "../assets/img/categories/fashion.png";
import BeautyIcon from "../assets/img/categories/beauty.png";
import GiftIcon from "../assets/img/categories/gifts.png";
import ToyIcon from "../assets/img/categories/toysandgames.png";
import BookIcon from "../assets/img/categories/books.png";
import DecorIcon from "../assets/img/categories/homedecor.png";
import FoodIcon from "../assets/img/categories/dry-fruits.png";
import CraftIcon from "../assets/img/categories/arts&crafts.png";

const Categories = () => {
  return (
    <div className="mx-auto py-14">
      <div className="mx-16">
        <div className="text-center pt-8">
          <h1 className="font-bold text-3xl text-gray-600 mb-4">
            <strong className="text-indigo-500">Explore</strong> trending
            categories on ShopByShop
          </h1>
          <h1 className="text-gray-500">
            Check what’s popular on ShopByShop and make your day look trendy and
            professional.
          </h1>
          <div className="w-full flex flex-col justify-center my-32">
            <ul className="w-[750px] flex flex-wrap justify-center gap-14 mx-auto">
              <li className="w-[120px] h-[150px] hover:bg-tropicalIndigo border rounded-xl bg-periWinkle px-4 py-6">
                <a href="/shoplist">
                  <div className="flex flex-col items-center">
                    <img
                      src={FoodIcon}
                      alt=""
                      className="w-60 h-auto object-contain"
                    />
                    <p className="mt-1">Dry Fruits</p>
                  </div>
                </a>
              </li>
              <li className="w-[120px] h-[150px] hover:bg-tropicalIndigo border rounded-xl bg-periWinkle px-4 py-6">
                <a href="/shop">
                  <div className="flex flex-col items-center">
                    <img
                      src={FashionIcon}
                      alt=""
                      className="w-60 h-auto object-contain"
                    />
                    <p className="mt-1">Fashion</p>
                  </div>
                </a>
              </li>
              <li className="w-[120px] h-[150px] hover:bg-tropicalIndigo border rounded-xl bg-periWinkle px-4 py-6">
                <a href="/shop">
                  <div className="flex flex-col items-center">
                    <img
                      src={BeautyIcon}
                      alt=""
                      className="w-60 h-auto object-contain"
                    />
                    <p className="mt-1">Beauty</p>
                  </div>
                </a>
              </li>
              <li className="w-[120px] h-[150px] hover:bg-tropicalIndigo border rounded-xl bg-periWinkle px-4 py-6">
                <a href="/shop">
                  <div className="flex flex-col items-center">
                    <img
                      src={GiftIcon}
                      alt=""
                      className="w-60 h-auto object-contain"
                    />
                    <p className="mt-1">Gifts</p>
                  </div>
                </a>
              </li>
              <li className="w-[120px] h-[150px] hover:bg-tropicalIndigo border rounded-xl bg-periWinkle px-4 py-6">
                <a href="/shop">
                  <div className="flex flex-col items-center">
                    <img
                      src={ToyIcon}
                      alt=""
                      className="w-60 h-auto object-contain"
                    />
                    <p className="mt-1">Toys</p>
                  </div>
                </a>
              </li>
              <li className="w-[120px] h-[150px] hover:bg-tropicalIndigo border rounded-xl bg-periWinkle px-4 py-6">
                <a href="/shop">
                  <div className="flex flex-col items-center">
                    <img
                      src={BookIcon}
                      alt=""
                      className="w-60 h-auto object-contain"
                    />
                    <p className="mt-1">Book</p>
                  </div>
                </a>
              </li>
              <li className="w-[120px] h-[150px] hover:bg-tropicalIndigo border rounded-xl bg-periWinkle px-4 py-6">
                <a href="/shop">
                  <div className="flex flex-col items-center">
                    <img
                      src={DecorIcon}
                      alt=""
                      className="w-60 h-auto object-contain"
                    />
                    <p className="mt-1">Decore</p>
                  </div>
                </a>
              </li>
              <li className="w-[120px] h-[150px] hover:bg-tropicalIndigo border rounded-xl bg-periWinkle px-4 py-6">
                <a href="/shop">
                  <div className="flex flex-col items-center">
                    <img
                      src={CraftIcon}
                      alt=""
                      className="w-60 h-auto object-contain"
                    />
                    <p className="mt-1">Crafts</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
