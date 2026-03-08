// data/nearby-areas.ts - Auto-generated
export const NEARBY_AREAS: Record<string, string[]> = {
  'bloomsbury': ["King's Cross", "Holborn", "Fitzrovia", "Covent Garden", "St Pancras", "Camden"],
  'hampstead': ["Highgate", "Camden", "Primrose Hill", "Belsize Park", "Swiss Cottage", "Kentish Town"],
  'clapham': ["Brixton", "Battersea", "Stockwell", "Tooting", "Balham", "Wandsworth"],
  'canary-wharf': ["Limehouse", "Poplar", "Mile End", "Bow", "Docklands", "Greenwich"],
  'kensington': ["Chelsea", "Earl's Court", "Notting Hill", "South Kensington", "Knightsbridge", "Holland Park"],
  'islington': ["Camden", "Angel", "Holloway", "Finsbury Park", "King's Cross", "Barnsbury"],
  'greenwich': ["Blackheath", "Deptford", "Lewisham", "Canary Wharf", "Rotherhithe", "New Cross"],
  'chelsea': ["Kensington", "Belgravia", "Pimlico", "Fulham", "South Kensington", "Knightsbridge"],
  'hackney': ["Shoreditch", "Bethnal Green", "Dalston", "Stoke Newington", "Hoxton", "Islington"],
  'brixton': ["Clapham", "Streatham", "Camberwell", "Stockwell", "Herne Hill", "Tulse Hill"],
  'notting-hill': ["Bayswater", "Paddington", "Kensington", "Holland Park", "Maida Vale", "Ladbroke Grove"],
  'camden': ["King's Cross", "Kentish Town", "Primrose Hill", "Regent's Park", "Euston", "Hampstead"],
  'shoreditch': ["Hackney", "Bethnal Green", "Hoxton", "Old Street", "Liverpool Street", "Spitalfields"],
  'fulham': ["Chelsea", "Hammersmith", "Putney", "Parsons Green", "Earl's Court", "Battersea"],
  'southwark': ["London Bridge", "Borough", "Bermondsey", "Elephant and Castle", "Waterloo", "Bankside"]
};

export function getNearbyAreas(citySlug: string): string[] {
  return NEARBY_AREAS[citySlug] || [];
}
