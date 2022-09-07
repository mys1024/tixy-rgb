import type { TixyFn } from '~/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fn: TixyFn = (t, i, x, y) => {
  let [r, g, b] = [0, 0, 0]
  const a = 255
  const c = i % 3
  c === 0
    ? r = 255
    : c === 1
      ? g = 255
      : b = 255
  return [r, g, b, a]
}

export const intro = `(t, i, x, y) => {
  let [r, g, b] = [0, 0, 0]
  const a = 255
  const c = i % 3
  c === 0
    ? r = 255
    : c === 1
      ? g = 255
      : b = 255
  return [r, g, b, a]
}`
