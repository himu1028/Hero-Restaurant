import React from "react";

const Promo = () => {
  return (
    <section className="w-11/12 mx-auto bg-gray-300 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-800">
          Discover Delicious Recipes Anytime, Anywhere
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Explore a world of flavors with Hero Restaurant. Save your favorites, share your own, and get inspired every day with recipes from around the globe.
        </p>
        <a
          href="/"
          className="inline-block bg-orange-500 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:bg-orange-600 transition duration-300"
        >
          Browse Restaurant
        </a>
      </div>
    </section>
  );
};

export default Promo;
