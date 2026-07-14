import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/routes/RootLayout'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import CategoryPage from '@/pages/CategoryPage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import AboutArtisanPage from '@/pages/AboutArtisanPage'
import GalleryPage from '@/pages/GalleryPage'
import ContactPage from '@/pages/ContactPage'
import WishlistPage from '@/pages/WishlistPage'
import NotFoundPage from '@/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/category/:id', element: <CategoryPage /> },
      { path: '/product/:slug', element: <ProductDetailPage /> },
      { path: '/about-artisan', element: <AboutArtisanPage /> },
      { path: '/gallery', element: <GalleryPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/wishlist', element: <WishlistPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
