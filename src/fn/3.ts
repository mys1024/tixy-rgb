import type { TixyFn } from '~/types'

export const fn: TixyFn = (t, i, x, y) => {
  const p = (a: number, b: number) =>
    hypot(x - a, y - b) / 5 - t / 500
  let r = 0
  r += sin(p(7, 7))
  r += sin(p(7, 8))
  r += sin(p(8, 7))
  r += sin(p(8, 8))
  return rgbPm1(r / 4, -1, -1)
}

export const code = `(t, i, x, y) => {
  const p = (a, b) =>
    hypot(x - a, y - b) / 5 - t / 500
  let r = 0
  r += sin(p(7, 7))
  r += sin(p(7, 8))
  r += sin(p(8, 7))
  r += sin(p(8, 8))
  return rgbPm1(r / 4, -1, -1)
}`
