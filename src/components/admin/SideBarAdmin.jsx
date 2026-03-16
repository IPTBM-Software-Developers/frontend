import { useState } from "react";

import { ChevronsLeftRight, LayoutDashboard, Cpu, Megaphone, Trophy, Settings, CircleUserRound, UserRoundPen, Key, Lock, ChevronsUpDown } from "lucide-react";
import { Link } from "react-router-dom";

import IptbmLogo from "../../assets/iptbm-logo-noBG.png";

const SideBarAdmin = () => {
  const [sideBar, setSideBar] = useState(false); // True(Hidden), False(Flex)

  const [viewProfile, setViewProfile] = useState(true);

  const navLinks = [
    {
      link: "Dashboard",
      path: "/admin",
      icon: <LayoutDashboard size={20} />,

    },
    {
      link: "Technologies",
      path: "/admin/technologies",
      icon: <Cpu size={20}/>,

    },
    {
      link: "Announcements",
      path: "/admin/announcement",
      icon: <Megaphone size={20}/>,

    },
    {
      link: "Awards",
      path: "/admin/awards",
      icon: <Trophy size={20}/>,

    },
  ];

  const profileName = [
    {
      name: "Mark Nicholas Razon",
      email: "marknicholas@gmail.com",
    },
  ];

  const profileOptions = [
    {
      Text: "User Information",
      Icon: <UserRoundPen />,
    },
    {
      Text: "Password Change",
      Icon: <Key />,
    },
    {
      Text: "Account Security (2FA)",
      Icon: <Lock />,
    }
  ];

  return(
    <>
      {/* <section className="relative flex w-full h-screen bg-gray-50"> */}
        {/* The parent element should have a position relative */}
        <button
          className={`absolute cursor-pointer rounded-3xl p-1 bg-gray-100 hover:bg-gray-200 transition-all duration-300 ${sideBar ? "top-5 left-5 xl:top-20 xl:left-16" : "top-5 xl:top-20 left-71"}`}
          onClick={() => {
            setSideBar(!sideBar);
            setViewProfile(true);
          }}          
        >
          <ChevronsLeftRight size={22} className="text-gray-500"/>
        </button>

        <aside
          className={`flex justify-center bg-white border-r transition-all duration-200 overflow-hidden py-8 ${sideBar ? "w-0 xl:w-[80px] h-full" : "w-full xl:w-[300px] h-full"}`}
        >
          
          <nav className="w-[300px] h-full flex flex-col justify-between">
            <section className="flex flex-col gap-6 px-4">
              <header
                className="w-full space-y-8"
              >              
                {/* Logo */}
                <div
                  className={`flex w-full items-center ${sideBar ? "justify-center" : "gap-2"}`}
                >
                  <span 
                    className="block w-14 h-10 bg-no-repeat bg-contain bg-center" 
                    style={{ backgroundImage: `url(${IptbmLogo})` }}
                    role="img" 
                    aria-label="Logo"
                  >
                    {/* The img tag is removed; the span handles the visual now */}
                  </span>

                  <span
                    className={`w-full ${sideBar ? "hidden" : "block"}`}
                  >
                    <h1 className="text-sm font-semibold leading-none">Intelectual Property</h1>
                    <span className="text-xs font-medium text-gray-400">LSPU-IPTBM</span>
                  </span>
                </div>
              </header>

              {/* Divider */}
              <div
                className="flex justify-center items-center w-full"
              >
                <span
                  className={`flex border-t-2 rounded-xl items-center px-4 ${sideBar ? "w-[70%]" : "w-[95%]"}`}
                >
                </span>
              </div>

              <ul 
                className="space-y-4"
              >
                {navLinks.map((item, index) => (
                  <li 
                    key={index}
                    className=""
                  >
                    <Link 
                      to={item.path}
                      className={`flex w-full items-center py-2 text-gray-600 rounded-lg hover:bg-gray-100 hover:text-black transition-all whitespace-nowrap text-sm
                      ${sideBar ? "justify-center" : "gap-4 pl-2 pr-8"}`}
                    >
                      {item.icon}
                      <span
                        className={`${sideBar ? "hidden" : "block"}`}
                      >
                        {item.link}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <div className="px-4 space-y-4">
              <Link 
                to=""
                className={`flex w-full items-center py-2 text-gray-600 rounded-lg hover:bg-gray-100 hover:text-black transition-all whitespace-nowrap text-sm
                ${sideBar ? "justify-center" : "gap-4 pl-2 pr-8 py-2"}`}
              >
                <Settings size={20}/>
                <span
                  className={`${sideBar ? "hidden" : "block"}`}
                >
                  Settings
                </span>
              </Link>

              {/* Divider */}
              <div
                className="flex justify-center items-center w-full"
              >
                <span
                  className={`flex border-t-2 rounded-xl items-center px-4 ${sideBar ? "w-[70%]" : "w-[95%]"}`}
                >
                </span>
              </div>
              
              {/* Profile */}
              
              {viewProfile ? 
                <div
                  className={`flex items-center py-2 w-full rounded-lg hover:bg-gray-100 cursor-pointer transition-all 
                  ${sideBar ? "justify-center" : "gap-2 pl-2 pr-8 py-2"}`}
                  onClick={() => {
                    setViewProfile(false);
                    setSideBar(false);
                  }}
                >
                  <span>
                    <CircleUserRound size={20} className="text-gray-700"/>
                  </span>

                  {profileName.map((item, index) => (
                    <ul
                      key={index}
                      className={`${sideBar ? "hidden" : "block"}`}
                    >
                      <li className="text-sm font-medium">
                        {item.name}
                      </li>

                      <li className="text-xs text-gray-500">
                        {item.email}
                      </li>
                    </ul>
                  ))}

                  <span>
                    <ChevronsUpDown 
                      className={`text-gray-700 ml-[12px] ${sideBar ? "hidden" : "block"}`} 
                      />
                  </span>
                </div>
                : <div
                    className="flex flex-col w-full border rounded-lg p-4 "
                    // onClick={() => setViewProfile(!viewProfile)}
                  >
                    {profileOptions.map((item, index) => (
                      <ul
                        key={index}
                        className="flex flex-col w-full"
                      >
                        <li
                          className={`flex w-full gap-4 pl-2 pr-8 items-center py-2 text-gray-600 rounded-lg hover:bg-gray-100 hover:text-black transition-all whitespace-nowrap text-sm cursor-pointer
                          ${sideBar ? "opacity-0" : "opacity-100"}`} 
                        >
                          {item.Icon}
                          {item.Text}
                        </li>
                      </ul>
                    ))}

                    <aside
                      className="mt-5"
                    >
                      <button
                        className="w-full py-2 rounded-lg bg-red-700 text-white text-sm hover:bg-red-800 active:bg-red-900 cursor-pointer"
                      >
                        Log Out
                      </button>
                    </aside>
                  </div>
              }
            </div>
          </nav>
        </aside>

        
      {/* </section> */}
      
    </>
  );
};

export default SideBarAdmin;