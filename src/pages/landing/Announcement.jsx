import {Link} from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import NavBar from "../../components/landing/NavBar";
import { motion } from "framer-motion";

// Icons
import { ArrowRight, Bell } from "lucide-react";
import { Calendar } from "lucide-react"; // Event Icon
import { Trophy } from "lucide-react"; // Achievement Icon
import { BrushCleaning } from "lucide-react"; //Maintenance Icon
import { Handshake } from "lucide-react"; // Partnership Icon
import { Rss } from "lucide-react"; // Update Icon
import { Newspaper } from "lucide-react"; // News Icon

// Shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


const announcementData = [
  {
    Icon: <Calendar />,
    label: "Event",
    date: "March 15, 2026",
    bgColor: "bg-blue-500",
    labelColor: "bg-blue-500/10",
    labelTextColor: "text-blue-500",
    title: "Blockchain Security",
    desc: "Immutable records and tamper-proof documentation for your intellectual property assets using distributed ledger technology.",
  },
  {
    Icon: <Trophy />,
    label: "Achievement",
    date: "February 10, 2026",
    bgColor: "bg-emerald-500",
    labelColor: "bg-emerald-500/10",
    labelTextColor: "text-emerald-500",
    title: "AI-Powered Analysis",
    desc: "Advanced machine learning algorithms to analyze, categorize, and monitor your IP portfolio for potential infringements.",
  },
  {
    Icon: <BrushCleaning />,
    label: "Maintenance",
    date: "February 01, 2026",
    bgColor: "bg-amber-500",
    labelColor: "bg-amber-500/10",
    labelTextColor: "text-amber-500",
    title: "Cloud Infrastructure",
    desc: "Secure, scalable cloud-based platform ensuring your data is accessible anywhere while maintaining enterprise-grade security.",
  },
  {
    Icon: <Handshake />,
    label: "Partnership",
    date: "January 20, 2026",
    bgColor: "bg-indigo-500",
    labelColor: "bg-indigo-500/10",
    labelTextColor: "text-indigo-500",
    title: "Secure Data Storage",
    desc: "End-to-end encrypted storage solutions with redundant backups and compliance with international data protection standards.",
  },
];

const Announcement = ({id}) => {
  const [pageVisit, setPageVisit] = useState(0);

  useEffect(() => {
    setPageVisit(v => v + 1);
  }, []); // increment on mount

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <main id={id} className="flex flex-col bg-gray-50 min-h-screen w-full justify-center items-center py-16 gap-6 scroll-mt-20">
        {/* Bell Icon Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariants}
          className="flex items-center justify-center gap-2"
        >
          <div className="p-2 rounded-lg bg-blue-100">
            <Bell className="text-blue-700"/>
          </div>
          <div className="bg-gray-100 rounded-lg px-2 py-1">
            <p className="text-xs font-medium">
              Latest Update
            </p>
          </div>
        </motion.section>

        {/* Text Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariants}
          className="text-center"
        >
          <h1 className="text-black font-bold text-4xl text-center">
            Announcement
          </h1>
          <p className="text-gray-500 max-w-xl leading-relaxed text-center mt-2">
            Stay informed with the latest news, events, and updates from IPTBM.
          </p>
        </motion.section>

        {/* GRID */}
        <section className="
          grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2
          w-[90%]
          xl:max-w-[70%]
          mx-auto py-8">
          
          {announcementData.map((items, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardVariants}
            >
              <article className="rounded-xl cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all gap-4 flex flex-col shadow-sm">
                <section className={`flex flex-col justify-center items-center w-full h-20 rounded-t-xl p-8 min-h-30 ${items.bgColor}`}>
                  <div className="w-full flex justify-between items-center h-fit">
                    <span className="text-white [&_svg]:w-10 [&_svg]:h-10 rounded-4xl mix-blend-screen">
                      {items.Icon}
                    </span>

                    <span className="text-sm text-white font-bold">
                      {items.date}
                    </span>
                  </div>
                </section>

                {/* Text */}
                <section className="flex flex-col w-full p-6 gap-2">
                  <span className={`${items.labelColor} ${items.labelTextColor} w-fit px-4 py-1 rounded-3xl text-sm font-medium`}>
                    {items.label}
                  </span>
                  <span className="font-semibold">
                    {items.title}
                  </span>

                  <span className="text-gray-600">
                    {items.desc}
                  </span>
                </section>

                {/* Link */}

                <Link to="" className="flex items-center gap-2 p-4 text-blue-700 text-sm hover:underline w-fit">
                Read More
                <ArrowRight className="h-4 w-4"/>
                </Link>
              </article>
            </motion.div>
          ))}
        </section>

        {/* View All Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariants}
        >
          <Link to="/viewallannouncement" className="w-fit py-2 px-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition cursor-pointer flex items-center justify-center gap-2">
            view all announcement
            <span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>
      </main>
    </>
  )
}

export default Announcement;