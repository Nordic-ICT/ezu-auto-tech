export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price?: number;
  currency?: string;
  stockStatus: 'In Stock' | 'Low Stock' | 'Pre-Order';
  specs: Record<string, string>;
  imageUrl: string;
  branchId: string;
}

export interface Branch {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  coordinates: { lat: number; lng: number };
  contactPhone: string;
  email: string;
  imageUrl: string;
  services: string[];
}

export interface QuoteItem {
  product: Product;
  quantity: number;
}

export enum PageRoutes {
  HOME = '/',
  BRANCHES = '/branches',
  PRODUCTS = '/products',
  ABOUT = '/about',
  CONTACT = '/contact',
}
