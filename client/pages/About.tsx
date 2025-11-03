import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { containers, layouts, responsiveGrid } from "@/styles/containers";
import { colors, spacing, typography } from "@/styles/theme";
import {
  sectionHeadings,
  sectionContent,
  featureSection,
  statsSection,
  valuesSection,
} from "@/styles/sections";
import { cardStyles } from "@/styles/cards";

export default function About() {
  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest standards of honesty and transparency in all our dealings.",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service and property offerings.",
    },
    {
      title: "Client First",
      description: "Our clients' needs and satisfaction are at the heart of everything we do.",
    },
    {
      title: "Innovation",
      description: "We embrace innovative solutions to deliver the best real estate experience.",
    },
  ];

  return (
    <div className={colors.background.white}>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-32 bg-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className={`relative ${containers.withPadding} text-center`}>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4`}>
            About Dubai Prime Properties
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl text-gray-300`}>
            Your Trusted Real Estate Partner Since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className={layouts.mainSection}>
        <div className={containers.withPadding}>
          <div className={sectionContent.heading}>
            <h2 className={sectionHeadings.main}>Our Story</h2>
          </div>

          <div className={`${containers.content} space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg`}>
            <p>
              Founded in 2010, Dubai Prime Properties has established itself as one of the leading real estate agencies in the UAE. With over 15 years of experience in the Dubai property market, we have helped thousands of clients find their dream homes and investment properties.
            </p>

            <p>
              Our deep understanding of the local market, combined with our commitment to excellence, has made us the go-to choice for both local and international investors looking to make the most of Dubai's dynamic real estate landscape.
            </p>

            <p>
              We specialize in luxury residential properties, including villas, penthouses, and apartments in prime locations such as Downtown Dubai, Palm Jumeirah, Dubai Marina, and Emirates Hills.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={layouts.altSection}>
        <div className={containers.withPadding}>
          <div className={responsiveGrid.contentGrid}>
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cardStyles.base}
            >
              <div className={`${colors.background.light} rounded-lg p-6 sm:p-8 shadow-lg`}>
                <h3 className={`text-2xl sm:text-3xl font-bold ${colors.text.primary} mb-3 sm:mb-4`}>
                  Our Mission
                </h3>
                <p className={`text-gray-700 text-base sm:text-lg`}>
                  To provide exceptional real estate services by connecting clients with their perfect properties while delivering unparalleled expertise, integrity, and personalized attention throughout every transaction.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cardStyles.base}
            >
              <div className={`${colors.background.light} rounded-lg p-6 sm:p-8 shadow-lg`}>
                <h3 className={`text-2xl sm:text-3xl font-bold ${colors.text.primary} mb-3 sm:mb-4`}>
                  Our Vision
                </h3>
                <p className={`text-gray-700 text-base sm:text-lg`}>
                  To be the most trusted and innovative real estate agency in Dubai, recognized for our commitment to excellence, client satisfaction, and our role in shaping the future of luxury living in the UAE.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={layouts.mainSection}>
        <div className={containers.withPadding}>
          <div className={sectionContent.heading}>
            <h2 className={sectionHeadings.main}>Our Core Values</h2>
            <p className={sectionHeadings.subtitle}>
              The principles that guide everything we do
            </p>
          </div>

          <div className={valuesSection.container}>
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className={valuesSection.item}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className={valuesSection.title}>{value.title}</h3>
                  <p className={valuesSection.description}>{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className={layouts.blueSection}>
        <div className={containers.withPadding}>
          <div className={statsSection.container}>
            <div>
              <div className={statsSection.number}>15+</div>
              <div className={statsSection.label}>Years of Excellence</div>
            </div>
            <div>
              <div className={statsSection.number}>2000+</div>
              <div className={statsSection.label}>Happy Clients</div>
            </div>
            <div>
              <div className={statsSection.number}>500+</div>
              <div className={statsSection.label}>Properties Sold</div>
            </div>
            <div>
              <div className={statsSection.number}>50+</div>
              <div className={statsSection.label}>Expert Agents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className={layouts.mainSection}>
        <div className={containers.withPadding}>
          <div className={sectionContent.heading}>
            <h2 className={sectionHeadings.main}>Why Choose Us</h2>
          </div>

          <div className={responsiveGrid.contentGrid}>
            <div>
              <h3 className={`text-lg sm:text-xl font-bold text-blue-600 mb-2 sm:mb-3`}>
                Local Expertise
              </h3>
              <p className={`text-sm sm:text-base ${colors.text.secondary}`}>
                Our team has in-depth knowledge of Dubai's real estate market, neighborhoods, and investment opportunities, ensuring you make informed decisions.
              </p>
            </div>
            <div>
              <h3 className={`text-lg sm:text-xl font-bold text-blue-600 mb-2 sm:mb-3`}>
                Premium Portfolio
              </h3>
              <p className={`text-sm sm:text-base ${colors.text.secondary}`}>
                We offer exclusive access to some of Dubai's most prestigious properties, from waterfront villas to luxury penthouses in iconic towers.
              </p>
            </div>
            <div>
              <h3 className={`text-lg sm:text-xl font-bold text-blue-600 mb-2 sm:mb-3`}>
                Personalized Service
              </h3>
              <p className={`text-sm sm:text-base ${colors.text.secondary}`}>
                Every client receives dedicated attention from our experienced consultants who understand your unique needs and preferences.
              </p>
            </div>
            <div>
              <h3 className={`text-lg sm:text-xl font-bold text-blue-600 mb-2 sm:mb-3`}>
                End-to-End Support
              </h3>
              <p className={`text-sm sm:text-base ${colors.text.secondary}`}>
                From initial consultation to post-purchase support, we guide you through every step of your real estate journey with professionalism and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
