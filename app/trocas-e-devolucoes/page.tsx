import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { FooterSection } from "@/components/landing/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Trocas, Devoluções e Reembolso | Jardim da Cida",
  description: "Política de trocas, devoluções, garantia de 90 dias e procedimentos de reembolso da Jardim da Cida.",
}

export default function TrocasEDevolucoesPage() {
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
              Política de Trocas, Devoluções e Reembolso
            </h1>

            <p className="text-gray-700 mb-8 leading-relaxed">
              A Jardim da Cida (operada pela <strong>Anor Commerce LLC</strong>) preza pela qualidade de seus 
              produtos e pela satisfação total de seus clientes.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Garantia de 90 Dias
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Confiamos tanto na durabilidade do nosso produto que oferecemos uma garantia de 90 dias contra 
                  defeitos de fabricação ou problemas de qualidade.
                </p>
                <p>
                  Se você identificar algum problema com o produto dentro deste período, entre em contato conosco 
                  e resolveremos a situação rapidamente.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Direito de Arrependimento (7 Dias)
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Conforme o Código de Defesa do Consumidor, você tem o direito de desistir da compra em até 
                  7 (sete) dias corridos após o recebimento do produto, sem necessidade de justificativa.
                </p>
                <p>
                  <strong>Importante:</strong> O produto deve estar em sua embalagem original e sem indícios de uso.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Procedimento de Devolução (Estoque no Brasil)
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Possuímos um centro de logística reversa no Brasil, o que facilita e agiliza o processo para você:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    <strong>Solicitação:</strong> Envie um e-mail para{" "}
                    <a href="mailto:info@jardimdacida.com.br" className="text-[#2d8f47] hover:underline">
                      info@jardimdacida.com.br
                    </a>{" "}
                    informando seu número do pedido e o motivo da devolução.
                  </li>
                  <li>
                    <strong>Envio:</strong> Enviaremos instruções detalhadas para o envio ao nosso parceiro logístico nacional.
                  </li>
                  <li>
                    <strong>Inspeção:</strong> Após receber o produto, nossa equipe realizará a conferência em até 3 dias úteis.
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Reembolsos
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Após o recebimento e conferência do produto devolvido, o reembolso será processado em até 5 dias úteis 
                  no mesmo método de pagamento original.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Cartão de Crédito:</strong> O estorno aparecerá na sua fatura em 1 a 2 ciclos</li>
                  <li><strong>PIX/Boleto:</strong> Solicitaremos seus dados bancários para transferência</li>
                </ul>
              </div>
            </section>

            {/* Company Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Anor Commerce LLC</strong><br />
                1209 Mountain Road Place Northeast<br />
                Albuquerque, New Mexico, 87110, USA<br />
                E-mail: info@jardimdacida.com.br
              </p>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}
