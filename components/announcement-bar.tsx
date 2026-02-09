"use client"

import { useEffect, useRef } from "react"

const announcements = [
  "Trocas e Devolucoes em ate 7 dias",
  "Frete Gratis para todo o Brasil",
  "Satisfacao Garantida ou dinheiro de volta",
  "Trocas e Devolucoes em ate 7 dias",
  "Frete Gratis para todo o Brasil",
  "Satisfacao Garantida ou dinheiro de volta",
]

function AmgMiniLogo() {
  return (
    <img
      src="/images/amg-capas-logo.png"
      alt="AMG Capas"
      width={66}
      height={20}
      className="h-5 w-auto object-contain mr-3 shrink-0"
      loading="eager"
    />
  )
}

export function AnnouncementBar() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let animationId: number
    let position = 0

    const animate = () => {
      position -= 0.5
      if (Math.abs(position) >= el.scrollWidth / 2) {
        position = 0
      }
      el.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="bg-[#1a1a1a] text-[#ffffff] overflow-hidden whitespace-nowrap py-2.5">
      <div ref={scrollRef} className="inline-flex items-center">
        {[...announcements, ...announcements].map((text, i) => (
          <div key={i} className="inline-flex items-center shrink-0">
            <AmgMiniLogo />
            <span className="text-xs font-medium tracking-wide mr-6">{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
