"use client"

import { useState } from "react"
import { ChevronDown, Star } from "lucide-react"

const reviewData = {
  average: 4.8,
  total: 383,
  breakdown: [
    { stars: 5, count: 346 },
    { stars: 4, count: 12 },
    { stars: 3, count: 18 },
    { stars: 2, count: 2 },
    { stars: 1, count: 5 },
  ],
}

function StarIcon({ filled, half }: { filled: boolean; half?: boolean }) {
  if (half) {
    return (
      <span className="relative inline-block w-6 h-6">
        <Star className="absolute inset-0 w-6 h-6 text-[#e0e0e0] fill-[#e0e0e0]" />
        <span className="absolute inset-0 w-3 h-6 overflow-hidden">
          <Star className="w-6 h-6 text-[#d4a017] fill-[#d4a017]" />
        </span>
      </span>
    )
  }
  return (
    <Star
      className={`w-6 h-6 ${filled ? "text-[#d4a017] fill-[#d4a017]" : "text-[#e0e0e0] fill-[#e0e0e0]"}`}
    />
  )
}

function RatingStars({ rating, size = "lg" }: { rating: number; size?: "sm" | "lg" }) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.3 && rating - full < 0.8
  const starSize = size === "sm" ? "w-4 h-4" : "w-6 h-6"

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        if (i <= full) {
          return (
            <Star
              key={i}
              className={`${starSize} text-[#d4a017] fill-[#d4a017]`}
            />
          )
        }
        if (i === full + 1 && hasHalf) {
          return (
            <span key={i} className={`relative inline-block ${starSize}`}>
              <Star className={`absolute inset-0 ${starSize} text-[#e0e0e0] fill-[#e0e0e0]`} />
              <span className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
                <Star className={`${starSize} text-[#d4a017] fill-[#d4a017]`} />
              </span>
            </span>
          )
        }
        return (
          <Star
            key={i}
            className={`${starSize} text-[#e0e0e0] fill-[#e0e0e0]`}
          />
        )
      })}
    </div>
  )
}

export function ProductReviews() {
  const [filter, setFilter] = useState("todas")
  const [showDropdown, setShowDropdown] = useState(false)
  const maxCount = Math.max(...reviewData.breakdown.map((b) => b.count))

  return (
    <section className="border-t border-[#e5e5e5] py-10 mt-8">
      <div className="max-w-md mx-auto text-center">
        {/* Title */}
        <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Avaliacoes</h2>

        {/* Big rating number */}
        <p className="text-6xl font-bold text-[#1a1a1a] mb-2">{reviewData.average}</p>

        {/* Stars */}
        <div className="flex justify-center mb-2">
          <RatingStars rating={reviewData.average} />
        </div>

        {/* Total reviews */}
        <p className="text-sm text-[#777] mb-8">
          {reviewData.total} avaliacoes
        </p>

        {/* Breakdown bars */}
        <div className="space-y-2.5 mb-8">
          {reviewData.breakdown.map((row) => (
            <div key={row.stars} className="flex items-center gap-2">
              <span className="text-sm text-[#555] w-3 text-right">{row.stars}</span>
              <Star className="w-4 h-4 text-[#d4a017] fill-[#d4a017] shrink-0" />
              <div className="flex-1 h-3 bg-[#e8e8e8] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#d4a017] rounded-full transition-all"
                  style={{ width: `${(row.count / maxCount) * 100}%` }}
                />
              </div>
              <span className="text-sm text-[#555] w-8 text-right">{row.count}</span>
            </div>
          ))}
        </div>

        {/* Write review button */}
        <button
          type="button"
          className="w-full bg-[#333333] hover:bg-[#1a1a1a] text-[#ffffff] font-semibold text-sm py-3.5 rounded-full transition-colors mb-6"
        >
          Escrever uma avaliacao
        </button>

        {/* Filter dropdown */}
        <div className="relative inline-block w-full max-w-[200px]">
          <button
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center justify-between w-full border border-[#ddd] rounded-full px-5 py-2.5 text-sm text-[#333] bg-[#ffffff] hover:border-[#bbb] transition-colors"
          >
            <span>{filter === "todas" ? "Todas" : `${filter} estrelas`}</span>
            <ChevronDown className={`w-4 h-4 text-[#999] transition-transform ${showDropdown ? "rotate-180" : ""}`} />
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#ffffff] border border-[#ddd] rounded-lg shadow-lg z-10 overflow-hidden">
              <button
                type="button"
                onClick={() => { setFilter("todas"); setShowDropdown(false) }}
                className="w-full text-left px-5 py-2.5 text-sm text-[#333] hover:bg-[#f5f5f5] transition-colors"
              >
                Todas
              </button>
              {[5, 4, 3, 2, 1].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => { setFilter(String(s)); setShowDropdown(false) }}
                  className="w-full text-left px-5 py-2.5 text-sm text-[#333] hover:bg-[#f5f5f5] transition-colors"
                >
                  {s} estrelas
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
