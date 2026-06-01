"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "3+", label: "Project Selesai" },
  { value: "7+", label: "Teknologi Dipelajari" },
  { value: "1+", label: "Tahun Belajar" },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-16 items-start">

        {/* Kiri — teks */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:w-3/5 flex flex-col gap-5"
        >
          {/* Label */}
          <span className="text-xs font-medium uppercase tracking-widest text-blue-500">
            About Me
          </span>

          {/* Heading */}
          <h2 className="text-3xl font-medium text-gray-900 dark:text-white">
            Siapa saya?
          </h2>

          {/* Garis biru */}
          <div className="w-10 h-0.5 bg-blue-500" />

          {/* Deskripsi */}
          <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              Saya adalah mahasiswa Teknik Informatika yang memiliki ketertarikan
              besar di bidang Frontend Development. Saya menikmati proses membangun
              antarmuka yang bersih, responsif, dan nyaman digunakan.
            </p>
            <p>
              Saat ini saya sedang mengembangkan skill dengan mempelajari teknologi
              modern seperti Next.js dan Tailwind CSS, sambil mengerjakan
              project-project pribadi untuk mempersiapkan diri memasuki dunia kerja.
            </p>
          </div>

          {/* Info pendidikan & lokasi */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <span className="text-xs font-medium text-blue-500 uppercase tracking-wide">
                Pendidikan
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                S1 Teknik Informatika - Universitas Nahdlatul Ulama Yogyakarta
              </span>
            </div>
            <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <span className="text-xs font-medium text-blue-500 uppercase tracking-wide">
                Lokasi
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Sleman, Gamping Yogyakarta
              </span>
            </div>
          </div>
        </motion.div>

        {/* Kanan — stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:w-2/5 flex flex-col gap-4 w-full"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-1 p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
            >
              <span className="text-4xl font-medium text-blue-500">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}