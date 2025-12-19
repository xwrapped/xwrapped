import { UserProfile, WrappedData } from '@/types/wrapped';
import { getMockPersona, getMockReplyGuy, getMockRank } from './mock-data';
import { calculatePersona } from './persona-calculator';

/**
 * Aggregates all wrapped data for a user.
 * Uses real MBTI analysis via Grok X Search for persona.
 * Still uses mock data for reply guy and rank (to be implemented).
 *
 * @param userProfile - Real user data from Twitter API
 * @param accessToken - Twitter API access token for additional requests
 */
export async function aggregateWrappedData(
  userProfile: UserProfile,
  accessToken: string
): Promise<WrappedData> {
  // Real user data from Twitter API
  const user = userProfile;

  // Calculate persona using Grok X Search (with fallback to mock)
  let persona;
  try {
    console.log(`[Aggregator] Calculating real persona for @${user.username}`);
    persona = await calculatePersona(user.username);
  } catch (error) {
    console.error('[Aggregator] Persona calculation failed, using mock data:', error);
    persona = getMockPersona();
  }

  // TODO: Replace these with real implementations
  const replyGuy = getMockReplyGuy(user.username);
  const rank = getMockRank();

  return {
    user,
    persona,
    replyGuy,
    rank
  };
}
