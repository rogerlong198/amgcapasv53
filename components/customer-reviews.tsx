"use client"



const reviews = [
  {
    image: "/images/review-1.jpg",
    name: "Diogo Zagalo",
    stars: 5,
    text: "Comprei achando que era so estetica mas o material e grosso encaixou certinho e o banco parece outro carro",
  },
  {
    image: "/images/review-6.jpg",
    name: "Li Veiga",
    stars: 5,
    text: "Logo que instalei deu pra ver que nao e aquelas capas finas nao o acabamento e bonito e bem firme",
    tall: true,
  },
  {
    image: "/images/review-3.jpg",
    name: "Salvador Conceicao",
    stars: 5,
    text: "Ja usei outras capas antes e essa foi a primeira que nao fica sambando no banco ficou bem presa",
  },
  {
    image: "/images/review-4.jpg",
    name: "Gui Aguiar",
    stars: 5,
    text: "O visual muda demais o interior do carro parece carro novo e ainda protege bem o banco original",
  },
  {
    image: "/images/review-malaquias.jpg",
    name: "Malaquias Furtado",
    stars: 5,
    text: "No comeco fiquei na duvida por causa do preco mas quando chegou vi que a qualidade justifica",
    tall: true,
  },
  {
    image: "/images/review-6.jpg",
    name: "Carmine Souza",
    stars: 5,
    text: "Uso todo dia pro trabalho e da pra sentir que e confortavel mesmo nao esquenta e nao escorrega",
  },
  {
    image: "/images/review-7.jpg",
    name: "Eduardo Xavier",
    stars: 5,
    text: "Tenho filho pequeno e cachorro e resolveu meu problema facil limpa rapido e nao marca",
    tall: true,
  },
  {
    image: "/images/review-12.jpg",
    name: "Lourival Garcia",
    stars: 4.5,
    text: "O encaixe e melhor do que eu imaginava nao atrapalha airbag nem regulagem do banco",
  },
  {
    image: "/images/review-9.jpg",
    name: "Mimi Silva",
    stars: 5,
    text: "Da outra cara pro carro fica mais bonito e ainda passa sensacao de carro mais caro",
    tall: true,
  },
  {
    image: "/images/review-10.jpg",
    name: "Talita Cunha",
    stars: 5,
    text: "Achei que ia dar trabalho pra instalar mas foi tranquilo em poucos minutos ja tava pronto",
  },
  {
    image: "/images/review-11.jpg",
    name: "Beatriz Fogaca",
    stars: 5,
    text: "Ja derramei agua e nao passou nada pro banco isso pra mim ja valeu a compra",
    tall: true,
  },
  {
    image: null,
    name: "Vera Guedes",
    stars: 5,
    text: "Fica confortavel ate em viagem longa nao fica escorregando nem dobrando",
  },
]

function Stars({ count }: { count: number }) {
  const full = Math.floor(count)
  const hasHalf = count % 1 !== 0
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <svg
          key={`full-${i}`}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="#d4a017"
        >
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
        </svg>
      ))}
      {hasHalf && (
        <svg width="14" height="14" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfStarReview">
              <stop offset="50%" stopColor="#d4a017" />
              <stop offset="50%" stopColor="#e0e0e0" />
            </linearGradient>
          </defs>
          <path
            d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z"
            fill="url(#halfStarReview)"
          />
        </svg>
      )}
    </div>
  )
}

function VerifiedBadge() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="none"
      className="inline-block ml-1 shrink-0"
    >
      <circle cx="10" cy="10" r="10" fill="#4a9eed" />
      <path
        d="M6 10l2.5 2.5L14 7.5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CustomerReviews() {
  return (
    <section className="py-8 border-t border-[#e5e5e5]">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="break-inside-avoid mb-3 border border-[#e5e5e5] rounded-lg overflow-hidden bg-[#ffffff]"
          >
            {review.image && (
              <div className={`relative w-full ${review.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <img
                  src={review.image || "/placeholder.svg"}
                  alt={`Avaliacao de ${review.name}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-3">
              <Stars count={review.stars} />
              <p className="text-[13px] font-semibold text-[#1a1a1a] mt-1.5 flex items-center">
                {review.name}
                <VerifiedBadge />
              </p>
              <p className="text-[12px] text-[#555] leading-relaxed mt-1">
                {review.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
