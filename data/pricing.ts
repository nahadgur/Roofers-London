// data/pricing.ts - Auto-generated
export interface PricingTier {
  treatment: string; slug: string; priceFrom: number; priceTo: number;
  typicalDuration: string; alignerSets: string; description: string;
}

export const pricingTiers: PricingTier[] = [
  {
    "treatment": "Complete Roof Replacement",
    "slug": "roof-replacement",
    "priceFrom": 8500,
    "priceTo": 25000,
    "typicalDuration": "3 to 7 days",
    "alignerSets": "All materials, scaffolding, waste removal, weatherproofing",
    "description": "Prices vary significantly based on property type and location within London. Victorian terraces in conservation areas require premium materials like Welsh slate, while listed buildings need specialist heritage tiles. Zone 1 properties cost 20-30% more due to access restrictions and congestion charges."
  },
  {
    "treatment": "Flat Roof Installation",
    "slug": "flat-roofing",
    "priceFrom": 2200,
    "priceTo": 8500,
    "typicalDuration": "1 to 3 days",
    "alignerSets": "EPDM or TPO membrane, insulation, drainage, waterproofing",
    "description": "Costs depend on roof size, membrane type, and access complexity. Modern apartment blocks in areas like Canary Wharf often require high-specification systems, while Victorian extension flat roofs may use traditional built-up felt. Drainage modifications and insulation upgrades affect final pricing."
  },
  {
    "treatment": "Emergency Roof Repairs",
    "slug": "roof-repair",
    "priceFrom": 180,
    "priceTo": 1200,
    "typicalDuration": "Same day to 2 days",
    "alignerSets": "Materials, temporary weatherproofing, emergency call-out",
    "description": "Emergency rates apply for same-day service, with additional charges for evening and weekend calls. Central London properties face higher costs due to congestion charges and parking restrictions. Storm damage repairs may require temporary scaffolding, increasing overall costs significantly."
  },
  {
    "treatment": "Fascias, Soffits and Guttering",
    "slug": "fascias-soffits-guttering",
    "priceFrom": 1200,
    "priceTo": 4500,
    "typicalDuration": "2 to 4 days",
    "alignerSets": "All materials, downpipes, brackets, old system removal",
    "description": "Material choice significantly affects pricing, with cast iron systems for conservation areas costing 40-60% more than uPVC. Georgian and Victorian properties often require custom-made components. Access equipment costs are higher in narrow London streets with parking restrictions."
  },
  {
    "treatment": "Chimney Stack Repairs",
    "slug": "chimney-repair",
    "priceFrom": 650,
    "priceTo": 3500,
    "typicalDuration": "1 to 4 days",
    "alignerSets": "Repointing, flashing renewal, pot replacement, scaffolding",
    "description": "Costs increase significantly with height and access difficulty typical of London terraces. Listed buildings require lime mortar and specialist bricks, adding 30-50% to standard rates. Lead work repairs command premium pricing due to material costs and specialist skills required."
  },
  {
    "treatment": "Roof Cleaning and Coating",
    "slug": "roof-cleaning-coating",
    "priceFrom": 450,
    "priceTo": 1800,
    "typicalDuration": "1 to 2 days",
    "alignerSets": "Pressure washing, moss treatment, protective coating application",
    "description": "Pricing varies with roof size and contamination level from London's urban environment. Conservation areas may require gentler cleaning methods, increasing labour costs. Protective coatings add significant value but may not be suitable for listed buildings requiring traditional uncoated finishes."
  }
];

export const financeInfo = {
  available: true,
  interestFree: true,
  monthlyFrom: 99,
  spreadOver: '6 to 36 months',
  description: '0% finance available through selected installers. Subject to status.',
};

export function getPricingForService(serviceId: string): PricingTier[] {
  return pricingTiers.filter(p => p.slug === serviceId);
}
