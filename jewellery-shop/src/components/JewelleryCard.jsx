import React, { useMemo, useState } from 'react'

export default function JewelleryCard({ item }) {
  const [flipped, setFlipped] = useState(false)
  const finalPrice = useMemo(() => item.carats * item.basePrice, [item])

  return (
    <div
      className="[perspective:1200px] group"
      onClick={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setFlipped((f) => !f)
      }}
    >
      <div
        className={[
          'relative h-64 w-full sm:h-72 md:h-80',
          'transition-transform duration-500 [transform-style:preserve-3d] cursor-pointer',
          flipped ? '[transform:rotateY(180deg)]' : ''
        ].join(' ')}
      >
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-card border border-slate-200 bg-white [backface-visibility:hidden]"
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-40 w-full object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-base font-semibold text-slate-900 truncate">{item.name}</h3>
            <p className="text-sm text-slate-600 mt-1">Base price (per carat)</p>
            <p className="text-lg font-semibold mt-1">₹{item.basePrice.toLocaleString()}</p>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-card border border-slate-200 bg-white [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
          <div className="h-40 w-full bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center text-white">
            <span className="text-lg font-semibold">Details</span>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-base font-semibold text-slate-900">{item.name}</h3>
            <div className="grid grid-cols-3 gap-2 text-sm text-slate-700">
              <div>
                <p className="text-slate-500">Weight</p>
                <p className="font-medium">{item.weight} g</p>
              </div>
              <div>
                <p className="text-slate-500">Carats</p>
                <p className="font-medium">{item.carats}</p>
              </div>
              <div>
                <p className="text-slate-500">Base</p>
                <p className="font-medium">₹{item.basePrice.toLocaleString()}</p>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-200">
              <p className="text-sm text-slate-500">Final price</p>
              <p className="text-xl font-bold">₹{finalPrice.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

