import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { FooterSection } from "@/components/landing/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Envio e Entrega | Jardim da Cida",
  description: "Prazos de entrega, frete, rastreamento e informações sobre envio dos produtos Jardim da Cida.",
}

export default function EnvioEEntregaPage() {
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
              Política de Envio e Entrega
            </h1>

            <p className="text-gray-700 mb-8 leading-relaxed">
              A Jardim da Cida (operada pela <strong>Anor Commerce LLC</strong>) trabalha para que você receba 
              seu produto de forma rápida e segura.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Prazo de Processamento
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Após a confirmação do pagamento, seu pedido será processado em até 2 dias úteis. Você receberá 
                  um código de rastreamento assim que o produto for despachado.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Prazo de Entrega
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  O prazo de entrega varia de acordo com sua localização:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Sudeste:</strong> 8 a 12 dias úteis</li>
                  <li><strong>Sul:</strong> 10 a 14 dias úteis</li>
                  <li><strong>Demais Regiões:</strong> 15 a 18 dias úteis</li>
                </ul>
                <p>
                  O código de rastreamento será enviado automaticamente para seu e-mail após a postagem.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Frete
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Oferecemos <strong>frete grátis para todo o Brasil</strong> em todas as compras do Kit 2 realizadas 
                  no nosso site.
                </p>
                <p>
                  Para o Kit 1, o frete é calculado automaticamente no checkout de acordo com seu CEP.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Rastreamento
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Você receberá um código de rastreamento por e-mail assim que seu pedido for postado. Com esse 
                  código, você pode acompanhar o status da entrega diretamente no site dos Correios ou da 
                  transportadora responsável.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Endereço de Entrega
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Certifique-se de que o endereço informado esteja correto e completo no momento da compra.
                </p>
                <p>
                  A Anor Commerce LLC não se responsabiliza por entregas em endereços incorretos ou incompletos 
                  fornecidos pelo cliente.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Problemas na Entrega
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Caso ocorra algum problema com a entrega (extravio, atraso ou dano durante o transporte), 
                  entre em contato conosco imediatamente:
                </p>
                <p>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:info@jardimdacida.com.br" className="text-[#2d8f47] hover:underline">
                    info@jardimdacida.com.br
                  </a>
                </p>
                <p>
                  Nossa equipe está pronta para resolver qualquer situação da melhor forma possível.
                </p>
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
