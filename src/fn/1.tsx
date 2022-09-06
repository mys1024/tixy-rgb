import type { TixyFn } from '~/type'

export const fn: TixyFn = (t, i, x, y) => {
  const r = 128 + 128 * Math.sin(i + t / 100)
  const g = 128 + 128 * Math.sin(x + t / 100)
  const b = 128 + 128 * Math.sin(y + t / 100)
  const a = 255
  return [r, g, b, a]
}

export const intro = `(t, i, x, y) => {
  const r = 128 + 128 * Math.sin(i + t / 100)
  const g = 128 + 128 * Math.sin(x + t / 100)
  const b = 128 + 128 * Math.sin(y + t / 100)
  const a = 255
  return [r, g, b, a]
}`
