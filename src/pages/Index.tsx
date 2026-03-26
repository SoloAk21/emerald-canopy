import Hero from "@/components/Hero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  BarChart3,
  Zap,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  return (
    <main className="bg-background">
      <Header />
      <Hero />

      {/* ===== SERVICES SECTION ===== */}
      <ServicesSection />

      {/* ===== RESULTS SECTION ===== */}
      <ResultsSection />

      {/* ===== FINAL CTA SECTION ===== */}
      <FinalCTASection />
    </main>
  );
};

/* -------------------------------------------------------------------------- */
/* Services Section                                                           */
/* -------------------------------------------------------------------------- */
const services = [
  {
    icon: Shield,
    title: "Brand Shield",
    description:
      "Protect your reputation with 24/7 monitoring and crisis management.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Growth",
    description:
      "Turn algorithms into your greatest ally with AI-powered insights.",
  },
  {
    icon: Zap,
    title: "Viral Engineering",
    description:
      "Create content engineered to amplify reach and engagement organically.",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-5 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide the tools and strategies to make your brand unstoppable
            in 2026.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* Results Section (Stats)                                                    */
/* -------------------------------------------------------------------------- */
const stats = [
  { value: "+312K", label: "Instagram Reach", icon: TrendingUp },
  { value: "+89K", label: "X Impressions", icon: Users },
  { value: "5.0", label: "Client Rating", icon: Star },
];

const ResultsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-5 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Proven Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real numbers from real campaigns — we deliver what we promise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-4xl font-bold text-gradient-holo mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* Final CTA Section                                                          */
/* -------------------------------------------------------------------------- */
const FinalCTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-5 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-emerald-400/10 to-emerald-600/5 animate-shimmer" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Own the Storm?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join the brands that trust us to turn chaos into opportunity. Let’s
            build your digital umbrella.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-emerald-600 text-foreground px-8 py-4 rounded-2xl font-semibold text-lg group"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Index;
