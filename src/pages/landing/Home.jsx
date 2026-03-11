// Components
import LoopLogo from "@/components/landing/LoopLogo";
import StaggeredText from "@/components/landing/StaggeredText";
import { motion } from "framer-motion";
import { useState } from "react";
import NavBar from "@/components/landing/NavBar";
import SignUp from "../SignInSignUp/SignUp";

import { Link } from "react-router-dom";

// icons
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Award } from "lucide-react";

// Images
import Iptbm from "../../assets/Iptbm.jpg";
import LspuImage1 from "../../assets/LspuImage1.png";
import LspuImage2 from "../../assets/LspuImage2.jpg";
import Shield from "../../assets/Shield.png";
import Badge from "../../assets/Badge.png";
import UniversityPhoto from "../../assets/UniversityPhotoHome.jpg";
import IptbmLogo from "../../assets/iptbm-logo-noBG.png";
import LspuLogo from "../../assets/LspuLogo.webp";
import CcsLogo from "../../assets/CcsLogo.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Page entrance
const pageEnter = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Carousel fade
const fadeImage = {
  hidden: { opacity: 0, scale: 1.05 },
  show: { opacity: 1, scale: 1 }
};

// Awards Data
const awardCards = [
  {
    node: (
      <div className="flex gap-4 items-center justify-center p-4 bg-black/5 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg w-full md:w-fit">
        <div className="p-2 bg-blue-100 rounded-full">
          <Award className="w-6 h-6 text-blue-700"/>
        </div>
        <div>
          <h1 className="text-white text-[clamp(0.85rem,0.95vw,0.95rem)] font-semibold">
            Research Excellence
          </h1>
          <p className="text-white font-extralight text-[clamp(0.7rem,0.8vw,0.75rem)]">2022</p>
        </div>
      </div>
    )
  },
  {
    node: (
      <div className="flex gap-4 items-center justify-center p-4 bg-black/5 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg w-full md:w-fit">
        <div className="p-2 bg-blue-100 rounded-full">
          <Award className="w-6 h-6 text-blue-700"/>
        </div>
        <div>
          <h1 className="text-white text-[clamp(0.85rem,0.95vw,0.95rem)] font-semibold">
            Academic Partner
          </h1>
          <p className="text-[clamp(0.7rem,0.8vw,0.75rem)] text-white font-extralight">2020</p>
        </div>
      </div>
    )
  },
  {
    node: (
      <div className="flex gap-4 items-center justify-center p-4 bg-black/5 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg w-full md:w-fit">
        <div className="p-2 bg-blue-100 rounded-full">
          <Award className="w-6 h-6 text-blue-700"/>
        </div>
        <div>
          <h1 className="text-white text-[clamp(0.85rem,0.95vw,0.95rem)] font-semibold">
            Innovation Award
          </h1>
          <p className="text-[clamp(0.7rem,0.8vw,0.75rem)] text-white font-extralight">2026</p>
        </div>
      </div>
    )
  },
];

const Home = ({ id }) => {
  return ( 
    <motion.main
      id={id}
      variants={pageEnter}
      initial="hidden"
      animate="show"
      className="flex flex-wrap items-center justify-center min-h-screen w-full bg-gray-50 scroll-mt-20"
    >

      {/* ================= TEXT SECTION ================= */}
      <section className="flex flex-col flex-wrap justify-center md:justify-center px-[5%] lg:justify-center items-center lg:px-[5%] xl:p-0 
        w-full xl:w-[60%] 
        xl:h-screen lg:h-160 md:h-130 h-130
        gap-16">

        {/* Content */}
        <div className="flex flex-col gap-8 xl:w-[90%] 2xl:w-[75%]">

          {/* ===== TITLE ===== */}
          <div className="flex flex-col leading-none text-start xl:text-start w-full gap-2">
            {/* Trusted badge */}
            <div className="inline-flex w-fit gap-2 items-center justify-center text-[clamp(0.65rem,0.8vw,0.8rem)] font-medium bg-gray-200 rounded-xl px-2 py-1">
              <img src={Shield} alt="" className="w-4 h-4"/>
              <p>Trusted by 500+ Institutions</p>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col text-[clamp(2.2rem,5vw,4.5rem)] font-google font-medium"
            >
              <span className="text-black">Secure your</span>
              <span className="text-blue-700">Intellectual Property</span>
              <span className="text-black">assets</span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 text-sm md:text-md w-[100%] sm:max-w-[70%] text-start"
          >
            IPTBM offers enterprise-grade solutions to protect, manage, and monetize your intellectual property assets with total compliance.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-start w-full"
          >
            <Link 
              to="/login" 
              className="group px-4 py-3 bg-blue-700 text-white rounded-lg flex items-center gap-2 cursor-pointer active:scale-[0.99] transition-all duration-200 hover:bg-blue-800 active:bg-blue-800"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* <button className="px-6 py-3 border border-blue-700 bg-white text-blue-700 rounded-lg cursor-pointer active:scale-[0.99]">
              Learn More
            </button> */}

            <a href="#about" className="px-6 py-3 border border-blue-700 bg-white text-blue-700 rounded-lg hover:bg-blue-700 active:bg-blue-800 hover:text-white transition-all">
              Learn More
            </a>
          </motion.div>

          {/* Partnership */}
          {/* <div className="flex flex-col gap-4 xl:w-[90%] 2xl:w-[75%]">
            <h1 className="text-gray-500 text-md">Partnetship:</h1>
            
            <div className="flex gap-6 xl:gap-12 w-full justify-start">
              <img src={IptbmLogo} alt="" className="w-15 h-15" />
              <img src={LspuLogo} alt="" className="w-15 h-15" />
              <img src={CcsLogo} alt="" className="w-15 h-15" />
            </div>
          </div> */}
        </div>
      </section>


      {/* Display Section */}
      <section 
        className="relative flex flex-col justify-between px-8 pt-10 pb-10 xl:pb-30 
        h-150 md:h-200 xl:h-screen 
        w-full xl:w-[40%] 
        rounded-b-4xl xl:rounded-none 
        bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${UniversityPhoto})`,
          backgroundPosition: "43% center" 
        }}
      >
          <div className="flex px-4 py-2 gap-4 items-center w-full md:w-fit text-white bg-black/5 backdrop-blur-xs border border-white/20 rounded-2xl shadow-lg">
            <img src={IptbmLogo} alt="Iptbm Logo" className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0"/>
            <h1 className="leading-tight text-xs md:text-base font-normal">
              Intellectual Property and Technology <br className="hidden md:block"/> Business Management
            </h1>
          </div>

          {/* Awards */}
          <div className="w-full">
            <h1 className="text-white font-normal text-[clamp(0.9rem,1vw,1rem)]">
              Awards & Recognitions
            </h1>

            <LoopLogo
              logos={awardCards}
              speed={100}
              direction="left"
              gap={24}
              scaleOnHover={false}
              useCustomRender={true}
              ariaLabel="Awards & Recognitions"
            />
          </div>
      </section>
    </motion.main>
  );
};

export default Home;