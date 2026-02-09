"use client"

import { useState, useEffect, useCallback } from "react"

export function FloatingCta() {
  const [visible, setVisible] = useState(false)
  const [carComplete, setCarComplete] = useState(false)

  const checkComplete = useCallback(() => {
    const el = document.getElementById("encontre-seu-carro")
    if (el) {
      setCarComplete(el.getAttribute("data-complete") === "true")
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const descSection = document.getElementById("descricao")
      const footer = document.querySelector("footer")
      if (!descSection) return

      const descRect = descSection.getBoundingClientRect()
      const passedDesc = descRect.top < window.innerHeight

      let footerVisible = false
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        footerVisible = footerRect.top < window.innerHeight
      }

      setVisible(passedDesc && !footerVisible)
      checkComplete()
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Also observe DOM attribute changes on the car finder to detect completion in real time
    const el = document.getElementById("encontre-seu-carro")
    let observer: MutationObserver | null = null
    if (el) {
      observer = new MutationObserver(() => {
        setCarComplete(el.getAttribute("data-complete") === "true")
      })
      observer.observe(el, { attributes: true, attributeFilter: ["data-complete"] })
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (observer) observer.disconnect()
    }
  }, [checkComplete])

  const handleClick = () => {
    if (carComplete) {
      // All options selected - go to checkout
      window.location.href = "/checkout"
    } else {
      // Scroll to car finder
      const el = document.getElementById("encontre-seu-carro")
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      style={
        visible && !carComplete
          ? { animation: "ctaPulse 2.5s ease-in-out infinite" }
          : visible
            ? { transform: "translateX(-50%)" }
            : { transform: "translateX(-50%) translateY(1rem)", opacity: 0, pointerEvents: "none" }
      }
      className={`fixed bottom-6 left-1/2 z-50 bg-[#1a1a1a] hover:bg-[#333] text-[#ffffff] font-bold text-sm tracking-[0.15em] py-3.5 px-8 rounded-lg shadow-lg transition-all duration-300 uppercase whitespace-nowrap ${
        visible ? "opacity-100" : ""
      }`}
    >
      FABRICAR MEU MODELO
    </button>
  )
}
