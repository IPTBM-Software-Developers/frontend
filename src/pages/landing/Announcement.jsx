import {Link} from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import NavBar from "../../components/landing/NavBar";
import { motion } from "framer-motion";

// Icons
import { ArrowRight, Bell } from "lucide-react";

// Shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
      <main id={id} className="flex flex-col bg-gray-50 min-h-screen w-full justify-center items-center py-16 px-[5%] gap-6 scroll-mt-20">
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
          max-w-lg
          sm:max-w-xl
          md:max-w-3xl
          lg:max-w-7xl
          xl:max-w-[1536px]
          mx-auto py-8">
          
          {/* CARD 1 */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
          >
            <Card className="flex justify-center items-center w-full rounded-2xl border bg-white shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-700 text-white flex items-center gap-1 px-3 py-1">
                      <Bell className="w-3 h-3" />
                      System Update
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-blue-700 border-blue-700 bg-blue-50"
                    >
                      New
                    </Badge>
                  </div>
                  <span className="text-sm text-gray-500">January 25, 2026</span>
                </div>

                <h3 className="text-lg font-semibold">
                  New IP Filing System Launch
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  We are excited to announce the launch of our new streamlined IP
                  filing system, making it easier than ever to register and protect
                  your intellectual property.
                </p>

                <Link
                  to="/"
                  className="flex gap-2 underline text-blue-700 font-semibold"
                >
                  read more
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
          >
            <Card className="flex justify-center items-center w-full rounded-2xl border bg-white shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-700 text-white flex items-center gap-1 px-3 py-1">
                      <Bell className="w-3 h-3" />
                      System Update
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-blue-700 border-blue-700 bg-blue-50"
                    >
                      New
                    </Badge>
                  </div>
                  <span className="text-sm text-gray-500">January 25, 2026</span>
                </div>

                <h3 className="text-lg font-semibold">
                  New IP Filing System Launch
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  We are excited to announce the launch of our new streamlined IP
                  filing system, making it easier than ever to register and protect
                  your intellectual property.
                </p>

                <Link
                  to="/"
                  className="flex gap-2 underline text-blue-700 font-semibold"
                >
                  read more
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
          >
            <Card className="flex justify-center items-center w-full rounded-2xl border bg-white shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-700 text-white flex items-center gap-1 px-3 py-1">
                      <Bell className="w-3 h-3" />
                      System Update
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-blue-700 border-blue-700 bg-blue-50"
                    >
                      New
                    </Badge>
                  </div>
                  <span className="text-sm text-gray-500">January 25, 2026</span>
                </div>

                <h3 className="text-lg font-semibold">
                  New IP Filing System Launch
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  We are excited to announce the launch of our new streamlined IP
                  filing system, making it easier than ever to register and protect
                  your intellectual property.
                </p>

                <Link
                  to="/"
                  className="flex gap-2 underline text-blue-700 font-semibold"
                >
                  read more
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
          >
            <Card className="flex justify-center items-center w-full rounded-2xl border bg-white shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-700 text-white flex items-center gap-1 px-3 py-1">
                      <Bell className="w-3 h-3" />
                      System Update
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-blue-700 border-blue-700 bg-blue-50"
                    >
                      New
                    </Badge>
                  </div>
                  <span className="text-sm text-gray-500">January 25, 2026</span>
                </div>

                <h3 className="text-lg font-semibold">
                  New IP Filing System Launch
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  We are excited to announce the launch of our new streamlined IP
                  filing system, making it easier than ever to register and protect
                  your intellectual property.
                </p>

                <Link
                  to="/"
                  className="flex gap-2 underline text-blue-700 font-semibold"
                >
                  read more
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* View All Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariants}
        >
          <Link className="w-fit py-2 px-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition cursor-pointer flex items-center justify-center gap-2">
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