import UniversityPhoto2 from "../../assets/UniversityPhoto2.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

import SampleNavbar from "@/components/admin/SampleNavbar";


const SampleLog = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <main className="relative w-full h-screen flex overflow-hidden">
      <SampleNavbar 
        isMenuOpen={isMenuOpen} 
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} 
      />
      
      {/* LEFT SIDE */}
      <section 
        className="w-1/2 h-full bg-white p-8 flex flex-col"
      >
        <motion.div 
          className="w-full h-fit flex mt-auto gap-2"
          initial={{opacity: 0, x:-100}}
          animate={{opacity: 100, x: 0}}
          transition={{duration: 1, ease: "easeOut", delay:1}}
        >
          <Link 
            to="/sample" 
            className="group flex items-center gap-2 border px-6 py-4 rounded-lg text-sm font-medium text-white bg-blue-900"
          >
            Get Started
            <ArrowRight 
              size={20} 
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link to="/sample" className="border px-6 py-4 rounded-lg text-sm font-medium text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-700">
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* RIGHT SIDE */}
      <section 
        className="w-1/2 h-full bg-cover bg-center flex flex-col p-8 bg-black/20 bg-blend-darken" 
        style={{ backgroundImage: `url(${UniversityPhoto2})` }}
      > 
        <div className="w-full grid grid-cols-2 mt-auto">
          <motion.h2 
            className="text-white w-full text-3xl font-instrument font-medium text-start leading-none"
            initial={{y: 100, opacity: 0}}
            animate={{y: 0, opacity:1}}
            transition={{duration: 1, ease: "easeOut", delay: 1}}
          >
            Robust enterprise systems designed to protect, manage, and scale your intellectual property.
          </motion.h2>

          <motion.h2 
            className="text-white w-full text-2xl font-semibold text-end mt-auto leading-none"
            initial={{y: 100, opacity: 0}}
            animate={{y: 0, opacity:1}}
            transition={{duration: 1, ease: "easeOut", delay: 1.5}}
          >
            Innovation, defined by <br /> excellence.
          </motion.h2>
        </div>
      </section>

      <div className=" absolute inset-0 flex flex-col items-center justify-center z-30 text-blue-900 pointer-events-none font-instrument text-[7rem] 2xl:text-[9rem] font-medium leading-[1.1] scale-y-110">
        <motion.h1 
          className=" flex space-x-8 pr-20"
          initial={{y: 100, opacity: 0}}
          animate={{y: 0, opacity:1}}
          transition={{duration: 1, ease: "easeOut" }}
        >
          <span>Secure</span>
          <span className="text-white">your</span>
        </motion.h1>
        
        <motion.h1 
          className=" flex space-x-8 pr-36 flex italic"
          initial={{y: 100, opacity: 0}}
          animate={{y: 0, opacity:1}}
          transition={{duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <span>Intellectual</span>
          <span className="text-white">Property</span>
        </motion.h1>
        {/* <h1 className="bg-[linear-gradient(to_right,_#06033f_50%,_white_50%)] bg-clip-text text-transparent">
          Assets
        </h1> */}
      </div>
    </main>
  );
};

export default SampleLog;
