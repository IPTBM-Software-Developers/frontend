import { UserRound } from "lucide-react";

import { Link } from "react-router-dom";

const AdminSettingsProfile = () => {
  return(
    <>
      <main
        className="w-full h-screen flex flex-col items-center"
      >
        <section
          className="w-full h-full flex flex-col border rounded-4xl p-8 gap-6 bg-white"        
        >
          {/* Profile Information */}
          <header
            className="flex flex-col gap-6 w-full h-fit"
          >
            <h1
              className="text-lg font-medium text-black"
            >
              Profile
            </h1>

            <div
              className="flex items-center gap-4"
            >
              <span
                className="p-2 rounded-full bg-gray-100"
              >
                <UserRound size={28} className="text-gray-600"/>
              </span>

              <span
                className="space-y-1"
              >
                <h2 className="text-sm font-medium">Mark Nicholas Razon</h2>
                <h3 className="text-xs text-gray-500">Username@gmail.com</h3>
              </span>
            </div>

            <span className="w-full border-t border-gray-300"></span>
          </header>

          {/* Change Password */}
          <div
            className="flex flex-col gap-6 w-full h-fit"
          >
            <h1
              className="text-lg font-medium text-black"
            >
              Account Security
            </h1>

            <div
              className="flex justify-between w-full"
            >
              <form action="" className="flex flex-col gap-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" placeholder="Enter your email" className="bg-gray-100 w-[400px] px-4 py-4 rounded-lg text-xs"/>
              </form>

              <button
                className="w-fit h-fit text-white bg-blue-500 text-sm font-medium px-4 py-2 rounded-md cursor-pointer shadow-sm hover:bg-blue-600 active:bg-blue-700 transition-all mt-auto"
              >
                Verify
              </button>
            </div>

            <span className="w-full border-t border-gray-300"></span>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdminSettingsProfile;