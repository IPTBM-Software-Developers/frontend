import { Link } from "react-router-dom";
  
// Image
import GoogleIcon from "../../assets/GoogleIcon.png";
import IptbmLogo from "../../assets/iptbm-logo-noBG.png"
import UniversityPhoto from "../../assets/UniversityPhotoSample2.jpg";

// Icons
import { KeyRound, ArrowLeft } from "lucide-react";




const ResetPassword = () => {

  return(
      <>
        <main className="flex flex-col xl:flex-row w-full min-h-screen">
          {/* Display Section */}
          <section 
            className="hidden relative xl:flex flex-col justify-between p-8 md:p-8 h-150 md:h-200 xl:h-screen w-full xl:w-[55%] rounded-b-4xl xl:rounded-none bg-cover md:bg-[center_55%] lg:bg-[center_75%] xl:bg-[center_60%] 2xl:bg-[center_80%]"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${UniversityPhoto})` 
            }}
          >
            {/* TOP CONTENT: Logo */}
            <div className="flex px-4 py-2 gap-4 items-center w-full md:w-fit text-white  bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg">
              <Link to="/landing">
                <img src={IptbmLogo} alt="Iptbm Logo" className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0" />
              </Link>
              <h1 className="leading-tight text-xs md:text-base font-medium">
                Intellectual Property and Technology <br className="hidden md:block"/> Business Management
              </h1>
            </div>
  
            {/* BOTTOM CONTENT: Text & Awards */}
            <div className="flex flex-col gap-6 mt-auto"> 
              <div className="space-y-4">
                <h1 className="font-medium text-white w-[85%] xl:w-[65%] text-2xl md:text-4xl xl:text-3xl 2xl:text-5xl text-start ">
                  Protect Your Intellectual Property
                </h1>
                <p className="font-light w-[70%] md:w-[50%] text-white text-xs md:text-base xl:text-sm 2xl:text-lg ">
                  Enterprise-grade tools to protect, manage, and monetize your intellectual property.
                </p>
              </div>
            </div>
          </section>
  
  
          {/* Login Section */}
          <section 
            className="flex flex-col justify-center items-center 
            w-full xl:w-[45%] 
            h-180 md:h-200 xl:h-screen"
          >
            <section className="w-full max-w-lg flex flex-col justify-center items-center space-y-8 px-8">
              <span className="w-full text-start space-y-6">
                <h1 className="text-black  text-3xl xl:text-4xl font-semibold flex flex-col gap-2">
                  <span className="text-lg xl:text-xl">Hola!</span> Let's set a  new password
                </h1>

                <p className="text-sm text-gray-400">
                  Your new password must be different to previously used passwords
                </p>
              </span>

              <form 
                action=""
                className="w-full flex flex-col space-y-2"
              >
                {/* New Password */}
                <label htmlFor="">
                  Password
                </label>

                <input 
                  required
                  type="password"
                  className="border rounded-md p-4 text-xs md:text-sm mb-4 focus:outline-blue-700"
                  placeholder="**********"  
                />

                {/* Confirm New Password */}
                <label htmlFor="">
                  Confirm Password
                </label>

                <input 
                  required
                  type="password"
                  className="border rounded-md p-4 text-xs md:text-sm mb-4 focus:outline-blue-700"
                  placeholder="**********"  
                />

                <button 
                  type="submit"
                  className="p-4 bg-blue-700 text-white rounded-lg cursor-pointer hover:bg-blue-800 active:bg-blue-900 transition-all"
                >
                  Reset Password
                </button>
              </form>

              <Link 
                to="/login"
                className="text-sm flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Back to login
              </Link>
            </section>
          </section>
  
  
        </main>
      </>
    );
  
};


export default ResetPassword;