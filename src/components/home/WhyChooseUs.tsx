import { motion } from "framer-motion";
import { Sparkles, Leaf, PackageCheck, Award } from "lucide-react";
import { Container } from "@/components/common/Primitives";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import collectionBg from "../../assets/hero-bg.png";

const reasons = [
  {
    icon: Sparkles,
    title: "Artisan Craftsmanship",
    description:
      "Every idol carries unique hand-finished detailing shaped by dedicated masters—no two pieces are ever truly identical.",
  },
  {
    icon: Leaf,
    title: "Conscious Collection Options",
    description:
      "Offering traditional water-soluble Shadu earth icons alongside meticulously painted premium festive mediums.",
  },
  {
    icon: PackageCheck,
    title: "Museum-Grade Packaging",
    description:
      "Cradled securely in layered custom cloth wrapping and precision protective casing engineered for long-distance transit.",
  },
  {
    icon: Award,
    title: "One Lineage, One Standard",
    description:
      "No commercial outsourcing. Every single masterpiece passes through a single trusted family studio from start to finish.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] pb-16 pt-12">
      {/* Fixed Full-Bleed Enhanced Visibility Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src={collectionBg}
          alt="Artisan studio background texture"
          aria-hidden
          className="h-full w-full object-cover object-center opacity-[0.35] mix-blend-multiply md:opacity-[0.40]"
        />
        {/* Calibrated lighting blend masks ensuring absolute layout legibility */}
        <div className="absolute inset-0 bg-[#FAF7F2]/20 mix-blend-color" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/90 via-[#FAF7F2]/50 to-[#FAF7F2]" />
      </div>

      <Container className="max-w-6xl relative z-10">
        {/* Minimalist Premium Section Header */}
        <div className="flex flex-col gap-3 border-b border-neutral-300/80 pb-6 text-left">
          <span className="font-devanagari text-xs font-semibold tracking-widest uppercase text-[var(--color-maroon)] drop-shadow-[0_1px_2px_rgba(250,247,242,0.9)]">
            गुणवत्ता मानक · CULTURAL STANDARDS
          </span>
          <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--color-brown)] drop-shadow-[0_2px_8px_rgba(250,247,242,0.7)] sm:text-3xl">
            Craftsmanship You Can Verify
          </h2>
        </div>

        {/* Minimalist Grid — Precision Column Alignment Layout */}
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <RevealOnScroll key={r.title} delay={i * 40}>
              <div className="group flex flex-col text-left">
                {/* Micro-Icon System */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex h-10 w-10 items-center justify-center rounded bg-white text-[var(--color-primary)] border border-neutral-200/80 shadow-sm transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:border-[var(--color-primary)]"
                >
                  <r.icon size={18} strokeWidth={2.2} />
                </motion.div>

                {/* Copy Architecture */}
                <h3 className="font-display mt-4 text-[16px] font-bold tracking-tight text-[var(--color-brown)] drop-shadow-[0_1px_4px_rgba(250,247,242,0.8)]">
                  {r.title}
                </h3>

                <p className="mt-2 text-[13px] leading-relaxed text-neutral-800 font-semibold drop-shadow-[0_2px_8px_rgba(250,247,242,0.95)]">
                  {r.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
