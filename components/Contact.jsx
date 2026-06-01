"use client"

import { motion } from "framer-motion"

const contacts = [
  {
    label: "GitHub",
    value: "github.com/nabilmiftah",
    href: "https://github.com/nabilmiftah",
    desc: "Lihat semua project dan kode saya di sini.",
  },
  {
    label: "Email",
    value: "nabilmfthul@gmail.com",
    href: "mailto:nabilmfthul@gmail.com",
    desc: "Hubungi saya langsung lewat email.",
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      {/* Header — center */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-3 mb-6 text-center"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-blue-500">
          Contact
        </span>
        <h2 className="text-3xl font-medium text-gray-900 dark:text-white">
          Mari terhubung
        </h2>
        <div className="w-10 h-0.5 bg-blue-500" />
      </motion.div>

      {/* Deskripsi */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-12 text-sm leading-relaxed"
      >
        Saya terbuka untuk peluang kerja, kolaborasi project, atau sekadar
        berdiskusi seputar teknologi. Jangan ragu untuk menghubungi saya!
      </motion.p>

      {/* Card kontak */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.label === "GitHub" ? "_blank" : undefined}
            rel={contact.label === "GitHub" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col gap-3 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            {/* Label */}
            <span className="text-xs font-medium uppercase tracking-widest text-blue-500">
              {contact.label}
            </span>

            {/* Value */}
            <span className="text-base font-medium text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors break-all">
              {contact.value}
            </span>

            {/* Desc */}
            <span className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {contact.desc}
            </span>

            {/* Arrow */}
            <span className="text-sm font-medium text-gray-400 dark:text-gray-600 group-hover:text-blue-500 transition-colors mt-auto">
              Kunjungi →
            </span>
          </motion.a>
        ))}
      </div>

    </section>
  )
}