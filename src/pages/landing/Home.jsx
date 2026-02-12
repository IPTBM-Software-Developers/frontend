// Components
import NavBar from "../../components/landing/NavBar";
import LoopLogo from "@/components/landing/LoopLogo";

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

const Home = ({id}) => {
  return (
    <>
      <main id={id} className="flex flex-wrap items-center justify-center gap-8 h-auto w-full bg-gray-50 py-16 xl:py-34 px-[3%] lg:px-0 scroll-mt-20">

        {/*Text Section*/}
        <section className="flex flex-col flex-wrap justify-center items-center xl:justify-start xl:items-start
          w-full 
          sm:max-w-2xl
          lg:max-w-3xl
          h-auto
          overflow-hidden
          gap-8
          ">

          <div className=" flex flex-col gap-2 justify-center items-center xl:justify-start xl:items-start">
            {/* Icon */}
            <div className="inline-flex w-fit gap-2 items-center text-[clamp(0.65rem,0.8vw,0.8rem)] font-medium bg-gray-200 rounded-xl px-2 py-1">
              <img src={Shield} alt="" className="w-4 h-4"/>
              <p>Trusted by 500+ Institutions</p>
            </div>

            {/* Title */}
            <div className="flex flex-col gap-8 justify-center items-center xl:justify-start xl:items-start">
              <div className="leading-none text-center xl:text-start">
                <h1 className="text-[clamp(2.6rem,5vw,3.75rem)] font-bold">Secure & Manage</h1>
                <h1 className="text-[clamp(2.6rem,5vw,3.75rem)] font-bold">
                  Your <span className="text-blue-700">Intellectual</span>
                </h1>
                <h1 className="text-[clamp(2.6rem,5vw,3.75rem)] font-bold text-blue-700">
                  Property <span className="text-black">Assets</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-[clamp(0.85rem,1.2vw,1.1rem)] max-w-[100%] md:max-w-[80%] text-center xl:text-start">
                IPTBM provides enterprise-grade solutions for protecting, managing,
                and monetizing intellectual property with cutting-edge technology 
                and compliance frameworks.
              </p>
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="group px-4 py-3 bg-blue-700 text-white text-[clamp(0.9rem,1vw,1rem)] font-medium rounded-lg hover:bg-blue-700 transition cursor-pointer active:scale-95 active:shadow-sm transition-transform duration-100 flex items-center gap-2">
              Get Started
              <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="px-6 py-3 border border-blue-700 bg-white text-blue-700 text-[clamp(0.9rem,1vw,1rem)] font-medium rounded-lg hover:bg-blue-700 hover:text-white transition cursor-pointer active:scale-95 active:shadow-sm transition-transform duration-100">
              Learn More
            </button>
          </div>
          
          {/* Awards & Recogitions */}
          <div className="w-full">
            <h1 className="text-gray-500 font-medium text-[clamp(0.9rem,1vw,1rem)]">
              Awards & Recognitions
            </h1>

            <LoopLogo
              logos={awardCards}   // array of award card nodes
              speed={100}          // horizontal speed
              direction="left"
              logoHeight={0}     // approximate height of your cards
              gap={24}             // spacing between cards
              scaleOnHover={false}         // optional scaling effect
              fadeOut              // fade cards at edges
              fadeOutColor="#ffffff"
              useCustomRender={true} // needed for React nodes
              ariaLabel="Awards & Recognitions"
              
            />
          </div>
        </section>


        {/* Carousel Section */}
        <section className="flex flex-col flex-wrap
          w-full 
          sm:max-w-2xl
          lg:max-w-3xl
          h-auto
          gap-8 
          px-4
          ">
          <div className="w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              loop
              className="w-full rounded-xl cursor-pointer"
            >
              <SwiperSlide>
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
                  <img
                    src={Iptbm}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/35 via-blue-500/15 to-transparent" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
                  <img
                    src={LspuImage1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/35 via-blue-500/15 to-transparent" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
                  <img
                    src={LspuImage2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/35 via-blue-500/15 to-transparent" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          
          {/* Add a custom pagination container */}
          <div className="swiper-pagination !relative !mt-4 !flex !justify-center !items-center !w-full"></div>
        </section>
      </main>
    </>
  );
};

export default Home;