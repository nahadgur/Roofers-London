// data/cityContent.ts - TEMPLATE: Replace placeholder content for each site
// Content templates for city/location pages

export const cityPageContent = {
  introHeading: (cityName: string) => `NICHE_DISPLAY Installation in ${cityName} Requires Local Knowledge`,
  introParagraphs: (cityName: string) => [
    `LOCATION_DISPLAY has a complex planning landscape. PLANNING_CONTEXT_SUMMARY. An installer unfamiliar with the planning position at your ${cityName} postcode risks specifying something that needs consent nobody applied for, or a design the local authority will not accept. Every firm in our network works regularly in LOCATION_DISPLAY and checks the planning position at the site survey before committing to a specification.`,
    `Beyond planning, your installer needs to know the soil conditions under the post positions and how the local terrain affects the type choice. Each installer we introduce visits the property in person, assesses the driveway, confirms any planning considerations, and provides a written quote with full line-by-line detail. You receive up to three quotes from independent specialists and choose whether to proceed entirely on your own terms.`,
  ],
  matchingHeading: (cityName: string) => `What You Get When We Match You in ${cityName}`,
  matchingCards: (cityName: string) => [
    { iconName: 'Star', title: 'Dedicated Specialists Only', desc: `No general builders, no one-off fitters. Every installer we introduce in ${cityName} does this work as their main trade, every week, with a documented project history to prove it.` },
    { iconName: 'Shield', title: 'Documented Warranty Coverage', desc: `Each ${cityName} installer issues separate written warranties for the structure and the automation. If the motor develops a fault in year three, the warranty covers it with no grey area.` },
    { iconName: 'Clock', title: 'Site Survey Within the Week', desc: `Most installers covering ${cityName} can visit within 7 days of your enquiry. Evening and Saturday survey slots are available for homeowners who cannot take time during the working week.` },
    { iconName: 'CheckCircle', title: 'Free Throughout, No Strings', desc: `The matching costs nothing. The surveys cost nothing. The quotes cost nothing. You pay only if you choose to instruct an installer, and that payment goes to them under your direct agreement.` },
  ],
  sidebarCta: (cityName: string) => ({
    heading: `Get Quotes in ${cityName}`,
    description: `Tell us what you need and we connect you with up to 3 screened installers near ${cityName}. Completely free.`,
  }),
  sidebarFinance: (cityName: string) => ({
    heading: 'Interest-Free Finance',
    description: `Spread the cost from CURRENCY_SYMBOLFINANCE_MONTHLY_FROM/month over 6 to 36 months at 0% through most ${cityName} installers. Subject to status and approval.`,
  }),
  bottomCta: (cityName: string) => ({
    heading: `Get Quotes for Your ${cityName} Property`,
    description: `Submit your details in two minutes. We match you with up to three screened LOCATION_DISPLAY installers who will each visit, survey, and provide a written quote at no cost and with no obligation.`,
  }),
  schemaServiceTypes: [
    'SERVICE_TYPE_1',
    'SERVICE_TYPE_2',
    'SERVICE_TYPE_3',
    'SERVICE_TYPE_4',
    'SERVICE_TYPE_5',
    'SERVICE_TYPE_6',
  ],
};
