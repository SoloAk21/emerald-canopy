// src/types/index.ts
export interface Feature {
  icon: React.ComponentType<any>;
  titleKey: string;
  descKey: string;
  metricKey: string;
}

export interface Service {
  id: string;
  icon: React.ComponentType<any>;
  titleKey: string;
  descKey: string;
  accent: "emerald" | "blue" | "amber";
  iconBg: string;
  features: string[];
}

export interface Project {
  id: number;
  titleKey: string;
  categoryKey: string;
  image: string;
  metrics: Array<{ label: string; value: string }>;
  year: string;
}

export interface Testimonial {
  quoteKey: string;
  nameKey: string;
  roleKey: string;
  rating: number;
}

export interface ClientLogo {
  id: number;
  name: string;
  src: string;
}
