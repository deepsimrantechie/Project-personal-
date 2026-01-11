import React from "react";

const LifeAtSyncro = () => {
  return (
    <main className="w-full min-h-screen bg-white flex items-center">
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="text-sm uppercase tracking-widest text-slate-500">
              Our People
            </span>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
              Life at Syncrosoft
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Mutual respect, inclusivity, and collaboration are at the heart of
              Syncrosoft Technology. We build a workplace where people feel
              valued, heard, and part of something meaningful.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-blue-600 font-medium hover:gap-3 transition-all"
            >
              Learn what drives us
              <span className="text-xl">→</span>
            </a>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-slate-50 rounded-2xl p-10 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">
              Mission, Values & Principles
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Our mission and values guide how we work, grow, and create impact
              for our people, clients, and communities.
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <h4 className="font-semibold text-slate-900">
                  People First Culture
                </h4>
                <p className="text-slate-600 text-sm">
                  Trust, transparency, and respect.
                </p>
              </li>

              <li>
                <h4 className="font-semibold text-slate-900">
                  Continuous Learning
                </h4>
                <p className="text-slate-600 text-sm">
                  Growth through innovation and skills.
                </p>
              </li>

              <li>
                <h4 className="font-semibold text-slate-900">
                  Ownership & Impact
                </h4>
                <p className="text-slate-600 text-sm">
                  Empowered teams creating real value.
                </p>
              </li>
            </ul>

            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
              Explore Careers
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LifeAtSyncro;
