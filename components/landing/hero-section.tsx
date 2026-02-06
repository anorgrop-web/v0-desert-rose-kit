import Image from "next/image"
import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-[#2d8f47] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="flex-1 text-white">
            {/* Stars Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f5a623] text-[#f5a623]" />
                ))}
              </div>
              <span className="text-white font-bold text-sm">4.7</span>
              <span className="text-white/70 text-sm">| Mais de 1000 avaliacoes verificadas</span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-balance">
              Tenha um Jardim de Explosão de Cores em Dias: Receba Rosas do Deserto Adultas e Prontas para Florir
            </h1>
            
            <p className="text-white/90 text-sm md:text-base mb-6 leading-relaxed max-w-md">
              Chega de esperar anos. Nossas matrizes possuem caudex robusto, raízes formadas e genética de cores raras garantida por enxertia.
            </p>

            {/* CTA - hidden on mobile, shown on desktop */}
            <div className="hidden md:flex justify-center md:justify-start">
              <a 
                href="#pricing"
                className="animate-pulse-cta inline-block bg-[#f5a623] hover:bg-[#e69500] text-black font-bold py-4 px-10 rounded-md transition-colors text-base md:text-lg uppercase tracking-wide"
              >
                QUERO MEU KIT ADULTO
              </a>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/RD/imagem%20hero.png"
                alt="Kit de Rosas do Deserto Adultas - Coleção 5 Cores Raras"
                width={500}
                height={400}
                className="rounded-lg shadow-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* CTA - shown on mobile below image, hidden on desktop */}
        <div className="flex md:hidden justify-center mt-6">
          <a 
            href="#pricing"
            className="animate-pulse-cta inline-block bg-[#f5a623] hover:bg-[#e69500] text-black font-bold py-4 px-10 rounded-md transition-colors text-base uppercase tracking-wide"
          >
            QUERO MEU KIT ADULTO
          </a>
        </div>
      </div>
    </section>
  )
}
