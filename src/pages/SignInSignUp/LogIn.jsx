import { Link } from "react-router-dom";
  
// Image
import GoogleIcon from "../../assets/GoogleIcon.png";
import IptbmLogo from "../../assets/iptbm-logo-noBG.png"
import UniversityPhoto from "../../assets/UniversityPhotoSample2.jpg";



const LogIn = () => {
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
        <section className="h-180 md:h-200 xl:h-screen w-full xl:w-[45%] flex flex-col justify-center items-center">
          <div className="flex flex-col w-[85%] md:w-[60%] xl:w-[70%] 2xl:w-[60%] gap-8">
            <section className="flex flex-col gap-4">
              <h1 className="text-[clamp(2.6rem,5vw,3rem)] font-semibold leading-tight">
                <span className="text-lg">Hola,</span> <br/> Welcome Back! 
              </h1>
              <h2 className="text-gray-500 text-[clamp(0.75rem,1vw,0.95rem)]">
                Please enter your email and password
              </h2>
            </section>

            {/* Forms */}
            <section className="flex flex-col gap-6">
              <form action="" className="flex flex-col gap-2">
                <input type="email" placeholder="Enter your email" required className="text-xs xl:text-sm w-full bg-gray-100 p-4 rounded-md focus:outline-blue-400" />
              </form>

              <form action="" className="flex flex-col gap-2">
                <input type="password" placeholder="Enter your password" required className="text-xs xl:text-sm w-full bg-gray-100 p-4 rounded-md focus:outline-blue-400" />
                <Link to="/forgotpassword" className="text-blue-700 text-xs xl:text-sm w-full text-end">Forgot Password?</Link>
              </form>

              <form action="" className="flex gap-2 gap-2">
                <input type="checkbox" />
                <label htmlFor="" className="font-medium text-xs xl:text-sm">Remember me</label>
              </form>
            </section>

            <section className="flex flex-col gap-4">
              <button className="shadow-sm transition-all cursor-pointer w-full bg-blue-700 hover:bg-blue-800 active:bg-blue-900 py-4 rounded-lg text-white text-sm">
                Sign in
              </button>

              <section className="flex items-center gap-3">
                <div className="w-full bg-gray-200 h-[2px]"></div>
                <h2 className="text-gray-500">or</h2>
                <div className="w-full bg-gray-200 h-[2px]"></div>
              </section>

              <section className=" shadow-xs w-full flex border py-2  rounded-xl justify-center hover:shadow-sm cursor-pointer transition-all active:scale-[0.99]">
                <img src={GoogleIcon} alt="Google" className="w-15 h-8" />
                <button className="text-gray-500 cursor-pointer text-sm">Continue with Google </button>
              </section>
            </section>

            <section>
              <div className="flex gap-2 text-sm justify-center ">
                <h2 >Don't have an account? </h2>
                <Link to="/signup" className="text-blue-500">Sign Up</Link>
              </div>
            </section>
          </div>
        </section>


      </main>
    </>
  );
};

export default LogIn;