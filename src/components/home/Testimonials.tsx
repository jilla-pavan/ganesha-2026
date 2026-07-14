import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/content";
import { Container } from "@/components/common/Primitives";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import collectionBg from "../../assets/ganesha-lorry.png";

export function Testimonials() {
  return (
    <section className="relative w-full bg-[#FAF7F2] py-16 overflow-hidden">
      {/* Full-Bleed Textured Backdrop Asset Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src={collectionBg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-center opacity-[0.35] md:opacity-[0.40]"
        />
        {/* Calibrated lighting filters protecting text contrast boundaries */}
      </div>

      {/* Injecting raw high-performance CSS loops directly to anchor the zero-jank marquee frame */}
      <style>{`
        @keyframes marqueeLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .infinite-marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: marqueeLoop 45s linear infinite;
        }
        .infinite-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <Container className="max-w-6xl relative z-10">
        <RevealOnScroll>
          <div className="text-left border-b border-neutral-300/80 pb-5 mb-10">
            <span className="text-[11px] font-bold tracking-widest text-[#A33B23] uppercase block mb-1 drop-shadow-[0_1px_2px_rgba(250,247,242,0.9)]">
              Words From Devotees
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#2D1B14] drop-shadow-[0_2px_8px_rgba(250,247,242,0.7)] sm:text-3xl">
              Trusted Across India
            </h2>
          </div>
        </RevealOnScroll>
      </Container>

      {/* Infinite Marquee Viewport — Layered on top of the asset background */}
      <div className="relative w-full overflow-hidden py-2 select-none z-10">
        {/* Animating Infinite Loop Track */}
        <div className="infinite-marquee-track">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="w-[280px] sm:w-[340px] shrink-0 whitespace-normal"
            >
              {/* Premium Minimalist Card with Shadow Adjustments */}
              <div className="flex h-full flex-col justify-between rounded-lg border border-neutral-200 bg-white/95 p-6 shadow-md text-left backdrop-blur-[2px] transition-all duration-300 hover:border-neutral-300 hover:shadow-lg">
                <div>
                  <Quote size={16} className="text-[#D4AF37] opacity-80" />
                  <p className="mt-3 text-[13px] leading-relaxed text-neutral-900 font-semibold">
                    "{t.quote}"
                  </p>
                </div>

                {/* Profile Card Footer Layout */}
                <div className="mt-5 flex items-center gap-3 border-t border-neutral-100 pt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-8 w-8 rounded-full object-cover border border-neutral-200 shadow-sm"
                  />
                  <div className="leading-tight">
                    <p className="text-xs font-bold text-[#2D1B14]">{t.name}</p>
                    <p className="text-[10px] font-medium text-neutral-400 mt-0.5">
                      {t.location}
                    </p>
                  </div>
                  <div className="ml-auto shrink-0 flex gap-0.5 text-[#D4AF37]">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
