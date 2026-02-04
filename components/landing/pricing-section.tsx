import Image from "next/image"
import { Check } from "lucide-react"

const kit1Features = [
  "5 Plantas Adultas Enxertadas",
  "Cores: Amarela, Branca, Vermelha, Roxa, Negra",
  "Manual de Re-hidratação e Plantio",
  "Garantia de Entrega Viva",
  "Frete Grátis para Sul e Sudeste",
]

const kit2Features = [
  "5 Plantas Adultas Enxertadas",
  "Cores: Amarela, Branca, Vermelha, Roxa, Negra",
  "Manual de Re-hidratação e Plantio",
  "Garantia de Entrega Viva",
  "Frete Grátis para Sul e Sudeste",
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Kit 1 Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6 md:p-8">
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#2d8f47] text-center mb-4">
                Kit Coleção<br/>5 Cores Raras
              </h3>
              
              {/* Product Image */}
              <div className="w-40 h-40 mx-auto mb-6">
                <Image
                  src="/images/kit-product.jpg"
                  alt="Kit Florescer Rosas do Deserto"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <p className="text-muted-foreground text-sm mb-1">Tudo isso por apenas</p>
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  R$ 199,90
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {kit1Features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#2d8f47] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a 
                href="#"
                className="block w-full text-center bg-white border-2 border-foreground text-foreground font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors text-sm"
              >
                Eu quero meu kit
              </a>
            </div>
          </div>

          {/* Kit 2 Card - Highlighted */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-[#2d8f47] overflow-hidden hover:shadow-xl transition-shadow relative">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-[#2d8f47] text-white text-xs font-semibold px-3 py-1 rounded-full">
              Mais Vendido
            </div>
            
            <div className="p-6 md:p-8">
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#2d8f47] text-center mb-4">
                Kit Coleção<br/>5 Cores Raras
              </h3>
              
              {/* Product Image */}
              <div className="w-40 h-40 mx-auto mb-6">
                <Image
                  src="/images/kit-product.jpg"
                  alt="Kit 2 Florescer Rosas do Deserto"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <p className="text-muted-foreground text-sm mb-1">
                  Tudo isso por apenas
                </p>
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  R$ 199,90
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {kit2Features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#2d8f47] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className={`text-sm ${feature === "FRETE GRÁTIS" ? "text-[#2d8f47] font-semibold" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a 
                href="#"
                className="block w-full text-center bg-[#2d8f47] hover:bg-[#236b38] text-white font-semibold py-3 px-6 rounded-md transition-colors text-sm"
              >
                Eu quero meu kit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
