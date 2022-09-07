import type { TixyFn } from '~/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fn: TixyFn = (t, i, x, y) => 0xFF << i % 3 * 8

export const intro = '(t, i, x, y) => 0xFF << i % 3 * 8'
