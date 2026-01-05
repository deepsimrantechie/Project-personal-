import React, { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-extrabold">
            SYNCROSOFT<span className="text-orange-500">TECH.</span>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
            {/* Company Dropdown */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => toggleMenu("company")}
              onMouseLeave={() => toggleMenu(null)}
            >
              <span className="hover:text-orange-500">Company</span>

              {openMenu === "company" && (
                <div className="absolute top-8 left-0 w-48 bg-white shadow-lg rounded-md border">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100">About</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Case Study</li>
                  </ul>
                </div>
              )}
            </li>

            {/* Services Dropdown */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => toggleMenu("services")}
              onMouseLeave={() => toggleMenu(null)}
            >
              <span className="hover:text-orange-500">Services</span>

              {openMenu === "services" && (
                <div className="absolute top-8 left-0 w-48 bg-white shadow-lg rounded-md border">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100">Design</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Development</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Marketing</li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Security and Maintainence
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Resources Dropdown */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => toggleMenu("resources")}
              onMouseLeave={() => toggleMenu(null)}
            >
              <span className="hover:text-orange-500">Resources</span>

              {openMenu === "resources" && (
                <div className="absolute top-8 left-0 w-48 bg-white shadow-lg rounded-md border">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100">Blog</li>
                    <li className="px-4 py-2 hover:bg-gray-100">D2C guide</li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Digital Libraries
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Editor choice
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">Guidlines</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Podcast</li>
                  </ul>
                </div>
              )}
            </li>

            {/* Normal Links */}
            <li className="hover:text-orange-500 cursor-pointer">Careers</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
          </ul>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center gap-2 border px-4 py-2 rounded-md text-sm hover:bg-gray-100">
              🔍 Search
            </button>

            <button className="bg-orange-500 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-orange-600 transition">
              Consult Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
