import { Link } from "react-router-dom";
import { Heart, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Primitives";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { buildWhatsAppLink, wishlistMessage } from "@/utils/whatsapp";

export default function WishlistPage() {
  // Simulating saved items safely from your product data source
  const saved = products.slice(0, 2);

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-left">
      <PageHeader
        eyebrow="Saved Selection"
        title="Your Wishlist"
        crumbs={[{ label: "Home", to: "/" }, { label: "Wishlist" }]}
      />

      <section className="py-12">
        <Container className="max-w-6xl">
          {saved.length > 0 ? (
            <>
              {/* Active Product Grid Matrix */}
              <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {saved.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>

              {/* High-Contrast Split Action Panel */}
              <div className="mt-12 bg-white border border-neutral-200 rounded-md p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="max-w-xl text-left">
                  <span className="text-[10px] font-bold tracking-widest text-[#A33B23] uppercase block mb-1">
                    Direct Consultation Pipeline
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#2D1B14]">
                    Ready to complete your selection?
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-600 font-medium">
                    Transmit your absolute wishlist arrangement directly to our
                    Solapur family workshop in a single structured communication
                    slot. Our team will verify staging slots immediately.
                  </p>
                </div>

                <a
                  href={buildWhatsAppLink(
                    wishlistMessage(saved.map((p) => p.name)),
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="group shrink-0 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#A33B23] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#8E321E] transition-all duration-200 active:scale-98"
                >
                  <MessageCircle size={14} fill="currentColor" />
                  Send Wishlist on WhatsApp
                </a>
              </div>
            </>
          ) : (
            /* Premium Bordered Empty State Layout */
            <div className="text-center border border-dashed border-neutral-300 rounded-md py-16 px-6 bg-white/50 max-w-md mx-auto flex flex-col items-center justify-center">
              <span className="grid h-12 w-12 place-items-center rounded-md bg-neutral-100 text-neutral-400 border border-neutral-200">
                <Heart size={18} strokeWidth={2} />
              </span>

              <h3 className="font-display text-base font-bold text-[#2D1B14] mt-4">
                Your Registry is Empty
              </h3>

              <p className="mt-2 text-[13px] leading-relaxed text-neutral-500 font-medium max-w-xs">
                You haven't preserved any handcrafted masterpieces to your
                collection register yet.
              </p>

              <Link
                to="/shop"
                className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-[#2D1B14] px-5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-neutral-800 transition-colors"
              >
                Browse the Collection
              </Link>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
