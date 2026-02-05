import Link from "next/link"
import { ArrowLeft, Mail, Clock } from "lucide-react"
import { FooterSection } from "@/components/landing/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato | Jardim da Cida",
  description: "Entre em contato com o Jardim da Cida. Estamos prontos para ajudá-lo com dúvidas sobre produtos, pedidos e entregas.",
}

export default function ContatoPage() {
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
              Contato
            </h1>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Entre em contato conosco através dos canais abaixo. Nossa equipe está pronta para ajudá-lo com 
              dúvidas sobre produtos, pedidos, entregas e muito mais.
            </p>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Email Card */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-[#2d8f47] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#2d8f47] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">E-mail</h3>
                    <a 
                      href="mailto:info@jardimdacida.com.br"
                      className="text-[#2d8f47] hover:underline text-sm font-medium"
                    >
                      info@jardimdacida.com.br
                    </a>
                    <p className="text-gray-600 text-sm mt-2">
                      Responderemos em até 24 horas úteis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-[#2d8f47] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#2d8f47] rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-700 text-sm font-medium">
                      Segunda a Sexta: 9:00 às 18:00
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Horário de Brasília (GMT-3)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Informações da Empresa</h3>
              <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <p><strong className="text-gray-900">Razão Social:</strong> Anor Commerce LLC</p>
                <p>
                  <strong className="text-gray-900">Endereço:</strong> 1209 Mountain Road Place Northeast, 
                  Albuquerque, New Mexico, 87110, USA
                </p>
                <p>
                  <strong className="text-gray-900">E-mail:</strong>{" "}
                  <a href="mailto:info@jardimdacida.com.br" className="text-[#2d8f47] hover:underline">
                    info@jardimdacida.com.br
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-2">
              Jardim da Cida é uma marca operada por Anor Commerce LLC.
            </p>
            <p className="text-xs text-gray-500">
              © 2025 Jardim da Cida | Todos os direitos reservados
            </p>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}
