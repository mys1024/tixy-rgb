import type { TixyFn } from '~/types'

export const fn: TixyFn = (t, i, x, y) => {
  const z = 0.1 * (x + y) - t / 250
  const r = 128 + 128 * sin(z)
  const g = 128 + 128 * sin(z + PI / 2)
  const b = 128 + 128 * sin(z + PI)
  return rgb(r, g, b)
}

export const intro = `(t, i, x, y) => {
  const z = 0.1 * (x + y) - t / 250
  const r = 128 + 128 * sin(z)
  const g = 128 + 128 * sin(z + PI / 2)
  const b = 128 + 128 * sin(z + PI)
  return rgb(r, g, b)
}`
