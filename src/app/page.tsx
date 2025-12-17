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
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-amber-600" />
            <span className="font-bold text-xl text-gray-900">My Interio World</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">
              Services
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
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
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent mb-6">
              Transform Your Living Space
            </h1>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Expert interior design and construction services tailored to your dreams. 
              Get instant AI-powered cost estimates for your perfect home.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="#bhk-selection">
                <Sparkles className="w-5 h-5 mr-2" />
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Select Your Space
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
            <motion.div variants={item}>
              <Link href="/calculator/1bhk">
                <Card className="p-10 text-center hover:shadow-2xl transition-all cursor-pointer bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300 hover:scale-105 hover:border-amber-500">
                  <div className="text-6xl font-bold text-amber-600 mb-3">1</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">BHK</div>
                  <p className="text-gray-700 text-sm">Perfect for singles & couples</p>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <Link href="/calculator/2bhk">
                <Card className="p-10 text-center hover:shadow-2xl transition-all cursor-pointer bg-gradient-to-br from-orange-100 to-rose-100 border-2 border-orange-300 hover:scale-105 hover:border-orange-500">
                  <div className="text-6xl font-bold text-orange-600 mb-3">2</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">BHK</div>
                  <p className="text-gray-700 text-sm">Ideal for small families</p>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <Link href="/calculator/3bhk">
                <Card className="p-10 text-center hover:shadow-2xl transition-all cursor-pointer bg-gradient-to-br from-rose-100 to-pink-100 border-2 border-rose-300 hover:scale-105 hover:border-rose-500">
                  <div className="text-6xl font-bold text-rose-600 mb-3">3</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">BHK</div>
                  <p className="text-gray-700 text-sm">Spacious family homes</p>
                </Card>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-amber-100">
              Ready to transform your space? Contact us today
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-amber-700">
              <MapPin className="w-10 h-10 text-amber-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <p className="text-amber-100 leading-relaxed">
                Boral Main Road, Mullick Para<br />
                Ramchandrapur, Narendrapur<br />
                Kolkata, Rajpur Sonarpur<br />
                West Bengal 700103
              </p>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border-amber-700">
              <Phone className="w-10 h-10 text-amber-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <a href="tel:09007307197" className="text-2xl font-bold text-amber-300 hover:text-amber-200 transition-colors">
                090073 07197
              </a>
              <p className="text-amber-100 mt-4">
                Available Monday to Saturday<br />
                9:00 AM - 7:00 PM
              </p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2025 My Interio World. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
