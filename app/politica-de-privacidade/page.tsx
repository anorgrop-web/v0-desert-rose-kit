import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { FooterSection } from "@/components/landing/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade | Jardim da Cida",
  description: "Política de privacidade e proteção de dados da Jardim da Cida - Anor Commerce LLC.",
}

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2d8f47] transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>

          {/* Content Card */}
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Política de Privacidade
            </h1>

            <p className="text-gray-700 mb-8 leading-relaxed">
              A <strong>Anor Commerce LLC</strong> respeita sua privacidade e está comprometida em proteger 
              seus dados pessoais.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Uso das Informações
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Utilizamos seus dados (Nome, CPF, Endereço, Telefone) exclusivamente para:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Processar o pagamento via gateway seguro</li>
                  <li>Emitir Nota Fiscal e etiquetas de envio</li>
                  <li>Enviar atualizações sobre o status do pedido</li>
                </ul>
                <p>
                  Não compartilhamos seus dados com terceiros, exceto quando necessário para completar sua transação 
                  (processadores de pagamento, transportadoras).
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Segurança
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Todas as transações são criptografadas usando tecnologia SSL/TLS. Não armazenamos números completos 
                  de cartão de crédito em nossos servidores.
                </p>
                <p>
                  Utilizamos gateways de pagamento certificados e em conformidade com os padrões internacionais de 
                  segurança (PCI-DSS).
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Contato
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Para solicitar exclusão ou alteração de dados, ou esclarecer qualquer dúvida sobre nossa política 
                  de privacidade, entre em contato:
                </p>
                <p>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:info@jardimdacida.com.br" className="text-[#2d8f47] hover:underline">
                    info@jardimdacida.com
                  </a>
                </p>
              </div>
            </section>

            {/* Company Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Anor Commerce LLC</strong><br />
                1209 Mountain Road Place Northeast<br />
                Albuquerque, New Mexico, 87110, USA<br />
                E-mail: info@jardimdacida.com
              </p>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}
