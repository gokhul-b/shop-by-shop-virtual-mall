import { useNavigate } from "react-router-dom";
import Rating from "./Rating";

const ShopCard = () => {
  const navigate = useNavigate();

  const handleEnterShop = () => {
    navigate("/shop");
  };

  return (
    <div className="mx-52 space-y-4">
      <div className="flex flex-col border px-8 py-6 space-y-4 shadow">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Aasai Cashews</h1>
          <Rating />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-md text-gray-500">
            <strong>Location:</strong> Chennai
          </p>
          <p className="text-md text-gray-500">
            <strong>Contact:</strong> +91 8939841881
          </p>
          <button
            className="border px-2 py-1 bg-black text-sm text-white rounded-lg"
            onClick={handleEnterShop}
          >
            Enter Shop
          </button>
        </div>
      </div>
      <div className="flex flex-col border px-8 py-6 space-y-4 shadow">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Naveen Cashews</h1>
          <Rating />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-md text-gray-500">
            <strong>Location:</strong> Chennai
          </p>
          <p className="text-md text-gray-500">
            <strong>Contact:</strong> +91 8939841881
          </p>
          <button className="border px-2 py-1 bg-black text-sm text-white rounded-lg">
            Enter Shop
          </button>
        </div>
      </div>
      <div className="flex flex-col border px-8 py-6 space-y-4 shadow">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Premium Cashews</h1>
          <Rating />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-md text-gray-500">
            <strong>Location:</strong> Chennai
          </p>
          <p className="text-md text-gray-500">
            <strong>Contact:</strong> +91 8939841881
          </p>
          <button className="border px-2 py-1 bg-black text-sm text-white rounded-lg">
            Enter Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
