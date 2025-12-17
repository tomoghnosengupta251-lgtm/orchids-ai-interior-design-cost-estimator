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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 text-sm">
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
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent mb-4">
              Customize Your {config.type.toUpperCase()}
            </h1>
            <p className="text-xl text-gray-700">
              Select the features you want and get an instant AI-powered cost estimate
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 bg-white/70 backdrop-blur-sm border-amber-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-amber-600" />
                  Select Features
                </h2>
                <p className="text-gray-600 mb-6">
                  Choose the interior features you want. Leave unchecked for basic package.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {config.options.map((option, index) => (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <label className="flex items-start gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all cursor-pointer">
                        <Checkbox
                          id={option.id}
                          checked={selectedOptions.includes(option.id)}
                          onCheckedChange={() => handleOptionToggle(option.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-gray-900">{option.name}</span>
                            <span className="text-sm font-bold text-amber-600">
                              +{formatCurrency(option.baseCost)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{option.description}</p>
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
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                      AI Recommendations
                    </h3>
                    <ul className="space-y-2">
                      {recommendations.map((rec, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-gradient-to-br from-amber-100 to-orange-100 border-amber-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Breakdown</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-700">
                      <span>Base Package</span>
                      <span className="font-semibold">{formatCurrency(config.basePrice)}</span>
                    </div>
                    {selectedOptions.map(optionId => {
                      const option = config.options.find(opt => opt.id === optionId)
                      if (!option) return null
                      return (
                        <div key={optionId} className="flex justify-between text-gray-700 text-sm">
                          <span>{option.name}</span>
                          <span className="font-semibold">+{formatCurrency(option.baseCost)}</span>
                        </div>
                      )
                    })}
                    {selectedOptions.length > 0 && (
                      <div className="flex justify-between text-gray-700 text-sm">
                        <span>AI Design Optimization</span>
                        <span className="font-semibold">+{(selectedOptions.length * 2)}%</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t-2 border-amber-400 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Estimated Total</span>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-amber-600 flex items-center">
                          <IndianRupee className="w-6 h-6" />
                          {estimatedCost.toLocaleString("en-IN")}
                        </div>
                        <p className="text-xs text-gray-600 mt-1">AI-Powered Estimate</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleGetEstimate}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get Final Estimate
                  </Button>
                </Card>

                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <Card className="p-6 bg-gradient-to-br from-green-100 to-emerald-100 border-green-300">
                      <CheckCircle2 className="w-12 h-12 text-green-600 mb-3 mx-auto" />
                      <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                        Your Estimate is Ready!
                      </h3>
                      <p className="text-center text-gray-700 mb-4">
                        For {config.type.toUpperCase()} with {selectedOptions.length} premium features
                      </p>
                      <div className="bg-white/50 rounded-lg p-4 text-center mb-4">
                        <div className="text-4xl font-bold text-green-600 flex items-center justify-center">
                          <IndianRupee className="w-8 h-8" />
                          {estimatedCost.toLocaleString("en-IN")}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 text-center mb-4">
                        This is an approximate estimate. Final cost may vary based on materials and site conditions.
                      </p>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
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

      <section className="py-12 px-6 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl text-amber-100 mb-6">
            Contact us today to discuss your project and get a detailed quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-amber-900 hover:bg-amber-50"
              asChild
            >
              <a href="tel:09007307197">
                Call: 090073 07197
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
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
