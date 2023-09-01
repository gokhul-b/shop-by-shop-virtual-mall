import React from "react";

const BuildShopHero = () => {
  return (
    <section className="bg-indigo-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Build Your Own Shop
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Start selling your unique products directly to customers
        </p>
        <button className="bg-slate-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default BuildShopHero;
