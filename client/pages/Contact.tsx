import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { containers, layouts, responsiveGrid } from "@/styles/containers";
import { buttonStyles } from "@/styles/buttons";
import { cardStyles } from "@/styles/cards";
import {
  sectionHeadings,
  sectionContent,
  featureSection,
  contactSection,
  ctaSection,
} from "@/styles/sections";
import { colors, spacing, typography } from "@/styles/theme";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactCards = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Sheikh Zayed Road", "Dubai, United Arab Emirates"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+971 4 XXX XXXX", "+971 50 XXX XXXX"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@dubaiprimeproperties.ae",
        "sales@dubaiprimeproperties.ae",
      ],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Sunday - Thursday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
      ],
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className={colors.background.white}>
      <Header />

      {/* Hero Section */}
      <section
        className={`pt-24 sm:pt-32 pb-12 sm:pb-16 ${colors.primary.dark} text-white text-center`}
      >
        <div className={containers.withPadding}>
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4`}
          >
            Get In Touch
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100`}
          >
            We'd love to hear from you. Reach out to us for any inquiries.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className={layouts.mainSection}>
        <div className={containers.withPadding}>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8`}
          >
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={cardStyles.contactInfo}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 rounded-full p-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-bold ${colors.text.primary} mb-4`}
                  >
                    {card.title}
                  </h3>
                  <div className={`space-y-2 ${colors.text.muted}`}>
                    {card.details.map((detail, i) => (
                      <p key={i} className="text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className={layouts.altSection}>
        <div className={containers.withPadding}>
          <div className={responsiveGrid.contentGrid}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className={`text-3xl font-bold ${colors.text.primary} mb-8`}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className={contactSection.form}>
                <div>
                  <label className={contactSection.label}>
                    Full Name{" "}
                    <span className={contactSection.labelRequired}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={contactSection.input}
                  />
                </div>

                <div>
                  <label className={contactSection.label}>
                    Email Address{" "}
                    <span className={contactSection.labelRequired}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={contactSection.input}
                  />
                </div>

                <div>
                  <label className={contactSection.label}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 XX XXX XXXX"
                    className={contactSection.input}
                  />
                </div>

                <div>
                  <label className={contactSection.label}>
                    Message{" "}
                    <span className={contactSection.labelRequired}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property requirements..."
                    required
                    rows={6}
                    className={contactSection.textarea}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full ${buttonStyles.primary}`}
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className={`text-3xl font-bold ${colors.text.primary} mb-8`}>
                Sheikh Zayed Road, Dubai, UAE
              </h2>
              <div className={contactSection.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9420151945615!2d55.134505675159176!3d25.0699543777931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f13435f3abe57%3A0xb4c00b9d46311cd0!2sSheikh%20Zayed%20Rd%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2seg!4v1762117878267!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className={layouts.mainSection}>
        <div className={containers.withPadding}>
          <div className={responsiveGrid.contentGrid}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cardStyles.feature}
            >
              <h3 className={featureSection.title}>Schedule a Viewing</h3>
              <p className={`${featureSection.description} mb-4`}>
                Interested in viewing one of our properties? Contact us to
                schedule a personalized tour at your convenience.
              </p>
              <p className={`text-gray-600 text-sm`}>
                Our expert consultants are available to answer all your
                questions and help you find the perfect property that meets your
                needs and budget.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cardStyles.feature}
            >
              <h3 className={featureSection.title}>Investment Opportunities</h3>
              <p className={featureSection.description}>
                Looking to invest in Dubai real estate? Our team can provide you
                with market insights, ROI analysis, and exclusive investment
                opportunities tailored to your financial goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={layouts.blueSection}>
        <div className={containers.withPadding}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className={ctaSection.container}
          >
            <h2 className={ctaSection.title}>
              Ready to Find Your Dream Property?
            </h2>
            <p className={ctaSection.subtitle}>
              Let our expert team guide you through Dubai's finest properties
            </p>
            <div className={ctaSection.buttonGroup}>
              <button className={buttonStyles.white}>Browse Properties</button>
              <button className={buttonStyles.whiteBorder}>
                Book Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
