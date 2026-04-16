"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

const easeSmooth = [0.4, 0, 0.2, 1]

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="py-24 bg-black border-t border-gray-700/20 relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gray-700/15 rounded-full blur-3xl"
        animate={{ scale: [1, 1.25, 1], x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-gray-800/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeSmooth }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-14">
            Let’s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
              Connect
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    text: "+91 7574822720",
                    href: "tel:+917574822720",
                  },
                  {
                    icon: Mail,
                    text: "jayeshgondaliya9929@gmail.com",
                    href: "mailto:jayeshgondaliya9929@gmail.com",
                  },
                ].map(({ icon: Icon, text, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 6, color: "#d1d5db" }}
                    transition={{ duration: 0.6, ease: easeSmooth }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-gray-400 hover:text-gray-300"
                  >
                    <Icon size={22} className="text-gray-500" />
                    <span>{text}</span>
                  </motion.a>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex gap-5 mt-10">
                {[
                  {
                    Icon: Github,
                    link: "https://github.com/JayeshGondaliya",
                  },
                  {
                    Icon: Linkedin,
                    link: "https://www.linkedin.com/in/jayesh-gondaliya-/",
                  },
                  {
                    Icon: Mail,
                    link: "mailto:jayeshgondaliya9929@gmail.com",
                  },
                ].map(({ Icon, link }, i) => (
                  <motion.a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -6,
                      scale: 1.1,
                      boxShadow: "0 10px 30px rgba(120,120,120,0.3)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-lg bg-gray-900/40 border border-gray-700/40 text-gray-300 hover:text-white hover:border-gray-500"
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: easeSmooth }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {["name", "email"].map((field, i) => (
                <motion.input
                  key={i}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={`Your ${
                    field.charAt(0).toUpperCase() + field.slice(1)
                  }`}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/30 border border-gray-700/40 text-gray-200 placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-all"
                />
              ))}

              <motion.textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.01 }}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/30 border border-gray-700/40 text-gray-200 placeholder-gray-500 focus:border-gray-500 focus:outline-none resize-none"
              />

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 18px 50px rgba(120,120,120,0.4)",
                }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-gray-600 to-gray-500"
              >
                {submitted ? "Message Sent ✓" : "Send Message"}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
