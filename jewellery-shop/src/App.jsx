import React, { useMemo, useState } from 'react'
import CategoryMenu from './components/CategoryMenu.jsx'
import JewelleryCard from './components/JewelleryCard.jsx'
import { CATEGORIES, ITEMS } from './data.js'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0])

  const filteredItems = useMemo(
    () => ITEMS.filter((it) => it.category === selectedCategory),
    [selectedCategory]
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Jewellery Shop</h1>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        <section>
          <h2 className="text-sm font-semibold text-slate-600 mb-3">Categories</h2>
          <CategoryMenu
            categories={CATEGORIES}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </section>

        <section>
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-lg font-semibold">{selectedCategory}</h2>
            <p className="text-sm text-slate-600">{filteredItems.length} items</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {filteredItems.map((item) => (
              <JewelleryCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Jewellery Shop</p>
      </footer>
    </div>
  )
}

