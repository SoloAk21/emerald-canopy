import { useState } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Services from "@/components/Services";
import ProvenTrackRecord from "@/components/ProvenTrackRecord";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";

const Index = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoModalOpen(true);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const originalScrollBehavior =
      document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    contactSection.scrollIntoView({ behavior: "instant", block: "start" });

    setTimeout(() => {
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    }, 50);
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
      <div className="absolute inset-0 z-[1] bg-black/70"></div>

      <Header />
      <Hero
        onContactClick={handleContactClick}
        onVideoClick={handleVideoClick}
      />

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

      <Testimonials />

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
