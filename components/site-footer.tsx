"use client"

import React from "react"

import { useState } from "react"
import { ChevronDown, Plus, Minus } from "lucide-react"

function AccordionSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-[#e0e0e0] lg:border-none">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 lg:hidden"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-xs font-bold tracking-wide uppercase text-[#333]">
          {title}
        </span>
        {open ? (
          <Minus className="h-4 w-4 text-[#333]" />
        ) : (
          <Plus className="h-4 w-4 text-[#333]" />
        )}
      </button>
      {/* Desktop: always visible title */}
      <h3 className="hidden lg:block text-xs font-bold tracking-wide uppercase text-[#333] mb-4">
        {title}
      </h3>
      {/* Mobile: collapsible / Desktop: always open */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 ${
          open ? "max-h-[600px] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-[#f5f5f5] mt-12">
      {/* Main footer content */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 pt-10 pb-6">
        {/* Mobile: Logo centered at top */}
        <div className="flex justify-center lg:hidden mb-6">
          <AutoCapasLogo />
        </div>

        {/* Desktop: 4 columns / Mobile: accordion */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Column 1 - Sobre */}
          <div>
            {/* Desktop logo */}
            <div className="hidden lg:block mb-6">
              <AutoCapasLogo />
            </div>
            <AccordionSection title="Sobre a AMG Capas">
              <div className="text-[13px] leading-relaxed text-[#555] space-y-4">
                <p>
                  A AMG Capas nasceu para facilitar o dia a dia de quem cuida e
                  valoriza o interior do carro.
                </p>
                <p>
                  {
                    "Reunimos em um so lugar capas de banco automotivas pensadas para proteger, renovar e trazer mais conforto para a rotina, seja no transito, no trabalho ou em viagens."
                  }
                </p>
                <p>
                  {
                    "Aqui voce encontra capas desenvolvidas sob medida para cada modelo de carro, com foco em encaixe preciso, acabamento de qualidade e praticidade no uso."
                  }
                </p>
                <p>
                  {
                    "Tudo para manter os bancos protegidos e o interior sempre com aparencia de novo."
                  }
                </p>
              </div>
            </AccordionSection>
          </div>

          {/* Column 2 - Nossos Contatos */}
          <div>
            <AccordionSection title="Nossos Contatos">
              <div className="text-[13px] leading-relaxed text-[#555]">
                <p className="font-bold text-[#333] uppercase text-xs mb-2">
                  {"Suporte ao Cliente:"}
                </p>
                <p className="flex items-center gap-1.5 mb-4">
                  <span className="text-base">{"📱"}</span>
                  {"WhatsApp: (48) 98417-5864"}
                </p>

                <div className="border-t border-dashed border-[#ccc] my-4" />

                <p className="flex items-center gap-1.5 mb-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#5b9bd5]" />
                  {"E-mail: suporte@amgcapas.com"}
                </p>

                <p className="mb-2">
                  {"Acompanhamento de pedidos, trocas e devolucoes"}
                </p>
                <p>
                  {
                    "Atendimento de segunda a sabado, das 8h as 19h"
                  }
                </p>
              </div>
            </AccordionSection>
          </div>

          {/* Column 3 - Informacoes da Empresa */}
          <div>
            <AccordionSection title="Informacoes da Empresa">
              <ul className="space-y-2 text-[13px] text-[#555]">
                <li>
                  <a
                    href="/contato"
                    className="hover:text-[#333] transition-colors"
                  >
                    Entrar em contato
                  </a>
                </li>
                <li>
                  <a
                    href="/politica-de-privacidade"
                    className="hover:text-[#333] transition-colors"
                  >
                    Politica de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="/politica-de-seguranca"
                    className="hover:text-[#333] transition-colors"
                  >
                    {"Politica de Seguranca"}
                  </a>
                </li>
                <li>
                  <a
                    href="/politica-de-troca"
                    className="hover:text-[#333] transition-colors"
                  >
                    {"Politica de Troca e Devolucao"}
                  </a>
                </li>
                <li>
                  <a
                    href="/termos-de-uso"
                    className="hover:text-[#333] transition-colors"
                  >
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </AccordionSection>
          </div>

          {/* Column 4 - Lista de Clientes VIP */}
          <div>
            <AccordionSection title="Lista de Clientes VIP" defaultOpen>
              <div>
                <p className="text-[13px] text-[#555] leading-relaxed mb-4">
                  {
                    "Cadastre seu e-mail para receber todas as ofertas e novidades em primeira mao."
                  }
                </p>
                <div className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full border border-[#ccc] rounded-full px-4 py-2.5 text-sm text-[#333] placeholder:text-[#999] outline-none focus:border-[#333] transition-colors bg-[#fff]"
                  />
                  <button
                    type="button"
                    className="w-full bg-[#333] text-[#fff] font-semibold text-sm py-3 rounded-full hover:bg-[#222] transition-colors"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </AccordionSection>
          </div>
        </div>

        {/* Siga-nos */}
        <div className="text-center mt-8 mb-6">
          <p className="text-sm text-[#555] mb-3">Siga-nos</p>
          <div className="flex justify-center gap-2">
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-[#888] flex items-center justify-center hover:bg-[#666] transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-[#888] flex items-center justify-center hover:bg-[#666] transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Nos aceitamos */}
        <div className="text-center mb-6">
          <p className="text-sm text-[#555] mb-3">{"Nos aceitamos"}</p>
          <div className="flex justify-center items-center gap-2">
            <img src="/icons/visa.svg" alt="Visa" width={38} height={24} loading="lazy" />
            <img src="/icons/mastercard.svg" alt="Mastercard" width={38} height={24} loading="lazy" />
            <img src="/icons/amex.svg" alt="American Express" width={38} height={24} loading="lazy" />
            <img src="/icons/elo.svg" alt="Elo" width={38} height={24} loading="lazy" />
            <img src="/icons/pix.svg" alt="Pix" width={38} height={24} loading="lazy" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e0e0e0] bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-4">
          <p className="text-center text-xs text-[#888]">
            {
              "\u00A9 2019 AMG Capas - CNPJ: 71.477.367/0001-49 - Todos os direitos reservados"
            }
          </p>
        </div>
      </div>
    </footer>
  )
}

function AutoCapasLogo() {
  return (
    <img
      src="/images/amg-capas-logo.png"
      alt="AMG Capas"
      width={156}
      height={48}
      className="h-12 w-auto object-contain"
      loading="lazy"
    />
  )
}
