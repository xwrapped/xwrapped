/**
 * MBTI Type Data based on 16personalities.com
 *
 * 16 personality types grouped into 4 categories:
 * - Analysts: Strategic thinkers who value logic and reason
 * - Diplomats: Empathetic idealists who value harmony and cooperation
 * - Sentinels: Practical organizers who value stability and order
 * - Explorers: Spontaneous innovators who value freedom and flexibility
 */

export interface MBTITypeData {
  code: string;
  category: string;
  name: string;
  description: string;
  traits: string[];
}

export const MBTI_TYPES: Record<string, MBTITypeData> = {
  // Analysts
  INTJ: {
    code: 'INTJ',
    category: 'Analysts',
    name: 'The Architect',
    description: 'Imaginative and strategic thinkers, with a plan for everything.',
    traits: ['Strategic', 'Innovative', 'Independent', 'Determined']
  },
  INTP: {
    code: 'INTP',
    category: 'Analysts',
    name: 'The Logician',
    description: 'Innovative inventors with an unquenchable thirst for knowledge.',
    traits: ['Analytical', 'Curious', 'Objective', 'Abstract']
  },
  ENTJ: {
    code: 'ENTJ',
    category: 'Analysts',
    name: 'The Commander',
    description: 'Bold, imaginative and strong-willed leaders, always finding a way.',
    traits: ['Confident', 'Strategic', 'Charismatic', 'Efficient']
  },
  ENTP: {
    code: 'ENTP',
    category: 'Analysts',
    name: 'The Debater',
    description: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
    traits: ['Quick-witted', 'Knowledgeable', 'Original', 'Outspoken']
  },

  // Diplomats
  INFJ: {
    code: 'INFJ',
    category: 'Diplomats',
    name: 'The Advocate',
    description: 'Quiet and mystical, yet very inspiring and tireless idealists.',
    traits: ['Insightful', 'Principled', 'Passionate', 'Altruistic']
  },
  INFP: {
    code: 'INFP',
    category: 'Diplomats',
    name: 'The Mediator',
    description: 'Poetic, kind and altruistic people, always eager to help a good cause.',
    traits: ['Idealistic', 'Empathetic', 'Creative', 'Open-minded']
  },
  ENFJ: {
    code: 'ENFJ',
    category: 'Diplomats',
    name: 'The Protagonist',
    description: 'Charismatic and inspiring leaders, able to mesmerize their listeners.',
    traits: ['Charismatic', 'Altruistic', 'Natural leader', 'Reliable']
  },
  ENFP: {
    code: 'ENFP',
    category: 'Diplomats',
    name: 'The Campaigner',
    description: 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.',
    traits: ['Enthusiastic', 'Creative', 'Sociable', 'Energetic']
  },

  // Sentinels
  ISTJ: {
    code: 'ISTJ',
    category: 'Sentinels',
    name: 'The Logistician',
    description: 'Practical and fact-minded individuals, whose reliability cannot be doubted.',
    traits: ['Honest', 'Direct', 'Strong-willed', 'Dutiful']
  },
  ISFJ: {
    code: 'ISFJ',
    category: 'Sentinels',
    name: 'The Defender',
    description: 'Very dedicated and warm protectors, always ready to defend their loved ones.',
    traits: ['Supportive', 'Reliable', 'Patient', 'Observant']
  },
  ESTJ: {
    code: 'ESTJ',
    category: 'Sentinels',
    name: 'The Executive',
    description: 'Excellent administrators, unsurpassed at managing things or people.',
    traits: ['Organized', 'Dedicated', 'Strong-willed', 'Direct']
  },
  ESFJ: {
    code: 'ESFJ',
    category: 'Sentinels',
    name: 'The Consul',
    description: 'Extraordinarily caring, social and popular people, always eager to help.',
    traits: ['Caring', 'Social', 'Loyal', 'Organized']
  },

  // Explorers
  ISTP: {
    code: 'ISTP',
    category: 'Explorers',
    name: 'The Virtuoso',
    description: 'Bold and practical experimenters, masters of all kinds of tools.',
    traits: ['Bold', 'Practical', 'Creative', 'Spontaneous']
  },
  ISFP: {
    code: 'ISFP',
    category: 'Explorers',
    name: 'The Adventurer',
    description: 'Flexible and charming artists, always ready to explore and experience something new.',
    traits: ['Charming', 'Sensitive', 'Curious', 'Artistic']
  },
  ESTP: {
    code: 'ESTP',
    category: 'Explorers',
    name: 'The Entrepreneur',
    description: 'Smart, energetic and very perceptive people, who truly enjoy living on the edge.',
    traits: ['Bold', 'Rational', 'Direct', 'Sociable']
  },
  ESFP: {
    code: 'ESFP',
    category: 'Explorers',
    name: 'The Entertainer',
    description: 'Spontaneous, energetic and enthusiastic people – life is never boring around them.',
    traits: ['Bold', 'Original', 'Aesthetic', 'Spontaneous']
  }
};

export const MBTI_CATEGORIES = {
  Analysts: {
    description: 'Strategic thinkers who value logic and reason',
    color: '#8B5CF6' // purple
  },
  Diplomats: {
    description: 'Empathetic idealists who value harmony and cooperation',
    color: '#10B981' // green
  },
  Sentinels: {
    description: 'Practical organizers who value stability and order',
    color: '#3B82F6' // blue
  },
  Explorers: {
    description: 'Spontaneous innovators who value freedom and flexibility',
    color: '#F59E0B' // amber
  }
};

/**
 * Get MBTI type data from a code (e.g., "INTJ" or "INTJ-A")
 */
export function getMBTIData(code: string): MBTITypeData | null {
  // Extract base type (remove -A or -T variant)
  const baseType = code.split('-')[0].toUpperCase();
  return MBTI_TYPES[baseType] || null;
}

/**
 * Extract variant (A or T) from MBTI code
 */
export function getMBTIVariant(code: string): 'A' | 'T' | undefined {
  const parts = code.split('-');
  if (parts.length === 2 && (parts[1] === 'A' || parts[1] === 'T')) {
    return parts[1] as 'A' | 'T';
  }
  return undefined;
}

/**
 * Validate if a code is a valid MBTI type
 */
export function isValidMBTI(code: string): boolean {
  const baseType = code.split('-')[0].toUpperCase();
  return baseType in MBTI_TYPES;
}
