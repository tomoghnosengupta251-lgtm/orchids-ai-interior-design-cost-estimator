"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Target, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every project, ensuring exceptional quality and craftsmanship.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to understand their vision and bring it to life with expert guidance.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail in every aspect, from initial design to final execution.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by genuine love for design and commitment to creating spaces that inspire and delight.",
    },
  ]

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Navigation />

        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30"
              >
                <span className="text-amber-400 font-bold text-sm sm:text-base">About Us</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight">
                <span className="text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600 bg-clip-text">
                  Crafting Dreams
                </span>
                <br />
                <span className="text-white">Since Day One</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed px-2">
                My Interio World is a premier interior design and construction company based in Kolkata, 
                dedicated to transforming spaces into extraordinary living experiences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">Our Story</h2>
                <div className="space-y-3 sm:space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    Founded with a vision to revolutionize interior design in Kolkata, My Interio World combines 
                    traditional craftsmanship with cutting-edge technology to deliver exceptional results.
                  </p>
                  <p>
                    What sets us apart is our commitment to innovation. We're proud to be one of the first in the 
                    region to offer AI-powered cost estimation, making premium design accessible and transparent.
                  </p>
                  <p>
                    From single-room makeovers to complete home construction, our team of experienced designers and 
                    craftsmen bring decades of expertise to every project.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">Our Mission</h2>
                <div className="space-y-3 sm:space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    To create beautiful, functional spaces that enhance the quality of life for our clients while 
                    maintaining the highest standards of quality, integrity, and customer satisfaction.
                  </p>
                  <p>
                    We believe that great design should be accessible to everyone. That's why we've developed our 
                    AI-powered estimation tool – to provide instant, accurate pricing and empower our clients to make 
                    informed decisions.
                  </p>
                  <p>
                    Our commitment extends beyond aesthetics. We prioritize sustainable practices, quality materials, 
                    and timely delivery to ensure your project is a complete success.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16 md:mb-24"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-white mb-8 sm:mb-10 md:mb-12">Our Values</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                    >
                      <Card className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-500/20 hover:border-amber-500/50 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all h-full text-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-lg shadow-amber-500/30 mx-auto">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-black mb-2 sm:mb-3 text-white">{value.title}</h3>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-amber-900/10 to-orange-900/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
                Let's Create Together
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-10 md:mb-12 px-2">
                Ready to transform your space? Get in touch with us today
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 hover:from-amber-400 hover:via-orange-500 hover:to-rose-500 text-white font-black px-8 sm:px-12 md:px-16 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl rounded-2xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/50 transition-all group w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    )
}
