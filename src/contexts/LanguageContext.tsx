import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "am";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header & Navigation
    "nav.shield": "Security",
    "nav.amplify": "Growth",
    "nav.insights": "Data",
    "nav.work": "Projects",
    "nav.connect": "Contact",
    "cta.strategy_call": "Start a Project",

    // Hero Section
    "hero.title": "Building the Future \nof Digital Brands",
    "hero.subtitle":
      "We help brands grow through modern design, scalable technology, and data-driven digital strategies.",
    "hero.cta_start": "Start a Project",
    "hero.cta_more": "Our Services",

    // Services General
    "services.badge": "WHAT WE DO",
    "services.title": "Solutions that drive results",
    "services.subtitle":
      "High-impact digital services tailored to your business needs.",
    "services.cta": "Ready to transform your online presence?",
    "services.cta_btn": "Explore All Services →",

    // Service: Shield
    "services.shield.title": "Brand Security",
    "services.shield.desc":
      "Protecting your digital assets and reputation with 24/7 monitoring.",
    "services.shield.f1": "Enterprise Security",
    "services.shield.f2": "Crisis Management",
    "services.shield.f3": "Identity Protection",
    "services.shield.m1_val": "99.9%",
    "services.shield.m1_lab": "Uptime",
    "services.shield.m2_val": "24/7",
    "services.shield.m2_lab": "Live Support",
    "services.shield.impact_val": "2.5M+",
    "services.shield.impact_lab": "Secure Users",

    // Service: Growth
    "services.growth.title": "Digital Growth",
    "services.growth.desc":
      "Using AI and market data to scale your business and increase ROI.",
    "services.growth.f1": "Data Analytics",
    "services.growth.f2": "Market Research",
    "services.growth.f3": "Performance Scaling",
    "services.growth.m1_val": "+312%",
    "services.growth.m1_lab": "Avg Growth",
    "services.growth.m2_val": "AI-Powered",
    "services.growth.m2_lab": "Insights",
    "services.growth.impact_val": "45%",
    "services.growth.impact_lab": "Faster Results",

    // Service: Viral
    "services.viral.title": "Content Strategy",
    "services.viral.desc":
      "Creative content designed to trend and build a loyal community.",
    "services.viral.f1": "Social Optimization",
    "services.viral.f2": "Viral Marketing",
    "services.viral.f3": "Brand Awareness",
    "services.viral.m1_val": "10M+",
    "services.viral.m1_lab": "Total Reach",
    "services.viral.m2_val": "Organic",
    "services.viral.m2_lab": "Engagement",
    "services.viral.impact_val": "87%",
    "services.viral.impact_lab": "Retention Rate",

    // Track Record
    "trackrecord.title": "Our Track Record",
    "trackrecord.subtitle":
      "We partner with the world's most ambitious companies",
    "trackrecord.trusted": "Trusted by Industry Leaders",
    "trackrecord.cta": "Join our successful partners",
    "trackrecord.cta_sub": "Stop following the market. Start leading it.",
    "trackrecord.cta_btn": "View Case Studies",

    // Edge
    "edge.title": "Why Work",
    "edge.brand": "With Tila Digitals?",
    "edge.metric_label": "Key Success Metric",
    "edge.strategy.title": "Proven Strategy",
    "edge.strategy.desc":
      "Every project is backed by deep research and expert planning.",
    "edge.strategy.m": "15+ Years Experience",
    "edge.execution.title": "Expert Execution",
    "edge.execution.desc":
      "We deliver high-quality digital products with speed and precision.",
    "edge.execution.m": "Fast Delivery",
    "edge.expertise.title": "Modern Tech",
    "edge.expertise.desc":
      "We use the latest tools and algorithms to keep you ahead.",
    "edge.expertise.m": "Expert Team",
    "edge.results.title": "Measurable ROI",
    "edge.results.desc":
      "Clear reports and real financial growth for your business.",
    "edge.results.m": "98% Satisfaction",

    // Edge "What Sets Us Apart"
    "edge.why_us_title": "Our Advantage",
    "edge.why_us_sub": "Why Choose Us",
    "edge.why_us_desc":
      "We don't just provide services; we build long-term partnerships.",
    "edge.f1": "AI-Driven Insights",
    "edge.f2": "Live Dashboards",
    "edge.f3": "Scalable Tech",
    "edge.f4": "Expert Support",
    "edge.f5": "Custom Design",
    "edge.f6": "Data Security",
    "edge.cta": "Ready to scale?",
    "edge.cta_sub": "Let's build your digital presence together.",
    "edge.cta_btn": "Get a Free Audit",

    // Featured Work
    "featured.badge": "PORTFOLIO",
    "featured.title": "Featured Work",
    "featured.subtitle": "Delivering excellence across various industries",
    "featured.ethio.title": "Ethio Telecom – Growth",
    "featured.ethio.category": "Digital Strategy & Production",
    "featured.nexus.title": "Nexus Bank – Launch",
    "featured.nexus.category": "Brand Identity & Marketing",
    "featured.lumora.title": "Lumora Coffee – Content",
    "featured.lumora.category": "Social Media Management",
    "featured.view_all": "See All Projects",
    "featured.footer_note": "High-impact results delivered in 6-8 weeks.",

    // Testimonials
    "testimonial.badge": "REVIEWS",
    "testimonial.title": "Client Success Stories",
    "testimonial.subtitle": "What our partners say about us",
    "testimonial.ethio.quote":
      "Tila Digitals transformed our digital presence. Their professional approach is world-class.",
    "testimonial.ethio.name": "Abebe Kebede",
    "testimonial.testimonial.ethio.role": "Marketing Director",
    "testimonial.lumora.quote":
      "The quality of work and the growth we saw was beyond our expectations.",
    "testimonial.lumora.name": "Selamawit Haile",
    "testimonial.lumora.role": "CEO",
    "testimonial.nexus.quote":
      "A truly data-driven team that understands the modern digital landscape.",
    "testimonial.nexus.name": "Dawit Yohannes",
    "testimonial.nexus.role": "Digital Manager",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Start Your Journey",
    "contact.description":
      "Have a project? Let's talk about how we can help you grow.",
    "contact.name": "Full Name",
    "contact.company": "Company Name",
    "contact.email": "Email Address",
    "contact.message": "Message...",
    "contact.send": "Submit",
    "contact.address_label": "Location",
    "contact.address_sub": "Bole, Addis Ababa, Ethiopia",

    // Footer
    "footer.description":
      "Helping ambitious brands dominate the digital world.",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.process": "Methodology",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.services": "Services",
    "footer.s1": "Social Media",
    "footer.s2": "Content Creation",
    "footer.s3": "Production",
    "footer.s4": "Copywriting",
    "footer.s5": "UI/UX Design",
    "footer.s6": "Strategy",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms",
    "footer.legal": "Legal",
    "footer.built_by": "Built for high-growth brands",
  },

  am: {
    // Header & Navigation
    "nav.shield": "ጥበቃ",
    "nav.amplify": "እድገት",
    "nav.insights": "ትንተና",
    "nav.work": "ስራዎች",
    "nav.connect": "ያግኙን",
    "cta.strategy_call": "ፕሮጀክት ይጀምሩ",

    // Hero Section
    "hero.title": "የነገውን ዲጂታል \nዓለም ዛሬ ይገንቡ",
    "hero.subtitle": "ብራንድዎን በዘመናዊ ዲዛይን፣ በቴክኖሎጂ እና በመረጃ በተደገፈ ስትራቴጂ እናሳድጋለን።",
    "hero.cta_start": "ይጀምሩ",
    "hero.cta_more": "አገልግሎቶቻችን",

    // Services General
    "services.badge": "የምንሰጣቸው አገልግሎቶች",
    "services.title": "ውጤታማ የዲጂታል መፍትሄዎች",
    "services.subtitle": "ለንግድዎ ስኬት ተብለው የተነደፉ ዘመናዊ አገልግሎቶች።",
    "services.cta": "የንግድዎን ተደራሽነት ለመቀየር ዝግጁ ነዎት?",
    "services.cta_btn": "ሁሉንም ይመልከቱ →",

    // Service: Shield
    "services.shield.title": "የብራንድ ጥበቃ",
    "services.shield.desc": "የተቋምዎን ዲጂታል ደህንነት እና ስም በ24 ሰዓት ክትትል እንጠብቃለን።",
    "services.shield.f1": "ከፍተኛ የደህንነት ጥበቃ",
    "services.shield.f2": "የስጋት መከላከል",
    "services.shield.f3": "የብራንድ ደህንነት",
    "services.shield.m1_val": "99.9%",
    "services.shield.m1_lab": "አስተማማኝነት",
    "services.shield.m2_val": "24/7",
    "services.shield.m2_lab": "ድጋፍ",
    "services.shield.impact_val": "2.5M+",
    "services.shield.impact_lab": "የተጠበቁ ተጠቃሚዎች",

    // Service: Growth
    "services.growth.title": "ዲጂታል እድገት",
    "services.growth.desc": "መረጃዎችን እና AIን በመጠቀም የንግድዎን ተደራሽነት እና ትርፍ እናሳድጋለን።",
    "services.growth.f1": "የመረጃ ትንተና",
    "services.growth.f2": "የገበያ ጥናት",
    "services.growth.f3": "ውጤታማ እድገት",
    "services.growth.m1_val": "+312%",
    "services.growth.m1_lab": "አማካኝ እድገት",
    "services.growth.m2_val": "በAI የታገዘ",
    "services.growth.m2_lab": "ጥናቶች",
    "services.growth.impact_val": "45%",
    "services.growth.impact_lab": "ፈጣን ውጤት",

    // Service: Viral
    "services.viral.title": "የይዘት ስትራቴጂ",
    "services.viral.desc": "ሰፊ ተደራሽነት ያላቸው እና ደንበኞችን የሚስቡ የፈጠራ ስራዎችን እናዘጋጃለን።",
    "services.viral.f1": "ሶሻል ሚዲያ",
    "services.viral.f2": "ተፅዕኖ ፈጣሪ ይዘት",
    "services.viral.f3": "ብራንድ ግንባታ",
    "services.viral.m1_val": "10M+",
    "services.viral.m1_lab": "ተደራሽነት",
    "services.viral.m2_val": "ኦርጋኒክ",
    "services.viral.m2_lab": "ተሳትፎ",
    "services.viral.impact_val": "87%",
    "services.viral.impact_lab": "የተሳትፎ ምጣኔ",

    // Track Record
    "trackrecord.title": "የስራ ታሪካችን",
    "trackrecord.subtitle": "ከታላላቅ የሀገር ውስጥ እና ዓለም አቀፍ ተቋማት ጋር እንሰራለን",
    "trackrecord.trusted": "በመሪ ድርጅቶች የታመነ",
    "trackrecord.cta": "የስኬታችን ተካፋይ ይሁኑ",
    "trackrecord.cta_sub": "ገበያውን ከመከተል ይልቅ መሪ ይሁኑ።",
    "trackrecord.cta_btn": "የተከናወኑ ስራዎች",

    // Edge
    "edge.title": "ለምን በ",
    "edge.brand": "ጥላ ዲጂታልስ ይተማመናሉ?",
    "edge.metric_label": "የስኬት መለኪያ",
    "edge.strategy.title": "የጥናት ስልት",
    "edge.strategy.desc": "እያንዳንዱ ስራ በጥልቅ ጥናት እና እቅድ ላይ የተመሰረተ ነው።",
    "edge.strategy.m": "15+ ዓመት ልምድ",
    "edge.execution.title": "ጥራት ያለው አፈጻጸም",
    "edge.execution.desc": "ጥራት ያላቸው የዲጂታል ውጤቶችን በፍጥነት እና በጥንቃቄ እናቀርባለን።",
    "edge.execution.m": "ፈጣን አቅርቦት",
    "edge.expertise.title": "ዘመናዊ ቴክኖሎጂ",
    "edge.expertise.desc": "እርስዎን ቀዳሚ ለማድረግ የቅርብ ጊዜዎቹን የቴክኖሎጂ ውጤቶች እንጠቀማለን።",
    "edge.expertise.m": "ብቁ ባለሙያዎች",
    "edge.results.title": "ተጨባጭ ውጤት",
    "edge.results.desc": "ግልጽ የሆነ የንግድ እድገት እና ትርፋማነትን እናረጋግጣለን።",
    "edge.results.m": "98% እርካታ",

    // Edge "What Sets Us Apart"
    "edge.why_us_title": "የእኛ ልዩነት",
    "edge.why_us_sub": "ለምን እኛን?",
    "edge.why_us_desc": "እኛ አገልግሎት ብቻ አንሰጥም፤ ዘላቂ የንግድ አጋርነትን እንፈጥራለን።",
    "edge.f1": "በAI የታገዘ ጥናት",
    "edge.f2": "የቀጥታ መረጃ",
    "edge.f3": "አድጊ ቴክኖሎጂ",
    "edge.f4": "ሙሉ ድጋፍ",
    "edge.f5": "ብጁ ዲዛይን",
    "edge.f6": "የመረጃ ደህንነት",
    "edge.cta": "ለእድገት ዝግጁ ነዎት?",
    "edge.cta_sub": "የዲጂታል መፃኢ እድልዎን አብረን እንገንባ።",
    "edge.cta_btn": "ነፃ ምክክር ያግኙ",

    // Featured Work
    "featured.badge": "ስራዎቻችን",
    "featured.title": "ተለይተው የቀረቡ",
    "featured.subtitle": "በተለያዩ ዘርፎች ያስመዘገብናቸው ስኬቶች",
    "featured.ethio.title": "ኢትዮ ቴሌኮም – እድገት",
    "featured.ethio.category": "ዲጂታል ስትራቴጂ እና ፕሮዳክሽን",
    "featured.nexus.title": "ኔክሰስ ባንክ – ስራ መጀመሪያ",
    "featured.nexus.category": "ብራንድ ግንባታ እና ማርኬቲንግ",
    "featured.lumora.title": "ሉሞራ ቡና – ይዘት",
    "featured.lumora.category": "ሶሻል ሚዲያ አስተዳደር",
    "featured.view_all": "ሁሉንም ስራዎች ይመልከቱ",
    "featured.footer_note": "ጥራት ያላቸው ውጤቶች በ6-8 ሳምንታት ውስጥ።",

    // Testimonials
    "testimonial.badge": "ምስክርነት",
    "testimonial.title": "የደንበኞች አስተያየት",
    "testimonial.subtitle": "አጋሮቻችን ስለ እኛ ምን ይላሉ?",
    "testimonial.ethio.quote":
      "ጥላ ዲጂታልስ ተደራሽነታችንን ቀይሮታል። ስራቸው ዓለም አቀፍ ደረጃውን የጠበቀ ነው።",
    "testimonial.ethio.name": "አበበ ከበደ",
    "testimonial.ethio.role": "የማርኬቲንግ ዳይሬክተር",
    "testimonial.lumora.quote": "ያየነው የስራ ጥራት እና እድገት ከጠበቅነው በላይ ነበር።",
    "testimonial.lumora.name": "ሰላማዊት ሃይሌ",
    "testimonial.lumora.role": "ዋና ስራ አስፈጻሚ",
    "testimonial.nexus.quote":
      "የዘመኑን የዲጂታል አለም ጠንቅቆ የሚያውቅ በመረጃ ላይ የተመሰረተ ቡድን ነው።",
    "testimonial.nexus.name": "ዳዊት ዮሐንስ",
    "testimonial.nexus.role": "የዲጂታል ስራ አስኪያጅ",

    // Contact
    "contact.title": "ያግኙን",
    "contact.subtitle": "ጉዞዎን ይጀምሩ",
    "contact.description": "የሚሰሩት ፕሮጀክት አለዎት? እንዴት ልንረዳዎ እንደምንችል እንወያይ።",
    "contact.name": "ሙሉ ስም",
    "contact.company": "የድርጅት ስም",
    "contact.email": "ኢሜይል",
    "contact.message": "መልዕክት...",
    "contact.send": "ይላኩ",
    "contact.address_label": "አድራሻ",
    "contact.address_sub": "ቦሌ፣ አዲስ አበባ፣ ኢትዮጵያ",

    // Footer
    "footer.description": "ለታላላቅ ብራንዶች የተሰራ የዲጂታል ስኬት አጋር።",
    "footer.company": "ድርጅት",
    "footer.about": "ስለ እኛ",
    "footer.process": "አሰራራችን",
    "footer.careers": "ስራ",
    "footer.contact": "ያግኙን",
    "footer.services": "አገልግሎቶች",
    "footer.s1": "ሶሻል ሚዲያ",
    "footer.s2": "የይዘት ዝግጅት",
    "footer.s3": "ፕሮዳክሽን",
    "footer.s4": "የፅሁፍ ዝግጅት",
    "footer.s5": "UI/UX ዲዛይን",
    "footer.s6": "ስትራቴጂ",
    "footer.privacy": "ደህንነት",
    "footer.terms": "ደንቦች",
    "footer.legal": "ህጋዊ",
    "footer.built_by": "ለስኬታማ ብራንዶች የታነጸ",
  },
};
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language") as Language | null;
    return saved && (saved === "en" || saved === "am") ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
