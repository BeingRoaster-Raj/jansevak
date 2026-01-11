import { motion } from "framer-motion"

export default function About() {
  const milestones = [
    { 
      year: "2025", 
      title: "Idea Born 💡", 
      desc: "Jansevak was envisioned as a way to empower citizens to report civic issues easily.",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      year: "2025", 
      title: "Idea Implemented 🚀", 
      desc: "The project was showcased at Hack4Bihar, gaining recognition for social impact.",
      color: "from-purple-500 to-pink-500"
    },
    { 
      year: "2026", 
      title: "Beta Launch 🌐", 
      desc: "First version launched with issue reporting, reviews, and badges.",
      color: "from-orange-500 to-red-500"
    },
    { 
      year: "Future", 
      title: "Scaling Nationwide 🇮🇳", 
      desc: "Planned expansion to connect with municipal bodies across India.",
      color: "from-green-500 to-teal-500"
    },
  ]

  const features = [
    { icon: "📍", title: "Location Tracking", desc: "GPS-based issue reporting" },
    { icon: "📸", title: "Photo Evidence", desc: "Upload visual proof" },
    { icon: "⭐", title: "Review System", desc: "Community feedback" },
    { icon: "🏅", title: "Gamification", desc: "Earn badges & rewards" },
    { icon: "📊", title: "Analytics", desc: "Track your impact" },
    { icon: "🔔", title: "Notifications", desc: "Stay updated" },
  ]

  const techStack = [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "Node.js", icon: "🟢", color: "text-green-500" },
    { name: "MongoDB", icon: "🍃", color: "text-green-600" },
    { name: "Express", icon: "🚂", color: "text-gray-700" },
    { name: "Firebase", icon: "🔥", color: "text-orange-500" },
    { name: "Tailwind", icon: "💨", color: "text-cyan-500" },
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 text-9xl"
        >
          🌟
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 left-20 text-9xl"
        >
          🚀
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 text-9xl"
        >
          💡
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto p-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-8xl mb-6"
          >
            🌍
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 mb-6 drop-shadow-lg">
            About <span className="text-blue-500">Jansevak</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Empowering citizens to report issues, drive accountability, and improve society with technology.
          </p>
        </motion.div>

        {/* Mission & Vision Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {/* Mission */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all border-2 border-blue-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-5xl">🎯</div>
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Jansevak is built with a vision to bridge the gap between citizens and civic authorities.
              Many issues like garbage accumulation, broken roads, or water problems remain unnoticed. 
              With Jansevak, every citizen can actively participate in building a cleaner and safer society 
              by reporting problems in real-time.
            </p>
          </motion.section>

          {/* Vision */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all border-2 border-purple-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-5xl">🔭</div>
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We envision a future where technology empowers every citizen to become a changemaker. 
              Jansevak aims to create transparent, accountable, and responsive governance by:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Connecting citizens directly with authorities
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Making civic issues visible and trackable
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Building engaged communities nationwide
              </li>
            </ul>
          </motion.section>
        </div>

        {/* Features Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            ✨ Key Features
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center border-2 border-gray-100"
              >
                <div className="text-5xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            🕒 Our Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
            
            {milestones.map((m, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-0 ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} md:transform md:translate-x-1/2 w-6 h-6 bg-gradient-to-br ${m.color} rounded-full border-4 border-white shadow-lg`}></div>
                
                <div className={`bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 ${index % 2 === 0 ? 'border-blue-500' : 'border-purple-500'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-2xl font-bold bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>
                      {m.year}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800">{m.title}</h3>
                  </div>
                  <p className="text-gray-700">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            🛠️ Built With
          </h2>
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-center"
                >
                  <div className={`text-5xl mb-2 ${tech.color}`}>{tech.icon}</div>
                  <div className="text-sm font-semibold text-gray-700">{tech.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Developer Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 text-9xl">👨‍💻</div>
            <div className="absolute bottom-10 left-10 text-9xl">💻</div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">👨‍💻</div>
              <h2 className="text-4xl font-bold">About the Developer</h2>
            </div>
            
            <p className="text-lg leading-relaxed mb-4">
              Jansevak is developed by <span className="font-bold text-yellow-300">Raj Anand & Ankit Kumar</span>, 
              two passionate developer who believes technology can drive positive change in society.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              With experience in  <span className="font-bold text-yellow-300">Web Development, Data Structures & Algorithms, and Hardware Projects,</span> 
              they combine their technical skills with social impact ideas to build solutions that truly matter. Their shared vision is to use technology to solve real-world    civic problems and empower communities.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Projects Together</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold">3+</div>
                <div className="text-sm">Technologies Used</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold">∞</div>
                <div className="text-sm">Ideas</div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all font-semibold flex items-center gap-2 shadow-lg"
              >
                <span className="text-xl">🌐</span> GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-blue-700 text-white hover:bg-blue-800 transition-all font-semibold flex items-center gap-2 shadow-lg"
              >
                <span className="text-xl">🔗</span> LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:your@email.com"
                className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-all font-semibold flex items-center gap-2 shadow-lg"
              >
                <span className="text-xl">📧</span> Contact
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-2 border-purple-100">
            <div className="text-6xl mb-6">🤝</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Join the Movement
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Be part of something bigger. Help us build a better tomorrow, one report at a time.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Get Started Today 🚀
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}