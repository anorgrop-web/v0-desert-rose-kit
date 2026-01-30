import Image from "next/image"

const roseVarieties = [
  { src: "/images/rosa-pink.jpg", label: "Pink" },
  { src: "/images/rosa-red.jpg", label: "Vermelha" },
  { src: "/images/rosa-purple.jpg", label: "Roxa" },
  { src: "/images/rosa-multicolor.jpg", label: "Multicolor" },
]

export function VarietiesSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="border-2 border-dashed border-[#2d8f47] rounded-lg p-6 md:p-8">
          <p className="text-center text-foreground text-sm md:text-base leading-relaxed mb-6">
            O fertilizante e fungicida orgânico feito de cal hidratada garantirá que as plantas{" "}
            <span className="text-[#2d8f47]">cresçam saudáveis e livres de doenças</span>, enquanto o substrato à base de composto orgânico oferece a nutrição necessária para as sementes germinarem rapidamente e crescerem fortes.
          </p>
          
          <p className="text-center text-foreground font-semibold text-sm md:text-base mb-8">
            Com esse kit, você pode desfrutar de rosas do deserto em sua casa em poucas semanas!
          </p>

          {/* Rose Varieties Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roseVarieties.map((variety, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={variety.src || "/placeholder.svg"}
                    alt={`Rosa do Deserto ${variety.label}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
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
