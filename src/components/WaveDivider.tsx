interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

export function WaveDivider({ className = '', flip = false }: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none py-2 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-4 sm:h-5 text-[#6CCDD5] opacity-75 ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 12 C 150 2 300 22 450 12 C 600 2 750 22 900 12 C 1050 2 1150 18 1200 12"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
