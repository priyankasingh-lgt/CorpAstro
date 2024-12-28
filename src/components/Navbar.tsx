import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      servicesRef.current &&
      !servicesRef.current.contains(event.target as Node)
    ) {
      setIsServicesOpen(false);
    }
    if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
      setIsMoreOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Section: Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
                className="h-10 w-auto"
                alt="CorpAstro Logo"
              />
            </Link>
          </div>

          {/* Center Section: Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-4">
            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Services
                <svg
                  className="ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu">
                    {["Astro Branding", "Astro Management", "Astro Staffing", "Vastu & Vibrations", "Personal Consultation"].map((service) => (
                      <Link
                        key={service}
                        to={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/consultation"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Consultation
            </Link>

            <Link
              to="/blog"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Blog
            </Link>

            <Link
              to="/about"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Contact
            </Link>

            {/* More Dropdown */}
            <div ref={moreRef} className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
              >
                More
                <svg
                  className="ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
              {isMoreOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu">
                    <Link
                      to="/astro-business-diagnostic-report"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Astro Business Diagnostic Report
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section: Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-sm font-medium text-orange-600 hover:text-orange-500"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
