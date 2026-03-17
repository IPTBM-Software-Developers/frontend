import SideBarAdmin from "@/components/admin/SideBarAdmin";
import LineGraphAdmin from "@/components/admin/LineGraphAdmin";
import DonutChartAdmin from "@/components/admin/DonutChartAdmin";

import { Cpu, Users, Trophy, Newspaper, ArrowUpRight} from "lucide-react";
import BarGraphAdmin from "@/components/admin/BarGraphAdmin";
import PieChartAdmin from "@/components/admin/PieChartAdmin";

const topCards = [
  {
    label: "Total Technologies",
    number: "100",
    footer: "View More",
    icon: <Cpu />
  },
  {
    label: "Total Users",
    number: "500",
    footer: "View More",
    icon: <Users />
  },
  {
    label: "Total Awards",
    number: "600",
    footer: "View More",
    icon: <Trophy />
  },
  {
    label: "Total Announcements",
    number: "900",
    footer: "View More",
    icon: <Newspaper />
  },
];

const AdminDashboard = () => {
  return(
    <>
      <section
        className="w-full min-h-full flex flex-col items-center px-4 py-8 gap-8"
      >
        <header
          className="w-full xl:max-w-7xl space-y-2"
        >
          <h1
            className="text-4xl font-semibold"
          >
            <span className="text-base">Hola, <br/> </span> Welcome Back!
          </h1>

          <p
            className="text-sm text-gray-500"
          >
            Today is March 16, 2026
          </p>
        </header>

        {/* Top Cards */}
        <div
          className="grid grid-cols md:grid-cols-2 xl:grid-cols-4 gap-4
          w-full xl:max-w-7xl
          h-fit"
        > 
          {/* Cards */}
          {topCards.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-4xl bg-white shadow-xs border
              px-4 py-6 gap-4"
            >
              <span
                className="flex justify-between"
              >
                <h2
                  className="text-sm text-black font-medium"
                >
                  {item.label}
                </h2>

                <h3
                  className="text-blue-600"
                >
                  {item.icon}
                </h3>
              </span>

              <span
                className="flex flex-col gap-2"
              >
                <h1
                  className="text-4xl font-semibold"
                >
                  {item.number}
                </h1>

                <p
                  className="flex gap-1 items-center text-xs text-gray-500 font-normal hover:text-blue-700 cursor-pointer"
                >
                  {item.footer}
                  <ArrowUpRight size={16} />
                </p>
              </span>
            </div>
          ))}

        </div>

        {/* Technology Status Line Graph */}
       <div
        className="grid grid-cols-1 xl:grid-cols-3 w-full xl:max-w-7xl gap-4"
       >
          {/* Line Graph */}
          <div
            className="col-span-2 w-full h-full border rounded-4xl shadow-xs bg-white overflow-hidden p-8"
          >
            <h1
              className="text-sm text-black font-medium"
            >
              Technology Status Overview
            </h1>
            <LineGraphAdmin />
          </div>

          {/* Pie Chart Graph */}
          <div
            className="flex flex-col flex-1 w-full xl:max-w-7xl border rounded-4xl shadow-xs bg-white overflow-hidden p-8"
          >
            <h3 className="text-sm text-black font-medium mb-4">Technologies by Visibility</h3>
            <div className="w-full h-full flex flex-col">
              <PieChartAdmin />
            </div>
          </div>
       </div>

        {/* Technologies by Agency Donut Graph */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 w-full xl:max-w-7xl">

          {/* Donut Chart */}
          <div className="span-1 p-8 bg-white border rounded-4xl shadow-xs flex flex-col items-center shadow-xs">
            <h3 className="w-full text-start text-sm text-black font-medium">Technologies by Agency</h3>
            <DonutChartAdmin />
          </div>

          {/* Bar Graph */}
          <div className="xl:col-span-2 p-8 bg-white border rounded-4xl shadow-xs flex flex-col shadow-xs">
            <h3 className="text-sm text-black font-medium mb-4">Technologies by IP Type</h3>
            <div className="flex-1 w-full flex items-center">
              <BarGraphAdmin />
            </div>
          </div>

          {/* 3. Pie Chart */}
          {/* <div className="p-6 bg-white border rounded-4xl shadow-xs flex flex-col shadow-xs">
            <h3 className="text-sm text-black font-medium mb-4">Technologies by Visibility</h3>
            <div className="flex-1 flex items-center justify-center">
              <PieChartAdmin />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;