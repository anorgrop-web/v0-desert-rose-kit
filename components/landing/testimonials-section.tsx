"use client"

import { Star, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react"
import { useCallback, useEffect, useState, useRef } from "react"
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
  const [unmutedIndex, setUnmutedIndex] = useState<number | null>(null)
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([])

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

  const sendCommand = (iframe: HTMLIFrameElement | null, func: string) => {
    if (iframe) {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func }),
        "*"
      )
    }
  }

  const toggleMuteForVideo = (index: number) => {
    if (unmutedIndex === index) {
      sendCommand(iframeRefs.current[index], "mute")
      setUnmutedIndex(null)
    } else {
      if (unmutedIndex !== null) {
        sendCommand(iframeRefs.current[unmutedIndex], "mute")
      }
      sendCommand(iframeRefs.current[index], "unMute")
      setUnmutedIndex(index)
    }
  }

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
        <div className="relative">
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
                  <div className="relative rounded-xl overflow-hidden shadow-lg border border-border">
                    <iframe
                      ref={(el) => { iframeRefs.current[index] = el }}
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1&enablejsapi=1`}
                      title={`Depoimento de cliente ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full aspect-[9/16] border-0"
                    />
                    {/* Individual Mute Button */}
                    <button
                      onClick={() => toggleMuteForVideo(index)}
                      className={`absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-all shadow-lg ${
                        unmutedIndex === index
                          ? "bg-[#f5a623] text-black hover:bg-[#e69500]"
                          : "bg-[#2d8f47]/90 text-white hover:bg-[#236b38]"
                      }`}
                      aria-label={unmutedIndex === index ? "Mutar video" : "Ativar som"}
                    >
                      {unmutedIndex === index ? (
                        <>
                          <Volume2 className="w-4 h-4" />
                          <span className="hidden sm:inline">Som ativo</span>
                        </>
                      ) : (
                        <>
                          <VolumeX className="w-4 h-4" />
                          <span className="hidden sm:inline">Ativar som</span>
                        </>
                      )}
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Arrow Left */}
          <button
            onClick={() => api?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-10 bg-white shadow-lg border border-border rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#2d8f47]" />
          </button>

          {/* Arrow Right */}
          <button
            onClick={() => api?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 z-10 bg-white shadow-lg border border-border rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Proximo depoimento"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#2d8f47]" />
          </button>
        </div>

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
