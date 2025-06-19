'use client'
import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

export default function AnimatedTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      animate(titleRef.current, {
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutExpo',
      })
    }
  }, [])

  return (
    <h1 ref={titleRef} className="text-5xl font-bold text-neon drop-shadow-[0_0_15px_#00ffff]">
      Hi, I am Johnny 🚀
    </h1>
  )
}
