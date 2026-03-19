import { UserRound } from "lucide-react";

import { Link } from "react-router-dom";

const AdminSettingsProfile = () => {
  return(
    <>
      <main
        className="w-full h-screen flex flex-col items-center"
      >
        <section
          className="w-full h-full flex flex-col border rounded-xl p-8 gap-6 bg-white"        
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

          {/* Personal Info*/}
          <div
            className="flex flex-col gap-6 w-full h-fit"
          >
            <h1
              className="text-lg font-medium text-black"
            >
              Personal Information
            </h1>

            <div
              className="grid grid-cols-3 "            
            >
              {/* First Name */}
              <div
                className=" flex flex-col gap-8"
              >
                <span className="space-y-1">
                  <h1 className="text-gray-500 text-sm">First Name</h1>
                  <p className="border px-4 py-2 text-sm font-medium rounded-lg w-[300px] cursor-not-allowed">Mark Nicholas</p>
                </span>

                <span className="space-y-1">
                  <h1 className="text-gray-500 text-sm">Last Name</h1>
                  <p className="border px-4 py-2 text-sm font-medium rounded-lg w-[300px] cursor-not-allowed">Razon</p>
                </span>

                <span className="space-y-1">
                  <h1 className="text-gray-500 text-sm">Email</h1>
                  <p className="border px-4 py-2 text-sm font-medium rounded-lg w-[300px] cursor-not-allowed">Razon@gmail.com</p>
                </span>
              </div>

              {/* Middle Name */}
              <div
                className="flex flex-col justify-between"
              >
                <span className="space-y-1">
                  <h1 className="text-gray-500 text-sm">Second Name</h1>
                  <p className="border px-4 py-2 text-sm font-medium rounded-lg w-[300px] cursor-not-allowed">Corpuz</p>
                </span>

                <span className="space-y-1">
                  <h1 className="text-gray-500 text-sm">Role</h1>
                  <p className="border px-4 py-2 text-sm font-medium rounded-lg w-[300px] cursor-not-allowed">Admin</p>
                </span>
              </div>
            </div>

            <span className="w-full border-t border-gray-300"></span>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdminSettingsProfile;