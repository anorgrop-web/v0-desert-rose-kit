import Link from "next/link"
import { Mail, Clock, CreditCard, Smartphone } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Logo and Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Jardim da Cida</h2>
          <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
            O kit de germinação de Rosas do Deserto oferece sementes, bandeja germinadora, 
            fertilizante orgânico e manual completo para você cultivar suas próprias plantas 
            exóticas em casa.
          </p>
        </div>

        {/* Customer Service */}
        <div className="mb-8 pb-8 border-b border-gray-800">
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Atendimento ao Cliente
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#2d8f47] shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-400 text-sm">Envie-nos um e-mail em:</p>
                <a 
                  href="mailto:info@jardimdacida.com.br" 
                  className="text-white hover:text-[#2d8f47] transition-colors text-sm"
                >
                  info@jardimdacida.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#2d8f47] shrink-0 mt-0.5" />
              <div>
                <p className="text-white text-sm">Chat ao vivo das 9:00 às 18:00</p>
                <p className="text-gray-400 text-xs">Segunda a Sexta (Horário de Brasília GMT-3)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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

          <div className="sm:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Formas de Pagamento
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-900 px-3 py-2 rounded">
                <Smartphone className="w-5 h-5 text-[#2d8f47]" />
                <span className="text-white text-xs font-medium">PIX</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-900 px-3 py-2 rounded">
                <CreditCard className="w-5 h-5 text-gray-400" />
                <span className="text-white text-xs font-medium">Boleto</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-900 px-3 py-2 rounded">
                <CreditCard className="w-5 h-5 text-blue-500" />
                <span className="text-white text-xs font-medium">Cartões</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800">
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
