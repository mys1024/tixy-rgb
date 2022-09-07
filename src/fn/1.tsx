import type { TixyFn } from '~/types'

export const fn: TixyFn = (t, i, x, y) => {
  const z = x + y - t / 50
  const r = 128 + 128 * sin(0.1 * z)
  const g = 128 + 128 * sin(0.1 * z + PI / 2)
  const b = 128 + 128 * sin(0.1 * z + PI)
  const a = 255
  return [r, g, b, a]
}

export const intro = `(t, i, x, y) => {
  const z = x + y - t / 50
  const r = 128 + 128 * sin(0.1 * z)
  const g = 128 + 128 * sin(0.1 * z + PI / 2)
  const b = 128 + 128 * sin(0.1 * z + PI)
  const a = 255
  return [r, g, b, a]
}`
