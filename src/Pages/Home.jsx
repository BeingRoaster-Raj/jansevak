import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 drop-shadow-lg">
          Welcome to <span className="text-blue-500">Jansevak</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          A citizen-driven platform to report civic issues, leave reviews, and
          build a better community together.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <Link
            to="/report"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            🚀 Report an Issue
          </Link>
          <Link
            to="/reviews"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition"
          >
            ⭐ Read Reviews
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-6 mb-16">
        {[
          {
            title: "📍 Location-Based Issues",
            desc: "Easily report problems with GPS and photo evidence.",
          },
          {
            title: "⭐ Reviews & Feedback",
            desc: "Share your thoughts and help us improve civic services.",
          },
          {
            title: "🏅 Badge System",
            desc: "Earn rewards as you contribute more to society.",
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Journey / Timeline Preview */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          🕒 Why Jansevak?
        </h2>
        <div className="relative border-l-4 border-blue-500 ml-6">
          {[
            {
              step: "Raise Your Voice",
              desc: "Easily submit issues like garbage, broken roads, or water supply problems.",
            },
            {
              step: "Track Contributions",
              desc: "Earn badges for reporting and contributing to society.",
            },
            {
              step: "Impact Change",
              desc: "Help civic authorities take faster action by highlighting real problems.",
            },
          ].map((m, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full text-white font-bold">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold text-blue-600">
                {m.step}
              </h3>
              <p className="text-gray-700 mt-2">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
