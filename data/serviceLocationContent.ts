// data/serviceLocationContent.ts - TEMPLATE: Replace placeholder content for each site
// Functions receive the city name to generate city-specific content

export const serviceLocationContent: Record<string, {
  intro: (city: string) => string[];
  steps: (city: string) => string[];
  whyPoints: (city: string) => string[];
}> = {
  'electric-sliding': {
    intro: (city) => [
      `Sliding gate projects in ${city} typically start with a physical constraint that rules out swing gates. A short approach, a gradient issue, or an opening width that makes swing leaves impractical. A sliding gate resolves these by travelling along the boundary rather than sweeping through an arc.`,
      `Ground-track and cantilever are the two configurations installed across LOCATION_DISPLAY. Ground-track is standard on level sites. Cantilever systems suspend the gate above the surface for sloped or sensitive surfaces. Your installer confirms which suits the ${city} site at the survey.`,
    ],
    steps: (city) => [
      `Submit your ${city} postcode, approximate opening width, and available boundary space. We identify up to three sliding gate specialists covering ${city}.`,
      `Each installer arranges a free site visit to measure the opening, assess run-back, check gradient, and confirm the right track configuration.`,
      `You receive a written quote covering gate fabrication, track or cantilever foundation, motor, photocells, and any access control.`,
      `If bespoke gates are being fabricated, workshop lead time is typically 2 to 4 weeks from confirmed order.`,
      `On installation day, the track foundation is excavated and poured, and conduit is laid for motor and intercom cabling.`,
      `Track is set and levelled, gate hung and adjusted, motor and rack fitted, and photocells wired to BS EN 12453.`,
      `System commissioned. Travel limits calibrated, remotes programmed, app access configured, manual release demonstrated.`,
    ],
    whyPoints: (city) => [
      `Sliding gate specialists covering ${city} have hands-on experience with the terrain and property types across this part of LOCATION_DISPLAY.`,
      `Every installation commissioned to BS EN 12453 with safety testing documented at handover.`,
      `Free site survey and itemised written quote from each ${city} installer before any commitment.`,
      `FAAC, BFT, CAME, and Nice motor systems stocked with established parts networks for long-term maintenance.`,
    ],
  },
  'electric-swing': {
    intro: (city) => [
      `Swing gates are the most widely installed format on detached properties in ${city}. Paired leaves opening from a central point deliver a visual presence that other formats do not match. The motor technology is mature, the range of materials is broad, and the installer population is substantial.`,
      `Motor type defines the entrance aesthetic. Underground motors, concealed below the post, are the standard specification on premium ${city} properties. Ram-arm motors mount on the rear face and are the practical choice on retrofits where post foundations prevent excavation. The installer assesses which fits your post condition and gate weight at the survey.`,
    ],
    steps: (city) => [
      `Provide your ${city} details with gate type, opening width, and budget. We match you with up to three swing gate specialists.`,
      `Each installer visits, measures the opening, walks the full swing arc, checks pillar condition, and recommends motor type.`,
      `Written quotes cover gate fabrication, post foundations, motor, safety sensors, and access control.`,
      `Where new gates are being fabricated, allow 2 to 5 weeks for manufacture.`,
      `On site, post foundations are set, underground chambers excavated where specified, and conduit installed.`,
      `Gates hung and aligned, motors fitted, photocells positioned for full coverage, all wiring completed.`,
      `System programmed and tested to BS EN 12453. Limits set, devices paired, manual release demonstrated, commissioning record provided.`,
    ],
    whyPoints: (city) => [
      `Swing gate installers covering ${city} understand the property types, driveway geometries, and planning context across this part of LOCATION_DISPLAY.`,
      `Underground and surface motor options with honest guidance on which suits your situation.`,
      `BS EN 12453 commissioning documented on every installation.`,
      `Separate written warranties for gate and automation from every ${city} installer in our network.`,
    ],
  },
  'wooden-gates': {
    intro: (city) => [
      `Hardwood gates are a natural choice for many ${city} properties. Conservation areas, Green Belt, and the stock of period houses across LOCATION_DISPLAY all create contexts where timber is the material that sits most naturally. Where planning officers are involved, hardwood is typically the specification that generates least resistance.`,
      `Fabrication is bespoke for the majority of timber gate projects in ${city}. Iroko is the default for most installations. European oak is chosen where the grain character is the design feature. Accoya, with its 50-year guarantee, is the specification where low maintenance is the firm priority.`,
    ],
    steps: (city) => [
      `Submit your enquiry and we match you with hardwood gate specialists covering ${city} who have bespoke timber experience in this part of LOCATION_DISPLAY.`,
      `Your installer visits, discusses the design brief, shows timber samples, confirms automation needs, and measures the entrance.`,
      `Fabrication drawings produced for approval. No timber ordered until the design is confirmed.`,
      `Gates made in the workshop. Allow 3 to 5 weeks from confirmed order.`,
      `Gates hung on galvanised or stainless ironmongery and the initial treatment coat applied on site.`,
      `Automation fitted and commissioned to BS EN 12453 if included.`,
      `Written maintenance schedule for the specified timber species handed over at completion.`,
    ],
    whyPoints: (city) => [
      `Timber specialists covering ${city} understand the local planning context and advise on the right specification.`,
      `Iroko, European oak, and Accoya all available with clear guidance on which suits your needs.`,
      `Free site survey and approval drawings before any ${city} installer begins work.`,
      `FSC-certified timber available from every fabricator in our network on request.`,
    ],
  },
  'metal-gates': {
    intro: (city) => [
      `Metal gate work in ${city} ranges from bespoke wrought iron entrance treatments on established properties to contemporary aluminium sliding gates on modern builds. The specification decision that separates lasting installations from those needing attention within five years is the surface treatment: hot-dip galvanising before powder coating on every steel and iron gate, without exception.`,
      `For ${city} properties on heavy clay soils, post foundation specification takes on particular importance. Clay swells with winter moisture and shrinks in dry summers, which can move posts and misalign gates. Installers in our ${city} network specify foundation depth and reinforcement for the actual soil type at your property.`,
    ],
    steps: (city) => [
      `Submit your ${city} enquiry and we match you with metal gate fabricators covering your area and material preference.`,
      `Your installer visits, reviews examples, discusses design, material, colour, and automation, and measures the opening.`,
      `CAD drawings produced for approval. 3D renders available on complex projects.`,
      `Gate fabricated, shot-blasted, hot-dip galvanised, and powder-coated. Allow 3 to 6 weeks from drawing sign-off.`,
      `Gate hung on new or existing posts, with foundations assessed and upgraded where needed.`,
      `Automation and access control installed, wired, and fully tested.`,
      `Written handover covers gate warranty, automation warranty, and finish maintenance guidance.`,
    ],
    whyPoints: (city) => [
      `Metal gate specialists covering ${city} specify hot-dip galvanising before powder coating as standard on all steel and iron.`,
      `CAD drawings approved before fabrication starts so you see exactly what is being made.`,
      `Free site survey and design consultation with each ${city} specialist, no commitment until drawings and quote are approved.`,
      `Separate gate and automation warranties provided in writing by every ${city} installer.`,
    ],
  },
  'automated-systems': {
    intro: (city) => [
      `Automation retrofits are among the highest-demand projects for installers covering ${city}. The brief is familiar: manual gates that are sound and suit the property, but the daily inconvenience of manual operation has become unacceptable. The retrofit adds motor and access control without replacing the gates.`,
      `Access control often delivers the most practical value. Video intercom on a smartphone lets you manage the entrance from anywhere. Proximity readers open the gate as the car approaches. For ${city} homeowners with vehicle security concerns, a closed automated gate with recording and auto-close provides a real deterrent layer.`,
    ],
    steps: (city) => [
      `Submit your ${city} enquiry. We match you with automation engineers who carry out retrofits regularly and stock the main motor brands.`,
      `Your installer visits to assess gate weight, hinge condition, post alignment, and foundation depth, then recommends motor type.`,
      `Motor and access control agreed in writing. Any structural work quoted and confirmed before automation equipment is ordered.`,
      `Motors fitted, underground chambers excavated where specified, photocells and safety edges positioned, access control cabling completed.`,
      `System commissioned to BS EN 12453 with force measurement, all access devices programmed and tested.`,
      `Handover includes manual release demo, remote programming, app setup, and written declaration of conformity.`,
    ],
    whyPoints: (city) => [
      `Automation engineers covering ${city} complete a structural assessment before specifying any motor.`,
      `FAAC, BFT, CAME, Nice, and Beninca available with established parts support in LOCATION_DISPLAY.`,
      `BS EN 12453 compliance documented at handover on every ${city} project.`,
      `Video intercom, proximity readers, keypads, and smart home integration available on any ${city} retrofit.`,
    ],
  },
  'gate-repair': {
    intro: (city) => [
      `Repair callouts in ${city} follow predictable patterns. Motor wear from poor lubrication. Board failure from moisture ingress. Photocell drift from frost or impact causing false stops. Hinge wear producing a dropping leaf the motor struggles to move. Most resolve in one visit when the engineer has the right parts.`,
      `Motor brand matters for repair speed. FAAC, BFT, CAME, Nice, and Beninca all maintain UK parts supply for at least a decade after production ends. An engineer covering ${city} who stocks these brands resolves most faults first-visit. An obscure motor creates delays and higher costs. Annual servicing catches developing faults before they cause failures.`,
    ],
    steps: (city) => [
      `Submit your ${city} repair enquiry. We connect you with gate engineers who stock parts for FAAC, BFT, CAME, Nice, and Beninca.`,
      `The engineer runs a structured diagnostic covering motor, board, sensors, drive, hinges, and gate structure.`,
      `Written fault explanation and repair quote provided before any work begins.`,
      `If the fault can be fixed from van stock, the repair is completed immediately and the system tested.`,
      `Where a part must be ordered, the gate is secured manually and a return visit scheduled. Lead times typically 1 to 5 days.`,
      `After repair, all systems tested: motor limits, sensors, battery, and access devices.`,
      `Written service report covering work completed, parts used, and any future recommendations provided.`,
    ],
    whyPoints: (city) => [
      `Engineers covering ${city} target 24 to 48 hour attendance, same-day for gates stuck open.`,
      `Written diagnosis and quote before any work starts on every ${city} callout.`,
      `Van stock for FAAC, BFT, CAME, Nice, and Beninca. Majority of ${city} repairs completed first-visit.`,
      `Annual service contracts available for scheduled maintenance.`,
    ],
  },
};
