import { SlideProps } from '@/types/wrapped';

export default function PersonaSlide({ data }: SlideProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white dark:bg-black">
      <div className="w-full max-w-md text-center">
        <div className="text-sm text-zinc-500 dark:text-zinc-500 mb-4 uppercase tracking-wider">
          Your Persona
        </div>

        <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
          {data.persona.title}
        </h2>

        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
          {data.persona.description}
        </p>

        {data.persona.isMock && (
          <div className="text-xs text-zinc-400 dark:text-zinc-600 mt-8">
            (Placeholder data)
          </div>
        )}
      </div>
    </div>
  );
}
