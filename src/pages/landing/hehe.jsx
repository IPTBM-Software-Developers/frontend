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

import LoopLogo from "@/components/landing/LoopLogo";


const awardCards = [
  {
    node: (
      <div className="flex gap-4 items-center justify-center p-4 border border-gray-200 rounded-xl shadow-sm w-full md:w-fit">
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
      <div className="flex gap-4 items-center justify-center p-4 border border-gray-200 rounded-xl shadow-sm w-full md:w-fit">
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
      <div className="flex gap-4 items-center justify-center p-4 border border-gray-200 rounded-xl shadow-sm w-full md:w-fit">
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
const Hehe = () => {
  return (
    <>
      <main className="flex flex-wrap justify-center items-center w-full border border-red-500 h-screen px-[3%]">
        <div className="border border-blue-500
          w-full 
          sm:max-w-xl
          md:max-w-3xl
          lg:max-w-7xl
          xl:max-w-[1736px] 
          h-50
          overflow-hidden">
            {/* Awards & Recogitions */}
            <div className="
              w-full
              bg-white p-4 rounded-xl shadow-sm border border-red-500">
              <h1 className="text-gray-500 font-medium text-[clamp(0.9rem,1vw,1rem)]">
                Awards & Recognitions
              </h1>
  
              <LoopLogo
                logos={awardCards}   // array of award card nodes
                speed={100}          // horizontal speed
                direction="left"
                logoHeight={0}     // approximate height of your cards
                gap={24}             // spacing between cards
                hoverSpeed={0}       // stop movement on hover
                scaleOnHover={false}         // optional scaling effect
                fadeOut              // fade cards at edges
                fadeOutColor="#ffffff"
                useCustomRender={true} // needed for React nodes
                ariaLabel="Awards & Recognitions"
              />
            </div>
        </div>
        <div className="border border-blue-500
          w-lg 
          sm:max-w-xl
          md:max-w-3xl
          lg:max-w-7xl
          xl:max-w-[1536px] 
          h-50">
        </div>
      </main>
    </>
  );
};

export default Hehe;