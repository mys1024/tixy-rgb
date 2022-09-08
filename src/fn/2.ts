import type { TixyFn } from '~/types'

export const fn: TixyFn = (t, i, x, y) => {
  const p = (a: number, b: number) =>
    hypot(x - a, y) / 5 + b * PI / 2 - t / 500
  const w = (a: number) =>
    (sin(p(7, a)) + sin(p(8, a))) / 2
  return rgbPm1(w(0), w(1), w(2))
}

export const code = `(t, i, x, y) => {
  const p = (a, b) =>
    hypot(x - a, y) / 5 + b * PI / 2 - t / 500
  const w = a =>
    (sin(p(7, a)) + sin(p(8, a))) / 2
  return rgbPm1(w(0), w(1), w(2))
}`
