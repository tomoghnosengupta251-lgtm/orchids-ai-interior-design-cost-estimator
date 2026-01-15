export interface InteriorOption {
  id: string
  name: string
  baseCost: number
  description: string
}

export interface BaseIncludeItem {
  name: string
  description: string
}

export interface BHKConfig {
  type: "1bhk" | "2bhk" | "3bhk"
  basePrice: number
  sqftRange: string
  baseIncludes: BaseIncludeItem[]
  options: InteriorOption[]
}

export const bhkConfigurations: Record<string, BHKConfig> = {
  "1bhk": {
    type: "1bhk",
    basePrice: 250000,
    sqftRange: "400-600 sq ft",
baseIncludes: [
        { name: "Hall area", description: "Complete living space design with modern aesthetics" },
        { name: "Modular kitchen", description: "Functional kitchen setup with cabinets and countertop" },
        { name: "False ceiling with wiring and lights", description: "Designer ceiling with concealed wiring and ambient lighting" },
        { name: "Bed", description: "Quality bed frame with headboard design" },
        { name: "Wardrobe", description: "Spacious storage wardrobe with shelves and hanging space" },
        { name: "TV unit", description: "Wall-mounted or floor TV console with storage" },
        { name: "Inside paint", description: "Premium interior wall painting with smooth finish" }
      ],
    options: [
      { 
        id: "upgraded-kitchen", 
        name: "Upgraded Kitchen", 
        baseCost: 25000, 
        description: "Premium finishes and additional storage modules for your kitchen" 
      },
      { 
        id: "upgraded-ceiling-floor", 
        name: "Upgraded False Ceiling + Entire Floor", 
        baseCost: 40000, 
        description: "Full apartment premium flooring and designer false ceiling with multiple lighting zones" 
      },
      { 
        id: "full-wall-wardrobe", 
        name: "Full Wall Wardrobe", 
        baseCost: 56000, 
        description: "Massive floor-to-ceiling wardrobe with premium sliding doors and internal organizers" 
      },
      { 
        id: "upgraded-tv-unit", 
        name: "Upgraded TV Unit", 
        baseCost: 25000, 
        description: "Luxury TV console with stone/marble finish panel and hidden cable management" 
      },
      { 
        id: "door-framing-panelling", 
        name: "Door Framing and Panelling", 
        baseCost: 36000, 
        description: "Premium wooden door frames and matching wall panelling for an upscale look" 
      },
    ]
  },
    "2bhk": {
      type: "2bhk",
      basePrice: 450000,
      sqftRange: "700-1000 sq ft",
baseIncludes: [
        { name: "Semi modular kitchen", description: "Ready-to-assemble kitchen with essential cabinets and storage" },
        { name: "Hall area with false ceiling+ with wiring and lights", description: "Elegant living space with designer ceiling and integrated lighting" },
        { name: "2 Hydraulic beds", description: "Space-saving beds with hydraulic lift storage mechanism" },
        { name: "2 wardrobes", description: "Dual wardrobes with ample storage for both bedrooms" },
        { name: "1 tv unit", description: "Modern TV console with cable management and display shelves" },
        { name: "1 mandir unit", description: "Traditional pooja unit with elegant wooden finish" },
        { name: "3 seater sofa with center table", description: "Comfortable sofa set with matching center table" },
        { name: "inside paint", description: "Quality interior painting with smooth elegant finish" }
      ],
        options: [
          { 
            id: "upgraded-modular-kitchen", 
            name: "Upgraded Modular Kitchen", 
            baseCost: 50000, 
            description: "Premium finishes and high-end hardware for your modular kitchen setup" 
          },
            { 
              id: "upgraded-false-ceiling", 
              name: "Upgraded False Celling (Entire Room)", 
              baseCost: 112000, 
              description: "Designer false ceiling covering the entire apartment with premium lighting" 
            },
          { 
            id: "full-wall-wardrobe-dressing", 
            name: "Full Wall Wardrobe with Dressing Unit", 
            baseCost: 112000, 
            description: "Floor-to-ceiling wardrobes integrated with a stylish dressing unit and mirror" 
          },
          { 
            id: "bedroom-tv-unit", 
            name: "Bedroom TV Unit", 
            baseCost: 25000, 
            description: "Custom designed TV console specifically for the master bedroom" 
          },
          { 
            id: "bathroom-upgrade", 
            name: "Bathroom Upgrade", 
            baseCost: 100000, 
            description: "Luxury fixtures, premium tiling, and designer vanity units for both bathrooms" 
          },
          { 
            id: "dining-beautification", 
            name: "Beautification of Dining Area", 
            baseCost: 50000, 
            description: "Elegant wall treatments, lighting, and custom furniture for your dining space" 
          },
          { 
            id: "door-framing-panelling-2bhk", 
            name: "Door Framing and Panelling", 
            baseCost: 36000, 
            description: "Premium wooden door frames and matching wall panelling for an upscale look" 
          },
        ]
      },
  "3bhk": {
    type: "3bhk",
    basePrice: 600000,
    sqftRange: "1100-1500 sq ft",
baseIncludes: [
        { name: "Semi modular kitchen", description: "Ready-to-assemble kitchen with essential cabinets and storage" },
        { name: "Hall area with false ceiling+ with wiring and lights", description: "Elegant living space with designer ceiling and integrated lighting" },
        { name: "2 Hydraulic beds", description: "Space-saving beds with hydraulic lift storage mechanism" },
        { name: "2 wardrobes", description: "Dual wardrobes with ample storage for both bedrooms" },
        { name: "1 tv unit", description: "Modern TV console with cable management and display shelves" },
        { name: "1 mandir unit", description: "Traditional pooja unit with elegant wooden finish" },
        { name: "3 seater sofa with center table", description: "Comfortable sofa set with matching center table" },
        { name: "inside paint", description: "Quality interior painting with smooth elegant finish" },
        { name: "Study Room", description: "Study table & bookshelves" }
      ],
    options: [
      { id: "modular-kitchen", name: "Modular Kitchen", baseCost: 150000, description: "Complete kitchen with cabinets & appliances" },
      { id: "false-ceiling", name: "False Ceiling", baseCost: 80000, description: "Designer false ceiling with lighting" },
      { id: "wardrobe", name: "Wardrobes (3 Rooms)", baseCost: 120000, description: "Custom built-in wardrobes" },
      { id: "tv-unit", name: "TV Unit", baseCost: 50000, description: "Modern TV unit with storage" },
      { id: "lighting", name: "Premium Lighting", baseCost: 50000, description: "LED lights with smart controls" },
      { id: "flooring", name: "Premium Flooring", baseCost: 130000, description: "Vitrified tiles or wooden flooring" },
      { id: "bathroom", name: "Bathroom Upgrade (3)", baseCost: 105000, description: "Premium fixtures & fittings" },
      { id: "door-panelling", name: "Door Panelling", baseCost: 36000, description: "Premium wooden door panelling for an upscale look" },
      { id: "pooja-room", name: "Pooja Room", baseCost: 35000, description: "Custom pooja unit design" },
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
  const config = bhkConfigurations[bhkType]
  if (!config) return []

  if (bhkType === "1bhk") {
    if (!selectedOptions.includes("upgraded-kitchen")) {
      recommendations.push("Upgrade your kitchen for a more premium look and feel")
    }
    if (!selectedOptions.includes("upgraded-ceiling-floor")) {
      recommendations.push("Premium flooring can significantly increase your home's resale value")
    }
    } else if (bhkType === "2bhk") {
      if (!selectedOptions.includes("upgraded-modular-kitchen")) {
        recommendations.push("Consider upgrading to a Modular Kitchen for better functionality and aesthetics")
      }
    } else {
      if (!selectedOptions.includes("modular-kitchen")) {
        recommendations.push("Consider adding a Modular Kitchen for better functionality and aesthetics")
      }
    }

  if (selectedOptions.length === 0) {
    recommendations.push("Our AI suggests exploring the premium upgrade options for a luxury finish")
  }

  return recommendations
}
