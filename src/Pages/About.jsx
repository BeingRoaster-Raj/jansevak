import { motion } from "framer-motion"

export default function About() {
  const milestones = [
    { year: "2025", title: "Idea Born 💡", desc: "Jansevak was envisioned as a way to empower citizens to report civic issues easily." },
    { year: "2025", title: "Hack4Bihar 🚀", desc: "The project was showcased at Hack4Bihar, gaining recognition for social impact." },
    { year: "2025", title: "Beta Launch 🌐", desc: "First version launched with issue reporting, reviews, and badges." },
    { year: "Future", title: "Scaling Nationwide 🇮🇳", desc: "Planned expansion to connect with municipal bodies across India." },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">
          About <span className="text-blue-500">Jansevak</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Empowering citizens to report issues, drive accountability, and improve society with technology.
        </p>
      </motion.div>

      {/* Mission & App Info */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🌍 Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Jansevak is built with a vision to bridge the gap between citizens and civic authorities.
            Many issues like garbage accumulation, broken roads, or water problems remain unnoticed. 
            With Jansevak, every citizen can actively participate in building a cleaner and safer society 
            by reporting problems in real-time.
          </p>
        </motion.section>

        {/* App */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📱 About the App</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>📍 Report civic issues with location and photos</li>
            <li>⭐ Leave reviews and feedback about the app and services</li>
            <li>🏅 Earn badges for active contributions (10, 50, 100+ reports)</li>
            <li>👩‍💻 Help government agencies prioritize and solve problems faster</li>
          </ul>
        </motion.section>
      </div>

      {/* Timeline Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          🕒 Our Journey
        </h2>
        <div className="relative border-l-4 border-blue-500 ml-6">
          {milestones.map((m, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full text-white font-bold">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold text-blue-600">{m.year} – {m.title}</h3>
              <p className="text-gray-700 mt-2">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Developer Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">👨‍💻 About the Developer</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Jansevak is developed by <span className="font-bold text-blue-600">Raj Anand</span>, 
          a passionate developer who believes technology can drive positive change in society.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With experience in web development, data structures & algorithms, and hardware projects, 
          Raj brings together technical skills and social impact ideas to build solutions that matter.
        </p>

        {/* Links */}
        <div className="mt-6 flex gap-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition"
          >
            🌐 GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            🔗 LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:your@email.com"
            className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
          >
            📧 Contact
          </motion.a>
        </div>
      </motion.section>
    </div>
  )
}
