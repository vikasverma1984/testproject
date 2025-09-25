import React from 'react'

export default function CategoryMenu({ categories, selected, onSelect }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={[
            'rounded-xl px-4 py-3 text-sm font-medium transition shadow-sm',
            'border focus:outline-none focus:ring-2 focus:ring-slate-400/40',
            selected === cat
              ? 'bg-slate-900 text-white border-slate-900 shadow-card'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          ].join(' ')}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

