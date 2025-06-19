'use client'

import { useEffect, useRef } from 'react'
import { animate, createScope, createSpring } from 'animejs'

export default function AnimatedBackground() {
  const rootRef = useRef<HTMLDivElement>(null)
  const scope = useRef<ReturnType<typeof createScope> | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    scope.current = createScope({ root }).add(() => {
      const particleContainer = document.createElement('div')
      particleContainer.className = 'absolute inset-0 overflow-hidden'
      root.appendChild(particleContainer)

      const particleElements = Array.from({ length: 40 }, () => {
        const span = document.createElement('span')
        span.className = 'particle'
        span.style.left = `${Math.random() * 100}%`
        span.style.top = `${Math.random() * 100}%`
        particleContainer.appendChild(span)
        return span
      })

      animate(particleElements,{
        translateY: [
          { to: '-10vh', ease: 'inOut(3)', duration: 2000 },
          { to: '10vh', ease: 'inOut(3)', duration: 2000 },
        ],
        direction: 'alternate',
        loop: true,
        delay: 100,
      })

      animate(particleElements,{
        scale: [
          { to: 1.4, ease: createSpring({ stiffness: 200 }) },
          { to: 1, ease: createSpring({ stiffness: 200 }) },
        ],
        direction: 'alternate',
        loop: true,
        delay: 200,
      })

      return () => {
        root.removeChild(particleContainer)
      }
    })

    return () => {
      scope.current?.revert()
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="absolute inset-0 z-0 bg-background bg-grid bg-[length:40px_40px] opacity-40"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent blur-2xl"></div>
    </div>
  )
}
