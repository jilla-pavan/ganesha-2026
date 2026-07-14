import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Primitives";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import { buildWhatsAppLink, generalEnquiryMessage } from "@/utils/whatsapp";
import videoBg from "../../assets/hero-bg.mp4";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-950 pb-16 pt-[86px] sm:pt-[94px] md:pb-20 lg:pt-[106px] min-h-[80vh] flex items-center">
      
      {/* 1. Cinematic Full-Bleed Video Background Container */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-[0.38] scale-102 transition-transform duration-1000 ease-out"
          poster="https://images.unsplash.com/photo-1609137144813-7d992143de5f?auto=format&fit=crop&q=80&w=1920"
        >
          {/* Unrestricted, direct public premium streaming loop of artisan clay crafting */}
          <source 
            src={videoBg} 
            type="video/mp4" 
          />
        </video>
        
        {/* Multi-Stage Contrast Protection Grading Overlays */}
        <div className="absolute inset-0 bg-neutral-950/20 mix-blend-color" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent" />
      </div>

      {/* 2. Content Container Layer */}
      <Container className="relative z-10 max-w-6xl w-full">
        <div className="border-t border-white/10 pt-6 md:pt-8">
          
          {/* Authentic Heritage Identity Badge */}
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-neutral-300"
          >
            <span className="font-devanagari text-sm text-[#A33B23] font-normal animate-pulse">
              ॐ
            </span>
            <span className="text-neutral-400 tracking-[0.12em]">Solapur Artisan Hub</span>
            <span className="h-1 w-1 rounded-full bg-neutral-700" />
            <span className="flex items-center gap-1 text-neutral-300 font-semibold tracking-[0.08em]">
              <Sparkles size={11} className="text-[#D4AF37]" />{" "}
              Premium & Custom Idols
            </span>
          </motion.div>

          {/* High-Contrast Luxury Typography Block */}
          <h1 className="font-display mt-4 max-w-4xl text-[38px] font-extrabold leading-[0.95] tracking-tight text-white sm:text-[58px] md:text-[70px] lg:text-[84px]">
            SHAPED BY{" "}
            <span className="font-serif italic font-light text-[#A33B23]">
              DEVOTION
            </span>
            ,
            <br />
            <span className="bg-gradient-to-r from-neutral-100 via-white to-neutral-400 bg-clip-text text-transparent">
              NOT A FACTORY LINE.
            </span>
          </h1>

          {/* Dynamic Compact Layout Core Wrapper */}
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_1fr] items-start">
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="text-[14px] leading-relaxed text-neutral-300 font-medium md:text-[16px]"
              >
                Three generations of one Solapur artisan family crafting fine sacred art. From traditionally sculpted natural Shadu clay masterpieces to beautifully detailed premium festive idols, find the perfect form for your home shrine.
              </motion.p>

              {/* Functional User Call-to-Actions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <Link
                  to="/shop"
                  className={cn(
                    buttonVariants({ variant: "primary" }),
                    "group h-11 rounded-md px-6 text-xs font-bold tracking-wider uppercase bg-white text-neutral-950 hover:bg-neutral-100 shadow-xl transition-all duration-200 hover:-translate-y-0.5",
                  )}
                >
                  Explore Collections
                  <ArrowUpRight
                    size={14}
                    className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <a
                  href={buildWhatsAppLink(generalEnquiryMessage())}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-11 items-center gap-1.5 rounded-md border border-white/20 bg-white/5 backdrop-blur-xs px-6 text-xs font-bold tracking-wider uppercase text-white shadow-lg transition-all duration-200 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400 hover:-translate-y-0.5"
                >
                  <MessageCircle size={14} className="text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                  WhatsApp Order
                </a>
              </motion.div>
            </div>

            {/* Premium Luminescent Metrics Track */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
            >
              {[
                ["1,200+", "Blessed"],
                ["4.9 / 5", "Rating"],
                ["Multiple", "Mediums"],
              ].map(([stat, label], i) => (
                <div key={i} className="group">
                  <p className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl transition-colors group-hover:text-[#A33B23]">
                    {stat}
                  </p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}