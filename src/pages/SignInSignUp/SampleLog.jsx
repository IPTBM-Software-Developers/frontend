import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Search, ArrowRight, Bell, Calendar, Trophy, 
  BrushCleaning, Handshake, Rss, Newspaper 
} from "lucide-react";

const announcementData = [
  {
    Icon: <Calendar />,
    label: "Event",
    date: "March 15, 2026",
    bgColor: "bg-blue-500",
    title: "Blockchain Security",
    desc: "Immutable records and tamper-proof documentation for your intellectual property assets using distributed ledger technology.",
  },
  {
    Icon: <Trophy />,
    label: "Achievement",
    date: "February 10, 2026",
    bgColor: "bg-emerald-500",
    title: "AI-Powered Analysis",
    desc: "Advanced machine learning algorithms to analyze, categorize, and monitor your IP portfolio for potential infringements.",
  },
  {
    Icon: <BrushCleaning />,
    label: "Maintenance",
    date: "February 01, 2026",
    bgColor: "bg-amber-500",
    title: "Cloud Infrastructure",
    desc: "Secure, scalable cloud-based platform ensuring your data is accessible anywhere while maintaining enterprise-grade security.",
  },
  {
    Icon: <Handshake />,
    label: "Partnership",
    date: "January 20, 2026",
    bgColor: "bg-indigo-500",
    title: "Secure Data Storage",
    desc: "End-to-end encrypted storage solutions with redundant backups and compliance with international data protection standards.",
  },
  {
    Icon: <Rss />,
    label: "Update",
    date: "January 05, 2026",
    bgColor: "bg-cyan-500",
    title: "Real-Time Monitoring",
    desc: "Continuous monitoring of your IP assets with instant alerts for potential violations or unauthorized usage worldwide.",
  },
  {
    Icon: <Newspaper />,
    label: "News",
    date: "December 15, 2025",
    bgColor: "bg-slate-500",
    title: "API Integration",
    desc: "Seamless integration with existing systems through our robust API, enabling automated workflows and data synchronization.",
  },
  {
    Icon: <Newspaper />,
    label: "News",
    date: "December 01, 2025",
    bgColor: "bg-slate-500",
    title: "Smart Contract Automation",
    desc: "Self-executing digital agreements that streamline licensing royalties and automate ownership transfers without intermediaries.",
  },
  {
    Icon: <Handshake />,
    label: "Partnership",
    date: "November 18, 2025",
    bgColor: "bg-indigo-500",
    title: "Biometric Authentication",
    desc: "Multi-factor security layers including facial and fingerprint recognition to ensure only authorized personnel access sensitive IP.",
  },
  {
    Icon: <BrushCleaning />,
    label: "Maintenance",
    date: "November 05, 2025",
    bgColor: "bg-amber-500",
    title: "Global Compliance Tracking",
    desc: "Automated updates on international patent laws and regulatory changes to keep your portfolio compliant across all jurisdictions.",
  },
  {
    Icon: <Calendar />,
    label: "Event",
    date: "October 22, 2025",
    bgColor: "bg-blue-500",
    title: "Predictive Analytics",
    desc: "Forecasting market trends and potential IP valuation shifts using historical data and competitive landscape modeling.",
  },
  {
    Icon: <Calendar />,
    label: "Event",
    date: "October 10, 2025",
    bgColor: "bg-blue-500",
    title: "Quantum-Resistant Encryption",
    desc: "Future-proofing your data security with advanced cryptographic protocols designed to withstand next-generation computing threats.",
  },
  {
    Icon: <BrushCleaning />,
    label: "Maintenance",
    date: "September 28, 2025",
    bgColor: "bg-amber-500",
    title: "Collaborative Workspaces",
    desc: "Centralized environments for legal teams and creators to review, annotate, and co-author IP documentation in real-time.",
  },
  {
    Icon: <Rss />,
    label: "Update",
    date: "September 15, 2025",
    bgColor: "bg-cyan-500",
    title: "Mobile Management Suite",
    desc: "Comprehensive mobile application allowing you to manage filings, approve licenses, and track IP status on the go.",
  },
  {
    Icon: <Rss />,
    label: "Update",
    date: "September 01, 2025",
    bgColor: "bg-cyan-500",
    title: "Automated Reporting",
    desc: "Customizable reporting tools that generate detailed PDF or Excel summaries of your portfolio's performance and health.",
  },
];

const ViewAllAnnouncement = () => {
  const [dataVisible, setDataVisible] = useState(null);

  const haha = (index) => {
    if (dataVisible === index) {
      setDataVisible(null);
    } else {
      setDataVisible(index)
    }
  }

  return(
    <>
      <main className="grid grid-cols-3 place-items-center w-full min-h-screen py-24">
        {announcementData.map((item, index) => (
          <section key={index} className="relative border w-xl">
           <div className="flex gap-4">
              <h1>{item.label}</h1>
              <h2>{item.date}</h2>
            </div>

          {dataVisible === index &&
            <div className="fixed flex justify-center items-center inset-0 z-50 w-screen h-screen bg-black/20 backdrop-blur-xs">
              <div>
                <button 
                  className="border border-red-500 cursor-pointer"
                  onClick={() => haha(index)}
                >
                  {dataVisible === index ? "Read Less" : "Read More"}
                </button>
              </div>


            </div>
          }

          <button 
            className="border border-red-500 cursor-pointer"
            onClick={() => haha(index)}
          >
            {dataVisible === index ? "Read Less" : "Read More"}
          </button>
            

          </section>
        ))}
      </main>
    </>
  )
  
};


export default ViewAllAnnouncement;