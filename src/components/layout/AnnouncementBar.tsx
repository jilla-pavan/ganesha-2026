import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  // Duplicate the message array to ensure an uninterrupted, seamless infinite loop
  const tickerItems = Array(4).fill(
    <div className="flex items-center gap-8 shrink-0 select-none">
      <span className="font-devanagari tracking-wider opacity-90 text-[13px]">
        श्री गणेशाय नमः
      </span>
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold-soft)]/40" />
      <span className="tracking-wide">
        Ganesh Chaturthi 2026 is on{" "}
        <strong className="font-semibold text-white">14th September</strong>
      </span>
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold-soft)]/40" />
      <span className="tracking-wide">
        Order by{" "}
        <strong className="font-semibold text-white">25th August</strong> for
        guaranteed festival delivery
      </span>
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold-soft)]/40" />
    </div>,
  );

  return (
    <div className="relative z-[60] flex h-10 items-center overflow-hidden bg-[var(--color-maroon)] text-[12.5px] font-medium text-[var(--color-gold-soft)] shadow-sm sm:text-[13px]">
      {/* Ticker Container wrapping the infinitely scrolling track */}
      <div className="flex w-full items-center overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-8 pr-8"
        >
          {tickerItems.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </motion.div>
      </div>

      {/* Premium Sticky Call to Action (Desktop Overlay) */}
      <div className="absolute right-0 top-0 hidden h-full items-center bg-gradient-to-l from-[var(--color-maroon)] via-[var(--color-maroon)]/95 to-transparent pl-12 pr-6 sm:flex">
        <Link
          to="/shop"
          className="group flex items-center gap-1 rounded-full bg-white/10 px-3.5 py-1 text-xs text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[var(--color-maroon)]"
        >
          Shop Now
          <ArrowRight
            size={12}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
}
