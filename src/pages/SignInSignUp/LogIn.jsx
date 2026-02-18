import { Link } from "react-router-dom";
  
// Image
import IptbmLogo from "../../assets/iptbm-logo-noBG.png";

  const LogIn = () => {
    return(
      <>
        
        <main className="w-full h-auto xl:h-screen pt-4 gap-2 flex items-center xl:justify-center xl:items-center bg-[#f8f9fa] flex-col xl:flex-row xl:px-12 overflow-y-auto">       
          <section className="w-[90%] xl:w-3xl h-170  xl:h-200 bg-[#f8f9fa] rounded-lg flex flex-col justify-center items-center border px-4">
            <div className="w-[95%] xl:w-[60%] h-full xl:h-auto gap-8 flex flex-col justify-center">
              <section className="flex flex-col text-center">
                <h1 className="text-[clamp(2.6rem,5vw,3rem)] font-semibold">
                  Welcome Back!
                </h1>
                <h2 className="text-gray-500 text-[clamp(0.75rem,1vw,0.95rem)]">
                  Enter your email and password
                </h2>
              </section>

              <section className="flex flex-col gap-6">
                <form action="" className="flex flex-col gap-2">
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder="juandelacruz@gmail.com" className="text-sm w-full bg-gray-100 p-4 rounded-md focus:outline-blue-400" />
                </form>

                <form action="" className="flex flex-col gap-2">
                  <label htmlFor="">Password</label>
                  <input type="password" placeholder="**********" className="text-sm w-full bg-gray-100 p-4 rounded-md focus:outline-blue-400" />
                  <Link to="" className="text-blue-500 underline text-sm w-full text-end">Forgot Password?</Link>
                </form>

                <form action="" className="flex gap-2 gap-2">
                  <input type="checkbox" />
                  <label htmlFor="" className="font-medium text-sm">Remember me</label>
                </form>
              </section>

              <button className="transition-all cursor-pointer w-full bg-blue-500 hover:bg-blue-400 active:scale-[0.99] py-3 rounded-lg text-white">
                Sign in
              </button>

              <section>
                <div className="flex gap-2 text-sm">
                  <h2>Don't have an account? </h2>
                  <Link to="" className="text-blue-500">Sign Up</Link>
                </div>
              </section>
            </div>
          </section>

          <section className="w-[100%] rounded-t-[30px] xl:rounded-lg xl:w-2xl h-160 md:h-180 xl:h-200 bg-blue-600 flex justify-center items-center">
            {/* <img src={IptbmLogo} alt="Iptbm Logo" className="h-80 w-80" /> */}
          </section>
          
        </main>
      </>
    );
  };

  export default LogIn;