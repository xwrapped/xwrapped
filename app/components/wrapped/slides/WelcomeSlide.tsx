import Image from 'next/image';
import { SlideProps } from '@/types/wrapped';

export default function WelcomeSlide({ data }: SlideProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white dark:bg-black">
      <div className="w-full max-w-md text-center">
        {data.user.profileImageUrl && (
          <Image
            src={data.user.profileImageUrl.replace('_normal', '_400x400')}
            alt={data.user.name}
            width={120}
            height={120}
            className="rounded-full mx-auto mb-6 ring-4 ring-zinc-200 dark:ring-zinc-800"
          />
        )}

        <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
          X Wrapped
        </h1>

        <p className="text-2xl text-zinc-600 dark:text-zinc-400 mb-2">
          {data.user.name}
        </p>

        <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-8">
          @{data.user.username}
        </p>

        <div className="text-zinc-400 dark:text-zinc-600 text-sm">
          Your year on X, wrapped up
        </div>
      </div>
    </div>
  );
}
