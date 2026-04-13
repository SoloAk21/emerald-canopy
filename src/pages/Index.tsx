import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import VideoModal from "@/components/layout/layout/VideoModal";
import Contact from "@/components/sections/Contact";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Hero from "@/components/sections/Hero";
import ProvenTrackRecord from "@/components/sections/ProvenTrackRecord";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { useState } from "react";

const Index = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoModalOpen(true);
  };

  return (
    <main
      className="relative bg-background"
      style={{
        backgroundImage: "url('/bg-main.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 z-[1] bg-black/50"></div>
      <Header />
      <Hero onVideoClick={handleVideoClick} />

      <section id="services">
        <Services />
      </section>
      <section id="track-record">
        <ProvenTrackRecord />
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="featured-work">
        <FeaturedWork />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </main>
  );
};

export default Index;
