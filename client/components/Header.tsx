import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-blue-600" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900">
                Dubai Prime Properties
              </span>
              <span className="text-xs text-gray-500">Luxury Real Estate</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link
              to="/"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
