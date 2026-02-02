"use client"

import { Home, Menu, X } from "lucide-react"
import NextImage from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Ensure the browser tab shows the correct site title
    document.title = "Interio World";
  }, [])

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl z-50 border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
          >
            <NextImage
              src="/logo.jpg"
              alt="Interio World Logo"
              width={32}
              height={32}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-cover rounded-full group-hover:opacity-80"
            />
          </motion.div>
          <span className="font-black text-lg sm:text-xl md:text-2xl text-foreground">
            Interio World
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 lg:px-5 py-2 lg:py-2.5 rounded-xl font-bold transition-all text-sm lg:text-base ${pathname === link.href
                ? "bg-foreground text-background shadow-lg shadow-black/20"
                : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-foreground hover:bg-foreground/5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-foreground/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-5 py-3 rounded-xl font-bold transition-all ${pathname === link.href
                    ? "bg-foreground text-background shadow-lg shadow-black/20"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
