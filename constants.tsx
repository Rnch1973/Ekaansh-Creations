import { 
  Gift, 
  TrendingUp, 
  DollarSign, 
  Globe, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Heart,
  ShoppingCart,
  Zap,
  Layout,
  Search
} from 'lucide-react';
import { NavItem, ServiceItem, PackageItem, Testimonial, AddOn } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  // Admin link hidden from main nav usually, but accessible via /admin
];

export const PRIMARY_SERVICES: ServiceItem[] = [
  { title: "Monetizable Website Dev", description: "Complete setup of a site ready to earn.", icon: Layout },
  { title: "Niche Research", description: "Identifying high-profit, low-competition niches.", icon: Search },
  { title: "AdSense Integration", description: "Seamless approval and setup for ad revenue.", icon: DollarSign },
  { title: "AI-Content Setup", description: "Automated article generation for passive growth.", icon: Zap },
  { title: "Affiliate Systems", description: "Integration with top affiliate networks.", icon: Users },
  { title: "E-commerce Ready", description: "Dropshipping or digital product store setup.", icon: ShoppingCart },
];

export const GIFT_PACKAGES: ServiceItem[] = [
  { title: "Wedding Gift Package", description: "A joint digital asset for the couple's financial start.", icon: Heart },
  { title: "Child Future Security", description: "An educational fund that grows with them.", icon: ShieldCheck },
  { title: "Retirement Income", description: "Passive income stream for the golden years.", icon: TrendingUp },
  { title: "Corporate Gifting", description: "Brand assets given to valuable partners.", icon: Briefcase },
];

export const PRICING_PACKAGES: PackageItem[] = [
  {
    id: 'starter',
    title: 'Starter Monetizable',
    subtitle: 'Perfect for beginners',
    price: '$199',
    features: ['1 Niche Website', 'Basic SEO', '10 AI Articles or AI Tools', 'AdSense Friendly', '3 Month Support']
  },
  {
    id: 'pro',
    title: 'Professional',
    subtitle: 'Serious income potential',
    price: '$399',
    features: ['1 Premium Website', 'SEO promotion', '30 AI Articles or AI Tools', 'AdSense Setup', '6 Month support'],
    recommended: true
  },
  {
    id: 'premium',
    title: 'Lifetime Income',
    subtitle: 'Fully automated ecosystem',
    price: '$999',
    features: ['Fully Automated Ecosystem', 'SEO promotion', '50+ Articles or AI Tools', 'AdSense Setup', '12 Month support']
  }
];

export const ADD_ONS: AddOn[] = [
  { id: 'extra_ai', name: 'Extra 50 AI Articles', price: 150 },
  { id: 'multi_lang', name: 'Multi-language Support', price: 200 },
  { id: 'branding', name: 'Premium Branding Kit', price: 100 },
  { id: 'seo_boost', name: 'Advanced SEO Backlinks', price: 300 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Anjali & Rahul",
    role: "Newlyweds",
    quote: "My father gifted us a travel blog for our wedding. It started earning within 3 months! Best gift ever.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Mr. Sharma",
    role: "Retired Banker",
    quote: "I was worried about inflation affecting my pension. This news website generates a steady side income for me.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Priya D.",
    role: "Student",
    quote: "My parents bought the 'Child Future' package. The tech review site pays for my college tuition now.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const INCOME_STREAMS = [
  { label: "Google AdSense", icon: DollarSign },
  { label: "Affiliate Marketing", icon: Users },
  { label: "E-commerce", icon: ShoppingCart },
  { label: "YouTube Automation", icon: TrendingUp },
];