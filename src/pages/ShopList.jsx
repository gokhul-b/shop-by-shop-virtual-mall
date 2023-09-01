import Navbar from "../components/Navbar";
import ShopCard from "../components/ShopCard";
import ShopListHeader from "../components/ShopListHeader";

const ShopList = () => {
  return (
    <div>
      <Navbar />
      <ShopListHeader />
      <ShopCard />
    </div>
  );
};

export default ShopList;
