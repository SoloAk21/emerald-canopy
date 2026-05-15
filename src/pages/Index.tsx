// Index.tsx
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
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import { useState } from "react";

const Index = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoModalOpen(true);
  };

  return (
    <div className="relative">
      {/* Background layer with enhanced effects */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/bg-main.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Abstract floating elements */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-500/5 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/5 blur-[120px] animate-pulse-slower"></div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Diagonal scan lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)`,
          }}
        />

        {/* Abstract circles */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <circle
            cx="15%"
            cy="30%"
            r="200"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 8"
          />
          <circle
            cx="85%"
            cy="70%"
            r="300"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2 12"
          />
          <circle
            cx="50%"
            cy="50%"
            r="400"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="1 20"
          />
          <line
            x1="10%"
            y1="80%"
            x2="90%"
            y2="20%"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.5"
            strokeDasharray="5 15"
          />
          <line
            x1="20%"
            y1="10%"
            x2="80%"
            y2="90%"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.5"
            strokeDasharray="3 12"
          />
        </svg>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          />
        ))}

        {/* Gradient borders */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/5 rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/5 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/5 rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/5 rounded-br-2xl"></div>
      </div>

      <BackgroundEffects />
      {/* Content layer */}
      <main className="relative z-10 bg-transparent">
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
        <section id="footer">
          <Footer />
        </section>
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
        />
      </main>

      {/* Custom styles for animations */}
      <style>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.2);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
