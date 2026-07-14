import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center py-6 select-none pointer-events-none"
    >
      <div className="flex items-center justify-center gap-4 w-full max-w-md">
        {/* Left Tapered Line Track */}
        <div className="relative flex-1 h-[1px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-gold)]/50 to-[var(--color-gold)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_40%,var(--color-gold)_40%)] bg-[size:6px_1px] opacity-60" />
        </div>

        {/* Center Premium Motif System */}
        <motion.div
          initial={{ opacity: 0, scale: 0.86 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center shrink-0 w-12 h-6"
        >
          <svg
            width="48"
            height="24"
            viewBox="0 0 48 24"
            fill="none"
            className="overflow-visible"
          >
            {/* Outer Intricate Halo Ring */}
            <circle
              cx="24"
              cy="12"
              r="10"
              stroke="var(--color-gold)"
              strokeWidth="0.75"
              strokeDasharray="2 3"
              opacity="0.7"
            />

            {/* Inner Core Accent */}
            <circle
              cx="24"
              cy="12"
              r="6"
              stroke="var(--color-gold)"
              strokeWidth="1"
            />

            {/* Divine Central Bindu Dot */}
            <circle cx="24" cy="12" r="2.5" fill="var(--color-maroon)" />

            {/* Symmetrical Geometric Satellites */}
            <circle
              cx="6"
              cy="12"
              r="1.5"
              fill="var(--color-gold)"
              opacity="0.5"
            />
            <circle cx="12" cy="12" r="2" fill="var(--color-gold)" />
            <circle cx="36" cy="12" r="2" fill="var(--color-gold)" />
            <circle
              cx="42"
              cy="12"
              r="1.5"
              fill="var(--color-gold)"
              opacity="0.5"
            />
          </svg>
        </motion.div>

        {/* Right Tapered Line Track */}
        <div className="relative flex-1 h-[1px]">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[var(--color-gold)]/50 to-[var(--color-gold)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_left,transparent_40%,var(--color-gold)_40%)] bg-[size:6px_1px] opacity-60" />
        </div>
      </div>
    </div>
  );
}
