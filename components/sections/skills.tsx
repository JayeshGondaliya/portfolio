"use client"

import { motion } from "framer-motion"
const ExpressIcon = () => (
  <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8 text-white">
    <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46z"/>
  </svg>
)

const allSkills = [
  // Programming Languages
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },

  // Frontend
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },

  // Backend
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },

  // ⚠️ Express black icon fix
{
  name: "Express.js",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
},


  // Databases
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

  // Python Web
  // ⚠️ Flask fix
 {
  name: "Flask",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg",
},

  // ⚠️ Django fix
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg",
  },

  // Tools
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },

  // ⚠️ GitHub white icon (visible on dark bg)
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
]


const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
}

const skillVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
}

const sectionVariants = {
  hidden: { opacity: 0, y: -80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
}

export default function Skills() {
  return (
    <motion.section
      className="py-20 bg-black border-t border-gray-800/30 relative overflow-hidden min-h-screen flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, 60, -40, 0], x: [0, 40, -30, 0], scale: [1, 1.4, 0.8, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-20 w-[500px] h-[500px] bg-gray-800/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h2 className="text-5xl font-extrabold text-white mb-4" variants={skillVariants}>
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400">
              Expertise
            </span>
          </motion.h2>
          <motion.p className="text-lg text-gray-400 max-w-2xl mx-auto" variants={skillVariants}>
            Technologies I use to build modern, scalable web applications
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="bg-gradient-to-br from-gray-900/40 to-black border border-gray-700/40 rounded-3xl p-10"
          variants={containerVariants}
        >
          <motion.div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {allSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={skillVariants}
                whileHover={{ scale: 1.15, y: -8 }}
                className="flex flex-col items-center gap-3"
              >
                <motion.div
                  className="w-14 h-14 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center p-3"
                  whileHover={{
                    rotate: 360,
                    boxShadow: "0 10px 30px rgba(150,150,150,0.4)",
                  }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </motion.div>
                <span className="text-xs text-gray-300 text-center">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
