import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Primitives";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";

// High-fidelity curated artisan/festival imagery arrays replacing random picsum items
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1569531952825-c603b57e7939?w=600&auto=format&fit=crop&q=80",
    alt: "Artisan studio work floors with clay processing instruments",
  },
  {
    src: "https://images.unsplash.com/photo-1590073844006-33379778ae09?w=600&auto=format&fit=crop&q=80",
    alt: "Meticulous fine hand detailing on heritage art piece",
  },
  {
    src: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=600&auto=format&fit=crop&q=80",
    alt: "Clay sculpting raw form setting stages",
  },
  {
    src: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=600&auto=format&fit=crop&q=80",
    alt: "Organic pigments and powder dyes layout",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    alt: "Master studio artisan focused on creation contours",
  },
  {
    src: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&auto=format&fit=crop&q=80",
    alt: "Traditional home shrine space arrangement",
  },
  {
    src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80",
    alt: "Vibrant regional culture celebration setting",
  },
  {
    src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80",
    alt: "Finished custom heritage collection piece outline",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    alt: "Studio lineage members shaping fresh order batches",
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen text-left">
      <PageHeader
        eyebrow="Visual Journal"
        title="Moments From The Studio & Beyond"
        description="A quiet window into our Solapur home workshop—tracing the steady passage from raw river clay to home devotion."
        crumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />

      <section className="py-12">
        <Container className="max-w-6xl">
          {/* High-End Editorial Floating Multi-Column Masonry Matrix */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryImages.map((img, i) => (
              <RevealOnScroll
                key={i}
                delay={(i % 3) * 40}
                className="mb-5 break-inside-avoid block"
              >
                {/* Museum Profile Framing Block */}
                <div className="relative overflow-hidden rounded-md bg-white border border-neutral-200/70 p-2.5 shadow-sm group">
                  <div className="overflow-hidden rounded-sm bg-neutral-100">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-auto object-cover opacity-95 contrast-[1.02] transition-all duration-700 ease-out group-hover:scale-103 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
