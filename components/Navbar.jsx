"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled
      ? "backdrop-blur-xl bg-white/20 dark:bg-[#0D1117]/20 border-b border-white/20 dark:border-white/10 shadow-sm"
      : "bg-transparent"
  }`

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className={navClass}>
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        
          <a href="#"
          className="font-medium text-lg text-gray-900 dark:text-white"
        >
          Miftah<span className="text-blue-500">.Dev</span>
        </a>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              
                <a href={link.href}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Kanan: toggle tema + hamburger */}
        <div className="flex items-center gap-3">

          {/* Toggle dark/light mode */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle tema"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}

          {/* Hamburger mobile */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 backdrop-blur-md bg-white/80 dark:bg-[#0D1117]/80">
          {navLinks.map((link) => (
            < a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}