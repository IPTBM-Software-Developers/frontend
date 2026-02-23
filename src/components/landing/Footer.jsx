import { ArrowRight, CircleCheck, Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return(
    <>
      {/* Footer Section */}
        {/* Footer Section */}
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
                  <p className="text-md text-white font-semibold whitespace-nowrap">
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
                <p className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" />
                  contact@iptbm.edu.ph
                </p>
                <p className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <Phone className="w-4 h-4" />
                  +63 (49) 123 4567
                </p>
                <p className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <MapPin className="w-4 h-4" />
                  Laguna, Philippines
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">IP Protection</li>
                <li className="hover:text-white transition-colors cursor-pointer">Portfolio Management</li>
                <li className="hover:text-white transition-colors cursor-pointer">Legal Compliance</li>
                <li className="hover:text-white transition-colors cursor-pointer">Analytics</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-white transition-colors cursor-pointer">News</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Documentation</li>
                <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer">Webinars</li>
              </ul>
            </div>
          </div>

          {/* divider */}
          <div className="border-t border-gray-800 my-10"></div>

          {/* bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
            <p>© 2026 IPTBM. All rights reserved.</p>

            <div className="flex gap-6">
              <p className="hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
              <p className="hover:text-white transition-colors cursor-pointer">Terms of Service</p>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;