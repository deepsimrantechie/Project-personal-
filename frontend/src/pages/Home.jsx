import React from "react";

const Home = () => {
  return (
    <main className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Helping businesses grow better.
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              We build scalable eCommerce solutions and data-driven platforms
              that increase revenue, automate workflows, and improve customer
              engagement.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition">
                Get Started
              </button>
              <button className="border border-slate-300 px-8 py-3 rounded-md font-medium hover:bg-slate-100 transition">
                View Work
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
              alt="Business growth"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Automation",
              img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
              desc: "Reduce manual work and scale faster with intelligent automation.",
            },
            {
              title: "Analytics",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
              desc: "Make informed decisions using real-time insights and reports.",
            },
            {
              title: "Personalization",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
              desc: "Deliver personalized experiences that convert visitors to customers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}

      {/* ================= CTA ================= */}
    </main>
  );
};

export default Home;
