// src/hooks/useLenis.ts
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

type Options = ConstructorParameters<typeof Lenis>[0]

export function useLenis(selector?: string, opts?: Options) {
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // если передан селектор, используем кастомный wrapper (scroll-контейнер)
    const wrapper = selector ? (document.querySelector(selector) as HTMLElement | null) : undefined

    const lenis = new Lenis({
  duration: 0.6, // было 1.0 → станет быстрее и резче
  easing: (t: number) => 1 - Math.pow(1 - t, 2), 
  // плавная, но быстрее разгоняется и быстрее тормозит
  wrapper: wrapper ?? undefined,
  ...opts,
})

    function frame(time: number) {
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      lenis.destroy()
    }
  }, [selector, JSON.stringify(opts ?? {})])
}