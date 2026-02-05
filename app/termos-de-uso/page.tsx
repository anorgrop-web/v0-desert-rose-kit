import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { FooterSection } from "@/components/landing/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso e Política de Envio | Jardim da Cida",
  description: "Termos de uso, política de envio e legislação aplicável da Jardim da Cida - Anor Commerce LLC.",
}

export default function TermosDeUsoPage() {
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
              Termos de Uso e Política de Envio
            </h1>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Este site é operado pela <strong>Anor Commerce LLC</strong>, sediada em: 
              1209 Mountain Road Place Northeast, Albuquerque, New Mexico, 87110, USA.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Política de Envio (Estoque Nacional)
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Todos os produtos Jardim da Cida são despachados diretamente do nosso estoque próprio no Brasil, 
                  o que garante rapidez e isenção de taxas alfandegárias para o cliente final.
                </p>
                <p><strong>Prazos estimados de entrega:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Sudeste: 8 a 12 dias úteis</li>
                  <li>Sul: 10 a 14 dias úteis</li>
                  <li>Demais Regiões: 15 a 18 dias úteis</li>
                </ul>
                <p>
                  Você receberá um código de rastreamento por e-mail assim que seu pedido for postado.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Suporte ao Cliente
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Nosso atendimento funciona em horário comercial, de segunda a sexta-feira, das 9:00 às 18:00 
                  (Horário de Brasília GMT-3).
                </p>
                <p>
                  Para dúvidas, suporte ou informações sobre pedidos, entre em contato conosco:
                </p>
                <p>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:info@jardimdacida.com.br" className="text-[#2d8f47] hover:underline">
                    info@jardimdacida.com.br
                  </a>
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Legislação Aplicável
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Estes Termos são regidos pelas leis do Estado do Novo México (EUA), respeitando as leis de 
                  proteção ao consumidor onde o serviço é prestado (Brasil).
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
