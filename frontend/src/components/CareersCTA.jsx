import React from "react";

const CareersCTA = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "480px" }}
    >
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Careers at NexGen"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-xl text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Become one of us</h2>

          <p className="mt-4 text-gray-200">
            Explore all the job opportunities currently available at NexGen
            Innovators.
          </p>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-md font-medium">
            Join us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareersCTA;
