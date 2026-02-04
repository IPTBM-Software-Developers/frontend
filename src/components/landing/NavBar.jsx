import {Link} from "react-router-dom";

// Icons
import { ArrowRightIcon } from "@heroicons/react/24/solid";

// images
import IptbmLogo from "../../assets/IptbmLogo.jpg";

const NavBar = () => {
  return (
    // Header
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-xs py-4">
      <div className="flex justify-around items-center h-16">
        <section className="flex gap-4 items-center">
          <img src={IptbmLogo} alt="" className="w-12 h-12 object-contain" />
          <div>
            <p className="text-black text-lg font-medium">
              Intellectual Property and Technology
            </p>
            <p className="text-sm text-gray-600 font-medium">
              Business Management
            </p>
          </div>
        </section>

        <nav className="space-x-8 font-medium">
          {/* links unchanged */}
          <Link 
          to="/" 
          className="relative text-gray-600 no-underline hover:text-blue-600 transition-colors duration-300 group"
        >
          Home
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <Link 
          to="/about" 
          className="relative text-gray-600 no-underline hover:text-blue-600 transition-colors duration-300 group"
        >
          About
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <Link 
          to="/announcement" 
          className="relative text-gray-600 no-underline hover:text-blue-600 transition-colors duration-300 group"
        >
          Announcement
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <Link 
          to="/technologies" 
          className="relative text-gray-600 no-underline hover:text-blue-600 transition-colors duration-300 group"
        >
          Technologies
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <Link 
          to="/contact" 
          className="relative text-gray-600 no-underline hover:text-blue-600 transition-colors duration-300 group"
        >
          Contact
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        </nav>

        <div className="flex gap-4">
          <button className="px-6 py-3 border border-blue-600 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition cursor-pointer  active:scale-95 active:shadow-sm transition-transform duration-100">
            Log In
          </button>
          <button className="group px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition cursor-pointer active:scale-95 active:shadow-sm transition-transform duration-100 flex items-center gap-2">
            Get Started
            <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar