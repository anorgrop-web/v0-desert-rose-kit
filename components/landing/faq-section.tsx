"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const faqs = [
  {
    question: "O que é o Jardim da Cida?",
    answer: "O Jardim da Cida é uma empresa especializada em produtos para jardinagem e cultivo de plantas exóticas, como as Rosas do Deserto. Oferecemos kits completos de germinação com tudo o que você precisa para começar seu cultivo em casa."
  },
  {
    question: "Árvores podem ser plantadas em calçadas?",
    answer: "Sim, algumas espécies são adequadas para calçadas, mas as Rosas do Deserto são ideais para vasos e ambientes internos ou jardins, devido ao seu porte compacto e necessidade de sol direto."
  },
  {
    question: "Vocês ensinam a germinar e plantar?",
    answer: "Sim! Nosso kit inclui um manual completo de germinação com instruções passo a passo para garantir o sucesso no cultivo das suas Rosas do Deserto, desde a semeadura até os cuidados com as mudas."
  },
  {
    question: "Eu consigo acompanhar minha compra?",
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
