import BuildShopHero from "../components/BuildShopHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShopRegisterForm from "../components/ShopRegisterForm";

const BuildYourShop = () => {
  return (
    <div>
      <Navbar />
      <BuildShopHero />
      <p className="text-center mt-16 text-red-600">
        "Before registering, please note that your shop will undergo a
        verification process by our team. Once successfully verified, you will
        receive an email confirming the completion of the verification."
      </p>
      <ShopRegisterForm />
      <Footer />
    </div>
  );
};

export default BuildYourShop;
