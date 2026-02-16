import { useState } from "react";

// Icons
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { House, Info, Megaphone, CpuIcon, CircleUserRound } from "lucide-react";

// Images
import IptbmLogo from "../../assets/IptbmLogo.jpg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use anchor links for in-page scrolling
  const navLinks = [
    { to: "#home", label: "Home", icon: House },
    { to: "#about", label: "About", icon: Info  },
    { to: "#announcement", label: "Announcement", icon: Megaphone  },
    { to: "#technologies", label: "Technologies", icon: CpuIcon  },
    { to: "#contact", label: "Contact", icon: CircleUserRound  },
  ];

  const Links = navLinks.map(link => (link.to));

  const scrollToSection = (hash) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector("header");
    const offset = header.offsetHeight;

    const top =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white shadow-sm py-2">
      <div className="container mx-auto px-6">
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

          {/* Desktop Navigation (XL and above) */}
          <nav className="hidden xl:flex space-x-6 xl:space-x-8 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to} // anchor link
                className="relative text-gray-600 no-underline hover:text-blue-700 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Buttons (XL and above) */}
          <div className="hidden xl:flex gap-3 xl:gap-4">
            <button className="px-4 border border-gray-300 bg-white text-sm text-black font-medium rounded-lg hover:bg-blue-700 hover:text-white transition cursor-pointer active:scale-95 active:shadow-sm duration-100">
              Log In
            </button>
            <button className="group px-4 py-2 bg-blue-700 text-sm text-white font-medium rounded-lg hover:bg-blue-800 transition cursor-pointer active:scale-95 active:shadow-sm duration-100 flex items-center gap-1">
              Get Started <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Button (sm, md, lg) */}
          <button
            className="xl:hidden p-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
        >
          
          <div className="py-6 px-4 flex flex-col h-full ">
            
            {/* Close button */}
            <header className="flex justify-between border-b border-gray-200 pb-4">
              <img src={IptbmLogo} alt="Iptbm Logo" className="h-10 w-10" />
              <button 
                className="self-end mb-6 text-gray-600 hover:text-blue-700"
                onClick={() => setIsMenuOpen(false)}
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
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);

                      setTimeout(() => {
                        scrollToSection(link.to);
                      }, 300);
                    }}
                  >
                    <Icon className="text-blue-700 h-5 w-5" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Buttons bottom */}
            <div className="mt-auto flex flex-col gap-3 pt-6 border-t">
              <button className="w-full py-2 border border-gray-300 rounded-lg">
                Log In
              </button>
              <button className="w-full py-2 bg-blue-700 text-white rounded-lg flex justify-center items-center gap-2">
                Get Started <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
