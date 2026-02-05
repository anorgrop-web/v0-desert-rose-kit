"use client"

import { Star } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const videos = [
  { id: "IEj_X6g085w" },
  { id: "lLNX-SQ6wWg" },
  { id: "2hOob67tL4c" },
  { id: "p8Aq46mp06A" },
]

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!api) return
    setSelectedIndex(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) return
    onSelect()
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api, onSelect])

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
          Veja o que nossos clientes estao dizendo
        </h2>

        <p className="text-center text-muted-foreground text-sm md:text-base mb-8">
          Historias reais de quem ja transformou sua casa com o Jardim da Cida
        </p>

        {/* Video Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {videos.map((video, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-[80%] sm:basis-[60%] md:basis-1/3"
              >
                <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1`}
                    title={`Depoimento de cliente ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-[9/16] border-0"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2.5 mt-6">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`rounded-full transition-all ${
                index === selectedIndex
                  ? "w-3 h-3 bg-[#2d8f47]"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ver depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
