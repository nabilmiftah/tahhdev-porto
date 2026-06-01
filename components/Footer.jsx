"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-gray-200 dark:border-gray-800 py-8 px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Kiri — nama */}
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © {year} <span className="text-gray-900 dark:text-white font-medium">Miftah</span>. All rights reserved.
        </span>

        {/* Tengah — navigasi singkat */}
        <div className="flex items-center gap-6">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            
            <a  key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Kanan — dibuat dengan */}
        <span className="text-sm text-gray-400 dark:text-gray-600">
          Built with Next.js & Tailwind CSS
        </span>

      </div>
    </motion.footer>
  )
}