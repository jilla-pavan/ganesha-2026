import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { MobileCTA } from '@/components/layout/MobileCTA'
import { ScrollToTop } from '@/components/layout/ScrollToTop'

export function RootLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)]">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileCTA />
      <ScrollToTop/>
    </div>
  )
}
