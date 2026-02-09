export function ProductDescription() {
  return (
    <section id="descricao" className="border-t border-[#e5e5e5] mt-12 pt-10 max-w-3xl mx-auto px-4 pb-16">
      <h2 className="text-2xl font-bold italic text-[#1a1a1a] text-center mb-8">
        Descricao
      </h2>

      <div className="text-base md:text-lg text-[#1a1a1a] leading-7 md:leading-8 space-y-5">
        <p className="font-bold text-center text-lg md:text-xl">
          Renove o visual do seu carro e mantenha seus bancos conservados por anos.
        </p>

        <p>
          Se voce gosta do seu carro bem cuidado, confortavel e com visual de carro novo, sabe como bancos desgastados, sujos ou manchados tiram totalmente a graca do interior.
        </p>

        <p>
          As Capas de Banco Premium com Design em Diamante foram desenvolvidas exatamente para resolver esse problema.
        </p>

        <p>
          Alem da estetica, a estrutura foi pensada para funcionar de verdade no uso diario. O material impermeavel protege contra agua, suor, lama e pequenos acidentes, evitando manchas e odores.
        </p>

        <p>
          Ja o design perfurado em diamante garante melhor circulacao de ar, mantendo conforto termico e compatibilidade total com bancos aquecidos e ventilados.
        </p>

        <p>
          Se voce quer valorizar o interior do seu carro, dirigir com mais conforto e proteger seus bancos por muito mais tempo, essa e a escolha certa.
        </p>

        {/* Video demonstrativo */}
        <div className="my-8">
          <video
            className="w-full rounded-lg"
            controls
            playsInline
            preload="none"
            poster="/images/video-thumbnail.png"
            crossOrigin="anonymous"
          >
            <source src="/videos/produto-demo.mp4" type="video/mp4" />
            Seu navegador nao suporta o elemento de video.
          </video>
        </div>

        {/* Material e Estrutura */}
        <h3 className="text-lg md:text-xl font-bold pt-4">Material e Estrutura - 5 Camadas</h3>
        <p>
          As capas contam com estrutura reforcada em 5 camadas acolchoadas resistentes a agua:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Couro sintetico impermeavel (eco-leather)</li>
          <li>Espuma de alta resiliencia</li>
          <li>Tecido nao tecido confortavel</li>
          <li>Espuma de retorno elastico</li>
          <li>Tecido base antiderrapante em silicone</li>
        </ul>
        <p>
          Essa combinacao garante conforto, durabilidade, protecao e estabilidade no uso diario.
        </p>

        {/* Protecao e Seguranca */}
        <h3 className="text-lg md:text-xl font-bold pt-4">Protecao e Seguranca</h3>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Material resistente a liquidos, sujeira e pequenos riscos</li>
          <li>Tecnologia antiderrapante que evita deslocamentos</li>
          <li>Compativel com airbags laterais</li>
          <li>Ideal para uso com criancas e pets</li>
          <li>Seguranca preservada sem comprometer funcoes do carro</li>
        </ul>

        {/* Instalacao */}
        <h3 className="text-lg md:text-xl font-bold pt-4">Instalacao</h3>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Sistema de fecho com fivela dupla</li>
          <li>Encaixe rapido e seguro</li>
          <li>Instalacao facil, sem ferramentas</li>
          <li>Nao e eletrica</li>
          <li>Nao requer montagem complexa</li>
        </ul>

        {/* Conteudo da Embalagem */}
        <h3 className="text-lg md:text-xl font-bold pt-4">Conteudo da Embalagem</h3>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Capas para bancos dianteiros (motorista e passageiro)</li>
          <li>Capa completa para banco traseiro</li>
          <li>Capas para encostos de cabeca</li>
          <li>Sistema completo de fixacao com fivelas</li>
          <li>Kit de ajuste e fixacao</li>
          <li>Manual de instalacao</li>
        </ul>
      </div>
    </section>
  )
}
