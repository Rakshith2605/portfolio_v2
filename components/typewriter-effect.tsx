"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export default function TypewriterEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsTyping(false)
      }, pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isTyping) {
      if (displayText.length < texts[currentIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[currentIndex].substring(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        setIsPaused(true)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, deletingSpeed)
      } else {
        setCurrentIndex((currentIndex + 1) % texts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isTyping, isPaused, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <div className="inline-block">
      {displayText}
      <span className="animate-blink">|</span>
    </div>
  )
}

