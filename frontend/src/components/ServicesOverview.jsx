import React from "react";

const services = [
  {
    title: "Designing",
    desc: "We make you standout with our user-centric designing.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Development",
    desc: "We bring your business online and help you scale.",
    img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
  },
  {
    title: "Marketing",
    desc: "Get noticed among your targeted audience.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
  {
    title: "Security",
    desc: "We keep your online business up and running.",
    img: "https://images.unsplash.com/photo-1581091012184-5c7c9b88e1e4",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How can NexGen help you grow?
          </h2>

          <p className="mt-4 text-gray-600">
            Every business has different needs. Be it designing a landing page
            or building a big e-commerce store, NexGen can help you with every
            tech challenge. That’s why they call us best IT company in India.
          </p>
        </div>

        {/* Services Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-44 object-cover rounded-md"
              />

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">{service.desc}</p>

              <button className="mt-3 text-orange-500 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
