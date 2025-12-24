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
      title: "Commercial Services",
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
        <div className="min-h-screen bg-background text-foreground">
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
                    className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 rounded-full bg-secondary/10 border border-secondary/20"
                  >
                    <span className="text-secondary font-bold text-sm sm:text-base">Our Services</span>
                  </motion.div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight">
                    <span className="text-secondary">
                      Premium Design
                    </span>
                    <br />
                    <span className="text-foreground">Services</span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed px-2">
                    From concept to completion, we provide comprehensive interior design and construction services 
                    tailored to transform your vision into reality.
                  </p>
                </motion.div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                >
                  {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                      <motion.div key={index} variants={item} whileHover={{ y: -10 }}>
                        <Card className="p-5 sm:p-6 md:p-8 bg-background border-2 border-secondary/20 hover:border-secondary shadow-xl hover:shadow-2xl hover:shadow-black/5 transition-all h-full flex flex-col">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-secondary flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-black/10">
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-background" />
                          </div>
                          
                          <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 sm:mb-4 text-foreground">{service.title}</h3>
                          <p className="text-foreground/60 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
                          
                          <div className="mt-auto space-y-1.5 sm:space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                                <span className="text-foreground/70 text-xs sm:text-sm">{feature}</span>
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

          <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-foreground text-background">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-background/70 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-2">
                  Get an instant AI-powered cost estimate for your space or contact us for a personalized consultation
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2">
                  <Button
                    size="lg"
                    className="bg-background hover:bg-background/90 text-foreground font-black px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl rounded-2xl shadow-2xl shadow-black/20 transition-all group w-full sm:w-auto"
                    asChild
                  >
                    <Link href="/calculator/1bhk">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                      Get Free Estimate
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-background/20 hover:border-background text-background hover:text-foreground font-black px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl rounded-2xl backdrop-blur-xl transition-all group w-full sm:w-auto"
                    asChild
                  >
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
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
