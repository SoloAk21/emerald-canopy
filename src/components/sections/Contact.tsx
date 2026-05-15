// src/components/sections/Contact.tsx
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import emailjs from "@emailjs/browser";

// Get credentials from environment variables
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log("EmailJS initialized with key:", EMAILJS_PUBLIC_KEY);
  }, []);

  // Form validation
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not provided",
        message: formData.message,
        to_email: "soloasefa6603@gmail.com", // ADD THIS - your email
      };

      console.log("Sending to:", templateParams.to_email);

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
      );

      console.log("Response:", response);

      if (response.status === 200) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! Check your Gmail inbox.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
        setErrors({});

        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      }
    } catch (error: any) {
      console.error("Error:", error);
      setSubmitStatus({
        type: "error",
        message: error.text || "Failed to send. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Let's create{" "}
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
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg flex items-start gap-3 ${
                  submitStatus.type === "success"
                    ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle size={20} className="mt-0.5 flex-shrink-0" />
                )}
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  disabled={isSubmitting}
                  className={`bg-transparent border-b pb-3 focus:border-emerald-400 outline-none text-white placeholder:text-white/40 disabled:opacity-50 ${
                    errors.name ? "border-red-400" : "border-white/20"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Company (Optional)"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  disabled={isSubmitting}
                  className="bg-transparent border-b border-white/20 pb-3 focus:border-emerald-400 outline-none text-white placeholder:text-white/40 disabled:opacity-50"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                disabled={isSubmitting}
                className={`bg-transparent border-b pb-3 focus:border-emerald-400 outline-none text-white placeholder:text-white/40 disabled:opacity-50 ${
                  errors.email ? "border-red-400" : "border-white/20"
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <textarea
                placeholder="Message *"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                disabled={isSubmitting}
                className={`w-full bg-transparent border-b pb-3 focus:border-emerald-400 outline-none text-white placeholder:text-white/40 resize-none disabled:opacity-50 ${
                  errors.message ? "border-red-400" : "border-white/20"
                }`}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ x: 6 }}
              className="group flex items-center gap-4 bg-white text-black px-10 py-5 font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  SENDING...
                </>
              ) : (
                <>
                  SEND MESSAGE
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
