import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-[#2d8f47] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="flex-1 text-white">
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#2d8f47] font-bold text-xs">JC</span>
                </div>
                <span className="text-white font-semibold text-sm">Jardim<br/>da Cida</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-balance">
              Tenha um Jardim de Explosão de Cores em Dias: Receba Rosas do Deserto Adultas e Prontas para Florir
            </h1>
            
            <p className="text-white/90 text-sm md:text-base mb-6 leading-relaxed max-w-md">
              Chega de esperar anos. Nossas matrizes possuem caudex robusto, raízes formadas e genética de cores raras garantida por enxertia.
            </p>

            <a 
              href="#pricing"
              className="inline-block bg-[#f5a623] hover:bg-[#e69500] text-black font-semibold py-3 px-8 rounded-md transition-colors text-sm md:text-base"
            >
              Quero Meu Kit Adulto
            </a>
          </div>

          {/* Right Content - Product Image */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/RD/imagem%20hero.png"
                alt="Kit de Germinação de Rosas do Deserto - Manual, sementes, bandeja e fertilizante"
                width={500}
                height={400}
                className="rounded-lg shadow-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
