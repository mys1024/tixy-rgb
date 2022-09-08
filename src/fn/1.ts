import type { TixyFn } from '~/types'

export const fn: TixyFn = (t, i, x, y) => {
  const w = (a: number) => 128 + 128 * sin(
    0.1 * (x + y) + a * PI / 2 - t / 250,
  )
  return rgb(w(0), w(1), w(2))
}

export const code = `(t, i, x, y) => {
  const w = a => 128 + 128 * sin(
    0.1 * (x + y) + a * PI / 2 - t / 250,
  )
  return rgb(w(0), w(1), w(2))
}`
