"use client"

import { useState, useCallback } from "react"
import {
  dadosCarros,
  dadosCaminhoes,
  getOpcoesPorAno,
  isPicape,
  getVariationLabel,
  T_PORTAS,
  T_CAMBIO,
  T_CABINE,
  T_PORTAS_PAJERO,
} from "@/lib/vehicle-data"

interface ResultData {
  marca: string
  modelo: string
  ano: string
  variacao: string
}

export function CarFinderWidget() {
  const [isOpen, setIsOpen] = useState(true)
  const [tipo, setTipo] = useState("")
  const [marca, setMarca] = useState("")
  const [modelo, setModelo] = useState("")
  const [ano, setAno] = useState("")
  const [variacao, setVariacao] = useState("")

  const [showVariacao, setShowVariacao] = useState(false)
  const [variacaoLabel, setVariacaoLabel] = useState("Versão")
  const [variacaoOptions, setVariacaoOptions] = useState<string[]>([])
  const [showVariacaoMsg, setShowVariacaoMsg] = useState(true)
  const [resultado, setResultado] = useState<ResultData | null>(null)
  const [showUpsell, setShowUpsell] = useState(false)
  const [upsellChecked, setUpsellChecked] = useState(true)

  const dadosAtuais = tipo === "carro" ? dadosCarros : tipo === "caminhao" ? dadosCaminhoes : null

  const marcas = dadosAtuais ? Object.keys(dadosAtuais).sort() : []
  const modelos = dadosAtuais && marca && dadosAtuais[marca]
    ? Object.keys(dadosAtuais[marca]).sort()
    : []

  const anos: number[] = []
  if (dadosAtuais && marca && modelo && dadosAtuais[marca]?.[modelo]) {
    const info = dadosAtuais[marca][modelo]
    const inicio = info.inicio
    const fim = info.fim === null ? new Date().getFullYear() + 1 : info.fim
    for (let y = fim; y >= inicio; y--) {
      anos.push(y)
    }
  }

  const handleTipoChange = useCallback((value: string) => {
    setTipo(value)
    setMarca("")
    setModelo("")
    setAno("")
    setVariacao("")
    setShowVariacao(false)
    setVariacaoOptions([])
    setShowVariacaoMsg(true)
    setResultado(null)
  }, [])

  const handleMarcaChange = useCallback((value: string) => {
    setMarca(value)
    setModelo("")
    setAno("")
    setVariacao("")
    setShowVariacao(false)
    setVariacaoOptions([])
    setShowVariacaoMsg(true)
    setResultado(null)
  }, [])

  const handleModeloChange = useCallback((value: string) => {
    setModelo(value)
    setAno("")
    setVariacao("")
    setShowVariacao(false)
    setVariacaoOptions([])
    setShowVariacaoMsg(true)
    setResultado(null)
  }, [])

  const showResultado = useCallback((marcaVal: string, modeloVal: string, anoVal: string, variacaoVal: string) => {
    setResultado({
      marca: marcaVal,
      modelo: modeloVal,
      ano: anoVal,
      variacao: variacaoVal || "Padrão"
    })
    setShowUpsell(isPicape(modeloVal))
  }, [])

  const handleAnoChange = useCallback((value: string) => {
    setAno(value)
    setVariacao("")
    setShowVariacao(false)
    setVariacaoOptions([])
    setShowVariacaoMsg(true)
    setResultado(null)

    if (!value || !modelo || !marca || !dadosAtuais) return

    const anoNum = parseInt(value, 10)
    const info = dadosAtuais[marca]?.[modelo]
    if (!info) return

    const vars = info.vars
    let opcoesFinais: string[] = []
    let labelFinal = "Versão"

    if (vars === "SPECIAL_PICKUP" || vars === "SPECIAL_STRADA") {
      opcoesFinais = getOpcoesPorAno(modelo, anoNum) || []
      labelFinal = "Cabine & Câmbio"
    } else if (vars) {
      if (typeof vars === "string") return
      opcoesFinais = vars as string[]
      if (vars === T_PORTAS || JSON.stringify(vars) === JSON.stringify(T_PORTAS)) labelFinal = "Quantas Portas?"
      else if (vars === T_CAMBIO || JSON.stringify(vars) === JSON.stringify(T_CAMBIO)) labelFinal = "Tipo de Câmbio"
      else if (vars === T_CABINE || JSON.stringify(vars) === JSON.stringify(T_CABINE)) labelFinal = "Tipo de Cabine"
      else if (vars === T_PORTAS_PAJERO || JSON.stringify(vars) === JSON.stringify(T_PORTAS_PAJERO)) labelFinal = "Tipo de Carroceria"
      else if (tipo === "caminhao") labelFinal = "Tipo de Cabine/Teto"
      else labelFinal = getVariationLabel(vars, tipo)
    }

    if (opcoesFinais && opcoesFinais.length > 0) {
      setShowVariacao(true)
      setVariacaoLabel(labelFinal)
      setVariacaoOptions(opcoesFinais)
      setShowVariacaoMsg(true)
      return
    }

    // No variation needed, show result directly
    showResultado(marca, modelo, value, "Padrão")
  }, [marca, modelo, tipo, dadosAtuais, showResultado])

  const handleVariacaoChange = useCallback((value: string) => {
    setVariacao(value)
    if (value) {
      setShowVariacaoMsg(false)
      showResultado(marca, modelo, ano, value)
    } else {
      setResultado(null)
    }
  }, [marca, modelo, ano, showResultado])

  return (
    <div id="encontre-seu-carro" data-complete={resultado ? "true" : "false"} className="font-[Poppins,sans-serif] text-[#111] w-full max-w-[500px] mx-auto my-5">
      <div className="bg-[#ffffff] rounded-2xl shadow-[0_10px_30px_rgba(13,37,94,0.10)] border border-[#e5e7eb] border-t-[5px] border-t-[#111111] overflow-hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-[30px] pb-0 cursor-pointer bg-transparent border-none"
        >
          <div className="text-left">
            <h2 className="text-[#111111] text-[1.6rem] font-bold mb-1.5">
              Encontre seu Carro
            </h2>
          </div>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#222"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 shrink-0"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        <div
          className="transition-all duration-400 overflow-hidden"
          style={{ maxHeight: isOpen ? "3000px" : "0px", opacity: isOpen ? 1 : 0 }}
        >
          <div className="p-[30px] pt-2">
            <p className="text-center text-[#6b7280] text-[0.92em] mb-[22px]">
              {"Selecione as opções do seu veículo:"}
            </p>

            {/* Tipo */}
            <div className="mb-[15px]">
              <label className="text-[0.85em] font-bold mb-2 block text-[#111] uppercase tracking-[0.02em]">
                {"Tipo de veículo"}
              </label>
              <select
                value={tipo}
                onChange={(e) => handleTipoChange(e.target.value)}
                className="w-full px-[14px] py-[10px] border border-[#e5e7eb] rounded-[10px] bg-[#ffffff] text-[1em] text-[#111] cursor-pointer h-[46px] transition-all focus:outline-none focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(17,17,17,0.08)]"
              >
                <option value="">Selecione o tipo</option>
                <option value="carro">{"Carro / Picape / SUV"}</option>
                <option value="caminhao">{"Caminhão / Leves / Pesados"}</option>
              </select>
            </div>

            {/* Marca */}
            <div className="mb-[15px]">
              <label className="text-[0.85em] font-bold mb-2 block text-[#111] uppercase tracking-[0.02em]">
                Marca
              </label>
              <select
                value={marca}
                onChange={(e) => handleMarcaChange(e.target.value)}
                disabled={!tipo}
                className="w-full px-[14px] py-[10px] border border-[#e5e7eb] rounded-[10px] bg-[#ffffff] text-[1em] text-[#111] cursor-pointer h-[46px] transition-all focus:outline-none focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(17,17,17,0.08)] disabled:bg-[#f3f4f6] disabled:text-[#9ca3af] disabled:cursor-not-allowed"
              >
                <option value="">{!tipo ? "Aguardando tipo..." : "Selecione a marca"}</option>
                {marcas.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Modelo */}
            <div className="mb-[15px]">
              <label className="text-[0.85em] font-bold mb-2 block text-[#111] uppercase tracking-[0.02em]">
                Modelo
              </label>
              <select
                value={modelo}
                onChange={(e) => handleModeloChange(e.target.value)}
                disabled={!marca}
                className="w-full px-[14px] py-[10px] border border-[#e5e7eb] rounded-[10px] bg-[#ffffff] text-[1em] text-[#111] cursor-pointer h-[46px] transition-all focus:outline-none focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(17,17,17,0.08)] disabled:bg-[#f3f4f6] disabled:text-[#9ca3af] disabled:cursor-not-allowed"
              >
                <option value="">{!marca ? "Aguardando marca..." : "Selecione o modelo"}</option>
                {modelos.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Ano */}
            <div className="mb-[15px]">
              <label className="text-[0.85em] font-bold mb-2 block text-[#111] uppercase tracking-[0.02em]">
                {"Ano de Fabricação"}
              </label>
              <select
                value={ano}
                onChange={(e) => handleAnoChange(e.target.value)}
                disabled={!modelo}
                className="w-full px-[14px] py-[10px] border border-[#e5e7eb] rounded-[10px] bg-[#ffffff] text-[1em] text-[#111] cursor-pointer h-[46px] transition-all focus:outline-none focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(17,17,17,0.08)] disabled:bg-[#f3f4f6] disabled:text-[#9ca3af] disabled:cursor-not-allowed"
              >
                <option value="">{!modelo ? "Aguardando modelo..." : "Selecione o ano"}</option>
                {anos.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            {/* Variação (conditional) */}
            {showVariacao && (
              <div className="mb-[15px] animate-[fadeInMacena_0.35s_ease]">
                <label className="text-[0.85em] font-bold mb-2 block text-[#111] uppercase tracking-[0.02em]">
                  {variacaoLabel}
                </label>
                <select
                  value={variacao}
                  onChange={(e) => handleVariacaoChange(e.target.value)}
                  className="w-full px-[14px] py-[10px] border border-[#e5e7eb] rounded-[10px] bg-[#ffffff] text-[1em] text-[#111] cursor-pointer h-[46px] transition-all focus:outline-none focus:border-[#111] focus:shadow-[0_0_0_3px_rgba(17,17,17,0.08)]"
                >
                  <option value="">Selecione...</option>
                  {variacaoOptions.map((op) => (
                    <option key={op} value={op}>{op}</option>
                  ))}
                </select>
                {showVariacaoMsg && (
                  <small className="text-[#dc2626] text-[0.72em] block mt-1 font-semibold">
                    {"*Detectamos múltiplas versões para este ano."}
                  </small>
                )}
              </div>
            )}

            {/* Resultado */}
            {resultado && (
              <div className="mt-[18px] animate-[fadeInMacena_0.35s_ease]">
                <div className="bg-[#f8fafc] border border-[#e5e7eb] text-[#111] p-4 rounded-[14px] text-center shadow-[0_4px_10px_rgba(17,17,17,0.06)]">
                  <strong>Excelente escolha!</strong>
                  <ul className="text-left mt-[14px] bg-[#ffffff] p-3 rounded-[10px] border border-[#e5e7eb] list-none">
                    <li className="mb-1.5 text-[0.95em] text-[#374151] border-b border-dashed border-[#eef2f7] pb-1.5">
                      <strong className="text-[#111] inline-block w-24">Marca:</strong> {resultado.marca}
                    </li>
                    <li className="mb-1.5 text-[0.95em] text-[#374151] border-b border-dashed border-[#eef2f7] pb-1.5">
                      <strong className="text-[#111] inline-block w-24">Modelo:</strong> {resultado.modelo}
                    </li>
                    <li className="mb-1.5 text-[0.95em] text-[#374151] border-b border-dashed border-[#eef2f7] pb-1.5">
                      <strong className="text-[#111] inline-block w-24">Ano:</strong> {resultado.ano}
                    </li>
                    <li className="text-[0.95em] text-[#374151]">
                      <strong className="text-[#111] inline-block w-24">{"Versão:"}</strong> {resultado.variacao}
                    </li>
                  </ul>

                  {showUpsell && (
                    <div className="mt-3 bg-[#ffffff] border border-dashed border-[#111] p-3 rounded-[10px] text-left flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        checked={upsellChecked}
                        onChange={(e) => setUpsellChecked(e.target.checked)}
                        className="w-5 h-5 cursor-pointer accent-[#111] mt-0.5 shrink-0"
                      />
                      <div className="text-[0.92em] leading-[1.35] text-[#111]">
                        <span className="text-[#111] font-extrabold uppercase text-[0.82em] block mb-0.5 tracking-[0.03em]">
                          {"Oferta Especial:"}
                        </span>
                        {"Adicionar "}
                        <strong>{"Capa protetora impermeável"}</strong>
                        {" no mesmo frete?"}
                      </div>
                    </div>
                  )}

                  <div className="mt-[14px] text-[0.92em] font-semibold text-[#111] opacity-90">
                    {"Estoque Confirmado  |  Garantia Total"}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
