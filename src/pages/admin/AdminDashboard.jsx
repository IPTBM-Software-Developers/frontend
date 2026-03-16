import SideBarAdmin from "@/components/admin/SideBarAdmin";
import LineGraphAdmin from "@/components/admin/LineGraphAdmin";
import DonutChartAdmin from "@/components/admin/DonutChartAdmin";

import { Cpu, Users, Trophy, Newspaper} from "lucide-react";
import BarGraphAdmin from "@/components/admin/BarGraphAdmin";
import PieChartAdmin from "@/components/admin/PieChartAdmin";

const topCards = [
  {
    label: "Total Technologies",
    number: "100",
    footer: "Updated",
    icon: <Cpu />
  },
  {
    label: "Total Users",
    number: "500",
    footer: "Updated",
    icon: <Users />
  },
  {
    label: "Total Awards",
    number: "600",
    footer: "Updated",
    icon: <Trophy />
  },
  {
    label: "Total Announcements",
    number: "900",
    footer: "Updated",
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
            className="text-4xl font-medium"
          >
            Dashboard
          </h1>

          <p
            className="text-sm text-gray-500"
          >
            March 16, 2026
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
              className="flex flex-col rounded-3xl bg-white shadow-xs border
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
                  className="text-blue-700"
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
                  className="text-xs text-gray-500 font-normal"
                >
                  {item.footer}
                </p>
              </span>
            </div>
          ))}

        </div>

        {/* Technology Status Line Graph */}
        <div
          className="w-full xl:max-w-7xl h-[500px] border rounded-3xl shadow-xs bg-white overflow-hidden p-6"
        >
          <h1
            className="text-sm text-black font-medium"
          >
            Technology Status Overview
          </h1>
          <LineGraphAdmin />
        </div>

        {/* Technologies by Agency Donut Graph */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 w-full xl:max-w-7xl">

          {/* Donut Chart */}
          <div className="span-1 p-6 bg-white border rounded-3xl shadow-xs flex flex-col items-center shadow-xs">
            <h3 className="w-full text-start text-sm text-black font-medium">Technologies by Agency</h3>
            <DonutChartAdmin />
          </div>

          {/* Bar Graph */}
          <div className="xl:col-span-1 p-6 bg-white border rounded-3xl shadow-xs flex flex-col shadow-xs">
            <h3 className="text-sm text-black font-medium mb-4">Technologies by IP Type</h3>
            <div className="flex-1 w-full flex items-center">
              <BarGraphAdmin />
            </div>
          </div>

          {/* 3. Pie Chart */}
          <div className="p-6 bg-white border rounded-3xl shadow-xs flex flex-col shadow-xs">
            <h3 className="text-sm text-black font-medium mb-4">Technologies by Visibility</h3>
            <div className="flex-1 flex items-center justify-center">
              <PieChartAdmin />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;