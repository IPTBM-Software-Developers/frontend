// Components
import NavBar from "../../components/landing/NavBar";

// Icons
import { ArrowRight, CircleCheck, Shield, Mail, Phone, MapPin } from "lucide-react";

const Contact = ({id}) => {
  return (
    <>
      <main id={id} className="bg-gray-50 h-screen w-full">

        {/* Start of contact */}
          <section className="w-full bg-blue-700">
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 md:grid-cols-4 text-center gap-10">
              
              <div>
                <h2 className="text-white text-4xl font-bold">500+</h2>
                <p className="text-blue-100 text-sm mt-2">Protected IP Assets</p>
              </div>

              <div>
                <h2 className="text-white text-4xl font-bold">100+</h2>
                <p className="text-blue-100 text-sm mt-2">Partner Institutions</p>
              </div>

              <div>
                <h2 className="text-white text-4xl font-bold">99.9%</h2>
                <p className="text-blue-100 text-sm mt-2">Uptime Guarantee</p>
              </div>

              <div>
                <h2 className="text-white text-4xl font-bold">24/7</h2>
                <p className="text-blue-100 text-sm mt-2">Expert Support</p>
              </div>

            </div>
          </section>

          {/* Main Contact */}
          <section className="w-full bg-white py-28 px-6">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">

              {/* small badge */}
              <div className="flex justify-center items-center bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-full font-medium">
                <p>
                  ✨ Start Your Journey Today
                </p>
              </div>

              {/* heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Ready to Protect Your <br />
                <span className="text-blue-700">
                  Intellectual Property?
                </span>
              </h2>

              {/* subtext */}
              <p className="text-gray-500 max-w-2xl">
                Join hundreds of institutions already using IPTBM to secure and manage
                their IP assets. Get started today with a free consultation.
              </p>

              {/* input card */}
              <div className="w-full max-w-2xl bg-gray-100 rounded-2xl p-6 shadow-sm">

                {/* top row */}
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Enter your institutional email"
                    className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none"
                  />

                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 whitespace-nowrap">
                    Get Started 
                    <ArrowRight className="w-4 h-4"/>
                  </button>
                </div>

                {/* Info under Input */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <CircleCheck className="text-blue-700"/>
                    Free consultation
                  </span>

                  <span className="flex items-center gap-2">
                    <CircleCheck className="text-blue-700"/>
                    No commitment required
                  </span>

                  <span className="flex items-center gap-2">
                    <CircleCheck className="text-blue-700"/>
                    Secure & private
                  </span>
                </div>
              </div>

              {/* Last Info */}
              <div className="flex items-center justify-center gap-6 text-sm ">
                <p className="text-black">100+ institutions trust us</p>
                <p>|</p>
                <p className="text-black">Response within 24 hours</p>
                <p>|</p>
                <p className="text-black">Dedicated support team</p>
              </div>


            </div>
          </section>

          {/* Footer */}
          <footer className="w-full bg-black text-gray-300 px-6 pt-16 pb-10">
            <div className="max-w-7xl mx-auto">

              {/* Grids */}
              <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-20">

                {/* left info */}
                <div className="space-y-4">
                  {/* Title */}
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-700 p-3 rounded-full">
                      <Shield className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-mdtext-white font-semibold whitespace-nowrap">
                        Intellectual Property and Technology
                      </p>
                      <p className="text-sm text-gray-400">
                        Business Management
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 max-w-xs">
                    Enterprise-grade solutions for protecting, managing, and monetizing
                    intellectual property with cutting-edge technology.
                  </p>

                  {/* Contact */}
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      contact@iptbm.edu.ph
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      +63 (49) 123 4567
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Laguna, Philippines
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-white font-semibold mb-4">Services</h4>
                  <ul className="space-y-3 text-sm">
                    <li>IP Protection</li>
                    <li>Portfolio Management</li>
                    <li>Legal Compliance</li>
                    <li>Analytics</li>
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="text-white font-semibold mb-4">Company</h4>
                  <ul className="space-y-3 text-sm">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>News</li>
                    <li>Contact</li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="text-white font-semibold mb-4">Resources</h4>
                  <ul className="space-y-3 text-sm">
                    <li>Documentation</li>
                    <li>Help Center</li>
                    <li>Blog</li>
                    <li>Webinars</li>
                  </ul>
                </div>
              </div>

              {/* divider */}
              <div className="border-t border-gray-800 my-10"></div>

              {/* bottom */}
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
                <p>© 2026 IPTBM. All rights reserved.</p>

                <div className="flex gap-6">
                  <p className="hover:text-white cursor-pointer">Privacy Policy</p>
                  <p className="hover:text-white cursor-pointer">Terms of Service</p>
                </div>
              </div>

            </div>
          </footer>
      </main>
    </>
  )
}

export default Contact