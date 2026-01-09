import React from "react";

const blogs = [
  {
    category: "Editor's Choice, Guidelines, Podcast",
    title: "How expensive are the inexpensive websites?",
    desc: "People choose low cost websites, but later on cheap websites has lots of disadvantages...",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    author: "Anup Kumar",
    date: "August 7, 2022",
    time: "10 min read",
  },
  {
    category: "Cyber Security, Security",
    title: "20 Reasons why Telegram is better than WhatsApp",
    desc: "Telegram is better than WhatsApp a popular platform among users who are concerned...",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    author: "Rahul Bhardwaj",
    date: "August 4, 2022",
    time: "5 min read",
  },
  {
    category: "Guidelines, WordPress Security",
    title: "How to Improve the Security of WordPress",
    desc: "Are you worried about WordPress security? You're not alone. Most websites...",
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    author: "Anup Kumar",
    date: "June 16, 2022",
    time: "11 min read",
  },
];

const ContentHub = () => {
  return (
    <section className="bg-slate-50">
      {/* CTA STRIP */}
      <div className="bg-white py-16 text-center border-b">
        <h2 className="text-3xl font-bold text-slate-900">
          Connect with our business experts
        </h2>
        <p className="mt-3 text-slate-600">
          Get a guaranteed response within 1 business day.
        </p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-3 rounded-md font-medium">
          Request a call back
        </button>
      </div>

      {/* FEATURED BLOGS */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header + Tabs */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900">
            Featured on SyncrosoftTech
          </h3>

          <div className="flex flex-wrap gap-8 mt-6 text-sm text-slate-600">
            <span className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
              Featured
            </span>
            <span className="cursor-pointer hover:text-slate-900">Latest</span>
            <span className="cursor-pointer hover:text-slate-900">Podcast</span>
            <span className="cursor-pointer hover:text-slate-900">
              Guidelines
            </span>
            <span className="cursor-pointer hover:text-slate-900">
              Editor's choice
            </span>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <p className="text-xs uppercase text-blue-600 font-semibold">
                {blog.category}
              </p>

              <h4 className="mt-3 text-lg font-bold text-slate-900">
                {blog.title}
              </h4>

              <p className="mt-2 text-slate-600 text-sm">{blog.desc}</p>

              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-40 object-cover mt-4 rounded-md"
              />

              <div className="flex items-center gap-3 mt-4 text-sm text-slate-500">
                <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
                <div>
                  <p className="text-slate-700 font-medium">
                    Written by {blog.author}
                  </p>
                  <p>
                    Posted on {blog.date} • {blog.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-12">
          <button className="border border-slate-300 text-slate-700 px-5 py-2 rounded hover:bg-slate-100">
            ← Prev
          </button>
          <button className="border border-slate-300 text-slate-700 px-5 py-2 rounded hover:bg-slate-100">
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentHub;
