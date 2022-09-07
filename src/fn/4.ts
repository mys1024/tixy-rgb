import type { TixyFn } from '~/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fn: TixyFn = (t, i, x, y) => {
  const r = 256 * random()
  const g = 256 * random()
  const b = 256 * random()
  return rgb(r, g, b)
}

export const intro = `(t, i, x, y) => {
  const r = 256 * random()
  const g = 256 * random()
  const b = 256 * random()
  return rgb(r, g, b)
}`
