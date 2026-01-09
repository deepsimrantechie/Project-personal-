import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = {
    Company: ["About Us", "Case Studies", "Team", "Testimonials"],
    Services: [
      "Product Design",
      "Web Development",
      "Digital Marketing",
      "Security & Maintenance",
    ],
    Resources: ["Blog", "Guides", "Podcast", "Webinars"],
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all ${
          scrolled ? "bg-white shadow-sm" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-20 flex items-center justify-between">
            {/* LOGO */}
            <div className="text-xl font-semibold text-slate-900">
              Syncrosoft<span className="text-blue-600">Tech</span>
            </div>

            {/* MENU */}
            <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-slate-700">
              {Object.entries(menuItems).map(([title, items]) => (
                <div
                  key={title}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(title)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className={`flex items-center gap-1 transition ${
                      openMenu === title
                        ? "text-blue-600"
                        : "hover:text-blue-600"
                    }`}
                  >
                    {title}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openMenu === title ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* DROPDOWN */}
                  {openMenu === title && (
                    <div className="absolute left-0 top-7 pt-4">
                      <div className="bg-white rounded-md shadow-md py-2 min-w-50">
                        {items.map((item) => (
                          <div
                            key={item}
                            className="px-5 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <a className="hover:text-blue-600 cursor-pointer">Careers</a>
              <a className="hover:text-blue-600 cursor-pointer">Contact</a>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-4">
              {/* SEARCH */}
              <button className="text-slate-500 hover:text-blue-600 transition">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* CTA */}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
