import React from "react";

const PodcastUpdates = () => {
  return (
    <section className="bg-indigo-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold">Stay updated</h2>

          <p className="mt-4 text-indigo-200 max-w-md leading-relaxed">
            Don’t have time to read articles to get tech updates? We’ve got you
            covered on all major podcast platforms so you never miss what’s
            happening in tech.
          </p>

          <button className="mt-6 bg-white text-indigo-900 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition">
            Listen now
          </button>
        </div>

        {/* RIGHT ORBIT */}
        <div className="flex justify-center">
          <div className="relative w-96 h-96">
            {/* ORBITS */}
            <div className="absolute inset-0 rounded-full border-2 border-teal-400 opacity-60"></div>
            <div className="absolute inset-6 rounded-full border-2 border-teal-400 opacity-40"></div>
            <div className="absolute inset-14 rounded-full border-2 border-teal-400 opacity-30"></div>

            {/* CENTER SATELLITE */}
            <div className="absolute inset-0 m-auto w-40 h-40 bg-teal-400 rounded-full flex items-center justify-center z-10 shadow-xl">
              <span className="text-6xl">🛰️</span>
            </div>

            {/* ROTATING ICONS */}
            <div className="absolute inset-0 orbit">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg orbit-reverse">
                <span className="text-2xl text-indigo-700">🎧</span>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg orbit-reverse">
                <span className="text-2xl text-indigo-700">📡</span>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg orbit-reverse">
                <span className="text-2xl text-indigo-700">🎵</span>
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg orbit-reverse">
                <span className="text-2xl text-indigo-700">🔊</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastUpdates;
