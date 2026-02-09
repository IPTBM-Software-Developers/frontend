import { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

// images
import IptbmLogo from "../../assets/IptbmLogo.jpg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/announcement", label: "Announcement" },
    { to: "/technologies", label: "Technologies" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-white shadow-sm py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <section className="flex gap-2 md:gap-4 items-center">
            <img
              src={IptbmLogo}
              alt="IPTBM Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div>
              <p className="text-black text-sm md:text-lg font-medium leading-tight">
                Intellectual Property and Technology
              </p>
              <p className="text-xs md:text-sm text-gray-600 font-medium">
                Business Management
              </p>
            </div>
          </section>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-gray-600 no-underline hover:text-blue-700 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3 lg:gap-4">
            <button className="px-4 border border-gray-300 bg-white text-sm text-black font-medium rounded-lg hover:bg-blue-700 hover:text-white transition cursor-pointer active:scale-95 active:shadow-sm transition-transform duration-100">
              Log In
            </button>
            <button className="group px-4 py-2 bg-blue-700 text-sm text-white font-medium rounded-lg hover:bg-blue-800 transition cursor-pointer active:scale-95 active:shadow-sm transition-transform duration-100">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 py-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-4 border-t border-gray-200 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-600 hover:text-blue-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <button className="w-full py-2 border border-gray-300 bg-white text-black font-medium rounded-lg hover:bg-blue-700 hover:text-white transition cursor-pointer">
                Log In
              </button>
              <button className="w-full py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition cursor-pointer flex items-center justify-center gap-2">
                Get Started
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;