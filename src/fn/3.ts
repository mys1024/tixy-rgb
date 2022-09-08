import type { TixyFn } from '~/types'

export const fn: TixyFn = (t, i, x, y) => {
  const w = (a: number, b: number) =>
    sin(hypot(x - a, y - b) / 5 - t / 500) / 4
  const r = sum([7, 8].map(j => w(j, j) + w(j, j + 1)))
  return rgbPm1(r, -1, -1)
}

export const code = `(t, i, x, y) => {
  const w = (a, b) =>
    sin(hypot(x - a, y - b) / 5 - t / 500) / 4
  const r = sum([7, 8].map(j => w(j, j) + w(j, j + 1)))
  return rgbPm1(r, -1, -1)
}`
