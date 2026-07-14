import { Link } from "react-router-dom";
import {
  Camera,
  Users,
  Play,
  ShieldCheck,
  Truck,
  Undo2,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/common/Primitives";
import {
  buildWhatsAppLink,
  generalEnquiryMessage,
  BUSINESS_DISPLAY_NUMBER,
} from "@/utils/whatsapp";

const trust = [
  {
    icon: ShieldCheck,
    label: "Blessed & Handcrafted",
    desc: "Every idol made to order",
  },
  {
    icon: Truck,
    label: "Pan-India Delivery",
    desc: "Insured, fragile-marked shipping",
  },
  {
    icon: Undo2,
    label: "Damage-Free Guarantee",
    desc: "Free replacement, no questions",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#FAF7F2] text-left">
      {/* Upper Trust Framework Track */}
      <div className="border-b border-neutral-200">
        <Container className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-3">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white text-[#A33B23] shadow-sm border border-neutral-200">
                <t.icon size={18} strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#2D1B14]">
                  {t.label}
                </p>
                <p className="text-[13px] text-neutral-600 font-medium mt-0.5">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </Container>
      </div>

      {/* Main Core Links Framework */}
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        {/* Brand Narrative Block */}
        <div>
          <span className="font-display text-xl font-extrabold tracking-tight text-[#2D1B14]">
            Solapur<span className="text-[#A33B23]">Ganesha</span>
          </span>
          <p className="font-devanagari mt-2 text-xs font-semibold tracking-widest text-[#A33B23]">
            श्री गणेशाय नमः
          </p>
          <p className="mt-4 text-[13px] leading-relaxed text-neutral-600 font-medium max-w-xs">
            Handcrafted Ganesha idols from a single artisan family in Solapur —
            made with natural clay, blessed before dispatch, delivered across
            India.
          </p>

          {/* Social Track Panel */}
          <div className="mt-5 flex gap-2">
            {[Camera, Users, Play].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social Link"
                className="grid h-8 w-8 place-items-center rounded-md bg-white border border-neutral-200 text-[#2D1B14] shadow-sm transition-colors hover:bg-[#A33B23] hover:text-white hover:border-[#A33B23]"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic Category Navigation Pipelines */}
        <FooterCol
          title="Shop"
          links={[
            ["Eco-Friendly", "/shop"],
            ["Premium Collection", "/shop"],
            ["Mandir Decor", "/shop"],
            ["Gifting", "/shop"],
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            ["About the Artisan", "/about-artisan"],
            ["Gallery", "/gallery"],
            ["Wishlist", "/wishlist"],
            ["FAQs", "/#faq"],
          ]}
        />

        {/* WhatsApp Checkout Informational Block */}
        <div>
          <p className="text-[13px] font-bold uppercase tracking-wider text-[#2D1B14]">
            Direct WhatsApp Orders
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-neutral-600 font-medium">
            No accounts, no automated carts — every order is confirmed
            personally by our family team on WhatsApp.
          </p>
          <a
            href={buildWhatsAppLink(generalEnquiryMessage())}
            target="_blank"
            rel="noreferrer"
            className="group mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded bg-[#A33B23] px-4 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#8E321E] transition-colors"
          >
            <MessageCircle size={14} fill="currentColor" />
            {BUSINESS_DISPLAY_NUMBER}
          </a>
        </div>
      </Container>

      {/* Absolute Base Credits Bar */}
      <div className="border-t border-neutral-200 bg-neutral-50/50">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-[11px] font-medium text-neutral-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} SolapurGanesha. Crafted with reverence,
            in Solapur.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-[#A33B23] transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-[#A33B23] transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-[#A33B23] transition-colors">
              Shipping Transit
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <p className="text-[13px] font-bold uppercase tracking-wider text-[#2D1B14]">
        {title}
      </p>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link
              to={to}
              className="text-[13px] font-medium text-neutral-600 transition-colors hover:text-[#A33B23]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
