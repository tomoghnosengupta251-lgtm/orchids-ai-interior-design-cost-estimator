"use client"

import { Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-2xl z-50 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
          >
            <Home className="w-8 h-8 text-amber-400 group-hover:text-amber-300" />
          </motion.div>
          <span className="font-black text-2xl text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text">
            My Interio World
          </span>
        </Link>
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-5 py-2.5 rounded-xl font-bold transition-all ${
                pathname === link.href
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/50"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
