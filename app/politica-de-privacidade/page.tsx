import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Politica de Privacidade - AMG Capas",
  description: "Politica de privacidade da AMG Capas.",
}

export default function PoliticaPrivacidadePage() {
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
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">Politica de Privacidade</h1>

        <div className="text-base leading-7 text-[#444] space-y-5">
          <p>A AMG Capas tem o compromisso de proteger a privacidade dos seus clientes e visitantes. Esta politica descreve como coletamos, usamos e protegemos suas informacoes pessoais.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">1. Informacoes Coletadas</h2>
          <p>Coletamos informacoes que voce nos fornece diretamente, como nome, e-mail, telefone, endereco de entrega e dados de pagamento ao realizar uma compra. Tambem coletamos dados de navegacao automaticamente, como endereco IP, tipo de navegador e paginas visitadas.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">2. Uso das Informacoes</h2>
          <p>Utilizamos suas informacoes para processar pedidos, enviar atualizacoes sobre entregas, responder a duvidas, melhorar nossos produtos e servicos, e enviar comunicacoes de marketing (caso voce tenha consentido).</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">3. Compartilhamento de Dados</h2>
          <p>Nao vendemos ou alugamos suas informacoes pessoais. Compartilhamos dados apenas com parceiros necessarios para processar pagamentos, realizar entregas e operar nosso site de forma segura.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">4. Seguranca dos Dados</h2>
          <p>Adotamos medidas de seguranca tecnicas e organizacionais para proteger suas informacoes contra acesso nao autorizado, perda ou destruicao. Utilizamos criptografia SSL em todas as transacoes.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">5. Cookies</h2>
          <p>Nosso site utiliza cookies para melhorar a experiencia de navegacao, analisar trafego e personalizar conteudo. Voce pode gerenciar as preferencias de cookies nas configuracoes do seu navegador.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">6. Seus Direitos</h2>
          <p>Voce tem o direito de acessar, corrigir ou excluir suas informacoes pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco pelo e-mail suporte@amgcapas.com.</p>

          <h2 className="text-lg font-bold text-[#1a1a1a] pt-2">7. Alteracoes nesta Politica</h2>
          <p>Podemos atualizar esta politica periodicamente. Recomendamos que voce revise esta pagina regularmente para estar ciente de quaisquer alteracoes.</p>
        </div>
      </main>
    </div>
  )
}
