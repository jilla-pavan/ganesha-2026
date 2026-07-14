import type { Category } from '@/types'

export const categories: Category[] = [
  {
    id: 'cat-eco',
    name: 'Eco-Friendly',
    sanskritName: 'Shadu Mitti',
    description: 'Natural clay idols that dissolve gently, honouring water bodies.',
    image: 'https://picsum.photos/seed/shadu-clay-idol/700/900',
    productCount: 18,
  },
  {
    id: 'cat-premium',
    name: 'Premium Collection',
    sanskritName: 'Rajasi',
    description: 'Hand-finished idols with gold leaf detailing for the home mandir.',
    image: 'https://picsum.photos/seed/gold-leaf-idol/700/900',
    productCount: 12,
  },
  {
    id: 'cat-decor',
    name: 'Decor & Mandir',
    sanskritName: 'Mandir Shringar',
    description: 'Brass diyas, torans and backdrops to complete the setting.',
    image: 'https://picsum.photos/seed/brass-diya-decor/700/900',
    productCount: 24,
  },
  {
    id: 'cat-gifting',
    name: 'Premium Gifting',
    sanskritName: 'Upahaar',
    description: 'Curated gift boxes for family, friends and corporate clients.',
    image: 'https://picsum.photos/seed/gift-box-festival/700/900',
    productCount: 9,
  },
]
