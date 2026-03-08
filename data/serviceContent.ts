// data/serviceContent.ts - TEMPLATE: Replace placeholder content for each site
// The pipeline generates this file with niche-specific content per service

export const serviceContent: Record<string, {
  intro: string[];
  benefits: { title: string; desc: string }[];
  candidateIntro: string;
  candidates: string[];
  process: { title: string; desc: string }[];
}> = {
  'electric-sliding': {
    intro: [
      'SERVICE_SLIDING_INTRO_1. Describe why sliding gates are relevant in this location, referencing terrain and property types.',
      'SERVICE_SLIDING_INTRO_2. Explain ground-track vs cantilever configurations and when each is used locally.',
      'SERVICE_SLIDING_INTRO_3. Cover the main planning and space constraints for sliding gates in this area.',
    ],
    benefits: [
      { title: 'SERVICE_SLIDING_BENEFIT_1_TITLE', desc: 'SERVICE_SLIDING_BENEFIT_1_DESC' },
      { title: 'SERVICE_SLIDING_BENEFIT_2_TITLE', desc: 'SERVICE_SLIDING_BENEFIT_2_DESC' },
      { title: 'SERVICE_SLIDING_BENEFIT_3_TITLE', desc: 'SERVICE_SLIDING_BENEFIT_3_DESC' },
      { title: 'SERVICE_SLIDING_BENEFIT_4_TITLE', desc: 'SERVICE_SLIDING_BENEFIT_4_DESC' },
    ],
    candidateIntro: 'A sliding gate is probably the right choice for your property if:',
    candidates: [
      'SERVICE_SLIDING_CANDIDATE_1',
      'SERVICE_SLIDING_CANDIDATE_2',
      'SERVICE_SLIDING_CANDIDATE_3',
      'SERVICE_SLIDING_CANDIDATE_4',
      'SERVICE_SLIDING_CANDIDATE_5',
    ],
    process: [
      { title: 'Site Assessment', desc: 'SERVICE_SLIDING_PROCESS_1_DESC' },
      { title: 'Foundation Work', desc: 'SERVICE_SLIDING_PROCESS_2_DESC' },
      { title: 'Gate and Motor Installation', desc: 'SERVICE_SLIDING_PROCESS_3_DESC' },
      { title: 'Commissioning', desc: 'SERVICE_SLIDING_PROCESS_4_DESC' },
    ],
  },
  'electric-swing': {
    intro: [
      'SERVICE_SWING_INTRO_1. Describe why swing gates are popular in this location.',
      'SERVICE_SWING_INTRO_2. Explain motor selection and what the local market expects.',
      'SERVICE_SWING_INTRO_3. Cover arc clearance requirements for local property types.',
    ],
    benefits: [
      { title: 'SERVICE_SWING_BENEFIT_1_TITLE', desc: 'SERVICE_SWING_BENEFIT_1_DESC' },
      { title: 'SERVICE_SWING_BENEFIT_2_TITLE', desc: 'SERVICE_SWING_BENEFIT_2_DESC' },
      { title: 'SERVICE_SWING_BENEFIT_3_TITLE', desc: 'SERVICE_SWING_BENEFIT_3_DESC' },
      { title: 'SERVICE_SWING_BENEFIT_4_TITLE', desc: 'SERVICE_SWING_BENEFIT_4_DESC' },
    ],
    candidateIntro: 'Swing gates work on most residential driveways where the geometry allows:',
    candidates: [
      'SERVICE_SWING_CANDIDATE_1',
      'SERVICE_SWING_CANDIDATE_2',
      'SERVICE_SWING_CANDIDATE_3',
      'SERVICE_SWING_CANDIDATE_4',
      'SERVICE_SWING_CANDIDATE_5',
    ],
    process: [
      { title: 'Survey and Arc Check', desc: 'SERVICE_SWING_PROCESS_1_DESC' },
      { title: 'Foundation and Post Work', desc: 'SERVICE_SWING_PROCESS_2_DESC' },
      { title: 'Hanging and Motor Fitting', desc: 'SERVICE_SWING_PROCESS_3_DESC' },
      { title: 'Programming and Handover', desc: 'SERVICE_SWING_PROCESS_4_DESC' },
    ],
  },
  'wooden-gates': {
    intro: [
      'SERVICE_WOODEN_INTRO_1. Describe where hardwood gates fit in the local property landscape.',
      'SERVICE_WOODEN_INTRO_2. Cover the timber species options and their suitability for local conditions.',
      'SERVICE_WOODEN_INTRO_3. Explain bespoke fabrication and the local market for timber gates.',
    ],
    benefits: [
      { title: 'SERVICE_WOODEN_BENEFIT_1_TITLE', desc: 'SERVICE_WOODEN_BENEFIT_1_DESC' },
      { title: 'SERVICE_WOODEN_BENEFIT_2_TITLE', desc: 'SERVICE_WOODEN_BENEFIT_2_DESC' },
      { title: 'SERVICE_WOODEN_BENEFIT_3_TITLE', desc: 'SERVICE_WOODEN_BENEFIT_3_DESC' },
      { title: 'SERVICE_WOODEN_BENEFIT_4_TITLE', desc: 'SERVICE_WOODEN_BENEFIT_4_DESC' },
    ],
    candidateIntro: 'Hardwood gates are worth specifying if:',
    candidates: [
      'SERVICE_WOODEN_CANDIDATE_1',
      'SERVICE_WOODEN_CANDIDATE_2',
      'SERVICE_WOODEN_CANDIDATE_3',
      'SERVICE_WOODEN_CANDIDATE_4',
      'SERVICE_WOODEN_CANDIDATE_5',
    ],
    process: [
      { title: 'Design and Timber Selection', desc: 'SERVICE_WOODEN_PROCESS_1_DESC' },
      { title: 'Drawing Approval', desc: 'SERVICE_WOODEN_PROCESS_2_DESC' },
      { title: 'Workshop Fabrication', desc: 'SERVICE_WOODEN_PROCESS_3_DESC' },
      { title: 'Installation and Aftercare', desc: 'SERVICE_WOODEN_PROCESS_4_DESC' },
    ],
  },
  'metal-gates': {
    intro: [
      'SERVICE_METAL_INTRO_1. Describe the metal gate market in this location.',
      'SERVICE_METAL_INTRO_2. Explain surface treatment and why galvanising matters.',
      'SERVICE_METAL_INTRO_3. Cover design flexibility and fabrication practices.',
    ],
    benefits: [
      { title: 'SERVICE_METAL_BENEFIT_1_TITLE', desc: 'SERVICE_METAL_BENEFIT_1_DESC' },
      { title: 'SERVICE_METAL_BENEFIT_2_TITLE', desc: 'SERVICE_METAL_BENEFIT_2_DESC' },
      { title: 'SERVICE_METAL_BENEFIT_3_TITLE', desc: 'SERVICE_METAL_BENEFIT_3_DESC' },
      { title: 'SERVICE_METAL_BENEFIT_4_TITLE', desc: 'SERVICE_METAL_BENEFIT_4_DESC' },
    ],
    candidateIntro: 'Metal gates are the right material if:',
    candidates: [
      'SERVICE_METAL_CANDIDATE_1',
      'SERVICE_METAL_CANDIDATE_2',
      'SERVICE_METAL_CANDIDATE_3',
      'SERVICE_METAL_CANDIDATE_4',
      'SERVICE_METAL_CANDIDATE_5',
    ],
    process: [
      { title: 'Design Consultation', desc: 'SERVICE_METAL_PROCESS_1_DESC' },
      { title: 'Fabrication and Treatment', desc: 'SERVICE_METAL_PROCESS_2_DESC' },
      { title: 'Installation', desc: 'SERVICE_METAL_PROCESS_3_DESC' },
      { title: 'Commissioning', desc: 'SERVICE_METAL_PROCESS_4_DESC' },
    ],
  },
  'automated-systems': {
    intro: [
      'SERVICE_AUTO_INTRO_1. Describe the demand for automation retrofits in this location.',
      'SERVICE_AUTO_INTRO_2. Explain motor decision-making for retrofits in the local market.',
      'SERVICE_AUTO_INTRO_3. Cover access control options and their value for local homeowners.',
    ],
    benefits: [
      { title: 'SERVICE_AUTO_BENEFIT_1_TITLE', desc: 'SERVICE_AUTO_BENEFIT_1_DESC' },
      { title: 'SERVICE_AUTO_BENEFIT_2_TITLE', desc: 'SERVICE_AUTO_BENEFIT_2_DESC' },
      { title: 'SERVICE_AUTO_BENEFIT_3_TITLE', desc: 'SERVICE_AUTO_BENEFIT_3_DESC' },
      { title: 'SERVICE_AUTO_BENEFIT_4_TITLE', desc: 'SERVICE_AUTO_BENEFIT_4_DESC' },
    ],
    candidateIntro: 'An automation retrofit is the right project if:',
    candidates: [
      'SERVICE_AUTO_CANDIDATE_1',
      'SERVICE_AUTO_CANDIDATE_2',
      'SERVICE_AUTO_CANDIDATE_3',
      'SERVICE_AUTO_CANDIDATE_4',
      'SERVICE_AUTO_CANDIDATE_5',
    ],
    process: [
      { title: 'Structural Assessment', desc: 'SERVICE_AUTO_PROCESS_1_DESC' },
      { title: 'Motor and Access Control Specification', desc: 'SERVICE_AUTO_PROCESS_2_DESC' },
      { title: 'Installation', desc: 'SERVICE_AUTO_PROCESS_3_DESC' },
      { title: 'Commissioning', desc: 'SERVICE_AUTO_PROCESS_4_DESC' },
    ],
  },
  'gate-repair': {
    intro: [
      'SERVICE_REPAIR_INTRO_1. Describe common gate fault patterns in this location.',
      'SERVICE_REPAIR_INTRO_2. Explain motor brand importance for repair speed.',
      'SERVICE_REPAIR_INTRO_3. Cover the value of annual servicing.',
    ],
    benefits: [
      { title: 'SERVICE_REPAIR_BENEFIT_1_TITLE', desc: 'SERVICE_REPAIR_BENEFIT_1_DESC' },
      { title: 'SERVICE_REPAIR_BENEFIT_2_TITLE', desc: 'SERVICE_REPAIR_BENEFIT_2_DESC' },
      { title: 'SERVICE_REPAIR_BENEFIT_3_TITLE', desc: 'SERVICE_REPAIR_BENEFIT_3_DESC' },
      { title: 'SERVICE_REPAIR_BENEFIT_4_TITLE', desc: 'SERVICE_REPAIR_BENEFIT_4_DESC' },
    ],
    candidateIntro: 'Book a repair or service if:',
    candidates: [
      'SERVICE_REPAIR_CANDIDATE_1',
      'SERVICE_REPAIR_CANDIDATE_2',
      'SERVICE_REPAIR_CANDIDATE_3',
      'SERVICE_REPAIR_CANDIDATE_4',
      'SERVICE_REPAIR_CANDIDATE_5',
    ],
    process: [
      { title: 'Callout and Diagnosis', desc: 'SERVICE_REPAIR_PROCESS_1_DESC' },
      { title: 'Same-Visit Repair', desc: 'SERVICE_REPAIR_PROCESS_2_DESC' },
      { title: 'Parts Order if Needed', desc: 'SERVICE_REPAIR_PROCESS_3_DESC' },
      { title: 'Post-Repair Verification', desc: 'SERVICE_REPAIR_PROCESS_4_DESC' },
    ],
  },
};
