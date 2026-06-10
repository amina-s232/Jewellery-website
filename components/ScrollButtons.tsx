"use client";

type ScrollButtonsProps = {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
};

export default function ScrollButtons({
  onPrev,
  onNext,
  className = "",
}: ScrollButtonsProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`} suppressHydrationWarning>
      <button
        type="button"
        onClick={onPrev}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] text-[#EAEAEA] shadow-sm transition hover:bg-[#3A3A3A]"
        aria-label="Scroll left"
        suppressHydrationWarning
      >
        {"\u2190"}
      </button>
      <button
        type="button"
        onClick={onNext}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] text-[#EAEAEA] shadow-sm transition hover:bg-[#3A3A3A]"
        aria-label="Scroll right"
        suppressHydrationWarning
      >
        {"\u2192"}
      </button>
    </div>
  );
}

