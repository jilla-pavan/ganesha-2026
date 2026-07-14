import { Link } from "react-router-dom";
import { Container } from "@/components/common/Primitives";

export default function NotFoundPage() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-[#FAF7F2] py-20 text-center">
      <Container className="max-w-xl flex flex-col items-center justify-center">
        {/* Large Text-Art 404 Backdrop Label */}
        <p className="font-display text-[96px] font-extrabold leading-none text-[#A33B23]/10 select-none tracking-tight">
          ४०४
        </p>

        {/* Core Headline */}
        <h1 className="font-display -mt-2 text-2xl font-bold tracking-tight text-[#2D1B14] sm:text-3xl">
          This page has wandered off the shelf
        </h1>

        {/* Support Paragraph */}
        <p className="mt-3 text-[14px] leading-relaxed text-neutral-600 font-medium max-w-sm">
          The specific handcrafted masterwork or page record you are seeking
          isn't present in this directory. Let us get you back to the
          collection.
        </p>

        {/* Standard Action Button */}
        <Link
          to="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-[#2D1B14] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          Return to Altar Home
        </Link>
      </Container>
    </section>
  );
}
