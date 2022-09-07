import type { TixyFn } from '~/types'

export const fn: TixyFn = (t, i, x, y) => {
  const z1 = 0.2 * sqrt((x - 7) ** 2 + y ** 2) - t / 500
  const z2 = 0.2 * sqrt((x - 8) ** 2 + y ** 2) - t / 500
  const r = 128 + 64 * (sin(z1) + sin(z2))
  const g = 128 + 64 * (sin(z1 + PI / 2) + sin(z2 + PI / 2))
  const b = 128 + 64 * (sin(z1 + PI) + sin(z2 + PI))
  const a = 255
  return rgba(r, g, b, a)
}

export const intro = `(t, i, x, y) => {
  const z1 = 0.2 * sqrt((x - 7) ** 2 + y ** 2) - t / 500
  const z2 = 0.2 * sqrt((x - 8) ** 2 + y ** 2) - t / 500
  const r = 128 + 64 * (sin(z1) + sin(z2))
  const g = 128 + 64 * (sin(z1 + PI / 2) + sin(z2 + PI / 2))
  const b = 128 + 64 * (sin(z1 + PI) + sin(z2 + PI))
  const a = 255
  return rgba(r, g, b, a)
}`
