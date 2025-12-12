import { SlideProps } from '@/types/wrapped';

export default function ReplyGuySlide({ data }: SlideProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white dark:bg-black">
      <div className="w-full max-w-md text-center">
        <div className="text-sm text-zinc-500 dark:text-zinc-500 mb-4 uppercase tracking-wider">
          Your Reply Guy
        </div>

        <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
          @{data.replyGuy.username}
        </h2>

        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
          {data.replyGuy.name}
        </p>

        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-8 mb-6">
          <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">
            {data.replyGuy.replyCount}
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            replies this year
          </div>
        </div>

        <p className="text-zinc-500 dark:text-zinc-500">
          You couldn't resist jumping into their tweets
        </p>

        {data.replyGuy.isMock && (
          <div className="text-xs text-zinc-400 dark:text-zinc-600 mt-8">
            (Placeholder data)
          </div>
        )}
      </div>
    </div>
  );
}
