// Images
import UniversityPhoto from "../../assets/UniversityPhotoSignUp3.jpg";
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Using lucide-react for icons
import Google from "../../assets/GoogleIcon.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Input styling for consistency
  const inputClass = "w-full p-4 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 font-light placeholder-gray-400 transition-all text-sm bg-gray-100";
  const labelClass = "block text-sm font-medium text-white mb-1";

  
  return(
    <>
      <section 
        className="relative flex justify-center xl:justify-center xl:items-center w-full min-h-screen bg-gray-100 py-4 px-2 md:px-6"
        // style={{ 
        //   backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${UniversityPhoto})` 
        // }}
      >
        <div className="flex flex-col p-6 md:p-8 lg:p-10 xl:p-12 rounded-md
          w-full sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[55%] 2xl:w-[35%]
          h-auto bg-white shadow-2xl border border-white/20 gap-4">
          <header className="text-center mb-6 flex flex-col gap-2">
            <h1 className="text-black font-semibold text-4xl">Sign Up</h1>
            <p className="text-gray-500 text-md font-light">Please enter your credentials to create your account.</p>
          </header>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Name Row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                {/* <label className={labelClass}>First Name</label> */}
                <input type="text" placeholder="Enter your first name here" className={inputClass} />
              </div>
              <div className="flex-1">
                {/* <label className={labelClass}>Last name</label> */}
                <input type="text" placeholder="Enter your last name here" className={inputClass} />
              </div>
            </div>

            {/* Middle Name */}
            <div className="mb-12">
              {/* <label className={labelClass}>Middle Name</label> */}
              <input type="text" placeholder="Enter your middle name here" className={inputClass} />
            </div>

            {/* Username */}
            <div className="mb-12">
              {/* <label className={labelClass}>Username</label> */}
              <input type="email" placeholder="Enter your email here" className={inputClass} />
            </div>

            {/* Password */}
            <div className="relative">
              {/* <label className={labelClass}>Password</label> */}
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
                className={inputClass} 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                // Changed top-9 to top-1/2 and added -translate-y-1/2
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              {/* <label className={labelClass}>Confirm Password</label> */}
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="Confirm your password" 
                className={inputClass} 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                // Changed top-9 to top-1/2 and added -translate-y-1/2
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="w-4 h-4 rounded accent-sky-500 cursor-pointer" />
              <label htmlFor="terms" className="text-sm text-black gap-2 flex">
                I agree to the <a href="#" className="underline text-blue-500">Terms and Conditions</a>
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full py-4 bg-blue-500 hover:opacity-[0.9] active:scale-[0.99] text-white font-base rounded-xl shadow-lg transition-colors cursor-pointer">
              Create account
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t-2 rounded-xl border-gray-300"></div>
              <span className="px-3 text-gray-500 text-sm">or</span>
              <div className="flex-grow border-t-2 rounded-xl border-gray-300"></div>
            </div>

            {/* Google Button */}
            <button className="flex items-center justify-center w-full py-2.5 hover:opacity-[0.9] active:scale-[0.99] bg-white text-gray-500 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
              <img src={Google} alt="Google" className="w-17 h-10" />
              Sign In with Google
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;