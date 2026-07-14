import { MessageCircle, ShieldAlert } from "lucide-react";
import { Container } from "@/components/common/Primitives";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";

export function BulkOrderBanner() {
  return (
    <section className="bg-[#FAF7F2] py-12">
      <Container className="max-w-6xl">
        <RevealOnScroll>
          {/* Main Container Core - relative & overflow-hidden are mandatory for background placement */}
          <div className="relative overflow-hidden bg-[#2D1B14] p-8 md:p-12 rounded-lg border border-neutral-800/10">
            {/* 1. Monochromatic Micro-Texture Image Layer */}
            <div
              className="absolute inset-0 z-0 h-full w-full bg-cover bg-center mix-blend-overlay opacity-[0.04] pointer-events-none grayscale contrast-[1.1]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop')`,
              }}
            />

            {/* 2. Content Framework Layer - z-10 ensures it sits cleanly on top of the texture asset */}
            <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-12 text-left">
              {/* Content Text */}
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase block mb-2">
                  Community & Bulk Orders
                </span>
                <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Organizing a Mandal or Society Celebration?
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-neutral-300 font-medium">
                  We partner directly with corporate offices, housing societies,
                  and mandal committees. Enjoy custom sizes, staggered delivery
                  timelines, and exclusive volume pricing tiers for large
                  orders.
                </p>
              </div>

              {/* Action Button & Note */}
              <div className="flex flex-col items-start lg:items-end justify-center">
                <a
                  href="https://wa.me/#"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded bg-[#A33B23] px-6 text-xs font-semibold tracking-wider uppercase text-white shadow-sm hover:bg-[#8E321E] transition-all duration-200 active:scale-98"
                >
                  <MessageCircle size={14} fill="currentColor" />
                  Order on WhatsApp
                </a>

                <span className="mt-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  <ShieldAlert size={12} className="text-[#D4AF37]" /> Logistics
                  slots are limited
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
