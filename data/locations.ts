// data/locations.ts - Auto-generated
export const LOCATIONS: Record<string, string[]> = {
  'Central London': ["Bloomsbury", "Covent Garden", "Fitzrovia", "Holborn", "King's Cross", "Marylebone", "Mayfair", "Paddington", "Regent's Park", "Soho", "St Pancras", "West End", "Westminster", "Whitehall", "Victoria"],
  'North London': ["Camden", "Hampstead", "Highgate", "Islington", "Kentish Town", "Muswell Hill", "Primrose Hill", "Angel", "Barnsbury", "Crouch End", "Finsbury Park", "Holloway", "Tufnell Park", "Archway", "Gospel Oak"],
  'South London': ["Clapham", "Brixton", "Dulwich", "Greenwich", "Peckham", "Southwark", "Bermondsey", "Camberwell", "Elephant and Castle", "London Bridge", "Rotherhithe", "Streatham", "Tooting", "Balham", "Battersea"],
  'East London': ["Canary Wharf", "Bethnal Green", "Hackney", "Shoreditch", "Whitechapel", "Bow", "Stratford", "Limehouse", "Mile End", "Poplar", "Stepney", "Tower Hamlets", "Wapping", "Docklands", "Leyton"],
  'West London': ["Kensington", "Chelsea", "Notting Hill", "Hammersmith", "Fulham", "Earl's Court", "South Kensington", "Knightsbridge", "Belgravia", "Pimlico", "Bayswater", "Hyde Park", "Holland Park", "Shepherd's Bush", "White City"]
};

export function getCityBySlug(slug: string): string | undefined {
  const all = Object.values(LOCATIONS).flat();
  return all.find(city => toSlug(city) === slug);
}

export function toSlug(city: string): string {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
