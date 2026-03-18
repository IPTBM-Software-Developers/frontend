import { useState } from "react";

import { ChevronsLeftRight, LayoutDashboard, Cpu, Megaphone, Trophy, Settings, CircleUserRound, UserRoundPen, Key, Lock, ChevronsUpDown } from "lucide-react";
import { Link } from "react-router-dom";

import IptbmLogo from "../../assets/iptbm-logo-noBG.png";

const AdminSettingsSidebar = () => {
  const [sideBar, setSideBar] = useState(false); // True(Hidden), False(Flex)

  const [viewProfile, setViewProfile] = useState(true);

  const navLinks = [
    {
      link: "Profile",
      path: "/admin/adminsettings",
      icon: <LayoutDashboard size={20} />,

    },
    {
      link: "Appearance & Display",
      path: "/admin/adminsettings/display",
      icon: <Cpu size={20}/>,

    },
    {
      link: "Contacts",
      path: "/admin/adminsettings/contacts",
      icon: <Megaphone size={20}/>,

    },
    {
      link: "Data Management",
      path: "/admin/adminsettings/datamanagement",
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
        <aside
          className={`flex justify-center bg-white border-r transition-all duration-200 overflow-hidden py-8 ${sideBar ? "w-0 xl:w-[80px] h-full" : "w-full xl:w-[250px] h-full"}`}
        >
          
          <nav className="w-[300px] h-full flex flex-col justify-between">
            <section className="flex flex-col gap-6 px-4">
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
          </nav>
        </aside>

        
      {/* </section> */}
      
    </>
  );
};

export default AdminSettingsSidebar;