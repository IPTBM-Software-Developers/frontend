// Components
import NavBar from "../../components/landing/NavBar";
import { Card, CardContent } from "@/components/ui/card"
import ScrollFloat from "../../components/landing/ScrollFloat";

// Icons
import { Shield } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Scale } from "lucide-react";
import { Globe } from "lucide-react";
import { Lock } from "lucide-react";
import { ChartColumnIncreasing } from "lucide-react";
import { Layers } from "lucide-react";
import { Quote } from "lucide-react";
import { UserRound } from "lucide-react";

const About = ({id}) => {

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
      <main id={id} className="flex flex-col gap-8 justify-center items-center bg-gray-50 h-auto w-full py-8 px-[3%]">

        {/* Text */}
        <section className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-black font-bold text-4xl">Why Choose IPTBM?</h1>
          <p className="flex text-gray-500 max-w-xl leading-relaxed text-center ">Our platform offers comprehensive tools and services to help you protect, manage, and monetize your intellectual property assets.</p>
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
                 
            {/* First Card */}
            <div className="bg-white rounded-xl border border-gray-100 px-6 py-12 shadow-sm">
              <figure className="inline-flex rounded-lg p-4 bg-blue-100 mb-3">
                <Shield className="text-blue-700"/>
              </figure>
              <h3 className="font-semibold text-lg mb-1">IP Protection</h3>
              <p className="text-gray-500 break-words">
                Comprehensive protection for patents, trademarks, copyrights, and trade secrets.
              </p>
            </div>

            {/* Second Card */}
            <div className="bg-white rounded-xl border border-gray-100 px-6 py-12 shadow-sm">
              <figure className="inline-flex rounded-lg p-4 bg-blue-100 mb-3">
                <BriefcaseBusiness className="text-blue-700"/>
              </figure>
              <h3 className="font-semibold text-lg mb-1">Portfolio Management</h3>
              <p className="text-gray-500 break-words">
                Centralized dashboard to track and manage all your intellectual property assets.
              </p>
            </div>

            {/* Third Card */}
            <div className="bg-white rounded-xl border border-gray-100 px-6 py-12 shadow-sm">
              <figure className="inline-flex rounded-lg p-4 bg-blue-100 mb-3">
                <Scale className="text-blue-700"/>
              </figure>
              <h3 className="font-semibold text-lg mb-1">Legal Compliance</h3>
              <p className="text-gray-500 break-words">
                Stay compliant with local and international IP laws and regulations.
              </p>
            </div>

            {/* Fourth Card */}
            <div className="bg-white rounded-xl border border-gray-100 px-6 py-12 shadow-sm">
              <figure className="inline-flex rounded-lg p-4 bg-blue-100 mb-3">
                <Globe className="text-blue-700"/>
              </figure>
              <h3 className="font-semibold text-lg mb-1">Global Coverage</h3>
              <p className="text-gray-500 break-words">
                Comprehensive protection for patents, trademarks, copyrights, and trade secrets.
              </p>
            </div>

            {/* Fifth Card */}
            <div className="bg-white rounded-xl border border-gray-100 px-6 py-12 shadow-sm">
              <figure className="inline-flex rounded-lg p-4 bg-blue-100 mb-3">
                <Lock className="text-blue-700"/>
              </figure>
              <h3 className="font-semibold text-lg mb-1">Secure Platform</h3>
              <p className="text-gray-500 break-words">
                Enterprise-grade security with encrypted data storage and access controls.
              </p>
            </div>

            {/* Sixth Card */}
            <div className="bg-white rounded-xl border border-gray-100 px-6 py-12 shadow-sm">
              <figure className="inline-flex rounded-lg p-4 bg-blue-100 mb-3">
                <ChartColumnIncreasing className="text-blue-700"/>
              </figure>
              <h3 className="font-semibold text-lg mb-1">Analytics & Insights</h3>
              <p className="text-gray-500 break-words">
                Data-driven insights to optimize your IP strategy and monetization.
              </p>
            </div>
        </section>
      </main>

      {/* Review Section */}
        <section className="flex flex-col gap-4 items-center justify-center py-16 bg-blue-700 px-[3%]">
            <h1 className="text-white font-bold text-4xl text-center">
              Trusted by Leading Institutions
            </h1>

            <p className="text-white max-w-lg leading-relaxed text-center">
              See what our partners have to say about their experience with IPTBM.
            </p>
            {/* Comments */}
        <div className="
          grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3
          max-w-lg
          sm:max-w-xl
          md:max-w-3xl
          lg:max-w-7xl
          xl:max-w-[1536px]
          mx-auto py-8">
            {cards.map((card, i) => (
              <Card key={i} className="w-full rounded-2xl border bg-gray-50 shadow-sm">
                <CardContent className="px-6 py-12 flex flex-col gap-6">

                  {/* Icon */}
                  <div className="inline-flex w-fit">
                    {card.iconA}
                  </div>

                  {/* Text */}
                  <div className="space-y-2">
                    <p className="text-gray-600 leading-relaxed break-words">
                      "{card.comment}"
                    </p>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <figure className="p-2 bg-blue-100 rounded-full">
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

                </CardContent>
              </Card>
            ))}
          </div>
        </section>

    </>
  )
}

export default About