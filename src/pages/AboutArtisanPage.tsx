import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Primitives";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";

export default function AboutArtisanPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen text-left">
      <PageHeader
        eyebrow="Our Story"
        title="Vishnu Kadam & Family, Solapur"
        description="Three generations of hand-modelling Ganesha idols, now shared with families across India."
        crumbs={[{ label: "Home", to: "/" }, { label: "The Artisan" }]}
      />

      {/* Narrative Section */}
      <section className="py-16">
        <Container className="max-w-6xl grid grid-cols-1 gap-12 items-center lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Asymmetric Fine-Art Framed Image (Spans 5 Columns) */}
          <div className="lg:col-span-5">
            <RevealOnScroll>
              <div className="relative mx-auto w-full bg-white p-3 shadow-md border border-neutral-200/60 rounded-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src="https://images.unsplash.com/photo-1569531952825-c603b57e7939?auto=format&fit=crop&q=80&w=900"
                    alt="The traditional Solapur artisan studio floor"
                    loading="lazy"
                    className="h-full w-full object-cover grayscale contrast-[1.05] transition-all duration-700 hover:scale-102 hover:grayscale-0"
                  />
                </div>
                {/* Vintage Timestamp Label */}
                <div className="absolute -bottom-3 -right-3 bg-[#2D1B14] text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-sm">
                  Est. 1986
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Editorial Text Track (Spans 7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-4">
            <RevealOnScroll delay={60}>
              <span className="font-devanagari text-[11px] font-bold tracking-[0.15em] uppercase text-[#A33B23]">
                कलाकार परंपरा · CRAFT LINEAGE
              </span>

              <h2 className="font-display mt-2.5 text-2xl font-bold tracking-tight text-[#2D1B14] sm:text-3xl leading-[1.15]">
                A Legacy Preserved in Raw Clay and Devotion.
              </h2>

              <p className="mt-5 text-[14px] leading-relaxed text-neutral-800 font-medium">
                In the 1980s, Vishnu Kadam's grandfather began shaping Ganesha
                idols for the temple two streets from home. What started as pure
                personal devotion became a shared regional landmark, then a
                multigenerational craft passed down deliberately from father to
                son.
              </p>

              <p className="mt-4 text-[14px] leading-relaxed text-neutral-800 font-medium">
                Today, our studio still occupies the same narrow lane in
                Solapur. Every singular masterpiece we arrange online is shaped
                by the exact same three pairs of hands. There is no commercial
                outsourcing, no automated assembly rows—only rich earth, endless
                patience, and a sacred standard our lineage refuses to dilute.
              </p>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      {/* Modular Process Progression */}
      <ProcessTimeline />
    </div>
  );
}
