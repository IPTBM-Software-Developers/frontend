import IptbmLogo from "../../assets/iptbm-logo-NoBg.png";
import { Link } from "react-router-dom";
import { ArrowRight, TextAlignJustify, Shield, Mail, Phone, MapPin } from "lucide-react";


const SampleNavbar = ({ isMenuOpen, onMenuToggle }) => {

  const link = [
    {
      label: "Home",
      path: "/"
    },
    {
      label: "About",
      path: "/about"
    },
    {
      label: "Announcement",
      path: "/announcement"
    },
    {
      label: "Technologies",
      path: "/technologies"
    },
    {
      label: "Contact",
      path: "/contact"
    },
  ];

  return (
    <>
      <header className="absolute flex items-center justify-between top-0 left-0 w-full px-8 p-4 z-50">
        <div className="flex w-[50%] justify-between pr-8">
          <div className={`flex gap-4 items-center ${isMenuOpen ? "opacity-0 delay-0" : "opacity-100 delay-1000"}`}>
            <img src={IptbmLogo} alt="Iptbm Logo" className="w-12 h-12" />
            <h3 className={`font-medium text-lg leading-none ${isMenuOpen ? "text-white" : "text-blue-900"}`}>
              Intellectual Property and technology <br />
              <span className={`text-base ${isMenuOpen ? "text-white" : "text-blue-900"}`}>
                Business Management
              </span>
            </h3>
          </div>

          <button
            className={`group flex items-center gap-2 text-lg cursor-pointer font-medium ${
              isMenuOpen ? "text-white" : "text-blue-900"
            }`}
            onClick={onMenuToggle}
          >
            Menu
            <TextAlignJustify
              size={18}
              className="transition-transform duration-500 group-hover:rotate-[180deg]"
            />
          </button>
        </div>

        <div className={`flex gap-2 ${isMenuOpen ? "opacity-0 delay-0" : "opacity-100 delay-1000"}`}>
          <Link 
            to="/sample" 
            className="group flex items-center gap-2 pr-4 pl-6 py-4 text-sm font-semibold rounded-full text-blue-900 bg-white"
          >
            Get Started
            <ArrowRight 
              size={20} 
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </header>

      <section
        className={`absolute grid grid-cols-2 inset-0 bg-blue-900 transition-all duration-700 z-40 ease-out ${
          isMenuOpen ? "h-screen delay-0" : "h-[0px] delay-500"
        }`}
      >
        <div className="flex flex-col justify-center px-16">
          <div className={`flex flex-col gap-12 duration-700 transition-all ${isMenuOpen ? "opacity-100 delay-500" : "opacity-0 delay-0"}`}>
            {link.map((data, index) => (
              <Link
                to={data.path}
                key={index}
                className="group relative overflow-hidden text-white text-6xl xl:text-7xl 2xl:text-8xl font-instrument"
              >
                {/* Original text */}
                <span className="inline-block transition-transform duration-700 ease-out group-hover:-translate-y-full">
                  {data.label}
                </span>
                
                {/* Rolled-up text (appears from top) */}
                <span className="absolute flex items-center left-0 top-full transition-transform duration-700 ease-out group-hover:-translate-y-full italic">
                 {data.label}
                 <ArrowRight size={60} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-16 transition-all duration-700"/>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
            
        </div>
      </section>
    </>
  );
};

export default SampleNavbar;