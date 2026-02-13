// Components
import LoopLogo from "@/components/landing/LoopLogo";
import StaggeredText from "@/components/landing/StaggeredText";
import { motion } from "framer-motion";

// icons
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Award } from "lucide-react";

// Images
import Iptbm from "../../assets/Iptbm.jpg";
import LspuImage1 from "../../assets/LspuImage1.png";
import LspuImage2 from "../../assets/LspuImage2.jpg";
import Shield from "../../assets/Shield.png";
import Badge from "../../assets/Badge.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Animations
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
      <div className="flex gap-4 items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-xs w-full md:w-fit">
        <div className="p-2 bg-blue-100 rounded-full">
          <Award className="w-6 h-6 text-blue-700"/>
        </div>
        <div>
          <h1 className="text-[clamp(0.85rem,0.95vw,0.95rem)] font-semibold">
            Research Excellence
          </h1>
          <p className="text-[clamp(0.7rem,0.8vw,0.75rem)] text-gray-500">2022</p>
        </div>
      </div>
    )
  },
  {
    node: (
      <div className="flex gap-4 items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-xs w-full md:w-fit">
        <div className="p-2 bg-blue-100 rounded-full">
          <Award className="w-6 h-6 text-blue-700"/>
        </div>
        <div>
          <h1 className="text-[clamp(0.85rem,0.95vw,0.95rem)] font-semibold">
            Academic Partner
          </h1>
          <p className="text-[clamp(0.7rem,0.8vw,0.75rem)] text-gray-500">2020</p>
        </div>
      </div>
    )
  },
  {
    node: (
      <div className="flex gap-4 items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-xs w-full md:w-fit">
        <div className="p-2 bg-blue-100 rounded-full">
          <Award className="w-6 h-6 text-blue-700"/>
        </div>
        <div>
          <h1 className="text-[clamp(0.85rem,0.95vw,0.95rem)] font-semibold">
            Innovation Award
          </h1>
          <p className="text-[clamp(0.7rem,0.8vw,0.75rem)] text-gray-500">2026</p>
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
      className="flex flex-wrap items-center justify-center gap-8 h-auto w-full bg-gray-50 py-16 xl:py-34 px-[3%] lg:px-0 scroll-mt-20"
    >

      {/* ================= TEXT SECTION ================= */}
      <section className="flex flex-col flex-wrap justify-center items-center md:justify-start md:items-start
        w-full sm:max-w-2xl lg:max-w-3xl gap-8">

        {/* Trusted badge */}
        <div className="inline-flex w-fit gap-2 items-center text-[clamp(0.65rem,0.8vw,0.8rem)] font-medium bg-gray-200 rounded-xl px-2 py-1">
          <img src={Shield} alt="" className="w-4 h-4"/>
          <p>Trusted by 500+ Institutions</p>
        </div>

        {/* ===== TITLE ===== */}
        <div className="leading-none text-center md:text-start flex flex-col w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[clamp(2.6rem,5vw,3.75rem)] font-bold text-center md:text-start flex flex-col"
          >
            <span>Secure and Manage</span>
            <span>your <span className="text-blue-700">Intellectual</span> </span>
            <span className="text-blue-700"> Property <span className="text-black">assets</span> </span>
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 text-[clamp(0.85rem,1.2vw,1.1rem)] max-w-[100%] md:max-w-[80%] text-center md:text-start"
        >
          IPTBM provides enterprise-grade solutions for protecting, managing,
          and monetizing intellectual property with cutting-edge technology 
          and compliance frameworks.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 flex-wrap"
        >
          <button className="group px-4 py-3 bg-blue-700 text-white rounded-lg flex items-center gap-2">
            Get Started
            <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="px-6 py-3 border border-blue-700 bg-white text-blue-700 rounded-lg">
            Learn More
          </button>
        </motion.div>

        {/* Awards */}
        <div className="w-full">
          <h1 className="text-gray-500 font-medium text-[clamp(0.9rem,1vw,1rem)]">
            Awards & Recognitions
          </h1>

          <LoopLogo
            logos={awardCards}
            speed={100}
            direction="left"
            gap={24}
            scaleOnHover={false}
            fadeOut
            fadeOutColor="#ffffff"
            useCustomRender={true}
            ariaLabel="Awards & Recognitions"
          />
        </div>
      </section>


      {/* ================= CAROUSEL ================= */}
      <section className="flex flex-col w-full sm:max-w-2xl lg:max-w-3xl gap-8 px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          loop
          className="w-full rounded-xl"
        >

          {[Iptbm, LspuImage1, LspuImage2].map((img, i) => (
            <SwiperSlide key={i}>
              <motion.div
                variants={fadeImage}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-[16/9] overflow-hidden rounded-xl"
              >
                <img src={img} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/35 via-blue-500/15 to-transparent"/>
              </motion.div>
            </SwiperSlide>
          ))}

        </Swiper>
      </section>

    </motion.main>
  );
};

export default Home;