import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { containers, layouts, responsiveGrid } from "@/styles/containers";
import { buttonStyles, buttonContainers } from "@/styles/buttons";
import { cardStyles, containerGrid, cardContent } from "@/styles/cards";
import {
  sectionHeadings,
  sectionContent,
  heroContent,
  featureSection,
  propertyCard,
  ctaSection,
  statsSection,
  valuesSection,
} from "@/styles/sections";
import { colors, spacing, typography } from "@/styles/theme";

export default function Index() {
  const properties = [
    {
      id: 1,
      title: "Luxury Waterfront Villa",
      location: "Palm Jumeirah",
      price: "AED 25,000,000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=400&fit=crop",
      beds: 6,
      baths: 7,
      sqft: "8,500 sq ft",
    },
    {
      id: 2,
      title: "Modern Penthouse",
      location: "Downtown Dubai",
      price: "AED 18,500,000",
      image: "https://images.unsplash.com/photo-1545321503-87f68f0dbbf7?w=500&h=400&fit=crop",
      beds: 4,
      baths: 5,
      sqft: "6,200 sq ft",
    },
    {
      id: 3,
      title: "Executive Apartment",
      location: "Dubai Marina",
      price: "AED 8,900,000",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
      beds: 3,
      baths: 4,
      sqft: "3,800 sq ft",
    },
  ];

  const features = [
    {
      title: "Expert Guidance",
      description:
        "Our experienced team provides personalized service and market insights",
    },
    {
      title: "Premium Listings",
      description:
        "Access to exclusive properties in Dubai's most sought-after locations",
    },
    {
      title: "Client Focused",
      description: "Dedicated support throughout your property journey",
    },
  ];

  const whyChoose = [
    {
      title: "Local Expertise",
      description:
        "Our team has in-depth knowledge of Dubai's real estate market, neighborhoods, and investment opportunities, ensuring you make informed decisions.",
    },
    {
      title: "Premium Portfolio",
      description:
        "We offer exclusive access to some of Dubai's most prestigious properties, from waterfront villas to luxury penthouses in iconic towers.",
    },
    {
      title: "Personalized Service",
      description:
        "Every client receives dedicated attention from our experienced consultants who understand your unique needs and preferences.",
    },
    {
      title: "End-to-End Support",
      description:
        "From initial consultation to post-purchase support, we guide you through every step of your real estate journey with professionalism and care.",
    },
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "2,000+", label: "Happy Clients" },
    { number: "500+", label: "Properties Sold" },
    { number: "50+", label: "Expert Agents" },
  ];

  return (
    <div className={colors.background.white}>
      <Header />

      {/* Hero Section */}
      <section className={layouts.heroSection}>
        <div className={`${containers.withPadding}`}>
          <div className={responsiveGrid.heroGrid}>
            <div>
              <h1 className={heroContent.titleBlock}>
                Discover Your Dream Property in Dubai
              </h1>
              <p className={heroContent.subtitleBlock}>
                Premium real estate solutions in the heart of the UAE
              </p>
              <div className={buttonContainers.row}>
                <button className={buttonStyles.primary}>Get Started</button>
                <Link to="/about" className={buttonStyles.secondary}>
                  Learn More
                </Link>
              </div>
            </div>
            <div className={heroContent.statsGrid}>
              {[
                { count: "500+", label: "Properties Listed" },
                { count: "2,000+", label: "Happy Clients" },
                { count: "15+", label: "Years Experience" },
                { count: "98%", label: "Success Rate" },
              ].map((stat, idx) => (
                <div key={idx} className={heroContent.statCard}>
                  <div className={heroContent.statNumber}>{stat.count}</div>
                  <div className={heroContent.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className={layouts.altSection}>
        <div className={containers.withPadding}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionContent.heading}
          >
            <h2 className={sectionHeadings.main}>Featured Properties</h2>
            <p className={sectionHeadings.subtitle}>
              Explore our handpicked selection of luxury properties
            </p>
          </motion.div>

          <div className={`${containerGrid.threeCol} mb-10 sm:mb-12`}>
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cardStyles.property}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className={propertyCard.image}
                />
                <div className={cardContent.padding}>
                  <div className={propertyCard.priceText}>{property.price}</div>
                  <h3 className={propertyCard.title}>{property.title}</h3>
                  <div className={propertyCard.location}>
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className={propertyCard.details}>
                    <span>{property.beds} Beds</span>
                    <span>•</span>
                    <span>{property.baths} Baths</span>
                    <span>•</span>
                    <span>{property.sqft}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <button className={`${buttonStyles.primary} inline-flex items-center gap-2`}>
              View All Properties
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Features */}
      <section className={layouts.blueSection}>
        <div className={containers.withPadding}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionContent.heading}
          >
            <h2 className={sectionHeadings.mainDark}>
              Why Choose Dubai Prime Properties
            </h2>
            <p className={sectionHeadings.subtitleLight}>
              Your trusted partner in Dubai real estate
            </p>
          </motion.div>

          <div className={containerGrid.threeCol}>
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cardStyles.featureDark}
              >
                <h3 className={`text-2xl font-bold mb-3`}>{feature.title}</h3>
                <p className={`text-blue-100`}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={layouts.blueSection}>
        <div className={containers.withPadding}>
          <div className={statsSection.container}>
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className={statsSection.number}>{stat.number}</div>
                <div className={statsSection.label}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Detailed */}
      <section className={layouts.mainSection}>
        <div className={containers.withPadding}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionContent.heading}
          >
            <h2 className={sectionHeadings.main}>Why Choose Us</h2>
          </motion.div>

          <div className={responsiveGrid.contentGrid}>
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className={`text-lg sm:text-xl font-bold text-blue-600 mb-2 sm:mb-3`}>
                  {item.title}
                </h3>
                <p className={`text-sm sm:text-base ${colors.text.secondary}`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Viewing & Investment Section */}
      <section className={layouts.altSection}>
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
              <p className={`text-sm ${colors.text.secondary}`}>
                Our expert consultants are available to answer all your
                questions and help you find the perfect property that meets
                your needs and budget.
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
                Looking to invest in Dubai real estate? Our team can provide
                you with market insights, ROI analysis, and exclusive investment
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
            <h2 className={ctaSection.title}>Ready to Find Your Dream Property?</h2>
            <p className={ctaSection.subtitle}>
              Let our expert team guide you through Dubai's finest properties
            </p>
            <div className={ctaSection.buttonGroup}>
              <button className={buttonStyles.white}>Browse Properties</button>
              <Link to="/contact" className={buttonStyles.whiteBorder}>
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
