import { CircleCheck, ArrowLeft } from "lucide-react";

import { Link } from "react-router-dom";

// Image
import IptbmLogo from "../../assets/iptbm-logo-noBG.png"


const PasswordSuccess = () => {
  return(
    <>
      <main className="flex justify-center items-center w-full min-h-screen px-4 bg-white">
        <section className="w-lg flex flex-col justify-center items-center space-y-8">
          <div className="p-4 rounded-4xl bg-green-100">
            <CircleCheck size={28} className="text-green-500"/>
          </div>

          <span className="w-full text-center space-y-2 ">
            <h1 className="text-black text-2xl font-semibold">
              Password Reset Successfully
            </h1>

            <p className="text-sm text-gray-400">
              Your password has been successfully reset. <br/> Click below to login 
            </p>
          </span>

          <Link 
            to="/login"
            className="w-full p-4 bg-blue-700 text-white text-center rounded-lg cursor-pointer hover:bg-blue-800 active:bg-blue-900 transition-all"
          >
            Continue
          </Link>
        </section>
      </main>
    </>
  );
};

export default PasswordSuccess;