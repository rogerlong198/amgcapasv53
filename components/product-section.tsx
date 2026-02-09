"use client"

import { useState } from "react"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"

export function ProductSection() {
  const [variantImage, setVariantImage] = useState<string | null>(null)

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
      <div className="lg:w-[55%] shrink-0">
        <ProductGallery variantImage={variantImage} />
      </div>
      <div className="lg:w-[45%]">
        <ProductInfo onVariantChange={setVariantImage} />
      </div>
    </div>
  )
}
