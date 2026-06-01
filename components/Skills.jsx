"use client"

import { motion } from "framer-motion"
import { skills } from "@/data/skills"

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col gap-3 mb-12"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-blue-500">
          Skills
        </span>
        <h2 className="text-3xl font-medium text-gray-900 dark:text-white">
          Teknologi yang saya gunakan
        </h2>
        <div className="w-10 h-0.5 bg-blue-500" />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 cursor-default"
            >
              {/* Animasi floating ombak */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Glow effect saat hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md scale-110"
                  style={{ background: skill.color }}
                />

                {/* Kotak ikon */}
                <div
                  className="relative w-16 h-16 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-300"
                  style={{ background: skill.bg }}
                >
                  <Icon
                    style={{ color: skill.color }}
                    className="text-3xl"
                  />
                </div>
              </motion.div>

              {/* Nama skill */}
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center">
                {skill.name}
              </span>
            </motion.div>
          )
        })}
      </div>

    </section>
  )
}