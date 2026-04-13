// src/components/sections/Contact.tsx
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section ref={ref} id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-6xl lg:text-7xl font-semibold leading-none tracking-tight">
              Let’s create{" "}
              <span className="text-white/30">something extraordinary</span>
            </h2>
            <p className="mt-8 text-white/60 max-w-md">
              From strategy to execution — we handle everything from scratch to
              final delivery.
            </p>

            <div className="mt-12 space-y-8">
              {[
                {
                  icon: MapPin,
                  text: "Addis Ababa, Ethiopia\nBole, Next to Edna Mall",
                },
                {
                  icon: Mail,
                  text: "hello@tiladigitals.com",
                  href: "mailto:hello@tiladigitals.com",
                },
                {
                  icon: Phone,
                  text: "+251 911 234 567",
                  href: "tel:+251911234567",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <item.icon size={22} className="text-white/40 mt-1" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <div className="text-white/70 whitespace-pre-line">
                      {item.text}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-transparent border-b border-white/20 pb-3 focus:border-emerald-400 outline-none text-white placeholder:text-white/40"
              />
              <input
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="bg-transparent border-b border-white/20 pb-3 focus:border-emerald-400 outline-none text-white placeholder:text-white/40"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-emerald-400 outline-none text-white placeholder:text-white/40"
            />
            <textarea
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-emerald-400 outline-none text-white placeholder:text-white/40 resize-none"
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ x: 6 }}
              className="group flex items-center gap-4 bg-white text-black px-10 py-5 font-semibold disabled:opacity-70"
            >
              {isSubmitting
                ? "SENDING..."
                : t("contact.send") || "SEND MESSAGE"}
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
