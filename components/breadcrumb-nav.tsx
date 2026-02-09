export function BreadcrumbNav() {
  return (
    <nav
      className="text-sm text-[#666666] py-3 px-4 max-w-7xl mx-auto"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li>
          <a
            href="#"
            className="text-[#666666] underline underline-offset-2 hover:text-[#1a1a1a] transition-colors"
          >
            Inicio
          </a>
        </li>
        <li className="text-[#999999]">{">"}</li>
        <li>
          <a
            href="#"
            className="text-[#666666] underline underline-offset-2 hover:text-[#1a1a1a] transition-colors"
          >
            Produtos
          </a>
        </li>
        <li className="text-[#999999]">{">"}</li>
        <li className="text-[#1a1a1a] font-medium">Capas de Bancos Premium</li>
      </ol>
    </nav>
  )
}
