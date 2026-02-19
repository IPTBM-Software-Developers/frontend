import { Link } from "react-router-dom";

import LoopLogo from "@/components/landing/LoopLogo";
  
// Image
import GoogleIcon from "../../assets/GoogleIcon.png";
import IptbmLogo from "../../assets/iptbm-logo-noBG.png"
import UniversityPhoto from "../../assets/UniversityPhotoSample.jpg";

// Icon
import { Award } from "lucide-react";


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


const LogIn = () => {
  return(
    <>
      <main className="flex flex-col xl:flex-row w-full h-auto">
        {/* Display Section */}
        <section className="relative h-200 xl:h-screen w-full xl:w-[55%] rounded-b-4xl xl:rounded-none">
          {/* Background Image */}
          <img src={UniversityPhoto} alt="University Photo" className="w-full h-full object-cover brightness-80 rounded-b-4xl xl:rounded-none" />
          
          {/* Logo Container */}
          <div className="
            /* Mobile (Default): Center it */
            absolute top-8 left-1/2 -translate-x-1/2 
            /* Tablet/Desktop (md and up): Pin to left */
            md:left-8 md:translate-x-0 
            
            flex px-4 py-2 gap-4 items-center w-[90%] md:w-fit 
            text-sm text-white font-semibold bg-black/5 backdrop-blur-sm 
            border border-white/20 rounded-2xl shadow-lg z-20"
          >
            <img src={IptbmLogo} alt="Iptbm Logo" className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0"/>
            <h1 className="leading-tight text-xs md:text-sm text-start">
              Intellectual Property and Technology <br className="hidden md:block"/> Business Management
            </h1>
          </div>

          {/* Blur Content */}
          <div className="w-[95%] h-[60%] md:w-[85%] xl:w-[80%] 2xl:w-[70%] h-[50%] p-6 bg-black/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center gap-6">
            <h1 className="w-full font-semibold text-white text-4xl text-start">Secure and Manage your Intellectual Proterty Assets</h1>
            <h2 className="w-[70%] xl:w-[50%] text-white font-thin">IPTBM provides enterprise-grade solutions for protecting, managing, and monetizing intellectual property with cutting-edge technology and compliance frameworks.</h2>
            
            {/* Awards */}
            <div className="w-full ">
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
          </div>
        </section>


        {/* Login Section */}
        <section className="h-180 md:h-200 xl:h-screen w-full xl:w-[45%] flex flex-col justify-center items-center">
          <div className="flex flex-col w-[90%] md:w-[60%] xl:w-[70%] 2xl:w-[60%] gap-8">
            <section className="flex flex-col gap-4">
              <h1 className="text-[clamp(2.6rem,5vw,3rem)] font-semibold leading-tight text-blue-700">
                Hola, <br/> Welcome Back! 
              </h1>
              <h2 className="text-gray-500 text-[clamp(0.75rem,1vw,0.95rem)]">
                Please enter your email and password
              </h2>
            </section>

            <section className="flex flex-col gap-6">
              <form action="" className="flex flex-col gap-2">
                <input type="email" placeholder="Enter your email" required className="text-sm w-full bg-gray-100 p-4 rounded-md focus:outline-blue-400" />
              </form>

              <form action="" className="flex flex-col gap-2">
                <input type="password" placeholder="Enter your password" required className="text-sm w-full bg-gray-100 p-4 rounded-md focus:outline-blue-400" />
                <Link to="" className="text-blue-500 text-sm w-full text-end">Forgot Password?</Link>
              </form>

              <form action="" className="flex gap-2 gap-2">
                <input type="checkbox" />
                <label htmlFor="" className="font-medium text-sm">Remember me</label>
              </form>
            </section>

            <section className="flex flex-col gap-4">
              <button className="shadow-sm transition-all cursor-pointer w-full bg-blue-500 hover:bg-blue-400 active:scale-[0.99] py-3 rounded-lg text-white">
                Sign in
              </button>

              <section className="flex items-center gap-3">
                <div className="w-full bg-gray-200 h-[2px]"></div>
                <h2 className="text-gray-500">or</h2>
                <div className="w-full bg-gray-200 h-[2px]"></div>
              </section>

              <section className=" shadow-xs w-full flex border py-2  rounded-xl justify-center hover:shadow-sm cursor-pointer transition-all active:scale-[0.99]">
                <img src={GoogleIcon} alt="Google" className="w-15 h-8" />
                <button className="text-gray-500 cursor-pointer">Continue with Google </button>
              </section>
            </section>

            <section>
              <div className="flex gap-2 text-sm justify-center ">
                <h2>Don't have an account? </h2>
                <Link to="" className="text-blue-500">Sign Up</Link>
              </div>
            </section>
          </div>
        </section>


      </main>
    </>
  );
};

export default LogIn;