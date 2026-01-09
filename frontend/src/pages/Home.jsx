import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT: VALUE PROPOSITION */}
        <div>
          <p className="text-sm uppercase tracking-widest text-slate-500">
            Technology Consulting
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            We help businesses build, <br />
            scale & modernize <br />
            their digital systems
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            NexGen is a technology consulting company helping startups and
            enterprises design, develop, and secure scalable digital products.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition">
              Get Free Consultation
            </button>

            <button className="border border-slate-300 px-8 py-3 rounded-md text-slate-700 hover:bg-slate-50 transition">
              View Services
            </button>
          </div>
        </div>

        {/* RIGHT: TRUST / CREDIBILITY */}
        <div className="bg-slate-50 rounded-xl p-10">
          <h3 className="text-xl font-semibold text-slate-900">
            Why companies trust us
          </h3>

          <ul className="mt-6 space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              7+ years of consulting experience
            </li>

            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              150+ successful digital projects
            </li>

            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Trusted by startups & enterprises
            </li>

            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Focus on scalability & security
            </li>
          </ul>

          <div className="mt-8 border-t pt-6">
            <p className="text-sm text-slate-500">
              Guaranteed response within 1 business day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
