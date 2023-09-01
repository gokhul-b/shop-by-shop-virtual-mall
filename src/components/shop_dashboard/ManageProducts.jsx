import { useEffect, useState } from "react";
import AddProduct from "../../pages/AddProduct";
import axios from "axios";

const ManageProducts = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3004/products";
    const fetchProducts = async () => {
      try {
        const response = await axios.get(url);
        setMyProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className="w-full mb-16">
      <div className="w-[150px] h-[175px] border hover:border-blue-900 flex items-center justify-center shadow-sm">
        <button
          className="flex flex-col items-center justify-center"
          onClick={togglePopup}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          <p className="mt-2">Add product</p>
        </button>
      </div>
      {isPopupOpen && <AddProduct onClose={togglePopup} />}
      <div className="my-8">
        <ul className="flex flex-wrap">
          {myProducts.map((product, index) => {
            return (
              <li key={index}>
                <div className="w-[150px] h-[220px] items-center bg-gray-100 flex flex-col border mr-6">
                  <img src={product.images} alt="" />
                  <div className="flex space-x-3 mt-2">
                    <h1>{product.name}</h1>
                    <h1>₹{product.price}</h1>
                  </div>
                  <button className="bg-blue-900 px-2 py-1 mt-1 rounded-md text-white text-xs">
                    Update
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ManageProducts;
