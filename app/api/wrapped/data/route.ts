import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { aggregateWrappedData } from "@/lib/wrapped/data-aggregator";
import { UserProfile } from "@/types/wrapped";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.accessToken) {
    return NextResponse.json(
      { error: "Not authenticated" },
      { status: 401 }
    );
  }

  try {
    // Fetch user data from Twitter API
    const response = await fetch(
      "https://api.twitter.com/2/users/me?user.fields=public_metrics,profile_image_url",
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("Twitter API error:", error);
      return NextResponse.json(
        { error: "Failed to fetch Twitter data" },
        { status: response.status }
      );
    }

    const twitterData = await response.json();

    // Transform to UserProfile type
    const userProfile: UserProfile = {
      name: twitterData.data.name,
      username: twitterData.data.username,
      profileImageUrl: twitterData.data.profile_image_url,
      metrics: {
        followersCount: twitterData.data.public_metrics.followers_count,
        followingCount: twitterData.data.public_metrics.following_count,
        tweetCount: twitterData.data.public_metrics.tweet_count,
        listedCount: twitterData.data.public_metrics.listed_count,
      }
    };

    // Aggregate with mock data
    const wrappedData = await aggregateWrappedData(
      userProfile,
      session.accessToken
    );

    return NextResponse.json(wrappedData);
  } catch (error) {
    console.error("Error fetching wrapped data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
