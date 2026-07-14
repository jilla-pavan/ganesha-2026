import type { Testimonial, FaqItem, ProcessStep } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Anjali Deshpande",
    location: "Pune",
    quote:
      "The idol arrived exactly as photographed — the finishing on the crown felt like something from a temple workshop, not a website.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "t-2",
    name: "Rohan Mehta",
    location: "Mumbai",
    quote:
      "We ordered the eco-friendly range for the housing society celebration. Immersion was worry-free and the colours stayed vivid all week.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "t-3",
    name: "Priya Kulkarni",
    location: "Bengaluru",
    quote:
      "Ordering from outside Maharashtra always worried me. Packaging was museum-grade and everything reached without a single chip.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "t-4",
    name: "Vikram Joshi",
    location: "Solapur",
    quote:
      "Being from Solapur, I know the signature posture of these traditional forms. The Kadam family maintains the exact geometry my elders prized.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "t-5",
    name: "Meera Nair",
    location: "Chennai",
    quote:
      "The gold-leaf detailing under the mandir spotlights looks absolutely divine. You can instantly spot the difference between factory molds and fine human hands.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "t-6",
    name: "Amit Sharma",
    location: "New Delhi",
    quote:
      "We chose a large custom creation for our corporate office reception. The entire delivery schedule was handled smoothly, and the detailing is flawless.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "t-7",
    name: "Sunita Gavaskar",
    location: "Thane",
    quote:
      "The natural Shadu clay dissolved completely inside our home garden barrel within a single hour. A truly pure and deeply respectful visarjan.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "t-8",
    name: "Devendra Patil",
    location: "Nashik",
    quote:
      "The expression on Bappa’s face brings immediate serenity to our living area. The paint finish is beautifully smooth and lacks that harsh commercial gloss.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "t-9",
    name: "Ketan Shah",
    location: "Ahmedabad",
    quote:
      "Coordination over WhatsApp was clean, transparent, and direct. They shared workshop progress pictures before dispatching the final box package.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "t-10",
    name: "Radhika Iyer",
    location: "Hyderabad",
    quote:
      "Stunning asymmetric dynamic posture. It occupies our family pooja altar gracefully and was packaged securely like high-end heritage pottery.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1594744803329-e58b31de215f?w=120&h=120&fit=crop&q=80",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "f-1",
    question: "Are the idols genuinely eco-friendly for visarjan?",
    answer:
      "Yes. Our eco range is hand-modelled in natural Shadu clay with water-soluble, non-toxic pigments — safe for home bucket immersion or natural water bodies where permitted locally.",
  },
  {
    id: "f-2",
    question: "How is the idol packaged for long-distance delivery?",
    answer:
      "Every idol is wrapped in layered cotton cloth, cushioned in a custom-fit foam cradle, then double-boxed. Fragile-marked and insured on every shipment.",
  },
  {
    id: "f-3",
    question: "Can I customise the height or colour palette?",
    answer:
      "Most forms in the Premium Collection can be customised. Mention it when you message us on WhatsApp to order, and our artisan team will confirm feasibility before we begin.",
  },
  {
    id: "f-4",
    question: "What if the idol arrives damaged?",
    answer:
      "Extremely rare given our packaging, but if it happens, share photos within 24 hours of delivery and we will replace it at no cost, no questions asked.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "s-1",
    title: "Sourcing the Clay",
    description:
      "Natural Shadu clay is sourced and rested for weeks to reach the right texture.",
    image: "https://picsum.photos/seed/process-clay-sourcing/600/700",
  },
  {
    id: "s-2",
    title: "Hand Modelling",
    description:
      "Each form is shaped freehand over several days — no two idols are identical.",
    image: "https://picsum.photos/seed/process-hand-modelling/600/700",
  },
  {
    id: "s-3",
    title: "Natural Finishing",
    description:
      "Pigments and gold leaf are applied by hand, layer by layer, and left to cure.",
    image: "https://picsum.photos/seed/process-finishing/600/700",
  },
  {
    id: "s-4",
    title: "Blessing & Packing",
    description:
      "Every idol is blessed at the workshop before being cradled for its journey to you.",
    image: "https://picsum.photos/seed/process-packing/600/700",
  },
];
