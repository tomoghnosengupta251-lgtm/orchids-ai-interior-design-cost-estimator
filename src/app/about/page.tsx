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

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30"
            >
              <span className="text-amber-400 font-bold">About Us</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              <span className="text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600 bg-clip-text">
                Crafting Dreams
              </span>
              <br />
              <span className="text-white">Since Day One</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              My Interio World is a premier interior design and construction company based in Kolkata, 
              dedicated to transforming spaces into extraordinary living experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-black text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
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
              <h2 className="text-4xl font-black text-white mb-6">Our Mission</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
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
            className="mb-24"
          >
            <h2 className="text-4xl font-black text-center text-white mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <Card className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-500/20 hover:border-amber-500/50 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all h-full text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30 mx-auto">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-black mb-3 text-white">{value.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-amber-900/10 to-orange-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Let's Create Together
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              Ready to transform your space? Get in touch with us today
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 hover:from-amber-400 hover:via-orange-500 hover:to-rose-500 text-white font-black px-16 py-8 text-xl rounded-2xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/50 transition-all group"
              asChild
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
