// Components
import NavBar from "../../components/landing/NavBar";

// Link
import {Link} from "react-router-dom";

// Links
import About from "./About";

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


const Home = () => {
  return (
    <>
      <NavBar />
      <main className="bg-gray-50 py-8">
        <div className="flex items-center justify-evenly h-screen w-full " >

          {/*Text Section*/}
          <section className="flex flex-col gap-8">
              <div>
                <div className="inline-flex gap-2 items-center text-xs font-medium bg-gray-200 px-2 py-1 rounded-lg mb-6">
                  <img src={Shield} alt="" className="w-4 h-4"/>
                  <p>Trusted by 500+ Institutions</p>
                </div>

                <h1 className="text-6xl font-bold">Secure & Manage</h1>
                <h1 className="text-6xl font-bold">Your <span className="text-blue-700">Intellectual</span></h1>
                <h1 className="text-6xl font-bold text-blue-700">Property <span className="text-black">Assets</span></h1>
              </div>
              <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
                IPTBM provides enterprise-grade solutions for protecting, managing,
                and monetizing intellectual property with cutting-edge technology
                and compliance frameworks.
              </p>
              
              <div className="flex gap-4 pb-4">
                <button className="group px-4 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-700 transition cursor-pointer active:scale-95 active:shadow-sm transition-transform duration-100 flex items-center gap-2">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="px-6 py-3 border border-blue-700 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-700 hover:text-white transition cursor-pointer  active:scale-95 active:shadow-sm transition-transform duration-100">
                  Learn More
                </button>
              </div>
              
              {/*Awards & Recognition*/}
              <div className="flex flex-col gap-2 ">
                <h1 className="flex gap-2 text-gray-500 font-medium">Awards & Recognitions</h1>

                <div className="flex gap-4">
                  <div className="flex gap-4"> 
                    <div className="flex gap-4 items-center justify-center p-4 border border-gray-200 rounded-xl shadow-sm">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Award className="w-6 h-6 text-blue-700"/>
                      </div>
                      <div>
                        <h1 className="text-sm font-semibold">Research Excellence</h1>
                        <p className="text-xs text-gray-500 ">2022</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4"> 
                    <div className="flex gap-4 items-center justify-center p-4 border border-gray-200 rounded-xl shadow-sm">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Award className="w-6 h-6 text-blue-700"/>
                      </div>
                      <div>
                        <h1 className="text-sm font-semibold">Academic Partner</h1>
                        <p className="text-xs text-gray-500 ">2020</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4"> 
                    <div className="flex gap-4 items-center justify-center p-4 border border-gray-200 rounded-xl shadow-sm">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Award className="w-6 h-6 text-blue-700"/>
                      </div>
                      <div>
                        <h1 className="text-sm font-semibold">Innovation Award</h1>
                        <p className="text-xs text-gray-500 ">2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          
          {/* Carousel Section */}
          <section className="w-170 h-120">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            loop
            className="rounded-xl overflow-hidden swiper-hero"
          >
            <SwiperSlide>
              <div className="relative w-170 h-120 overflow-hidden rounded-xl">
                <img
                  src={Iptbm}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/35 via-blue-500/15 to-transparent" />
              </div>
            </SwiperSlide>

             <SwiperSlide>
              <div className="relative w-170 h-120 overflow-hidden rounded-xl">
                <img
                  src={LspuImage1}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/35 via-blue-500/15 to-transparent" />
              </div>
            </SwiperSlide>


             <SwiperSlide>
              <div className="relative w-170 h-120 overflow-hidden rounded-xl">
                <img
                  src={LspuImage2}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/35 via-blue-500/15 to-transparent" />
              </div>
            </SwiperSlide>

          </Swiper>
        </section>

        </div>
      </main>
    </>
  );
};

export default Home;
