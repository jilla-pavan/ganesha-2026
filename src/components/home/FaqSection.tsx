import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/content";
import { Container } from "@/components/common/Primitives";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { cn } from "@/utils/cn";

export function FaqSection() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="bg-[#FAF7F2] py-16">
      <Container className="max-w-6xl grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left Side: Clean Typographic Header */}
        <RevealOnScroll>
          <div className="text-left lg:sticky lg:top-8">
            <span className="text-[11px] font-bold tracking-widest text-[#A33B23] uppercase block mb-1">
              Good to Know
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#2D1B14] sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-neutral-600 font-medium">
              Can't find what you're looking for? Message us on WhatsApp and
              we'll reply within the hour.
            </p>
          </div>
        </RevealOnScroll>

        {/* Right Side: Accordion Pipeline */}
        <div className="flex flex-col divide-y divide-neutral-200 text-left">
          {faqs.map((f, i) => {
            const isOpen = open === f.id;
            return (
              <RevealOnScroll key={f.id} delay={i * 40} className="py-1">
                <button
                  onClick={() => setOpen(isOpen ? null : f.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-4 text-left outline-none group focus:outline-none"
                >
                  <span
                    className={cn(
                      "font-display text-[15px] font-bold tracking-tight text-[#2D1B14] transition-colors duration-200",
                      isOpen ? "text-[#A33B23]" : "group-hover:text-[#A33B23]",
                    )}
                  >
                    {f.question}
                  </span>

                  {/* Clean Minimalist Plus/Close Toggle Icon */}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white border border-neutral-200 text-[#A33B23] shadow-sm transition-transform duration-300">
                    <Plus
                      size={14}
                      strokeWidth={2.5}
                      className={cn(
                        "transition-transform duration-300",
                        isOpen && "rotate-45 text-neutral-400",
                      )}
                    />
                  </span>
                </button>

                {/* Grid CSS Height Transition Wrapper */}
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-6 text-[13px] leading-relaxed text-neutral-600 font-medium">
                      {f.answer}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
