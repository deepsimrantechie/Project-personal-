import React from "react";

const Home = () => {
  return (
    <main className="w-full min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-linear-to-b from-slate-900 to-slate-800 min-h-screen flex items-center py-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center w-full">
          {/* Text */}
          <div className="space-y-8">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <div></div>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Intelligent
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 mt-2">
                  Business Solutions
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                We build scalable platforms that automate workflows, increase
                revenue, and improve customer engagement through data-driven
                innovation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-linear-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex-1">
                Start Free Trial
              </button>
              <button className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-200 px-10 py-4 rounded-xl font-semibold hover:bg-slate-800/70 transition-all duration-300 flex-1">
                <span className="flex items-center justify-center gap-2">
                  View Demo
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8"></div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="relative lg:pl-12">
            <div className="absolute -inset-6 bg-linear-to-r from-blue-500/10 to-cyan-400/10 blur-3xl rounded-full"></div>

            {/* Main Dashboard Image */}
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
              <div className="p-4 bg-slate-900/50 border-b border-slate-700">
                <div className="flex items-center gap-2"></div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Analytics Dashboard"
                className="w-full h-100 object-cover"
              />
            </div>

            {/* Floating Stats Cards */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
