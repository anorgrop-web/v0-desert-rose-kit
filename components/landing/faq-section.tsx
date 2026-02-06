"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const faqs = [
  {
    question: "O as plantas do Kit já vem com flores",
    answer: "Sim, desenvolvemos um método com caixa rígida que garante que suas plantes já vão chegar floridas."
  },
  {
    question: "Se as plantas chegarem danificadas, tenho garantia?",
    answer: "Damos garantia de saúde de cada unidade e também garatia de transporte. Ou seja, se suas plantas chegarem com algum tipo de avaria, nós enviamos outra para você."
  },
  {
    question: "O que é o Jardim da Cida?",
    answer: "O Jardim da Cida é uma empresa especializada em produtos para jardinagem e cultivo de plantas exóticas, como as Rosas do Deserto. Oferecemos kits completos de plantas adultas enxertadas com garantia de cor."
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="perguntas" className="bg-background py-12 md:py-16">
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
