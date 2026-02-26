import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Icons
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { House, Info, Megaphone, CpuIcon, CircleUserRound } from "lucide-react";

// Images
import IptbmLogo from "../../assets/IptbmLogo.jpg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Define sections that exist on the landing page
  const navLinks = [
    { to: "/landing#home", label: "Home", icon: House, section: "home" },
    { to: "/landing#about", label: "About", icon: Info, section: "about" },
    { to: "/landing#announcement", label: "Announcement", icon: Megaphone, section: "announcement" },
    { to: "/landing#technologies", label: "Technologies", icon: CpuIcon, section: "technologies" },
    { to: "/landing#contact", label: "Contact", icon: CircleUserRound, section: "contact" },
  ];

  // Check if current path is landing page or its sections
  const isLandingPage = location.pathname === "/landing" || ["/", "/about", "/announcement", "/technologies", "/contact"].includes(location.pathname);
  console.log(location)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const header = document.querySelector("header");
    const offset = header?.offsetHeight || 0;

    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const sectionId = link.section;
    
    if (isLandingPage) {
      // If we're already on landing page, just scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // If we're on another page (like viewallannouncement), navigate to landing page with hash
      navigate(`/landing#${sectionId}`);
    }
  };

  // Handle hash changes when navigating from other pages
  useEffect(() => {
    if (location.hash && location.pathname === "/landing") {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 w-full z-50 bg-white shadow-sm py-2">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section - Link to landing page */}
          <Link to="/landing" className="flex gap-2 md:gap-4 items-center">
            <img
              src={IptbmLogo}
              alt="IPTBM Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div>
              <p className="text-black text-sm md:text-lg font-normal leading-tight">
                Intellectual Property and Technology
              </p>
              <p className="text-xs md:text-sm text-gray-600 font-normal">
                Business Management
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-6 xl:space-x-8 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={(e) => handleNavClick(e, link)}
                className="relative text-gray-600 no-underline hover:text-blue-700 transition-colors duration-300 group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden xl:flex gap-3 xl:gap-4">
            <Link 
              to="/login" 
              className="group px-4 py-2 bg-blue-600 text-sm text-white font-medium rounded-lg hover:bg-blue-700 transition cursor-pointer active:scale-95 active:shadow-sm duration-100 flex items-center gap-1"
            >
              Get Started <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Overlay */}
        <div
          className={`xl:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Side Drawer Menu */}
        <div
          className={`rounded-l-xl xl:hidden fixed top-0 right-0 h-screen w-2/3 sm:w-2/3 md:w-2/3 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="py-6 px-4 flex flex-col h-full">
            {/* Close button */}
            <header className="flex justify-between border-b border-gray-200 pb-4">
              <img src={IptbmLogo} alt="Iptbm Logo" className="h-10 w-10" />
              <button 
                className="self-end mb-6 text-gray-600 hover:text-blue-700"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6 text-red-500" />
              </button>
            </header>

            {/* Links */}
            <nav className="flex flex-col space-y-4 py-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.to}
                    href={link.to}
                    className="flex items-center justify-start gap-3 text-gray-700 hover:text-blue-700 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition active:bg-blue-100"
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    <Icon className="text-blue-700 h-5 w-5" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Buttons bottom */}
            <div className="mt-auto flex flex-col gap-3 pt-6 border-t">
              <Link 
                to="/login" 
                className="group px-4 py-2 bg-blue-700 text-sm text-white font-medium rounded-lg hover:bg-blue-800 transition cursor-pointer active:scale-95 active:shadow-sm duration-100 flex items-center justify-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;