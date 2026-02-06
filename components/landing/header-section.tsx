"use client"

import { useState } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"

const navLinks = [
  { label: "CARACTERISTICAS", href: "#caracteristicas" },
  { label: "COMO FUNCIONA", href: "#como-funciona" },
  { label: "AVALIACOES", href: "#avaliacoes" },
  { label: "PERGUNTAS FREQUENTES", href: "#perguntas" },
  { label: "OFERTAS", href: "#pricing" },
]

const marqueeItems = [
  "ENVIO RAPIDO PARA TODO BRASIL",
  "GARANTIA DE ENTREGA VIVA",
  "SUPORTE 7 DIAS POR SEMANA",
  "FRETE GRATIS PARA KIT EM DOBRO",
  "PAGAMENTO SEGURO",
]

export function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top Promo Bar - Dark */}
      <div className="bg-[#1a1a2e] text-white py-2 text-center">
        <p className="text-xs md:text-sm font-semibold tracking-wide uppercase">
          OFERTA ESPECIAL POR TEMPO LIMITADO | FRETE GRATIS NO KIT EM DOBRO
        </p>
      </div>

      {/* Benefits Marquee Bar - Gray */}
      <div className="bg-[#f0f0f0] py-2 overflow-hidden border-b border-gray-200">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 mx-8 text-xs md:text-sm text-gray-700 font-medium tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2d8f47] shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 bg-[#2d8f47] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">JC</span>
              </div>
              <span className="text-foreground font-bold text-lg">
                Jardim<span className="text-[#2d8f47]">daCida</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-600 hover:text-foreground transition-colors text-xs font-semibold tracking-wider uppercase"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <a
                href="https://pagamento-seguro.jardimdacida.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-foreground transition-colors"
                aria-label="Carrinho"
              >
                <ShoppingCart className="w-5 h-5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-gray-600 hover:text-foreground transition-colors"
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-gray-700 hover:text-foreground hover:bg-gray-50 transition-colors text-sm font-semibold tracking-wider uppercase px-4 py-3 rounded-md"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
