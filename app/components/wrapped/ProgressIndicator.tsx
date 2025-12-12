interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export default function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="fixed top-8 right-8 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
      {current}/{total}
    </div>
  );
}
