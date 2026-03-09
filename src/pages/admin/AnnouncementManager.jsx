import { Dot, SquareChartGantt, LayersPlus,Trash2, Pencil } from "lucide-react";

import NavBar from "../../components/landing/NavBar";

import { useState } from "react";

const announcementData = [
  {
    label: "Event",
    date: "March 15, 2026",
    status: "Published",
    bgColor: "bg-blue-600",
    labelBg: "bg-blue-50",
    borderColor: "border-blue-600",
    labelTextColor: "text-blue-600",
    statusText: "text-emerald-600",
    statusBorder: "border-emerald-600",
    statusBg: "bg-emerald-50",
    title: "Blockchain Security",
    desc: "Immutable records and tamper-proof documentation for your intellectual property assets using distributed ledger technology.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere...",
  },
  {
    label: "Achievement",
    date: "February 10, 2026",
    status: "Archived",
    bgColor: "bg-violet-600", // Changed from emerald to violet
    labelBg: "bg-violet-50",   // Changed from emerald to violet
    borderColor: "border-violet-600", // Changed from emerald to violet
    labelTextColor: "text-violet-600", // Changed from emerald to violet
    statusText: "text-red-600",
    statusBorder: "border-red-600",
    statusBg: "bg-red-50",
    title: "AI-Powered Analysis",
    desc: "Advanced machine learning algorithms to analyze, categorize, and monitor your IP portfolio for potential infringements.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere...",
  },
  {
    label: "Maintenance",
    date: "February 01, 2026",
    status: "Published",
    bgColor: "bg-amber-600",
    labelBg: "bg-amber-50",
    borderColor: "border-amber-600",
    labelTextColor: "text-amber-600",
    statusText: "text-emerald-600",
    statusBorder: "border-emerald-600",
    statusBg: "bg-emerald-50",
    title: "Cloud Infrastructure",
    desc: "Secure, scalable cloud-based platform ensuring your data is accessible anywhere while maintaining enterprise-grade security.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere...",
  },
  {
    label: "Partnership",
    date: "January 20, 2026",
    status: "Published",
    bgColor: "bg-indigo-600",
    labelBg: "bg-indigo-50",
    borderColor: "border-indigo-600",
    labelTextColor: "text-indigo-600",
    statusText: "text-emerald-600",
    statusBorder: "border-emerald-600",
    statusBg: "bg-emerald-50",
    title: "Secure Data Storage",
    desc: "End-to-end encrypted storage solutions with redundant backups and compliance with international data protection standards.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere...",
  },
  {
    label: "Update",
    date: "January 05, 2026",
    status: "Archived",
    bgColor: "bg-cyan-600",
    labelBg: "bg-cyan-50",
    borderColor: "border-cyan-600",
    labelTextColor: "text-cyan-600",
    statusText: "text-red-600",
    statusBorder: "border-red-600",
    statusBg: "bg-red-50",
    title: "Real-Time Monitoring",
    desc: "Continuous monitoring of your IP assets with instant alerts for potential violations or unauthorized usage worldwide.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere...",
  },
  {
    label: "News",
    date: "December 15, 2025",
    status: "Published",
    bgColor: "bg-slate-600",
    labelBg: "bg-slate-100",
    borderColor: "border-slate-600",
    labelTextColor: "text-slate-600",
    statusText: "text-emerald-600",
    statusBorder: "border-emerald-600",
    statusBg: "bg-emerald-50",
    title: "API Integration",
    desc: "Seamless integration with existing systems through our robust API, enabling automated workflows and data synchronization.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere...",
  },
  {
    label: "News",
    date: "December 01, 2025",
    status: "Archived",
    bgColor: "bg-slate-600",
    labelBg: "bg-slate-100",
    borderColor: "border-slate-600",
    labelTextColor: "text-slate-600",
    statusText: "text-red-600",
    statusBorder: "border-red-600",
    statusBg: "bg-red-50",
    title: "Smart Contract Automation",
    desc: "Self-executing digital agreements that streamline licensing royalties and automate ownership transfers without intermediaries.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere...",
  },
  {
    label: "Partnership",
    date: "November 18, 2025",
    status: "Published",
    bgColor: "bg-indigo-600",
    labelBg: "bg-indigo-50",
    borderColor: "border-indigo-600",
    labelTextColor: "text-indigo-600",
    statusText: "text-emerald-600",
    statusBorder: "border-emerald-600",
    statusBg: "bg-emerald-50",
    title: "Biometric Authentication",
    desc: "Multi-factor security layers including facial and fingerprint recognition to ensure only authorized personnel access sensitive IP.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere...",
  },
  {
    label: "Maintenance",
    date: "November 05, 2025",
    status: "Archived",
    bgColor: "bg-amber-600",
    labelBg: "bg-amber-50",
    borderColor: "border-amber-600",
    labelTextColor: "text-amber-600",
    statusText: "text-red-600",
    statusBorder: "border-red-600",
    statusBg: "bg-red-50",
    title: "Global Compliance Tracking",
    desc: "Automated updates on international patent laws and regulatory changes to keep your portfolio compliant across all jurisdictions.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere...",
  },
  {
    label: "Event",
    date: "October 22, 2025",
    status: "Published",
    bgColor: "bg-blue-600",
    labelBg: "bg-blue-50",
    borderColor: "border-blue-600",
    labelTextColor: "text-blue-600",
    statusText: "text-emerald-600",
    statusBorder: "border-emerald-600",
    statusBg: "bg-emerald-50",
    title: "Predictive Analytics",
    desc: "Forecasting market trends and potential IP valuation shifts using historical data and competitive landscape modeling.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere...",
  },
  {
    label: "Event",
    date: "October 10, 2025",
    status: "Published",
    bgColor: "bg-blue-600",
    labelBg: "bg-blue-50",
    borderColor: "border-blue-600",
    labelTextColor: "text-blue-600",
    statusText: "text-emerald-600",
    statusBorder: "border-emerald-600",
    statusBg: "bg-emerald-50",
    title: "Quantum-Resistant Encryption",
    desc: "Future-proofing your data security with advanced cryptographic protocols designed to withstand next-generation computing threats.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere...",
  },
  {
    label: "Maintenance",
    date: "September 28, 2025",
    status: "Archived",
    bgColor: "bg-amber-600",
    labelBg: "bg-amber-50",
    borderColor: "border-amber-600",
    labelTextColor: "text-amber-600",
    statusText: "text-red-600",
    statusBorder: "border-red-600",
    statusBg: "bg-red-50",
    title: "Collaborative Workspaces",
    desc: "Centralized environments for legal teams and creators to review, annotate, and co-author IP documentation in real-time.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere...",
  },
];

const AnnouncementManager = () => {

  const [visible, isVisible] = useState("Manage Announcement");

  const button = [
    {
      label: "Manage Announcement",
      icon: <SquareChartGantt />
    },
    {
      label: "Create New",
      icon: <LayersPlus />
    },
  ];

  return (
    <>
      <NavBar />
      <main className="w-full min-h-screen px-6 py-16 flex flex-col items-center gap-4 bg-black/2">
        <header className="flex flex-col gap-6 
        w-full md:max-w-2xl xl:max-w-6xl">
          <section className="flex items-center w-fit border border-blue-300 rounded-4xl bg-blue-50 text-sm text-blue-600 font-medium pl-2 pr-5 py-1">
             <span className="text-blue-700">{<Dot />}</span> Content Manager
          </section>

          <section className="flex w-full justify-between items-center">
            <h1 className="font-bold text-5xl">
              Announcement Manager
            </h1>
          </section>

          <section className="w-full text-gray-500 text-justify">
            <p>Create, publish, and manage announcements to keep your community informed about important updates, events, and news.</p>
          </section>

          <section className="flex justify-end w-full">
            <button className="border rounded-lg px-4 py-2 bg-blue-600 text-white font-medium text-sm shadow-sm hover:bg-blue-700 active:bg-blue-800 cursor-pointer">
              Create New
            </button>
          </section>
        </header>

        {/* Container */}
        <section className="w-full md:max-w-2xl xl:max-w-6xl grid grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="h-[200px] gap-4 col-span-2 xl:col-span-1 flex flex-col justify-center p-6 border bg-white rounded-2xl shadow-sm">
            <span className="font-medium text-green-600">Total Announcement</span>

            <span className="font-semibold text-5xl text-green-600">15</span>

            <span className="w-[50%] h-[5px] bg-green-600 rounded-xl"></span>
          </div>

          <div className="h-[200px] gap-4 flex flex-col justify-center p-6 border  bg-white rounded-2xl shadow-sm">
            <span className="font-medium text-blue-600">Published</span>

            <span className="font-semibold text-5xl text-blue-600">8</span>

            <span className="w-[50%] h-[5px] bg-blue-600 rounded-xl"></span>
          </div>

          <div className="h-[200px] gap-4 flex flex-col justify-center p-6 border bg-white rounded-2xl shadow-sm">
            <span className="font-medium text-red-600">Archived</span>

            <span className="font-semibold text-5xl text-red-600">7</span>

            <span className="w-[50%] h-[5px] bg-red-600 rounded-xl"></span>
          </div>
        </section>

        {/* Buttons */}
        <section className="flex gap-2 p-2 border rounded-4xl w-full md:max-w-2xl xl:max-w-6xl bg-white">
          {button.map((data) => (
            <button
              key={data.label}
              onClick={() => isVisible(data.label)}
              className={`flex justify-center items-center gap-6 w-full py-2 rounded-2xl font-semibold hover:bg-blue-600 active:bg-blue-700 hover:text-white transition-all cursor-pointer duration-300 ${visible === data.label ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
            >
              {data.icon}
              {data.label}
            </button>
          ))}
        </section>

        {/* Content */}
        {visible === "Manage Announcement" ? 
          <section className="flex flex-col w-full md:max-w-2xl xl:max-w-6xl h-[600px] bg-black/2 border rounded-xl shadow-md">
            <table className="flex flex-col overflow-y-auto border-collapse">
              <thead className="w-full text-left sticky top-0 z-10 bg-white border-b text-gray-600">
                <tr className="flex p-8">
                  <th className="flex-2 font-semibold ">TITLE</th>
                  <th className="flex-1 font-semibold">CATEGORY</th>
                  <th className="flex-1 font-semibold">DATE</th>
                  <th className="flex-1 font-semibold" >STATUS</th>
                  <th className="flex-1 font-semibold">ACTIONS</th>
                </tr>
              </thead>

              <tbody className="w-full bg-white">
                {announcementData.map((data) => (
                  <tr className="flex text-left p-8 text-sm font-semibold border-b cursor-pointer hover:bg-black/3 transition-all">
                    <td className="flex-2 flex flex-col gap-2">
                      <span className="font-semibold">{data.title}</span>
                      <span className="text-gray-600 font-normal">{data.desc.substring(0, 35)}...</span>
                    </td>

                    <td className="flex-1 items-center flex">
                      <span className="flex-1 items-center flex text-gray-600 font-medium">{data.label}</span>
                    </td>

                    <td className="flex-1 items-center flex text-gray-600 font-medium">
                      {data.date}
                    </td>

                    <td className="flex items-center flex-1">
                      <span className={`border px-3 py-1 rounded-md ${data.statusBg} ${data.statusBorder} ${data.statusText}`}>{data.status}</span>
                    </td>

                    <td className="flex-1 items-center flex gap-8">
                      <button className="text-blue-600 border border-blue-600 bg-blue-50 p-2 rounded-md cursor-pointer hover:opacity-60 active:opacity-50">
                        {<Pencil />}
                      </button>

                      <button className="text-red-600 border border-red-600 bg-red-50 p-2 rounded-md cursor-pointer hover:opacity-60 active:opacity-50">
                        {<Trash2 />}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section> 
          : <section className="w-full md:max-w-2xl xl:max-w-6xl bg-black/2 border">
              <p>This is Create Announcement</p>
            </section>
        }
      </main>
    </>
  );
};

export default AnnouncementManager;