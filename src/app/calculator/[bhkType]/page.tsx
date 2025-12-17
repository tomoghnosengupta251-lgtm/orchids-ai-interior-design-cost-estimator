"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Sparkles, IndianRupee, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
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
    setSelectedOptions(prev =>
      prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    )
  }

  const handleGetEstimate = () => {
    setShowResult(true)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-2xl z-50 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-all hover:scale-105 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold">Back to Home</span>
          </Link>
          <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-5 py-2.5 text-sm font-bold shadow-lg shadow-amber-500/50">
            {config.type.toUpperCase()} - {config.sqftRange}
          </Badge>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600 bg-clip-text text-transparent mb-4 animate-gradient bg-[length:200%_auto]">
                Customize Your {config.type.toUpperCase()}
              </h1>
            </motion.div>
            <p className="text-xl text-slate-300 font-medium">
              Select the features you want and get an instant AI-powered cost estimate
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-xl border-2 border-amber-500/20 shadow-2xl shadow-amber-500/10">
                <h2 className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-4 flex items-center gap-3">
                  <Sparkles className="w-7 h-7 text-yellow-400 animate-pulse" />
                  Select Features
                </h2>
                <p className="text-cyan-200 mb-6 font-medium">
                  Choose the interior features you want. Leave unchecked for basic package.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {config.options.map((option, index) => (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <label className="flex items-start gap-3 p-5 rounded-xl border-2 border-cyan-500/30 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all cursor-pointer group">
                      <Checkbox
                        checked={selectedOptions.includes(option.id)}
                        onCheckedChange={() => handleOptionToggle(option.id)}
                        className="border-amber-400 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                      />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-cyan-100 group-hover:text-cyan-50 transition-colors">{option.name}</span>
                            <span className="text-sm font-black text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
                              +{formatCurrency(option.baseCost)}
                            </span>
                          </div>
                          <p className="text-sm text-cyan-300/80">{option.description}</p>
                        </div>
                      </label>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {recommendations.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card className="p-6 bg-gradient-to-br from-emerald-900/70 via-teal-900/50 to-cyan-900/70 border-2 border-emerald-500/40 shadow-xl shadow-emerald-500/20 backdrop-blur-xl">
                    <h3 className="text-xl font-black text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text mb-4 flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
                      AI Recommendations
                    </h3>
                    <ul className="space-y-3">
                      {recommendations.map((rec, index) => (
                        <motion.li 
                          key={index} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-sm text-emerald-100 flex items-start gap-3 p-3 rounded-lg bg-emerald-950/30"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">{rec}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-gradient-to-br from-fuchsia-900/80 via-pink-900/60 to-purple-900/80 border-2 border-fuchsia-500/40 shadow-2xl shadow-fuchsia-500/30 backdrop-blur-xl">
                  <h3 className="text-2xl font-black text-transparent bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text mb-6">Cost Breakdown</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-fuchsia-100 p-3 rounded-lg bg-fuchsia-950/40">
                      <span className="font-bold">Base Package</span>
                      <span className="font-black">{formatCurrency(config.basePrice)}</span>
                    </div>
                    {selectedOptions.map(optionId => {
                      const option = config.options.find(opt => opt.id === optionId)
                      if (!option) return null
                      return (
                        <div key={optionId} className="flex justify-between text-pink-200 text-sm p-2 rounded-lg bg-pink-950/30">
                          <span>{option.name}</span>
                          <span className="font-bold text-yellow-400">+{formatCurrency(option.baseCost)}</span>
                        </div>
                      )
                    })}
                    {selectedOptions.length > 0 && (
                      <div className="flex justify-between text-purple-200 text-sm p-2 rounded-lg bg-purple-950/30">
                        <span>AI Design Optimization</span>
                        <span className="font-bold text-cyan-400">+{(selectedOptions.length * 2)}%</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t-2 border-fuchsia-500/50 pt-6 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-black text-fuchsia-100">Estimated Total</span>
                      <div className="text-right">
                        <div className="text-4xl font-black text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text flex items-center animate-pulse">
                          <IndianRupee className="w-8 h-8" />
                          {estimatedCost.toLocaleString("en-IN")}
                        </div>
                        <p className="text-xs text-fuchsia-300 mt-2 font-semibold">AI-Powered Estimate</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleGetEstimate}
                    className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-black py-7 text-lg rounded-xl shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/70 transition-all hover:scale-105"
                  >
                    <Sparkles className="w-6 h-6 mr-2 animate-pulse" />
                    Get Final Estimate
                  </Button>
                </Card>

                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <Card className="p-6 bg-gradient-to-br from-emerald-900/90 via-teal-900/80 to-green-900/90 border-2 border-emerald-400/50 shadow-2xl shadow-emerald-500/40 backdrop-blur-xl">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      >
                        <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4 mx-auto drop-shadow-lg" />
                      </motion.div>
                      <h3 className="text-2xl font-black text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-center mb-4">
                        Your Estimate is Ready!
                      </h3>
                      <p className="text-center text-emerald-100 mb-5 font-semibold">
                        For {config.type.toUpperCase()} with {selectedOptions.length} premium features
                      </p>
                      <div className="bg-gradient-to-br from-emerald-950/60 to-teal-950/60 rounded-2xl p-6 text-center mb-5 border border-emerald-500/30">
                        <div className="text-5xl font-black text-transparent bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 bg-clip-text flex items-center justify-center animate-pulse">
                          <IndianRupee className="w-10 h-10" />
                          {estimatedCost.toLocaleString("en-IN")}
                        </div>
                      </div>
                      <p className="text-sm text-emerald-200 text-center mb-5 px-2">
                        This is an approximate estimate. Final cost may vary based on materials and site conditions.
                      </p>
                      <Button
                        className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 text-white font-black py-6 text-lg rounded-xl shadow-lg shadow-emerald-500/50 hover:shadow-emerald-400/70 transition-all hover:scale-105"
                        asChild
                      >
                        <a href="tel:09007307197">
                          Call Now: 090073 07197
                        </a>
                      </Button>
                    </Card>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-6 bg-gradient-to-br from-violet-950 via-fuchsia-950 to-purple-950 text-white border-t-2 border-fuchsia-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 bg-clip-text">Ready to Start?</h2>
          <p className="text-xl text-fuchsia-200 mb-8 font-semibold">
            Contact us today to discuss your project and get a detailed quote
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-lg py-7 px-8 rounded-xl shadow-2xl shadow-cyan-500/50 hover:scale-105 transition-all"
              asChild
            >
              <a href="tel:09007307197">
                Call: 090073 07197
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-black text-lg py-7 px-8 rounded-xl shadow-2xl shadow-fuchsia-500/50 hover:scale-105 transition-all"
              asChild
            >
              <Link href="/">
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
