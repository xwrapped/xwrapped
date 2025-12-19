/**
 * Persona Calculator
 *
 * Calculates user's persona (MBTI personality type) using Grok X Search API
 */

import { PersonaData } from '@/types/wrapped';
import { getMBTIData, getMBTIVariant, isValidMBTI } from './mbti-data';
import { analyzeMBTIWithXSearch } from '@/server/actions/grok';

/**
 * Calculate persona data for a user using Grok X Search
 *
 * @param username Twitter username (without @)
 * @returns PersonaData with MBTI information
 * @throws Error if calculation fails (caught by aggregator for fallback)
 */
export async function calculatePersona(username: string): Promise<PersonaData> {
  console.log(`[Persona] Starting calculation for user: @${username}`);

  try {
    // Call Grok X Search to analyze tweets and determine MBTI
    const mbtiResult = await analyzeMBTIWithXSearch(username);

    if (!mbtiResult) {
      throw new Error('Grok X Search failed to return MBTI result');
    }

    // Validate MBTI code
    if (!isValidMBTI(mbtiResult.code)) {
      console.error(`[Persona] Invalid MBTI code received: ${mbtiResult.code}`);
      throw new Error(`Invalid MBTI code: ${mbtiResult.code}`);
    }

    // Get static MBTI data
    const mbtiData = getMBTIData(mbtiResult.code);
    if (!mbtiData) {
      throw new Error(`MBTI data not found for code: ${mbtiResult.code}`);
    }

    // Extract variant (A or T)
    const variant = getMBTIVariant(mbtiResult.code);

    // Build PersonaData
    const personaData: PersonaData = {
      title: mbtiData.name,
      description: mbtiData.description,
      iconType: mbtiData.category.toLowerCase(), // e.g., "analysts", "diplomats"
      isMock: false,
      mbti: {
        code: mbtiResult.code,
        type: mbtiResult.type,
        variant: variant,
        category: mbtiData.category
        // Note: traits are optional and not provided by Grok
        // Could be added in future if Grok provides dimensional scores
      }
    };

    console.log(`[Persona] Successfully calculated persona: ${mbtiResult.code} - ${mbtiData.name}`);

    return personaData;

  } catch (error) {
    console.error('[Persona] Error calculating persona:', error);
    // Re-throw error to be caught by aggregator for fallback to mock data
    throw error;
  }
}
