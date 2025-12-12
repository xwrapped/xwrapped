import { SlideProps } from '@/types/wrapped';

export default function SummarySlide({ data }: SlideProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white dark:bg-black">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Your Year on X
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Here's what you accomplished
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-6 text-white">
            <div className="text-5xl font-bold mb-2">
              {data.user.metrics.tweetCount.toLocaleString()}
            </div>
            <div className="text-sm opacity-90">Tweets</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6">
              <div className="text-3xl font-bold text-black dark:text-white mb-2">
                {data.user.metrics.followersCount.toLocaleString()}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Followers
              </div>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6">
              <div className="text-3xl font-bold text-black dark:text-white mb-2">
                {data.user.metrics.followingCount.toLocaleString()}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Following
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">
            Thanks for being part of X in 2025
          </p>
        </div>
      </div>
    </div>
  );
}
