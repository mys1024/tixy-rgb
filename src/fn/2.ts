import type { TixyFn } from '~/types'

export const fn: TixyFn = (t, i, x, y) => {
  const p = (a: number, b: number) =>
    hypot(x - a, y) / 5 + b * PI / 2 - t / 500
  return rgbPm1(
    (sin(p(7, 0)) + sin(p(8, 0))) / 2,
    (sin(p(7, 1)) + sin(p(8, 1))) / 2,
    (sin(p(7, 2)) + sin(p(8, 2))) / 2,
  )
}

export const code = `(t, i, x, y) => {
  const p = (a, b) =>
    hypot(x - a, y) / 5 + b * PI / 2 - t / 500
  return rgbPm1(
    (sin(p(7, 0)) + sin(p(8, 0))) / 2,
    (sin(p(7, 1)) + sin(p(8, 1))) / 2,
    (sin(p(7, 2)) + sin(p(8, 2))) / 2,
  )
}`
