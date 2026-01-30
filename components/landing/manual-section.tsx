import Image from "next/image"

export function ManualSection() {
  return (
    <section className="bg-gradient-to-br from-[#2d8f47] to-[#1a5c2e] py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-4 text-balance">
              Garanta o sucesso no plantio das suas Rosas do Deserto
            </h2>
            
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md">
              Não se preocupe com a germinação das suas sementes. Nosso kit inclui um manual completo de plantio para ajudá-lo a ter sucesso.
            </p>
          </div>

          {/* Right Content - Manual Image */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-xs mx-auto">
              <Image
                src="/images/manual.jpg"
                alt="Manual de Germinação de Rosas do Deserto"
                width={300}
                height={300}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
