import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewArrivalsTicker from "@/components/NewArrivalsTicker";
import CollectionGrid from "@/components/CollectionGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";

export default function HomePage() {
  return (
    <div style={{ background: "var(--obsidian)" }}>
      <Navbar />
      <main>
        <HeroSection />
        <NewArrivalsTicker />
        <FeaturedProducts />
        <CollectionGrid />
        <TestimonialSection />
      </main>
      <Footer />
      <WhatsAppChatButton />
    </div>
  );
}
