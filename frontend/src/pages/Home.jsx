import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen bg-white pt-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Are you ready to
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-3">
            Digitally Transform <br />
            <span className="text-orange-500">Your Business</span>
          </h1>

          <p className="text-gray-600 mt-5 max-w-lg">
            We help businesses establish, scale, and succeed online through
            design, development, and digital marketing.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition">
              Contact Us
            </button>
            <button className="border px-6 py-3 rounded-md hover:bg-gray-100 transition">
              Read More
            </button>
          </div>
        </div>

        {/* RIGHT ROTATION */}
        <div className="flex justify-center items-center">
          <div className="relative w-80 h-80">
            {/* CENTER ORANGE CIRCLE */}
            <div className="absolute inset-0 m-auto w-32 h-32 bg-orange-500 rounded-full z-10"></div>

            {/* ROTATING CONTAINER */}
            <div className="absolute inset-0 slow-spin">
              {/* CARD 1 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl w-32 h-20 flex items-center justify-center reverse-spin">
                Marketing
              </div>

              {/* CARD 2 */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-xl w-32 h-20 flex items-center justify-center reverse-spin">
                Designing
              </div>

              {/* CARD 3 */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl w-32 h-20 flex items-center justify-center reverse-spin">
                Development
              </div>

              {/* CARD 4 */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-xl w-32 h-20 flex items-center justify-center reverse-spin">
                Strategy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
