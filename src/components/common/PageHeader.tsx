import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/common/Primitives";
import bg from "../../assets/page-header-bg.png";

interface Breadcrumb {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs: Breadcrumb[];
}

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
}: PageHeaderProps) {
  return (
    <header className="relative w-full overflow-hidden bg-[#2D1B14] py-16 md:py-20 text-left">
      {/* 1. Atmospheric Studio Mandir Blur Layer */}
      <div
        className="absolute inset-0 z-0 h-full w-full bg-contain
         bg-center blur-[1px] opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />

      {/* 2. Precision Contrast Correction Mask Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#2D1B14] via-[#2D1B14]/85 to-transparent" />

      {/* 3. Core Typography Framework */}
      <Container className="relative z-20 max-w-6xl">
        {/* Breadcrumb Navigation Pipeline */}
        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-400"
        >
          {crumbs.map((crumb, idx) => {
            const isLast = idx === crumbs.length - 1;
            return (
              <div key={idx} className="flex items-center gap-1.5">
                {crumb.to && !isLast ? (
                  <Link
                    to={crumb.to}
                    className="transition-colors hover:text-white"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? "text-[#D4AF37]" : "text-neutral-400"}
                  >
                    {crumb.label}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight
                    size={10}
                    strokeWidth={3}
                    className="text-neutral-500"
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Heading Architecture */}
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block mb-1.5">
          {eyebrow}
        </span>

        <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight max-w-2xl">
          {title}
        </h1>

        {description && (
          <p className="mt-4 text-[14px] leading-relaxed text-neutral-300 font-medium max-w-xl">
            {description}
          </p>
        )}
      </Container>
    </header>
  );
}
