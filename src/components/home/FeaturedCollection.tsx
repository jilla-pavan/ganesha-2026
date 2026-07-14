import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Container } from "@/components/common/Primitives";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import collectionBg from "../../assets/feature-bg.png";

const filters = ["All Idols", "Eco-Friendly", "Premium Collection"] as const;

export function FeaturedCollection() {
  const [active, setActive] = useState<(typeof filters)[number]>("All Idols");

  const filtered =
    active === "All Idols"
      ? products
      : active === "Eco-Friendly"
        ? products.filter((p) => p.ecoFriendly)
        : products.filter((p) => p.category === "Premium Collection");

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] pb-16 pt-12">
      {/* Fixed Full-Bleed Textured Backdrop Track */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={collectionBg}
          alt="feature bg"
          aria-hidden
          className="h-full w-full object-cover object-center opacity-[0.35] mix-blend-multiply md:opacity-[0.5]"
        />
        {/* Refined gradient mask to protect typography legibility without washing out the image asset */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/80 via-[#FAF7F2]/40 to-[#FAF7F2]" />
      </div>

      <Container className="max-w-6xl relative z-10">
        {/* Asymmetric Split Layout Header Block */}
        <div className="grid grid-cols-1 gap-6 border-b border-neutral-300/80 pb-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="text-left">
            <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--color-brown)] sm:text-3xl md:text-4xl">
              Masterpieces of the Season
            </h2>

            {/* Minimalist Filter Navigation */}
            <div className="mt-5 flex items-center gap-6 overflow-x-auto scrollbar-none">
              {filters.map((f) => {
                const isActive = active === f;
                return (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className="relative pb-2 text-[11px] font-bold uppercase tracking-widest text-neutral-400 transition-colors duration-200 hover:text-[var(--color-brown)] focus:outline-none"
                  >
                    <span
                      className={
                        isActive
                          ? "text-[var(--color-brown)] font-extrabold"
                          : ""
                      }
                    >
                      {f}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeFeaturedFilterDot"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[var(--color-primary)]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clean Text-Link CTA */}
          <Link
            to="/shop"
            className="group flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] self-start lg:mb-2 lg:self-auto"
          >
            Explore Full Catalog
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm border border-neutral-200 text-neutral-700 transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight size={11} strokeWidth={2.5} />
            </span>
          </Link>
        </div>

        {/* Product Card Grid */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.98, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 8 }}
                transition={{ duration: 0.3 }}
              >
                <RevealOnScroll delay={i * 30}>
                  <ProductCard product={p} priority={i < 2} />
                </RevealOnScroll>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
