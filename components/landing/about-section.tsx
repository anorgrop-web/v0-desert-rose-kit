import Image from "next/image"

export function AboutSection() {
  return (
    <section className="bg-[#FFF9F0] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/RD/foto%20floricultura.jpeg"
              alt="Lúcia Fernandes, proprietária do Jardim da Cida em Ribeirão Preto"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-sm bg-green-50 text-green-700 rounded-full px-4 py-1.5 font-medium mb-4">
              <span>🌿</span>
              <span>NOSSA HISTÓRIA</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d8f47] mb-6">
              Conheça Mais Sobre Nossa História
            </h2>

            {/* Body Text */}
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Desde <span className="font-semibold">1985</span>, o Jardim da Cida é sinônimo de qualidade e tradição em plantas ornamentais em Ribeirão Preto - SP.
              </p>

              <p>
                Fundada por <span className="font-semibold">Aparecida Fernanda</span> e hoje comandada por sua filha <span className="font-semibold">Lúcia Fernandes</span>, nossa floricultura atravessa gerações mantendo viva a paixão por flores e o compromisso com a excelência.
              </p>

              <p>
                Em 2026, expandimos para o digital: agora você pode receber em qualquer lugar do Brasil as mesmas plantas exclusivas que cultivamos com dedicação há quase <span className="font-semibold">40 anos</span>.
              </p>

              <p>
                Nossa missão? Levar rosas do deserto de qualidade excepcional e conhecimento especializado para apaixonados por jardinagem em todo o país. Do cultivo ao envio, cada detalhe recebe o cuidado de quem realmente entende de plantas.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-4 flex-wrap mt-8">
              <div className="text-sm bg-white px-4 py-2 rounded-full shadow-sm">
                🏆 40 anos de experiência
              </div>
              <div className="text-sm bg-white px-4 py-2 rounded-full shadow-sm">
                🌱 2 gerações de especialistas
              </div>
              <div className="text-sm bg-white px-4 py-2 rounded-full shadow-sm">
                📦 Enviamos para todo Brasil
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
