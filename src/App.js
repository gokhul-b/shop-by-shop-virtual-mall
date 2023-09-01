import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShopList from "./pages/ShopList";
import ParticularShop from "./pages/ParticularShop";
import About from "./components/About";
import ProductPage from "./pages/Product";
import BuildYourShop from "./pages/BuildYourShop";
import MerchantDashboard from "./pages/MerchantDashBoard";
import AddProduct from "./pages/AddProduct";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoplist" element={<ShopList />} />
        <Route path="/shop" element={<ParticularShop />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/buildyourshop" element={<BuildYourShop />} />
        <Route path="/merchantdashboard" element={<MerchantDashboard />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
