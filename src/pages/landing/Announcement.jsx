import {Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import { motion } from "framer-motion";

// Icons
import { ArrowRight, Bell, Calendar, Trophy, BrushCleaning, Handshake, Rss, Newspaper } from "lucide-react";

// Images
import AnnounceImage1 from "../../assets/AnnounceImage1.jpg" 
import AnnounceImage2 from "../../assets/AnnounceImage2.jpg"
import AnnounceImage3 from "../../assets/AnnounceImage3.jpg"
import AnnounceImage4 from "../../assets/AnnounceImage4.jpg"
import AnnounceImage5 from "../../assets/AnnounceImage5.jpg"
import AnnounceImage6 from "../../assets/AnnounceImage6.jpg"
import AnnounceImage7 from "../../assets/AnnounceImage7.jpg"

// Shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const commonParag = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pretium tellus duis convallis tempus leo eu aenean. Iaculis massa nisl malesuada lacinia integer nunc posuere. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Blandit quis suspendisse aliquet nisi sodales consequat magna. Ligula congue sollicitudin erat viverra ac tincidunt nam. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Dui felis venenatis ultrices proin libero feugiat tristique. Cubilia curae hac habitasse platea dictumst lorem ipsum. Sem placerat in id cursus mi pretium tellus. Fringilla lacus nec metus bibendum egestas iaculis massa. Taciti sociosqu ad litora torquent per conubia nostra. Ridiculus mus donec rhoncus eros lobortis nulla molestie. Mauris pharetra vestibulum fusce dictum risus blandit quis. Finibus facilisis dapibus etiam interdum tortor ligula congue. Justo lectus commodo augue arcu dignissim velit aliquam. Primis vulputate ornare sagittis vehicula praesent dui felis. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Quisque faucibus ex sapien vitae pellentesque sem placerat.";

const Data = [
  {
    id: 1029384756,
    Icon: <Calendar />,
    image: AnnounceImage1,
    label: "Event",
    date: "March 15, 2026",
    bgColor: "bg-blue-500",
    labelColor: "bg-blue-500/10",
    labelTextColor: "text-blue-500",
    title: "Blockchain Security",
    desc: "Immutable records and tamper-proof documentation for your intellectual property assets using distributed ledger technology.",
    parag: commonParag,
    parag1: commonParag,
    parag2: commonParag,
    parag3: commonParag,
  },
  {
    id: 2193847560,
    Icon: <Trophy />,
    image: AnnounceImage2,
    label: "Achievement",
    date: "February 10, 2026",
    bgColor: "bg-emerald-500",
    labelColor: "bg-emerald-500/10",
    labelTextColor: "text-emerald-500",
    title: "AI-Powered Analysis",
    desc: "Advanced machine learning algorithms to analyze, categorize, and monitor your IP portfolio for potential infringements.",
    parag: commonParag,
    parag1: commonParag,
    parag2: commonParag,
    parag3: commonParag,
  },
  {
    id: 3847561029,
    Icon: <BrushCleaning />,
    image: AnnounceImage3,
    label: "Maintenance",
    date: "February 01, 2026",
    bgColor: "bg-amber-500",
    labelColor: "bg-amber-500/10",
    labelTextColor: "text-amber-500",
    title: "Cloud Infrastructure",
    desc: "Secure, scalable cloud-based platform ensuring your data is accessible anywhere while maintaining enterprise-grade security.",
    parag: commonParag,
    parag1: commonParag,
    parag2: commonParag,
    parag3: commonParag,
  },
  {
    id: 4756102938,
    Icon: <Handshake />,
    image: AnnounceImage4,
    label: "Partnership",
    date: "January 20, 2026",
    bgColor: "bg-indigo-500",
    labelColor: "bg-indigo-500/10",
    labelTextColor: "text-indigo-500",
    title: "Secure Data Storage",
    desc: "End-to-end encrypted storage solutions with redundant backups and compliance with international data protection standards.",
    parag: commonParag,
    parag1: commonParag,
    parag2: commonParag,
    parag3: commonParag,
  },
];

const Announcement = ({id}) => {
  const [pageVisit, setPageVisit] = useState(0);

  const navigate = useNavigate();

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
      <main id={id} className="flex flex-col bg-white min-h-screen w-full justify-center items-center py-16 gap-6 scroll-mt-20">
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
          xl:max-w-6xl
          mx-auto py-8">
          
          {Data.map((items, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardVariants}
              onClick={() => navigate(`/viewselecteditem/${items.id}`)}
            >
              <article className="rounded-xl cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all gap-4 flex flex-col shadow-md">
                <section className={`flex flex-col justify-center items-center w-full h-70 rounded-t-xl p-8 min-h-30 bg-cover bg-center`}
                  style={{backgroundImage: `url(${items.image})`}}
                >

                </section>

                {/* Text */}
                <section className="flex flex-col w-full p-6 gap-2">
                  <span className={`text-gray-600 w-fit rounded-3xl text-sm font-medium`}>
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

                <Link to="" className={`flex items-center gap-2 p-4 text-sm hover:underline w-fit cursor-pointer text-blue-600`}>
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
            View All Announcement
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