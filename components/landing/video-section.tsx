"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Volume2, VolumeX } from "lucide-react"

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        options: {
          videoId: string
          playerVars: Record<string, number | string>
          events: {
            onReady: (event: { target: YTPlayer }) => void
            onStateChange: (event: { data: number; target: YTPlayer }) => void
          }
        }
      ) => YTPlayer
      PlayerState: {
        ENDED: number
        PLAYING: number
        PAUSED: number
      }
    }
    onYouTubeIframeAPIReady: () => void
  }
}

interface YTPlayer {
  mute: () => void
  unMute: () => void
  setVolume: (volume: number) => void
  seekTo: (seconds: number) => void
  playVideo: () => void
  getPlayerState: () => number
}

const VIDEO_ID = "85xBlUQ-7l0"

export function VideoSection() {
  const [isMuted, setIsMuted] = useState(true)
  const [playerReady, setPlayerReady] = useState(false)
  const [apiLoaded, setApiLoaded] = useState(false)
  const playerRef = useRef<YTPlayer | null>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  // Load YouTube IFrame API
  useEffect(() => {
    if (typeof window !== "undefined" && !window.YT) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag)

      window.onYouTubeIframeAPIReady = () => {
        setApiLoaded(true)
      }
    } else if (window.YT) {
      setApiLoaded(true)
    }
  }, [])

  // Initialize player when API is ready
  useEffect(() => {
    if (!apiLoaded || playerRef.current) return

    playerRef.current = new window.YT.Player("youtube-player", {
      videoId: VIDEO_ID,
      playerVars: {
        autoplay: 1,
        mute: 1,
        loop: 1,
        playlist: VIDEO_ID,
        controls: 1,
        modestbranding: 1,
        rel: 0,
        enablejsapi: 1,
      },
      events: {
        onReady: (event) => {
          setPlayerReady(true)
        },
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            event.target.mute()
            setIsMuted(true)
          }
        },
      },
    })
  }, [apiLoaded])

  // Intersection Observer for scroll detection
  useEffect(() => {
    if (!videoContainerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && playerRef.current && !isMuted) {
          playerRef.current.mute()
          setIsMuted(true)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(videoContainerRef.current)

    return () => observer.disconnect()
  }, [isMuted])

  const handleUnmute = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.unMute()
      playerRef.current.setVolume(70)
      playerRef.current.seekTo(0)
      playerRef.current.playVideo()
      setIsMuted(false)
    }
  }, [])

  const handleMute = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.mute()
      setIsMuted(true)
    }
  }, [])

  return (
    <section className="bg-[#FFF9F0] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-sm bg-green-50 text-[#2d8f47] rounded-full px-4 py-1.5 font-medium mb-4">
            40 ANOS DE TRADICAO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d8f47] mb-3">
            40 Anos Cultivando Beleza
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Tradicao familiar agora disponivel para todo o Brasil
          </p>
        </div>

        {/* Video Container */}
        <div
          ref={videoContainerRef}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-green-100/30 hover:shadow-3xl transition-shadow duration-300"
        >
          {/* Aspect Ratio Container */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            {/* Loading Skeleton */}
            {!playerReady && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="text-gray-500 text-lg">Carregando video...</div>
              </div>
            )}

            {/* YouTube Player */}
            <div
              id="youtube-player"
              className="absolute top-0 left-0 w-full h-full"
            />

            {/* Unmute Button Overlay */}
            {isMuted && playerReady && (
              <button
                onClick={handleUnmute}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-6 py-4 rounded-full flex items-center gap-3 font-semibold text-base md:text-lg cursor-pointer hover:bg-black/80 hover:scale-105 transition-all duration-300 animate-pulse focus:outline-none focus:ring-2 focus:ring-[#2d8f47] focus:ring-offset-2"
                aria-label="Ativar som do video"
              >
                <VolumeX className="w-6 h-6" />
                <span className="hidden sm:inline">Toque aqui para ativar o som</span>
                <span className="sm:hidden">Toque para ouvir</span>
              </button>
            )}

            {/* Muted Indicator (when unmuted) */}
            {!isMuted && playerReady && (
              <button
                onClick={handleMute}
                className="absolute bottom-6 right-6 bg-[#2d8f47] text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium cursor-pointer hover:bg-[#236b38] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#2d8f47] focus:ring-offset-2"
                aria-label="Desativar som do video"
              >
                <Volume2 className="w-4 h-4" />
                <span>Som ativo</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
