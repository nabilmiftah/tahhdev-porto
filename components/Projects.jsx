"use client"

import { motion } from "framer-motion"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      {/* Header — center */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-3 mb-12 text-center"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-blue-500">
          Projects
        </span>
        <h2 className="text-3xl font-medium text-gray-900 dark:text-white">
          Yang sudah saya bangun
        </h2>
        <div className="w-10 h-0.5 bg-blue-500" />
      </motion.div>

      {/* 3 card sejajar */}
      <div className={`grid gap-6 ${
        projects.length === 1
          ? "grid-cols-1 max-w-sm mx-auto"
          : projects.length === 2
          ? "grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto"
          : "grid-cols-1 md:grid-cols-3"
      }`}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="group flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-default"
          >
            {/* Nomor + badge tipe */}
            <div className="flex items-center justify-between">
              <span className="text-3xl font-medium text-gray-100 dark:text-gray-800 group-hover:text-blue-100 dark:group-hover:text-blue-900 transition-colors">
                0{index + 1}
              </span>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full
                ${project.type === "Solo Project"
                  ? "bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400"
                  : "bg-yellow-50 dark:bg-yellow-950 text-yellow-600 dark:text-yellow-400"
                }`}
              >
                {project.type}
              </span>
            </div>

            {/* Judul & deskripsi */}
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            <div className="pt-3 border-t border-gray-200 dark:border-gray-800 group-hover:border-blue-100 dark:group-hover:border-blue-900 transition-colors">
              {project.github ? (
                
                <a  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-400 dark:text-gray-600 group-hover:text-blue-500 transition-colors"
                >
                  GitHub →
                </a>
              ) : (
                <span className="text-sm text-gray-400 dark:text-gray-600">
                  Coming soon
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}