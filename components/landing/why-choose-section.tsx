import Image from "next/image"

const reasons = [
  {
    number: 1,
    text: "Fácil de usar, sem necessidade de conhecimentos prévios em jardinagem"
  },
  {
    number: 2,
    text: "Todos os produtos são orgânicos e seguros para o meio ambiente e para você"
  },
  {
    number: 3,
    text: "A bandeja germinadora permite que as sementes germinem de maneira uniforme e organizada"
  },
  {
    number: 4,
    text: "O manual de plantio fornece orientações passo a passo para garantir o sucesso no cultivo das rosas do deserto"
  },
]

export function WhyChooseSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Por que escolher o Kit de Germinação de{" "}
              <span className="text-[#2d8f47]">Rosas do Deserto</span> do Jardim da Cida?
            </h2>

            <ul className="space-y-4 mb-8">
              {reasons.map((reason) => (
                <li key={reason.number} className="flex items-start gap-3">
                  <span className="text-[#2d8f47] font-bold text-lg shrink-0">
                    {reason.number}.
                  </span>
                  <span className="text-foreground text-sm md:text-base leading-relaxed">
                    {reason.text}
                  </span>
                </li>
              ))}
            </ul>

            <a 
              href="#pricing"
              className="inline-block bg-[#f5a623] hover:bg-[#e69500] text-black font-semibold py-3 px-8 rounded-md transition-colors text-sm md:text-base"
            >
              Adquira seu Kit
            </a>
          </div>

          {/* Right Content - Product Image */}
          <div className="flex-1">
            <div className="relative w-full max-w-sm mx-auto">
              <Image
                src="/images/kit-product.jpg"
                alt="Kit Completo de Germinação de Rosas do Deserto"
                width={400}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
