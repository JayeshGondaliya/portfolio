"use client"

import { motion } from "framer-motion"
import { Download, Eye } from "lucide-react"
import { useState } from "react"

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Sahil Infotech",
    period: "January 2025 - July 2025",
    description:
      "Worked as Full-Stack Developer handling web application development, backend APIs, database management, and integrating frontend with backend using modern technologies like Node.js, React, and MongoDB.",
  },
]

const education = [
  {
    degree: "Master of Computer Applications (MCA) (In Progress)",
    institution: "Sarvajanik College of Engineering and Technology | Surat",
    period: "2025 - 2027",
    detail: "CGPA: 9.72 / 10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA) Complete",
    institution: "Veer Narmad South Gujarat University | Surat",
    period: "2022 - 2025",
    detail: "CGPA: 8.52 / 10",
  },
]

export default function Resume() {
  const [showPreview, setShowPreview] = useState(false)

  const handleDownloadResume = () => {
    // Download PDF instead of JPG
    const link = document.createElement("a")
    link.href = "/images/JAYESHGONDALIYA.pdf"
    link.download = "Jayesh_Gondaliya_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-20 bg-black border-t border-gray-800/20 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gray-800/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/3 flex-shrink-0"
            >
              <div className="relative w-80 h-[500px] group cursor-pointer" onClick={() => setShowPreview(true)}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gray-700/40 to-gray-800/40 rounded-2xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.img
                  whileHover={{ scale: 1.08, rotateZ: 2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src="/images/resume.png"
                  alt="Jayesh Gondaliya Resume"
                  className="relative w-full h-full object-contain rounded-2xl border-4 border-gray-800 shadow-2xl shadow-gray-700/50 group-hover:border-gray-500 transition-all"
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                  whileHover={{ backdropFilter: "blur(5px)" }}
                >
                  <Eye className="w-12 h-12 text-white" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Professional{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">Resume</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed font-medium">
                Passionate AI & ML Developer with hands-on experience in Python, Machine Learning, and NLP. Skilled in
                developing practical AI projects and building intelligent, data-driven solutions that solve real-world
                problems efficiently.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => setShowPreview(true)}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 25px 50px rgba(100, 100, 100, 0.6), 0 0 60px rgba(128, 128, 128, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-lg rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-gray-700 hover:border-gray-500"
                >
                  <Eye size={22} />
                  Preview Resume
                </motion.button>
                <motion.button
                  onClick={handleDownloadResume}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 25px 50px rgba(100, 100, 100, 0.6), 0 0 60px rgba(128, 128, 128, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-700 text-white font-bold text-lg rounded-xl hover:shadow-xl hover:bg-gray-800/20 transition-all duration-300 cursor-pointer group hover:border-gray-500"
                >
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Download size={22} />
                  </motion.span>
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-600 to-gray-800">
              Education
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-400 mb-8">Work Experience</h3>
              <div className="space-y-8">
                {experience.map((job, idx) => (
                  <motion.div
                    key={job.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.03,
                      x: 8,
                      boxShadow: "0 20px 40px rgba(100, 100, 100, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-br from-gray-900/40 to-black border-2 border-gray-700/30 rounded-xl p-6 hover:border-gray-500 transition-all cursor-pointer shadow-sm hover:shadow-lg backdrop-blur-sm"
                  >
                    <h4 className="text-lg font-bold text-white mb-1">{job.role}</h4>
                    <p className="text-gray-400 text-sm font-bold mb-2">{job.company}</p>
                    <p className="text-gray-500 text-sm mb-3 font-medium">{job.period}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-400 mb-8">Education</h3>
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.03,
                      x: -8,
                      boxShadow: "0 20px 40px rgba(100, 100, 100, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-br from-gray-900/40 to-black border-2 border-gray-700/30 rounded-xl p-6 hover:border-gray-500 transition-all cursor-pointer shadow-sm hover:shadow-lg backdrop-blur-sm"
                  >
                    <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-gray-400 text-sm font-bold mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-3 font-medium">{edu.period}</p>
                    {edu.detail && <p className="text-gray-300 text-sm font-medium">{edu.detail}</p>}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* PDF Preview Modal */}
      {showPreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setShowPreview(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-w-5xl w-full max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition-colors z-10 shadow-lg"
            >
              Close ✕
            </button>
            <iframe
              src="/images/JAYESHGONDALIYA.pdf#toolbar=0"
              className="w-full h-[85vh]"
              title="Resume Preview"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}