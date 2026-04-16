'use client'

import { motion } from 'framer-motion'

const blogs = [
  {
    title: 'Introduction to Machine Learning',
    excerpt: 'Learn the fundamentals of ML and how to get started with Python',
    date: 'Coming Soon',
    image: '📚'
  },
  {
    title: 'NLP with Python: A Beginner\'s Guide',
    excerpt: 'Explore natural language processing techniques and applications',
    date: 'Coming Soon',
    image: '💬'
  },
  {
    title: 'Deploying ML Models with FastAPI',
    excerpt: 'Step-by-step guide to deploy your machine learning models',
    date: 'Coming Soon',
    image: '🚀'
  }
]

export default function Blog() {
  return (
    <section className="py-20 bg-black border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Latest <span className="text-cyan-400">Blog Posts</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog, idx) => (
              <motion.div
                key={blog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/20 border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 h-32 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {blog.image}
                </div>
                <div className="p-5">
                  <p className="text-cyan-400 text-xs font-medium mb-2">{blog.date}</p>
                  <h3 className="text-white font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-400 text-sm">{blog.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
