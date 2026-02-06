import Image from "next/image"
import { Check } from "lucide-react"

const kit1Features = [
  "5 Plantas Adultas Enxertadas",
  "Cores: Amarela, Branca, Vermelha, Roxa, Negra",
  "Manual de Re-hidratação e Plantio",
  "Garantia de Entrega Viva",
  "Fertilizante, Fungicída e Susbtrato adequado",
  "Suporte 7 dias por semana",
]

const kit2Features = [
  "10 Plantas Adultas Enxertadas",
  "Cores: Amarela, Branca, Vermelha, Roxa, Negra",
  "Manual de Re-hidratação e Plantio",
  "Garantia de Entrega Viva",
  "Fertilizante, Fungicída e Susbtrato adequado em dobro",
  "Frete Grátis para todo Brasil",
  "Suporte 7 dias por semana",
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
                Kit Simples - Coleção<br/>5 Cores Raras
              </h3>
              
              {/* Product Image */}
              <div className="w-full max-w-md mx-auto mb-6">
                <Image
                  src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/RD/Oferta%201.png"
                  alt="Kit Coleção 5 Cores Raras"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <p className="text-muted-foreground text-sm mb-1">Tudo isso por apenas</p>
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  R$ 69,90
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
                href="https://pagamento-seguro.jardimdacida.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white border-2 border-foreground text-foreground font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors text-sm"
              >
                GARANTIR MEU KIT
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
                Kit em Dobro - Coleção<br/>5 Cores Raras
              </h3>
              
              {/* Product Image */}
              <div className="w-full max-w-md mx-auto mb-6">
                <Image
                  src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/RD/Group%201105.png"
                  alt="Kit Coleção 5 Cores Raras"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <p className="text-muted-foreground text-sm mb-1">
                  Tudo isso por apenas
                </p>
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  R$ 104,90
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
                href="https://pagamento-seguro.jardimdacida.com/carrinho/dobro"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#2d8f47] hover:bg-[#236b38] text-white font-semibold py-3 px-6 rounded-md transition-colors text-sm"
              >
                GARANTIR MEU KIT EM DOBRO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
