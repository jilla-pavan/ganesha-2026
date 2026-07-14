export interface Product {
  id: string
  slug: string
  name: string
  category: string
  material: string
  heightInches: number
  price: number
  compareAtPrice?: number
  rating: number
  reviewCount: number
  image: string
  hoverImage?: string
  ecoFriendly?: boolean
  badge?: 'Bestseller' | 'New' | 'Limited' | 'Premium'
  story?: string
  deliveryDays: number
}

export interface Category {
  id: string
  name: string
  sanskritName?: string
  description: string
  image: string
  productCount: number
}

export interface Testimonial {
  id: string
  name: string
  location: string
  quote: string
  rating: number
  avatar: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface ProcessStep {
  id: string
  title: string
  description: string
  image: string
}
