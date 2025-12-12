interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

export default function NavigationButtons({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext
}: NavigationButtonsProps) {
  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-between px-8">
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className="px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-black dark:text-white font-medium"
      >
        Previous
      </button>
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-black dark:text-white font-medium"
      >
        Next
      </button>
    </div>
  );
}
