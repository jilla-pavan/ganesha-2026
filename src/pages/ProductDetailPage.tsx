import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Heart,
  Truck,
  ShieldCheck,
  Minus,
  Plus,
  MessageCircle,
  Star,
} from "lucide-react";
import { Container } from "@/components/common/Primitives";
import { PageHeader } from "@/components/common/PageHeader";
import { cn } from "@/utils/cn";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { buildWhatsAppLink, productOrderMessage } from "@/utils/whatsapp";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return <Navigate to="/shop" replace />;

  const gallery = [product.image, product.hoverImage].filter(
    Boolean,
  ) as string[];
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-left">
      <PageHeader
        eyebrow={product.category}
        title={product.name}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/shop" },
          { label: product.name },
        ]}
      />

      {/* Primary Detail Container */}
      <section className="py-12">
        <Container className="max-w-6xl grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Gallery Infrastructure */}
          <div>
            <div className="aspect-[4/5] overflow-hidden rounded-md bg-white border border-neutral-200 shadow-sm p-3">
              <img
                src={gallery[activeImg]}
                alt={product.name}
                className="h-full w-full object-cover rounded-sm"
              />
            </div>

            {/* Gallery Thumbnail Strip */}
            <div className="mt-4 flex gap-3">
              {gallery.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "h-16 w-16 overflow-hidden rounded-md bg-white p-1 border-2 transition-all shadow-sm",
                    activeImg === i
                      ? "border-[#A33B23]"
                      : "border-neutral-200 hover:border-neutral-300",
                  )}
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full object-cover rounded-sm"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Sticky Purchase Block */}
          <div className="lg:sticky lg:top-8 lg:self-start flex flex-col">
            {/* Rating Metric */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-[#D4AF37]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    fill={
                      i < Math.floor(product.rating) ? "currentColor" : "none"
                    }
                    stroke="currentColor"
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-neutral-500 tracking-wide mt-0.5">
                {product.rating} · {product.reviewCount || 12} Devotee Reviews
              </span>
            </div>

            {/* Core Titles */}
            <h1 className="font-display mt-3 text-2xl font-bold tracking-tight text-[#2D1B14] sm:text-3xl md:text-4xl leading-tight">
              {product.name}
            </h1>
            <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-neutral-400">
              {product.material} · {product.heightInches}" Traditional Profile
            </p>

            {/* Pricing Panel */}
            <div className="mt-4 flex items-baseline gap-3 border-b border-neutral-200 pb-4">
              <span className="font-display text-2xl font-extrabold text-[#2D1B14]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm font-semibold text-neutral-400 line-through">
                  ₹{product.compareAtPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>

            {/* Narrative Story */}
            {product.story && (
              <p className="mt-4 text-[13px] leading-relaxed text-neutral-700 font-medium">
                {product.story}
              </p>
            )}

            {/* Interaction Action Array */}
            <div className="mt-6 flex flex-wrap sm:flex-nowrap items-center gap-3">
              {/* Counter Assembly */}
              <div className="flex items-center rounded-md border border-neutral-300 bg-white h-11 shadow-sm">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="grid h-full w-10 place-items-center text-neutral-500 hover:text-[#A33B23] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={13} strokeWidth={2.5} />
                </button>
                <span className="w-6 text-center text-xs font-bold text-[#2D1B14]">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="grid h-full w-10 place-items-center text-neutral-500 hover:text-[#A33B23] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={13} strokeWidth={2.5} />
                </button>
              </div>

              {/* Core WhatsApp Route Button */}
              <a
                href={buildWhatsAppLink(
                  productOrderMessage(product.name, product.price, qty),
                )}
                target="_blank"
                rel="noreferrer"
                className="group flex-1 flex h-11 items-center justify-center gap-2 rounded-md bg-[#A33B23] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#8E321E] transition-all duration-200 active:scale-98"
              >
                <MessageCircle size={14} fill="currentColor" />
                Order via WhatsApp — ₹
                {(product.price * qty).toLocaleString("en-IN")}
              </a>

              {/* Wishlist Icon */}
              <button
                aria-label="Add to wishlist"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-neutral-300 bg-white text-neutral-600 shadow-sm transition-colors hover:border-[#A33B23] hover:text-[#A33B23]"
              >
                <Heart size={16} />
              </button>
            </div>

            <p className="mt-3 text-[11px] leading-relaxed text-neutral-400 font-semibold">
              Note: Tapping "Order" transfers your selection to our workshop
              line on WhatsApp. A family member will manually confirm shipping
              arrangements, timelines, and payment completion parameters.
            </p>

            {/* Logistic Verification Anchors */}
            <div className="mt-6 flex flex-col gap-2.5 rounded-md bg-white border border-neutral-200 p-4 shadow-sm">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-700">
                <Truck size={14} className="text-[#A33B23]" />
                Insured transit delivery guaranteed within{" "}
                {product.deliveryDays || 7} working days.
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-700">
                <ShieldCheck size={14} className="text-[#A33B23]" />
                Museum-grade anti-fracture guarantee — immediate replacement
                allocation.
              </div>
            </div>

            {/* Structural Blueprint Data Block */}
            <dl className="mt-6 divide-y divide-neutral-200 border-y border-neutral-200 text-xs">
              {[
                ["Material Composition", product.material],
                ["Dimension Scope", `${product.heightInches} Vertical Inches`],
                ["Collection Registry", product.category],
                ["Studio Origin", "Solapur, Maharashtra (Kadam Studio)"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-2.5">
                  <dt className="font-semibold text-neutral-400 uppercase tracking-wide">
                    {k}
                  </dt>
                  <dd className="font-bold text-[#2D1B14]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Devotee Review Grid Blocks */}
      <section className="border-t border-neutral-200 bg-white/40 py-12">
        <Container className="max-w-6xl">
          <h2 className="font-display text-lg font-bold tracking-tight text-[#2D1B14] border-b border-neutral-200 pb-3 mb-6">
            Verified Devotee Reviews
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-md border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <div className="flex gap-0.5 text-[#D4AF37]">
                  {Array.from({ length: 5 }).map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      size={11}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-neutral-700 font-medium">
                  "Exquisitely detailed crown patterns. Reached Bangalore
                  flawlessly inside secure framework packing structures well
                  before the pooja timeline."
                </p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Verified Buyer · Pune
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Recommended Related Items Showcase */}
      <section className="border-t border-neutral-200 py-12">
        <Container className="max-w-6xl">
          <RevealOnScroll className="flex items-end justify-between border-b border-neutral-200 pb-3 mb-6">
            <h2 className="font-display text-lg font-bold tracking-tight text-[#2D1B14]">
              You May Also Appreciate
            </h2>
            <Link
              to="/shop"
              className="text-xs font-bold uppercase tracking-wider text-[#A33B23] hover:underline"
            >
              View Collection
            </Link>
          </RevealOnScroll>
          <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
