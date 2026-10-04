export type NavTab = 'home' | 'stl-gallery' | 'games-rules' | 'merchant-directory' | 'patron-hub';

export interface DispatchItem {
  id: string;
  dispatchNumber: number;
  title: string;
  date: string;
  category: 'Monthly Drop' | 'Behind the Sculpt' | 'Rules & Lore' | 'Community';
  summary: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  fullContent?: string;
  author: string;
  patreonUrl: string;
}

export interface ShowcaseModel {
  id: string;
  title: string;
  faction: string;
  category: 'Weird War WWII' | 'Historical Feudal' | 'Dark Fantasy' | 'War Machines';
  period: string;
  scale: '28mm' | '32mm' | '28mm & 32mm Dual';
  piecesCount: number;
  preSupported: boolean;
  coverImage: string;
  galleryImages: string[];
  description: string;
  loreSnippet: string;
  includes: string[];
  releaseDate: string;
  featured?: boolean;
}

export interface Merchant {
  id: string;
  name: string;
  region: 'US' | 'Europe' | 'UK' | 'Asia/Oceania';
  location: string;
  countryCode: string;
  platform: 'Etsy Store' | 'Shopify' | 'Official Webstore' | 'eBay Pro';
  storeUrl: string;
  hardware: string;
  resinType: string;
  specialty: string;
  rating: number;
  reviewsCount: number;
  certifiedSince: string;
  shippingHighlights: string;
  licensedTiers: string[];
}

export interface Faction {
  id: string;
  name: string;
  subtitle: string;
  allegiance: string;
  badgeCode: string;
  summary: string;
  doctrine: string;
  keyUnits: string[];
  iconAccent: string;
}
