import { Link } from "react-router-dom";
import {
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-blue-400" />
              <div className="flex flex-col">
                <span className="text-sm font-bold">
                  Dubai Prime Properties
                </span>
                <span className="text-xs text-gray-400">
                  Luxury Real Estate
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted partner in finding luxury properties in Dubai since
              2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#properties"
                  className="hover:text-white transition-colors"
                >
                  Properties
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Property Sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Property Rentals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Investment Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Property Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Sheikh Zayed Road, Dubai</p>
              <p>+971 4 XXX XXXX</p>
              <p>info@dubaiprimeproperties.ae</p>
              <div className="flex gap-4 pt-4">
                <Facebook className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
                <Instagram className="w-4 h-4 hover:text-pink-400 cursor-pointer transition-colors" />
                <Twitter className="w-4 h-4 hover:text-blue-300 cursor-pointer transition-colors" />
                <Linkedin className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Dubai Prime Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
