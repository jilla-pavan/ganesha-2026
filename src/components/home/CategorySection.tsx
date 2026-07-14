import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { Container } from "@/components/common/Primitives";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";

export function CategorySection() {
  return (
    <section className="bg-[#FAF7F2] pb-16 pt-4">
      <Container className="max-w-6xl">
        {/* Clean, High-End Minimalist Header */}
        <div className="flex flex-col gap-2 border-b border-neutral-200 pb-6 text-left">
          <span className="font-devanagari text-xs font-semibold tracking-widest uppercase text-[var(--color-maroon)]">
            पावन संग्रह · SHOP BY COLLECTION
          </span>
          <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--color-brown)] sm:text-3xl">
            Every Form Holds a Sacred Story
          </h2>
        </div>

        {/* Ultra-Premium High-Density Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <RevealOnScroll key={c.id} delay={i * 50}>
              <Link
                to={`/category/${c.id}`}
                className="group relative block w-full overflow-hidden bg-white p-2.5 border border-neutral-200/80 transition-all duration-300 hover:border-[var(--color-gold)]/60 hover:shadow-sm"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-50">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-neutral-900/[0.02] mix-blend-multiply" />
                </div>

                {/* Cultural Typographic Details */}
                <div className="mt-3 px-0.5 pb-1">
                  {c.sanskritName && (
                    <span className="font-devanagari text-[11px] font-medium text-[var(--color-maroon)] block">
                      {c.sanskritName}
                    </span>
                  )}

                  <div className="mt-0.5 flex items-center justify-between gap-2">
                    <h3 className="font-display text-[15px] font-bold text-[var(--color-brown)] tracking-tight">
                      {c.name}
                    </h3>
                    <span className="text-neutral-400 transition-all duration-300 group-hover:text-[var(--color-primary)] group-hover:translate-x-0.5">
                      <ArrowUpRight size={13} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
