import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Design</li>
            <li className="hover:text-white cursor-pointer">Development</li>
            <li className="hover:text-white cursor-pointer">Marketing</li>
            <li className="hover:text-white cursor-pointer">
              Security and Maintenance
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Blogs</li>
            <li className="hover:text-white cursor-pointer">Digital Library</li>
            <li className="hover:text-white cursor-pointer">Guidelines</li>
            <li className="hover:text-white cursor-pointer">Podcast</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm leading-relaxed">
            114B, 3rd floor Dwarka Mor,
            <br />
            New Delhi
          </p>
          <p className="text-sm mt-3 hover:text-white cursor-pointer">
            sales@nexgi.com
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-4 text-lg">
          <span className="hover:text-white cursor-pointer">f</span>
          <span className="hover:text-white cursor-pointer">X</span>
          <span className="hover:text-white cursor-pointer">in</span>
          <span className="hover:text-white cursor-pointer">📷</span>
          <span className="hover:text-white cursor-pointer">▶</span>
          <span className="hover:text-white cursor-pointer">🐙</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2026 NexGen Innovators IT Services Pvt Ltd
        </p>

        {/* Links */}
        <div className="flex justify-center gap-4 mt-3 text-sm">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms and Conditions
          </span>
          <span className="hover:text-white cursor-pointer">Sitemap</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
