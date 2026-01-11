import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-100 min-h-screen overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center py-20 px-6"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-4"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            🎉 Empowering Citizens Since 2025
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 drop-shadow-2xl mb-4">
          Welcome to Jansevak
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          A <span className="font-bold text-blue-600">citizen-driven platform</span> to report civic issues, 
          leave reviews, and build a better community together. Your voice matters! 🌍
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link
            to="/report"
            className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 font-semibold text-lg">
              🚀 Report an Issue
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            to="/reviews"
            className="group relative bg-white text-gray-800 px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-200 hover:border-blue-500"
          >
            <span className="flex items-center gap-2 font-semibold text-lg">
              ⭐ Read Reviews
            </span>
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { number: "1000+", label: "Issues Reported" },
            { number: "500+", label: "Active Citizens" },
            { number: "95%", label: "Resolution Rate" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <div className="relative max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-6 mb-16 mt-20">
        {[
          {
            icon: "📍",
            title: "Location-Based Issues",
            desc: "Easily report problems with GPS and photo evidence. Real-time tracking ensures faster resolution.",
            gradient: "from-blue-500 to-cyan-500"
          },
          {
            icon: "⭐",
            title: "Reviews & Feedback",
            desc: "Share your thoughts and help us improve civic services. Your feedback drives positive change.",
            gradient: "from-purple-500 to-pink-500"
          },
          {
            icon: "🏅",
            title: "Badge System",
            desc: "Earn rewards as you contribute more to society. Unlock achievements and show your impact!",
            gradient: "from-orange-500 to-red-500"
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            
            <div className="relative z-10">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>

            {/* Decorative corner element */}
            <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
          </motion.div>
        ))}
      </div>

      {/* Journey / Timeline Preview */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto px-6 py-16 mb-16"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            🕒 Why Choose Jansevak?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of citizens making a real difference in their communities
          </p>
        </div>

        <div className="relative border-l-4 border-blue-500 ml-6">
          {[
            {
              step: "Raise Your Voice",
              desc: "Easily submit issues like garbage, broken roads, or water supply problems with just a few clicks.",
              icon: "📢"
            },
            {
              step: "Track Contributions",
              desc: "Earn badges for reporting and contributing to society. See your impact grow over time.",
              icon: "📊"
            },
            {
              step: "Impact Change",
              desc: "Help civic authorities take faster action by highlighting real problems that need attention.",
              icon: "🎯"
            },
          ].map((m, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 ml-6 group"
            >
              <span className="absolute -left-10 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </span>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-2 group-hover:border-blue-300">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{m.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">
                      {m.step}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto px-6 py-16 mb-16"
      >
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our growing community of active citizens and help build a better tomorrow
            </p>
            <Link
              to="/report"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Now 🚀
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}