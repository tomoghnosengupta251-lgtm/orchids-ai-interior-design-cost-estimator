"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

export default function ContactPage() {
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
                  className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 rounded-full bg-foreground/5 border border-foreground/10"
                >
                  <span className="text-foreground font-bold text-sm sm:text-base">Get In Touch</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight">
                  <span className="text-foreground/40">
                    Let's Start Your
                  </span>
                  <br />
                  <span className="text-foreground">Design Journey</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed px-2">
                  Reach out to discuss your project. Our team is here to turn your vision into reality.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="p-5 sm:p-6 md:p-8 bg-background border-2 border-foreground/10 hover:border-foreground/30 shadow-xl hover:shadow-2xl hover:shadow-black/5 transition-all h-full text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-foreground flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-black/10 mx-auto">
                      <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-background" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 text-foreground">Call Us</h3>
                    <a
                      href="tel:09007307197"
                      className="text-lg sm:text-xl md:text-2xl font-black text-foreground hover:opacity-70 transition-all block"
                    >
                      090073 07197
                    </a>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="p-5 sm:p-6 md:p-8 bg-background border-2 border-foreground/10 hover:border-foreground/30 shadow-xl hover:shadow-2xl hover:shadow-black/5 transition-all h-full text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-foreground flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-black/10 mx-auto">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-background" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 text-foreground">Visit Us</h3>
                    <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed">
                      Boral Main Road, Mullick Para<br />
                      Ramchandrapur, Narendrapur<br />
                      Kolkata, Rajpur Sonarpur<br />
                      West Bengal 700103
                    </p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -10 }}
                  className="sm:col-span-2 lg:col-span-1"
                >
                  <Card className="p-5 sm:p-6 md:p-8 bg-background border-2 border-foreground/10 hover:border-foreground/30 shadow-xl hover:shadow-2xl hover:shadow-black/5 transition-all h-full text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-foreground flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-black/10 mx-auto">
                      <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-background" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 text-foreground">Business Hours</h3>
                    <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed">
                      Monday - Saturday<br />
                      9:00 AM - 7:00 PM<br />
                      <span className="text-foreground/40">Sunday: Closed</span>
                    </p>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <Card className="p-5 sm:p-6 md:p-10 bg-background border-2 border-foreground/10 shadow-2xl">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground mb-6 sm:mb-8 text-center">Send Us a Message</h2>
                  
                  <form className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-foreground/70 mb-1.5 sm:mb-2">
                          Your Name
                        </label>
                        <Input
                          placeholder="John Doe"
                          className="bg-foreground/5 border-foreground/10 focus:border-foreground text-foreground placeholder:text-foreground/40 text-sm sm:text-base"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-foreground/70 mb-1.5 sm:mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          placeholder="+91 12345 67890"
                          className="bg-foreground/5 border-foreground/10 focus:border-foreground text-foreground placeholder:text-foreground/40 text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-foreground/70 mb-1.5 sm:mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="bg-foreground/5 border-foreground/10 focus:border-foreground text-foreground placeholder:text-foreground/40 text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-foreground/70 mb-1.5 sm:mb-2">
                        Project Type
                      </label>
                      <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-foreground/5 border-2 border-foreground/10 focus:border-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/5 text-sm sm:text-base">
                        <option value="">Select project type</option>
                        <option value="interior">Interior Design</option>
                        <option value="construction">Full Construction</option>
                        <option value="renovation">Renovation</option>
                        <option value="kitchen">Modular Kitchen</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-foreground/70 mb-1.5 sm:mb-2">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="bg-foreground/5 border-foreground/10 focus:border-foreground text-foreground placeholder:text-foreground/40 resize-none text-sm sm:text-base"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-foreground hover:bg-foreground/90 text-background font-black py-4 sm:py-5 md:py-6 text-base sm:text-lg rounded-xl shadow-2xl shadow-black/10 transition-all"
                    >
                      Send Message
                    </Button>
                  </form>

                  <p className="text-center text-foreground/40 text-xs sm:text-sm mt-6 sm:mt-8">
                    We'll get back to you within 24 hours
                  </p>
                </Card>
              </motion.div>
            </div>
          </section>

          <Footer />
        </div>
      )
}
