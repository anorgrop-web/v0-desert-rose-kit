import Image from "next/image"
import { Check } from "lucide-react"

const premiumKitFeatures = [
  "5 Plantas Adultas Enxertadas",
  "Cores: Amarela, Branca, Vermelha, Roxa, Negra",
  "Manual de Re-hidratação e Plantio",
  "Garantia de Entrega Viva",
  "Frete Grátis para Sul e Sudeste",
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Main Kit Card - Centered */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-[#2d8f47] overflow-hidden hover:shadow-xl transition-shadow relative max-w-2xl mx-auto">
          {/* Badge */}
          <div className="absolute top-4 right-4 bg-[#2d8f47] text-white text-xs font-semibold px-3 py-1 rounded-full">
            Oferta Premium
          </div>
          
          <div className="p-6 md:p-8">
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-[#2d8f47] text-center mb-4">
              Kit Coleção 5 Cores Raras
            </h3>
            
            {/* Product Image */}
            <div className="w-48 h-48 mx-auto mb-6">
              <Image
                src="/images/kit-product.jpg"
                alt="Kit Coleção 5 Cores Raras"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-muted-foreground text-sm mb-1">
                Invista agora por apenas
              </p>
              <p className="text-4xl md:text-5xl font-bold text-foreground">
                R$ 199,90
              </p>
              <p className="text-[#2d8f47] text-sm font-semibold mt-2">
                Parcele em até 3x sem juros
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-6">
              {premiumKitFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#2d8f47] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground text-sm font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a 
              href="#"
              className="block w-full text-center bg-[#f5a623] hover:bg-[#e69500] text-black font-bold py-4 px-6 rounded-md transition-colors text-base"
            >
              Quero Meu Kit Adulto Agora
            </a>
            
            <p className="text-center text-xs text-muted-foreground mt-4">
              Entrega garantida em até 15 dias úteis
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
