"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle2, IndianRupee, Sparkles } from "lucide-react"
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
    setSelectedOptions((prev) =>
      prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId]
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-black text-foreground mb-4">
                Customize Your <span className="text-foreground/40">{config.type.toUpperCase()}</span>
              </h1>
              <p className="text-xl text-foreground/70 font-medium">
                Select the features you want and get an instant AI-powered cost estimate
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="p-6 bg-background border-2 border-foreground/10 shadow-2xl shadow-black/5">
                  <h2 className="text-3xl font-black text-foreground mb-4 flex items-center gap-3">
                    <Sparkles className="w-7 h-7 text-foreground" />
                    Select Features
                  </h2>
                  <p className="text-foreground/60 mb-6 font-medium">
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
                        <label className="flex items-start gap-3 p-5 rounded-xl border-2 border-foreground/10 bg-foreground/5 hover:border-foreground/30 hover:shadow-lg hover:shadow-black/5 transition-all cursor-pointer group">
                          <Checkbox
                            checked={selectedOptions.includes(option.id)}
                            onCheckedChange={() => handleOptionToggle(option.id)}
                            className="border-foreground/30 data-[state=checked]:bg-foreground data-[state=checked]:border-foreground"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-foreground group-hover:opacity-80 transition-colors">
                                {option.name}
                              </span>
                              <span className="text-sm font-black text-foreground">
                                +{formatCurrency(option.baseCost)}
                              </span>
                            </div>
                            <p className="text-sm text-foreground/60">{option.description}</p>
                          </div>
                        </label>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                {recommendations.length > 0 && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <Card className="p-6 bg-foreground text-background border-2 border-foreground shadow-xl shadow-black/10">
                      <h3 className="text-xl font-black text-background mb-4 flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-background" />
                        AI Recommendations
                      </h3>
                      <ul className="space-y-3">
                        {recommendations.map((rec, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-sm text-background/90 flex items-start gap-3 p-3 rounded-lg bg-background/10 border border-background/20"
                          >
                            <CheckCircle2 className="w-5 h-5 text-background mt-0.5 flex-shrink-0" />
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
                  <Card className="p-6 bg-background border-2 border-foreground shadow-2xl shadow-black/10">
                    <h3 className="text-2xl font-black text-foreground mb-6">
                      Cost Breakdown
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-foreground p-3 rounded-lg bg-foreground/5 font-bold">
                        <span>Base Package</span>
                        <span className="font-black">{formatCurrency(config.basePrice)}</span>
                      </div>
                      {selectedOptions.map((optionId) => {
                        const option = config.options.find((opt) => opt.id === optionId)
                        if (!option) return null
                        return (
                          <div
                            key={optionId}
                            className="flex justify-between text-foreground/80 text-sm p-2 rounded-lg bg-foreground/5 border border-foreground/5"
                          >
                            <span>{option.name}</span>
                            <span className="font-bold">
                              +{formatCurrency(option.baseCost)}
                            </span>
                          </div>
                        )
                      })}
                      {selectedOptions.length > 0 && (
                        <div className="flex justify-between text-foreground/60 text-sm p-2 rounded-lg bg-foreground/5 border border-foreground/5 italic">
                          <span>AI Design Optimization</span>
                          <span className="font-bold">+{selectedOptions.length * 2}%</span>
                        </div>
                      )}
                    </div>

                    <div className="border-t-2 border-foreground/10 pt-6 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-black text-foreground">Estimated Total</span>
                        <div className="text-right">
                          <div className="text-4xl font-black text-foreground flex items-center">
                            <IndianRupee className="w-8 h-8" />
                            {estimatedCost.toLocaleString("en-IN")}
                          </div>
                          <p className="text-xs text-foreground/40 mt-2 font-semibold">AI-Powered Estimate</p>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={handleGetEstimate}
                      className="w-full bg-foreground hover:bg-foreground/90 text-background font-black py-7 text-lg rounded-xl shadow-2xl shadow-black/20 transition-all hover:scale-105"
                    >
                      <Sparkles className="w-6 h-6 mr-2" />
                      Get Final Estimate
                    </Button>
                  </Card>

                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                    >
                      <Card className="p-6 bg-foreground text-background border-2 border-foreground shadow-2xl shadow-black/20">
                        <CheckCircle2 className="w-16 h-16 text-background mb-4 mx-auto drop-shadow-lg" />
                        <h3 className="text-2xl font-black text-background text-center mb-4">
                          Your Estimate is Ready!
                        </h3>
                        <p className="text-center text-background/80 mb-5 font-semibold">
                          For {config.type.toUpperCase()} with {selectedOptions.length} premium features
                        </p>
                        <div className="bg-background/10 rounded-2xl p-6 text-center mb-5 border border-background/20">
                          <div className="text-5xl font-black text-background flex items-center justify-center">
                            <IndianRupee className="w-10 h-10" />
                            {estimatedCost.toLocaleString("en-IN")}
                          </div>
                        </div>
                        <p className="text-sm text-background/60 text-center mb-5 px-2">
                          This is an approximate estimate. Final cost may vary based on materials and site conditions.
                        </p>
                        <Button
                          className="w-full bg-background hover:bg-background/90 text-foreground font-black py-6 text-lg rounded-xl shadow-lg shadow-black/10 transition-all hover:scale-105"
                          asChild
                        >
                          <a href="tel:09007307197">Call Now: 090073 07197</a>
                        </Button>
                      </Card>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 px-6 bg-foreground text-background border-t-2 border-background/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Start?
            </h2>
            <p className="text-xl text-background/70 mb-8 font-semibold">
              Contact us today to discuss your project and get a detailed quote
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-background hover:bg-background/90 text-foreground font-black text-lg py-7 px-8 rounded-xl shadow-2xl shadow-black/10 hover:scale-105 transition-all"
                asChild
              >
                <a href="tel:09007307197">Call: 090073 07197</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-background/20 hover:border-background text-background hover:text-foreground font-black text-lg py-7 px-8 rounded-xl shadow-2xl shadow-black/10 hover:scale-105 transition-all"
                asChild
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
}
