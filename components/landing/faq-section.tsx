"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const faqs = [
  {
    question: "Por que elas vêm sem terra e vaso (Raiz Nua)?",
    answer: "Para garantir a segurança. A terra úmida em caixa fechada pode apodrecer as raízes. Elas aguentam até 20 dias fora da terra tranquilamente."
  },
  {
    question: "Elas já chegam com flor?",
    answer: "Geralmente enviamos sem folhas e flores para evitar o estresse da viagem. Mas como são adultas, assim que replantadas, voltam a florir rapidamente."
  },
  {
    question: "O que é o Jardim da Cida?",
    answer: "O Jardim da Cida é uma empresa especializada em produtos para jardinagem e cultivo de plantas exóticas, como as Rosas do Deserto. Oferecemos kits completos de plantas adultas enxertadas com garantia de cor."
  },
  {
    question: "Em quanto tempo vou receber minha compra?",
    answer: "Sim! Após a confirmação do pagamento, você receberá um código de rastreamento para acompanhar sua entrega em tempo real pelos Correios ou transportadora."
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
          Perguntas frequentes
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between bg-[#f5a623] hover:bg-[#e69500] text-left px-4 py-3 rounded-md transition-colors"
              >
                <span className="text-foreground font-medium text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronRight 
                  className={`w-5 h-5 text-foreground shrink-0 transition-transform ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="bg-[#f5f5dc] px-4 py-3 rounded-b-md -mt-1">
                  <p className="text-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
