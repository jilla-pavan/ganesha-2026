import { useMemo, useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/common/Primitives'
import { ProductCard } from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { categories } from '@/data/categories'
import { cn } from '@/utils/cn'

const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Highest Rated'] as const

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [sort, setSort] = useState<(typeof sortOptions)[number]>('Recommended')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [ecoOnly, setEcoOnly] = useState(false)

  const filtered = useMemo(() => {
    let list = [...products]
    if (activeCategory) list = list.filter((p) => p.category === activeCategory)
    if (ecoOnly) list = list.filter((p) => p.ecoFriendly)
    
    if (sort === 'Price: Low to High') list.sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') list.sort((a, b) => b.price - a.price)
    if (sort === 'Highest Rated') list.sort((a, b) => b.rating - a.rating)
    return list
  }, [activeCategory, sort, ecoOnly])

  const FilterPanel = (
    <div className="flex flex-col gap-6 text-left">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-[#2D1B14] border-b border-neutral-200 pb-2">
          Categories
        </p>
        <div className="mt-3 flex flex-col gap-1">
          <button
            onClick={() => {
              setActiveCategory(null)
              setFiltersOpen(false)
            }}
            className={cn(
              'rounded-md px-3 py-2 text-left text-[13px] font-medium transition-colors outline-none',
              !activeCategory 
                ? 'bg-[#A33B23]/10 text-[#A33B23] font-bold' 
                : 'text-neutral-600 hover:bg-neutral-100'
            )}
          >
            All Idols
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCategory(c.name)
                setFiltersOpen(false)
              }}
              className={cn(
                'rounded-md px-3 py-2 text-left text-[13px] font-medium transition-colors outline-none',
                activeCategory === c.name 
                  ? 'bg-[#A33B23]/10 text-[#A33B23] font-bold' 
                  : 'text-neutral-600 hover:bg-neutral-100'
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <label className="flex cursor-pointer items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-3 shadow-sm select-none transition-colors hover:border-neutral-300">
        <span className="text-[13px] font-semibold text-[#2D1B14]">Eco-Friendly Only</span>
        <input
          type="checkbox"
          checked={ecoOnly}
          onChange={(e) => setEcoOnly(e.target.checked)}
          className="h-4 w-4 rounded accent-[#A33B23] cursor-pointer"
        />
      </label>
    </div>
  )

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      <PageHeader
        eyebrow="Shop"
        title="The Full Collection"
        description="Every masterpiece currently available from the Solapur workshop, made to order in small, intentional batches."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Shop' }]}
      />

      <section className="py-12">
        <Container className="max-w-6xl grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
          
          {/* Desktop Left Layout Aside panel */}
          <aside className="hidden lg:block sticky top-8 h-fit">{FilterPanel}</aside>

          {/* Right Product Grid Area */}
          <div>
            <div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-4">
              <button
                onClick={() => setFiltersOpen(true)}
                className="flex items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2D1B14] shadow-sm hover:bg-neutral-50 active:scale-98 lg:hidden"
              >
                <SlidersHorizontal size={13} /> Filters
              </button>
              
              <p className="text-[13px] font-medium text-neutral-500">
                Showing {filtered.length} {filtered.length === 1 ? 'idol' : 'idols'}
              </p>
              
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as (typeof sortOptions)[number])}
                className="ml-auto rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-[#2D1B14] shadow-sm outline-none focus:border-[#A33B23] cursor-pointer"
              >
                {sortOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            {/* Main Product Matrix */}
            <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {/* Minimalist Grid Fallback Empty State */}
            {filtered.length === 0 && (
              <div className="mt-16 text-center border border-dashed border-neutral-300 rounded-md p-10 bg-white/50">
                <p className="text-[13px] font-medium text-neutral-500">
                  No idols match these specific filter criteria — try clearing your active choices.
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Mobile Drawer Slide-Over Framework */}
      <div
        className={cn(
          'fixed inset-0 z-[70] bg-[#2D1B14]/40 backdrop-blur-xs transition-opacity duration-300 lg:hidden',
          filtersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setFiltersOpen(false)}
      >
        <div
          className={cn(
            'absolute left-0 top-0 h-full w-[80%] max-w-xs bg-white p-6 shadow-xl transition-transform duration-300 ease-out',
            filtersOpen ? 'translate-x-0' : '-translate-x-full'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-5 flex items-center justify-between border-b border-neutral-200 pb-3">
            <span className="font-display text-base font-bold text-[#2D1B14]">Filter Collection</span>
            <button 
              onClick={() => setFiltersOpen(false)} 
              aria-label="Close filters"
              className="p-1 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-800"
            >
              <X size={18} />
            </button>
          </div>
          {FilterPanel}
        </div>
      </div>
    </div>
  )
}