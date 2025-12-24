"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

export default function CalculatorIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">Choose Your Space</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Select 1BHK, 2BHK or 3BHK to customize and get an instant AI-powered estimate.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} whileHover={{ scale: 1.03 }}>
              <Link href="/calculator/1bhk">
                <Card className="p-8 text-center cursor-pointer bg-background border-2 border-secondary/10 hover:border-secondary shadow-xl transition-all">
                  <div className="text-6xl font-black text-secondary mb-2">1</div>
                  <div className="text-3xl font-black text-foreground mb-2">BHK</div>
                  <p className="text-foreground/80 font-bold mb-1">Perfect for singles & couples</p>
                  <p className="text-foreground/40 text-sm mb-4">400-600 sq ft</p>
                  <Button asChild size="sm" className="mt-2">
                    <a className="flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Select 1BHK
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </Card>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} whileHover={{ scale: 1.03 }}>
              <Link href="/calculator/2bhk">
                <Card className="p-8 text-center cursor-pointer bg-background border-2 border-secondary/10 hover:border-secondary shadow-xl transition-all">
                  <div className="text-6xl font-black text-secondary mb-2">2</div>
                  <div className="text-3xl font-black text-foreground mb-2">BHK</div>
                  <p className="text-foreground/80 font-bold mb-1">Ideal for small families</p>
                  <p className="text-foreground/40 text-sm mb-4">700-1000 sq ft</p>
                  <Button asChild size="sm" className="mt-2">
                    <a className="flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Select 2BHK
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </Card>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} whileHover={{ scale: 1.03 }}>
              <Link href="/calculator/3bhk">
                <Card className="p-8 text-center cursor-pointer bg-background border-2 border-secondary/10 hover:border-secondary shadow-xl transition-all">
                  <div className="text-6xl font-black text-secondary mb-2">3</div>
                  <div className="text-3xl font-black text-foreground mb-2">BHK</div>
                  <p className="text-foreground/80 font-bold mb-1">Spacious family homes</p>
                  <p className="text-foreground/40 text-sm mb-4">1100-1500 sq ft</p>
                  <Button asChild size="sm" className="mt-2">
                    <a className="flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Select 3BHK
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
