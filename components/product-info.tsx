"use client"

import { useState } from "react"
import { CreditCard } from "lucide-react"
import { CarFinderWidget } from "@/components/car-finder-widget"

const variants = [
  {
    id: "preto",
    name: "Preto",
    color: "#111111",
    thumbnail: "/images/variante-preto.png",
    mainImage: "/images/variante-preto.png",
    price: "R$ 183,10",
  },
  {
    id: "caramelo",
    name: "Caramelo",
    color: "#C68B59",
    thumbnail: "/images/variante-caramelo.png",
    mainImage: "/images/variante-caramelo.png",
    price: "R$ 183,10",
  },
  {
    id: "preto-cinza",
    name: "Preto/Cinza",
    color: "#888888",
    thumbnail: "/images/variante-preto-cinza.png",
    mainImage: "/images/variante-preto-cinza.png",
    price: "R$ 183,10",
  },
  {
    id: "preto-branco",
    name: "Preto/Branco",
    color: "#d4d4d4",
    thumbnail: "/images/variante-preto-branco.png",
    mainImage: "/images/variante-preto-branco.png",
    price: "R$ 183,10",
  },
  {
    id: "preto-vermelho",
    name: "Preto/Vermelho",
    color: "#cc2222",
    thumbnail: "/images/variante-preto-vermelho.png",
    mainImage: "/images/variante-preto-vermelho.png",
    price: "R$ 183,10",
  },
]

interface ProductInfoProps {
  onVariantChange?: (image: string | null) => void
}

export function ProductInfo({ onVariantChange }: ProductInfoProps) {
  const [variantOpen, setVariantOpen] = useState(true)
  const [selectedVariant, setSelectedVariant] = useState("preto")

  const handleVariantSelect = (variantId: string) => {
    setSelectedVariant(variantId)
    const variant = variants.find((v) => v.id === variantId)
    if (variant && onVariantChange) {
      onVariantChange(variant.mainImage)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Title */}
      <h1 className="text-[22px] font-bold text-[#1a1a1a] leading-snug">
        Capas de Bancos Premium | Bancos Dianteiros e Traseiros + Cabeceiras
      </h1>

      {/* Pricing */}
      <div className="mt-6">
        <p className="text-xs text-[#888888] mb-1.5">Preco:</p>
        <div className="flex items-center gap-3">
          <span className="text-sm text-[#888888] line-through">R$ 500,00</span>
          <span className="bg-[#16a34a] text-[#ffffff] text-[11px] font-bold px-2 py-0.5 rounded-sm">
            63%
          </span>
        </div>
        <p className="text-[28px] font-bold text-[#1a1a1a] mt-1.5 leading-tight">
          R$ 183,10
        </p>
        <div className="flex items-center gap-2 mt-2.5 text-sm text-[#555555]">
          <CreditCard className="h-4 w-4 text-[#555555] shrink-0" />
          <span>
            Em ate 12x de{" "}
            <strong className="text-[#1a1a1a] font-bold">R$ 15,26</strong>
          </span>
        </div>
        <p className="text-sm text-[#16a34a] mt-1 underline underline-offset-2">
          Economia de R$ 316,90
        </p>
      </div>

      {/* Car Finder Widget */}
      <CarFinderWidget />

      {/* Variant selector */}
      <div className="mt-2">
        <button
          type="button"
          onClick={() => setVariantOpen(!variantOpen)}
          className="w-full flex items-center justify-between py-2 mb-3 cursor-pointer bg-transparent border-none"
        >
          <p className="text-sm font-semibold text-[#222]">Variante</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#222"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300"
            style={{ transform: variantOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <div
          className="overflow-hidden transition-all duration-400"
          style={{ maxHeight: variantOpen ? "2000px" : "0px" }}
        >
          <div className="flex flex-col gap-2">
            {variants.map((v) => {
              const isSelected = selectedVariant === v.id
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => handleVariantSelect(v.id)}
                  className={`flex items-center gap-3 rounded-lg border-2 p-3 text-left transition ${
                    isSelected
                      ? "border-[#111] bg-[#fafafa]"
                      : "border-[#e5e7eb] bg-transparent hover:border-[#ccc]"
                  }`}
                >
                  <div
                    className="h-6 w-6 rounded-full border border-[#ddd] flex-shrink-0"
                    style={{ backgroundColor: v.color }}
                  />
                  <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded">
                    <img
                      src={v.thumbnail || "/placeholder.svg"}
                      alt={v.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#222]">{v.name}</p>
                  </div>
                  <p className="text-sm font-bold text-[#222]">{v.price}</p>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button
        type="button"
        className="w-full bg-[#1a1a1a] hover:bg-[#333333] text-[#ffffff] font-bold text-sm tracking-[0.15em] py-4 rounded-lg transition-colors uppercase mt-5"
      >
        FABRICAR MEU MODELO
      </button>
    </div>
  )
}
