import { Link } from "react-router-dom";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";
import { layouts, flexLayouts, containers } from "@/styles/containers";
import { colors, zIndex } from "@/styles/theme";

const headerStyles = {
  wrapper: `${layouts.header}`,
  inner: `${containers.withPadding} flex items-center justify-between h-20`,
  logo: `flex items-center gap-2 flex-shrink-0`,
  logoText: `flex flex-col`,
  logoTitle: `text-xs sm:text-sm font-bold ${colors.text.primary}`,
  logoSubtitle: `text-xs text-gray-500`,
  navDesktop: `hidden md:flex items-center gap-8`,
  navLink: `text-sm ${colors.text.secondary} hover:text-blue-600 transition-colors`,
  mobileMenuBtn: `md:hidden p-2 ${colors.text.secondary} hover:text-blue-600 transition-colors`,
  navMobile: `md:hidden pb-4 border-t border-gray-200`,
  navMobileLink: `block py-2 ${colors.text.secondary} hover:text-blue-600 transition-colors`,
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={headerStyles.wrapper}>
      <div className={headerStyles.inner}>
        {/* Logo */}
        <Link to="/" className={headerStyles.logo}>
          <Building2 className="w-6 h-6 text-blue-600" />
          <div className={headerStyles.logoText}>
            <span className={headerStyles.logoTitle}>Dubai Prime Properties</span>
            <span className={headerStyles.logoSubtitle}>Luxury Real Estate</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={headerStyles.navDesktop}>
          <Link to="/" className={headerStyles.navLink}>
            Home
          </Link>
          <Link to="/about" className={headerStyles.navLink}>
            About Us
          </Link>
          <Link to="/contact" className={headerStyles.navLink}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={headerStyles.mobileMenuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className={headerStyles.navMobile}>
          <Link
            to="/"
            className={headerStyles.navMobileLink}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={headerStyles.navMobileLink}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={headerStyles.navMobileLink}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
