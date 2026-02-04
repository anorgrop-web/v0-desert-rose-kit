import Image from "next/image"

const reasons = [
  {
    number: 1,
    text: "Beleza instantânea: não precisa esperar meses ou anos. Suas rosas do deserto já chegam adultas, com 30-40cm de altura, floridas e prontas para decorar sua casa imediatamente",
    isBonus: false
  },
  {
    number: 2,
    text: "Kit 100% completo: plantas + vasos decorativos estilo bacia + substrato premium + fertilizante orgânico + fungicida preventivo. Tudo que você precisa, nada mais para comprar",
    isBonus: false
  },
  {
    number: 3,
    text: "BÔNUS EXCLUSIVO: Manual de Aceleração de Floração com técnicas profissionais para ter flores o ano inteiro, aumentando a frequência de floração em até 3x",
    isBonus: true
  },
  {
    number: 4,
    text: "Garantia de saúde certificada: todas as plantas são inspecionadas por especialistas antes do envio e chegam vigorosas, livres de pragas e prontas para prosperar por 10-20 anos",
    isBonus: false
  },
  {
    number: 5,
    text: "Suporte vitalício: acesso ao grupo VIP de cuidadores via WhatsApp para tirar dúvidas, compartilhar fotos e aprender com especialistas sempre que precisar",
    isBonus: false
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
              Por que escolher o Kit de{" "}
              <span className="text-[#2d8f47]">Rosas do Deserto Adultas</span> do Jardim da Cida?
            </h2>

            <ul className="space-y-4 mb-8">
              {reasons.map((reason) => (
                <li key={reason.number} className="flex items-start gap-3">
                  {reason.isBonus ? (
                    <span className="text-[#f5a623] font-bold text-lg shrink-0">
                      🎁
                    </span>
                  ) : (
                    <span className="text-[#2d8f47] font-bold text-lg shrink-0">
                      {reason.number}.
                    </span>
                  )}
                  <div className="flex flex-col gap-1">
                    {reason.isBonus && (
                      <span className="inline-block bg-[#f5a623] text-black font-semibold text-xs px-2 py-1 rounded w-fit">
                        BÔNUS GRÁTIS
                      </span>
                    )}
                    <span className="text-foreground text-sm md:text-base leading-relaxed">
                      {reason.text}
                    </span>
                  </div>
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
                src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/RD/Section%20de%20beneficios.png"
                alt="Kit Completo de Rosas do Deserto Adultas"
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
