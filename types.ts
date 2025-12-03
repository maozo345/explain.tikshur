import { LucideIcon } from 'lucide-react';

export interface VideoProps {
  src: string;
  title: string;
  isYouTube?: boolean;
}

export interface FeatureItem {
  text: string;
  icon?: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  text: string;
}