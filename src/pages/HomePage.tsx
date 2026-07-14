import { Hero } from "@/components/home/Hero";
import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ArtisanStory } from "@/components/home/ArtisanStory";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { BulkOrderBanner } from "@/components/home/BulkOrderBanner";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqSection } from "@/components/home/FaqSection";
import { SectionDivider } from "@/components/common/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <CategorySection />
      <FeaturedCollection />
      <WhyChooseUs />
      <ArtisanStory />
      <SectionDivider />
      <ProcessTimeline />
      {/* <BulkOrderBanner /> */}
      <Testimonials />
      <FaqSection />
    </>
  );
}
