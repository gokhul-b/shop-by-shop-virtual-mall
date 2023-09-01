import About from "../components/About";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OwnShopBanner from "../components/OwnShopBanner";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Categories />
      <About />
      <OwnShopBanner />
      <Footer />
    </div>
  );
};

export default Home;
