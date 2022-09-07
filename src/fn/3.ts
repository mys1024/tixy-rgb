import type { TixyFn } from '~/types'

export const fn: TixyFn = (t, i, x, y) => {
  const z1 = 0.2 * sqrt((x - 7) ** 2 + (y - 7) ** 2) - t / 500
  const z2 = 0.2 * sqrt((x - 7) ** 2 + (y - 8) ** 2) - t / 500
  const z3 = 0.2 * sqrt((x - 8) ** 2 + (y - 7) ** 2) - t / 500
  const z4 = 0.2 * sqrt((x - 8) ** 2 + (y - 8) ** 2) - t / 500
  const r = 128 + 32 * (sin(z1) + sin(z2) + sin(z3) + sin(z4))
  const g = 0
  const b = 0
  const a = 255
  return [r, g, b, a]
}

export const intro = `(t, i, x, y) => {
  const z1 = 0.2 * sqrt((x - 7) ** 2 + (y - 7) ** 2) - t / 500
  const z2 = 0.2 * sqrt((x - 7) ** 2 + (y - 8) ** 2) - t / 500
  const z3 = 0.2 * sqrt((x - 8) ** 2 + (y - 7) ** 2) - t / 500
  const z4 = 0.2 * sqrt((x - 8) ** 2 + (y - 8) ** 2) - t / 500
  const r = 128 + 32 * (sin(z1) + sin(z2) + sin(z3) + sin(z4))
  const g = 0
  const b = 0
  const a = 255
  return [r, g, b, a]
}`
