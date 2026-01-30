"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    image: "/images/testimonial-1.jpg",
    name: "Maria Silva",
  },
  {
    image: "/images/testimonial-2.jpg",
    name: "João Santos",
  },
  {
    image: "/images/testimonial-3.jpg",
    name: "Ana Costa",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-[#f5a623] text-[#f5a623]" />
          ))}
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2d8f47] text-center mb-2">
          Quem conhece, recomenda
        </h2>
        
        <p className="text-center text-muted-foreground text-sm md:text-base mb-8">
          Veja os comentários de clientes que compraram no Jardim da Cida
        </p>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[320px] snap-center"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`Depoimento de ${testimonial.name}`}
                    width={320}
                    height={400}
                    className="w-full h-[350px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-[#2d8f47]" : "bg-gray-300"
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
