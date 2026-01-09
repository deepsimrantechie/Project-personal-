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

      {/* Overlay – consulting style */}
      <div className="absolute inset-0 bg-slate-900/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-xl text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Become one of us
          </h2>

          <p className="mt-4 text-slate-200">
            Explore all the job opportunities currently available at NexGen
            Innovators and grow your career with us.
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-3 rounded-md font-medium">
            Join our team
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareersCTA;
