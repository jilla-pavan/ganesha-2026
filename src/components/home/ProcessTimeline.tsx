import { Container } from "@/components/common/Primitives";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { processSteps } from "@/data/content";

// Devanagari numeral translation mapping for premium traditional feel
const devanagariNumerals = ["०१", "०२", "०३", "०४", "०५", "०६"];

export function ProcessTimeline() {
  return (
    <section className="bg-[#FAF7F2] pb-16 pt-6">
      <Container className="max-w-6xl">
        {/* Minimalist Editorial Section Header */}
        <div className="flex flex-col gap-3 border-b border-neutral-200 pb-6 text-left">
          <span className="font-devanagari text-xs font-semibold tracking-widest uppercase text-[var(--color-maroon)]">
            निर्माण प्रक्रिया · THE CREATION PROCESS
          </span>
          <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--color-brown)] sm:text-3xl">
            From Clay & Medium to Devotion
          </h2>
        </div>

        {/* Minimal Typographic Timeline Grid */}
        <div className="relative mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Subtle Linear Horizontal Track Line (Desktop Only) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-3 hidden h-[1px] bg-neutral-200/80 lg:block"
          />

          {processSteps.map((s, i) => (
            <RevealOnScroll key={s.id || s.title} delay={i * 40}>
              <div className="group relative flex flex-col text-left">
                {/* Step Node Indicator Line & Traditional Numeral */}
                <div className="flex items-center justify-between border-b border-neutral-200/60 pb-2 lg:border-none lg:pb-0">
                  <span className="font-devanagari text-base font-bold text-[var(--color-maroon)] bg-[#FAF7F2] pr-4 z-10 relative">
                    {devanagariNumerals[i] || String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Micro Accent Dot for Desktop Flow Timeline */}
                  <div className="hidden lg:block absolute top-[11px] left-0 h-2 w-2 rounded-full border border-[var(--color-gold)] bg-[#FAF7F2] z-20 group-hover:bg-[var(--color-primary)] transition-colors duration-300" />
                </div>

                {/* Text Blueprint */}
                <h3 className="font-display mt-4 text-[16px] font-bold tracking-tight text-[var(--color-brown)] group-hover:text-[var(--color-primary)] transition-colors duration-200">
                  {s.title}
                </h3>

                <p className="mt-2 text-[13px] leading-relaxed text-neutral-600 font-medium">
                  {s.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
