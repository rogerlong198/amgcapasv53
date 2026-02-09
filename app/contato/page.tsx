import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Entrar em Contato - AMG Capas",
  description: "Entre em contato com a AMG Capas. Atendimento de segunda a sabado.",
}

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <header className="border-b border-[#e5e5e5] bg-[#ffffff]">
        <div className="max-w-[800px] mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="text-[#333] hover:text-[#000] transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <img src="/images/amg-capas-logo.png" alt="AMG Capas" width={100} height={35} className="h-8 w-auto object-contain" />
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">Entrar em Contato</h1>

        <div className="text-base leading-7 text-[#444] space-y-6">
          <p>Estamos prontos para ajudar voce! Entre em contato com a equipe AMG Capas pelos canais abaixo:</p>

          <div className="space-y-4">
            <div className="bg-[#f7f7f7] rounded-lg p-5">
              <h2 className="font-bold text-[#1a1a1a] text-lg mb-2">Vendas e Informacoes</h2>
              <p>WhatsApp: <strong>(48) 98402-5725</strong></p>
              <p className="text-sm text-[#666] mt-1">Duvidas sobre produtos, modelos compativeis e precos.</p>
            </div>

            <div className="bg-[#f7f7f7] rounded-lg p-5">
              <h2 className="font-bold text-[#1a1a1a] text-lg mb-2">Suporte ao Cliente</h2>
              <p>WhatsApp: <strong>(48) 98417-5864</strong></p>
              <p className="text-sm text-[#666] mt-1">Acompanhamento de pedidos, trocas e devolucoes.</p>
            </div>

            <div className="bg-[#f7f7f7] rounded-lg p-5">
              <h2 className="font-bold text-[#1a1a1a] text-lg mb-2">E-mail</h2>
              <p><strong>suporte@amgcapas.com</strong></p>
              <p className="text-sm text-[#666] mt-1">Responderemos em ate 24 horas uteis.</p>
            </div>
          </div>

          <div className="border-t border-[#e5e5e5] pt-6">
            <h2 className="font-bold text-[#1a1a1a] text-lg mb-2">Horario de Atendimento</h2>
            <p>Segunda a Sabado, das <strong>8h as 19h</strong></p>
          </div>
        </div>
      </main>
    </div>
  )
}
