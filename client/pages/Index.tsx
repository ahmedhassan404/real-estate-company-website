import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { MapPin, Home, Users, Building2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Index() {
  const properties = [
    {
      id: 1,
      title: "Luxury Waterfront Villa",
      location: "Palm Jumeirah",
      price: "AED 25,000,000",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=400&fit=crop",
      beds: 6,
      baths: 7,
      sqft: "8,500 sq ft",
    },
    {
      id: 2,
      title: "Modern Penthouse",
      location: "Downtown Dubai",
      price: "AED 18,500,000",
      image:
        "https://images.unsplash.com/photo-1545321503-87f68f0dbbf7?w=500&h=400&fit=crop",
      beds: 4,
      baths: 5,
      sqft: "6,200 sq ft",
    },
    {
      id: 3,
      title: "Executive Apartment",
      location: "Dubai Marina",
      price: "AED 8,900,000",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
      beds: 3,
      baths: 4,
      sqft: "3,800 sq ft",
    },
  ];

  const features = [
    {
      icon: Building2,
      title: "Expert Guidance",
      description:
        "Our experienced team provides personalized service and market insights",
    },
    {
      icon: Home,
      title: "Premium Listings",
      description:
        "Access to exclusive properties in Dubai's most sought-after locations",
    },
    {
      icon: Users,
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
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Your Dream Property in Dubai
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Premium real estate solutions in the heart of the UAE
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
                <Link
                  to="/about"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-block text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { count: "500+", label: "Properties Listed" },
                { count: "2,000+", label: "Happy Clients" },
                { count: "15+", label: "Years Experience" },
                { count: "98%", label: "Success Rate" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center"
                >
                  <div className="text-3xl font-bold mb-2">{stat.count}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600">
              Explore our handpicked selection of luxury properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="text-blue-600 font-bold text-lg mb-2">
                    {property.price}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm">
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
              View All Properties
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Features */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Dubai Prime Properties
            </h2>
            <p className="text-xl text-blue-100">
              Your trusted partner in Dubai real estate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white bg-opacity-10 rounded-lg p-8"
                >
                  <Icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Detailed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Viewing & Investment Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-blue-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Schedule a Viewing
              </h3>
              <p className="text-gray-700 mb-4">
                Interested in viewing one of our properties? Contact us to
                schedule a personalized tour at your convenience.
              </p>
              <p className="text-gray-600 text-sm">
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
              className="bg-blue-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Investment Opportunities
              </h3>
              <p className="text-gray-700 mb-4">
                Looking to invest in Dubai real estate? Our team can provide you
                with market insights, ROI analysis, and exclusive investment
                opportunities tailored to your financial goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-2xl text-blue-100 mb-12">
              Let our expert team guide you through Dubai's finest properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Browse Properties
              </button>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
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
