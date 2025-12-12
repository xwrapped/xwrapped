import { UserProfile, WrappedData } from '@/types/wrapped';
import { getMockPersona, getMockReplyGuy, getMockRank } from './mock-data';

/**
 * Aggregates all wrapped data for a user.
 * Currently uses mock data for persona, reply guy, and rank.
 *
 * TO REPLACE WITH REAL DATA:
 * 1. Create new calculation functions in this file (e.g., calculatePersona)
 * 2. Replace getMock* calls with real implementations
 * 3. Set isMock: false in returned data
 * 4. Remove mock functions when no longer needed
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

  // TODO: Replace these with real implementations
  const persona = getMockPersona();
  const replyGuy = getMockReplyGuy(user.username);
  const rank = getMockRank();

  return {
    user,
    persona,
    replyGuy,
    rank
  };
}
