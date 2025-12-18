"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, TrendingUp, Shield, Award } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      <section className="relative pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">

              <span className="text-amber-400 font-bold text-sm sm:text-base">✨ Premispanum Interior Design</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight">
              <span className="block text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600 bg-clip-text">
                Design Your
              </span>
              <span className="block text-white mt-2 sm:mt-4">Dream Space</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
              Transform your home with expert interior design and construction services. 
              Get instant AI-powered cost estimates tailored to your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 hover:from-amber-400 hover:via-orange-500 hover:to-rose-500 text-white font-black px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl rounded-2xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/50 transition-all group w-full sm:w-auto"
                asChild>

                <Link href="/services">
                  Explore Services
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-500/50 hover:border-amber-400 bg-slate-900/50 hover:bg-slate-800/80 text-amber-400 hover:text-amber-300 font-black px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl rounded-2xl backdrop-blur-xl transition-all w-full sm:w-auto"
                asChild>

                <Link href="/calculator/1bhk">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Get Free Estimate
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16 md:mb-20">

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Why Choose <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">Us</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-2">
              Experience excellence in every detail with our premium services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}>

              <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-500/20 hover:border-amber-500/50 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-amber-500/30">
                  <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 sm:mb-4 text-white">AI-Powered Estimates</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Get accurate, instant cost predictions with our intelligent pricing calculator powered by advanced algorithms.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}>

              <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-orange-500/20 hover:border-orange-500/50 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-orange-500/30">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 sm:mb-4 text-white">Quality Guaranteed</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Premium materials and craftsmanship backed by our comprehensive warranty and quality assurance.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="sm:col-span-2 lg:col-span-1">

              <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-rose-500/20 hover:border-rose-500/50 shadow-xl hover:shadow-2xl hover:shadow-rose-500/20 transition-all h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-rose-500/30">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 sm:mb-4 text-white">Expert Designers</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Work with seasoned professionals who bring decades of experience in luxury interior design.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-orange-900/10"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16 md:mb-20">

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Select Your <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">Space Type</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-2">
              Choose your home configuration and get an instant AI-powered cost estimate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}>
              <Link href="/calculator/1bhk">
                <Card className="p-8 sm:p-10 md:p-12 text-center cursor-pointer bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-500/30 hover:border-amber-500 shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all group">
                  <div className="text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 sm:mb-4">BHK</div>
                  <p className="text-amber-400 text-base sm:text-lg font-bold mb-1 sm:mb-2">Perfect for singles & couples</p>
                  <p className="text-slate-500 text-xs sm:text-sm">400-600 sq ft</p>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}>
              <Link href="/calculator/2bhk">
                <Card className="p-8 sm:p-10 md:p-12 text-center cursor-pointer bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-orange-500/30 hover:border-orange-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all group">
                  <div className="text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 sm:mb-4">BHK</div>
                  <p className="text-orange-400 text-base sm:text-lg font-bold mb-1 sm:mb-2">Ideal for small families</p>
                  <p className="text-slate-500 text-xs sm:text-sm">700-1000 sq ft</p>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="sm:col-span-2 lg:col-span-1">
              <Link href="/calculator/3bhk">
                <Card className="p-8 sm:p-10 md:p-12 text-center cursor-pointer bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-rose-500/30 hover:border-rose-500 shadow-xl hover:shadow-2xl hover:shadow-rose-500/30 transition-all group">
                  <div className="text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 sm:mb-4">BHK</div>
                  <p className="text-rose-400 text-base sm:text-lg font-bold mb-1 sm:mb-2">Spacious family homes</p>
                  <p className="text-slate-500 text-xs sm:text-sm">1100-1500 sq ft</p>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-amber-900/10 to-orange-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-10 md:mb-12 px-2">
              Contact us today for a free consultation and transform your space
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 hover:from-amber-400 hover:via-orange-500 hover:to-rose-500 text-white font-black px-8 sm:px-12 md:px-16 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl rounded-2xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/50 transition-all w-full sm:w-auto"
              asChild>

              <Link href="/contact">
                Contact Us Now
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

}