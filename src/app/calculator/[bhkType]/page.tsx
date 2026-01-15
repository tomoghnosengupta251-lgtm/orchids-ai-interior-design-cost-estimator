"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle2, IndianRupee, Sparkles, Info } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { bhkConfigurations, calculateCost, getRecommendations } from "@/lib/cost-calculator"

export default function CalculatorPage() {
  const params = useParams()
  const router = useRouter()
  const bhkType = params.bhkType as string

  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [estimatedCost, setEstimatedCost] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [recommendations, setRecommendations] = useState<string[]>([])

  const config = bhkConfigurations[bhkType]

  useEffect(() => {
    if (!config) {
      router.push("/")
      return
    }

    const cost = calculateCost(bhkType, selectedOptions)
    setEstimatedCost(cost)
    setRecommendations(getRecommendations(bhkType, selectedOptions))
  }, [selectedOptions, bhkType, config, router])

  if (!config) {
    return null
  }

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId]
    )
  }

  const handleGetEstimate = () => {
    setShowResult(true)
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl z-50 border-b border-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-foreground hover:opacity-70 transition-all hover:scale-105 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold">Back to Home</span>
          </Link>
            <Badge className="bg-foreground text-background px-5 py-2.5 text-sm font-bold shadow-lg shadow-black/20">
              {config.type.toUpperCase()} - {config.sqftRange}
            </Badge>
          </div>
        </nav>

        <div className="pt-24 pb-12 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-8xl font-bold text-foreground mb-4">
                Customize Your <span className="text-foreground/40">{config.type.toUpperCase()}</span>
              </h1>
              <p className="text-xl text-foreground/70 font-medium max-w-2xl mx-auto">
                Select premium upgrades for your dream home and get an instant AI-powered cost estimate
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    variants={containerVariants} 
                  >
                    <Card className="p-8 bg-background border-2 border-foreground/10 shadow-2xl shadow-black/5 overflow-hidden relative">
                      <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <Sparkles className="w-8 h-8 text-foreground animate-pulse" />
                        Premium Upgrades
                      </h2>

                      <div className="grid md:grid-cols-1 gap-4">
                        {config.options.map((option, index) => (
                          <motion.div
                            key={option.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.01, x: 5 }}
                            className="relative"
                          >
                            <label className="flex items-start gap-4 p-6 rounded-2xl border-2 border-foreground/10 bg-foreground/[0.02] hover:border-foreground/40 hover:bg-foreground/[0.05] transition-all cursor-pointer group">
                              <div className="pt-1">
                                <Checkbox
                                  checked={selectedOptions.includes(option.id)}
                                  onCheckedChange={() => handleOptionToggle(option.id)}
                                  className="w-6 h-6 border-foreground/30 data-[state=checked]:bg-foreground data-[state=checked]:border-foreground"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-xl font-bold text-foreground group-hover:text-foreground transition-colors">
                                    {option.name}
                                  </span>
                                  <span className={`text-lg font-bold text-foreground transition-all duration-700 ${!showResult ? 'blur-sm select-none' : ''}`}>
                                    +{formatCurrency(option.baseCost)}
                                  </span>
                                </div>
                                <p className="text-foreground/60 leading-relaxed font-medium">
                                  {option.description}
                                </p>
                              </div>
                            </label>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Card className="p-8 bg-foreground/5 border-2 border-dashed border-foreground/20 rounded-3xl">
                      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <Info className="w-7 h-7" />
                        Base Package Includes
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {config.baseIncludes.map((item, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            className="flex flex-col gap-1 text-foreground/80 bg-background/50 p-4 rounded-xl border border-foreground/5"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-foreground flex-shrink-0" />
                              <span className="font-bold">{item.name}</span>
                            </div>
                            <p className="text-xs text-foreground/50 pl-5">{item.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card className="p-8 bg-background border-4 border-foreground shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform">
                      <h3 className="text-3xl font-bold text-foreground mb-8 uppercase">
                        Estimate
                      </h3>

                      <div className="space-y-4 mb-8">
                          <div className="flex justify-between items-center text-foreground p-4 rounded-xl bg-foreground/5 border-2 border-foreground/10">
                            <span className="font-bold">Base Package</span>
                            <span className="font-bold text-xl">
                              {!showResult ? (
                                (() => {
                                  const formatted = formatCurrency(config.basePrice);
                                  const firstDigitIndex = formatted.search(/\d/);
                                  if (firstDigitIndex === -1) return formatted;
                                  return (
                                    <>
                                      {formatted.slice(0, firstDigitIndex)}
                                      <span className="blur-[4px] select-none">{formatted[firstDigitIndex]}</span>
                                      {formatted.slice(firstDigitIndex + 1)}
                                    </>
                                  );
                                })()
                              ) : (
                                formatCurrency(config.basePrice)
                              )}
                            </span>
                          </div>
                        
                        <AnimatePresence>
                          {selectedOptions.map((optionId) => {
                            const option = config.options.find((opt) => opt.id === optionId)
                            if (!option) return null
                            return (
                              <motion.div
                                key={optionId}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="flex justify-between items-center text-foreground/80 text-sm p-3 rounded-lg bg-foreground/[0.03] border border-foreground/10"
                              >
                                <span className="font-semibold">{option.name}</span>
                                <span className={`font-bold transition-all duration-700 ${!showResult ? 'blur-sm select-none' : ''}`}>
                                  +{formatCurrency(option.baseCost)}
                                </span>
                              </motion.div>
                            )
                          })}
                        </AnimatePresence>
                        
                        {selectedOptions.length > 0 && (
                          <div className="flex justify-between items-center text-foreground/60 text-xs p-3 rounded-lg bg-foreground/5 border border-foreground/5 italic font-bold">
                            <span>AI Complexity Factor</span>
                            <span>+{selectedOptions.length * 1}%</span>
                          </div>
                        )}
                      </div>

                      <div className="border-t-4 border-foreground pt-8 mb-8">
                        {showResult ? (
                          <div className="flex flex-col gap-2">
                            <span className="text-sm font-bold text-foreground/40 uppercase tracking-widest text-center">Estimated Total</span>
                            <div className="text-6xl font-bold text-foreground flex items-center justify-center">
                              <IndianRupee className="w-10 h-10 stroke-[4]" />
                              {estimatedCost.toLocaleString("en-IN")}
                            </div>
                          </div>
                        ) : (
                          <div className="py-4 text-center">
                            <p className="text-sm font-bold text-foreground/60 animate-pulse">
                              Get Final Estimate to unlock total price & upgrades
                            </p>
                          </div>
                        )}
                      </div>

                      {!showResult ? (
                        <Button
                          onClick={handleGetEstimate}
                          className="w-full bg-foreground hover:bg-foreground/90 text-background font-bold py-8 text-xl rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-95 group"
                        >
                          <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                          Get Final Estimate
                        </Button>
                      ) : (
                        <div className="space-y-4">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-6 bg-foreground text-background rounded-2xl text-center shadow-2xl"
                          >
                            <CheckCircle2 className="w-12 h-12 text-background mb-3 mx-auto" />
                            <h4 className="text-xl font-bold mb-2 uppercase">Estimate Ready</h4>
                            <p className="text-sm font-bold opacity-70">Our experts are standing by to discuss your project</p>
                          </motion.div>
                          <Button
                            className="w-full bg-background hover:bg-foreground hover:text-background border-4 border-foreground text-foreground font-bold py-6 text-xl rounded-2xl transition-all"
                            asChild
                          >
                            <a href="tel:09007307197">Book Consultation</a>
                          </Button>
                        </div>
                      )}
                    </Card>
                  </motion.div>

                  {showResult && recommendations.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Card className="p-6 bg-foreground text-background border-2 border-foreground shadow-xl">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <Sparkles className="w-5 h-5" />
                          AI Designer Notes
                        </h3>
                        <ul className="space-y-3">
                          {recommendations.map((rec, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.7 + (index * 0.1) }}
                              className="text-sm flex items-start gap-2 bg-background/10 p-3 rounded-lg border border-background/20"
                            >
                              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span className="font-medium">{rec}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </Card>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-24 px-6 bg-foreground text-background overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-background rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-background rounded-full blur-[120px]" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-bold mb-8"
            >
              LET&apos;S BUILD YOUR DREAM.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-background/70 mb-12 font-bold"
            >
              Expert craftsmanship meeting innovative AI design.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-background hover:bg-background/90 text-foreground font-bold text-2xl py-10 px-12 rounded-3xl shadow-2xl hover:scale-110 transition-all active:scale-95"
                asChild
              >
                <a href="tel:09007307197">CALL NOW</a>
              </Button>
            </div>
          </div>
        </section>
    </div>
  )
}
