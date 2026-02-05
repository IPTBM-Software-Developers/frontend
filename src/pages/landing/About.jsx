// Components
import NavBar from "../../components/landing/NavBar";

// Icons
import { Shield } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Scale } from "lucide-react";
import { Globe } from "lucide-react";
import { Lock } from "lucide-react";
import { ChartColumnIncreasing } from "lucide-react";

const About = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col justify-center items-center bg-gray-50 h-screen w-full px-40">

        {/* Text */}
        <section className="flex flex-col gap-4 items-center">
          <h1 className="text-blue-600 font-bold text-4xl">Why Choose IPTBM?</h1>
          <p className="flex text-gray-500 max-w-xl leading-relaxed text-center ">Our platform offers comprehensive tools and services to help you protect, manage, and monetize your intellectual property assets.</p>
        </section>

        {/* Cards */}
        <section className="max-w-8xl mx-auto py-8">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* First Card */}
            <div className="bg-white rounded-xl border border-gray-200 px-6 py-12 shadow-md">
              <figure className="inline-flex rounded-lg p-4 bg-blue-100 mb-3">
                <Shield className="text-blue-700"/>
              </figure>
              <h3 className="font-semibold text-lg mb-1">IP Protection</h3>
              <p className="text-gray-500 break-words">
                Comprehensive protection for patents, trademarks, copyrights, and trade secrets.
              </p>
            </div>

            {/* Second Card */}
            <div className="bg-white rounded-xl border border-gray-200 px-6 py-12 shadow-md">
              <figure className="inline-flex rounded-lg p-4 bg-blue-100 mb-3">
                <BriefcaseBusiness className="text-blue-700"/>
              </figure>
              <h3 className="font-semibold text-lg mb-1">Portfolio Management</h3>
              <p className="text-gray-500 break-words">
                Centralized dashboard to track and manage all your intellectual property assets.
              </p>
            </div>

            {/* Third Card */}
            <div className="bg-white rounded-xl border border-gray-200 px-6 py-12 shadow-md">
              <figure className="inline-flex rounded-lg p-4 bg-blue-100 mb-3">
                <Scale className="text-blue-700"/>
              </figure>
              <h3 className="font-semibold text-lg mb-1">Legal Compliance</h3>
              <p className="text-gray-500 break-words">
                Stay compliant with local and international IP laws and regulations.
              </p>
            </div>

            {/* Fourth Card */}
            <div className="bg-white rounded-xl border border-gray-200 px-6 py-12 shadow-md">
              <figure className="inline-flex rounded-lg p-4 bg-blue-100 mb-3">
                <Globe className="text-blue-700"/>
              </figure>
              <h3 className="font-semibold text-lg mb-1">Global Coverage</h3>
              <p className="text-gray-500 break-words">
                Comprehensive protection for patents, trademarks, copyrights, and trade secrets.
              </p>
            </div>

            {/* Fifth Card */}
            <div className="bg-white rounded-xl border border-gray-200 px-6 py-12 shadow-md">
              <figure className="inline-flex rounded-lg p-4 bg-blue-100 mb-3">
                <Lock className="text-blue-700"/>
              </figure>
              <h3 className="font-semibold text-lg mb-1">Secure Platform</h3>
              <p className="text-gray-500 break-words">
                Enterprise-grade security with encrypted data storage and access controls.
              </p>
            </div>

            {/* Sixth Card */}
            <div className="bg-white rounded-xl border border-gray-200 px-6 py-12 shadow-md">
              <figure className="inline-flex rounded-lg p-4 bg-blue-100 mb-3">
                <ChartColumnIncreasing className="text-blue-700"/>
              </figure>
              <h3 className="font-semibold text-lg mb-1">Analytics & Insights</h3>
              <p className="text-gray-500 break-words">
                Data-driven insights to optimize your IP strategy and monetization.
              </p>
            </div>

            

          </div>
        </section>
      </main>

    </>
  )
}

export default About