import { SlideProps } from '@/types/wrapped';

export default function PersonaSlide({ data }: SlideProps) {
  const { persona } = data;
  const mbti = persona.mbti;

  // Category color mapping (based on 16personalities.com)
  const categoryColors: Record<string, string> = {
    'Analysts': 'bg-purple-500 text-white',
    'Diplomats': 'bg-green-500 text-white',
    'Sentinels': 'bg-blue-500 text-white',
    'Explorers': 'bg-amber-500 text-white'
  };

  const categoryColor = mbti?.category ? categoryColors[mbti.category] : 'bg-zinc-500 text-white';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white dark:bg-black">
      <div className="w-full max-w-md text-center">
        {/* Category Badge */}
        {mbti?.category && (
          <div className="flex justify-center mb-6">
            <span className={`text-xs font-semibold px-4 py-2 rounded-full ${categoryColor}`}>
              {mbti.category}
            </span>
          </div>
        )}

        {/* MBTI Code - Large and prominent */}
        {mbti?.code && (
          <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4 tracking-wide">
            {mbti.code}
          </div>
        )}

        {/* Persona Title */}
        <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
          {persona.title}
        </h2>

        {/* Description */}
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          {persona.description}
        </p>

        {/* Optional: Trait Bars (if provided) */}
        {mbti?.traits && (
          <div className="mt-8 space-y-4 text-left">
            <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
              Personality Traits
            </div>

            {/* Mind: Introverted vs Extraverted */}
            <div>
              <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-500 mb-1">
                <span>Introverted</span>
                <span>Extraverted</span>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                <div
                  className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                  style={{ width: `${mbti.traits.mind}%` }}
                ></div>
              </div>
            </div>

            {/* Energy: Intuitive vs Observant */}
            <div>
              <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-500 mb-1">
                <span>Intuitive</span>
                <span>Observant</span>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                <div
                  className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                  style={{ width: `${mbti.traits.energy}%` }}
                ></div>
              </div>
            </div>

            {/* Nature: Thinking vs Feeling */}
            <div>
              <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-500 mb-1">
                <span>Thinking</span>
                <span>Feeling</span>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                <div
                  className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                  style={{ width: `${mbti.traits.nature}%` }}
                ></div>
              </div>
            </div>

            {/* Tactics: Judging vs Prospecting */}
            <div>
              <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-500 mb-1">
                <span>Judging</span>
                <span>Prospecting</span>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                <div
                  className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                  style={{ width: `${mbti.traits.tactics}%` }}
                ></div>
              </div>
            </div>

            {/* Identity: Turbulent vs Assertive */}
            <div>
              <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-500 mb-1">
                <span>Turbulent</span>
                <span>Assertive</span>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                <div
                  className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                  style={{ width: `${mbti.traits.identity}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder indicator */}
        {persona.isMock && (
          <div className="text-xs text-zinc-400 dark:text-zinc-600 mt-8">
            (Placeholder data)
          </div>
        )}
      </div>
    </div>
  );
}
