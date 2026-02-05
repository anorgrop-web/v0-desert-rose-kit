import Link from "next/link"
import Image from "next/image"
import { Mail, Clock } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Logo and Description */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Jardim da Cida</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Rosas do Deserto adultas enxertadas, prontas para florir. Caudex formado, cores garantidas e sanidade total. Transforme sua casa com plantas exóticas de alta qualidade.
          </p>
        </div>

        {/* Customer Service */}
        <div className="mb-8 pb-8 border-b border-gray-800">
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider text-center">
            Atendimento ao Cliente
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#2d8f47] shrink-0" />
              <div className="text-center sm:text-left">
                <p className="text-gray-400 text-sm">Envie-nos um e-mail em:</p>
                <a 
                  href="mailto:info@jardimdacida.com.br" 
                  className="text-white hover:text-[#2d8f47] transition-colors text-sm"
                >
                  info@jardimdacida.com.br
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#2d8f47] shrink-0" />
              <div className="text-center sm:text-left">
                <p className="text-white text-sm">Chat ao vivo das 9:00 às 18:00</p>
                <p className="text-gray-400 text-xs">Segunda a Sexta (Horário de Brasília GMT-3)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Informação
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/termos-de-uso" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link 
                  href="/politica-de-privacidade" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link 
                  href="/trocas-e-devolucoes" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Trocas e Devoluções
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Pedido
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/envio-e-entrega" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Envio e Entrega
                </Link>
              </li>
              <li>
                <Link 
                  href="/trocas-e-devolucoes" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Devoluções e Reembolsos
                </Link>
              </li>
              <li>
                <Link 
                  href="/contato" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Formas de Pagamento
            </h4>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Image
                src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/Comum%20/card-pix.svg"
                alt="PIX"
                width={50}
                height={32}
                className="h-8 w-auto"
              />
              <Image
                src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/Comum%20/card-mastercard.svg"
                alt="Mastercard"
                width={50}
                height={32}
                className="h-8 w-auto"
              />
              <Image
                src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/Comum%20/card-visa.svg"
                alt="Visa"
                width={50}
                height={32}
                className="h-8 w-auto"
              />
              <Image
                src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/Comum%20/card-discover.svg"
                alt="Discover"
                width={50}
                height={32}
                className="h-8 w-auto"
              />
              <Image
                src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/Comum%20/amex.Csr7hRoy.svg"
                alt="American Express"
                width={50}
                height={32}
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-xs mb-3 leading-relaxed">
            Jardim da Cida é uma marca operada por Anor Commerce LLC. Endereço: 1209 Mountain Road Place Northeast, 
            Albuquerque, New Mexico, 87110, USA.
          </p>
          <p className="text-gray-500 text-xs">
            © 2025 Jardim da Cida | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
