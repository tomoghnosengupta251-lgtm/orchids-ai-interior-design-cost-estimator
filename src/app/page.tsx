"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, Sofa, Sparkles, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900">
      <nav className="fixed top-0 w-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl z-50 border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Home className="w-7 h-7 text-cyan-400" />
            <span className="font-black text-2xl text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              My Interio World
            </span>
          </div>
          <div className="flex items-center gap-8">
            <Link
              href="#services"
              className="text-cyan-300 hover:text-cyan-200 transition-all font-bold hover:scale-110"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-cyan-300 hover:text-cyan-200 transition-all font-bold hover:scale-110"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Transform Your Living Space
            </motion.h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-12 leading-relaxed font-semibold">
              Expert interior design and construction services tailored to your dreams. Get instant AI-powered cost
              estimates for your perfect home.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-black px-10 py-8 text-xl rounded-2xl shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/70 transition-all hover:scale-110"
              asChild
            >
              <Link href="#bhk-selection">
                <Sparkles className="w-6 h-6 mr-3 animate-pulse" />
                Get Instant Estimate
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gradient-to-br from-slate-900/50 to-indigo-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-cyan-200 max-w-2xl mx-auto font-semibold">
              Premium quality interiors with transparent pricing and AI-powered estimations
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={item} whileHover={{ scale: 1.05, y: -10 }}>
              <Card className="p-8 bg-gradient-to-br from-cyan-900/70 via-blue-900/50 to-indigo-900/70 border-2 border-cyan-500/30 hover:border-cyan-400/60 shadow-xl shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-400/40 transition-all backdrop-blur-xl">
                <Sofa className="w-14 h-14 text-cyan-400 mb-5" />
                <h3 className="text-2xl font-black mb-4 text-cyan-100">Custom Design</h3>
                <p className="text-cyan-200 leading-relaxed font-medium">
                  Personalized interior solutions crafted to match your unique style and requirements
                </p>
              </Card>
            </motion.div>

            <motion.div variants={item} whileHover={{ scale: 1.05, y: -10 }}>
              <Card className="p-8 bg-gradient-to-br from-purple-900/70 via-fuchsia-900/50 to-pink-900/70 border-2 border-purple-500/30 hover:border-purple-400/60 shadow-xl shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-400/40 transition-all backdrop-blur-xl">
                <Sparkles className="w-14 h-14 text-purple-400 mb-5 animate-pulse" />
                <h3 className="text-2xl font-black mb-4 text-purple-100">AI Estimation</h3>
                <p className="text-purple-200 leading-relaxed font-medium">
                  Get accurate cost predictions instantly with our intelligent pricing calculator
                </p>
              </Card>
            </motion.div>

            <motion.div variants={item} whileHover={{ scale: 1.05, y: -10 }}>
              <Card className="p-8 bg-gradient-to-br from-pink-900/70 via-rose-900/50 to-orange-900/70 border-2 border-pink-500/30 hover:border-pink-400/60 shadow-xl shadow-pink-500/20 hover:shadow-2xl hover:shadow-pink-400/40 transition-all backdrop-blur-xl">
                <Home className="w-14 h-14 text-pink-400 mb-5" />
                <h3 className="text-2xl font-black mb-4 text-pink-100">Full Build</h3>
                <p className="text-pink-200 leading-relaxed font-medium">
                  Complete construction and interior design services from concept to completion
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="bhk-selection" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text mb-6">
              Select Your Space
            </h2>
            <p className="text-xl text-fuchsia-200 max-w-2xl mx-auto font-semibold">
              Choose your home configuration and get an instant AI-powered cost estimate
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={item} whileHover={{ scale: 1.1, rotate: 2 }}>
              <Link href="/calculator/1bhk">
                <Card className="p-12 text-center hover:shadow-2xl transition-all cursor-pointer bg-gradient-to-br from-cyan-900/80 via-blue-900/60 to-indigo-900/80 border-2 border-cyan-500/40 hover:border-cyan-400 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 backdrop-blur-xl">
                  <div className="text-7xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-4">
                    1
                  </div>
                  <div className="text-4xl font-black text-cyan-100 mb-3">BHK</div>
                  <p className="text-cyan-300 text-base font-semibold">Perfect for singles & couples</p>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={item} whileHover={{ scale: 1.1, rotate: -2 }}>
              <Link href="/calculator/2bhk">
                <Card className="p-12 text-center hover:shadow-2xl transition-all cursor-pointer bg-gradient-to-br from-purple-900/80 via-fuchsia-900/60 to-pink-900/80 border-2 border-purple-500/40 hover:border-purple-400 shadow-xl shadow-purple-500/30 hover:shadow-purple-400/50 backdrop-blur-xl">
                  <div className="text-7xl font-black text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text mb-4">
                    2
                  </div>
                  <div className="text-4xl font-black text-purple-100 mb-3">BHK</div>
                  <p className="text-purple-300 text-base font-semibold">Ideal for small families</p>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={item} whileHover={{ scale: 1.1, rotate: 2 }}>
              <Link href="/calculator/3bhk">
                <Card className="p-12 text-center hover:shadow-2xl transition-all cursor-pointer bg-gradient-to-br from-pink-900/80 via-rose-900/60 to-orange-900/80 border-2 border-pink-500/40 hover:border-pink-400 shadow-xl shadow-pink-500/30 hover:shadow-pink-400/50 backdrop-blur-xl">
                  <div className="text-7xl font-black text-transparent bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text mb-4">
                    3
                  </div>
                  <div className="text-4xl font-black text-pink-100 mb-3">BHK</div>
                  <p className="text-pink-300 text-base font-semibold">Spacious family homes</p>
                </Card>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-violet-950 via-fuchsia-950 to-purple-950 text-white border-t-2 border-fuchsia-500/30"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text mb-6">
              Get In Touch
            </h2>
            <p className="text-2xl text-fuchsia-200 font-semibold">Ready to transform your space? Contact us today</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div whileHover={{ scale: 1.05, y: -5 }}>
              <Card className="p-8 bg-gradient-to-br from-cyan-900/70 via-blue-900/50 to-indigo-900/70 backdrop-blur-xl border-2 border-cyan-500/40 hover:border-cyan-400 shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-400/40 transition-all">
                <MapPin className="w-12 h-12 text-cyan-400 mb-5" />
                <h3 className="text-2xl font-black mb-4 text-cyan-100">Visit Us</h3>
                <p className="text-cyan-200 leading-relaxed font-medium">
                  Boral Main Road, Mullick Para
                  <br />
                  Ramchandrapur, Narendrapur
                  <br />
                  Kolkata, Rajpur Sonarpur
                  <br />
                  West Bengal 700103
                </p>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -5 }}>
              <Card className="p-8 bg-gradient-to-br from-fuchsia-900/70 via-pink-900/50 to-purple-900/70 backdrop-blur-xl border-2 border-fuchsia-500/40 hover:border-fuchsia-400 shadow-xl shadow-fuchsia-500/30 hover:shadow-2xl hover:shadow-fuchsia-400/40 transition-all">
                <Phone className="w-12 h-12 text-fuchsia-400 mb-5" />
                <h3 className="text-2xl font-black mb-4 text-fuchsia-100">Call Us</h3>
                <a
                  href="tel:09007307197"
                  className="text-3xl font-black text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text hover:from-yellow-300 hover:to-pink-400 transition-all block"
                >
                  090073 07197
                </a>
                <p className="text-fuchsia-200 mt-5 font-medium">
                  Available Monday to Saturday
                  <br />
                  9:00 AM - 7:00 PM
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-500 py-10 px-6 border-t border-fuchsia-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-semibold">© 2025 My Interio World. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
