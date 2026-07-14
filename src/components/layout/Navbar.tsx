import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Heart,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/common/Primitives";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import { categories } from "@/data/categories";
import { buildWhatsAppLink, generalEnquiryMessage } from "@/utils/whatsapp";

const navLinks = [
  { label: "Shop", to: "/shop" },
  { label: "Gallery", to: "/gallery" },
  { label: "The Artisan", to: "/about-artisan" },
  { label: "Contact", to: "/contact" },
];

const ANNOUNCEMENT_HEIGHT = 40;

export function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // --- SMART SCROLL ENGINE ---
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 150);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 z-50 border-b transition-all duration-500 will-change-transform text-left",
        visible ? "translate-y-0" : "-translate-y-full",

        // Dynamic color changes base container styles
        scrolled
          ? "border-neutral-100 bg-white/80 py-3 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.02)] text-neutral-800"
          : "border-transparent bg-transparent py-5 text-white",
      )}
      style={{
        top: scrolled
          ? 0
          : visible
            ? ANNOUNCEMENT_HEIGHT
            : -ANNOUNCEMENT_HEIGHT,
      }}
    >
      <Container className="flex items-center justify-between">
        {/* Brand Logo — Clean Contrast Fix */}
        <Link
          to="/"
          className="font-display tracking-tight text-xl font-bold focus-visible:outline-none"
        >
          <span className={scrolled ? "text-[#2D1B14]" : "text-white"}>
            Solapur
          </span>
          <span
            className={cn(
              "font-light",
              scrolled ? "text-[#A33B23]" : "text-[#D4AF37]",
            )}
          >
            Ganesha
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {/* Categories Popover Selector Trigger */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={cn(
                "group flex items-center gap-1 text-[14px] font-semibold tracking-wide transition-colors outline-none",
                scrolled
                  ? "text-neutral-700 hover:text-[#A33B23]"
                  : "text-white/80 hover:text-white",
                megaOpen && scrolled && "text-[#A33B23]",
                megaOpen && !scrolled && "text-white",
              )}
            >
              Categories
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-300",
                  megaOpen && "rotate-180",
                )}
              />
            </button>

            {/* Mega Dropdown Panel */}
            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.99 }}
                  transition={{
                    duration: 0.25,
                    ease: [0.215, 0.61, 0.355, 1.0],
                  }}
                  className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-4"
                >
                  <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-3xl">
                    <div className="mb-4 flex items-center justify-between border-b border-neutral-50 pb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        Curated Collections
                      </span>
                      <Link
                        to="/shop"
                        className="group flex items-center gap-1 text-xs font-medium text-[#A33B23]"
                      >
                        Explore All{" "}
                        <ArrowRight
                          size={12}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((c) => (
                        <Link
                          key={c.id}
                          to={`/category/${c.id}`}
                          className="group flex items-center gap-3.5 rounded-xl p-2.5 transition-all duration-300 hover:bg-neutral-50/80"
                        >
                          <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-neutral-100">
                            <img
                              src={c.image}
                              alt=""
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div>
                            <p className="text-[14px] font-semibold text-[#2D1B14] transition-colors group-hover:text-[#A33B23]">
                              {c.name}
                            </p>
                            <p className="mt-0.5 text-xs text-neutral-400">
                              {c.productCount} masterpieces
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Core Routes — Fixed Visual Styling Color State */}
          {navLinks.map((l) => {
            const isActive = location.pathname === l.to;
            return (
              <NavLink
                key={l.to}
                to={l.to}
                className={cn(
                  "relative text-[14px] font-semibold tracking-wide transition-colors",
                  scrolled
                    ? "text-neutral-700 hover:text-[#A33B23]"
                    : "text-white/80 hover:text-white",
                )}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className={cn(
                      "absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full",
                      scrolled ? "bg-[#A33B23]" : "bg-white",
                    )}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Action Panel Utilities */}
        <div
          className={cn(
            "flex items-center gap-1",
            scrolled ? "text-neutral-700" : "text-white",
          )}
        >
          <button
            aria-label="Search Catalog"
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-white/10 active:scale-95"
          >
            <Search size={18} strokeWidth={2.2} />
          </button>

          <Link
            to="/wishlist"
            aria-label="Favorites"
            className="relative grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-white/10 active:scale-95 text-inherit"
          >
            <Heart size={18} strokeWidth={2.2} />
          </Link>

          <a
            href={buildWhatsAppLink(generalEnquiryMessage())}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "whatsapp" }),
              "ml-2 hidden h-10 rounded-full px-5 font-semibold tracking-wide text-sm shadow-sm md:inline-flex gap-2",
            )}
          >
            <MessageCircle size={16} fill="currentColor" />
            Order on WhatsApp
          </a>

          <button
            aria-label="Toggle Mobile Menu"
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-white/10 lg:hidden text-inherit"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} strokeWidth={2.2} />
          </button>
        </div>
      </Container>

      {/* Mobile Overlay Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-neutral-900/40 backdrop-blur-md lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="fixed right-0 top-0 z-[65] flex h-full w-[88%] max-w-sm flex-col bg-white p-6 shadow-2xl lg:hidden text-neutral-800"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold text-[#2D1B14]">
                  Navigation
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-neutral-50 text-neutral-700"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="mt-8 flex flex-1 flex-col overflow-y-auto">
                <div className="border-b border-neutral-100 py-3">
                  <button
                    onClick={() =>
                      setMobileCategoriesOpen(!mobileCategoriesOpen)
                    }
                    className="flex w-full items-center justify-between text-left text-lg font-semibold text-[#2D1B14]"
                  >
                    Categories{" "}
                    <ChevronDown
                      size={18}
                      className={cn(
                        "transition-transform duration-200",
                        mobileCategoriesOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300",
                      mobileCategoriesOpen && "grid-rows-[1fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-2 grid gap-1 pl-2">
                        {categories.map((c) => (
                          <Link
                            key={c.id}
                            to={`/category/${c.id}`}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-3 rounded-lg py-2 text-sm font-medium text-neutral-600 active:bg-neutral-50"
                          >
                            <span>{c.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {navLinks.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-neutral-100 py-4 text-lg font-semibold text-[#2D1B14]"
                  >
                    {l.label}
                  </NavLink>
                ))}
                <NavLink
                  to="/wishlist"
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-neutral-100 py-4 text-lg font-semibold text-[#2D1B14]"
                >
                  Wishlist
                </NavLink>
              </nav>
              <div className="mt-auto pt-4">
                <a
                  href={buildWhatsAppLink(generalEnquiryMessage())}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "whatsapp" }),
                    "h-12 w-full rounded-full font-medium shadow-md gap-2",
                  )}
                >
                  <MessageCircle size={18} fill="currentColor" /> Order on
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
