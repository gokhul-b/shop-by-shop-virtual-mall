import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainImg from "../assets/img/specific-product/front.jpg";
import SecondImg from "../assets/img/specific-product/back.jpg";
import ThirdImg from "../assets/img/specific-product/benefits.jpg";
import FourthImg from "../assets/img/specific-product/cashewcup.jpg";
import NewsLetter from "../components/NewsLetter";
// import MainImg from "../assets/img/specific-product/front.jpg";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <section id="prodetails" className="section-p1 my-16">
        <div className="container mx-auto py-8 flex">
          <div className="w-1/2">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-[300px] h-auto">
                <img src={MainImg} alt="" />
              </div>
              <div className="flex space-x-12 mt-8">
                <img
                  src={SecondImg}
                  alt=""
                  className="w-[100px] h-auto object-cover hover:border-2 hover:border-blue-600"
                />
                <img
                  src={ThirdImg}
                  alt=""
                  className="w-[100px] h-auto object-cover hover:border-2 hover:border-blue-600"
                />
                <img
                  src={FourthImg}
                  alt=""
                  className="w-[100px] h-auto object-cover hover:border-2 hover:border-blue-600"
                />
              </div>
            </div>
          </div>

          <div className="w-1/2 px-8">
            <h1 className="text-2xl font-semibold mb-4">Grade 240 Cashews</h1>
            <h2
              className="text-3xl mb-4"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              ₹720
            </h2>

            <select className="border p-2 mb-2 mr-4">
              <option>Select size</option>
              <option>500g</option>
              <option>1kg</option>
              <option>2kg</option>
              <option>10kg</option>
            </select>
            <input
              type="number"
              value="1"
              className="border border-solid border-gray-400 p-2 mb-4 mr-4"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4">
              Add to Cart
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg">
              Buy Now
            </button>
            <h4 className="text-lg font-semibold mt-6">Product details</h4>
            <p className="text-gray-600">
              Farmley Cashews are directly sourced from the farm and are
              hygienically packed in a HACCP certified unit. We pack cashews
              which are handpicked, 100% natural and free from adulteration. Our
              cashews are low in sugar, high in fiber, heart-healthy fats, and
              vegan protein. These handpicked cashews have fewer calories and
              high fiber that keeps you full.
            </p>
          </div>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductPage;
