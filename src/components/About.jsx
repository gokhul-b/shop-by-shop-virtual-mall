import ManufatureImg from "../assets/img/about/manufacture.png";
import WwwImg from "../assets/img/about/shopbyshop.png";
import EndUserImg from "../assets/img/about/end-user.png";

const About = () => {
  return (
    <div className="w-full h-full mb-[100px]">
      <div className="w-3/4 mx-auto flex flex-col">
        <div className="grid grid-cols-2">
          <div className="">
            <h1 className="text-center text-4xl font-semibold text-glaucous mt-10 mb-8">
              About Us
            </h1>
            <p className=" font-sans text-md font-light text-lg text-glaucous">
              Welcome to <strong>Shop By Shop</strong>, your one-stop
              destination for discovering unique products directly from
              independent creators and small businesses. Our mission is to
              create a platform that connects talented artisans and producers
              with customers who appreciate quality, craftsmanship, and
              originality.
            </p>
          </div>
          <div>
            <img src={ManufatureImg} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <img src={WwwImg} alt="" />
          </div>
          <div className="ml-10">
            <h1 className="text-start text-4xl font-semibold text-glaucous mt-10 mb-8">
              Our Story
            </h1>
            <p className=" font-sans text-md font-light text-lg text-glaucous">
              At <strong>Shop By Shop</strong>, we believe that every product
              has a story to tell. We're passionate about supporting small
              businesses and individual creators who pour their heart and soul
              into their work. Our journey began with the idea of providing a
              space where these makers can showcase their talents and reach a
              wider audience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="">
            <h1 className="text-center text-4xl font-semibold text-glaucous mt-10 mb-8">
              What We Offer
            </h1>
            <p className=" font-sans text-md font-light text-lg text-glaucous">
              We offer a curated collection of products spanning a wide range of
              categories, from fashion and home decor to art and wellness. Our
              platform is designed to provide a seamless and enjoyable shopping
              experience, allowing you to explore unique items that you won't
              find in mainstream retail.
            </p>
          </div>
          <div>
            <img src={EndUserImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
