import React from "react";

const SocialProof = () => {
  return (
    <section className="w-full bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Helping businesses grow better.
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">
          Our tailored eCommerce solutions and data-driven strategies drive
          sales and enhance customer engagement. Harness automation,
          personalization, and analytics to streamline operations and foster
          lasting relationships.
        </p>

        {/* Logos */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          <div className="flex flex-col items-center">
            <span className="text-blue-600 font-bold text-xl">facebook</span>
            <span className="text-sm text-gray-500">5.0 ★★★★★</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-red-500 font-bold text-xl">Google</span>
            <span className="text-sm text-gray-500">4.9 ★★★★★</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-blue-700 font-bold text-xl">GoodFirms</span>
            <span className="text-sm text-gray-500">4.9 ★★★★★</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-bold text-xl">Clutch</span>
            <span className="text-sm text-gray-500">4.9 ★★★★★</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-green-600 font-bold text-xl">Upwork</span>
            <span className="text-sm text-gray-500">100% Job Success</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-bold text-xl">Codeable</span>
            <span className="text-sm text-gray-500">4.6 ★★★★★</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition">
            Request a callback
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
