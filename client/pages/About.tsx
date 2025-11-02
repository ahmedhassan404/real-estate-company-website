import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 bg-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About Dubai Prime Properties
          </h1>
          <p className="text-2xl text-gray-300">
            Your Trusted Real Estate Partner Since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-gray-700 text-lg">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To provide exceptional real estate services by connecting clients with their perfect properties while delivering unparalleled expertise, integrity, and personalized attention throughout every transaction.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To be the most trusted and innovative real estate agency in Dubai, recognized for our commitment to excellence, client satisfaction, and our role in shaping the future of luxury living in the UAE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2000+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Properties Sold</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Agents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                Local Expertise
              </h3>
              <p className="text-gray-600">
                Our team has in-depth knowledge of Dubai's real estate market, neighborhoods, and investment opportunities, ensuring you make informed decisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                Premium Portfolio
              </h3>
              <p className="text-gray-600">
                We offer exclusive access to some of Dubai's most prestigious properties, from waterfront villas to luxury penthouses in iconic towers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                Personalized Service
              </h3>
              <p className="text-gray-600">
                Every client receives dedicated attention from our experienced consultants who understand your unique needs and preferences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                End-to-End Support
              </h3>
              <p className="text-gray-600">
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
