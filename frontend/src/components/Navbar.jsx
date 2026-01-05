import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const menuItems = {
    company: [
      { label: "About Us", icon: "🏢" },
      { label: "Case Studies", icon: "📊" },
      { label: "Our Team", icon: "👥" },
      { label: "Testimonials", icon: "⭐" },
    ],
    services: [
      { label: "UI/UX Design", icon: "🎨" },
      { label: "Web Development", icon: "💻" },
      { label: "Digital Marketing", icon: "📈" },
      { label: "Security & Maintenance", icon: "🔒" },
      { label: "Mobile Development", icon: "📱" },
      { label: "Cloud Solutions", icon: "☁️" },
    ],
    resources: [
      { label: "Blog", icon: "📝" },
      { label: "D2C Guide", icon: "📚" },
      { label: "Digital Library", icon: "📖" },
      { label: "Editor's Choice", icon: "🏆" },
      { label: "Guidelines", icon: "📋" },
      { label: "Podcast", icon: "🎧" },
      { label: "Webinars", icon: "🎤" },
      { label: "Tools", icon: "🛠️" },
    ],
  };

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navRef}
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-gray-900">SYNCROSOFT</span>
                <span className="text-orange-500">TECH</span>
              </div>
              <div className="ml-2 text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">
                Digital Solutions
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Company Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => toggleMenu("company")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors rounded-lg hover:bg-gray-50">
                  Company
                  <svg
                    className="w-4 h-4 ml-1"
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

                <div
                  className={`absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 ${
                    openMenu === "company"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  <div className="p-2">
                    {menuItems.company.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors group/item"
                      >
                        <span className="mr-3 text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                        <svg
                          className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => toggleMenu("services")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors rounded-lg hover:bg-gray-50">
                  Services
                  <svg
                    className="w-4 h-4 ml-1"
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

                <div
                  className={`absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 ${
                    openMenu === "services"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  <div className="p-3">
                    <div className="mb-2 px-3 py-2">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Our Expertise
                      </h4>
                    </div>
                    {menuItems.services.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors group/item"
                      >
                        <span className="mr-3 text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => toggleMenu("resources")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors rounded-lg hover:bg-gray-50">
                  Resources
                  <svg
                    className="w-4 h-4 ml-1"
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

                <div
                  className={`absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 ${
                    openMenu === "resources"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  <div className="p-3">
                    <div className="grid grid-cols-2 gap-1">
                      {menuItems.resources.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        >
                          <span className="mr-2">{item.icon}</span>
                          <span className="truncate">{item.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Links */}
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors rounded-lg hover:bg-gray-50"
              >
                Careers
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors rounded-lg hover:bg-gray-50"
              >
                Contact Us
              </a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              <button className="hidden lg:flex items-center justify-center w-10 h-10 text-gray-500 hover:text-orange-500 transition-colors rounded-full hover:bg-gray-100">
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

              <button className="bg-linear-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Consult Now
                <span className="ml-2">→</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                {mobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            mobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-4 pb-6 bg-white border-t shadow-inner">
            <div className="space-y-1">
              {/* Mobile Menu Items */}
              <div className="space-y-2">
                <div className="font-medium text-gray-500 text-xs uppercase tracking-wider px-3 py-2">
                  Menu
                </div>
                {Object.entries(menuItems).map(([key, items]) => (
                  <div key={key} className="space-y-1">
                    <div className="font-medium text-gray-900 px-3 py-2 rounded-lg bg-gray-50">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </div>
                    <div className="ml-4 space-y-1">
                      {items.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-orange-50 hover:text-orange-600"
                        >
                          <span className="mr-3">{item.icon}</span>
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
                <a
                  href="#"
                  className="flex items-center px-3 py-3 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-3 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  Contact Us
                </a>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between px-3 py-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Need help?</span>
                  <button className="text-sm font-medium text-orange-600 hover:text-orange-700">
                    Get Support →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
