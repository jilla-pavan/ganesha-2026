import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Primitives";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import collectionBg from "../../assets/artisian-bg.png";

export function ArtisanStory() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] py-16">
      
      {/* Enhanced Visibility Background Layer to Match Global Texture Density */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src={collectionBg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-center opacity-[0.32] mix-blend-multiply md:opacity-[0.38]"
        />
        {/* Fine-tuned linear safety masks protecting copy coordinates */}
        <div className="absolute inset-0 bg-[#FAF7F2]/20 mix-blend-color" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-transparent to-[#FAF7F2]" />
      </div>

      <Container className="relative z-10 max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Asymmetric Fine-Art Frame (Spans 5 Columns) */}
          <div className="lg:col-span-5">
            <RevealOnScroll>
              <div className="relative mx-auto w-full max-w-sm bg-white p-3 shadow-md border border-neutral-200/60 rounded-sm">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
                    alt="Master artisan detailing a Ganesha creation"
                    loading="lazy"
                    className="h-full w-full object-cover grayscale contrast-[1.05] transition-all duration-700 hover:scale-103 hover:grayscale-0"
                  />
                </div>
                
                {/* Fixed Overlay Badge with Premium Core Hex Color */}
                <div className="absolute -bottom-3 -right-3 bg-[#2D1B14] text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-sm">
                  Est. 1986
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: High-Contrast Editorial Content (Spans 7 Columns) */}
          <div className="lg:col-span-7 text-left lg:pl-4">
            <RevealOnScroll delay={60}>
              <span className="font-devanagari text-[11px] font-bold tracking-[0.15em] uppercase text-[#A33B23] drop-shadow-[0_1px_2px_rgba(250,247,242,0.9)]">
                कलाकार गाथा · THE LINAGE STORY
              </span>
              
              <h2 className="font-display mt-2.5 text-2xl font-bold tracking-tight text-[#2D1B14] drop-shadow-[0_1px_4px_rgba(250,247,242,0.8)] sm:text-3xl md:text-4xl leading-[1.1]">
                Three Generations.
                <br />
                One Sacred Studio in Solapur.
              </h2>
              
              <p className="mt-5 text-[14px] leading-relaxed text-neutral-900 font-semibold drop-shadow-[0_2px_10px_rgba(250,247,242,0.95)]">
                SolapurGanesha began with Vishnu Kadam's grandfather, who hand-sculpted temple icons from local riverbeds. Today, that exact lineage persists. Every creation is produced in small, intentional batches—shaped entirely by hand, completely avoiding generic commercial assembly lines.
              </p>
              
              {/* Premium Performance Stats Track */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-neutral-300 pt-5 drop-shadow-[0_1px_4px_rgba(250,247,242,0.8)]">
                <div>
                  <p className="font-display text-2xl font-extrabold text-[#2D1B14]">
                    40+ Years
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mt-0.5">
                    Family Craft Legacy
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-extrabold text-[#2D1B14]">
                    3 Artisans
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mt-0.5">
                    Sculpting Every Order
                  </p>
                </div>
              </div>

              {/* Action Link Button */}
              <div className="mt-6">
                <Link
                  to="/about-artisan"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group inline-flex h-10 items-center justify-center rounded-md px-5 text-xs font-bold tracking-wider uppercase border-neutral-300 bg-white hover:bg-neutral-50 shadow-md gap-1.5 transition-all duration-200 hover:-translate-y-0.5",
                  )}
                >
                  Read Full Story
                  <ArrowUpRight
                    size={13}
                    className="text-neutral-400 transition-transform duration-200 group-hover:text-[#A33B23] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </Container>
    </section>
  );
}