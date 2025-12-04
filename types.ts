import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PackageItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface BlogPost {
  title: string;
  content: string;
  date: string;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
}