import Image from "next/image"

const roseVarieties = [
  { src: "https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/RD/RD%20amarela.png", label: "Amarela" },
  { src: "https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/RD/RD%20branca.png", label: "Branca" },
  { src: "https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/RD/RD%20vermelha.png", label: "Vermelha" },
  { src: "https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/RD/RD%20roxa.png", label: "Roxa" },
  { src: "https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/RD/RD%20negra.png", label: "Negra" },
]

export function VarietiesSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="border-2 border-dashed border-[#2d8f47] rounded-lg p-6 md:p-8">
          <p className="text-center text-foreground text-sm md:text-base leading-relaxed mb-6">
            <span className="text-[#2d8f47] font-semibold">Garantia de Cor via Enxertia:</span> sua Rosa Negra nascerá Negra. Sem surpresas.
          </p>
          
          <p className="text-center text-foreground font-semibold text-sm md:text-base mb-8">
            Com esse kit, você pode desfrutar de rosas do deserto adultas florindo em sua casa em semanas!
          </p>

          {/* Rose Varieties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 max-w-md sm:max-w-none mx-auto">
            {roseVarieties.map((variety, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={variety.src || "/placeholder.svg"}
                    alt={`Rosa do Deserto ${variety.label}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white text-base md:text-xs px-4 py-2 md:py-1 rounded-md font-semibold">
                  {variety.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
