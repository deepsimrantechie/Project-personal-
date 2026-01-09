import React from "react";

const SocialProof = () => {
  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Helping businesses grow better.
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-3xl mx-auto text-slate-600">
          Our tailored eCommerce solutions and data-driven strategies drive
          sales and enhance customer engagement. Harness automation,
          personalization, and analytics to streamline operations and foster
          lasting relationships.
        </p>

        {/* Logos / Ratings */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center">
          <div className="flex flex-col items-center">
            <span className="text-slate-800 font-semibold text-lg">
              Facebook
            </span>
            <span className="text-sm text-slate-500">5.0 ★★★★★</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-slate-800 font-semibold text-lg">Google</span>
            <span className="text-sm text-slate-500">4.9 ★★★★★</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-slate-800 font-semibold text-lg">
              GoodFirms
            </span>
            <span className="text-sm text-slate-500">4.9 ★★★★★</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-slate-800 font-semibold text-lg">Clutch</span>
            <span className="text-sm text-slate-500">4.9 ★★★★★</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-slate-800 font-semibold text-lg">Upwork</span>
            <span className="text-sm text-slate-500">100% Job Success</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-slate-800 font-semibold text-lg">
              Codeable
            </span>
            <span className="text-sm text-slate-500">4.6 ★★★★★</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14">
          <button className="bg-blue-600 text-white px-7 py-3 rounded-md font-medium hover:bg-blue-700 transition">
            Request a callback
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
