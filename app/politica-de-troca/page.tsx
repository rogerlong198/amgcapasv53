import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Politica de Troca e Devolucao - AMG Capas",
  description: "Politica de troca e devolucao da AMG Capas.",
}

export default function PoliticaTrocaPage() {
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
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">Politica de Troca e Devolucao</h1>

        <div className="text-base leading-7 text-[#444] space-y-5">
          <p>Na AMG Capas, queremos que voce fique 100% satisfeito com sua compra. Caso precise realizar uma troca ou devolucao, veja como funciona:</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">Prazo para Troca ou Devolucao</h2>
          <p>Voce tem ate <strong>7 dias corridos</strong> apos o recebimento do produto para solicitar a troca ou devolucao, conforme o Codigo de Defesa do Consumidor (Art. 49).</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">Condicoes para Troca/Devolucao</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>O produto deve estar em sua embalagem original, sem sinais de uso.</li>
            <li>Deve estar acompanhado de todos os acessorios e componentes que vieram na embalagem.</li>
            <li>E necessario apresentar o comprovante de compra (nota fiscal ou e-mail de confirmacao).</li>
          </ul>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">Como Solicitar</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Entre em contato pelo nosso WhatsApp de Suporte: <strong>(48) 98417-5864</strong></li>
            <li>Informe o numero do pedido e o motivo da troca ou devolucao.</li>
            <li>Nossa equipe ira orientar sobre o envio do produto.</li>
          </ol>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">Reembolso</h2>
          <p>Apos recebermos o produto e confirmarmos que esta nas condicoes adequadas, o reembolso sera processado:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cartao de credito:</strong> estorno em ate 2 faturas seguintes.</li>
            <li><strong>Pix ou boleto:</strong> devolucao em ate 10 dias uteis na conta informada.</li>
          </ul>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">Frete de Devolucao</h2>
          <p>Em caso de defeito de fabricacao ou erro no envio, o frete de devolucao e por nossa conta. Para desistencia sem defeito, o frete de retorno e de responsabilidade do cliente.</p>
        </div>
      </main>
    </div>
  )
}
