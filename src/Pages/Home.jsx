import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-100 min-h-screen overflow-hidden relative">
      {/* Animated Background Elements - Civic Issues */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Dustbins - 5 total */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          🗑️
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-40 right-20 text-5xl opacity-20"
        >
          🗑️
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -18, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
          className="absolute top-60 left-1/3 text-4xl opacity-15"
        >
          🗑️
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -12, 0],
            x: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          className="absolute bottom-40 right-1/3 text-5xl opacity-18"
        >
          🗑️
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -16, 0],
            rotate: [0, -4, 0]
          }}
          transition={{ duration: 5.5, repeat: Infinity, delay: 2.5 }}
          className="absolute top-1/2 left-16 text-6xl opacity-15"
        >
          🗑️
        </motion.div>

        {/* Street Lights - 4 total */}
        <motion.div
          animate={{ 
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-32 left-1/4 text-5xl"
        >
          💡
        </motion.div>

        <motion.div
          animate={{ 
            opacity: [0.12, 0.22, 0.12]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/3 right-20 text-6xl"
        >
          💡
        </motion.div>

        <motion.div
          animate={{ 
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 left-1/2 text-5xl"
        >
          💡
        </motion.div>

        <motion.div
          animate={{ 
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 1.5 }}
          className="absolute top-3/4 right-1/4 text-4xl"
        >
          💡
        </motion.div>

        {/* Pipes & Water Fixtures - 5 total */}
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/4 left-12 text-5xl opacity-15"
        >
          🔧
        </motion.div>

        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/2 right-12 text-6xl opacity-18"
        >
          🚰
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -8, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute top-2/3 left-1/3 text-5xl opacity-15"
        >
          🚿
        </motion.div>

        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-20 text-4xl opacity-20"
        >
          🚰
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 right-1/3 text-5xl opacity-15"
        >
          🔧
        </motion.div>

        {/* Road/Potholes - 4 total */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-32 left-32 text-7xl opacity-15"
        >
          🚧
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, 10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/2 right-40 text-6xl opacity-15"
        >
          🕳️
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.08, 1]
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          className="absolute top-3/4 left-2/3 text-5xl opacity-18"
        >
          🚧
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, -8, 0],
            y: [0, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-1/3 right-1/4 text-4xl opacity-15"
        >
          🕳️
        </motion.div>

        {/* Water Droplets - 4 total */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 text-6xl opacity-20"
        >
          💧
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -12, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute top-1/2 left-2/3 text-4xl opacity-18"
        >
          💧
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -14, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ duration: 3.8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/2 left-1/4 text-5xl opacity-15"
        >
          💧
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -8, 0]
          }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/4 right-1/2 text-5xl opacity-17"
        >
          💧
        </motion.div>

        {/* Traffic/Street Lights - 2 total */}
        <motion.div
          animate={{ 
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/4 right-1/3 text-6xl"
        >
          🚦
        </motion.div>

        <motion.div
          animate={{ 
            opacity: [0.12, 0.22, 0.12]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/3 left-1/2 text-5xl"
        >
          🚦
        </motion.div>

        {/* Construction/Infrastructure - 2 total */}
        <motion.div
          animate={{ 
            x: [0, -15, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-1/3 left-1/3 text-5xl opacity-20"
        >
          🏗️
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, 10, 0],
            y: [0, -8, 0]
          }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
          className="absolute top-2/3 right-1/3 text-6xl opacity-15"
        >
          🏗️
        </motion.div>

        {/* Additional Warning & Emergency Elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/2 left-12 text-5xl opacity-15"
        >
          ⚠️
        </motion.div>

        <motion.div
          animate={{ 
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-1/4 right-16 text-4xl"
        >
          🚨
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          className="absolute top-1/3 left-2/3 text-5xl opacity-15"
        >
          🛠️
        </motion.div>

        {/* Gradient Blobs - 4 total */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse delay-1500"></div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center py-20 px-6 z-10"
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
            <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-lg">
              🚀 Report an Issue
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            to="/reviews"
            className="group relative bg-white text-gray-800 px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-200 hover:border-blue-500"
          >
            <span className="flex items-center justify-center gap-2 font-semibold text-lg">
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
            { number: "1000+", label: "Issues Reported", icon: "📋" },
            { number: "500+", label: "Active Citizens", icon: "👥" },
            { number: "95%", label: "Resolution Rate", icon: "✅" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-blue-300 transition-all cursor-pointer"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Issue Categories Preview */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto px-6 py-16 mb-16 z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Report Any Civic Issue
          </h2>
          <p className="text-gray-600 text-lg">
            We cover all types of civic problems
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🗑️", label: "Garbage", color: "from-green-400 to-green-600" },
            { icon: "🕳️", label: "Potholes", color: "from-gray-400 to-gray-600" },
            { icon: "💧", label: "Water Issues", color: "from-blue-400 to-blue-600" },
            { icon: "🚧", label: "Road Repair", color: "from-orange-400 to-orange-600" },
            { icon: "💡", label: "Street Lights", color: "from-yellow-400 to-yellow-600" },
            { icon: "🏗️", label: "Construction", color: "from-red-400 to-red-600" },
            { icon: "🚰", label: "Sewage", color: "from-purple-400 to-purple-600" },
            { icon: "📢", label: "Other", color: "from-pink-400 to-pink-600" },
          ].map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl shadow-lg text-center cursor-pointer`}
            >
              <div className="text-5xl mb-2">{category.icon}</div>
              <div className="text-white font-semibold">{category.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Section with Issue Icons */}
      <div className="relative max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-6 mb-16 z-10">
        {[
          {
            icon: "📍",
            title: "Location-Based Issues",
            desc: "Easily report problems with GPS and photo evidence. Real-time tracking ensures faster resolution.",
            gradient: "from-blue-500 to-cyan-500",
            bgIcon: "🗺️"
          },
          {
            icon: "⭐",
            title: "Reviews & Feedback",
            desc: "Share your thoughts and help us improve civic services. Your feedback drives positive change.",
            gradient: "from-purple-500 to-pink-500",
            bgIcon: "💬"
          },
          {
            icon: "🏅",
            title: "Badge System",
            desc: "Earn rewards as you contribute more to society. Unlock achievements and show your impact!",
            gradient: "from-orange-500 to-red-500",
            bgIcon: "🏆"
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
            {/* Background Icon */}
            <div className="absolute -bottom-4 -right-4 text-9xl opacity-5 group-hover:opacity-10 transition-opacity">
              {feature.bgIcon}
            </div>
            
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
        className="relative max-w-5xl mx-auto px-6 py-16 mb-16 z-10"
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
        className="relative max-w-4xl mx-auto px-6 py-16 mb-16 z-10"
      >
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center shadow-2xl overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl">
              🌟
            </div>
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