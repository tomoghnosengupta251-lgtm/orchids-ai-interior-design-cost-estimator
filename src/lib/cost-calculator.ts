export interface InteriorOption {
  id: string
  name: string
  baseCost: number
  description: string
}

export interface BHKConfig {
  type: "1bhk" | "2bhk" | "3bhk"
  basePrice: number
  sqftRange: string
  options: InteriorOption[]
}

export const bhkConfigurations: Record<string, BHKConfig> = {
  "1bhk": {
    type: "1bhk",
    basePrice: 250000,
    sqftRange: "400-600 sq ft",
    options: [
      { id: "modular-kitchen", name: "Modular Kitchen", baseCost: 80000, description: "Complete kitchen with cabinets & appliances" },
      { id: "false-ceiling", name: "False Ceiling", baseCost: 35000, description: "Designer false ceiling with lighting" },
      { id: "wardrobe", name: "Wardrobe", baseCost: 45000, description: "Custom built-in wardrobe" },
      { id: "tv-unit", name: "TV Unit", baseCost: 30000, description: "Modern TV unit with storage" },
      { id: "lighting", name: "Premium Lighting", baseCost: 25000, description: "LED lights with smart controls" },
      { id: "flooring", name: "Premium Flooring", baseCost: 55000, description: "Vitrified tiles or wooden flooring" },
      { id: "bathroom", name: "Bathroom Upgrade", baseCost: 40000, description: "Premium fixtures & fittings" },
      { id: "paint", name: "Premium Paint", baseCost: 20000, description: "Asian Paints Royale or similar" },
    ]
  },
  "2bhk": {
    type: "2bhk",
    basePrice: 400000,
    sqftRange: "700-1000 sq ft",
    options: [
      { id: "modular-kitchen", name: "Modular Kitchen", baseCost: 120000, description: "Complete kitchen with cabinets & appliances" },
      { id: "false-ceiling", name: "False Ceiling", baseCost: 55000, description: "Designer false ceiling with lighting" },
      { id: "wardrobe", name: "Wardrobes (2 Rooms)", baseCost: 85000, description: "Custom built-in wardrobes" },
      { id: "tv-unit", name: "TV Unit", baseCost: 40000, description: "Modern TV unit with storage" },
      { id: "lighting", name: "Premium Lighting", baseCost: 40000, description: "LED lights with smart controls" },
      { id: "flooring", name: "Premium Flooring", baseCost: 90000, description: "Vitrified tiles or wooden flooring" },
      { id: "bathroom", name: "Bathroom Upgrade (2)", baseCost: 75000, description: "Premium fixtures & fittings" },
      { id: "paint", name: "Premium Paint", baseCost: 35000, description: "Asian Paints Royale or similar" },
      { id: "dining", name: "Dining Area", baseCost: 50000, description: "Custom dining furniture" },
      { id: "balcony", name: "Balcony Design", baseCost: 30000, description: "Balcony flooring & furniture" },
    ]
  },
  "3bhk": {
    type: "3bhk",
    basePrice: 600000,
    sqftRange: "1100-1500 sq ft",
    options: [
      { id: "modular-kitchen", name: "Modular Kitchen", baseCost: 150000, description: "Complete kitchen with cabinets & appliances" },
      { id: "false-ceiling", name: "False Ceiling", baseCost: 80000, description: "Designer false ceiling with lighting" },
      { id: "wardrobe", name: "Wardrobes (3 Rooms)", baseCost: 120000, description: "Custom built-in wardrobes" },
      { id: "tv-unit", name: "TV Unit", baseCost: 50000, description: "Modern TV unit with storage" },
      { id: "lighting", name: "Premium Lighting", baseCost: 60000, description: "LED lights with smart controls" },
      { id: "flooring", name: "Premium Flooring", baseCost: 130000, description: "Vitrified tiles or wooden flooring" },
      { id: "bathroom", name: "Bathroom Upgrade (3)", baseCost: 105000, description: "Premium fixtures & fittings" },
      { id: "paint", name: "Premium Paint", baseCost: 50000, description: "Asian Paints Royale or similar" },
      { id: "dining", name: "Dining Area", baseCost: 65000, description: "Custom dining furniture" },
      { id: "balcony", name: "Balcony Design", baseCost: 45000, description: "Balcony flooring & furniture" },
      { id: "pooja-room", name: "Pooja Room", baseCost: 35000, description: "Custom pooja unit design" },
      { id: "study-room", name: "Study Room", baseCost: 55000, description: "Study table & bookshelves" },
    ]
  }
}

export function calculateCost(bhkType: string, selectedOptions: string[]): number {
  const config = bhkConfigurations[bhkType]
  if (!config) return 0

  let totalCost = config.basePrice

  selectedOptions.forEach(optionId => {
    const option = config.options.find(opt => opt.id === optionId)
    if (option) {
      totalCost += option.baseCost
    }
  })

  const designComplexityFactor = selectedOptions.length > 0 
    ? 1 + (selectedOptions.length * 0.02) 
    : 1

  const aiAdjustedCost = Math.round(totalCost * designComplexityFactor)

  return aiAdjustedCost
}

export function getRecommendations(bhkType: string, selectedOptions: string[]): string[] {
  const recommendations: string[] = []

  if (!selectedOptions.includes("modular-kitchen")) {
    recommendations.push("Consider adding a Modular Kitchen for better functionality and aesthetics")
  }

  if (!selectedOptions.includes("false-ceiling")) {
    recommendations.push("False Ceiling can transform your space with ambient lighting")
  }

  if (!selectedOptions.includes("wardrobe")) {
    recommendations.push("Custom Wardrobes maximize storage and maintain a clean look")
  }

  if (selectedOptions.length === 0) {
    recommendations.push("Our AI suggests starting with essential features like Kitchen and Wardrobes")
  }

  return recommendations
}
