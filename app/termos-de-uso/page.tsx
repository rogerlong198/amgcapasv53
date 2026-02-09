import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Termos de Uso - AMG Capas",
  description: "Termos de uso da AMG Capas.",
}

export default function TermosDeUsoPage() {
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
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">Termos de Uso</h1>

        <div className="text-base leading-7 text-[#444] space-y-5">
          <p>Ao acessar e utilizar o site da AMG Capas, voce concorda com os termos e condicoes descritos abaixo. Leia atentamente antes de navegar ou realizar compras.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">1. Aceitacao dos Termos</h2>
          <p>Ao acessar nosso site, voce declara ter lido, entendido e aceito estes Termos de Uso. Caso nao concorde com algum item, recomendamos que nao utilize nossos servicos.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">2. Uso do Site</h2>
          <p>O site da AMG Capas destina-se exclusivamente a venda de capas automotivas e acessorios relacionados. E proibido utilizar o site para fins ilegais, fraudulentos ou que possam prejudicar o funcionamento da plataforma.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">3. Produtos e Precos</h2>
          <p>Os precos e disponibilidade dos produtos podem ser alterados sem aviso previo. As imagens dos produtos sao meramente ilustrativas e podem apresentar pequenas variacoes de cor em relacao ao produto real, devido a configuracoes de monitor.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">4. Conta do Usuario</h2>
          <p>Para realizar compras, pode ser necessario criar uma conta. Voce e responsavel por manter a confidencialidade dos seus dados de acesso e por todas as atividades realizadas em sua conta.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">5. Propriedade Intelectual</h2>
          <p>Todo o conteudo do site, incluindo textos, imagens, logotipos e design, e propriedade da AMG Capas e esta protegido pelas leis de direitos autorais. E proibida a reproducao sem autorizacao previa.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">6. Limitacao de Responsabilidade</h2>
          <p>A AMG Capas nao se responsabiliza por danos indiretos decorrentes do uso do site, incluindo interrupcoes de servico, erros de sistema ou incompatibilidade de dispositivos.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">7. Foro</h2>
          <p>Fica eleito o foro da comarca de Florianopolis/SC para dirimir quaisquer questoes decorrentes destes Termos de Uso.</p>

          <div className="border-t border-[#e5e5e5] pt-6 mt-6">
            <p className="text-sm text-[#888]">Ultima atualizacao: Janeiro de 2025</p>
          </div>
        </div>
      </main>
    </div>
  )
}
