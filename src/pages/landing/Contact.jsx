// Components
import NavBar from "../../components/landing/NavBar";
import Footer from "@/components/landing/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Icons
import { ArrowRight, CircleCheck, Shield, Mail, Phone, MapPin } from "lucide-react";

const Contact = ({id}) => {
  const [pageVisit, setPageVisit] = useState(0);

  useEffect(() => {
    setPageVisit(v => v + 1);
  }, []); // increment on mount

  // Animation Variants
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

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      <main id={id} className="bg-white h-auto w-full scroll-mt-20">
        
        {/* Stats Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariants}
          className="w-full bg-blue-700"
        >
          <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 md:grid-cols-4 text-center gap-10">
            
            <motion.div 
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={statVariants}
            >
              <h2 className="text-white text-4xl font-bold">500+</h2>
              <p className="text-blue-100 text-sm mt-2">Protected IP Assets</p>
            </motion.div>

            <motion.div 
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={statVariants}
            >
              <h2 className="text-white text-4xl font-bold">100+</h2>
              <p className="text-blue-100 text-sm mt-2">Partner Institutions</p>
            </motion.div>

            <motion.div 
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={statVariants}
            >
              <h2 className="text-white text-4xl font-bold">99.9%</h2>
              <p className="text-blue-100 text-sm mt-2">Uptime Guarantee</p>
            </motion.div>

            <motion.div 
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={statVariants}
            >
              <h2 className="text-white text-4xl font-bold">24/7</h2>
              <p className="text-blue-100 text-sm mt-2">Expert Support</p>
            </motion.div>

          </div>
        </motion.section>

        {/* Main Contact Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariants}
          className="w-full bg-white py-28 px-6"
        >
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">

            {/* small badge */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center items-center bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-full font-medium"
            >
              <p>
                ✨ Start Your Journey Today
              </p>
            </motion.div>

            {/* heading */}
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Ready to Protect Your <br />
              <span className="text-blue-700">
                Intellectual Property?
              </span>
            </motion.h2>

            {/* subtext */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-500 max-w-2xl"
            >
              Join hundreds of institutions already using IPTBM to secure and manage
              their IP assets. Get started today with a free consultation.
            </motion.p>

            {/* input card */}
            <motion.div 
              variants={itemVariants}
              className="w-full max-w-2xl bg-gray-100 rounded-2xl p-6 shadow-sm"
            >
              {/* top row */}
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter your institutional email"
                  className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />

                <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 whitespace-nowrap transition-all active:scale-95">
                  Get Started 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
                </button>
              </div>

              {/* Info under Input */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <CircleCheck className="text-blue-700 w-4 h-4"/>
                  Free consultation
                </span>

                <span className="flex items-center gap-2">
                  <CircleCheck className="text-blue-700 w-4 h-4"/>
                  No commitment required
                </span>

                <span className="flex items-center gap-2">
                  <CircleCheck className="text-blue-700 w-4 h-4"/>
                  Secure & private
                </span>
              </div>
            </motion.div>

            {/* Last Info */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center gap-6 text-sm flex-wrap"
            >
              <p className="text-black">100+ institutions trust us</p>
              <p className="text-gray-400">|</p>
              <p className="text-black">Response within 24 hours</p>
              <p className="text-gray-400">|</p>
              <p className="text-black">Dedicated support team</p>
            </motion.div>

          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  )
}

export default Contact;