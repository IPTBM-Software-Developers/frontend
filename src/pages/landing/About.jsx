import { useState, useEffect } from 'react';

// Components
import { Card, CardContent } from "@/components/ui/card"
import StaggeredText from '@/components/landing/StaggeredText';
import { motion } from "framer-motion";

// Icons
import { Shield, BriefcaseBusiness, Scale, Globe, Lock, ChartColumnIncreasing, Layers, Quote, UserRound } from "lucide-react";


const About = ({id}) => {
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

  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const cards = [
    {
      iconA: <Quote className="w-8 h-8 text-gray-400"/>,
      iconB: <UserRound className="w-8 h-8 text-blue-400"/>,
      comment: "IPTBM has transformed how we manage our research patents. The platform is intuitive and the support team is exceptional.",
      name: "Dr. Maria Santos",
      position: "Research Director",
      university: "University Research Center"
    },
    {
      iconA: <Quote className="w-8 h-8 text-gray-400"/>,
      iconB: <UserRound className="w-8 h-8 text-blue-400"/>,
      comment: "The compliance tools have saved us countless hours of manual work. Highly recommended for any institution dealing with IP management.",
      name: "Prof. Juan dela Cruz",
      position: "IP Office Head",
      university: "State University"
    },
    {
     iconA: <Quote className="w-8 h-8 text-gray-400"/>,
      iconB: <UserRound className="w-8 h-8 text-blue-400"/>,
      comment: "Finally, a platform that understands the unique needs of academic institutions. The analytics features are particularly valuable.",
      name: "Dr. Ana Reyes",
      position: "Technology Transfer Officer",
      university: "Technical Institute"
    },
  ];

  return (
    <>
      <main id={id} className="flex flex-col gap-8 justify-center items-center bg-gray-50 h-auto w-full py-16 px-[5%] scroll-mt-20">
        {/* Text */}
        <section className="flex flex-col gap-4 items-center text-center">
          <StaggeredText 
            el="h1" 
            className="text-black font-bold text-4xl"
            duration={0.5}        // duration of each character animation
            staggerDelay={0.03}   // delay between each character
          >
            Why Choose IPTBM?
          </StaggeredText>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-gray-500 text-[clamp(0.85rem,1.2vw,1.1rem)] max-w-[100%] md:max-w-[80%] text-center"
          >
            Our platform offers comprehensive tools and services to help you protect, manage, and monetize your intellectual property assets.
          </motion.p>
        </section>

        {/* Cards */}
        <section className="
          grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3
          max-w-lg
          sm:max-w-xl
          md:max-w-3xl
          lg:max-w-7xl
          xl:max-w-[1536px]
          mx-auto py-8">

          {/* Card 1 */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
            className="group relative"
          >
            <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-xs transition-all duration-300 hover:shadow-lg overflow-hidden cursor-pointer">

              {/* top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition"/>

              {/* icon */}
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                <Shield className="w-6 h-6"/>
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                IP Protection
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Comprehensive protection for patents, trademarks, copyrights, and trade secrets.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={cardVariants} className="group relative">
            <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-xs transition-all duration-300 hover:shadow-lg overflow-hidden cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition"/>

              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                <BriefcaseBusiness className="w-6 h-6"/>
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Portfolio Management
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Centralized dashboard to track and manage all your intellectual property assets.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={cardVariants} className="group relative">
            <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-xs transition-all duration-300 hover:shadow-lg overflow-hidden cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition"/>

              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                <Scale className="w-6 h-6"/>
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Legal Compliance
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Stay compliant with local and international IP laws and regulations.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={cardVariants} className="group relative">
            <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-xs transition-all duration-300 hover:shadow-lg overflow-hidden cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition"/>

              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                <Globe className="w-6 h-6"/>
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Global Coverage
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Protection and tracking across multiple jurisdictions worldwide.
              </p>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={cardVariants} className="group relative">
            <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-xs transition-all duration-300 hover:shadow-lg overflow-hidden cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition"/>

              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                <Lock className="w-6 h-6"/>
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Secure Platform
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Enterprise-grade security with encrypted data storage and role-based access.
              </p>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={cardVariants} className="group relative">
            <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-xs transition-all duration-300 hover:shadow-lg overflow-hidden cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition"/>

              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                <ChartColumnIncreasing className="w-6 h-6"/>
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Analytics & Insights
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Data-driven insights to optimize your IP strategy and monetization.
              </p>
            </div>
          </motion.div>

        </section>    
      </main>

      {/* Review Section with Blue Background - Now contains both title and comments */}
      <section className="w-full bg-blue-700 py-16 px-[3%]">
        <div className="w-full mx-auto flex flex-col gap-12">
          
          {/* Review Title Section */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="text-white font-bold text-4xl text-center"
            >
              Trusted by Leading Institutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-white max-w-lg leading-relaxed text-center"
            >
              See what our partners have to say about their experience with IPTBM.
            </motion.p>
          </div>

          {/* Comments Cards - Now inside blue background with equal heights */}
          <div className="
            grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3
            max-w-lg
            sm:max-w-xl
            md:max-w-3xl
            lg:max-w-7xl
            xl:max-w-[1536px]
            mx-auto auto-rows-fr">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={testimonialVariants}
                className="h-full"
              >
                <Card className="w-full rounded-2xl border bg-white shadow-sm h-full">
                  <CardContent className="px-6 py-12 flex flex-col gap-6 h-full">
                    <div className="flex flex-col gap-6 flex-1">
                      {/* Icon */}
                      <div className="inline-flex w-fit">
                        {card.iconA}
                      </div>

                      {/* Text */}
                      <div className="space-y-2 flex-1">
                        <p className="text-gray-600 leading-relaxed break-words">
                          "{card.comment}"
                        </p>
                      </div>

                      {/* Profile - pushed to bottom with margin-top auto */}
                      <div className="flex items-center gap-4 mt-auto">
                        <figure className="p-2 bg-blue-100 rounded-full flex-shrink-0">
                          {card.iconB}
                        </figure>
                        <div className="flex flex-col leading-tight">
                          <p className="font-semibold text-sm text-gray-900">
                            {card.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {card.position}
                          </p>
                          <p className="text-xs text-gray-400">
                            {card.university}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About;