"use client"

import { Menu, Search, ShoppingCart } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="bg-[#ffffff] border-b border-[#e5e5e5]">
      <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button aria-label="Menu" className="text-[#1a1a1a]">
            <Menu className="h-6 w-6" />
          </button>
          <img
            src="/images/amg-capas-logo.png"
            alt="AMG Capas"
            width={130}
            height={45}
            className="h-10 w-auto object-contain"
          />
        </div>
        <div className="flex items-center gap-5">
          <button aria-label="Buscar" className="text-[#1a1a1a]">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Carrinho" className="relative text-[#1a1a1a]">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2.5 bg-[#1a8fc8] text-[#ffffff] text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
