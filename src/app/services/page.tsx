"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sofa, Home, Paintbrush, Hammer, Lightbulb, Sparkles, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

export default function ServicesPage() {
  const services = [
    {
      icon: Sofa,
      title: "Complete Interior Design",
      description: "Full-service interior design from concept to completion. Our expert designers create personalized spaces that reflect your style and maximize functionality.",
      features: ["Space planning", "Color consultation", "Furniture selection", "Décor sourcing"],
      color: "amber",
    },
    {
      icon: Home,
      title: "Residential Construction",
      description: "End-to-end construction services for your dream home. We handle everything from foundation to finishing with premium quality materials.",
      features: ["Foundation work", "Structural design", "Quality materials", "Timely delivery"],
      color: "orange",
    },
    {
      icon: Paintbrush,
      title: "Modular Kitchen Design",
      description: "Custom modular kitchens designed for modern living. Combining aesthetics with functionality to create your perfect cooking space.",
      features: ["Custom cabinets", "Modern appliances", "Storage solutions", "Premium finishes"],
      color: "rose",
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform your existing space with expert renovation services. We breathe new life into old spaces while maintaining structural integrity.",
      features: ["Space optimization", "Modern upgrades", "Minimal disruption", "Quality craftsmanship"],
      color: "amber",
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Strategic lighting solutions that enhance ambiance and functionality. From ambient to task lighting, we design for every mood.",
      features: ["LED solutions", "Smart controls", "Energy efficient", "Custom fixtures"],
      color: "orange",
    },
    {
      icon: Sparkles,
      title: "Luxury Finishing",
      description: "Premium finishing touches that elevate your space. From designer wallpapers to custom moldings, we perfect every detail.",
      features: ["Designer materials", "Custom textures", "Premium paints", "Detail perfection"],
      color: "rose",
    },
  ]

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
              <span className="text-amber-400 font-bold">Our Services</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              <span className="text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600 bg-clip-text">
                Premium Design
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              From concept to completion, we provide comprehensive interior design and construction services 
              tailored to transform your vision into reality.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div key={index} variants={item} whileHover={{ y: -10 }}>
                  <Card className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-500/20 hover:border-amber-500/50 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all h-full flex flex-col">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 flex items-center justify-center mb-6 shadow-lg shadow-${service.color}-500/30`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-black mb-4 text-white">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="mt-auto space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-amber-900/10 to-orange-900/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
              Get an instant AI-powered cost estimate for your space or contact us for a personalized consultation
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 hover:from-amber-400 hover:via-orange-500 hover:to-rose-500 text-white font-black px-12 py-8 text-xl rounded-2xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/50 transition-all group"
                asChild
              >
                <Link href="/calculator/1bhk">
                  <Sparkles className="w-6 h-6 mr-3" />
                  Get Free Estimate
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-500/50 hover:border-amber-400 bg-slate-900/50 hover:bg-slate-800/80 text-amber-400 hover:text-amber-300 font-black px-12 py-8 text-xl rounded-2xl backdrop-blur-xl transition-all group"
                asChild
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
