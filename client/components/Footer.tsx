import { Link } from "react-router-dom";
import {
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { layouts, containers, containerGrid } from "@/styles/containers";
import { colors, spacing, typography } from "@/styles/theme";

const footerStyles = {
  wrapper: `${colors.background.dark} ${colors.text.white}`,
  inner: `${containers.withPadding} py-8 sm:py-12`,
  grid: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ${spacing.gap.md} sm:${spacing.gap.lg} mb-8 sm:mb-12`,

  section: ``,
  sectionTitle: `font-semibold mb-3 sm:mb-4 text-sm sm:text-base`,

  brand: ``,
  brandLogo: `flex items-center ${spacing.gap.xs} mb-3 sm:mb-4`,
  brandText: `flex flex-col`,
  brandTitle: `text-xs sm:text-sm font-bold`,
  brandSubtitle: `text-xs ${colors.text.light}`,
  brandDesc: `text-xs sm:text-sm ${colors.text.light}`,

  linkList: `space-y-2 text-xs sm:text-sm ${colors.text.light}`,
  link: `hover:${colors.text.white} transition-colors`,

  contact: `text-xs sm:text-sm ${colors.text.light} space-y-2`,
  socialIcons: `flex gap-3 sm:gap-4 pt-3 sm:pt-4`,
  socialIcon: `w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors`,

  divider: `border-t ${colors.border.dark} pt-6 sm:pt-8 text-center text-xs sm:text-sm ${colors.text.light}`,
};

export default function Footer() {
  return (
    <footer className={footerStyles.wrapper}>
      <div className={footerStyles.inner}>
        <div className={footerStyles.grid}>
          {/* Brand */}
          <div className={footerStyles.brand}>
            <div className={footerStyles.brandLogo}>
              <Building2 className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
              <div className={footerStyles.brandText}>
                <span className={footerStyles.brandTitle}>
                  Dubai Prime Properties
                </span>
                <span className={footerStyles.brandSubtitle}>
                  Luxury Real Estate
                </span>
              </div>
            </div>
            <p className={footerStyles.brandDesc}>
              Your trusted partner in finding luxury properties in Dubai since
              2010.
            </p>
          </div>

          {/* Quick Links */}
          <div className={footerStyles.section}>
            <h3 className={footerStyles.sectionTitle}>Quick Links</h3>
            <ul className={footerStyles.linkList}>
              <li>
                <Link to="/" className={footerStyles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={footerStyles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <a href="#properties" className={footerStyles.link}>
                  Properties
                </a>
              </li>
              <li>
                <Link to="/contact" className={footerStyles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={footerStyles.section}>
            <h3 className={footerStyles.sectionTitle}>Services</h3>
            <ul className={footerStyles.linkList}>
              <li>
                <a href="#" className={footerStyles.link}>
                  Property Sales
                </a>
              </li>
              <li>
                <a href="#" className={footerStyles.link}>
                  Property Rentals
                </a>
              </li>
              <li>
                <a href="#" className={footerStyles.link}>
                  Investment Consulting
                </a>
              </li>
              <li>
                <a href="#" className={footerStyles.link}>
                  Property Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={footerStyles.section}>
            <h3 className={footerStyles.sectionTitle}>Contact Us</h3>
            <div className={footerStyles.contact}>
              <p>Sheikh Zayed Road, Dubai</p>
              <p>+971 4 XXX XXXX</p>
              <p>info@dubaiprimeproperties.ae</p>
              <div className={footerStyles.socialIcons}>
                <Facebook className={footerStyles.socialIcon} />
                <Instagram className={footerStyles.socialIcon} />
                <Twitter className={footerStyles.socialIcon} />
                <Linkedin className={footerStyles.socialIcon} />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={footerStyles.divider}>
          <p>© 2025 Dubai Prime Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
