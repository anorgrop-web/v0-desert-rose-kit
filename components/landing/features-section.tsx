"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const seedImages = [
  "https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/RD/mosaico%20%281%29.webp",
  "/images/seeds-2.jpg",
  "/images/seeds-3.jpg",
  "/images/seeds-4.jpg",
  "/images/seeds-5.jpg",
  "/images/seeds-6.jpg",
]

const features = [
  "5 Rosas do Deserto Adultas (30 a 40cm) prontas para florir",
  "Cores Garantidas: Amarela, Branca, Vermelha, Roxa e Negra",
  "Caudex Bem Formado: Base grossa e escultural",
  "Sanidade Total: Livres de pragas e tratadas com fungicida",
  "Envio Técnico: Preparadas em Raiz Nua para aguentar a viagem",
]

export function FeaturesSection() {
  return (
    <section className="bg-[#f5f5dc] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Seed Grid */}
          <div className="grid grid-cols-2 gap-2 max-w-xs">
            {seedImages.map((src, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-md">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Sementes de Rosa do Deserto ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Features List */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
              O que vem no seu Kit Premium de 5 Cores?
            </h2>
            
            <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
              Diferente das sementes, onde a cor é uma 'loteria', nossas plantas são Enxertadas. Você recebe exatamente as cores que comprou, com garantia genética.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2d8f47] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
