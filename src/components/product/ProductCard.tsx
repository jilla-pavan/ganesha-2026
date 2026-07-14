import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Leaf } from "lucide-react";
import type { Product } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { IconButton } from "@/components/ui/IconButton";
import { StarRating } from "@/components/common/Primitives";
import { buildWhatsAppLink, productEnquiryMessage } from "@/utils/whatsapp";
import { cn } from "@/utils/cn";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const [wishlisted, setWishlisted] = useState(false);
  const hasDiscount =
    product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <div className="group flex w-full flex-col bg-transparent text-left border border-transparent hover:border-neutral-200/40 p-1.5 transition-all duration-300 rounded-lg">
      {/* Aspect Ratio Uniform Image Frame */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 rounded-md shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          loading={priority ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-102 group-hover:opacity-0"
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-102 object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
          />
        )}

        {/* Dynamic Badges Overlay */}
        <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5 z-10">
          {product.ecoFriendly && (
            <span className="inline-flex items-center gap-1 rounded bg-emerald-700/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              <Leaf size={10} /> Eco Earth
            </span>
          )}
        </div>

        {/* Micro Wishlist Action Button */}
        <div className="absolute right-2.5 top-2.5 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <IconButton
            label="Add to wishlist"
            active={wishlisted}
            onClick={() => setWishlisted((w) => !w)}
            className="h-8 w-8 bg-white/95 shadow-sm rounded-full backdrop-blur-sm hover:bg-white active:scale-90 transition-transform"
          >
            <Heart
              size={15}
              className={cn(
                "text-neutral-700",
                wishlisted && "text-red-500 fill-red-500",
              )}
            />
          </IconButton>
        </div>

        {/* Slide-Up WhatsApp Action Bar (Desktop Optimized) */}
        <a
          href={buildWhatsAppLink(productEnquiryMessage(product.name))}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-x-2.5 bottom-2.5 z-10 flex h-10 translate-y-2 items-center justify-center gap-1.5 rounded bg-emerald-600 px-4 text-xs font-semibold uppercase tracking-wider text-white opacity-0 shadow-md transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 hover:bg-emerald-500 active:scale-[0.98]"
        >
          <MessageCircle size={14} fill="currentColor" />
          WhatsApp Order
        </a>
      </div>

      {/* Structured Core Copy Area — Standardizing Vertical Spacing Grid */}
      <Link
        to={`/product/${product.slug}`}
        className="mt-3.5 flex flex-1 flex-col"
      >
        {/* Title Track: Enforced 2-line standard height box prevents card misalignment */}
        <h3 className="font-display h-11 text-[15px] font-bold tracking-tight text-[var(--color-brown)] line-clamp-2 leading-snug group-hover:text-[var(--color-primary)] transition-colors">
          {product.name}
        </h3>

        {/* Material Specs String */}
        <p className="mt-1.5 truncate text-[12px] font-medium text-neutral-500">
          {product.material} · {product.heightInches}&Prime; Height
        </p>

        {/* Star Matrix Layer */}
        <div className="mt-2 flex items-center gap-1.5">
          <StarRating rating={product.rating} />
          <span className="text-[11px] font-semibold text-neutral-400 mt-0.5">
            ({product.reviewCount})
          </span>
        </div>

        {/* Pinned Base Currency Block */}
        <div className="mt-auto pt-3 flex items-baseline gap-2 border-t border-neutral-100/40">
          <span className="font-display text-base font-extrabold text-[var(--color-brown)]">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {hasDiscount && (
            <span className="text-xs text-neutral-400 line-through tracking-tight">
              ₹{product.compareAtPrice?.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
