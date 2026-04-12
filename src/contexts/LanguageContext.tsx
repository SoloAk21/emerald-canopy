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
    // Header
    "nav.shield": "Protect",
    "nav.amplify": "Scale",
    "nav.insights": "Data",
    "nav.work": "Portfolio",
    "nav.connect": "Contact",
    "cta.strategy_call": "Book a Strategy Call",

    // Hero
    "hero.title": "Build Digital \nExperiences That Matter",
    "hero.subtitle":
      "We design and develop modern, scalable, and human-centered digital products that elevate your brand.",
    "hero.cta_start": "Get Started",
    "hero.cta_more": "Learn More",

    // Services General
    "services.badge": "OUR EXPERTISE",
    "services.title": "Results that actually matter",
    "services.subtitle":
      "High performance digital solutions built on deep data and creative precision",
    "services.cta": "Ready to dominate your niche?",
    "services.cta_btn": "Explore our services →",

    // Service: Shield
    "services.shield.title": "Brand Shield",
    "services.shield.desc":
      "Elite reputation management and 24/7 brand monitoring to keep you safe.",
    "services.shield.f1": "Enterprise level security",
    "services.shield.f2": "Real time crisis detection",
    "services.shield.f3": "Rapid response protocols",
    "services.shield.m1_val": "99.9%",
    "services.shield.m1_lab": "Uptime SLA",
    "services.shield.m2_val": "24/7",
    "services.shield.m2_lab": "Support",
    "services.shield.impact_val": "2.5M+",
    "services.shield.impact_lab": "Protected Users",

    // Service: Growth
    "services.growth.title": "Strategic Growth",
    "services.growth.desc":
      "AI enhanced intelligence that turns market data into your biggest advantage.",
    "services.growth.f1": "Predictive performance",
    "services.growth.f2": "Market intelligence",
    "services.growth.f3": "ROI focused scaling",
    "services.growth.m1_val": "+312%",
    "services.growth.m1_lab": "Avg. Growth",
    "services.growth.m2_val": "AI-Powered",
    "services.growth.m2_lab": "Analytics",
    "services.growth.impact_val": "45%",
    "services.growth.impact_lab": "Faster Time-to-Market",

    // Service: Viral
    "services.viral.title": "Viral Engineering",
    "services.viral.desc":
      "Content designed to spread. We build influence that lasts.",
    "services.viral.f1": "Algorithmic optimization",
    "services.viral.f2": "Community loyalty",
    "services.viral.f3": "Organic reach peak",
    "services.viral.m1_val": "10M+",
    "services.viral.m1_lab": "Reach",
    "services.viral.m2_val": "Organic",
    "services.viral.m2_lab": "Growth",
    "services.viral.impact_val": "87%",
    "services.viral.impact_lab": "Engagement Rate",

    // Track Record

    "trackrecord.title": "A history of excellence",
    "trackrecord.subtitle":
      "We help the world’s most ambitious brands scale faster",
    "trackrecord.trusted": "Trusted by industry leaders",
    "trackrecord.cta": "Join 500+ successful partners",
    "trackrecord.cta_sub": "Stop reacting to the market and start leading it.",
    "trackrecord.cta_btn": "See the case studies",

    // Edge

    "edge.title": "Why partners",
    "edge.brand": "Choose Tila Digitals",
    "edge.metric_label": "Key Metric",
    "edge.strategy.title": "Elite Strategy",
    "edge.strategy.desc":
      "We don’t guess. We engineer every outcome with meticulous planning and foresight.",
    "edge.strategy.m": "15+ Years Experience",
    "edge.execution.title": "Perfect Execution",
    "edge.execution.desc":
      "Speed meets precision. We turn complex ideas into seamless digital realities.",
    "edge.execution.m": "2x Faster Delivery",
    "edge.expertise.title": "Modern Mastery",
    "edge.expertise.desc":
      "A team of digital natives who understand exactly how today’s algorithms think.",
    "edge.expertise.m": "50+ Experts Global",
    "edge.results.title": "Data Backed ROI",
    "edge.results.desc":
      "Growth you can see. We provide transparent reports and measurable financial wins.",
    "edge.results.m": "98% Satisfaction",

    // Edge "What Sets Us Apart"
    "edge.why_us_title": "What Sets Us Apart",
    "edge.why_us_sub": "Beyond Expectations",
    "edge.why_us_desc":
      "We don't just deliver solutions — we create lasting partnerships",
    "edge.f1": "AI-Driven Insights",
    "edge.f2": "Real-time Analytics",
    "edge.f3": "Scalable Solutions",
    "edge.f4": "24/7 Support",
    "edge.f5": "Custom Development",
    "edge.f6": "Enterprise Security",
    "edge.cta": "Ready to scale?",
    "edge.cta_sub": "Let's build your digital legacy together.",
    "edge.cta_btn": "Get a Free Audit",

    // Featured Work
    "featured.badge": "SELECTED WORK",
    "featured.title": "Portfolio Highlights",
    "featured.subtitle": "From high level strategy to full scale production",
    "featured.ethio.title": "Ethio Telecom – Digital Growth",
    "featured.ethio.category":
      "Social Strategy & Professional Video Production",
    "featured.nexus.title": "Nexus Bank – Market Entry",
    "featured.nexus.category":
      "Full Launch Campaign (Creative, Video & Management)",
    "featured.lumora.title": "Lumora Coffee – Content Ecosystem",
    "featured.lumora.category":
      "Creative Scripting, Production & Daily Management",
    "featured.view_all": "View All Projects",
    "featured.footer_note":
      "Each project represents 6-8 weeks of strategic execution",

    // Testimonials
    "testimonial.badge": "RECOGNITION",
    "testimonial.title": "Client Feedback",
    "testimonial.subtitle": "Join 500+ satisfied clients worldwide",
    "testimonial.ethio.quote":
      "Tila Digitals transformed our social presence into a true growth engine. Their full service approach is exactly what a modern brand needs.",
    "testimonial.ethio.name": "Abebe Kebede",
    "testimonial.ethio.role": "Marketing Director, Ethio Telecom",
    "testimonial.lumora.quote":
      "They managed everything from the first script to final production. The quality and growth we saw were remarkable.",
    "testimonial.lumora.name": "Selamawit Haile",
    "testimonial.lumora.role": "CEO, Lumora Coffee",
    "testimonial.nexus.quote":
      "The most creative and data-driven team we have worked with. They truly understand the digital landscape.",
    "testimonial.nexus.name": "Dawit Yohannes",
    "testimonial.nexus.role": "Digital Lead, Nexus Bank",

    // Contact
    "contact.title": "Let's Connect",
    "contact.subtitle": "Start your journey",
    "contact.description":
      "Have a project in mind? Let's discuss how we can help your brand grow.",
    "contact.name": "Your name",
    "contact.company": "Company (optional)",
    "contact.email": "Email address",
    "contact.message": "Tell us about your project...",
    "contact.send": "Send Message",
    "contact.address_label": "Addis Ababa, Ethiopia",
    "contact.address_sub": "Bole, Next to Edna Mall",

    // Footer
    "footer.description":
      "Built for ambitious brands who want to own the digital future.",
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.process": "Our Process",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.services": "Services",
    "footer.s1": "Social Media Management",
    "footer.s2": "Content Creation",
    "footer.s3": "Video Production",
    "footer.s4": "Script Writing",
    "footer.s5": "Graphic Design",
    "footer.s6": "Digital Strategy",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.legal": "Legal",
    "footer.built_by": "Built for ambitious brands",
  },

  am: {
    // Header
    "nav.shield": "ጥበቃ",
    "nav.amplify": "እድገት",
    "nav.insights": "ትንተና",
    "nav.work": "ስራዎች",
    "nav.connect": "ያግኙን",
    "cta.strategy_call": "ስትራቴጂ ይንደፉ",

    // Hero
    "hero.title": "ትርጉም ያላቸው \nዲጂታል ልምዶችን ይገንቡ",
    "hero.subtitle":
      "ብራንድዎን ከፍ የሚያደርጉ ዘመናዊ፣ አስተማማኝ እና ሰው-ተኮር ዲጂታል ምርቶችን እንነድፋለን እንዲሁም እናለማለን።",
    "hero.cta_start": "ይጀምሩ",
    "hero.cta_more": "የበለጠ ይረዱ",

    // Services General
    "services.badge": "የምንሰጣቸው አገልግሎቶች",
    "services.title": "ተጨባጭ ለውጥ የሚያመጡ ስራዎች",
    "services.subtitle": "በዘመናዊ ቴክኖሎጂ እና በመረጃ ትንተና ላይ የተመሰረቱ የዲጂታል መፍትሄዎች",
    "services.cta": "የዲጂታል ተደራሽነትዎን ለመቀየር ዝግጁ ነዎት?",
    "services.cta_btn": "ሁሉንም ይመልከቱ →",

    // Service: Shield
    "services.shield.title": "የብራንድ ጥበቃ",
    "services.shield.desc": "ለዝናዎ አስተማማኝ ጥበቃ እና የ24 ሰዓት የክትትል አገልግሎት።",
    "services.shield.f1": "ከፍተኛ የደህንነት ጥበቃ",
    "services.shield.f2": "የቀጥታ ስጋት ክትትል",
    "services.shield.f3": "ፈጣን የመፍትሄ እርምጃዎች",
    "services.shield.m1_val": "99.9%",
    "services.shield.m1_lab": "የአገልግሎት እርግጠኝነት",
    "services.shield.m2_val": "24/7",
    "services.shield.m2_lab": "ድጋፍ",
    "services.shield.impact_val": "2.5M+",
    "services.shield.impact_lab": "የተጠበቁ ተጠቃሚዎች",

    // Service: Growth
    "services.growth.title": "ስትራቴጂካዊ እድገት",
    "services.growth.desc": "ገበያውን ለመምራት የሚያግዙ በAI የታገዙ ጥልቅ ግንዛቤዎች።",
    "services.growth.f1": "የትንበያ ቀመሮች",
    "services.growth.f2": "የገበያ ጥናት",
    "services.growth.f3": "ትርፋማነትን ማሳደግ",
    "services.growth.m1_val": "+312%",
    "services.growth.m1_lab": "አማካኝ እድገት",
    "services.growth.m2_val": "በAI የታገዘ",
    "services.growth.m2_lab": "ትንተና",
    "services.growth.impact_val": "45%",
    "services.growth.impact_lab": "ፈጣን የገበያ ተደራሽነት",

    // Service: Viral
    "services.viral.title": "ተፅዕኖ ፈጣሪ ይዘቶች",
    "services.viral.desc": "ሰፊ ተደራሽነትን እና ተከታታይነትን ታሳቢ አድርገው የተሰሩ ስራዎች።",
    "services.viral.f1": "የተደራሽነት ማሻሻያ",
    "services.viral.f2": "የተከታታይ ግንባታ",
    "services.viral.f3": "የተሳትፎ ልቀት",
    "services.viral.m1_val": "10M+",
    "services.viral.m1_lab": "ተደራሽነት",
    "services.viral.m2_val": "ኦርጋኒክ",
    "services.viral.m2_lab": "እድገት",
    "services.viral.impact_val": "87%",
    "services.viral.impact_lab": "የተሳትፎ ምጣኔ",

    // Track Record

    "trackrecord.title": "የተረጋገጠ የስራ ታሪክ",
    "trackrecord.subtitle": "በዓለም ዙሪያ ባሉ ስኬታማ ተቋማት የታመነ",
    "trackrecord.trusted": "በዘርፉ መሪዎች የታመነ",
    "trackrecord.cta": "ከ500 በላይ ደንበኞቻችንን ይቀላቀሉ",
    "trackrecord.cta_sub": "ገበያውን ከመከተል ይልቅ መሪ ይሁኑ።",
    "trackrecord.cta_btn": "ተለይተው የቀረቡ ስራዎች",

    // Edge
    "edge.badge": "የእኛ ልዩነት",
    "edge.title": "ብራንዶች ለምን ",
    "edge.brand": "ጥላ ዲጂታልስን ይመርጣሉ?",
    "edge.metric_label": "ቁልፍ መለኪያ",
    "edge.strategy.title": "ስልታዊ ጥንቃቄ",
    "edge.strategy.desc":
      "እኛ ስራዎችን በዘፈቀደ አንሰራም፤ እያንዳንዱን እርምጃ በጥንቃቄ አቅደን ውጤቱን እናረጋግጣለን።",
    "edge.strategy.m": "15+ ዓመታት ልምድ",
    "edge.execution.title": "ጥራት ያለው አፈጻጸም",
    "edge.execution.desc":
      "ከሃሳብ እስከ ትግበራ፤ እያንዳንዱ ዝርዝር በትክክለኛ ፍጥነት እና ጥራት ይከናወናል።",
    "edge.execution.m": "2 እጥፍ ፈጣን አፈጻጸም",
    "edge.expertise.title": "ጥልቅ ተሞክሮ",
    "edge.expertise.desc": "የዘመኑን የዲጂታል አለም እና አሰራር ጠንቅቀው የሚያውቁ ባለሙያዎች ስብስብ።",
    "edge.expertise.m": "50+ ዓለም አቀፍ ባለሙያዎች",
    "edge.results.title": "ግልጽ ውጤቶች",
    "edge.results.desc": "በመረጃ የተደገፉ እና ለንግድዎ ትርፍ የሚያስመዘግቡ ውጤቶችን እናቀርባለን።",
    "edge.results.m": "98% የደንበኞች እርካታ",

    // Edge "What Sets Us Apart"
    "edge.why_us_title": "የእኛ ልዩነቶች",
    "edge.why_us_sub": "ከጠበቁት በላይ",
    "edge.why_us_desc": "እኛ መፍትሄዎችን ብቻ አንሰጥም — ዘላቂ አጋርነትን እንፈጥራለን",
    "edge.f1": "በAI የተደገፉ ግንዛቤዎች",
    "edge.f2": "የቀጥታ መረጃ ትንተና",
    "edge.f3": "አድጊ መፍትሄዎች",
    "edge.f4": "የ24 ሰዓት ድጋፍ",
    "edge.f5": "ብጁ የቴክኖሎጂ ልማት",
    "edge.f6": "ከፍተኛ የደህንነት ጥበቃ",
    "edge.cta": "ለእድገት ዝግጁ ነዎት?",
    "edge.cta_sub": "የዲጂታል ታሪክዎን አብረን እንገንባ።",
    "edge.cta_btn": "ነፃ የስትራቴጂ ትንተና ያግኙ",

    // Featured Work
    "featured.badge": "አበይት ስራዎች",
    "featured.title": "ተለይተው የቀረቡ",
    "featured.subtitle": "ከስትራቴጂ ነደፋ እስከ ተሟላ የቪዲዮ ምርት",
    "featured.ethio.title": "ኢትዮ ቴሌኮም – ዲጂታል እድገት",
    "featured.ethio.category": "የማህበራዊ ሚዲያ ስትራቴጂ እና የቪዲዮ ምርት",
    "featured.nexus.title": "ኔክሰስ ባንክ – አዲስ ብራንድ",
    "featured.nexus.category": "የተሟላ የዘመቻ ስራ (ዲዛይን፣ ቪዲዮ እና አስተዳደር)",
    "featured.lumora.title": "ሉሞራ ቡና – የተቀናጀ ይዘት",
    "featured.lumora.category": "የፅሁፍ ዝግጅት፣ ቀረጻ እና ዕለታዊ አስተዳደር",
    "featured.view_all": "ሁሉንም ስራዎች ይመልከቱ",
    "featured.footer_note": "እያንዳንዱ ፕሮጀክት ከ6-8 ሳምንታት ጥልቅ ስራ ውጤት ነው",

    // Testimonials
    "testimonial.badge": "ምስክርነት",
    "testimonial.title": "ደንበኞቻችን ስለ እኛ",
    "testimonial.subtitle": "በዓለም ዙሪያ ያሉ 500+ ደንበኞችን ይቀላቀሉ",
    "testimonial.ethio.quote":
      "ጥላ ዲጂታልስ የማህበራዊ ሚዲያ ተደራሽነታችንን ወደ ተሻለ ደረጃ አሸጋግሮታል። ከስትራቴጂ እስከ ምርት ያላቸው ብቃት እጅግ የሚደነቅ ነው።",
    "testimonial.ethio.name": "አበበ ከበደ",
    "testimonial.ethio.role": "የማርኬቲንግ ዳይሬክተር፣ ኢትዮ ቴሌኮም",
    "testimonial.lumora.quote":
      "ከፅሁፍ ዝግጅት እስከ ድህረ-ምርት ድረስ ሁሉንም በከፍተኛ ብቃት ተወጥተዋል። ያስመዘገቡት ውጤት ከጠበቅነው በላይ ነው።",
    "testimonial.lumora.name": "ሰላማዊት ሃይሌ",
    "testimonial.lumora.role": "ዋና ሥራ አስፈጻሚ፣ ሉሞራ ቡና",
    "testimonial.nexus.quote":
      "በጣም ፈጣሪ እና በመረጃ ላይ የተመሰረተ ስራ የሚሰሩ ባለሙያዎች ናቸው። የዲጂታሉን አለም ጠንቅቀው ያውቁታል።",
    "testimonial.nexus.name": "ዳዊት ዮሐንስ",
    "testimonial.nexus.role": "የዲጂታል መሪ፣ ኔክሰስ ባንክ",

    // Contact
    "contact.title": "ያግኙን",
    "contact.subtitle": "ጉዞዎን ይጀምሩ",
    "contact.description": "የሚሰሩት ፕሮጀክት አለዎት? እንዴት ልንረዳዎ እንደምንችል እንወያይ።",
    "contact.name": "ስምዎ",
    "contact.company": "ድርጅት (ካለ)",
    "contact.email": "የኢሜይል አድራሻ",
    "contact.message": "ስለ ፕሮጀክቱ ያብራሩልን...",
    "contact.send": "መልዕክት ላክ",
    "contact.address_label": "አዲስ አበባ፣ ኢትዮጵያ",
    "contact.address_sub": "ቦሌ፣ ኤድና ሞል አጠገብ",

    // Footer
    "footer.description": "የነገውን የዲጂታል ዓለም ለመቆጣጠር ለሚሹ ብራንዶች የተሰራ።",
    "footer.company": "ድርጅት",
    "footer.about": "ስለ እኛ",
    "footer.process": "አሰራራችን",
    "footer.careers": "ስራ",
    "footer.contact": "ያግኙን",
    "footer.services": "አገልግሎቶች",
    "footer.s1": "የማህበራዊ ሚዲያ አስተዳደር",
    "footer.s2": "የይዘት ዝግጅት",
    "footer.s3": "የቪዲዮ ምርት",
    "footer.s4": "የፅሁፍ ዝግጅት",
    "footer.s5": "ግራፊክ ዲዛይን",
    "footer.s6": "ዲጂታል ስትራቴጂ",
    "footer.privacy": "የግል ደህንነት ፖሊሲ",
    "footer.terms": "የአጠቃቀም ደንቦች",
    "footer.legal": "ህጋዊ",
    "footer.built_by": "ለታላላቅ ብራንዶች የታነጸ",
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
