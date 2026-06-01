"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 py-24 max-w-5xl mx-auto"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">

        {/* Kiri — teks */}
        <div className="flex flex-col gap-5 md:w-3/5">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Nama */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white leading-tight">
              Halo, saya{" "}
              <span className="text-blue-500">Miftah</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Mahasiswa Informatika",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </motion.div>

          {/* Deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md"
          >
            Mahasiswa Teknik Informatika yang antusias di bidang Frontend Development.
            Sedang membangun skill dan pengalaman untuk terjun ke industri.
          </motion.p>

          {/* Tombol */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-1"
          >
            
            < a href="#projects"
              className="px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors"
            >
              Lihat Project
            </a>
            
            <a href="/cv.pdf"
              className="px-5 py-2.5 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 text-sm font-medium transition-colors"
            >
              Download CV
            </a>
          </motion.div>

          {/* Sosial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 mt-1"
          >
            
            <a href="https://github.com/nabilmiftah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm flex items-center gap-1.5"
            >
              GitHub
            </a>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            
            <a href="mailto:nabilmfthul@gmail.com"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm flex items-center gap-1.5"
            >
              Email
            </a>
          </motion.div>

        </div>

        {/* Kanan — foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-2/5 flex justify-center"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-blue-500 overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Foto profil Miftah"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}