import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Politica de Seguranca - AMG Capas",
  description: "Politica de seguranca da AMG Capas.",
}

export default function PoliticaSegurancaPage() {
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
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">Politica de Seguranca</h1>

        <div className="text-base leading-7 text-[#444] space-y-5">
          <p>A AMG Capas prioriza a seguranca de todas as transacoes e dados dos nossos clientes. Confira abaixo as medidas que adotamos para garantir sua protecao.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">Compra Segura</h2>
          <p>Todas as transacoes em nosso site sao protegidas por certificado SSL (Secure Socket Layer), que criptografa todas as informacoes transmitidas entre o seu navegador e nossos servidores. Isso garante que seus dados de pagamento e informacoes pessoais estejam sempre protegidos.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">Pagamentos Protegidos</h2>
          <p>Trabalhamos com as principais operadoras de pagamento do mercado, que possuem sistemas antifraude avancados. Aceitamos cartoes Visa, Mastercard, American Express, Elo e Pix, todos processados em ambiente seguro.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">Protecao de Dados</h2>
          <p>Seguimos as diretrizes da Lei Geral de Protecao de Dados (LGPD). Seus dados pessoais sao armazenados de forma segura e utilizados apenas para fins relacionados ao seu pedido e experiencia de compra.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">Monitoramento Continuo</h2>
          <p>Nossa equipe de tecnologia monitora continuamente nossos sistemas para identificar e prevenir qualquer atividade suspeita, garantindo a integridade da plataforma e a seguranca dos nossos clientes.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">Garantia de Satisfacao</h2>
          <p>Caso voce identifique qualquer irregularidade em sua compra, entre em contato imediatamente com nosso suporte pelo WhatsApp (48) 98417-5864 ou pelo e-mail suporte@amgcapas.com.</p>
        </div>
      </main>
    </div>
  )
}
